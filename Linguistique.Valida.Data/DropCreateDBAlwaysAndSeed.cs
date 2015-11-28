using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Faker;
using Faker.Extensions;
using System.IO;
using System.Data.Entity.Validation;
using System.Diagnostics;

namespace Linguistique.Valida.Data
{
    public class DropCreateDBAlwaysAndSeed : DropCreateDatabaseAlways<LVDataContainer>
    {
        protected override void Seed(LVDataContainer db)
        {
            var rand = new Random();
            for (int i = 0; i < 500; i++)
            {
                User X = new User();
                X.Name = Faker.Name.FullName(NameFormats.Standard);
                X.Email = Faker.Internet.Email(X.Name);
                X.IDCode = string.Empty;
                X.Name.Split(' ').ToList().ForEach(
                        c =>
                        {
                            if (c.Length > 1)
                                X.IDCode += c.First().ToString() + c.Last().ToString();
                            else
                                X.IDCode += c.First().ToString();
                        }
                    ); X.IDCode += Faker.RandomNumber.Next(1, 9);
                db.Users.Add(X);
            }


            for (int i = 0; i < 100; i++)
            {
                License X = new License();
                X.Name = RandomLetter.GetLetter().ToString().ToUpper() + RandomLetter.GetLetter().ToString().ToUpper() + RandomLetter.GetLetter().ToString().ToUpper();
                X.IDCode = X.Name;
                db.Licenses.Add(X);
            }

            foreach (var lang in Strings.Languages)
            {
                Language X = new Language();
                X.Name = lang;
                db.Languages.Add(X);
            }

            foreach (var role in Strings.Roles)
            {
                Role X = new Role();
                X.Name = Strings.Prefixes[rand.Next(0, Strings.Prefixes.Count - 1)] + " " + role;
                X.IDCode = string.Empty;
                X.Name.Split(' ').ToList().ForEach(
                        c =>
                        {
                            if (c.Length > 1)
                                X.IDCode += c.First().ToString() + c.Last().ToString();
                            else
                                X.IDCode += c.First().ToString();
                        }
                    ); db.Roles.Add(X);
            }

            foreach (var cat in Strings.Categories)
            {
                Category X = new Category();
                X.Name = cat;
                db.Categories.Add(X);
            }

            foreach (var area in Strings.Areas)
            {
                Area X = new Area();
                X.Name = area;
                X.IDCode = string.Empty;
                X.Name.Split(' ').ToList().ForEach(
                        c =>
                        {
                            if (c.Length > 1)
                                X.IDCode += c.First().ToString() + c.Last().ToString();
                            else
                                X.IDCode += c.First().ToString();
                        }
                    );
                db.Areas.Add(X);
            }

            foreach (var app in Strings.ApplicationNames)
            {
                Application X = new Application();
                X.Name = app;
                X.IDCode = string.Empty;
                X.Name.Split(' ').ToList().ForEach(
                        c =>
                        {
                            if (c.Length > 1)
                                X.IDCode += c.First().ToString() + c.Last().ToString();
                            else
                                X.IDCode += c.First().ToString();
                        }
                    );
                db.Applications.Add(X);
            }

            for (int i = 0; i < 20; i++)
            {
                Media X = new Media();
                X.Name = string.Empty;
                X.Name += Strings.Buzz1[rand.Next(Strings.Buzz1.Count - 1)] + "_";
                X.Name += Strings.Buzz2[rand.Next(Strings.Buzz2.Count - 1)] + "_";
                X.Name += Strings.Buzz3[rand.Next(Strings.Buzz3.Count - 1)] + ".Package";
                db.Medias.Add(X);
            }

            foreach (var sev in Strings.Severities)
            {
                Severity X = new Severity();
                X.Name = sev;
                db.Severities.Add(X);
            }

            for (int i = rand.Next(489); i < 10; i++)
            {
                Brand X = new Brand();
                X.Name = Strings.Brands[i];
                X.IDCode = string.Empty;
                X.Name.Split(' ').ToList().ForEach(
                    c => 
                        {
                            if (c.Length>1)
		                        X.IDCode += c.First().ToString() + c.Last().ToString();
                            else
                                X.IDCode += c.First().ToString();
                        }
                    );
                db.Brands.Add(X);
            }

            foreach (var stat in Strings.Statuses)
            {
                Status X = new Status();
                X.Name = stat;
                db.Status.Add(X);
            }

            for (int i = 15; i < 28; i++)
            {
                Release X = new Release();
                X.Name = "XMX Z" + i.ToString() + "R";
                X.IDCode = "X" + i.ToString();
                db.Releases.Add(X);
            }

            try
            {
                db.SaveChanges();
            }
            catch (DbEntityValidationException e)
            {
                foreach (var eve in e.EntityValidationErrors)
                {
                    Debug.Print("Entity of type \"{0}\" in state \"{1}\" has the following validation errors:",
                        eve.Entry.Entity.GetType().Name, eve.Entry.State);
                    foreach (var ve in eve.ValidationErrors)
                    {
                        Debug.Print("- Property: \"{0}\", Error: \"{1}\"",
                            ve.PropertyName, ve.ErrorMessage);
                    }
                }
                throw;
            }



        }


    }
}
