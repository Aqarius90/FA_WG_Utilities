using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace FADeckBuilder
{
    public class Weapon
    {
        public string ID { get; set; }
        public string sName { get; set; }
        public string sRoundType { get; set; }
        public int rGround { get; set; }
        public int rHelo { get; set; }
        public int rAir { get; set; }
        public int iAccuracy { get; set; }
        public int iStab { get; set; }
        public int AP { get; set; }
        public double HE { get; set; }
        public string ROF { get; set; }
        public int iSuppression { get; set; }
        public string sTags {get;set;}

        public int iAmmo { get; set; }//not set on construct

        public Weapon(int ground, int helo, int air, int acc, int stab, int ap, double he, string rof, int supp, string tags, string rounds, string name)
        {
            sName = name;
            sRoundType = rounds;
            rGround = ground;
            rHelo = helo;
            rAir = air;
            iAccuracy = acc;
            iStab = stab;
            AP = ap;
            HE = he;
            ROF = rof;
            iSuppression = supp;
            sTags = tags;
        }
    }
}
