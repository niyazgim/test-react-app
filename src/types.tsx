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
  name: {
    first: string | "John",
    last: string | "Doe",
  },
  email: string | "test@test.test",
  username: string | "",
  role_id?: number | 0,
  loading?: boolean | false,
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