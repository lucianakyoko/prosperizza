import mongoose from "mongoose";
import { NextResponse } from "next/server";
import { dbConnect } from "@/services/dbConnect";
import Pizza from "@/models/Pizza";

dbConnect();

export const GET = async () => {
  await dbConnect();

  const pizzas = await Pizza.find();
  return NextResponse.json(pizzas);
};

export const POST = async (req) => {
  const individualId = new mongoose.Types.ObjectId();
  const medioId = new mongoose.Types.ObjectId();
  const grandeId = new mongoose.Types.ObjectId();

  const {
    pizzaName, 
    ingredients, 
    imageUrl, 
    sizes,
    category, 
    isNewPizza 
  } = await req.json();

  await dbConnect();

  await Pizza.create({
    pizzaName, 
    ingredients, 
    imageUrl, 
    sizes: {
      individual: {
        size_id: individualId,
        price: sizes.individual.price
      },
      medio: {
        size_id: medioId,
        price: sizes.medio.price
      },
      grande: {
        size_id: grandeId,
        price: sizes.grande.price
      }
    }, 
    category, 
    isNewPizza 
  });

  return NextResponse.json({message: 'Pizza created'});
};
