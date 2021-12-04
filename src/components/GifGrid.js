

import React, { useEffect, useState } from "react";
import { GifGridItem } from './GifGridItem';
import { useFetchGifs } from "../hooks/useFetchGifs";

export const GifGrid = ({ category }) => {



    const { data:images, loading } = useFetchGifs(category);

  
    return (
        <>
            <h2 className = "animate__animated animate__bounce animate__repeat-2">{category}</h2>



            {loading &&  <p>Loading</p>}


            

                <div className="card-grid">


                    {
                        images.map(img => {
                            return <GifGridItem key={img.id} {...img} />
                        })
                    }

                </div>
            
        </>
    );


};