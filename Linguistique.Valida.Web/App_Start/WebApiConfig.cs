﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Web.Http;

namespace Linguistique.Valida.Web
{
    public static class WebApiConfig
    {
        public static void Register(HttpConfiguration config)
        {
            config.MapHttpAttributeRoutes();
            config.Routes.MapHttpRoute(
                name: "Projects",
                routeTemplate: "api/projects/{id}",
                defaults: new { controller = "Project", id = RouteParameter.Optional }
            );
            config.Routes.MapHttpRoute(
                name: "Users",
                routeTemplate: "api/users/{id}",
                defaults: new { controller = "User", id = RouteParameter.Optional }
            );
            config.Routes.MapHttpRoute(
                name: "Misc",
                routeTemplate: "api/misc/{action}/{id}",
                defaults: new { controller = "Misc", action = "seed", id = RouteParameter.Optional }
            );
        }
    }
}
