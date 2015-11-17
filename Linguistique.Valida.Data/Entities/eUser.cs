﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Linguistique.Valida.Data.Entities
{
    public class eUser
    {
        public eUser()
        {

        }
        public int Id { get; set; }
        public string Name { get; set; }
        public string Email { get; set; }
        public string UID { get; set; }
        public eRole Role { get; set; }

    }
}
