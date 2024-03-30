import { dbConnect } from "@/services/dbConnect";
import Pizza from "@/models/Pizza";
import { NextResponse } from "next/server";

export const GET = async (req, {params}) => {
  const { id } = params;
  await dbConnect();

  const pizza = await Pizza.findById(id);
  return NextResponse.json(pizza);
};

