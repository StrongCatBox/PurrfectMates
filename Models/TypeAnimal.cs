using System.ComponentModel.DataAnnotations;

namespace PurrfectMates.Models
{
    public class TypeAnimal
    {
        [Key]
        public int IdTypeAnimal { get; set; }

        [Required]
        [MaxLength(50)]
        public string nomTypeAnimal { get; set; } = string.Empty;
    }
}
