import Skeleton from "@/components/loader/SkeletonLoader";

const VisaPageFullSkeleton = () => {
    return (
        <div className="container-1200 space-y-4">
            {/* Header */}
            <Skeleton className="w-2/3 h-10" />
            <Skeleton className="w-1/2 h-4" />
            <Skeleton className="w-full h-px bg-gray-300" />

            {/* Visa Types */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {[...Array(6)].map((_, idx) => (
                    <Skeleton key={idx} className="h-24" />
                ))}
            </div>

            {/* Visa Detail Title */}
            <Skeleton className="w-1/3 h-8" />

            {/* Visa Detail Section */}
            <div className="grid md:grid-cols-2 gap-10">
                <Skeleton className="w-full h-80" />
                <div className="space-y-3">
                    <Skeleton className="w-1/3 h-6" />
                    {[...Array(3)].map((_, idx) => (
                        <Skeleton key={idx} className="w-full h-4" />
                    ))}
                    <Skeleton className="w-1/3 h-6 mt-4" />
                    {[...Array(4)].map((_, idx) => (
                        <Skeleton key={idx} className="w-2/3 h-4" />
                    ))}
                </div>
            </div>

            {/* Services Grid */}
            <div className="grid md:grid-cols-3 gap-4">
                {[...Array(3)].map((_, idx) => (
                    <div
                        key={idx}
                        className="border rounded-xl p-4 bg-white shadow-sm space-y-3"
                    >
                        <Skeleton className="w-8 h-8" />
                        <Skeleton className="w-1/2 h-4" />
                        <Skeleton className="w-full h-3" />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default VisaPageFullSkeleton;
