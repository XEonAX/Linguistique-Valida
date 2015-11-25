using System;
using System.Collections.Generic;
using System.Linq;
using System.Web.Http;

namespace Linguistique.Valida.Web
{
    public static class WebApiConfig
    {
        public static void Register(HttpConfiguration config)
        {
            config.Routes.MapHttpRoute(
                name: "Projects",
                routeTemplate: "api/projects/{id}",
                defaults: new { controller = "Project", id = RouteParameter.Optional}
            );
        }
    }
}
