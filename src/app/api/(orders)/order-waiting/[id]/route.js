import { getAuthSession } from "@/utils/auth";
import prisma from "@/utils/connect";
import { NextResponse } from "next/server";

// EDIT WAITING ORDER
export const PUT = async (req, { params }) => {
  const session = await getAuthSession();
  const { id } = params;
  if (session) {
    try {
      const body = await req.json();
      const updatedOrder = await prisma.orders.update({
        where: { id: id },
        data: {
          status: 2,
          bikerId: session?.user?.id,
          pickupTimestamp: body.pickupTimestamp,
          deliveryTimestamp: body.deliveryTimestamp,
        },
      });
      return new NextResponse(JSON.stringify(updatedOrder), { status: 200 });
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
