import { Portfolio } from '@/@types'
import { Button, Card, CardFooter, Image, User } from '@nextui-org/react'
import { Eye, ThumbsUp } from 'lucide-react'

interface PortfolioCardProps {
  portfolio: Portfolio
}

export function PortfolioCard({ portfolio }: PortfolioCardProps) {
  return (
    <Card isFooterBlurred className="min-h-[300px]">
      <Image
        src="https://cdn.sanity.io/images/tlr8oxjg/production/5c3120359be5c4f225cd7b817811217041b759ab-1192x668.png?w=3840&q=80&fit=clip&auto=format"
        alt="porfolio crad background"
        removeWrapper
        className="h-full w-full object-cover"
      />
      <CardFooter>
        <User
          name={portfolio.user.name + ' ' + portfolio.user.last_name}
          description={portfolio.user.title}
          avatarProps={{
            src: portfolio.user.avatar_url,
            isBordered: true,
            color: 'primary',
            style: { minWidth: '40px', height: '40px' },
          }}
        />

        <div className="flex gap-1">
          {/* <Button
            startContent={<Eye color="#9747ff" />}
            variant="light"
            color="primary"
            size="sm"
          > */}
          {/* </Button> */}
          <span className="text-purple-500 flex gap-2 items-center pl-3">
            <Eye color="#9747ff" />
            {portfolio.visited}
          </span>
          <Button
            className="text-base"
            startContent={<ThumbsUp color="#9747ff" />}
            variant="light"
            color="primary"
            size="sm"
          >
            {portfolio.likes}
          </Button>
        </div>
      </CardFooter>
    </Card>
  )
}
