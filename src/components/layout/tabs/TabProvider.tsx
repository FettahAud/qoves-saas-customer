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
  const [des, setDes] = useState("");

  useEffect(() => {
    if (sidebarTab === "reports") {
      setTitle("Report Overview");
      setDes(
        "Enim bibendum pharetra nisl diam maecenas. At ultrices libero lectus enim."
      );
    }
    if (sidebarTab === "consultations") setTitle("Consultations");
    if (sidebarTab === "client-data") setTitle("Client Data");
    if (sidebarTab === "account") setTitle("Account");
  }, [sidebarTab]);
  return (
    <>
      <Header title={title} des={des} />
      <div id="page-content" className="p-10 pt-6 pb-9">
        {sidebarTab === "reports" && <Reports />}
        {sidebarTab === "consultations" && <Consultations />}
        {sidebarTab === "client-data" && <ClientData />}
        {sidebarTab === "account" && <Account />}
      </div>
    </>
  );
}
