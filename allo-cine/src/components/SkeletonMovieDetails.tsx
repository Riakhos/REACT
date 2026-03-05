
const SkeletonMovieDetails = () => {
    return (
        <div className="card bg-base-100 flex flex-row items-stretch shadow-sm animate-pulse w-full min-h-180">
            <figure className="w-1/2 shrink-0 flex items-center justify-center p-4">
                <div className="bg-gray-300 w-120 h-180 rounded"></div>
            </figure>
            <div className="card-body w-1/2 flex flex-col justify-between">
                <div className="h-12 bg-gray-300 rounded w-2/3 mb-4"></div>
                <div className="space-y-3 mb-2">
                    <div className="h-5 bg-gray-300 rounded w-5/6"></div>
                    <div className="m-5 space-y-2">
                        <div className="h-4 bg-gray-300 rounded w-1/2"></div>
                        <div className="h-4 bg-gray-300 rounded w-2/3"></div>
                        <div className="h-4 bg-gray-300 rounded w-1/3"></div>
                    </div>
                    <div className="m-5 space-y-2">
                        <div className="h-4 bg-gray-300 rounded w-1/2"></div>
                        <div className="h-4 bg-gray-300 rounded w-2/3"></div>
                    </div>
                    <div className="flex justify-end gap-1 mt-4">
                        {Array.from({ length: 5 }).map((_, i) => (
                            <div key={i} className="mask mask-star bg-gray-300 w-6 h-6"></div>
                        ))}
                    </div>
                </div>
                <div className="card-actions justify-end flex items-center gap-8 mt-4">
                    <div className="bg-gray-300 rounded-full w-8 h-8"></div>
                    <div className="bg-gray-300 rounded-full w-8 h-8"></div>
                    <div className="bg-gray-300 rounded-full w-8 h-8"></div>
                    <div className="bg-gray-300 rounded-full w-7 h-7"></div>
                </div>
            </div>
        </div>
    )
}

export default SkeletonMovieDetails