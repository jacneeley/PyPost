import React, { useState, useEffect } from "react";
import axios from 'axios'

export default function CodeStack(){

    const url = import.meta.env.PUBLIC_API_KEY
    const [code, setCode] = useState([]); //code sent in by user
    const [serverError, setServerError] = useState(false);

    function fetchData(url){
        axios.get(url)
        .then(response => {
            if(response.status == 200){
                console.log(response);
                setCode(response.data);
            }
            else{
                console.log("Error")
            }
        })
        .catch(err => {
            console.error("ERROR: " + err)
            if(err){
                setServerError(true);
            }
        });
    }

    function postDelete(id, url){
        axios.post(`${url}/del/${id}`)
        .then(response => {
            setCode(response.data);
        })
        .catch(err => {
            console.error("ERROR: " + err)
            if(err){
                setServerError(true);
            }
        });
    }

    const handleDelete=(id)=>{
        postDelete(id, `${url}`);
    }

    function DisplayData(){
        return(
            <>
            {code.map((userCode, key) => {
                return(
                    <div className='submissions' key={key}>
                        <button onClick={()=> handleDelete(key)}>x</button>
                        <p>User: {userCode.username}</p>
                        <textarea 
                        value={userCode.code}
                        readOnly />
                    </div>
                );
            })
            }
            </>
        );
    }

    useEffect(() => {
        fetchData(url);
    },[]);

    return(
        <>
            { serverError ? (<p className="text-center">Internal Server Error...</p>) :
                (!code.length ? <p className="text-center">Loading...</p> : <DisplayData />)
            }
        </>
    );
}