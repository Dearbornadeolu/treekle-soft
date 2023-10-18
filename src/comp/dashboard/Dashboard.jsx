import Xplorer from "../../images/xplorer.png";
import Filter from "./dashComp/Filter";
import MainComp from "./dashComp/MainComp";

const Dashboard = () => {
    return (
        <div>
            <div className="p-[20px] flex justify-start gap-11 items-center">
                <div className="flex items-center gap-3" >
                    <img src={Xplorer} alt="" />
                    <p>DestinationXplorer</p>
                </div>
                <div className="flex gap-4">
                    <button className="border-[1px] px-3 py-1 border-black rounded-md">Hotels</button>
                    <button>Flights</button>
                </div>
            </div>
            <div className="bg-black text-white  flex justify-between items-center">
                <div className="flex gap-3">
                    <h1 >Muritala Muhammed Airport</h1>
                    <h1>Dubai International Airport</h1>
                </div>
                <div className="border-l-2 border-[#F0C301] p-[1rem]">
                    <h1 >
                        Oct 2, 2023
                    </h1>
                </div>
                <div className="border-l-2 border-[#F0C301] p-[1rem]">
                    <h1 >1, Adult Economy</h1>
                </div>
                <div className="border-l-2 border-[#F0C301] p-[1rem]">
                    <button className="border-2 border-white px-[1rem] rounded-md]">Edit</button>
                </div>
            </div>
            <div className="flex">
                <Filter/>
                <MainComp/>
            </div>
        </div>
    )
}

export default Dashboard