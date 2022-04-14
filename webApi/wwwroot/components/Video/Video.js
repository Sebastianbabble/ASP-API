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
    
    fetch("/videoUpload")
        .then(response => response.text())
        .then(data => console.log(data));
        

    
    //ajax.upload.addEventListener("progress", progressHandler(event), false);
}
const makeRequest = (method, url) => {
    console.log("inside make request");
    return new Promise(function (resolve, reject) {
        let ajax = new XMLHttpRequest();
        ajax.open("GET", "/videoUpload");

        ajax.onerror = function () {
            reject({
                status: "du",
                statusText: ajax.statusText
            });
        };

        ajax.ontimeout = function () {
            console.error("the reqyest timed out");
        };
        ajax.send(null);
    });
        
}

const progressHandler = (event) => {
    console.log(event.loaded);
}