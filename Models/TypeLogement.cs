using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace PurrfectMates.Models
{
    [Table("TypesLogements")]
    public class TypeLogement
    {
        [Key]
        [Column("idTypeLogement")]
        public int IdTypeLogement { get; set; }

        [Required]
        [MaxLength(100)]
        [Column("typeLogement")]
        public string TypeLogementNom { get; set; } = string.Empty;
    }
}