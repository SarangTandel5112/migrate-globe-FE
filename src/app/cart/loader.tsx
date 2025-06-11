import Skeleton from "@/components/loader/SkeletonLoader";

const CartPageSkeleton = () => {
    return (
        <div className="container-1200">
            <div className="mx-auto max-w-7xl space-y-6">
                {/* Heading */}
                <Skeleton className="w-40 h-8" />

                <div className="flex flex-col lg:flex-row gap-4 lg:gap-6">
                    {/* Cart Items Skeleton */}
                    <div className="flex-1 space-y-4">
                        {[1, 2, 3].map((item) => (
                            <div
                                key={item}
                                className="p-4 border rounded-lg flex gap-3 animate-pulse"
                            >
                                <Skeleton className="w-6 h-6" />
                                <div className="flex-1 space-y-3">
                                    <Skeleton className="w-3/4 h-4" />
                                    <Skeleton className="w-full h-3" />
                                    <Skeleton className="w-1/2 h-4" />
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Order Summary Skeleton */}
                    <div className="lg:w-96 space-y-4 animate-pulse">
                        <Skeleton className="w-40 h-5" />
                        <Skeleton className="w-full h-4" />
                        <Skeleton className="w-full h-4" />
                        <Skeleton className="w-full h-4" />
                        <Skeleton className="w-full h-4" />
                        <Skeleton className="w-full h-px bg-gray-300" />
                        <Skeleton className="w-full h-10" />
                    </div>
                </div>

                {/* Service Recommendations Skeleton */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {[1, 2, 3].map((item) => (
                        <div
                            key={item}
                            className="p-4 rounded-2xl bg-gray-100 space-y-3 animate-pulse"
                        >
                            <Skeleton className="w-[70px] h-[70px]" />
                            <Skeleton className="w-3/4 h-4" />
                            <Skeleton className="w-full h-3" />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default CartPageSkeleton;
