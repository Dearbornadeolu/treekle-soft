import Xplorer from "../../images/xplorer.png";

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
        </div>
    )
}

export default Dashboard