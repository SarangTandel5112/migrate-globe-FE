// import { notFound } from "next/navigation";
import VisaDetails from "@/components/visa-details/VisaDetails";
import { API_URL } from "@/constants";
import { VisaType } from "@/utils/interface";
import { notFound } from "next/navigation";

// 1. Generate static params for all visa IDs
export async function generateStaticParams() {
  const res = await fetch("https://admin.migrateglobe.com/api/visa-types");
  const data = await res.json();

  return data.data.map((visa: { documentId: string }) => ({
    id: visa.documentId,
  }));
}

interface VisaPageProps {
  params: Promise<{ id: string }>;
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}

export default async function VisaPage({ params, searchParams }: VisaPageProps) {
  const { id } = await params;
  const resolvedSearchParams = await searchParams;
  
  const rawVisaQuery = resolvedSearchParams.visa;
  const visaQuery = Array.isArray(rawVisaQuery)
    ? rawVisaQuery[0]
    : rawVisaQuery ?? "";

  const resVisaTypes = await fetch(
    `${API_URL}visa-types?populate=*&sort=order:asc`
  );
  const json = await resVisaTypes.json();
  const visaTypes: VisaType[] = json.data;

  const res = await fetch(
    `${API_URL}visa-types/${id}?populate[visas][populate]=visaImage&sort=order:asc`
  );
  const apiData = await res.json();
  const visaDoc: VisaType = apiData.data;

  if (!visaDoc) return notFound();

  return (
    <div className="container-1200">
      <VisaDetails visaDetails={visaDoc} visaTypesDetails={visaTypes} visaQuery={visaQuery} />
    </div>
  );
}