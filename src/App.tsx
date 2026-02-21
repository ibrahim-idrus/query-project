import { useQuery } from '@tanstack/react-query'
import { fetchPost} from './query.tsx'
import type { Post } from './query.tsx'
import Homepage from './Homepage.tsx'
import PostDetail from './PostDetail.tsx'

// buat nampilin data API
function App() {
  const { data, isLoading, isError } = useQuery<Post[]>({
    queryKey: ["Posts"],
    queryFn: fetchPost
  })

  return (
    <>
      <Homepage />
      <main className="mx-auto max-w-6xl px-4 py-6">
        {isLoading && <p>Loading...</p>}
        {isError && <p>Error...</p>}

        {!isLoading && !isError && (
          <section className='grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3'>
            {data?.map((post) => (
              <PostDetail key={post.id} post={post} />
            ))}
          </section>
        )}
      </main>
    </>
  )
}

export default App
