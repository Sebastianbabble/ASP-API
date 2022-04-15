using System;
using Microsoft.AspNetCore.Http;
using System.IO;

namespace webApi.Models
{
    public class videoUpload
    {
        public IFormFile Video { get; set; }
        public string VideoUrl { get; set; }

        public videoUpload()
        {
        }
        public String heyYou()
        {
            return "This is so cool";
        }

        async public void updateVideo()
        {
            storeVideoFile();
        }
        //3. Store uploaded Video
        public void storeVideoFile()
        {
            //1. Create File path
            string path = Path.Combine(Directory.GetCurrentDirectory(), "wwwroot/Files/Video");

            //2. File name with video name
            string fileNameWithPath = Path.Combine(path, this.Video.FileName);

            using (var stream = new FileStream(fileNameWithPath, FileMode.Create))
            {
                this.Video.CopyTo(stream);
            }
        }
    }
}
