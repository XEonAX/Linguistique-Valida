using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Linguistique.Valida.Data
{
    interface ILVRepository
    {
        IQueryable<Project> GetAllProjects();
        Project GetProject(int projectId);

        
        IQueryable<Brand> GetAllBrands();
        IQueryable<Role> GetAllRoles();
        IQueryable<Application> GetAllApplications();
        IQueryable<Release> GetAllReleases();
        IQueryable<Media> GetAllMedias();
        IQueryable<License> GetAllLicenses();
        IQueryable<Language> GetAllLanguages();
        IQueryable<User> GetAllUsers();


        bool Insert(Project project);
        bool Update(Project original, Project updated);

        bool Insert(Requirement requirement);
        bool Update(Requirement original, Requirement updated);

        bool Insert(Defect defect);
        bool Update(Defect original, Defect updated);

        bool Insert(User User);
        bool Update(User original, User updated);

        bool SaveAll();
    }
}
