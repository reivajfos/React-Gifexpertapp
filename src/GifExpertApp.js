

import React, { useState } from "react";
import { AddCategory } from "./components/AddCategory";
import { GifGrid } from "./components/GifGrid";
export const GifExpertApp = () => {

    //const categories = ['One Punch','Dragon Ball','One Piece'];

    const [categories, setCategories] = useState(['One Piece']);
    /*
    const handleAdd = ()=>{
       //setCategories(['Topolino',...categories]);
       setCategories(film=>[...categories,'Tutto Reality']);

    }

    */

    return (
        <>
            <h2>GifExpertApp</h2>
            <AddCategory setCategories={setCategories} />
            <hr />
            <button >Agregar</button>
            <ol>
                {
                    categories.map(category => (

                        <GifGrid category = {category}  key = {category}/>
                    
                    ))

                }
            </ol>
        </>
    );
}


//export default GifExpertApp;