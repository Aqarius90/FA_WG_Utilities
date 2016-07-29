using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace FADeckBuilder
{
    public class VehicleCard
    {
        public string sVeterancy { get; set; }
        public int iVet { get; set; }
        public string sNation { get; set; }
        public int iYear { get; set; }
        public char[] caSpec { get; set; }
        public int iCost { get; set; }
        public int iIsProto { get; set; }

        public int iArrayIndex { get; set; }
        public int iDeckIndex { get; set; }
        public int[] iaAvailability { get; set; }
        public Datacard Unit { get; set; }
        public Datacard Transport { get; set; }
        public Datacard Craft { get; set; }

        //public VehicleCard() { }
        public VehicleCard(Datacard unit)
        {
            //sVeterancy = ;
            iYear = unit.iYear;
            sNation = unit.sNation;
            caSpec = unit.caSpecDeck;
            iCost = unit.iCost;
            iIsProto = unit.iIsProto;

            iaAvailability = unit.iaAvailability;
            Unit = unit;
        }
        public VehicleCard(Datacard unit, Datacard transport)
        {
            //sVeterancy = ;
            iYear = unit.iYear < transport.iYear ? unit.iYear : transport.iYear;
            sNation = unit.sNation;
            caSpec = "1111111".ToCharArray();
            for (int i = 0; i < 7; i++)
            {
                if (unit.caSpecDeck[i] == '0' || transport.caSpecDeck[i] == '0') { caSpec[i] = '0'; }
            }
            iCost = unit.iCost + transport.iCost;
            if (unit.iIsProto == 1 || transport.iIsProto == 1)
            {
                iIsProto = 1;
            }
            iaAvailability =new int[5] {00,00,00,00,00};
            for (int i = 0; i < 5; i++)
            {
                iaAvailability[i] = unit.iaAvailability[i] < transport.iaAvailability[i] ? unit.iaAvailability[i] : transport.iaAvailability[i];
            }                
            Unit = unit;
            Transport = transport;
        }

        public VehicleCard(Datacard unit, Datacard transport, Datacard craft)
        {
            //sVeterancy = ;
            iYear = unit.iYear < transport.iYear ? unit.iYear : transport.iYear;
            sNation = unit.sNation;
            caSpec = "1111111".ToCharArray();
            for (int i = 0; i < 7; i++)
            {
                if (unit.caSpecDeck[i] == '0' || transport.caSpecDeck[i] == '0') { caSpec[i] = '0'; }
            }

            if (unit.iIsProto == 1 || transport.iIsProto == 1)
            {
                iIsProto = 1;
            }
            iCost = unit.iCost + transport.iCost;// +Craft.iCost;

            iaAvailability = unit.iaAvailability;
            Unit = unit;
            Transport = transport;
            Craft = craft;
        }
    }
}
