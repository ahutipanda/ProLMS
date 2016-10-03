using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using LMS.Models;
using System.Data.SqlClient;

namespace LMS.Controllers
{

    public class LeaveController : ApiController
    {
        public Users GetDetails(string emailId)
        {

            Users user = new Users();
            user.LeaveBalance = 20;
            string queryString = "SELECT FirstName, LastName from dbo.Users " + "WHERE UserName =  @mail ";

            //string paramValue = "j.jaganath@prowareness.nl";
            string connnectionString = "Data Source=10.3.3.2,7878;Initial Catalog=Cockpit_UAT;user id=CockpitUAT;password=isense@123";
            SqlConnection connection = new SqlConnection(connnectionString);
            SqlCommand command = new SqlCommand(queryString, connection);
            command.Parameters.AddWithValue("@mail", emailId);
            
            try
            {
                connection.Open();
                SqlDataReader reader = command.ExecuteReader();
                while (reader.Read())
                {
                   
                    user.FirstName = (reader[0]).ToString();
                    user.LastName = (reader[1]).ToString();
                }
                reader.Close();
                
               return user;
            }
            catch (Exception ex)
            {
                //return View(user);

                return user;
            }

        }
    }
}
