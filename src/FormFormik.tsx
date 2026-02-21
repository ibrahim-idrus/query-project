import { useFormik } from "formik"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

type FormValues = {
  title: string
  description: string
}

const validate = (values: FormValues) => {
  const errors: Partial<FormValues> = {}

  if (!values.title) {
    errors.title = "Required"
  } else if (values.title.length > 50) {
    errors.title = "Must be 50 characters or less"
  }

  if (!values.description) {
    errors.description = "Required"
  } else if (values.description.length > 280) {
    errors.description = "Must be 280 characters or less"
  }

  return errors
}

const InputForm = () => {
  const formik = useFormik<FormValues>({
    initialValues: {
      title: "",
      description: "",
    },
    validate,
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2))
      
    },
  })

  return (
    <Card className="w-full border-0 shadow-none">
      <CardHeader>
        <CardTitle>Create New Post</CardTitle>
        <CardDescription>Enter title and description for your post.</CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={formik.handleSubmit} className="flex flex-col gap-6">
          <div className="grid gap-2">
            <label htmlFor="title" className="text-sm font-medium">
              Title
            </label>
            <Input
              id="title"
              name="title"
              placeholder="Post title"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.title}
              aria-invalid={Boolean(formik.touched.title && formik.errors.title)}
            />
            {formik.touched.title && formik.errors.title ? (
              <p className="text-sm text-red-500">{formik.errors.title}</p>
            ) : null}
          </div>

          <div className="grid gap-2">
            <label htmlFor="description" className="text-sm font-medium">
              Description
            </label>
            <Textarea
              id="description"
              name="description"
              placeholder="Type your message here."
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.description}
              aria-invalid={Boolean(formik.touched.description && formik.errors.description)}
            />
            {formik.touched.description && formik.errors.description ? (
              <p className="text-sm text-red-500">{formik.errors.description}</p>
            ) : null}
          </div>

          <Button type="submit">Submit</Button>
        </form>
      </CardContent>
    </Card>
  )
}

export default InputForm
