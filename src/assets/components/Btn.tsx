import { PropsType } from "../../types"


const Btn = ({ children }: PropsType): JSX.Element => {
  return (
    <button className="h-8 p-1 flex justify-center items-center">
      {children}
    </button>
  )
}

export default Btn