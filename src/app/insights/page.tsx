import Insights from "@/components/insights/Insights";
import { Insight } from "@/utils/interface";



export default async function Page() {
    // const insightsSample: Insight[] = [
    //     {
    //         id: 3,
    //         documentId: "xvjbs6e7bllxwcsvyqdixqt5",
    //         title: "Occupation Update",
    //         subtitle: "New roles added to skilled occupation list.",
    //         description: null,
    //         content: null,
    //         createdAt: "2025-06-27T17:21:46.410Z",
    //         updatedAt: "2025-06-27T17:21:53.565Z",
    //         publishedAt: "2025-06-27T17:21:53.572Z",
    //         order: 1,
    //     },
    //     {
    //         id: 5,
    //         documentId: "rhcoq3tu0rba7bk45lsgsqdd",
    //         title: "Visa Fees",
    //         subtitle: "Latest changes in application fee structure.",
    //         description: null,
    //         content: null,
    //         createdAt: "2025-06-27T17:22:11.016Z",
    //         updatedAt: "2025-06-27T17:22:11.016Z",
    //         publishedAt: "2025-06-27T17:22:11.022Z",
    //         order: 2,
    //     },
    //     {
    //         id: 7,
    //         documentId: "bduw2klt11n0lw44bnvqpfa2",
    //         title: "Job Demand",
    //         subtitle: "Top in-demand jobs for skilled migrants.",
    //         description: null,
    //         content: null,
    //         createdAt: "2025-06-27T17:22:37.141Z",
    //         updatedAt: "2025-06-27T17:22:37.141Z",
    //         publishedAt: "2025-06-27T17:22:37.148Z",
    //         order: 3,
    //     },
    //     {
    //         id: 10,
    //         documentId: "fq0q8778o139jcjd3tlktqsq",
    //         title: "State Nomination",
    //         subtitle: "Which states are open for sponsorship?",
    //         description: null,
    //         content: null,
    //         createdAt: "2025-06-27T17:22:53.254Z",
    //         updatedAt: "2025-06-27T17:22:57.755Z",
    //         publishedAt: "2025-06-27T17:22:57.760Z",
    //         order: 4,
    //     },
    //     {
    //         id: 12,
    //         documentId: "dvu5zmpbcumk00vw4vm870z1",
    //         title: "Processing Time",
    //         subtitle: "Average visa processing durations by type.",
    //         description: null,
    //         content: null,
    //         createdAt: "2025-06-27T17:23:17.031Z",
    //         updatedAt: "2025-06-27T17:23:17.031Z",
    //         publishedAt: "2025-06-27T17:23:17.036Z",
    //         order: 5,
    //     },
    //     {
    //         id: 14,
    //         documentId: "bi43p15njad5ggwhrynq3b3t",
    //         title: "Student Pathway",
    //         subtitle: "New rules for international graduate visas.",
    //         description: null,
    //         content: null,
    //         createdAt: "2025-06-27T17:23:35.804Z",
    //         updatedAt: "2025-06-27T17:23:35.804Z",
    //         publishedAt: "2025-06-27T17:23:35.809Z",
    //         order: 6,
    //     },
    //     {
    //         id: 16,
    //         documentId: "hjab369o5oaodt775wr893mz",
    //         title: "PR Tips",
    //         subtitle: "How to boost your permanent residency chances.",
    //         description: null,
    //         content: null,
    //         createdAt: "2025-06-27T17:23:53.493Z",
    //         updatedAt: "2025-06-27T17:23:53.493Z",
    //         publishedAt: "2025-06-27T17:23:53.499Z",
    //         order: 7,
    //     },
    //     {
    //         id: 18,
    //         documentId: "lbw15obayz358f1rmozpx0bd",
    //         title: "Policy Forecast",
    //         subtitle: "Upcoming changes in migration policies.",
    //         description: null,
    //         content: null,
    //         createdAt: "2025-06-27T17:24:13.596Z",
    //         updatedAt: "2025-06-27T17:24:13.596Z",
    //         publishedAt: "2025-06-27T17:24:13.600Z",
    //         order: 8,
    //     },
    // ];
    // const insights: Insight[] = insightsSample;
    const res = await fetch(
        "https://admin.migrateglobe.com/api/insights-and-updates?sort=order:asc"
    );
    const json = await res.json();
    const insights: Insight[] = json.data;
    return (
        <div className="container-1200">
            <Insights insights={insights} />
        </div>
    );
}
