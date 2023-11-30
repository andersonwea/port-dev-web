'use client'

import { Button, Link, Spinner } from '@nextui-org/react'
import { useInView } from 'react-intersection-observer'
import React from 'react'
import {
  PortfolioCardElement,
  getPortfolios,
} from '@/actions/portfolio/getPortfolios'
import { ArrowUp } from 'lucide-react'

let page = 2
let end = false

export function LoadMorePortfolios() {
  const [portfolios, setPortfolios] = React.useState<PortfolioCardElement[]>([])
  const { ref, inView } = useInView()

  React.useEffect(() => {
    if (inView) {
      getPortfolios(page).then((res) => {
        if (res.length === 0) {
          return (end = true)
        }

        setPortfolios([...portfolios, ...res])
        page++
      })
    }
  }, [inView, portfolios])

  return (
    <section>
      <div className="grid grid-cols-3 gap-9 mt-14">{portfolios}</div>
      <div className="mx-auto w-12 mt-5" ref={ref}>
        {end ? (
          <Button
            as={Link}
            href="#discover"
            variant="solid"
            color="primary"
            endContent={<ArrowUp />}
            className="my-4 text-base"
          >
            Inicio
          </Button>
        ) : (
          <Spinner color="secondary" />
        )}
      </div>
    </section>
  )
}
