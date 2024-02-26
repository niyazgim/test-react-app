import { Link } from "react-router-dom";
import { NewsType } from "../../../types";

import Skeleton, { SkeletonTheme } from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import NewsImage from "../images/NewsImage";

export default function NewsCard(news: NewsType): JSX.Element {
  return (
    <SkeletonTheme baseColor="#202020" highlightColor="#444">
      <article className="w-full">
        <div className="w-full aspect-video rounded overflow-hidden">
          <Link to={"/users/" + news.id}>
            <NewsImage imageUrl={news.imageUrl} altText={`news avatar`} />
          </Link>
        </div>
        <div className="w-full mt-3">
          <p className="text-2xl font-medium text-gray-700">{!news.title ? <Skeleton /> : `${news.title}`}</p>
          <h3 className="mt-1 text-sm text-gray-300">{!news.body ? <Skeleton /> : news.body}</h3>
          <menu className="mt-1 flex justify-between items-center">
            <div className="flex items-center gap-1">
            </div>
          </menu>
        </div>
      </article>
    </ SkeletonTheme>
  )
}