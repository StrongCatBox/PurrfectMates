using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace PurrfectMates.Models
{

    [Table("Swipe")]
    public class Like
    {
        [Key] public int IdSwipe { get; set; }
        public int idUtilisateur { get; set; }
        public int idAnimal { get; set; }
        public string actionSwipe  { get; set;}
        public DateTime dateSwipe { get; set; }


        public Like()
        {

        }

        public Like(string uneactionSwipe, DateTime unedateSwipe)
        {
            this.actionSwipe = uneactionSwipe ;
            this .dateSwipe = unedateSwipe ;
        }

    }
}
