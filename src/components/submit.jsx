import React from "react";
import updateBackend from "../scripts/updateBackend";

export default function submitCode(){

    const url = import.meta.env.PUBLIC_API_KEY;

    const handleSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);

        //validate
        const username = formData.get("username");
        const submittedCode = formData.get("code");

        if(!username || !submittedCode){
            alert("You cannot leave fields blank...")
            return;
        }

        const payload = Object.fromEntries(formData);
        updateBackend(`${url}/add`, payload);
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <label>username:</label>
                <input
                    className=""
                    name="username"
                    type="text"
                    placeholder="enter a name here..."
                />
                <textarea 
                    
                    name="code"
                    placeholder="paste code here..."
                />
                <button className="submit-btn" type="submit">Submit</button>
            </form>
        </>
    )
}