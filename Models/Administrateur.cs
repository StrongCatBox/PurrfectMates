using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace PurrfectMates.Models
{
    internal class Administrateur
    {
        [Key] public int IdAdministrateur {  get; set; }
        public string NomAdmin { get; set;}
        public string PrenomAdmin { get; set; }
        public string EmailAdmin { get; set; }
        public string PasswordAdmin { get; set; }

        public void ControleChamps()
        {
            List<string> erreurs = new List<string>();

            if (string.IsNullOrWhiteSpace(NomAdmin) || NomAdmin.Length > 50)
            {

                erreurs.Add("Le nom est vide ou trop long.");

            }

            if (string.IsNullOrWhiteSpace(PrenomAdmin) || PrenomAdmin.Length > 50)
            {
                erreurs.Add("Le prénom est vide ou trop long");
            }

            if (string.IsNullOrWhiteSpace(EmailAdmin) || !EmailAdmin.Contains("@"))
            {
                erreurs.Add("Email invalide");
            }

            if (string.IsNullOrWhiteSpace(PasswordAdmin) || PasswordAdmin.Length < 8)
            {
                erreurs.Add("Mot de passe trop court");
            }

            if (erreurs.Any())
            {
                throw new Exception(string.Join("\n", erreurs));
            }
        }

       public Administrateur()
        {

        }

        public Administrateur(string unNomAdmin, string unPrenomAdmin, string unEmailAdmin, string unPasswordAdmin)
        {
            this.NomAdmin = unNomAdmin;
            this.PrenomAdmin = unPrenomAdmin;
            this.EmailAdmin = unEmailAdmin;
            this.PasswordAdmin = unPasswordAdmin;
            ControleChamps();
        }

    }

   
}
