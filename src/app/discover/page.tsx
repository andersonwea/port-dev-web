import { getPortfolios } from '@/actions/portfolio/getPortfolios'
import { Input } from '@nextui-org/react'
import { Search } from 'lucide-react'
import { LoadMorePortfolios } from './components/LoadMorePortfolios'

export default async function Discover() {
  const page = 1

  const portfolios = await getPortfolios(page)

  return (
    <main id="discover">
      <div className="max-w-[400px] mx-auto mt-14">
        <label className=" text-3xl font-bold block text-center">
          Descobrir
          <div className="mt-14 flex space-x-4 items-center">
            <Input size="sm" />
            <Search color="#9747ff" size={34} />
          </div>
        </label>
      </div>

      <section className="grid grid-cols-3 gap-9 mt-14">{portfolios}</section>
      <LoadMorePortfolios />
    </main>
  )
}
