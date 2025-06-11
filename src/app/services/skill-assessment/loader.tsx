import Skeleton from "@/components/loader/SkeletonLoader";

const SkillAssessmentSkeleton = () => {
    return (
        <div className="container-1200">
            <div className="flex flex-col items-center gap-10">
                {/* Back Button */}
                <Skeleton className="w-20 h-6" />

                {/* Page Header */}
                <div className="w-full space-y-2">
                    <Skeleton className="w-1/2 h-8" />
                    <Skeleton className="w-3/4 h-4" />
                </div>

                {/* Assessment Card */}
                <div className="w-full max-w-3xl bg-white rounded-2xl shadow-sm p-6 space-y-6">
                    {/* Step Indicator */}
                    <div className="text-right">
                        <Skeleton className="w-20 h-4 ml-auto" />
                    </div>

                    {/* Main Content */}
                    <div className="flex flex-col items-center space-y-6">
                        <Skeleton className="w-48 h-48" />
                        <Skeleton className="w-1/3 h-6" />
                        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 w-full">
                            {[...Array(4)].map((_, idx) => (
                                <Skeleton key={idx} className="h-10" />
                            ))}
                        </div>
                    </div>

                    {/* Divider */}
                    <Skeleton className="w-full h-px" />

                    {/* Navigation Buttons */}
                    <div className="flex justify-center items-center gap-5">
                        <Skeleton className="w-24 h-8" />
                        <Skeleton className="w-24 h-8" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SkillAssessmentSkeleton;
