import { useParams } from "react-router-dom";
import Header from "../Shared/Header/Header";
import RightSideNav from "../Shared/RightSideNav/RightSideNav";
import Navbar from "../Shared/Navbar/Navbar";


const NewsDetails = () => {
    const { id } = useParams();
    return (
        <div>
            <Header></Header>
            <div className="mt-6">
                <Navbar></Navbar>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 my-16">
                <div className="md:col-span-3 border">
                    <h3 className="text-3xl">news...</h3>
                    <p>{id}</p>

                </div>


                <div className="border">
                    <RightSideNav></RightSideNav>
                </div>


            </div>
        </div>
    );
};

export default NewsDetails;