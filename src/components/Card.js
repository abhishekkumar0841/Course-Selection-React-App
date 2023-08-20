import React, { useState } from "react";
import { FcLikePlaceholder } from "react-icons/fc";
import { FcLike } from "react-icons/fc";
import { toast } from "react-toastify";

const Card = ({id, image, title, desc, likedCourses, setLikedCourses }) => {
    const [like, setLike] = useState(false)

    function clickHandler(){
        if(likedCourses.includes(id)){
            setLikedCourses((prev)=> prev.filter((el)=> {
               return el !== id
            }))
            toast.warning("Like Removed")
            setLike(false)
        }else{
            if(likedCourses.length === 0){
                setLikedCourses([id])
            }else{
                setLikedCourses((prev)=> [...prev, id])
            }
            toast.success("Liked Successful")
            setLike(true)
        }
    }

  return (
    <div className=" bg-indigo-950 rounded-lg p-2 flex flex-col items-center w-[300px] relative">
      <div className="">
        <img className="w-full" src={image} alt="" />
      </div>
      <div className="flex flex-col items-center justify-center gap-2 mt-4">
        <h2 className="text-xl text-white">{title}</h2>
        <p className='text-sm text-white'>{desc.length > 100 ? desc.substr(0,99) + "..." : desc }</p>
      </div>
        <button onClick={clickHandler} className="absolute right-2 top-[45%] flex justify-center items-center h-[40px] w-[40px] bg-white rounded-full text-2xl p-1">
          { like ? <FcLike /> : <FcLikePlaceholder />}
        </button>
    </div>
  );
};

export default Card;
