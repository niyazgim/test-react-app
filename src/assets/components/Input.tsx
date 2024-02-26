import { InputTypesEnum } from "../../enums"

interface InputProps {
  type: InputTypesEnum,
  name: string,
  id: string | null,
  placeholder: string | null,
}

export default function Input({ type, name, id, placeholder }: InputProps): JSX.Element {
  if (type === InputTypesEnum.bigText) {
    return (
      <label
        htmlFor={id ? id : ""}
        className="relative block overflow-hidden border-b border-gray-200 bg-transparent pt-3 focus-within:border-blue-600 dark:border-gray-700"
      >
        <textarea
          id={id ? id : ""}
          placeholder={placeholder ? placeholder : ""}
          name={name}
          className="resize-y peer h-8 w-full border-none bg-transparent p-0 placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm dark:text-white"
        >
        </textarea>

        <span
          className="absolute start-0 top-2 text-xs text-gray-700 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:text-xs peer-focus:-top-2 dark:text-gray-200"
        >
          {placeholder ? placeholder : ""}
        </span>
      </label>
    )
  } else {
    return (
      <label
        htmlFor={id ? id : ""}
        className="relative block overflow-hidden border-b border-gray-200 bg-transparent pt-3 focus-within:border-blue-600 dark:border-gray-700"
      >
        <input
          type={type}
          id={id ? id : ""}
          placeholder={placeholder ? placeholder : ""}
          name={name}
          className="peer h-8 w-full border-none bg-transparent p-0 placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm dark:text-white"
        />

        <span
          className="absolute start-0 top-2 -translate-y-1/2 text-xs text-gray-700 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-2 peer-focus:text-xs dark:text-gray-200"
        >
          {placeholder ? placeholder : ""}
        </span>
      </label>
    )
  }
}
