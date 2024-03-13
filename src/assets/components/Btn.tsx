import { Link } from "react-router-dom";

interface BtnProps {
  children?: React.ReactNode | string;
  className?: string,
  onClick?: React.MouseEventHandler,
}

export default function Btn({ children, className, onClick }: BtnProps) {
  return (
    <button
      onClick={onClick}
      className={`
      ${className ? className : ``}
      w-fit py-4 px-6 rounded-md flex justify-center items-center 
    dark:bg-brand-dark hover:bg-brand-dark--hover 
      transition-all ease-out duration-250"
      `}
    >{children}</button>
  )
}

interface LinkBtnProps {
  to: string,
  children?: React.ReactNode | string;
  className?: string,
  onClick?: React.MouseEventHandler,
}

export function LinkBtn({ to, children, className, onClick }: LinkBtnProps) {
  return (
    <Link
      to={to}
      onClick={onClick}
      className={`
      ${className ? className : ``}
      w-fit py-4 px-6 rounded-md flex justify-center items-center 
    dark:bg-brand-dark hover:bg-brand-dark--hover 
      transition-all ease-out duration-250"
      `}
    >{children}</Link>
  )
}

interface IconBtnProps {
  children?: React.ReactNode | string;
  className?: string,
  onClick?: React.MouseEventHandler,
}

export function IconBtn({ children, className, onClick }: IconBtnProps) {
  return (
    <button
      onClick={onClick}
      className={`
      ${className ? className : ``}
      p-2 rounded-xl flex justify-center items-center 
    hover:dark:bg-neutral-800 transition-all ease-out`}
    >
      {children}
    </button>
  )
}