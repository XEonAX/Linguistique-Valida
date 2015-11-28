using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Linguistique.Valida.Data
{
    class LVRepository:ILVRepository    
    {
        private LVDataContainer _context;
        public LVRepository(LVDataContainer context)
        {
            _context = context;
        }

        public IQueryable<Project> GetAllProjects()
        {
            return _context.Projects.AsQueryable();
        }

        public Project GetProject(int projectId)
        {
            return _context.Projects.Find(projectId);
        }

        public Requirement GetRequirement(int requirementId)
        {
            return _context.Requirements.Find(requirementId);
        }

        public Defect GetDefect(int defectId)
        {
            return _context.Defects.Find(defectId);
        }

        public IQueryable<Brand> GetAllBrands()
        {
            return _context.Brands.AsQueryable();
        }

        public IQueryable<Role> GetAllRoles()
        {
            return _context.Roles.AsQueryable();
        }

        public IQueryable<Application> GetAllApplications()
        {
            return _context.Applications.AsQueryable();
        }

        public IQueryable<Release> GetAllReleases()
        {
            return _context.Releases.AsQueryable();
        }

        public IQueryable<Media> GetAllMedias()
        {
            return _context.Medias.AsQueryable();
        }

        public IQueryable<License> GetAllLicenses()
        {
            return _context.Licenses.AsQueryable();
        }

        public IQueryable<Language> GetAllLanguages()
        {
            return _context.Languages.AsQueryable();
        }

        public IQueryable<User> GetAllUsers()
        {
            return _context.Users.AsQueryable();
        }

        public bool Insert(Project project)
        {
            try
            {
                _context.Projects.Add(project);
                return true;
            }
            catch
            {
                return false;
            }
        }

        public bool Update(Project original, Project updated)
        {
            _context.Entry(original).CurrentValues.SetValues(updated);
            return true;
        }

        public bool Insert(Requirement requirement)
        {
            try
            {
                _context.Requirements.Add(requirement);
                return true;
            }
            catch
            {
                return false;
            }
        }

        public bool Update(Requirement original, Requirement updated)
        {
            _context.Entry(original).CurrentValues.SetValues(updated);
            return true;
        }

        public bool Insert(Defect defect)
        {
            try
            {
                _context.Defects.Add(defect);
                return true;
            }
            catch
            {
                return false;
            }
        }

        public bool Update(Defect original, Defect updated)
        {
            _context.Entry(original).CurrentValues.SetValues(updated);
            return true;
        }

        public bool Insert(User user)
        {
            try
            {
                _context.Users.Add(user);
                return true;
            }
            catch
            {
                return false;
            }
        }

        public bool Update(User original, User updated)
        {
            _context.Entry(original).CurrentValues.SetValues(updated);
            return true;
        }

        public bool SaveAll()
        {
            return _context.SaveChanges() > 0;
        }

    }
}
