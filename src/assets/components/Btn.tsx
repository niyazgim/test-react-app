import { PropsType } from "../../types"


const Btn = ({ children }: PropsType): JSX.Element => {
  return (
    <button className="flex justify-center items-center">
      {children}
    </button>
  )
}

export default Btn