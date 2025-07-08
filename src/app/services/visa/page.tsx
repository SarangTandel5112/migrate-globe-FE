import Visa from "@/components/visa/Visa";
import { VisaType } from "@/utils/interface";


export default async function Page() {
    // const visaTypesSample:VisaType[]=[
    //     {
    //     "id": 8,
    //     "documentId": "x1cbqlyb2v0bkn5y33xt72ym",
    //     "name": "Student Visa",
    //     "description": "For international students looking to pursue education abroad.",
    //     "key": null,
    //     "createdAt": "2025-06-20T16:40:12.395Z",
    //     "updatedAt": "2025-06-20T16:41:03.910Z",
    //     "publishedAt": "2025-06-20T16:41:03.919Z",
    //     "order": 1,
    //     "visas": [],
    //     "visaTypeImage": null
    //     },
    //     {
    //     "id": 10,
    //     "documentId": "wwqty10yas93etv5emdaob2n",
    //     "name": "Family Visa",
    //     "description": "Reunite with your loved ones across borders.",
    //     "key": null,
    //     "createdAt": "2025-06-20T16:41:28.175Z",
    //     "updatedAt": "2025-06-20T16:41:29.188Z",
    //     "publishedAt": "2025-06-20T16:41:29.195Z",
    //     "order": 2,
    //     "visas": [],
    //     "visaTypeImage": null
    //     },
    //     {
    //     "id": 12,
    //     "documentId": "sendoh3k989sdbm99w3vnnjm",
    //     "name": "Tourist Visa",
    //     "description": "Discover the world with a visa tailored for travel and tourism.",
    //     "key": null,
    //     "createdAt": "2025-06-20T16:42:03.466Z",
    //     "updatedAt": "2025-06-20T16:42:04.412Z",
    //     "publishedAt": "2025-06-20T16:42:04.418Z",
    //     "order": 3,
    //     "visas": [],
    //     "visaTypeImage": null
    //     },
    //     {
    //     "id": 14,
    //     "documentId": "ziksw3m8u3fwhh629fxop09w",
    //     "name": "Business Visa ",
    //     "description": "For professionals attending meetings, conferences, or short-term work.",
    //     "key": null,
    //     "createdAt": "2025-06-20T16:42:34.910Z",
    //     "updatedAt": "2025-06-20T16:42:36.012Z",
    //     "publishedAt": "2025-06-20T16:42:36.024Z",
    //     "order": 4,
    //     "visas": [],
    //     "visaTypeImage": null
    //     },
    //     {
    //     "id": 16,
    //     "documentId": "bqq4p0ipkhs6xcqid3lujlch",
    //     "name": "Work Visa",
    //     "description": "Build your career internationally with a legal work permit.",
    //     "key": null,
    //     "createdAt": "2025-06-20T16:42:53.853Z",
    //     "updatedAt": "2025-06-20T16:42:54.987Z",
    //     "publishedAt": "2025-06-20T16:42:54.994Z",
    //     "order": 5,
    //     "visas": [],
    //     "visaTypeImage": null
    //     },
    //     {
    //     "id": 18,
    //     "documentId": "d9widgv3fx9i8yvtw1fmub27",
    //     "name": "Diplomatic Visa",
    //     "description": "Reserved for government officials and diplomatic missions.",
    //     "key": null,
    //     "createdAt": "2025-06-20T16:43:11.979Z",
    //     "updatedAt": "2025-06-20T16:43:12.920Z",
    //     "publishedAt": "2025-06-20T16:43:12.926Z",
    //     "order": 6,
    //     "visas": [],
    //     "visaTypeImage": null
    //     }
    //     ]
    // const visaTypes: VisaType[] = visaTypesSample;
    const res = await fetch(
        "https://admin.migrateglobe.com/api/visa-types?populate=*&sort=order:asc"
    );
    const json = await res.json();
    const visaTypes: VisaType[] = json.data;

    return (
        <div className="container-1200">
            <Visa visaTypes={visaTypes} />
        </div>
    );
}
