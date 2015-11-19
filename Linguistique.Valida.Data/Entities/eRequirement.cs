using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Linguistique.Valida.Data.Entities
{
    public class eRequirement
    {
        public eRequirement()
        {
            ClientSettingsFiles = new List<eFile>();
            ServerSettingsFiles = new List<eFile>();
            Areas = new List<eArea>();
            Licenses = new List<eLicense>();
            Roles = new List<eRole>();

        }

        public eBrand Brand { get; set; }
        public eApplication Application { get; set; }
        public eUser TLead { get; set; }
        public eUser Responsible { get; set; }
        public eMedia Media { get; set; }
        public string ClientSettings { get; set; }
        public ICollection<eFile> ClientSettingsFiles { get; set; }
        public bool CommonServer { get; set; }
        public string CommonServerReason { get; set; }
        public ICollection<eArea> Areas { get; set; }
        public string ServerSettings { get; set; }
        public ICollection<eFile> ServerSettingsFiles { get; set; }
        public ICollection<eLicense> Licenses { get; set; }
        public ICollection<eRole> Roles { get; set; }
        public string MiscSettings { get; set; }

        public eFile ScenarioPPT { get; set; }
        public bool ScenarioWorking { get; set; }
        public int SlidesCount { get; set; }
        public double ExecTimeQA { get; set; }
        public double ExecTimeEngg { get; set; }


    }
}
