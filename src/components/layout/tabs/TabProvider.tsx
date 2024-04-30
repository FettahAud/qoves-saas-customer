"use client";

import store from "@/lib/store";
import Overview from "./Overview";
import ReportsFlow from "./ReportsFlow";
import ClientsList from "./ClientsList";
import CustomerInformation from "./CustomerInformation";
import Header from "../Header";
import { useEffect, useState } from "react";
import Account from "./Account";
import Financial from "./Financial";

export default function TabProvider() {
  const { sidebarTab } = store();
  const [title, setTitle] = useState("");

  useEffect(() => {
    if (sidebarTab === "overview") setTitle("Overview");
    if (sidebarTab === "report-flow") setTitle("Report Flow");
    if (sidebarTab === "client-list") setTitle("Client List");
    if (sidebarTab === "customer-information") setTitle("Customer Information");
    if (sidebarTab === "financials") setTitle("Financials");
    if (sidebarTab === "account") setTitle("Account");
  }, [sidebarTab]);
  return (
    <>
      <Header title={title} />
      <div id="page-content" className="px-6 pb-9">
        {sidebarTab === "overview" && <Overview />}
        {sidebarTab === "report-flow" && <ReportsFlow />}
        {sidebarTab === "client-list" && <ClientsList />}
        {sidebarTab === "customer-information" && <CustomerInformation />}
        {sidebarTab === "financials" && <Financial />}
        {sidebarTab === "account" && <Account />}
      </div>
    </>
  );
}
