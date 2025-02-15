import { NavBar } from "@/components/navbar/navbar";
import React from "react";

export const Home = () => {
  return (
    <div>
      <div className="relative w-full h-[660px]">
        <div className="absolute top-0 left-0 w-full z-50">
          <NavBar />
        </div>

        <div className="absolute inset-0 w-full h-full">
          <img
            src="https://cdn.sanity.io/images/ocl5w36p/prod2/d0804c623c7fa3863fb7c330e484bc533a8363d6-3840x1320.jpg?w=1600&fm=webp&dpr=2"
            alt="Romantic couple"
            className="w-full h-full object-cover"
          />
 {/* <video 
            width="100%" 
            loop 
            autoPlay 
            playsInline 
            preload="auto" 
            className="w-full h-[94vh] object-cover"
          >
            <source 
              src="https://assets-cug1-825v2.tajhotels.com/video/TAJ_WEBSITE_FILM_MOBILE.mp4?Impolicy=Medium_High" 
              type="video/mp4"
            />
          </video> */}
          {/* <div className="absolute inset-0 bg-black/30"></div> */}
        </div>

        {/* <div className="relative h-full flex items-center justify-center pt-60">
          <h1 className="text-white md:text-6xl text-2xl font-serif ">
            -ROMANTIC STAYS - MEMBERS ONLY
          </h1>
        </div> */}
      </div>
      <div>
     
        <h1 className="flex justify-center item-center text-5xl font-medium">Promotions</h1>
      </div>
    </div>
  );
};
