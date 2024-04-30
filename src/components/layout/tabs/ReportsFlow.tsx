import SectionHeader from "../../sections/SectionHeader";
import NumberCard from "../../ui/NumberCard";
import { ReportFlowDataTable } from "../../ui/reports-tables/ReportFlowTable";

export default function ReportsFlow() {
  return (
    <div className="report-flow tab-wrapper">
      <div className="card flex h-[16.25rem]">
        <NumberCard
          title="Need Image Submission"
          number="20"
          badgeNumber="30%"
          badgeStatus="badge-green"
          className="py-8 flex-1"
        />
        <NumberCard
          title="Report In Production"
          number="30"
          badgeNumber="30%"
          badgeStatus="badge-green"
          className="py-8 flex-1 border-solid border-l border-bo-gray"
        />
        <NumberCard
          title="Report Delivered"
          number="40"
          badgeNumber="30%"
          badgeStatus="badge-green"
          className="py-8 flex-1 border-solid border-l border-bo-gray"
        />
      </div>
      <div className="card pt-6 pb-2">
        <ReportFlowDataTable />
      </div>
    </div>
  );
}
