import Modals from "@/components/Modals/Modals";
import Sidebar from "@/components/layout/Sidebar";
import TabProvider from "@/components/layout/tabs/TabProvider";

export default function Dashboard() {
  return (
    <div className="dashboard-wrapper">
      <Sidebar />
      <div id="page">
        <TabProvider />
      </div>
      <Modals />
    </div>
  );
}
