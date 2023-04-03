import Authenticated from '@/Layouts/Authenticated/Index'
import TextInput from '@/Components/TextInput'
import InputError from '@/Components/InputError'
import Label from '@/Components/InputLabel'
import Button from '@/Components/PrimaryButton'
import { Head, Link, useForm, router } from '@inertiajs/react'
import Checkbox from '@/Components/Checkbox'

export default function Edit({ auth, movie }) {
  const { data, setData, processing, errors } = useForm({
    //Artinya mengambil semua nilai default dari movie
    ...movie,
  })

  const handleOnChange = (event) => {
    setData(
      event.target.name,
      event.target.type === 'file' ? event.target.files[0] : event.target.value,
    )
  }

  const submit = (e) => {
    e.preventDefault()

    if (data.thumbnail === movie.thumbnail) {
      delete data.thumbnail
    }

    router.post(route('admin.dashboard.movie.update', movie.id), {
      _method: 'PUT',
      ...data,
    })
  }
  return (
    <Authenticated auth={auth}>
      <Head title="Admin - Update Movie" />
      <h1 className="text-xl">Update Movie : {movie.name}</h1>
      <hr className="mb-4" />
      <form onSubmit={submit}>
        <Label value="Name" />
        <TextInput
          type="text"
          name="name"
          defaultValue={movie.name}
          variant="primary-outline"
          onChange={handleOnChange}
          placeholder="Enter Movie Name"
        />
        <InputError message={errors.name} className="mt-2" />

        <Label value="Category" className=" mt-4" />
        <TextInput
          type="text"
          name="category"
          variant="primary-outline"
          defaultValue={movie.category}
          onChange={handleOnChange}
          placeholder="Enter Movie Category"
        />
        <InputError message={errors.category} className="mt-2" />

        <Label value="Video Url" className=" mt-4" />
        <TextInput
          type="url"
          name="video_url"
          variant="primary-outline"
          defaultValue={movie.video_url}
          onChange={handleOnChange}
          placeholder="Enter Movie Video Url"
        />
        <InputError message={errors.video_url} className="mt-2" />

        <Label value="Thumbnail" className=" mt-4" />
        <img src={`/storage/${movie.thumbnail}`} alt="" className="w-40" />
        <TextInput
          type="file"
          name="thumbnail"
          variant="primary-outline"
          onChange={handleOnChange}
          placeholder="Enter Movie Thumbnail"
        />
        <InputError message={errors.thumbnail} className="mt-2" />

        <Label value="Rating" className=" mt-4" />
        <TextInput
          type="number"
          name="rating"
          variant="primary-outline"
          defaultValue={movie.rating}
          onChange={handleOnChange}
          placeholder="Enter Movie Rating"
        />
        <InputError message={errors.rating} className="mt-2" />

        <div className="flex flex-row mt-4 items-center">
          <Label value="Is Featured" className=" mr-3 mt-1" />
          <Checkbox
            name="is_featured"
            onChange={(e) => setData('is_featured', e.target.checked)}
            checked={movie.is_featured}
          />
        </div>
        <Button type="submit" className="mt-4" processing={processing}>
          Save
        </Button>
      </form>
    </Authenticated>
  )
}
