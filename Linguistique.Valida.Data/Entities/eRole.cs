﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Linguistique.Valida.Data.Entities
{
    public class eRole
    {
        public eRole()
        {

        }
        public int Id { get; set; }
        public string Name { get; set; }
        public string UID { get; set; }
        public string Type { get; set; }
    }
}
