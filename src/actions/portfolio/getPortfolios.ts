'use server'

import { Portfolio } from '@/@types'

interface getPortfoliosResponse {
  portfolios: Portfolio[]
}

export async function getPortfolios(
  page: number,
): Promise<getPortfoliosResponse> {
  try {
    const response = await fetch(
      `http://localhost:3001/portfolios?_page=${page}&_limit=9`,
    )

    const portfolios = await response.json()

    return {
      portfolios,
    }
  } catch (err) {
    if (err instanceof Error) console.log(err.message)

    throw err
  }
}
