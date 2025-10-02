using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace PurrfectMates.Models
{
    [Table("Photos")]
    public class Photo
    {
        [Key]
        [Column("idPhoto")]
        public int IdPhoto { get; set; }

        [Required]
        [Column("idAnimal")]
        public int IdAnimal { get; set; }

        [Required]
        [MaxLength(500)]
        [Column("cheminFolder")]
        public string CheminFolder { get; set; } = string.Empty;

        [Required]
        [Column("estPhotoProfil")]
        public bool EstPhotoProfil { get; set; } = false;

        // Navigation
        public Animal Animal { get; set; } = null!;
    }
}