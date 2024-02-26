import { useState } from "react";
import { InputTypesEnum } from "../../../enums";
import Input from "../Input";

export default function AddNewsModal(): JSX.Element {
  const [showModal, setShowModal] = useState(false);
  return (
    <>
      <button className="rounded px-5 py-3 bg-purple-400" onClick={() => setShowModal(true)}>
        Create news
      </button>
      {showModal ? (
        <>
          <dialog className="flex justify-center items-center bg-transparent overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative my-6 mx-auto max-w-4xl">
              <div className="py-5 border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-gray-900 outline-none focus:outline-none">
                <div className="px-5">
                  <form method="post" className="w-full">
                    <Input type={InputTypesEnum.text} name={"test"} id={null} placeholder={"test"} />
                    {/* made normal placeholder for textarea */}
                    <Input type={InputTypesEnum.bigText} name={"test"} id={null} placeholder={"test"} />

                    <button className="w-full py-3 px-5 mt-12 bg-purple-400 text-white rounded">
                      Добавить новость
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </dialog>
        </>
      ) : null}
    </>
  );
}