import Image from 'next/image'
import AuthForm from './components/authForm'

export default function Home() {
  return (
   <div  className='flex min-h-full flex-col justify-center py-12 sm:px-6 lg:px-8 bg-gray-300 ' >

    <div className='sm:mx-auto sm:w-full sm:max-w-md' >
    <Image src="/images/message.png" alt='logo' width="48" height="48" className='mx-auto w-auto '  />

    <h2 className='
    mt-6
    text-center
    text-3xl
    fond-bold
    tracking-tight
    text-gray-900
    '>
      Sign in you Account
    </h2>

      </div>

      <AuthForm />

   </div>
  )
}
