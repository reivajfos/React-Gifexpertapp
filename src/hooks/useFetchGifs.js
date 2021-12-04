import { useEffect, useState } from "react"
import { getGifs } from "../helpers/getGifs";

export const useFetchGifs = (category) => {

    const [state, setState] = useState({

        data: [],
        loading: true,

    });

    useEffect(() => { //solo sirve para

       


            getGifs(category).then(img => {
                return setState({
                    data: img,
                    loading: false,
                })
            })

       


    }, [category]);



    return state;

}