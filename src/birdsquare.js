

const BirdSquare = ({birddata}) => {
    console.log(birddata)
    return (
        <div className="flex flex-row my-16 shadow-md rounded-md border border-primary-orange/50 p-4">
            <div>
                <p className="text-2xl capitalize font-black font-serif text-primary-orange ">{birddata.name}</p>
                <p className="italic capitalize text-sm mb-6">{birddata.sciName}</p>
                <p>Status: {birddata.status}</p>
                <p>Region: {birddata.region}</p>
            </div>
            <div>
                <img src={birddata.images} className="object-none h-100 w-100"/>
            </div>

        </div>
    )
}

export default BirdSquare