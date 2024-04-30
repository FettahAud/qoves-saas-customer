import ReportSales from "@/components/sections/ReportSales";
import SectionHeader from "@/components/sections/SectionHeader";
import Reports from "../sections/Reports";

export default function Overview() {
  return (
    <div className="overview flex flex-col gap-4">
      <SectionHeader
        title={"Overview"}
        des={
          "Enim bibendum pharetra nisl diam maecenas. At ultrices libero lectusenim."
        }
      />
      <ReportSales />
      <Reports />
    </div>
  );
}
