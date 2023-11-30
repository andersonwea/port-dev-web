'use server'

import { Portfolio } from '@/@types'
import { PortfolioCard } from '@/app/discover/components/PortfolioCard'

export type PortfolioCardElement = JSX.Element

export async function getPortfolios(page: number) {
  try {
    const response = await fetch(
      `http://localhost:3001/portfolios?_page=${page}&_limit=6`,
    )

    const portfolios = (await response.json()) as Portfolio[]

    return portfolios.map((portfolio, index) => (
      <PortfolioCard key={portfolio.id} portfolio={portfolio} index={index} />
    ))
  } catch (err) {
    if (err instanceof Error) console.log(err.message)

    throw err
  }
}
