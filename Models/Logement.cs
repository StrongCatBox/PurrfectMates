using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace PurrfectMates.Models
{
    internal class Logement
    {

        [Key] public int IdTypeLogement {  get; set; }
        public TypeLogement Type { get; set; }


        public Logement()
        {

        }

        public Logement(TypeLogement unType)
        {
            this.Type = unType;
        }
    }
}
