const handleVideoPage = () => {

};

const handleVideoUpload = () => {
    const user = new VideoUpload();
    user.postVideo();

    console.log(user);
}

class VideoUpload {
    constructor() {
        this.video = document.getElementById("video-upload").files[0];
        this.URI = "/videoUpload";
        this.formData = new FormData();
        this.bar = document.querySelector("#progressBar");

    }

    //1.Get HTML elements to upload video 
    uploadVideo() {

        let progressBar = document.querySelector("#progressBar");
        //2.Add file to form for upload later 
        this.formData.append("Video", this.video);
        this.formData.append("VideoUrl", this.video.name);

    }

    //2. API POST call
    postVideo() {

        let postRequest = new XMLHttpRequest();
        this.uploadVideo();
        //2. Progess of upload  
        postRequest.upload.onprogess = (event) => {
            let percent = (event.loaded / event.total) * 100;
            console.log(`percent = ${percent}`);
        }

        //3. Succesfull upload
        postRequest.upload.onload = (event) => {
            this.bar.value = 100;
        }

        //4. Open and send request

        postRequest.open("POST", this.URI);
        postRequest.send(this.formData);
    }
}