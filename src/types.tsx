import { ReactNode } from "react"

export type ProductType = {
  id: number | 0,
  imageUrl: string | null,
  name: string | "Test",
  price: number | 0,
  category_id?: number | 0,
}

export type UserType = {
  id: number | null,
  imageUrl: string | null,
  name: {
    first: string | null,
    last: string | null,
  },
  email: string | null,
  username: string | null,
  role_id?: number | null,
}

export type NewsType = {
  id: number | null,
  userId: number | null,
  title: string | null,
  body: string | null,
}

export type LinksType = {
  url: string,
  name: string | "",
}

export type CategoryType = {
  id: number | null,
  name: string | "",
}

export type RoleType = {
  id: number | null,
  name: string | "",
  key: string | "",
}

export type PropsType = {
  children: string | JSX.Element | JSX.Element[] | ReactNode,
}