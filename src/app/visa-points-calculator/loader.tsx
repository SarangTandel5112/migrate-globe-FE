export default function VisaPointsCalculatorLoader() {
    return (
        <div className="container-1200 animate-pulse">
            <div className="mb-8 space-y-4">
                <div className="h-6 w-28 bg-gray-200 rounded" />
                <div className="h-8 w-64 bg-gray-300 rounded" />
            </div>

            <div className="flex flex-col lg:flex-row gap-6 lg:gap-8">
                {/* Left Column */}
                <div className="flex-1 space-y-4">
                    <div className="bg-white rounded-2xl border border-gray-100 p-6 space-y-4">
                        <div className="h-6 w-48 bg-gray-200 rounded" />
                        <div className="space-y-3">
                            {[...Array(3)].map((_, i) => (
                                <div key={i} className="flex items-start gap-4">
                                    <div className="w-6 h-6 rounded-full bg-gray-300" />
                                    <div className="flex-1 space-y-2">
                                        <div className="h-4 w-3/4 bg-gray-200 rounded" />
                                        <div className="h-3 w-full bg-gray-100 rounded" />
                                    </div>
                                </div>
                            ))}
                        </div>
                        <div className="h-10 w-28 bg-gray-300 rounded" />
                    </div>
                </div>

                {/* Right Column */}
                <div className="lg:w-80 space-y-6">
                    <div className="bg-white rounded-2xl p-4 space-y-6">
                        <div className="flex items-center gap-4">
                            <div className="w-20 h-20 rounded-full bg-gray-200" />
                            <div className="flex-1 space-y-2">
                                <div className="h-4 w-24 bg-gray-200 rounded" />
                                <div className="h-6 w-16 bg-gray-300 rounded" />
                                <div className="h-3 w-32 bg-gray-100 rounded" />
                            </div>
                        </div>

                        <div className="space-y-2">
                            {[...Array(6)].map((_, i) => (
                                <div
                                    key={i}
                                    className="flex items-center gap-4"
                                >
                                    <div className="w-6 h-6 rounded-full bg-gray-200" />
                                    <div className="flex-1 h-4 bg-gray-100 rounded" />
                                    <div className="w-6 h-6 rounded bg-gray-200" />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
