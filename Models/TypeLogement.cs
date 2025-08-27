using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace PurrfectMates.Models
{
    public enum TypeLogement
    {
        [Display(Name = "Maison sans jardin")]
        MaisonSansJardin,

        [Display(Name = "Maison avec jardin")]
        MaisonAvecJardin,

        [Display(Name = "Appartement sans balcon")]
        AppartementSansBalcon,

        [Display(Name = "Appartement avec balcon")]
        AppartementAvecBalcon,

        Studio
    }
}
