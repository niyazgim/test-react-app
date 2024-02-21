import { ReactNode } from "react"

export type ProductType = {
  id: number | 0,
  imageUrl: string | null,
  name: string | "Test",
  price: number | 0,
  category_id?: number | 0,
}

export type UserType = {
  id: number | 0,
  imageUrl: string | null,
  name: string | "John Doe",
  email: string | "test@test.test",
  role_id?: number | 0,
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