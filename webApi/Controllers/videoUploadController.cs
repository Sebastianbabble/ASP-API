using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using webApi.Models;

namespace webApi.Controllers
{
    [Route("[controller]")]
    [ApiController]
    public class videoUploadController : ControllerBase
    {
        [HttpGet]
        public String Index()
        {
            videoUpload me = new videoUpload();
            return me.heyYou();
           
        }
    }
}