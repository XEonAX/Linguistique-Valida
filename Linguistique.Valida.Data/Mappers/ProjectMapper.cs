using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Data.Entity.ModelConfiguration;
using Linguistique.Valida.Data.Entities;
using System.ComponentModel.DataAnnotations.Schema;

namespace Linguistique.Valida.Data.Mappers
{
    class ProjectMapper : EntityTypeConfiguration<eProject>
    {
        public ProjectMapper()
        {
            this.ToTable("Projects");
            this.HasKey(c => c.Id);

            this.Property(c => c.Name).IsRequired();
            this.Property(c => c.Name).HasMaxLength(255);

            this.Property(c => c.Id).HasDatabaseGeneratedOption(DatabaseGeneratedOption.Identity);
            this.Property(c => c.Id).IsRequired();

            this.Property(c => c.FromDate).IsRequired();
            this.Property(c => c.FromDate).HasColumnType("smalldatetime");
            this.Property(c => c.ToDate).IsRequired();
            this.Property(c => c.ToDate).HasColumnType("smalldatetime");

            this.HasRequired(c => c.Manager);
            this.HasRequired(c => c.Release);
            this.HasMany(c => c.Requirements);
            this.HasMany(c => c.Defects);
            this.HasMany(c => c.Steamers);
            this.HasMany(c => c.Participants);
            this.HasMany(c => c.ITers);
            this.HasMany(c => c.Partners);
            this.HasMany(c => c.Brands);
            this.HasMany(c => c.Languages);

        }
    }
}
