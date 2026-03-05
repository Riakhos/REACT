const SkeletonMovie = () => {

    return (        
        <div className="card bg-base-100 w-96 h-150 shadow-sm animate-pulse">
            <figure>
                <div className="bg-gray-300 w-full h-72 rounded"></div>
            </figure>
            <div className="card-body">
                <div className="h-6 bg-gray-300 rounded w-2/3 mb-4"></div>
                <div className="h-4 bg-gray-300 rounded w-full mb-2"></div>
                <div className="h-4 bg-gray-300 rounded w-5/6 mb-6"></div>
                <div className="card-actions justify-end flex items-center gap-8">
                    <div className="bg-gray-300 rounded-full w-8 h-8"></div>
                    <div className="bg-gray-300 rounded-full w-8 h-8"></div>
                    <div className="bg-gray-300 rounded-full w-8 h-8"></div>
                    <div className="bg-gray-300 rounded-full w-7 h-7"></div>
                </div>
            </div>
        </div>
    )
}

export default SkeletonMovie