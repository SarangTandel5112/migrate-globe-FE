import ZoomConsultation from "@/components/zoom-consultation/ZoomConsultation";
import { fetchCountries } from "@/utils/countries";

export default async function Page() {
    const countries = await fetchCountries();

    return (
        <div className="container-1200">
            <ZoomConsultation countries={countries} />
        </div>
    );
}
