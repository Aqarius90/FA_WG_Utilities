using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace FADeckBuilder
{
    //for debug table display
    public class debugRow
    {
        public string dec { get; set; }
        public string read { get; set; }
        public string type { get; set; }
    }
    //for unit makeup
    public class deckRow
    {
        public string UID { get; set; }
        public string TID { get; set; }
        public string Nation { get; set; }
        public string Name { get; set; }
        public string Transport { get; set; }
        public int vet0 { get; set; }
        public int vet1 { get; set; }
        public int vet2 { get; set; }
        public int vet3 { get; set; }
        public int vet4 { get; set; }

        public int Cost { get; set; }
        public int iCards { get; set; }
        public int iTCards { get; set; }
        public string Cards { get; set; }
        public string TCards { get; set; }
    }
}
