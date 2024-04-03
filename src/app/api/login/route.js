import { NextResponse } from "next/server";
import { dbConnect } from "@/services/dbConnect";
import User from "@/models/User";

dbConnect();

export const POST = async req => {
  if(req.method !== 'POST') {
    return NextResponse.error(new Error('Method not allowed'), {status: 405});
  };

  const { email, password } = await req.json();
  
  try {
    const user = await User.findOne({email});
    
    if(!user){
      return NextResponse.error(new Error('Invalid email or password'), {status: 401}); 
    };
    if (user.password !== password) {
      return NextResponse.error(new Error('Invalid email or password'), { status: 401 });
    };

    return NextResponse.json({ user });
  } catch (error) {
    console.error('Error logging in:', error.message);
    return NextResponse.error(new Error('An unexpected error occurred'), { status: 500 });
  }
}