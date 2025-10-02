using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace PurrfectMates.Models
{
    [Table("TemperamentsParAnimaux")]
    public class TemperamentParAnimal
    {
        [Key]
        [Column("idAnimal")]
        public int IdAnimal { get; set; }

        [Key]
        [Column("idTemperament")]
        public int IdTemperament { get; set; }

        // Relations de navigation
        public Animal Animal { get; set; } = null!;
        public Temperament Temperament { get; set; } = null!;
    }
}