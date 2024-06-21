import axios from 'redaxios'

function updateBackend(url, obj){
    axios({
        method: "post",
        url:url,
        data: obj
    })
    .then(response => {
        if(response.status === 200){
            return window.location.replace("/success");
        }
    })
    .catch(error => {
        console.error("ERROR: "+ error)
        alert("FAILED: INTERNAL SERVER ERROR")
    });
}

export default updateBackend