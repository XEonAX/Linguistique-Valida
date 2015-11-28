using Linguistique.Valida.Data;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Http.Description;
namespace Linguistique.Valida.Web.Controllers
{
    public class MiscController : ApiController
    {

        private LVDataContainer db = new LVDataContainer();

        [HttpGet]
        public string seed(int id)
        {
            return "OK";
        }
        [HttpGet]
        public string seed()
        {
            return "KO";
        }


    }
}
