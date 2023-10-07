import prisma from "@/utils/connect";
import { NextResponse } from "next/server";

// FETCH ALL WAITING ORDERS
export const GET = async (req) => {
  try {
    const orders = await prisma.orders.findMany({
      where: {
        status: 1,
      },
      include: {
        sender: true,
      },
    });
    return new NextResponse(JSON.stringify(orders), { status: 200 });
  } catch (err) {
    console.log(err);
    return new NextResponse(
      JSON.stringify({ message: "Something went wrong!" }),
      { status: 500 }
    );
  }
};
