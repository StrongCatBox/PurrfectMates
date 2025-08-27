using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace PurrfectMates.Models
{
    [Table("Animaux")]
    public class Animal
    {
        [Key] public int IdAnimal { get; set; }

        public string nomAnimal { get; set; } = default!;
        public string race { get; set; } = default!;
        public int age { get; set; }

        // FKs
        public int IdUtilisateur { get; set; }
        public int IdNiveauActivite { get; set; }
        public int IdTailleAnimal { get; set; }
        public int IdTypeAnimal { get; set; }

        public string? descriptionAnimal { get; set; }


        public void ControlChamps()
        {
            List<string> erreurs = new List<string>();

            if (string.IsNullOrEmpty(nomAnimal) || nomAnimal.Length < 50)
            {
                erreurs.Add("Le Nom de l'animal est vide ou trop long");
            }


            if (erreurs.Any())
            {
                throw new Exception(string.Join("\n ", erreurs));
            }


        }

        public Animal()
        {

        }

        public Animal (string unNom, string uneRace, int unAge,string uneDescription )
        {
            this.nomAnimal = unNom;
            this.race = uneRace;
            this.age = unAge;
            this.descriptionAnimal = uneDescription;
            ControlChamps();
        }
        

    }
}
