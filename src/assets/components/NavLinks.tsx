import { PropsType } from "../../types"


export default function NavLinks({ children }: PropsType): JSX.Element {
  return (
    <ul className="w-fit flex gap-3 pl-3 border-l-2 border-gray-300">
      {children}
    </ul>
  )
}
export function FooterLinks({ children }: PropsType): JSX.Element {
  return (
    <ul className="mt-2 w-full list-none flex flex-col gap-1">
      {children}
    </ul>
  )
}