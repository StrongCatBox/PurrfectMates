using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace PurrfectMates.Models
{
    [Table("LogementsParAnimaux")]
    public class LogementParAnimal
    {
        [Key]
        [Column("idAnimal")]
        public int IdAnimal { get; set; }

        [Key]
        [Column("idTypeLogement")]
        public int IdTypeLogement { get; set; }

        // Relations de navigation
        public Animal Animal { get; set; } = null!;
        public TypeLogement TypeLogement { get; set; } = null!;  // ← Utilise la classe, pas l'enum
    }
}