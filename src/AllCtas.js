import React, { useEffect, useState } from 'react'
import { useParams, useNavigate } from "react-router-dom";
import axios from 'axios'

const AllCtas = () => {
    let params = useParams();
    const SERVER = "http://localhost:4000/prods"
    
    const [prods, setprods] = useState([])
    const [title, settitle] = useState("")
    const [views, setViews] = useState(0)
    const [cat, setCat] = useState(0)
    const [refFlag, setrefFlag] = useState(true)
    useEffect(() => {
        // console.log("new cat selected:" ,params.id);
        axios.get(SERVER + "?cat=" + params.id).then(res => setprods(res.data))
        // axios.get(SERVER + "?cat=" + params.id).then(res => console.log(res.data))
    }, [params.id,refFlag])

    const add=()=>{ axios.post(SERVER, {title,views,cat}).then(res => console.log(res.data)) }
    const del=(id)=>{
        axios.delete(SERVER +"/" +id).then(res => setrefFlag(! refFlag)) 
    }
    return (
        <div >
            {params.id}
            <h2>Items count: {prods.length}</h2>
            <hr /><br></br>
            <div className="row row-cols-1 row-cols-md-5 g-4">
                {prods.map((prod, ind) =>
                    <div key={ind} className="col"><div className="card">
                        <img className="card-img-top" alt="" src={`https://picsum.photos/10${ind}`}></img>
                        <div className="card-body">
                            <h5 className="card-title">{prod.title}</h5>
                            <p className="card-text">{prod.id} - {prod.views}</p>
                            <button className='btn btn-danger' onClick={()=>del(prod.id)}>Kill them all</button>
                        </div>
                    </div>
                    </div>)}

            </div>

            Add new product:
            title <input onChange={(e)=>settitle(e.target.value)}></input>
            views <input onChange={(e)=>setViews(e.target.value)}></input>
            cat<input onChange={(e)=>setCat(e.target.value)}></input>
            <button onClick={()=>add()}>Add</button>
        </div>

    )
}
export default AllCtas

// { "id": "4", "title": "unique product", "views": 50, "cat": 3 },
