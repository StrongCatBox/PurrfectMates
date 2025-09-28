using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace PurrfectMates.Models
{

    [Table("Matching")]
    public class Match
    {
        [Column("idUtilisateur")]
        public int UtilisateurId { get; set; }
        public Utilisateur Utilisateur { get; set; }

        [Column("idAnimal")]
        public int AnimalId { get; set; }
        public Animal Animal { get; set; }

        [Column("dateMatching")]
        public DateTime DateMatch { get; set; }

        public Match()
        {

        }

        public Match(Utilisateur unUtilisateur, Animal unAnimal, DateTime uneDateMatch)
        {
            this.Utilisateur = unUtilisateur;
            this.Animal = unAnimal;
            this.DateMatch = uneDateMatch;
          
        }

    }


}
