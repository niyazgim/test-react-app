import { Link } from "react-router-dom";

export interface BannerCardProps {
  linkTo: string | "/",
  image: string,
  title: string,
}

export default function BannerCard({ linkTo, image, title }: BannerCardProps) {
  return (
    <Link to={linkTo} className="relative w-96 group outline-none">
      <img src={image} alt={title} />
      <div className="
      absolute bottom-0 left-0 w-full h-24 transition-all ease-out duration-[350ms]
      text-md font-medium
      group-hover:h-full group-hover:text-2xl group-hover:font-semibold
      bg-gradient-to-t dark:from-main-bg-dark flex items-center justify-center"
      >
        {title}
      </div>
    </Link>
  )
}