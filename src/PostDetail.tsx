import { useState } from "react"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from '@/components/ui/dialog'
import { Card, CardContent, CardHeader, CardTitle } from "./components/ui/card"
import type {Post} from './query'

// dipake nanti buat di app agar app bisa manggil card dan postcard
interface PostCardProps {
  post: Post
}

export default function PostDetail({ post }: PostCardProps) {
  const [open, setOpen] = useState(false)

  return (
    <>
      <Card className="h-full cursor-pointer transition hover:shadow-md" onClick={() => setOpen(true)}>
        <CardHeader>
          <CardTitle className="line-clamp-2 text-base">{post.title}</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="line-clamp-4 text-sm text-muted-foreground">
            {post.body}
          </p>
        </CardContent>
      </Card>

      <Dialog open={open} onOpenChange={setOpen} >
        <DialogContent className="w-[95vw] max-w-4xl max-h-[85vh] grid-rows-[auto_1fr] overflow-hidden">
          <DialogHeader>
            <DialogTitle>{post.title}</DialogTitle>
            <DialogDescription>Post #{post.id}</DialogDescription>
          </DialogHeader>
        <div className="min-h-0 overflow-y-auto pr-2">
          <p className="text-base leading-7 font-size ">
            {post.body}
          </p>
        </div>
        </DialogContent>
      </Dialog>
    </>
  )
}
