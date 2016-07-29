using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace FADeckBuilder
{
    public class SpecMatrix
    {

        public int[][] blank = new int[9][]
        {
            new int[] {0,0,0,0,0,0,0,0},  //xp bonus, not used in code
            new int[] {0,0,0,0,0,0,0,0,0},
            new int[] {0,0,0,0,0,0,0,0,0},
            new int[] {0,0,0,0,0,0,0,0,0},
            new int[] {0,0,0,0,0,0,0,0,0},
            new int[] {0,0,0,0,0,0,0,0,0},
            new int[] {0,0,0,0,0,0,0,0,0},
            new int[] {0,0,0,0,0,0,0,0,0},
            new int[] {0,0,0,0,0,0,0,0,0}
        };
        public int[][] general = new int[9][]
        {
            new int[] {0,0,0,0,0,0,0,0},  //xp bonus, not used in code
            new int[] {1,2,2,2,3}, 
            new int[] {1,2,2,2,3}, 
            new int[] {1,2,2,2,3}, 
            new int[] {1,2,2,2,3}, 
            new int[] {1,2,2,2,3}, 
            new int[] {1,2,2,2,3}, 
            new int[] {1,2,2,3,3}, 
            new int[] {1,2,3,4,5} 
        };
        public int[][] support = new int[9][]
        {
            new int[] {0,0,1,0,0,0,0,0},  //xp bonus, not used in code
            new int[] {1,1,1,1,2,1,1,1,1}, 
            new int[] {1,2,2,2,3}, 
            new int[] {1,1,1,1,2,1,1,1,1}, 
            new int[] {1,2,2,2,3}, 
            new int[] {1,2,2,2,3}, 
            new int[] {1,2,2,2,3}, 
            new int[] {1,2,2,3,3}, 
            new int[] {1,2,3,4,5} 
        };
        public int[][] moto = new int[9][]
        {
            new int[] {0,1,0,0,1,1,0,0}, //xp bonus, not used in code
            new int[] {1,2,2,2,3}, 
            new int[] {1,1,1,1,2,1,1}, 
            new int[] {1,2,2,2,3}, 
            new int[] {1,2,2,2,3}, 
            new int[] {1,1,1,1,2,1,1}, 
            new int[] {1,1,1,1,2,1,1}, 
            new int[] {1,2,2,3,3}, 
            new int[] {1,2,3,4,5} 
        };
        public int[][] armoured = new int[9][]
        {
            new int[] {0,0,0,2,0,0,0,0},  //xp bonus, not used in code
            new int[] {1,2,2,2,3}, 
            new int[] {1,2,2,2,3}, 
            new int[] {1,2,2,2,3}, 
            new int[] {1,1,1,1,2,1,1,1,1}, 
            new int[] {1,2,2,2,3}, 
            new int[] {1,2,2,2,3}, 
            new int[] {1,2,2,3,3}, 
            new int[] {1,2,3,4,5} 
        };
        public int[][] mech = new int[9][]
        {
            new int[] {0,1,0,0,0,1,0,0},  //xp bonus, not used in code
            new int[] {1,2,2,2,3}, 
            new int[] {1,1,1,1,2,1,1,1,1}, 
            new int[] {1,2,2,2,3}, 
            new int[] {1,2,2,2,3}, 
            new int[] {1,2,2,2,3}, 
            new int[] {1,1,1,1,2,1,1,1,1}, 
            new int[] {1,2,2,3,3}, 
            new int[] {1,2,3,4,5} 
        };
        public int[][] airborne = new int[9][]
        {
            new int[] {0,1,0,0,0,0,1,1},  //xp bonus, not used in code
            new int[] {1,2,2,2,3}, 
            new int[] {1,1,1,1,2,1,1,1,1}, 
            new int[] {1,2,2,2,3}, 
            new int[] {1,2,2,2,3}, 
            new int[] {1,2,2,2,3}, 
            new int[] {1,2,2,2,3}, 
            new int[] {1,1,1,2,2,1,1,1,1}, 
            new int[] {1,1,2,3,4,1,1,1,1} 
        };
        public int[][] marine = new int[9][]
        {
            new int[] {0,1,0,0,0,0,0,1},  //xp bonus, not used in code
            new int[] {1,2,2,2,3}, 
            new int[] {1,1,1,1,2,1,1}, 
            new int[] {1,2,2,2,3}, 
            new int[] {1,2,2,2,3}, 
            new int[] {1,2,2,2,3}, 
            new int[] {1,2,2,2,3}, 
            new int[] {1,2,2,3,3}, 
            new int[] {1,1,2,3,4,1,1} 
        };


        public List<SpecPair> nTraits = new List<SpecPair>();

        public SpecMatrix()
        {
            nTraits.Add(new SpecPair("USA", 10, 15));
            nTraits.Add(new SpecPair("UK", 20, 15));
            nTraits.Add(new SpecPair("FRA", 20, 15));
            nTraits.Add(new SpecPair("BRD", 20, 15));
            nTraits.Add(new SpecPair("CAN", 40, 15));
            nTraits.Add(new SpecPair("DEN", 40, 15));
            nTraits.Add(new SpecPair("SWE", 30, 15));
            nTraits.Add(new SpecPair("NOR", 40, 15));
            nTraits.Add(new SpecPair("ANZAC", 30, 15));
            nTraits.Add(new SpecPair("JAP", 30, 15));
            nTraits.Add(new SpecPair("ROK", 30, 15));
            nTraits.Add(new SpecPair("NED", 20, 15));
            nTraits.Add(new SpecPair("EU", 0, 10));
            nTraits.Add(new SpecPair("SCA", 15, 10));
            nTraits.Add(new SpecPair("CW", 10, 10));
            nTraits.Add(new SpecPair("BD", 20, 10));
            nTraits.Add(new SpecPair("LJUT", 15, 10));
            nTraits.Add(new SpecPair("NORAD", 0, 10));
            nTraits.Add(new SpecPair("BDRNL", 10, 10));
            nTraits.Add(new SpecPair("NATO", 0, 0));
            nTraits.Add(new SpecPair("DDR", 20, 15));
            nTraits.Add(new SpecPair("USSR", 10, 15));
            nTraits.Add(new SpecPair("POL", 20, 15));
            nTraits.Add(new SpecPair("CZS", 30, 15));
            nTraits.Add(new SpecPair("PRC", 30, 15));
            nTraits.Add(new SpecPair("DPRK", 40, 15));
            nTraits.Add(new SpecPair("RD", 20, 10));
            nTraits.Add(new SpecPair("NSWP", 15, 10));
            nTraits.Add(new SpecPair("SOVKOR", 0, 10));
            nTraits.Add(new SpecPair("REDFOR", 0, 0));
        }

        public int getCoeff (string nat)
        {
            int i = 100 + nTraits.First(item => item.sNation == nat).iAvail;
            return  i;
        }
        
    }

    public class SpecPair
    {
        public int iAvail { get; set; }
        public int iPoints { get; set; }
        public string sNation { get; set; }

        public SpecPair(string nat, int avail, int points)
        {
            iAvail = avail;
            iPoints = points;
            sNation = nat;
        }


    }

}
