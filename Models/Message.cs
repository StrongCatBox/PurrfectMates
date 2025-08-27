using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace PurrfectMates.Models
{
    internal class Message
    {
        [Key] public int IdMessage { get; set; }
        public Utilisateur Expediteur { get; set; }
        public Utilisateur Destinataire { get; set; }
        public string ContenuMessage { get; set; }
        public DateTime DateEnvoie { get; set; }

        public void ControlChampsMess()
        {
            if (ContenuMessage.Length > 800)
            {
                throw new Exception("Votre message est tres long");
            }
        }

        public Message(Utilisateur unExpediteur, Utilisateur unDestinataire, string unContenuMessage)
        {
            this.Expediteur = unExpediteur;
            this.Destinataire = unDestinataire;
            this.ContenuMessage = unContenuMessage;
            this.DateEnvoie = DateTime.Now;
            ControlChampsMess();
        }
    }
}
