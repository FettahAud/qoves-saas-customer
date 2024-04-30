import SectionHeader from "@/components/sections/SectionHeader";
import { ClientDataTable } from "@/components/ui/client-table/ClientDataTable";

export default function ClientsList() {
  return (
    <div className="clients-list tab-wrapper">
      <ClientDataTable />
    </div>
  );
}
