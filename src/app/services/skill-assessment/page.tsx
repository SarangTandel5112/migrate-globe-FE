import SkillAssessment from "@/components/skill-assessment/SkillAssessment";

export default async function Page() {
    // const res = await fetch(
    //     "https://admin.migrateglobe.com/api/skill-assessment-config"
    // );
    // const apiData = await res.json();

    // const skillAssessmentData = apiData.data;
    return (
        <div className="container-1200">
            <SkillAssessment />
        </div>
    );
}
