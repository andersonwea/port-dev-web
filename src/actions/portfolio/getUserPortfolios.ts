'use server'

import { Portfolio } from '@/@types'

export async function getUserPortfolios() {
  try {
    const response = await fetch(
      `http://localhost:3001/portfolios?_expand=user&userId=1`,
    )

    const portfolios = (await response.json()) as Portfolio[]

    return {
      portfolios,
    }
  } catch (err) {
    console.log(err)

    throw new Error('Erro ao encontrar os portfolios')
  }
}
