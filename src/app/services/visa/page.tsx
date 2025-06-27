import Visa from "@/components/visa/Visa";

function page() {
    // const res = await fetch(
    //     "http://localhost:1337/api/visa-types?populate=*&sort=order:asc",
    //     {
    //         next: { revalidate: 86400 }, // 24 hours
    //     }
    // );

    // const json = await res.json();
    // const services = json.data;

    return (
        <div className="container-1200">
            <Visa />
        </div>
    );
}

export default page;
