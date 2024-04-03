import { NextResponse } from "next/server";
import { dbConnect } from "@/services/dbConnect";
import Order from "@/models/Order";

dbConnect();

export const POST = async req => {
  try {
    const {
      orderNumber,
      orderDate,
      pizzas,
      totalAmount,
      userId
    } = await req.json();

    if (!orderNumber || !orderDate || !pizzas || !totalAmount || !userId) {
      return new NextResponse("Dados incompletos", { status: 400 });
    }

    const newOrder = await Order.create({
      orderNumber,
      orderDate,
      pizzas,
      totalAmount,
      userId
    });

    return NextResponse.json({ message: 'Order created', order: newOrder });
  } catch{
    console.error("Erro ao criar pedido:", error);
    return new NextResponse("Erro ao criar pedido", { status: 500 });
  };
}