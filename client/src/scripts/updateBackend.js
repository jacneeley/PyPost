import axios from 'axios'

function updateBackend(url, obj){
    axios({
        method: "post",
        url:url,
        data: obj
    })
    .then(response => {
        console.log(response)
    })
    .catch(error => console.error("ERROR: "+ error));
    //return window.location.replace("/success");
}

export default updateBackend