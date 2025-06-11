import Skeleton from "@/components/loader/SkeletonLoader";

const BuyDocumentsChecklistsSkeleton = () => {
    return (
        <div className="container-1200">
            <div className="mx-auto max-w-7xl">
                <div className="flex flex-col md:flex-row gap-6">
                    {/* Left Column - Main Content Skeleton */}
                    <div className="flex-1 space-y-6">
                        {/* Back Button Skeleton */}
                        <Skeleton className="w-24 h-4" />

                        {/* Checklist Details Skeleton */}
                        <div className="space-y-4">
                            <Skeleton className="w-64 h-8" />
                            <Skeleton className="w-80 h-4" />
                            <Skeleton className="w-full h-40 rounded-lg" />
                            <Skeleton className="w-1/2 h-5" />
                            <Skeleton className="w-full h-20" />
                        </div>
                    </div>

                    {/* Right Column - Pricing Sidebar Skeleton */}
                    <div className="md:w-72 lg:w-96">
                        <div className="md:sticky md:top-8 bg-white rounded-xl p-6 space-y-4 animate-pulse">
                            <Skeleton className="w-40 h-5" />
                            <Skeleton className="w-24 h-8" />
                            <Skeleton className="w-3/4 h-4" />
                            <Skeleton className="w-full h-px bg-gray-300" />
                            <Skeleton className="w-32 h-4" />
                            <Skeleton className="w-1/2 h-4" />
                            <Skeleton className="w-full h-10" />
                            <Skeleton className="w-full h-10" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BuyDocumentsChecklistsSkeleton;
