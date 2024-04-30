import ReportSales from "@/components/sections/ReportSales";
import SectionHeader from "@/components/sections/SectionHeader";
import OverviewDataTable from "../../ui/reports-tables/OverviewDataTable";

export default function Overview() {
  return (
    <div className="overview tab-wrapper">
      <ReportSales />
      <OverviewDataTable />
    </div>
  );
}
