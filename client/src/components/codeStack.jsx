import React, { useState, useEffect } from "react";
import axios from 'axios'

export default function CodeStack(){

    const url = import.meta.env.PUBLIC_API_KEY
    //code sent in by user
    const [code, setCode] = useState([]);

    function fetchData(url){
        axios.get(url)
        .then(response => {
            if(response.status == 200){
                console.log(response)
                setCode(response.data)
            }
            else{
                console.log("Error")
            }
        })
        .catch(err => console.error("ERROR: " + err))
    }

    function DisplayData(){
        return(
            <>
            {code.map((userCode, key) => {
                return(
                    <div className='submissions' key={key}>
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
        //console.log(fetchData(url));
        fetchData(url);
    },[]);

    return(
        <>
            <DisplayData />
        </>
    );
}