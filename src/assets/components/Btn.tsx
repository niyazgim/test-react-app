type Props = {
  children: string | JSX.Element | JSX.Element[],
}
const Btn = ({ children }: Props): JSX.Element => {
  return (
    <button className="flex justify-center items-center">
      {children}
    </button>
  )
}

export default Btn