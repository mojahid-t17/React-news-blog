import { useLoaderData, useParams } from "react-router-dom";
import Navbar from "../navbar/Navbar";
import RightNav from "../shared/RightNav/RightNav";

const NewsDetails = () => {
    
  const news=useLoaderData();
 
  const { id } = useParams();
 const displayNews=news.find(item=>item._id==id)


  return (
    <div>
      <Navbar></Navbar>
      <div className="grid grid-cols-4">
      <div className="col-span-3 p-6">
      <div className="card card-compact   bg-base-100  shadow-xl ">
        <figure>
          <img  className="w-full p-3"
            src={displayNews.image_url}
            alt="Shoes"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{displayNews.title}</h2>
          <p>{displayNews.details}</p>
          <div className="card-actions justify-end">
            
          </div>
        </div>
      </div>
      </div>
        <div>
           <RightNav></RightNav>
        </div>
      </div>
    </div>
  );
};

export default NewsDetails;
