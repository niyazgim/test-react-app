import { PropsType } from "../../types"

export function NavLinks({ children }: PropsType): JSX.Element {
  return (
    <ul className="w-fit flex gap-3 pl-3 border-l-2 border-gray-300">
      {children}
    </ul>
  )
}