import { useState } from "react";
import { useForm } from 'react-hook-form';
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import axios from "axios";

interface FormData {
  title: string,
  body: string,
  authorId: string,
}

type Author = {
  name: {
    firstName: string,
    lastName: string,
  }
  id: number,
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
  const [authorSearchText, setAuthorSearchText] = useState("");
  const [authors, setAuthors] = useState<Author[]>([]);
  const [selectedAuthor, setSelectedAuthor] = useState<Author | null>(null);

  const { register, handleSubmit, formState: { errors } } = useForm<FormData>({ mode: "onChange", resolver: yupResolver(schema), });

  async function handleAuthorSearch(e: React.ChangeEvent<HTMLInputElement>) {
    setAuthorSearchText(e.target.value);
    setAuthors([]);
    try {
      setIsAuthorsFetching(true);
      const request = await axios.get(`https://dummyjson.com/users/search?q=${e.target?.value}`);
      const response = request.data.users;
      response.map((el: authorRequest) => {
        const author: Author = {
          name: {
            firstName: el.firstName ? el.firstName : "",
            lastName: el.lastName ? el.lastName : "",
          },
          id: el.id,
        }
        setAuthors([...authors, author]);
      });
      setIsAuthorsFetching(false);
    } catch (error) {
      console.error('Error fetching author:', error);
    }
  }
  const handleAuthorSelection = (author: Author) => {
    setAuthorSearchText("");
    setAuthors([]);
    setSelectedAuthor(author);
  }

  const onSubmit = async (data: FormData) => {
    const request = await axios({
      method: "POST",
      url: 'https://jsonplaceholder.typicode.com/posts',
      data: JSON.stringify({
        title: data.title,
        body: data.body,
        userId: selectedAuthor?.id,
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
                  <div className="mt-2">
                    <div className="relative w-full flex flex-col gap-1">
                      <label className="text-white font-medium text-xl">Выберите автора</label>
                      <div>
                        <div className="relative">
                          <div className="flex justify-between items-center h-10 rounded-lg bg-transparent border border-gray-700 outline-none py-1 px-2 w-full">
                            <input {...register("authorId")} onChange={handleAuthorSearch} readOnly={selectedAuthor ? true : false}
                              placeholder="Найти автора"
                              value={selectedAuthor ? `${selectedAuthor.id}` : authorSearchText}
                              className={selectedAuthor ? `opacity-0 w-0 h-0` : `text-white w-full h-full bg-transparent border-0 outline-none`}
                            />
                            {selectedAuthor ? (
                              <>
                                <p className="text-left w-full text-white">{`${selectedAuthor.name.firstName} ${selectedAuthor?.name.lastName}#${selectedAuthor.id}`}</p>
                                <button onClick={() => { setSelectedAuthor(null) }}>
                                  <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M6.61136 19.1859L5.21136 17.7859L10.8114 12.1859L5.21136 6.58591L6.61136 5.18591L12.2114 10.7859L17.8114 5.18591L19.2114 6.58591L13.6114 12.1859L19.2114 17.7859L17.8114 19.1859L12.2114 13.5859L6.61136 19.1859Z" fill="#F0F0F0" />
                                  </svg>
                                </button>
                              </>
                            ) : null}
                          </div>
                          <div className="absolute w-full mt-3 dark:bg-gray-800 overflow-auto rounded-xl">
                            {isAuthorsFetching && (
                              <div className="w-full flex items-center justify-center py-3 px-4">
                                <div className="lds-ring h-5 w-5"><div></div><div></div><div></div><div></div></div>
                              </div>
                            )}
                            {authors.map((author: Author, key) => (
                              <button key={key} onClick={() => handleAuthorSelection(author)} className="w-full text-left py-3 px-4">
                                <p className="text-gray-200">{`${author.name.firstName} ${author.name.lastName}#${author.id}`}</p>
                              </button>
                            ))}
                          </div>
                        </div>
                      </div>
                      {/* value={selectedAuthor ? selectedAuthor.id : ""} */}
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