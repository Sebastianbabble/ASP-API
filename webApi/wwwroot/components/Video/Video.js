const handleVideoPage = () => {
    document.querySelector("#video-upload").addEventListener("change",
        videoUpload()
    );
    
};

const videoUpload = () => {
    console.log("handle video upload");
};

const uploadVideo  = async () => {
    console.log("inside uploadVideo");
    //1.Get file;
    var file = document.getElementById("video-upload").files[0];

    //2.Create file to as formData so it can be send with ajax
    let formData = new FormData();
    formData.append("files1", file);
    
    //3.Handle upload 
    let getR = new XMLHttpRequest();
    getR.open("GET", "/videoUpload");

    //1. onload is same as load and is called after load has been upgraded
    getR.onload = () => {
        console.log(getR.responseText); 
    }

    //2.Handle the progress of the upload
    getR.addEventListener('progress', event => {
        console.log('Progress updating');
    })
    getR.send();
   
    
}


const progressHandler = (event) => {
    console.log(event.loaded);
}