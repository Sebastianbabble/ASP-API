using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using MySqlConnector;
using webApi.Models;
namespace webApi.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class studentInfoController : ControllerBase
    {
        //GET API
        [HttpGet]
        public List<studentInfo> Index()
        {
            studentInfo me = new studentInfo();
            return me.getAllStudents();


        }
        //GET API THROUGH ID
        [HttpGet("{id}")]
        public studentInfo GetId(long id)
        {
            studentInfo me = new studentInfo();
            return me.getStudent(id);
        }

        //POST API
        [HttpPost]
        public void Post([FromForm]studentInfo model)
        {

            model.CreateNewUser();

        }
        [HttpPost("{id}")]
        public void updateStudent([FromBody] studentInfo model)
        {
             model.UpdateUser();
        }
        [HttpDelete("{id}")]
        public void deleteStudent(long id)
        {
            studentInfo me = new studentInfo();
            me.DeleteUser(id);
        }

      
    }
}
