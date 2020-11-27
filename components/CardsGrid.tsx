// ui components
import { Grid } from '@chakra-ui/react'
import { motion } from 'framer-motion'

// components
import Card from '@/components/Card'

// types
interface CardsGridProps {
  posts: {
    title: string
    description: string
    published: string
    category: string
    slug: string
  }[]
}

// motion components
const MotionGrid = motion.custom(Grid)

// variants
const cardsGridVariant = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
    },
  },
}

const CardsGrid = ({ posts }: CardsGridProps): JSX.Element => (
  <MotionGrid
    gap={8}
    templateColumns={{ md: 'repeat(auto-fit, minmax(400px, 400px))' }}
    animate="show"
    initial="hidden"
    variants={cardsGridVariant}
  >
    {posts.map(({ category, title, slug }) => (
      <Card key={slug} theme={category} title={title} slug={slug} />
    ))}
  </MotionGrid>
)

export default CardsGrid
