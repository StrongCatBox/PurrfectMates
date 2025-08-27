using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Data;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using PurrfectMates.Enums;


namespace PurrfectMates.Models
{
    public class Utilisateur
    {
        [Key] public int IdUtilisateur { get; set; }
        public string nomUtilisateur { get; set; }
        public string prenomUtilisateur { get; set; }
        public string emailUtilisateur { get; set; }
        public string motDePasseUtilisateur { get; set; } = default!;
        public Role Role { get; set; } = Role.Adoptant;
        public string? photoProfilUtilisateur { get; set; }
      
      //  public bool EstActif { get; set; }




        public void ControlChamps()
        {

            List<string> erreurs = new List<string>();

            if (string.IsNullOrWhiteSpace(nomUtilisateur) || nomUtilisateur.Length > 50 ) {

                erreurs.Add("Le nom est vide ou trop long.");
            
            }

            if (string.IsNullOrWhiteSpace(prenomUtilisateur) || prenomUtilisateur.Length > 50)
            {
                erreurs.Add("Le prénom est vide ou trop long");
            }

            if (string.IsNullOrWhiteSpace(emailUtilisateur) || !emailUtilisateur.Contains("@"))
            {
                erreurs.Add("Email invalide");
            }

            if (string.IsNullOrWhiteSpace(motDePasseUtilisateur) || motDePasseUtilisateur.Length < 8)
            {
                erreurs.Add("Mot de passe trop court");
            }

            if (erreurs.Any())
            {
                throw new Exception(string.Join("\n", erreurs));
            }

           
        }

        

        public Utilisateur() { 
        
        }

        public Utilisateur(string unNom, string unPrenom, string unEmail, string unMotDepasse, Role unRole, string unePhotoProfil, string uneDescription)
        {
            this.nomUtilisateur = unNom;
            this.prenomUtilisateur = unPrenom;
            this.emailUtilisateur = unEmail;
            this.motDePasseUtilisateur = unMotDepasse;
            this.Role = unRole;
            this.photoProfilUtilisateur = unePhotoProfil;
           
           // this.EstActif = false;
            ControlChamps();
        }

        


    }
}
