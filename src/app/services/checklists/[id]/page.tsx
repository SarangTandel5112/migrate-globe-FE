import ChecklistDetailsMain from "@/components/checklist/ChecklistDetailsMain";
import { CheckListDetails } from "@/utils/interface";

// 1. Generate static params for all visa IDs
export async function generateStaticParams() {
  const res = await fetch("https://admin.migrateglobe.com/api/checklists");
  const data = await res.json();

  return data.data.map((checklists: { documentId: string }) => ({
    id: checklists.documentId,
  }));
}
type tParams = Promise<{ id: string }>;
export default async function Page({ params }: { params: tParams }) {
  const { id } = await params;

  const res = await fetch(
    `https://admin.migrateglobe.com/api/checklists/${id}`
  );
  const json = await res.json();
  const checklist: CheckListDetails = json.data;

  return (
    <div className="container-1200">
      <ChecklistDetailsMain checklist={checklist} />
    </div>
  );
}
