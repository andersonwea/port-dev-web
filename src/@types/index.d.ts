export type User = {
  name: string
  last_name: string
  avatar_url: string
  title: string
  job_level: string
}

export type Portfolio = {
  id: string
  published: boolean
  likes: number
  visited: number
  user: User
}
