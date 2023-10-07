"use client";

import { signOut, useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  const { data: session } = useSession();
  let role = session?.user?.role;

  return (
    <nav className="bg-slate-700 text-white text-lg py-4 px-6">
      <div className="max-w-screen-2xl mx-auto flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold capitalize">
          Parcel Delivery System {role ? `- ${role}` : ""}
        </Link>

        <ul className="flex gap-4">
          {role === "biker" && (
            <li className="cursor-pointer">
              <Link href="/awaiting-approval" className="hover:text-green-500">
                Awaiting Approval
              </Link>
            </li>
          )}
          {role === "sender" && (
            <li className="cursor-pointer">
              <Link href="/create-parcel" className="hover:text-green-500">
                Create Parcel
              </Link>
            </li>
          )}
          {session?.user && (
            <li className=" flex items-center space-x-2">
              <span>{session?.user?.username}</span>
              <button
                onClick={() =>
                  signOut({
                    redirect: true,
                    callbackUrl: `${window.location.origin}/login`,
                  })
                }
              >
                <Image
                  src="/imgs/logout.png"
                  height={20}
                  width={20}
                  priority
                  alt="logout"
                />
              </button>
            </li>
          )}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
