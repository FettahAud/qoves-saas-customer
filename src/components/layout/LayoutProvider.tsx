"use client";

import { Toaster } from "@/components/ui/toaster";
import store from "@/lib/store";
import Dashboard from "./Dashboard";
import SignLayout from "./SignLayout";

export default function LayoutProvider() {
  const { loggedIn } = store();
  return (
    <>
      {/* <Toaster /> */}
      {loggedIn && <Dashboard />}
      {!loggedIn && <SignLayout />}
    </>
  );
}
