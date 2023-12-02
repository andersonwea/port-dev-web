export type User = {
  name: string
  lastName: string
  avatarUrl: string
  title: string
  jobLevel: string
}

export type Portfolio = {
  id: string
  published: boolean
  likes: number
  visited: number
  user: User
}

export type Skills = {
  id: string
  name: string
}
