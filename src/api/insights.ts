import { API_URL } from "@/constants";
import { VisaType } from "@/utils/interface";

export async function fetchInsights(): Promise<VisaType[]> {
    const res = await fetch(`${API_URL}visa-types?populate=*&sort=order:asc`);
    if (!res.ok) throw new Error("Failed to fetch insights");
    const json = await res.json();
    return json.data as VisaType[];
}