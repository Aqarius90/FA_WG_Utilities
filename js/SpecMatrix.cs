/*
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