import { useState, useEffect } from "react"
import axios from "axios"


export function useFetch (url:any) {
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(false)

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            try {
                const res = await axios.get(url);
                setData(res.data);
            } catch(err:any){
                setError(err);
            }
            setLoading(false)
        };
        fetchData();
    }, [url]);
    
    // const reFetch = async () => {
    //     setLoading(true);
    // try {
    //     const res = await axios.get(url);
    //     setData(res.data);
    // } catch(err:any){
    //     setError(err);
    // }
    // setLoading(false)
    // };
    return { data, loading, error, 
 }
};