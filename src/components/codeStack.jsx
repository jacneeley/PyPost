import React, { useState, useEffect } from "react";
import axios from 'redaxios'

export default function CodeStack(){

    const url = import.meta.env.PUBLIC_API_KEY
    const [code, setCode] = useState([]); //code sent in by user
    const [serverError, setServerError] = useState(false);
    const [text, setText] = useState("");

    function fetchData(url){
        axios.get(url)
        .then(response => {
            if(response.status == 200){
                console.log(response);
                setCode(response.data);
            }
        })
        .catch(err => {
            console.error("ERROR: " + err)
            if(err){
                setServerError(true);
            }
        });
    }

    const handleDelete=(id)=>{
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

    const handleCopy = async (code) =>{
        setText(code);
        await navigator.clipboard.writeText(text);
    }

    function AccordionData({ userCode, index }){
        const [active, setActive] = useState(false);

        return (
            <div className="submissions">
                <button className="x" onClick={()=> handleDelete(index)}>x</button>
                <div className='contents' onClick={()=> setActive(!active)}>
                    <div className="accordion">
                        <p>User: {userCode.username}</p>
                        <div className={active ? "accordion-content" : "hide"}>
                            <div className="sub">
                                <p>code</p>
                                <span>{active ? "-" : "+"}</span>
                            </div>
                            <textarea
                            id="dynamicTxt" 
                            value={userCode.code}
                            readOnly></textarea>
                        </div>
                    </div>
                </div>
                <button className="copy" onClick={()=>handleCopy(userCode.code)}>copy</button>
            </div>
        );
    }

    function DisplayData(){
        return(
            <>
                {code.map((userCode, index) => (
                    <AccordionData userCode={userCode} index={index} key={index} />
                ))}
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