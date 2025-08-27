using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Security.Cryptography.X509Certificates;
using System.Text;
using System.Threading.Tasks;

namespace PurrfectMates.Models
{
    internal class Notification
    {
        [Key] public int IdNotification { get; set; }
        public Utilisateur Utilisateur { get; set; }
        public string Titre { get; set; }
        public string ContenuNotification { get; set; }
        public DateTime DateNotification { get; set; }

        public void ValiderNotification()
        {
            List<string> erreurs = new List<string>();

            if (string.IsNullOrWhiteSpace(Titre))
            {
                erreurs.Add("Le titre est obligatoire");
            }
            else if (Titre.Length > 250)
            {
                erreurs.Add("Le titre ne doit pas depasser 250 caracteres.");
            }

            if (string.IsNullOrWhiteSpace(ContenuNotification))
            {
                erreurs.Add("Le contenu de la notification ne peut pas etre vide");

            }

            else if (ContenuNotification.Length > 800)
            {
                erreurs.Add("Le contenu ne doit pas depasser 800 caracteres");
            }

            if (erreurs.Any()) {
                throw new Exception(string.Join("", erreurs));
            }

        }

        public Notification()
        {

        }

        public Notification(Utilisateur unUtilisateur, string unTitre, string unContenuNotification)
        {
            this.Utilisateur = unUtilisateur;
            this.Titre = unTitre;
            this.ContenuNotification = unContenuNotification;
            this.DateNotification = DateTime.Now;
            ValiderNotification();

        }

    }

   
}
