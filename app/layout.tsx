import { Nunito } from "next/font/google";
import { lazy } from "react";

import Navbar from "./components/navbar/Navbar";
import ClientOnly from "./components/ClientOnly";
import "./globals.css";
import getCurrentUser from "./actions/getCurrentUser";

const font = Nunito({ subsets: ["latin"] });
const LoginModal = lazy(() => import("./components/modals/LoginModal"));
const RegisterModal = lazy(() => import("./components/modals/RegisterModal"));
const ToasterProvider = lazy(() => import("./providers/ToasterProvider"));

export const metadata = {
  title: "Airbnb",
  description: "Airbnb clone website",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const currentUser = await getCurrentUser();

  return (
    <html lang="en">
      <body className={font.className}>
        <ClientOnly>
          <ToasterProvider />
          <LoginModal />
          <RegisterModal />
          <Navbar currentUser={currentUser} />
        </ClientOnly>
        {children}
      </body>
    </html>
  );
}
