

const Filter = () => {
    return (
        <div className="w-[30%] p-[20px]">
            <div className="border-2  flex flex-col gap-2">
                <div className="flex justify-between border-b-2 p-3">
                    <h1 className="font-bold">Filter</h1>
                    <button className="underline">Clear</button>
                </div>
                <div className="border-b-2 p-3">
                    <div className="flex flex-col gap-3 p-[10px]">
                        <div className="flex justify-between">
                            <h1 className="font-bold">Price</h1>
                            <button className="underline">Clear</button>
                        </div>
                        <input type="range" min="1" max="100" value="50" className="w-full bg-[#F0C301]" />
                        <div className="text-end">
                            <span className="font-bold">50</span>
                            <span className="ml-1" style={{ content: '"\x106"' }}></span>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col gap-3 p-[10px] border-b-2">
                    <div className="flex justify-between">
                        <h1 className="font-bold">Payment Options</h1>
                        <button className="underline">Clear</button>
                    </div>
                    <div>
                        <label className="flex items-center gap-2">
                            <input type="checkbox" className="form-checkbox" />
                            <span>Pay Small Small</span>
                        </label>
                        <label className="flex items-center gap-2">
                            <input type="checkbox" className="form-checkbox" />
                            <span>Full Payment</span>
                        </label>
                    </div>
                </div>
                <div className="flex flex-col gap-3 p-[10px] border-b-2">
                    <div className="flex justify-between">
                        <h1 className="font-bold">Stops</h1>
                        <button className="underline">Clear</button>
                    </div>
                    <div className="flex justify-start gap-6">
                        <label htmlFor="" className="flex flex-col">
                            <input type="text" className="w-[50px] h-[50px] border-2 text-black placeholder:text-black" placeholder="1" />
                            <span>N800,000</span>
                        </label>
                        <label htmlFor="" className="flex flex-col">
                            <input type="text" className="w-[50px] h-[50px] border-2 text-black placeholder:text-black" placeholder="1+" />
                            <span>N1 000,000</span>
                        </label>

                    </div>
                </div>
                <div className="flex flex-col gap-3 p-[10px] border-b-2">
                    <div className="flex justify-between">
                        <h1 className="font-bold">Airline</h1>
                        <button className="underline">Clear</button>
                    </div>
                    <div>
                        <label className="flex items-center gap-2">
                            <input type="checkbox" className="form-checkbox" />
                            <span>Kenya Airways</span>
                        </label>
                        <label className="flex items-center gap-2">
                            <input type="checkbox" className="form-checkbox" />
                            <span>Ethiopian Airways</span>
                        </label>
                        <label className="flex items-center gap-2">
                            <input type="checkbox" className="form-checkbox" />
                            <span>Turkish Airways</span>
                        </label>
                        <label className="flex items-center gap-2">
                            <input type="checkbox" className="form-checkbox" />
                            <span>Lufthansa </span>
                        </label>
                        <label className="flex items-center gap-2">
                            <input type="checkbox" className="form-checkbox" />
                            <span>Quatar Airways</span>
                        </label>
                    </div>
                    
                </div>
                <div>
                        <h1 className="font-bold">Flexibility</h1>
                    </div>
            </div>
        </div>
    )
}

export default Filter