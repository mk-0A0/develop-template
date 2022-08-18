import { useQuery } from '@apollo/client'
import { Text } from '@chakra-ui/react'
import type { NextPage } from 'next'
import { PostsDocument } from './posts.generate.graphql'

const Home: NextPage = () => {
  const { data } = useQuery(PostsDocument)
  return (
    <>
      {data?.posts.map((post) => (
        <Text key={post.id}>{post.title}</Text>
      ))}
    </>
  )
}

export default Home
