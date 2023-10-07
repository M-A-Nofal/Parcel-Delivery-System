import { getAuthSession } from "@/utils/auth";
import prisma from "@/utils/connect";
import { NextResponse } from "next/server";

// FETCH ALL BIKER ORDERS
export const GET = async (req) => {
  const session = await getAuthSession();
  if (session) {
    try {
      const orders = await prisma.orders.findMany({
        where: {
          bikerId: session?.user?.id,
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
  } else {
    return new NextResponse(
      JSON.stringify({ message: "You are not authenticated!" }),
      { status: 401 }
    );
  }
};
