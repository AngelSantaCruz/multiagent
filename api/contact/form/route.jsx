import connectDB from '../../../lib/dbconnect'
import { NextResponse } from 'next/server'

export async function POST (request) {
 try {
  

    const {  email, name, mensaje } = await request.json()
    return NextResponse.json(
        {
          message: 'Email already send '
        },
        {
          status: 200 
        }
      )
 } catch (error) {
    return  NextResponse.json(
        {
          message: 'error'
        },
        {
          status: 409
        }
      )
 }
    

   
}
