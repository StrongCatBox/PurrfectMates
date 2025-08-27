using System.ComponentModel.DataAnnotations;

namespace PurrfectMates.Models
{
    public class NiveauActivite
    {
        [Key]
        public int IdNiveauActivite { get; set; }

        [Required]
        [MaxLength(50)]
        public string nomActivite { get; set; } = string.Empty;
    }
}
