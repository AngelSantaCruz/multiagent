import { getServerSession } from 'next-auth/next'
import { authOptions } from '@/lib/auth'
import Signin from './signin'
import { redirect } from 'next/navigation'
import NavBar from '../../../components/Navbar'

export default async function Page () {
  const session = await getServerSession( authOptions)

  if (session) {
    redirect('http://localhost:3000/dashboard')
  } else {
    return (<>
    <NavBar/>
    <Signin></Signin>
    </>)
  }
}
