import { redirect } from "next/navigation";
import React, { ReactNode } from "react";
import { getCustomer } from "./_actions/getCustomer";
import AuthenticatedNavbar from "./_components/Navbar";

export default async function Layout({ children }: { children: React.ReactNode }) {
  const customer = await getCustomer();
  if (!customer) {
    redirect("/login");
    return null;
  }
  return (
          <div>
            <AuthenticatedNavbar />
            {children}
          </div>
  );
}