using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace FADeckBuilder
{
    public class Datacard
    {
        public int iUnitID { get; set; }
        public string sNameU { get; set; }
        public string sNation { get; set; }
        public char[] caUnitData { get; set; }
        public int[] iaAvailability = new int[5];
        public char[] caSpecDeck {get; set;}
        public int iYear { get; set; }
        public int iCost { get; set; }
        public int iCards { get; set; }
        public int iIsProto { get; set; }

        public int iHP { get; set; }
        public int iSize { get; set; }   // also ECM, as :1-2-3-4-5 vsmall, small, med, big, vbig, 0,10+ is ECM
        public int iOptics { get; set; } //  also air detection: 1-2-3-4-5, poor-med-good-vgood-exc, 0 is err.
        public int iSpeed { get; set; }
        public int iRSpeed { get; set; }
        public int iASpeed { get; set; }
        public int iTraining { get; set; } // 1-2-3-4, militia, line, shock, elite, 0 is err.
        public int iStealth { get; set; }   //1-2-3-4-5, poor-med-good-vgood-exc, 0 is err.
        public int iAutonomy { get; set; }
        public int[] iaArmor = new int[4];

        public Weapon W1 { get; set; }//not set on construct
        public Weapon W2 { get; set; }//not set on construct
        public Weapon W3 { get; set; }//not set on construct

        public Datacard (int ID, string Name, string Nation, string Data, int[] Availability = null , string Spec = "1111111", int Year=0, int Cost = 0, int  Cards = 0)
        {
            iUnitID = ID;
            sNameU  = Name;
            sNation = Nation;
            caUnitData = Data.ToCharArray();
            caSpecDeck = Spec.ToCharArray();
            iCost = Cost;
            //iBaseVeterancy  = lowVeterancy;
            iYear = Year;
            iCards = Cards;
            if (Availability == null)
            {
                iaAvailability[0] = 0;
                iaAvailability[1] = 0;
                iaAvailability[2] = 0;
                iaAvailability[3] = 0;
                iaAvailability[4] = 0;
            }
            else
            {
                iaAvailability[0] = Availability[0];
                iaAvailability[1] = Availability[1];
                iaAvailability[2] = Availability[2];
                iaAvailability[3] = Availability[3];
                iaAvailability[4] = Availability[4];
            }
            caSpecDeck = Spec.ToCharArray();
        }

        public Datacard(int ID, string Data, int[] Availability, string Spec, int Year, int Cost, int Cards, int Proto, string Nation, string Name)
        {
            iUnitID = ID;
            sNameU = Name;
            sNation = Nation;
            caUnitData = Data.ToCharArray();
            caSpecDeck = Spec.ToCharArray();
            iCost = Cost;
            iIsProto = Proto;
            //iBaseVeterancy  = lowVeterancy;
            iYear = Year;
            iCards = Cards;

            if (Availability == null)
            {
                iaAvailability[0] = 0;
                iaAvailability[1] = 0;
                iaAvailability[2] = 0;
                iaAvailability[3] = 0;
                iaAvailability[4] = 0;
            }
            else
            {
                iaAvailability[0] = Availability[0];
                iaAvailability[1] = Availability[1];
                iaAvailability[2] = Availability[2];
                iaAvailability[3] = Availability[3];
                iaAvailability[4] = Availability[4];
            }
            caSpecDeck = Spec.ToCharArray();
        }

        public Datacard(Datacard Card)
        {
            iUnitID = Card.iUnitID;
            sNameU = Card.sNameU;
            sNation = Card.sNation;
            caUnitData = Card.caUnitData;
            iaAvailability = Card.iaAvailability;
            caSpecDeck = Card.caSpecDeck;
        }
               
        public void Traits(int hp, int size, int optics, int speed, int rspeed, int aspeed, int training, int stealth, int auton, int[] AV)
        { 
            //string sName = name;
            iHP = hp;
            iSize = size;
            iOptics = optics;
            iSpeed = speed;
            iRSpeed =rspeed;
            iASpeed = aspeed;
            iTraining = training;
            iStealth = stealth;
            iAutonomy = auton;
            iaArmor = new int[4];
            iaArmor[0] = AV[0];
            iaArmor[1] = AV[1];
            iaArmor[2] = AV[2];
            iaArmor[3] = AV[3];
        }
    }
}
