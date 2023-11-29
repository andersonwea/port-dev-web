import { Input } from '@nextui-org/react'
import { Search } from 'lucide-react'

export default function Discover() {
  return (
    <div className="max-w-[400px] mx-auto mt-14">
      <label className=" text-3xl font-bold block text-center">
        Descobrir
        <div className="mt-14 flex space-x-4 items-center">
          <Input size="sm" />
          <Search color="#9747ff" size={34} />
        </div>
      </label>
    </div>
  )
}
