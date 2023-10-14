

const Filter = () => {
    return (
        <div className="w-[200px] p-[20px]">
            <div className="border-2  flex flex-col gap-2">
                <div className="flex justify-between border-b-2 p-3">
                    <h1 className="font-bold">Filter</h1>
                    <button className="underline">Clear</button>
                </div>
                <div>
                    <div className="flex flex-col gap-3 p-[10px]">
                        <div className="flex justify-between">
                            <h1 className="font-bold">Price</h1>
                            <button className="underline">Clear</button>
                        </div>
                        <input type="range" min="1" max="100" value="50" className="w-full bg-[#F0C301]" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Filter