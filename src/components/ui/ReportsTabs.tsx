"use client";

import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useRef } from "react";

export default function ReportsTabs({ changeType }: { changeType: Function }) {
  const tabsRef = useRef(null);

  return (
    <Tabs
      ref={tabsRef}
      defaultValue="all"
      onValueChange={(e) => changeType(e)}
      className="w-[400px]"
    >
      <TabsList className="h-full rounded-none">
        <TabsTrigger value="all">All Reports</TabsTrigger>
        <TabsTrigger value="needImageSubmission">
          Need Image Submission
        </TabsTrigger>
        <TabsTrigger value="reportInProduction">
          Report In Production
        </TabsTrigger>
        <TabsTrigger value="delivered">Delivered</TabsTrigger>
      </TabsList>
    </Tabs>
  );
}
