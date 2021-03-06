//------------------------------------------------------------------------------
// <auto-generated>
//    This code was generated from a template.
//
//    Manual changes to this file may cause unexpected behavior in your application.
//    Manual changes to this file will be overwritten if the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

namespace Linguistique.Valida.Data
{
    using System;
    using System.Collections.Generic;
    
    public partial class Requirement
    {
        public Requirement()
        {
            this.ClientSettingsFiles = new HashSet<File>();
            this.ServerSettingsFiles = new HashSet<File>();
            this.Licenses = new HashSet<License>();
            this.Roles = new HashSet<Role>();
            this.Areas = new HashSet<Area>();
        }
    
        public int Id { get; set; }
        public string Name { get; set; }
        public string ClientSettings { get; set; }
        public bool CommonServer { get; set; }
        public string CommonServerReason { get; set; }
        public string ServerSettings { get; set; }
        public string MiscSettings { get; set; }
        public bool ScenarioWorking { get; set; }
        public int SlidesCount { get; set; }
        public double ExecutionTimeQA { get; set; }
        public double ExecutionTimeEngg { get; set; }
        public int ProjectId { get; set; }
        public int BrandId { get; set; }
        public int ApplicationId { get; set; }
        public int TLeadUserId { get; set; }
        public int ResponsibleUserId { get; set; }
        public int FileId { get; set; }
    
        public virtual Project Project { get; set; }
        public virtual Brand Brand { get; set; }
        public virtual Application Application { get; set; }
        public virtual User TLead { get; set; }
        public virtual User Responsible { get; set; }
        public virtual ICollection<File> ClientSettingsFiles { get; set; }
        public virtual ICollection<File> ServerSettingsFiles { get; set; }
        public virtual ICollection<License> Licenses { get; set; }
        public virtual ICollection<Role> Roles { get; set; }
        public virtual ICollection<Area> Areas { get; set; }
        public virtual File ScenarioPPT { get; set; }
        public virtual Media Media { get; set; }
    }
}
