import { useState } from "react"
import {Dialog, DialogContent, DialogHeader, DialogTitle} from '@/components/ui/dialog'
import { Card } from "./components/ui/card"
import type {Post} from './query'

interface PostCardProps {
  post: Post
}

export default function PostCard({ post }: PostCardProps) {
const [open, setOpen] = useState(false)
const [selectpost, setselectpost] = useState<Post | null>(null)

return (
    <>
<Card key = {post.id} className = "h-full cursor-pointer" onClick={() =>{
    setselectpost(post)
    setOpen(true)
}}>
</Card>

<Dialog open={open} onOpenChange={setOpen}>
  <DialogContent>
    <DialogHeader>
      <DialogTitle>{selectpost?.title}</DialogTitle>
    </DialogHeader>

    <p className="text-sm leading-relaxed">
      {selectpost?.body}
    </p>
  </DialogContent>
</Dialog>
</>
)}