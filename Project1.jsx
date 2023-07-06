import React, { useState,useEffect } from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

const Project1=()=>{
    const videos={
        BigBuckBunny:
        "https://archive.org/download/BigBuckBunny_124/Content/big_buck_bunny_720p_surround.mp4",
        DonalDuck:
        ' https://www.mobiles24.co/metapreview.php?id=590593&cat=106&h=12697750',
        TomJerry:
        'https://www.mobiles24.co/metapreview.php?id=589370&cat=106&h=12671455',
      };
      const [isActive,setIsActive]=useState({
        id:"divOne"
      })
      useEffect(() => {
        console.log(isActive)
      }, [isActive])
    const handleClick=(event)=>{
        setIsActive ({
            id:event.target.id
        })
    }
    return (
        <>
        <div className="video_player">
        <div className="video">
          <h1> Project 1:Video Player </h1>
          <button id="divOne" onClick={(event)=>{handleClick(event)}}>TomJerry</button>
          <button id="divTwo" onClick={(event)=>{handleClick(event)}}>BigBuckBunny</button>
          <button id="divThree" onClick={(event)=>{handleClick(event)}}>DonalDuck</button>

          <div className={isActive.id==="divOne"?"divOne":"divOne d-none"}>
          <video controls width="500px" height="300px">
            <source src={videos.TomJerry} type="video/mp4" />
            Sorry, your browser doesn't support embedded videos.
           </video>
          </div>

          <div className={isActive.id==="divTwo"?"divTwo":"divTwo d-none"}>
          <video controls width="500px" height="300px">
            <source src={videos.BigBuckBunny} type="video/mp4" />
            Sorry, your browser doesn't support embedded videos.
           </video>
          </div>

          <div className={isActive.id==="divThree"?"divThree":"divTwo d-none"}>
          <video controls width="500px" height="300px">
            <source src={videos.DonalDuck} type="video/mp4" />
            Sorry, your browser doesn't support embedded videos.
           </video>
          </div>


          
          
          
        </div>
      </div>
        </>
    );
}

export  default Project1