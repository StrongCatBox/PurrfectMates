using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace PurrfectMates.Models
{
    internal class Signalement
    {

       [Key] public int IdSignalement {  get; set; }

        public string Motif { get; set; }
        public DateTime DateSignalement { get; set; }


        public void ValiderSignalement()
        {
            

            if (string.IsNullOrWhiteSpace(Motif))
            {
                throw new Exception("Le motif du signalement est obligatoire.");
            }
            

           
        }

        public Signalement()
        {

        }

        public Signalement(string unMotif, DateTime uneDateSignalement)
        {
            this.Motif = unMotif;
            this.DateSignalement = uneDateSignalement;
            ValiderSignalement();
        }



    }
}
