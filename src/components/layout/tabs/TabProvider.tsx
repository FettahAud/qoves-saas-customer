"use client";

import store from "@/lib/store";
import Header from "../Header";
import { useEffect, useState } from "react";
import Account from "./Account";
import Reports from "./Reports";
import Consultations from "./Consultations";
import ClientData from "./ClientData";

export default function TabProvider() {
  const { sidebarTab } = store();
  const [title, setTitle] = useState("");

  useEffect(() => {
    if (sidebarTab === "reports") setTitle("Reports");
    if (sidebarTab === "consultations") setTitle("Consultations");
    if (sidebarTab === "client-data") setTitle("Client Data");
    if (sidebarTab === "account") setTitle("Account");
  }, [sidebarTab]);
  return (
    <>
      <Header title={title} />
      <div id="page-content" className="px-6 pb-9">
        {sidebarTab === "reports" && <Reports />}
        {sidebarTab === "consultations" && <Consultations />}
        {sidebarTab === "client-data" && <ClientData />}
        {sidebarTab === "account" && <Account />}
      </div>
    </>
  );
}
