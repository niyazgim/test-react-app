import { useEffect, useState } from "react";
import { Controller, useForm } from 'react-hook-form';
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import axios from "axios";
import AsyncSelect from "react-select/async";

interface FormData {
  title: string,
  body: string,
  authorId: string,
}
interface authorRequest {
  firstName: string,
  lastName: string,
  id: number,
}

const schema = yup.object().shape({
  title: yup.string().required("Введите заголовок").min(3, "Минимальный размер - 3 символа"),
  body: yup.string().required("Введите текст новости").min(10, "Минимальный размер - 10 символов"),
  authorId: yup.string().required("Выберите автора"),
});

export default function AddNewsModal(): JSX.Element {
  const [showModal, setShowModal] = useState<boolean>(false);
  const [isAuthorsFetching, setIsAuthorsFetching] = useState<boolean>(false);
  const [isSubmitSuccessful, setIsSubmitSuccessful] = useState<boolean>(false);

  const { register, handleSubmit, formState: { errors }, reset, control } = useForm<FormData>({ mode: "onBlur", resolver: yupResolver(schema), });

  const handleAuthorSearch = async (inputValue: string) => {
    if (!isAuthorsFetching && inputValue.length > 0) {
      try {
        setIsAuthorsFetching(true);
        const request = await axios.get(`https://dummyjson.com/users/search?q=${inputValue}`)
        const response = request.data.users;
        const res = response.map((item: authorRequest) => ({
          value: item.id,
          label: `${item.firstName} ${item.lastName}`,
        }));
        setIsAuthorsFetching(false);
        return res;
      } catch (error) {
        console.error('Error fetching author:', error);
        return [];
      }
    }
  };

  const onSubmit = async (data: FormData) => {
    const request = await axios({
      method: "POST",
      url: 'https://jsonplaceholder.typicode.com/posts',
      data: JSON.stringify({
        title: data.title,
        body: data.body,
        userId: data.authorId,
      }),
    });
    const response = request.data;
    console.log(response);
    setIsSubmitSuccessful(true);
    setShowModal(false);
  };

  useEffect(() => {
    if (showModal)
      document.body.classList.add("overflow-y-hidden")
    else
      document.body.classList.remove("overflow-y-hidden")
  }, [showModal]);

  useEffect(() => {
    reset();
    setIsSubmitSuccessful(false);
  }, [isSubmitSuccessful, reset]);

  return (
    <>
      <button className="rounded px-5 py-3 bg-purple-400" onClick={() => setShowModal(true)}>
        Create news
      </button>
      {showModal && (
        <dialog className="flex justify-center items-center bg-transparent overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
          <div className="relative my-6 mx-auto max-w-4xl">
            <div className="py-5 border-0 rounded-lg shadow-lg relative flex flex-col w-96 bg-gray-900 outline-none focus:outline-none">
              <button onClick={() => setShowModal(false)} className="absolute top-2 right-2 ">
                <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M6.61136 19.1859L5.21136 17.7859L10.8114 12.1859L5.21136 6.58591L6.61136 5.18591L12.2114 10.7859L17.8114 5.18591L19.2114 6.58591L13.6114 12.1859L19.2114 17.7859L17.8114 19.1859L12.2114 13.5859L6.61136 19.1859Z" fill="#F0F0F0" />
                </svg>
              </button>
              <div className="px-5">
                <form method="post" className="w-full" onSubmit={handleSubmit(onSubmit)}>
                  <div className="mt-2">
                    <div className="relative w-full flex flex-col gap-1">
                      <label className="text-white font-medium text-xl">Введите заголовок</label>
                      <input {...register("title")}
                        className="text-white rounded-lg bg-transparent border border-gray-700 outline-none py-1 px-2"
                      />
                    </div>
                    {errors.title && <p className="mt-1 text-red-600 ">{errors.title.message}</p>}
                  </div >
                  <div className="mt-2">
                    <div className="relative w-full flex flex-col gap-1">
                      <label className="text-white font-medium text-xl">Введите текст</label>
                      <textarea {...register("body")}
                        className="text-white rounded bg-transparent border border-gray-700 min-h-12 outline-none py-1 px-2"
                      >
                      </textarea>
                    </div>
                    {errors.body && <p className="mt-1 text-red-600 ">{errors.body.message}</p>}
                  </div >
                  <div className="mt-2">
                    <div className="relative w-full flex flex-col gap-1">
                      <label className="text-white font-medium text-xl">Выберите автора</label>
                      <div>
                        <div className="relative">
                          <Controller
                            name="authorId"
                            control={control}
                            render={({ field }) => (
                              <AsyncSelect
                                {...field}
                                cacheOptions
                                defaultOptions
                                loadOptions={handleAuthorSearch}
                                getOptionValue={(option) => { const temp = option as unknown as { value: string, label: string; }; return `${temp.value}` }}
                                onChange={(selectedOption) => {
                                  const temp = selectedOption as unknown as { value: string, label: string; };
                                  field.onChange(temp.value);
                                  
                                }}
                                getOptionLabel={(option) => { const temp = option as unknown as { value: string, label: string; }; return `${temp.label}` }}
                                placeholder="Select an option"
                              />
                            )}
                          />
                        </div>
                      </div>
                    </div>
                    {errors.authorId && <p className="mt-1 text-red-600 ">{errors.authorId.message}</p>}
                  </div >
                  <button type="submit" className="w-full py-3 px-5 mt-12 bg-purple-400 text-white rounded">
                    Добавить новость
                  </button>
                </form>
              </div>
            </div>
          </div>
        </dialog>
      )}
    </>
  );
}