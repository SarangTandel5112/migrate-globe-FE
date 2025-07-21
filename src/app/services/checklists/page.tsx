import CheckList from "@/components/checklist/Checklist";
import { ApplicationType, CheckListDetails } from "@/utils/interface";

export default async function Page() {
  const res = await fetch(
    "https://admin.migrateglobe.com/api/checklists?populate=*"
  );
  const json = await res.json();
  const checklist: CheckListDetails[] = json.data;

  const resApplicationType = await fetch(
    "https://admin.migrateglobe.com/api/application-types"
  );

  const applicationJson = await resApplicationType.json();
  const applicationTypes: ApplicationType[] = applicationJson.data;

  return (
    <div className="container-1200">
      <CheckList checklists={checklist} applicationTypes={applicationTypes}/>
    </div>
  );
}
