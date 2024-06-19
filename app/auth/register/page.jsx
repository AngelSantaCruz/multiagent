import { getServerSession } from 'next-auth/next'
import { authOptions } from '@/lib/auth'
import Register from './register'
import { redirect } from 'next/navigation'
import NavBar from '../../../components/Navbar'

export default async function Page () {
  const session = await getServerSession(authOptions)

  if (session) {
    redirect('http://localhost:3000/')
  }
  return (<>
  <NavBar/>
  <Register></Register>
  </>)
}
