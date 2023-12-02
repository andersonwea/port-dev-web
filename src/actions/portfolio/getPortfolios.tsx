'use server'

import { Portfolio } from '@/@types'
import { PortfolioCard } from '@/app/discover/components/PortfolioCard'

export type PortfolioCardElement = JSX.Element

interface GetPortfoliosProps {
  search: string
  page: number
}

export async function getPortfolios({ search, page }: GetPortfoliosProps) {
  const url = `http://localhost:3001/portfolios?_page=${page}&_limit=6&_expand=user`

  try {
    const response = await fetch(url, { cache: 'no-cache' })

    const portfolios = (await response.json()) as Portfolio[]

    return portfolios.map((portfolio, index) => (
      <PortfolioCard key={portfolio.id} portfolio={portfolio} index={index} />
    ))
  } catch (err) {
    if (err instanceof Error) console.log(err.message)

    throw err
  }
}
