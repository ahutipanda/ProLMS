using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace LMS.Controllers
{
    public class HomeController : Controller
    {
        public ActionResult Index()
        {
            ViewBag.IsLoggedIn = false;
            return View();
        }

        public ActionResult Dashboard()
        {
            ViewBag.Message = "Your application description page.";
            ViewBag.IsLoggedIn = true;

            return View();
        }

    }
}