import { Link } from "react-router-dom";
import { UserType } from "../../types";
import UserImage from "./UserImage";

import Skeleton, { SkeletonTheme } from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

export default function UserCard( user: UserType): JSX.Element {
  return (
    <SkeletonTheme baseColor="#202020" highlightColor="#444">
      <article className="w-full flex gap-3">
        <div className="w-12 h-12 rounded-full overflow-hidden">
          <Link to={"/users/" + user.id}>
            <UserImage isSmall imageUrl={user.imageUrl} altText={`user avatar`} />
          </Link>
        </div>
        <div className="w-full">
          <p className="text-sm text-gray-500">{!user.username ? <Skeleton /> : `@${user.username}`}</p>
          <h3 className="mt-1 text-xl font-semibold"><span>{!user.name.first ? <Skeleton /> : user.name.first}</span> <span>{!user.name.last ? <Skeleton /> : user.name.last}</span></h3>
          <div className="mt-1 flex justify-between items-center">
            <div className="flex items-center gap-1">
            </div>
          </div>
        </div>
      </article>
    </ SkeletonTheme>
  )
}