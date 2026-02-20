import { useQuery } from '@tanstack/react-query'
import { fetchPost} from './query.tsx'
import type { Post } from './query.tsx'
import Homepage from './Homepage.tsx'
import { Card, CardContent, CardHeader, CardTitle } from './components/ui/card.tsx'

// buat nampilin data API
function App() {
  const { data, isLoading, isError } = useQuery<Post[]>({
    queryKey: ["Posts"],
    queryFn: fetchPost
  })

  return (
    <>
    <main className="mx-auto max-w-6xl px-4 py-6">
        {isLoading && <p>Loading...</p>}
        {isError && <p>Error...</p>}

{/*data?.map((post) => nya itu sampai bawah sebelum section agar kebaca  */}
        <Homepage />
        <section className='grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3'>
          {data?.map((post) => (
            <Card key={post.id} className='h-full'>
              <CardHeader>
                <CardTitle className="line-clamp-2 text-base">
                  {post.title}
                </CardTitle>    
              </CardHeader>
{/* post.title,id,dan body ini diambil dari query.tsx */}
{/* tips nya klo kmu bingung itu karna kebanyakan tag cek aja sesuai namanya classname itu kek css nya dan sisanya kek teg buat ngsih tu itu apa, terus klo ada {} itu berarti logicnya */}
              <CardContent>
                <p className="line-clamp-4 text-sm text-muted-foreground">
                  {post.body}
                </p>
              </CardContent>
            </Card>
                ))}
        </section>
    </main>
    </>
  )
}

export default App
