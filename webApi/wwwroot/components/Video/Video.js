const handleVideoPage = () => {
    document.querySelector("#video-upload").addEventListener("change", 
        videoUpload();
    );
};

const videoUpload = () => {
    console.log("handle video upload");
}
