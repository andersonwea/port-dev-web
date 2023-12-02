import { getPortfolios } from '@/actions/portfolio/getPortfolios'
import { LoadMorePortfolios } from './components/LoadMorePortfolios'
import { Search } from './components/Search'
import { getSkills } from '@/actions/skill/getSkills'

interface DiscorverProps {
  searchParams: {
    techs: string
  }
}

export default async function Discover({ searchParams }: DiscorverProps) {
  const page = 1

  const portfolios = await getPortfolios({
    page,
    search: searchParams.techs,
  })
  const { skills } = await getSkills()

  return (
    <main id="discover">
      <Search skills={skills} />

      <section className="grid grid-cols-3 gap-9 mt-14">{portfolios}</section>
      <LoadMorePortfolios />
    </main>
  )
}
