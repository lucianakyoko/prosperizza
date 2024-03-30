import { NextResponse } from "next/server";
import { dbConnect } from "@/services/dbConnect";
import User from "@/models/User";

dbConnect();

export const POST = async (req) => {
  const {
    bairro,
    cellphone,
    cep,
    cidade,
    complemento,
    cpf,
    email,
    fullName,
    numero,
    password,
    rua,
    uf
  } = await req.json();

  await dbConnect();

  await User.create({
    bairro,
    cellphone,
    cep,
    cidade,
    complemento,
    cpf,
    email,
    fullName,
    numero,
    password,
    rua,
    uf
  });

  return NextResponse.json({message: 'User created'});
};


