import LocationLargeIcon from "../icons/LocationLargeIcon";

interface Location {
    id: string;
    name: string;
    address: string;
}

function LocationCard({ id, name, address }: Location) {
    return (
        <div key={id} className="bg-navy-blue-400 rounded p-4 h-full">
            <div className="flex items-center gap-2 mb-2">
                <LocationLargeIcon />
                <h3 className="font-semibold text-base text-white tracking-[0.608px] capitalize">
                    {name}
                </h3>
            </div>
            <p className="text-xs text-navy-blue-50 tracking-[0.608px] capitalize">
                {address}
            </p>
        </div>
    );
}

export default LocationCard;
