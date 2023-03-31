import { useEffect } from 'react'
import GuestLayout from '@/Layouts/GuestLayout'
import InputError from '@/Components/InputError'
import TextInput from '@/Components/TextInput'
import Label from '@/Components/InputLabel'
import Button from '@/Components/PrimaryButton'
import { Head, Link, useForm } from '@inertiajs/react'

export default function Register() {
  const { data, setData, post, processing, errors, reset } = useForm({
    name: '',
    email: '',
    password: '',
    password_confirmation: '',
  })

  useEffect(() => {
    return () => {
      reset('password', 'password_confirmation')
    }
  }, [])

  const handleOnChange = (e) => {
    setData(e.target.name, e.target.value)
  }

  const submit = (e) => {
    e.preventDefault()

    // console.log(data)

    post(route('register'))
  }

  return (
    <>
      <Head title="Sign-Up" />
      <div className="mx-auto max-w-screen min-h-screen bg-black text-white md:px-10 px-3">
        <div className="fixed top-[-50px] hidden lg:block">
          <img
            src="/images/signup-image.png"
            className="hidden laptopLg:block laptopLg:max-w-[450px] laptopXl:max-w-[640px]"
            alt=""
          />
        </div>
        <div className="py-24 flex laptopLg:ml-[680px] laptopXl:ml-[870px]">
          <div>
            <img src="/images/moonton-white.svg" alt="" />
            <div className="my-[70px]">
              <div className="font-semibold text-[26px] mb-3">Sign Up</div>
              <p className="text-base text-[#767676] leading-7">
                Explore our new movies and get <br />
                the better insight for your life
              </p>
            </div>
            <form className="w-[370px]" onSubmit={submit}>
              <div className="flex flex-col gap-6">
                <div>
                  <Label value="Name">Full Name</Label>
                  <TextInput
                    type="text"
                    name="name"
                    value={data.name}
                    placeholder="Your fullname..."
                    isFocused={true}
                    onChange={handleOnChange}
                    required
                  />
                  <InputError message={errors.name} className="mt-2" />
                </div>
                <div>
                  <Label value="Email Address" />
                  <TextInput
                    type="email"
                    name="email"
                    value={data.email}
                    placeholder="Your Email Address"
                    autoComplete="username"
                    onChange={handleOnChange}
                    required
                  />
                  <InputError message={errors.email} className="mt-2" />
                </div>
                <div>
                  <Label value="Password" />
                  <TextInput
                    type="password"
                    name="password"
                    value={data.password}
                    placeholder="Your Password"
                    autoComplete="new-password"
                    onChange={handleOnChange}
                    required
                  />
                  <InputError message={errors.password} className="mt-2" />
                </div>
                <div>
                  <Label value="Confirmation Password" />
                  <TextInput
                    type="password"
                    name="password_confirmation"
                    value={data.password_confirmation}
                    placeholder="Confirmation Your Password"
                    autoComplete="new-password"
                    onChange={handleOnChange}
                    required
                  />
                  <InputError
                    message={errors.password_confirmation}
                    className="mt-2"
                  />
                </div>
              </div>
              <div className="grid space-y-[14px] mt-[30px]">
                <Button type="submit" disabled={processing}>
                  <span className="text-base font-semibold">Sign Up</span>
                </Button>
                <Link href={route('login')}>
                  <Button variant="light-outline">
                    <span className="text-base text-white">
                      Sign In to My Account
                    </span>
                  </Button>
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}
