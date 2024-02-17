import { ReactNode } from "react"

export type ProductType = {
  id: number | 0,
  imageUrl: string | null,
  name: string | "image",
  price: number | 0,
  category_id?: number | 0,
}

export type LinksType = {
  url: string,
  name: string | "",
}

export type CategoryType = {
  id: number | null,
  name: string | "",
}

export type PropsType = {
  children: string | JSX.Element | JSX.Element[] | ReactNode,
}