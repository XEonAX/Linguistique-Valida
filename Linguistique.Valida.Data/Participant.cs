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
    
    public partial class Participant
    {
        public Participant()
        {
            this.Projects = new HashSet<Project>();
        }
    
        public int Id { get; set; }
        public int UserId { get; set; }
        public int AttendeeTypeId { get; set; }
    
        public virtual User User { get; set; }
        public virtual AttendeeType AttendeeType { get; set; }
        public virtual ICollection<Project> Projects { get; set; }
    }
}
