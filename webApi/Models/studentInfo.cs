using System;
using System.Collections.Generic;
using Microsoft.AspNetCore.Http;
using MySqlConnector;

namespace webApi.Models
{

    public class studentInfo
    {
        public int Id { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string Classes { get; set; }
        public string GPA { get; set; }
        public string PhotoUrl { get; set; }
        public IFormFile Photo { get; set;}
        private MySqlConnection conn = null; 

        //1.Connection for DB
        public studentInfo() {
            conn = new MySqlConnection("Server=localhost;Port=3306;Database=students;Uid=root;Pwd=Startrak0!");
               
        }

        //2.Get All Students 
        public List<studentInfo> getAllStudents()
        {
            conn.Open();
            List<studentInfo> student = new List<studentInfo>();

            using (var command = new MySqlCommand("SELECT * FROM Students;", conn))

            // Create a list of parts.
            using (var reader = command.ExecuteReader())
                while (reader.Read())
                {
                    student.Add(new studentInfo()
                    {
                        FirstName = (string)reader["FirstName"],
                        LastName = (string)reader["LastName"],
                        Classes = (string)reader["Classes"],
                        GPA = (string)reader["GPA"],
                        Id = (int)reader["PersonID"],
                        PhotoUrl = (string)reader["photo"]

                    }); ;


                }
            conn.Close();
            return student;
        }

        //2. Get Single Sudent
         public studentInfo getStudent(long id)
        {
            conn.Open();

            studentInfo student = new studentInfo();

            using (var command = new MySqlCommand())
            {
                command.Connection = conn;
                command.CommandText = "SELECT * FROM Students WHERE PersonID = @id;";
                command.Parameters.AddWithValue("id", id);
                var reader = command.ExecuteReader();
                while (reader.Read())
                {

                    student.FirstName = (string)reader["FirstName"];
                    student.LastName = (string)reader["LastName"];
                    student.Classes = (string)reader["Classes"];
                    student.GPA = (string)reader["GPA"];
                    student.Id = (int)reader["PersonID"];
                }

            }
            conn.Close();
            return student;
        }



        //3.Create a new User
        async public void CreateNewUser()
        {
             conn.Open();

            using (var cmd = new MySqlCommand())
            {
                cmd.Connection = conn;
                cmd.CommandText = "INSERT INTO Students (FirstName,LastName,Classes,GPA,Photo) VALUES (@f,@l,@c,@g,@p);";
                cmd.Parameters.AddWithValue("f", this.FirstName);
                cmd.Parameters.AddWithValue("l", this.LastName);
                cmd.Parameters.AddWithValue("c", this.Classes);
                cmd.Parameters.AddWithValue("g", this.GPA);
                cmd.Parameters.AddWithValue("p", this.Photo.FileName);
                await cmd.ExecuteNonQueryAsync();
            }
            conn.Close();



        }

        //4.Update User
        async public void UpdateUser()
        {
            conn.Open();

            using(var cmd = new MySqlCommand())
            {
                cmd.Connection = conn;
                cmd.CommandText = "UPDATE students SET FirstName = @f,LastName = @l,Classes = @c,GPA = @g WHERE PersonID = @id;";
                cmd.Parameters.AddWithValue("f", this.FirstName);
                cmd.Parameters.AddWithValue("l", this.LastName);
                cmd.Parameters.AddWithValue("c", this.Classes);
                cmd.Parameters.AddWithValue("g", this.GPA);
                cmd.Parameters.AddWithValue("id", this.Id);
                await cmd.ExecuteNonQueryAsync();


            }
            conn.Close();

        }

        async public void DeleteUser()
        {
            conn.Open();

            using (var cmd = new MySqlCommand())
            {

            }
        }



    }
}
