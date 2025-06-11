import Skeleton from "@/components/loader/SkeletonLoader";

const VisaPageSkeleton = () => {
    return (
        <div className="container-1200 space-y-4">
            <Skeleton className="w-2/3 h-10" />
            <Skeleton className="w-1/2 h-4" />

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
                {[...Array(6)].map((_, idx) => (
                    <div
                        key={idx}
                        className="rounded-xl overflow-hidden border border-gray-200 shadow-md bg-white"
                    >
                        <Skeleton className="w-full h-52" />
                        <div className="p-4 space-y-2">
                            <Skeleton className="w-3/4 h-6" />
                            <Skeleton className="w-full h-4" />
                            <Skeleton className="w-1/3 h-4" />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default VisaPageSkeleton;
