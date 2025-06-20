"use client";

import Skeleton from "@/components/loader/SkeletonLoader";

const InsuranceComparisonSkeleton = () => {
    return (
        <div className="min-h-screen bg-background-1">
            <div className="container-1200 px-4 md:px-6 lg:px-8 py-8 md:py-10 space-y-8">
                {/* Header Section */}
                <div className="space-y-2">
                    <Skeleton className="w-3/4 h-8" />
                    <Skeleton className="w-1/2 h-4" />
                </div>

                {/* Form Section */}
                <div className="bg-white rounded-2xl p-4 shadow-sm border border-neutrals-200 space-y-4">
                    <div className="grid grid-cols-1 lg:grid-cols-5 gap-4">
                        {[1, 2, 3, 4].map((item) => (
                            <Skeleton key={item} className="h-10" />
                        ))}
                        <Skeleton className="h-10 bg-navy-blue/40" />
                    </div>
                </div>

                {/* Comparison Table Header */}
                <div className="bg-white rounded-2xl border border-neutrals-200 shadow-sm">
                    <div className="flex border-b border-neutrals-200">
                        <Skeleton className="flex-1 p-6 h-8" />
                        {[...Array(5)].map((_, idx) => (
                            <Skeleton key={idx} className="flex-1 p-6 h-24" />
                        ))}
                    </div>

                    {/* Feature Rows Skeleton */}
                    {[...Array(5)].map((_, rowIdx) => (
                        <div
                            key={rowIdx}
                            className="flex border-b border-neutrals-200"
                        >
                            <Skeleton className="flex-1 p-6 h-8" />
                            {[...Array(5)].map((_, colIdx) => (
                                <Skeleton
                                    key={colIdx}
                                    className="flex-1 p-6 h-8"
                                />
                            ))}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default InsuranceComparisonSkeleton;
