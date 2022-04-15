const handleVideoPage = () => {
    document.querySelector("#video-upload").addEventListener("change",
        videoUpload()
    );
    
};

const videoUpload = () => {
    console.log("handle video upload");
};
const updateProgressBar = (value) => {

}
const uploadVideo  = async () => {
    console.log("inside uploadVideo");
    //1.Get file;

    var file = document.getElementById("video-upload").files[0];

    let bar = document.querySelector("#progressBar");
    
    //2.Create file to as formData so it can be send with ajax
    let formData = new FormData();
    formData.append("files1", file);
    
    //3.Handle upload 
    let getR = new XMLHttpRequest();

    //1. onload is same as load and is called after load has been upgraded

 

    getR.upload.onprogress = (event) => {
        console.log(event.loaded);
        console.log(event.total);
        let percent = (event.loaded/ event.total) * 100;
        console.log("inside onProgress");
        console.log(`percent =  ${percent}`);
    }
    getR.upload.onload = (event) => {
        bar.value = 100;
    }
    getR.open("POST", "/videoUpload");




    getR.send(formData);
    console.log("the end");
   
    
}


const progressHandler = (event) => {
    console.log(event.loaded);
}