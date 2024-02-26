// import { Link } from "react-router-dom";
import { NewsType } from "../../types";

import Skeleton, { SkeletonTheme } from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

export default function NewsCard( news: NewsType): JSX.Element {
  return (
    <SkeletonTheme baseColor="#202020" highlightColor="#444">
      <article className="w-full flex gap-3">
        <div className="w-12 h-12 rounded overflow-hidden">
          {/* <Link to={"/users/" + news.id}>
            <UserImage isSmall imageUrl={news.imageUrl} altText={`news avatar`} />
          </Link> */}
        </div>
        <div className="w-full">
          <p className="text-sm text-gray-500">{!news.title ? <Skeleton /> : `${news.title}`}</p>
          <h3 className="mt-1 text-xl font-semibold">{!news.body ? <Skeleton /> : news.body}</h3>
          <menu className="mt-1 flex justify-between items-center">
            <div className="flex items-center gap-1">
            </div>
          </menu>
        </div>
      </article>
    </ SkeletonTheme>
  )
}