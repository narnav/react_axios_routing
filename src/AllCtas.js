import React, { useEffect, useState } from 'react'
import { useParams, useNavigate } from "react-router-dom";
import axios from 'axios'

const AllCtas = () => {
    let params = useParams();
    const SERVER ="http://localhost:4000/prods?cat="
    const [prods, setprods] = useState([])
   
    useEffect(() => {
        // console.log("new cat selected:" ,params.id);
        axios.get(SERVER +params.id).then(res => setprods(res.data))
        
    }, [params.id])
    
  return (
    <div>AllCtas
        {params.id}
        <h2>Items count: {prods.length}</h2>
        {prods.map((prod,ind) => <div>{prod.title},{prod.id}<img src={`https://picsum.photos/10${ind}`}></img></div>)}
    </div>
  )
}

export default AllCtas