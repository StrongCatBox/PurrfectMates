using System.ComponentModel.DataAnnotations;

namespace PurrfectMates.Models
{
    public class TailleAnimal
    {
        [Key]
        public int IdTailleAnimal { get; set; }

        [Required]
        [MaxLength(50)]
        public string nomTaille { get; set; } = string.Empty;
    }
}
