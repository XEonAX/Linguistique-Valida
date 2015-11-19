using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Linguistique.Valida.Data.Entities
{
    public class eProject
    {
        public eProject()
        {
            Requirements = new List<eRequirement>();
            Defects = new List<eDefect>();
            Manager = new eUser();
            Participants  = new List<eUser>();
            Steamers = new List<eUser>();
            ITers = new List<eUser>();
            Partners =new List<eUser>();
            Brands = new List<eBrand>();
            Languages = new List<eLanguage>();

        }
        public int Id { get; set; }
        public string Name { get; set; }
        public string UID { get; set; }

        public DateTime FromDate { get; set; }
        public DateTime ToDate { get; set; }

        public eUser Manager { get; set; }
        public eRelease Release { get; set; }

        public ICollection<eRequirement> Requirements { get; set; }
        public ICollection<eDefect> Defects { get; set; }
        public ICollection<eUser> Participants { get; set; }
        public ICollection<eUser> Steamers { get; set; }
        public ICollection<eUser> ITers { get; set; }
        public ICollection<eUser> Partners { get; set; }
        public ICollection<eBrand> Brands { get; set; }
        public ICollection<eLanguage> Languages { get; set; }



    }
}
