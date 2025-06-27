import Insights from "@/components/insights/Insights";

function Page() {
    // http://localhost:1337/api/insights-and-updates?sort=order:asc

    // const res = await fetch(
    //     "http://localhost:1337/api/insights-and-updates?sort=order:asc",
    //     {
    //         next: { revalidate: 86400 }, // 24 hours
    //     }
    // );

    // const json = await res.json();
    // const insights = json.data;
    return (
        <div className="container-1200">
            <Insights />
        </div>
    );
}

export default Page;
