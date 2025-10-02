using System.ComponentModel.DataAnnotations;

namespace PurrfectMates.Models
{
    public class Temperament  
    {
        [Key]
        public int IdTemperament { get; set; }

        [Required]
        [MaxLength(50)]
        public string NomTemperament { get; set; } = string.Empty;
    }
}