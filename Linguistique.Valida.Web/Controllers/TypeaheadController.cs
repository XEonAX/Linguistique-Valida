using Linguistique.Valida.Data;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace Linguistique.Valida.Web.Controllers
{
    public class TypeaheadController : ApiController
    {
        private LVDataContainer db = new LVDataContainer();


        [HttpGet]
        [Route("api/TypeAhead/Users/")]
        public IEnumerable<User> GetAllUsers()
        {
            IQueryable<User> Users = db.Users;
            if (Users == null || Users.Count() == 0)
            {
                throw new HttpResponseException(Request.CreateResponse(HttpStatusCode.NotFound));
            }

            return Users.AsEnumerable();
        }
        [HttpGet]
        [Route("api/TypeAhead/Users/{input}")]
        public IEnumerable<User> GetUsers(string input)
        {
            IQueryable<User> users = db.Users.Where(x => x.IDCode.StartsWith(input)).Union(db.Users.Where(x => x.Name.Contains(input)));
            if (users == null || users.Count() == 0)
            {
                throw new HttpResponseException(Request.CreateResponse(HttpStatusCode.NotFound));
            }

            return users.AsEnumerable();
        }

        [HttpGet]
        [Route("api/TypeAhead/Releases/")]
        public IEnumerable<Release> GetAllReleases()
        {
            IQueryable<Release> Releases = db.Releases;
            if (Releases == null || Releases.Count() == 0)
            {
                throw new HttpResponseException(Request.CreateResponse(HttpStatusCode.NotFound));
            }

            return Releases.AsEnumerable();
        }

        [HttpGet]
        [Route("api/TypeAhead/Releases/{input}")]
        public IEnumerable<Release> GetReleases(string input)
        {
            IQueryable<Release> releases = db.Releases.Where(x => x.IDCode.StartsWith(input)).Union(db.Releases.Where(x => x.Name.Contains(input)));
            if (releases == null || releases.Count() == 0)
            {
                throw new HttpResponseException(Request.CreateResponse(HttpStatusCode.NotFound));
            }

            return releases.AsEnumerable();
        }

        [HttpGet]
        [Route("api/TypeAhead/Brands/")]
        public IEnumerable<Brand> GetAllBrands()
        {
            IQueryable<Brand> Brands = db.Brands;
            if (Brands == null || Brands.Count() == 0)
            {
                throw new HttpResponseException(Request.CreateResponse(HttpStatusCode.NotFound));
            }

            return Brands.AsEnumerable();
        }

        [HttpGet]
        [Route("api/TypeAhead/Brands/{input}")]
        public IEnumerable<Brand> GetBrands(string input)
        {
            IQueryable<Brand> brands = db.Brands.Where(x => x.IDCode.StartsWith(input)).Union(db.Brands.Where(x => x.Name.Contains(input)));
            if (brands == null || brands.Count() == 0)
            {
                throw new HttpResponseException(Request.CreateResponse(HttpStatusCode.NotFound));
            }

            return brands.AsEnumerable();
        }

        [HttpGet]
        [Route("api/TypeAhead/Licenses/")]
        public IEnumerable<License> GetAllLicenses()
        {
            IQueryable<License> Licenses = db.Licenses;
            if (Licenses == null || Licenses.Count() == 0)
            {
                throw new HttpResponseException(Request.CreateResponse(HttpStatusCode.NotFound));
            }

            return Licenses.AsEnumerable();
        }

        [HttpGet]
        [Route("api/TypeAhead/Licenses/{input}")]
        public IEnumerable<License> GetLicenses(string input)
        {
            IQueryable<License> licenses = db.Licenses.Where(x => x.IDCode.StartsWith(input)).Union(db.Licenses.Where(x => x.Name.Contains(input)));
            if (licenses == null || licenses.Count() == 0)
            {
                throw new HttpResponseException(Request.CreateResponse(HttpStatusCode.NotFound));
            }

            return licenses.AsEnumerable();
        }

        [HttpGet]
        [Route("api/TypeAhead/Areas/")]
        public IEnumerable<Area> GetAllAreas()
        {
            IQueryable<Area> Areas = db.Areas;
            if (Areas == null || Areas.Count() == 0)
            {
                throw new HttpResponseException(Request.CreateResponse(HttpStatusCode.NotFound));
            }

            return Areas.AsEnumerable();
        }

        [HttpGet]
        [Route("api/TypeAhead/Areas/{input}")]
        public IEnumerable<Area> GetAreas(string input)
        {
            IQueryable<Area> Areas = db.Areas.Where(x => x.IDCode.StartsWith(input)).Union(db.Areas.Where(x => x.Name.Contains(input)));
            if (Areas == null || Areas.Count() == 0)
            {
                throw new HttpResponseException(Request.CreateResponse(HttpStatusCode.NotFound));
            }

            return Areas.AsEnumerable();
        }

        [HttpGet]
        [Route("api/TypeAhead/Categories/")]
        public IEnumerable<Category> GetAllCategories()
        {
            IQueryable<Category> Categories = db.Categories;
            if (Categories == null || Categories.Count() == 0)
            {
                throw new HttpResponseException(Request.CreateResponse(HttpStatusCode.NotFound));
            }

            return Categories.AsEnumerable();
        }

        [HttpGet]
        [Route("api/TypeAhead/Categories/{input}")]
        public IEnumerable<Category> GetCategories(string input)
        {
            IQueryable<Category> Categories = db.Categories.Where(x => x.Name.Contains(input));
            if (Categories == null || Categories.Count() == 0)
            {
                throw new HttpResponseException(Request.CreateResponse(HttpStatusCode.NotFound));
            }

            return Categories.AsEnumerable();
        }

        [HttpGet]
        [Route("api/TypeAhead/Languages/")]
        public IEnumerable<Language> GetAllLanguages()
        {
            IQueryable<Language> Languages = db.Languages;
            if (Languages == null || Languages.Count() == 0)
            {
                throw new HttpResponseException(Request.CreateResponse(HttpStatusCode.NotFound));
            }

            return Languages.AsEnumerable();
        }

        [HttpGet]
        [Route("api/TypeAhead/Languages/{input}")]
        public IEnumerable<Language> GetLanguages(string input)
        {
            IQueryable<Language> Languages = db.Languages.Where(x => x.Name.Contains(input));
            if (Languages == null || Languages.Count() == 0)
            {
                throw new HttpResponseException(Request.CreateResponse(HttpStatusCode.NotFound));
            }

            return Languages.AsEnumerable();
        }


        protected override void Dispose(bool disposing)
        {
            db.Dispose();
            base.Dispose(disposing);
        }
    }
}
