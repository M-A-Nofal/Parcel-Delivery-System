import { getAuthSession } from "@/utils/auth";
import prisma from "@/utils/connect";
import { NextResponse } from "next/server";

// EDIT STATUS ORDER
export const PUT = async (req, { params }) => {
  const session = await getAuthSession();
  const { id } = params;
  if (session) {
    try {
      const body = await req.json();
      await prisma.orders.update({
        where: { id: id },
        data: { status: body.status },
      });
      return new NextResponse(
        JSON.stringify({ message: "Order has been updated!" }),
        { status: 200 }
      );
    } catch (err) {
      console.error(err);
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
