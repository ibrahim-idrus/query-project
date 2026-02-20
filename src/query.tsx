export interface Post {
  userId: number
  id: number
  title: string
  body: string
}

export const fetchPost = async (): Promise<Post[]> => {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts')

  if (!response.ok)
    throw new Error("Error fetching data")
  return response.json()
}
