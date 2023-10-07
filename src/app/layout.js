import Navbar from "@/components/Navbar";
import "./globals.css";
import { Inter } from "next/font/google";
import "react-datepicker/dist/react-datepicker.css";
import AuthProvider from "@/components/AuthProvider";
import QueryProvider from "@/components/QueryProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Parcel Delivery System",
  description: "Parcel Delivery System",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AuthProvider>
          <QueryProvider>
            <Navbar />
            {children}
          </QueryProvider>
        </AuthProvider>
      </body>
    </html>
  );
}
