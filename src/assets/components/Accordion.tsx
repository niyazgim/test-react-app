import { useState } from "react"

interface AccordionProps {
  question: string,
  answer: string,
}

export default function Accordion({ question, answer }: AccordionProps): JSX.Element {
  const [isOpened, setIsOpened] = useState<boolean>(false);

  return (
    <div className="w-full">
      <button onClick={() => setIsOpened(!isOpened)}
        className="w-full pb-2 border-b border-b-gray-500 flex justify-between items-center">
        <span>{question}</span>
        <svg className={`${isOpened ? `rotate-0` : `rotate-45`} h-6 w-6`} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M6.61136 19.1859L5.21136 17.7859L10.8114 12.1859L5.21136 6.58591L6.61136 5.18591L12.2114 10.7859L17.8114 5.18591L19.2114 6.58591L13.6114 12.1859L19.2114 17.7859L17.8114 19.1859L12.2114 13.5859L6.61136 19.1859Z" fill="#F0F0F0" />
        </svg>
      </button>
      <div className={`${isOpened ? `block` : 'hidden'} mt-4`}>
        {answer}
      </div>
    </div>
  )
}