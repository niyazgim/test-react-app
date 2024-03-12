import { useState } from "react";
import { Link } from "react-router-dom";

type dropdownBtnProps = {
  title: string,
  value: string,
}

export default function BtnsDropdown(dropdownBtns: dropdownBtnProps[], selectMsg: string): JSX.Element {
  const [selectedOption, setSelectedOption] = useState("");
  return (
    <div className="relative">
      <div className="py-1 px-2 flex items-center justify-between border border-gray-700 rounded-md w-72">
        <span>{selectedOption ? selectedOption : selectMsg}</span>
        <svg className="w-5 h-5" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 15.375L6 9.37498L7.4 7.97498L12 12.575L16.6 7.97498L18 9.37498L12 15.375Z" fill="white" />
        </svg>
      </div>
      <div className="bg-gray-900 rounded-xl overflow-hidden absolute top-10 z-50 left-0">
        {dropdownBtns.map(dropdownBtn => (
          <Link className="w-full py-2 px-3 inline-block hover:bg-gray-700" to={`/catalog/?sort=${dropdownBtn.value}`}
          onClick={() => setSelectedOption(dropdownBtn.title)}>
            {dropdownBtn.title}
          </Link>
          ))}
      </div>
    </div>
  )
}