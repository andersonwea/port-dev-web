'use server'

import { Skills } from '@/@types'

export async function getSkills() {
  try {
    const response = await fetch('http://localhost:3001/skills')

    const skills = (await response.json()) as Skills[]

    return {
      skills,
    }
  } catch (err) {
    console.log(err)

    throw new Error('Falha ao obter as skills.')
  }
}
