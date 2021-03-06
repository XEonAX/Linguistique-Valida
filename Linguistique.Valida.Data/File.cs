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
    
    public partial class File
    {
        public File()
        {
            this.RequirementsClientSettings = new HashSet<Requirement>();
            this.RequirementsServerSettings = new HashSet<Requirement>();
            this.RequirementsScenarioPPT = new HashSet<Requirement>();
            this.DefectsDescriptionFiles = new HashSet<Defect>();
        }
    
        public int Id { get; set; }
        public string Name { get; set; }
        public string Path { get; set; }
        public string Description { get; set; }
    
        public virtual ICollection<Requirement> RequirementsClientSettings { get; set; }
        public virtual ICollection<Requirement> RequirementsServerSettings { get; set; }
        public virtual ICollection<Requirement> RequirementsScenarioPPT { get; set; }
        public virtual ICollection<Defect> DefectsDescriptionFiles { get; set; }
    }
}
