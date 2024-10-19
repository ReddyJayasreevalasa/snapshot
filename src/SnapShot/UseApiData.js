import { useEffect, useState } from "react"

export const UseApiData=(url)=>{
    const [data,setData]=useState([])
    useEffect(()=>{
        fetch(url).then((res)=>res.json()).then((res)=>{
            const mydata=res.photos.photo.map((val)=>{
                let url = `https://farm${val.farm}.staticflickr.com/${val.server}/${val.id}_${val.secret}_m.jpg`;
                return {title:val.title,url}
            })
            setData(mydata)
        })
    },[])
    return data;
}