import LocationLargeIcon from "../icons/LocationLargeIcon";

interface Location {
    id: number;
    name: string;
    address: string;
    lat: number;
    lon: number;
    x: number;
    y: number;
}
interface LocationCard {
    id: number;
    name: string;
    address: string;
    selectedLocation: Location | null;
}

function LocationCard({ id, name, address, selectedLocation }: LocationCard) {
    return (
        <div key={id} className={`${selectedLocation?.id === id ? 'bg-navy-blue-600' : 'bg-navy-blue-400'} rounded p-4 h-full`}>
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
