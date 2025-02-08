import { redirect } from "next/navigation";
import React, { ReactNode } from "react";
import { getCustomer } from "./actions/getCustomer";

export default async function Layout({ children }: { children: React.ReactNode }) {
  const customer = await getCustomer();
  if (!customer) {
    redirect("/login");
    return null;
  }
  return (
          <>{children}</>
  );
}