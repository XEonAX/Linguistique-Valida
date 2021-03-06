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
    using Newtonsoft.Json;
    using System;
    using System.Collections.Generic;

    public partial class User
    {
        public User()
        {
            this.ProjectsManager = new HashSet<Project>();
            this.ProjectsSteamers = new HashSet<Project>();
            this.ProjectsITers = new HashSet<Project>();
            this.ProjectsPartners = new HashSet<Project>();
            this.RequirementsTLead = new HashSet<Requirement>();
            this.RequirementsResponsible = new HashSet<Requirement>();
            this.DefectsApplicationEngg = new HashSet<Defect>();
            this.DefectsLinguist = new HashSet<Defect>();
            this.Participants = new HashSet<Participant>();
        }

        public int Id { get; set; }
        public string Name { get; set; }
        public string IDCode { get; set; }
        public string Email { get; set; }

        [JsonIgnore]
        public virtual ICollection<Project> ProjectsManager { get; set; }
        [JsonIgnore]
        public virtual ICollection<Project> ProjectsSteamers { get; set; }
        [JsonIgnore]
        public virtual ICollection<Project> ProjectsITers { get; set; }
        [JsonIgnore]
        public virtual ICollection<Project> ProjectsPartners { get; set; }
        [JsonIgnore]
        public virtual ICollection<Requirement> RequirementsTLead { get; set; }
        [JsonIgnore]
        public virtual ICollection<Requirement> RequirementsResponsible { get; set; }
        [JsonIgnore]
        public virtual ICollection<Defect> DefectsApplicationEngg { get; set; }
        [JsonIgnore]
        public virtual ICollection<Defect> DefectsLinguist { get; set; }
        [JsonIgnore]
        public virtual AttendeeType AttendeeType { get; set; }
        [JsonIgnore]
        public virtual ICollection<Participant> Participants { get; set; }
    }
}
