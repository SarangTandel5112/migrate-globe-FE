// app/services/page.tsx
import Services from "@/components/services/Services";

// const services = [
//     {
//         id: 1,
//         title: "Smart Migration Plan (Buy Map)",
//         subtitle:
//             "Create Your Personalized Migration Route With Our Interactive Planning Map.",
//         key: "smart-migration-plan",
//         order: 1,
//     },
//     {
//         id: 2,
//         title: "Buy Documents Checklists",
//         subtitle:
//             "Get A Verified Checklist Tailored To Your Visa And Occupation. No Confusion. No Missing Docs.",
//         key: "checklists",
//         order: 2,
//     },
//     {
//         id: 3,
//         title: "Find Visa Options",
//         subtitle:
//             "Explore Visa Types That Match Your Profile, Goals, And Timeline — Fast And Accurate.",
//         key: "visa",
//         order: 3,
//     },
//     {
//         id: 4,
//         title: "Skill Assessment",
//         subtitle:
//             "Check If Your Occupation Is Eligible And Buy The Step-By-Step Assessment Guide Instantly.",
//         key: "skill-assessment",
//         order: 4,
//     },
//     {
//         id: 5,
//         title: "Buy Cheapest Insurance",
//         subtitle:
//             "Compare And Purchase Affordable Overseas Health Cover From Top Providers.",
//         key: "insurance",
//         order: 5,
//     },
//     {
//         id: 6,
//         title: "Zoom Consultations",
//         subtitle:
//             "Get Expert Advice Face-To-Face — Online. Book A Call With Our Migration Consultants.",
//         key: "zoom-consultation",
//         order: 6,
//     },
//     {
//         id: 7,
//         title: "Occupation Tracking Tool",
//         subtitle:
//             "Track Updates On Your Occupation — Demand Trends, State Invites, And Policy Changes.",
//         key: "occupation-tracking-tool",
//         order: 7,
//     },
//     {
//         id: 8,
//         title: "Admission & Course Change Advice",
//         subtitle:
//             "Switching Your Course Or College? Get Guidance To Stay Compliant And Visa-Safe.",
//         key: "course-advice",
//         order: 8,
//     },
// ];

export default async function ServicesPage() {
    const res = await fetch(
        "https://admin.migrateglobe.com/api/services?sort=order:asc",
    );

    const json = await res.json();
    const services = json.data;

    return <Services services={services} />;
}
