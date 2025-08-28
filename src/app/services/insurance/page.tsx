import InsuranceComparisonPage from "@/components/insurance";

export default async function InsurancePage() {
  // Fetch from your API (update the URL as needed)
  const res = await fetch(
    "https://admin.migrateglobe.com/api/insurances?populate=*"
  );
  const apiData = await res.json();
  const insuranceData = apiData.data;

  return (
    <div className="container-1200">
      <InsuranceComparisonPage data={insuranceData} />
    </div>
  );
}
