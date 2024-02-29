import { useState } from "react";
import { useForm } from 'react-hook-form';
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import axios from "axios";

export default function AddNewsModal(): JSX.Element {
  interface FormData {
    title: string;
    body: string;
  }

  const schema = yup.object().shape({
    title: yup.string().required("Введите заголовок").min(3, "Минимальный размер - 3 символа"),
    body: yup.string().required("Введите текст новости").min(10, "Минимальный размер - 10 символов"),
  });

  const [showModal, setShowModal] = useState(false);
  const { register, handleSubmit, formState: { errors } } = useForm<FormData>({ mode: "onBlur", resolver: yupResolver(schema), });

  const onSubmit = async (data: FormData) => {
    const request = await axios({
      method: "POST",
      url: 'https://jsonplaceholder.typicode.com/posts',
      data: JSON.stringify({
        title: data.title,
        body: data.body,
        userId: 1,
      }),
    });
    const response = request.data;
    console.log(response);
  };

  return (
    <>
      <button className="rounded px-5 py-3 bg-purple-400" onClick={() => setShowModal(true)}>
        Create news
      </button>
      {showModal && (
        <dialog className="flex justify-center items-center bg-transparent overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
          <div className="relative my-6 mx-auto max-w-4xl">
            <div className="py-5 border-0 rounded-lg shadow-lg relative flex flex-col w-96 bg-gray-900 outline-none focus:outline-none">
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
                  <button className="w-full py-3 px-5 mt-12 bg-purple-400 text-white rounded">
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