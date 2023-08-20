import React, { useState } from "react";
import Card from "./Card";

const Cards = ({ courses, category }) => {

    const [likedCourses, setLikedCourses] = useState([])


  function getCourses() {
    if(category === "All"){
        let allCourses = [];
        Object.values(courses).forEach((el) =>
          el.forEach((e) => allCourses.push(e))
        );
        return allCourses;
    }else{
        return courses[category]
    }
  }

  return (
    <div className="flex flex-wrap justify-center w-[100%] gap-5 p-4">
        {
            getCourses().map((cd)=>{
                return <Card key={cd.id} id={cd.id} image={cd.image.url} title={cd.title} desc={cd.description} likedCourses={likedCourses} setLikedCourses={setLikedCourses} />
            })
        }
    </div>
  );
};

export default Cards;
