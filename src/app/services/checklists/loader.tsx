import Skeleton from "@/components/loader/SkeletonLoader";

export const DocumentsChecklistsSkeleton = () => {
    return (
        <div className="container-1200 animate-pulse space-y-8">
            {/* Back button skeleton */}
            <div className="w-24 h-4 bg-gray-200 rounded" />

            {/* Page Header */}
            <div className="space-y-2">
                <Skeleton className="w-60 h-8" />
                <Skeleton className="w-80 h-4" />
            </div>

            {/* Form Section Skeleton */}
            <div className="bg-white rounded-2xl p-4 md:p-6 space-y-6">
                <Skeleton className="w-48 h-5" />
                <div className="grid grid-cols-12 gap-4">
                    <Skeleton className="col-span-6 lg:col-span-4 h-24" />
                    <Skeleton className="col-span-6 lg:col-span-4 h-24" />
                </div>

                <Skeleton className="w-60 h-5" />
                <Skeleton className="w-full h-12" />
            </div>

            {/* Results Section Skeleton */}
            <div className="bg-white rounded-2xl p-4 md:p-6 space-y-6">
                <Skeleton className="w-72 h-8" />

                {[1, 2].map((_, i) => (
                    <div
                        key={i}
                        className="bg-background-1 rounded-lg p-4 md:p-6 space-y-4"
                    >
                        <Skeleton className="w-3/4 h-5" />
                        <Skeleton className="w-full h-3" />
                        <div className="flex gap-4 sm:gap-5">
                            <Skeleton className="w-24 h-10" />
                            <Skeleton className="w-32 h-10" />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};
