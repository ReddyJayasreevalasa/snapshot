import { useEffect, useState } from "react"
import Child from "./Child"
import { MyContext } from "./ContextFile"
import { UseApiData } from "./UseApiData"
const apiUrl="https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=636e1481b4f3c446d26b8eb6ebfe7127&tags=null&per_page=30&format=json&nojsoncallback=1"

const MainContainer=()=>{
    const data=UseApiData(apiUrl)
    const [snapData,setSnapData]=useState([])
    const [type,setType]=useState(null)
    useEffect(()=>{
        const apiUrl=`https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=636e1481b4f3c446d26b8eb6ebfe7127&tags=${type}&per_page=30&format=json&nojsoncallback=1`
        
        fetch(apiUrl).then((res)=>res.json()).then((res)=>{
            const mydata=res.photos.photo.map((val)=>{
                let url = `https://farm${val.farm}.staticflickr.com/${val.server}/${val.id}_${val.secret}_m.jpg`;
                return {title:val.title,url}
            })
            setSnapData(mydata)
        })
    },[type])
    const getFilter=(type)=>{
        setType(type)
    }
    return <MyContext.Provider value={{data:snapData,getFilter}}>
        <Child />
    </MyContext.Provider>
}
export default MainContainer;