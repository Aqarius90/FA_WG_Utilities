using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace FADeckBuilder
{
    class TransportPair
    {
        public int[] Linker;
        public TransportPair(int iside, int infID, int vehID)
        {
            Linker = new int[]{iside, infID, vehID};
        }
    }
    class TransportLinker
    {
        public List<TransportPair> TransportPairs = new List<TransportPair>();

        public TransportLinker()
        {
            TransportPairs.Add(new TransportPair(0, 0519, 0332));  //TACOM	M35
            TransportPairs.Add(new TransportPair(0, 0519, 0384));  //	M998  HUMVEE
            TransportPairs.Add(new TransportPair(0, 0519, 0674));  //	UH-1H HUEY
            TransportPairs.Add(new TransportPair(0, 0519, 0679));  //	UH-60A BLACKHAWK
            TransportPairs.Add(new TransportPair(0, 0519, 0678));  //	UH-1N TWIN HUEY
            TransportPairs.Add(new TransportPair(0, 0050, 0288));  //Assault Engineers	M113A1
            TransportPairs.Add(new TransportPair(0, 0050, 0289));  //	M113A3
            TransportPairs.Add(new TransportPair(0, 0050, 0674));  //	UH-1H HUEY
            TransportPairs.Add(new TransportPair(0, 0050, 0679));  //	UH-60A BLACKHAWK
            TransportPairs.Add(new TransportPair(0, 0050, 0678));  //	UH-1N TWIN HUEY
            TransportPairs.Add(new TransportPair(0, 0042, 0332));  //CAVALRY SCOUTS	M35
            TransportPairs.Add(new TransportPair(0, 0042, 0384));  //	M998  HUMVEE
            TransportPairs.Add(new TransportPair(0, 0042, 0282));  //	M113A1 DRAGON
            TransportPairs.Add(new TransportPair(0, 0042, 0290));  //	M113A1 SUPER DRAGON
            TransportPairs.Add(new TransportPair(0, 0042, 0674));  //	UH-1H HUEY
            TransportPairs.Add(new TransportPair(0, 0042, 0679));  //	UH-60A BLACKHAWK
            TransportPairs.Add(new TransportPair(0, 0106, 0384));  //Delta Force	M998  HUMVEE
            TransportPairs.Add(new TransportPair(0, 0106, 0527));  //	V-150
            TransportPairs.Add(new TransportPair(0, 0106, 0613));  //	CH-46 PHROG
            TransportPairs.Add(new TransportPair(0, 0106, 0615));  //	CH-47C Chinook
            TransportPairs.Add(new TransportPair(0, 0218, 0384));  //LAAD REDEYE	M998  HUMVEE
            TransportPairs.Add(new TransportPair(0, 0218, 0288));  //	M113A1
            TransportPairs.Add(new TransportPair(0, 0218, 0289));  //	M113A3
            TransportPairs.Add(new TransportPair(0, 0218, 0674));  //	UH-1H HUEY
            TransportPairs.Add(new TransportPair(0, 0218, 0679));  //	UH-60A BLACKHAWK
            TransportPairs.Add(new TransportPair(0, 0218, 0678));  //	UH-1N TWIN HUEY
            TransportPairs.Add(new TransportPair(0, 0219, 0384));  //LAAD STINGER A	M998  HUMVEE
            TransportPairs.Add(new TransportPair(0, 0219, 0288));  //	M113A1
            TransportPairs.Add(new TransportPair(0, 0219, 0289));  //	M113A3
            TransportPairs.Add(new TransportPair(0, 0219, 0674));  //	UH-1H HUEY
            TransportPairs.Add(new TransportPair(0, 0219, 0679));  //	UH-60A BLACKHAWK
            TransportPairs.Add(new TransportPair(0, 0219, 0678));  //	UH-1N TWIN HUEY
            TransportPairs.Add(new TransportPair(0, 0832, 0384));  //LAAD STINGER C	M998  HUMVEE
            TransportPairs.Add(new TransportPair(0, 0832, 0288));  //	M113A1
            TransportPairs.Add(new TransportPair(0, 0832, 0289));  //	M113A3
            TransportPairs.Add(new TransportPair(0, 0832, 0674));  //	UH-1H HUEY
            TransportPairs.Add(new TransportPair(0, 0832, 0679));  //	UH-60A BLACKHAWK
            TransportPairs.Add(new TransportPair(0, 0832, 0678));  //	UH-1N TWIN HUEY
            TransportPairs.Add(new TransportPair(0, 0472, 0384));  //LIGHT RIFLEMEN	M998  HUMVEE
            TransportPairs.Add(new TransportPair(0, 0472, 0674));  //	UH-1H HUEY
            TransportPairs.Add(new TransportPair(0, 0472, 0679));  //	UH-60A BLACKHAWK
            TransportPairs.Add(new TransportPair(0, 0472, 0678));  //	UH-1N TWIN HUEY
            TransportPairs.Add(new TransportPair(0, 0806, 0384));  //LIGHT RIFLEMEN 90	M998  HUMVEE
            TransportPairs.Add(new TransportPair(0, 0806, 0674));  //	UH-1H HUEY
            TransportPairs.Add(new TransportPair(0, 0806, 0679));  //	UH-60A BLACKHAWK
            TransportPairs.Add(new TransportPair(0, 0806, 0678));  //	UH-1N TWIN HUEY
            TransportPairs.Add(new TransportPair(0, 0521, 0332));  //Navy seals	M35
            TransportPairs.Add(new TransportPair(0, 0521, 0384));  //	M998  HUMVEE
            TransportPairs.Add(new TransportPair(0, 0521, 0527));  //	V-150
            TransportPairs.Add(new TransportPair(0, 0521, 0678));  //	UH-1N TWIN HUEY
            TransportPairs.Add(new TransportPair(0, 0521, 0613));  //	CH-46 PHROG
            TransportPairs.Add(new TransportPair(0, 0452, 0332));  //RANGERS	M35
            TransportPairs.Add(new TransportPair(0, 0452, 0384));  //	M998  HUMVEE
            TransportPairs.Add(new TransportPair(0, 0452, 0527));  //	V-150
            TransportPairs.Add(new TransportPair(0, 0452, 0674));  //	UH-1H HUEY
            TransportPairs.Add(new TransportPair(0, 0452, 0679));  //	UH-60A BLACKHAWK
            TransportPairs.Add(new TransportPair(0, 0452, 0615));  //	CH-47C Chinook
            TransportPairs.Add(new TransportPair(0, 0455, 0384));  //RIFLEMEN	M998  HUMVEE
            TransportPairs.Add(new TransportPair(0, 0455, 0288));  //	M113A1
            TransportPairs.Add(new TransportPair(0, 0455, 0289));  //	M113A3
            TransportPairs.Add(new TransportPair(0, 0455, 0330));  //	M2 BRADLEY IFV
            TransportPairs.Add(new TransportPair(0, 0455, 0328));  //	M2A1 BRADLEY IFV
            TransportPairs.Add(new TransportPair(0, 0455, 0329));  //	M2A2 BRADLEY IFV
            TransportPairs.Add(new TransportPair(0, 0455, 0674));  //	UH-1H HUEY
            TransportPairs.Add(new TransportPair(0, 0455, 0679));  //	UH-60A BLACKHAWK
            TransportPairs.Add(new TransportPair(0, 0805, 0384));  //RIFLEMEN 90	M998  HUMVEE
            TransportPairs.Add(new TransportPair(0, 0805, 0288));  //	M113A1
            TransportPairs.Add(new TransportPair(0, 0805, 0289));  //	M113A3
            TransportPairs.Add(new TransportPair(0, 0805, 0330));  //	M2 BRADLEY IFV
            TransportPairs.Add(new TransportPair(0, 0805, 0328));  //	M2A1 BRADLEY IFV
            TransportPairs.Add(new TransportPair(0, 0805, 0329));  //	M2A2 BRADLEY IFV
            TransportPairs.Add(new TransportPair(0, 0805, 0674));  //	UH-1H HUEY
            TransportPairs.Add(new TransportPair(0, 0805, 0679));  //	UH-60A BLACKHAWK
            TransportPairs.Add(new TransportPair(0, 0833, 0384));  //SMAW	M998  HUMVEE
            TransportPairs.Add(new TransportPair(0, 0833, 0229));  //	LVTP-7
            TransportPairs.Add(new TransportPair(0, 0833, 0230));  //	LVTP-7A1
            TransportPairs.Add(new TransportPair(0, 0833, 0678));  //	UH-1N TWIN HUEY
            TransportPairs.Add(new TransportPair(0, 0520, 0229));  //US MARINES	LVTP-7
            TransportPairs.Add(new TransportPair(0, 0520, 0230));  //	LVTP-7A1
            TransportPairs.Add(new TransportPair(0, 0520, 0678));  //	UH-1N TWIN HUEY
            TransportPairs.Add(new TransportPair(0, 0520, 0613));  //	CH-46 PHROG
            TransportPairs.Add(new TransportPair(0, 0804, 0229));  //US MARINES 90	LVTP-7
            TransportPairs.Add(new TransportPair(0, 0804, 0230));  //	LVTP-7A1
            TransportPairs.Add(new TransportPair(0, 0804, 0678));  //	UH-1N TWIN HUEY
            TransportPairs.Add(new TransportPair(0, 0804, 0613));  //	CH-46 PHROG
            TransportPairs.Add(new TransportPair(0, 0517, 0419));  //HQ Section	Pinzgauer
            TransportPairs.Add(new TransportPair(0, 0517, 0847));  //	STALWART
            TransportPairs.Add(new TransportPair(0, 0517, 0470));  //	SAXON
            TransportPairs.Add(new TransportPair(0, 0517, 0118));  //	FV432
            TransportPairs.Add(new TransportPair(0, 0517, 0632));  //	LYNX AH.1
            TransportPairs.Add(new TransportPair(0, 0517, 0634));  //	LYNX AH.7
            TransportPairs.Add(new TransportPair(0, 0145, 0847));  //FUSILIERS	STALWART
            TransportPairs.Add(new TransportPair(0, 0145, 0470));  //	SAXON
            TransportPairs.Add(new TransportPair(0, 0145, 0118));  //	FV432
            TransportPairs.Add(new TransportPair(0, 0145, 0124));  //	FV519 WARRIOR
            TransportPairs.Add(new TransportPair(0, 0145, 0125));  //	FV510 WARRROR 90
            TransportPairs.Add(new TransportPair(0, 0145, 0863));  //	FV510 WARRIOR MILAN
            TransportPairs.Add(new TransportPair(0, 0145, 0632));  //	LYNX AH.1
            TransportPairs.Add(new TransportPair(0, 0145, 0634));  //	LYNX AH.7
            TransportPairs.Add(new TransportPair(0, 0809, 0847));  //FUSILIERS 90	STALWART
            TransportPairs.Add(new TransportPair(0, 0809, 0470));  //	SAXON
            TransportPairs.Add(new TransportPair(0, 0809, 0118));  //	FV432
            TransportPairs.Add(new TransportPair(0, 0809, 0124));  //	FV519 WARRIOR
            TransportPairs.Add(new TransportPair(0, 0809, 0125));  //	FV510 WARRROR 90
            TransportPairs.Add(new TransportPair(0, 0809, 0863));  //	FV510 WARRIOR MILAN
            TransportPairs.Add(new TransportPair(0, 0809, 0632));  //	LYNX AH.1
            TransportPairs.Add(new TransportPair(0, 0809, 0634));  //	LYNX AH.7
            TransportPairs.Add(new TransportPair(0, 0148, 0419));  //GREEN JACKET	Pinzgauer
            TransportPairs.Add(new TransportPair(0, 0148, 0847));  //	STALWART
            TransportPairs.Add(new TransportPair(0, 0148, 0470));  //	SAXON
            TransportPairs.Add(new TransportPair(0, 0148, 0824));  //	PUMA HC.1
            TransportPairs.Add(new TransportPair(0, 0518, 0847));  //GURKAS	STALWART
            TransportPairs.Add(new TransportPair(0, 0518, 0470));  //	SAXON
            TransportPairs.Add(new TransportPair(0, 0518, 0824));  //	PUMA HC.1
            TransportPairs.Add(new TransportPair(0, 0811, 0847));  //GURKAS 90	STALWART
            TransportPairs.Add(new TransportPair(0, 0811, 0470));  //	SAXON
            TransportPairs.Add(new TransportPair(0, 0811, 0824));  //	PUMA HC.1
            TransportPairs.Add(new TransportPair(0, 0217, 0847));  //LAAD BLOWPIPE	STALWART
            TransportPairs.Add(new TransportPair(0, 0217, 0470));  //	SAXON
            TransportPairs.Add(new TransportPair(0, 0217, 0118));  //	FV432
            TransportPairs.Add(new TransportPair(0, 0217, 0632));  //	LYNX AH.1
            TransportPairs.Add(new TransportPair(0, 0217, 0634));  //	LYNX AH.7
            TransportPairs.Add(new TransportPair(0, 0180, 0847));  //LAAD JAVELIN	STALWART
            TransportPairs.Add(new TransportPair(0, 0180, 0470));  //	SAXON
            TransportPairs.Add(new TransportPair(0, 0180, 0118));  //	FV432
            TransportPairs.Add(new TransportPair(0, 0180, 0632));  //	LYNX AH.1
            TransportPairs.Add(new TransportPair(0, 0180, 0634));  //	LYNX AH.7
            TransportPairs.Add(new TransportPair(0, 0392, 0847));  //MILAN 1	STALWART
            TransportPairs.Add(new TransportPair(0, 0392, 0470));  //	SAXON
            TransportPairs.Add(new TransportPair(0, 0392, 0118));  //	FV432
            TransportPairs.Add(new TransportPair(0, 0392, 0632));  //	LYNX AH.1
            TransportPairs.Add(new TransportPair(0, 0392, 0634));  //	LYNX AH.7
            TransportPairs.Add(new TransportPair(0, 0814, 0847));  //MILAN 2	STALWART
            TransportPairs.Add(new TransportPair(0, 0814, 0470));  //	SAXON
            TransportPairs.Add(new TransportPair(0, 0814, 0118));  //	FV432
            TransportPairs.Add(new TransportPair(0, 0814, 0632));  //	LYNX AH.1
            TransportPairs.Add(new TransportPair(0, 0814, 0634));  //	LYNX AH.7
            TransportPairs.Add(new TransportPair(0, 0417, 0847));  //PARATROOPERS	STALWART
            TransportPairs.Add(new TransportPair(0, 0417, 0470));  //	SAXON
            TransportPairs.Add(new TransportPair(0, 0417, 0632));  //	LYNX AH.1
            TransportPairs.Add(new TransportPair(0, 0417, 0634));  //	LYNX AH.7
            TransportPairs.Add(new TransportPair(0, 0812, 0847));  //PARATROOPERS 90	STALWART
            TransportPairs.Add(new TransportPair(0, 0812, 0470));  //	SAXON
            TransportPairs.Add(new TransportPair(0, 0812, 0632));  //	LYNX AH.1
            TransportPairs.Add(new TransportPair(0, 0812, 0634));  //	LYNX AH.7
            TransportPairs.Add(new TransportPair(0, 0434, 0847));  //ROYAL MARINES	STALWART
            TransportPairs.Add(new TransportPair(0, 0434, 0470));  //	SAXON
            TransportPairs.Add(new TransportPair(0, 0434, 0232));  //	BUFFALO IV
            TransportPairs.Add(new TransportPair(0, 0434, 0121));  //	FV4333 STORMER
            TransportPairs.Add(new TransportPair(0, 0434, 0632));  //	LYNX AH.1
            TransportPairs.Add(new TransportPair(0, 0434, 0634));  //	LYNX AH.7
            TransportPairs.Add(new TransportPair(0, 0813, 0847));  //ROYAL MARINES 90	STALWART
            TransportPairs.Add(new TransportPair(0, 0813, 0470));  //	SAXON
            TransportPairs.Add(new TransportPair(0, 0813, 0121));  //	FV4333 STORMER
            TransportPairs.Add(new TransportPair(0, 0813, 0632));  //	LYNX AH.1
            TransportPairs.Add(new TransportPair(0, 0813, 0634));  //	LYNX AH.7
            TransportPairs.Add(new TransportPair(0, 0464, 0632));  //SAS	LYNX AH.1
            TransportPairs.Add(new TransportPair(0, 0464, 0634));  //	LYNX AH.7
            TransportPairs.Add(new TransportPair(0, 0464, 0824));  //	PUMA HC.1
            TransportPairs.Add(new TransportPair(0, 0808, 0419));  //SBS	Pinzgauer
            TransportPairs.Add(new TransportPair(0, 0808, 0847));  //	STALWART
            TransportPairs.Add(new TransportPair(0, 0808, 0470));  //	SAXON
            TransportPairs.Add(new TransportPair(0, 0808, 0632));  //	LYNX AH.1
            TransportPairs.Add(new TransportPair(0, 0808, 0634));  //	LYNX AH.7
            TransportPairs.Add(new TransportPair(0, 0808, 0824));  //	PUMA HC.1
            TransportPairs.Add(new TransportPair(0, 0492, 0129));  //TERRITORIALS	FV603 Saracen
            TransportPairs.Add(new TransportPair(0, 0001, 0539));  //Groupe de CMDT	VRLA
            TransportPairs.Add(new TransportPair(0, 0001, 0528));  //	VAB
            TransportPairs.Add(new TransportPair(0, 0001, 0532));  //	VAB T20/13
            TransportPairs.Add(new TransportPair(0, 0001, 0657));  //	PUMA 330H
            TransportPairs.Add(new TransportPair(0, 0001, 0599));  //	AS565 PANTHER
            TransportPairs.Add(new TransportPair(0, 0039, 0843));  //ATGM MILAN F1	AMX-13 VTT
            TransportPairs.Add(new TransportPair(0, 0039, 0528));  //	VAB
            TransportPairs.Add(new TransportPair(0, 0039, 0532));  //	VAB T20/13
            TransportPairs.Add(new TransportPair(0, 0039, 0657));  //	PUMA 330H
            TransportPairs.Add(new TransportPair(0, 0039, 0599));  //	AS565 PANTHER
            TransportPairs.Add(new TransportPair(0, 0040, 0843));  //ATGM MILAN F2	AMX-13 VTT
            TransportPairs.Add(new TransportPair(0, 0040, 0528));  //	VAB
            TransportPairs.Add(new TransportPair(0, 0040, 0532));  //	VAB T20/13
            TransportPairs.Add(new TransportPair(0, 0040, 0005));  //	AMX-10P
            TransportPairs.Add(new TransportPair(0, 0040, 0657));  //	PUMA 330H
            TransportPairs.Add(new TransportPair(0, 0040, 0599));  //	AS565 PANTHER
            TransportPairs.Add(new TransportPair(0, 0800, 0843));  //ATGM MILAN F3	AMX-13 VTT
            TransportPairs.Add(new TransportPair(0, 0800, 0528));  //	VAB
            TransportPairs.Add(new TransportPair(0, 0800, 0532));  //	VAB T20/13
            TransportPairs.Add(new TransportPair(0, 0800, 0005));  //	AMX-10P
            TransportPairs.Add(new TransportPair(0, 0800, 0657));  //	PUMA 330H
            TransportPairs.Add(new TransportPair(0, 0800, 0599));  //	AS565 PANTHER
            TransportPairs.Add(new TransportPair(0, 0098, 0843));  //CHASSEURS	AMX-13 VTT
            TransportPairs.Add(new TransportPair(0, 0098, 0528));  //	VAB
            TransportPairs.Add(new TransportPair(0, 0098, 0532));  //	VAB T20/13
            TransportPairs.Add(new TransportPair(0, 0098, 0005));  //	AMX-10P
            TransportPairs.Add(new TransportPair(0, 0098, 0657));  //	PUMA 330H
            TransportPairs.Add(new TransportPair(0, 0099, 0843));  //CHASSEURS 85	AMX-13 VTT
            TransportPairs.Add(new TransportPair(0, 0099, 0528));  //	VAB
            TransportPairs.Add(new TransportPair(0, 0099, 0532));  //	VAB T20/13
            TransportPairs.Add(new TransportPair(0, 0099, 0005));  //	AMX-10P
            TransportPairs.Add(new TransportPair(0, 0099, 0657));  //	PUMA 330H
            TransportPairs.Add(new TransportPair(0, 0110, 0528));  //COMMANDO-MARINE	VAB
            TransportPairs.Add(new TransportPair(0, 0110, 0532));  //	VAB T20/13
            TransportPairs.Add(new TransportPair(0, 0110, 0657));  //	PUMA 330H
            TransportPairs.Add(new TransportPair(0, 0110, 0661));  //	PUMA 330H PIRATE
            TransportPairs.Add(new TransportPair(0, 0110, 0599));  //	AS565 PANTHER
            TransportPairs.Add(new TransportPair(0, 0416, 0539));  //COMMANDOS PARA	VRLA
            TransportPairs.Add(new TransportPair(0, 0416, 0528));  //	VAB
            TransportPairs.Add(new TransportPair(0, 0416, 0532));  //	VAB T20/13
            TransportPairs.Add(new TransportPair(0, 0416, 0657));  //	PUMA 330H
            TransportPairs.Add(new TransportPair(0, 0416, 0661));  //	PUMA 330H PIRATE
            TransportPairs.Add(new TransportPair(0, 0156, 0539));  //HUSSARDS	VRLA
            TransportPairs.Add(new TransportPair(0, 0156, 0843));  //	AMX-13 VTT
            TransportPairs.Add(new TransportPair(0, 0156, 0528));  //	VAB
            TransportPairs.Add(new TransportPair(0, 0156, 0532));  //	VAB T20/13
            TransportPairs.Add(new TransportPair(0, 0156, 0657));  //	PUMA 330H
            TransportPairs.Add(new TransportPair(0, 0156, 0661));  //	PUMA 330H PIRATE
            TransportPairs.Add(new TransportPair(0, 0801, 0539));  //HUSSARDS 85	VRLA
            TransportPairs.Add(new TransportPair(0, 0801, 0843));  //	AMX-13 VTT
            TransportPairs.Add(new TransportPair(0, 0801, 0528));  //	VAB
            TransportPairs.Add(new TransportPair(0, 0801, 0532));  //	VAB T20/13
            TransportPairs.Add(new TransportPair(0, 0801, 0657));  //	PUMA 330H
            TransportPairs.Add(new TransportPair(0, 0801, 0661));  //	PUMA 330H PIRATE
            TransportPairs.Add(new TransportPair(0, 0236, 0528));  //LEGION	VAB
            TransportPairs.Add(new TransportPair(0, 0236, 0532));  //	VAB T20/13
            TransportPairs.Add(new TransportPair(0, 0236, 0657));  //	PUMA 330H
            TransportPairs.Add(new TransportPair(0, 0236, 0661));  //	PUMA 330H PIRATE
            TransportPairs.Add(new TransportPair(0, 0237, 0528));  //LEGION 90	VAB
            TransportPairs.Add(new TransportPair(0, 0237, 0532));  //	VAB T20/13
            TransportPairs.Add(new TransportPair(0, 0237, 0657));  //	PUMA 330H
            TransportPairs.Add(new TransportPair(0, 0237, 0661));  //	PUMA 330H PIRATE
            TransportPairs.Add(new TransportPair(0, 0803, 0843));  //MISTRAL	AMX-13 VTT
            TransportPairs.Add(new TransportPair(0, 0803, 0528));  //	VAB
            TransportPairs.Add(new TransportPair(0, 0803, 0532));  //	VAB T20/13
            TransportPairs.Add(new TransportPair(0, 0803, 0005));  //	AMX-10P
            TransportPairs.Add(new TransportPair(0, 0803, 0657));  //	PUMA 330H
            TransportPairs.Add(new TransportPair(0, 0803, 0599));  //	AS565 PANTHER
            TransportPairs.Add(new TransportPair(0, 0454, 0843));  //REZERVISTES	AMX-13 VTT
            TransportPairs.Add(new TransportPair(0, 0433, 0528));  //RIMa	VAB
            TransportPairs.Add(new TransportPair(0, 0433, 0532));  //	VAB T20/13
            TransportPairs.Add(new TransportPair(0, 0433, 0657));  //	PUMA 330H
            TransportPairs.Add(new TransportPair(0, 0433, 0599));  //	AS565 PANTHER
            TransportPairs.Add(new TransportPair(0, 0802, 0528));  //RIMa 85	VAB
            TransportPairs.Add(new TransportPair(0, 0802, 0532));  //	VAB T20/13
            TransportPairs.Add(new TransportPair(0, 0802, 0657));  //	PUMA 330H
            TransportPairs.Add(new TransportPair(0, 0802, 0599));  //	AS565 PANTHER
            TransportPairs.Add(new TransportPair(0, 0468, 0843));  //SAPEURS	AMX-13 VTT
            TransportPairs.Add(new TransportPair(0, 0468, 0528));  //	VAB
            TransportPairs.Add(new TransportPair(0, 0468, 0532));  //	VAB T20/13
            TransportPairs.Add(new TransportPair(0, 0468, 0657));  //	PUMA 330H
            TransportPairs.Add(new TransportPair(0, 0468, 0599));  //	AS565 PANTHER
            TransportPairs.Add(new TransportPair(0, 0429, 0390));  //Fuehrungsgruppe	MD Jupiter
            TransportPairs.Add(new TransportPair(0, 0429, 0496));  //	Tpz FUCHS
            TransportPairs.Add(new TransportPair(0, 0429, 0497));  //	Tpz FUCHS MILAN
            TransportPairs.Add(new TransportPair(0, 0429, 0621));  //	DORNIER 205
            TransportPairs.Add(new TransportPair(0, 0053, 0390));  //BGS	MD Jupiter
            TransportPairs.Add(new TransportPair(0, 0053, 0496));  //	Tpz FUCHS
            TransportPairs.Add(new TransportPair(0, 0053, 0497));  //	Tpz FUCHS MILAN
            TransportPairs.Add(new TransportPair(0, 0053, 0291));  //	M113A1G
            TransportPairs.Add(new TransportPair(0, 0053, 0621));  //	DORNIER 205
            TransportPairs.Add(new TransportPair(0, 0053, 0856));  //	TrTrsp CH-53G
            TransportPairs.Add(new TransportPair(0, 0487, 0496));  //DECKUNGSGRUPPE	Tpz FUCHS
            TransportPairs.Add(new TransportPair(0, 0487, 0497));  //	Tpz FUCHS MILAN
            TransportPairs.Add(new TransportPair(0, 0487, 0291));  //	M113A1G
            TransportPairs.Add(new TransportPair(0, 0487, 0394));  //	MARDER 1
            TransportPairs.Add(new TransportPair(0, 0487, 0395));  //	MARDER 1A1
            TransportPairs.Add(new TransportPair(0, 0487, 0396));  //	MARDER 1A2
            TransportPairs.Add(new TransportPair(0, 0487, 0397));  //	MARDER 1A3
            TransportPairs.Add(new TransportPair(0, 0487, 0621));  //	DORNIER 205
            TransportPairs.Add(new TransportPair(0, 0430, 0496));  //FALLSCHIRMJAEGER	Tpz FUCHS
            TransportPairs.Add(new TransportPair(0, 0430, 0497));  //	Tpz FUCHS MILAN
            TransportPairs.Add(new TransportPair(0, 0430, 0621));  //	DORNIER 205
            TransportPairs.Add(new TransportPair(0, 0430, 0856));  //	TrTrsp CH-53G
            TransportPairs.Add(new TransportPair(0, 0818, 0496));  //FALLSCHIRMJAEGER 90	Tpz FUCHS
            TransportPairs.Add(new TransportPair(0, 0818, 0497));  //	Tpz FUCHS MILAN
            TransportPairs.Add(new TransportPair(0, 0818, 0621));  //	DORNIER 205
            TransportPairs.Add(new TransportPair(0, 0818, 0856));  //	TrTrsp CH-53G
            TransportPairs.Add(new TransportPair(0, 0134, 0390));  //FERNSPAEHER	MD Jupiter
            TransportPairs.Add(new TransportPair(0, 0134, 0496));  //	Tpz FUCHS
            TransportPairs.Add(new TransportPair(0, 0134, 0497));  //	Tpz FUCHS MILAN
            TransportPairs.Add(new TransportPair(0, 0134, 0621));  //	DORNIER 205
            TransportPairs.Add(new TransportPair(0, 0134, 0856));  //	TrTrsp CH-53G
            TransportPairs.Add(new TransportPair(0, 0827, 0496));  //FLIEGERFAUST	Tpz FUCHS
            TransportPairs.Add(new TransportPair(0, 0827, 0497));  //	Tpz FUCHS MILAN
            TransportPairs.Add(new TransportPair(0, 0827, 0291));  //	M113A1G
            TransportPairs.Add(new TransportPair(0, 0827, 0621));  //	DORNIER 205
            TransportPairs.Add(new TransportPair(0, 0143, 0496));  //FLIEGERFAUST 2	Tpz FUCHS
            TransportPairs.Add(new TransportPair(0, 0143, 0497));  //	Tpz FUCHS MILAN
            TransportPairs.Add(new TransportPair(0, 0143, 0291));  //	M113A1G
            TransportPairs.Add(new TransportPair(0, 0143, 0621));  //	DORNIER 205
            TransportPairs.Add(new TransportPair(0, 0153, 0291));  //HEIMATSCHUETZEN	M113A1G
            TransportPairs.Add(new TransportPair(0, 0177, 0496));  //Jaeger	Tpz FUCHS
            TransportPairs.Add(new TransportPair(0, 0177, 0497));  //	Tpz FUCHS MILAN
            TransportPairs.Add(new TransportPair(0, 0177, 0291));  //	M113A1G
            TransportPairs.Add(new TransportPair(0, 0177, 0621));  //	DORNIER 205
            TransportPairs.Add(new TransportPair(0, 0176, 0496));  //PALR MILAN	Tpz FUCHS
            TransportPairs.Add(new TransportPair(0, 0176, 0497));  //	Tpz FUCHS MILAN
            TransportPairs.Add(new TransportPair(0, 0176, 0291));  //	M113A1G
            TransportPairs.Add(new TransportPair(0, 0176, 0621));  //	DORNIER 205
            TransportPairs.Add(new TransportPair(0, 0175, 0496));  //PALR MILAN 2	Tpz FUCHS
            TransportPairs.Add(new TransportPair(0, 0175, 0497));  //	Tpz FUCHS MILAN
            TransportPairs.Add(new TransportPair(0, 0175, 0291));  //	M113A1G
            TransportPairs.Add(new TransportPair(0, 0175, 0621));  //	DORNIER 205
            TransportPairs.Add(new TransportPair(0, 0413, 0291));  //Panzergrenadiere	M113A1G
            TransportPairs.Add(new TransportPair(0, 0413, 0394));  //	MARDER 1
            TransportPairs.Add(new TransportPair(0, 0413, 0395));  //	MARDER 1A1
            TransportPairs.Add(new TransportPair(0, 0413, 0396));  //	MARDER 1A2
            TransportPairs.Add(new TransportPair(0, 0413, 0397));  //	MARDER 1A3
            TransportPairs.Add(new TransportPair(0, 0413, 0866));  //	Marder 2
            TransportPairs.Add(new TransportPair(0, 0414, 0291));  //Panzergrenadiere 90	M113A1G
            TransportPairs.Add(new TransportPair(0, 0414, 0394));  //	MARDER 1
            TransportPairs.Add(new TransportPair(0, 0414, 0395));  //	MARDER 1A1
            TransportPairs.Add(new TransportPair(0, 0414, 0396));  //	MARDER 1A2
            TransportPairs.Add(new TransportPair(0, 0414, 0397));  //	MARDER 1A3
            TransportPairs.Add(new TransportPair(0, 0414, 0866));  //	Marder 2
            TransportPairs.Add(new TransportPair(0, 0057, 0551));  //Command Squad	M35
            TransportPairs.Add(new TransportPair(0, 0057, 0045));  //	GRIZZLY
            TransportPairs.Add(new TransportPair(0, 0057, 0055));  //	Bison
            TransportPairs.Add(new TransportPair(0, 0057, 0608));  //	CH-118
            TransportPairs.Add(new TransportPair(0, 0057, 0609));  //	CH-135
            TransportPairs.Add(new TransportPair(0, 0544, 0045));  //BLOWPIPE	GRIZZLY
            TransportPairs.Add(new TransportPair(0, 0544, 0055));  //	Bison
            TransportPairs.Add(new TransportPair(0, 0544, 0546));  //	M113A1
            TransportPairs.Add(new TransportPair(0, 0544, 0608));  //	CH-118
            TransportPairs.Add(new TransportPair(0, 0544, 0609));  //	CH-135
            TransportPairs.Add(new TransportPair(0, 0540, 0045));  //CANADIAN AIRBORNE	GRIZZLY
            TransportPairs.Add(new TransportPair(0, 0540, 0055));  //	Bison
            TransportPairs.Add(new TransportPair(0, 0540, 0608));  //	CH-118
            TransportPairs.Add(new TransportPair(0, 0540, 0609));  //	CH-135
            TransportPairs.Add(new TransportPair(0, 0540, 0857));  //	CH-147
            TransportPairs.Add(new TransportPair(0, 0815, 0045));  //CANADIAN AIRBORNE 90	GRIZZLY
            TransportPairs.Add(new TransportPair(0, 0815, 0055));  //	Bison
            TransportPairs.Add(new TransportPair(0, 0815, 0608));  //	CH-118
            TransportPairs.Add(new TransportPair(0, 0815, 0609));  //	CH-135
            TransportPairs.Add(new TransportPair(0, 0815, 0857));  //	CH-147
            TransportPairs.Add(new TransportPair(0, 0817, 0045));  //CANADIAN RIFLES 85	GRIZZLY
            TransportPairs.Add(new TransportPair(0, 0817, 0055));  //	Bison
            TransportPairs.Add(new TransportPair(0, 0817, 0546));  //	M113A1
            TransportPairs.Add(new TransportPair(0, 0817, 0069));  //	TH-495
            TransportPairs.Add(new TransportPair(0, 0002, 0045));  //CANADIAN RIFLES	GRIZZLY
            TransportPairs.Add(new TransportPair(0, 0002, 0055));  //	Bison
            TransportPairs.Add(new TransportPair(0, 0002, 0546));  //	M113A1
            TransportPairs.Add(new TransportPair(0, 0002, 0069));  //	TH-495
            TransportPairs.Add(new TransportPair(0, 0060, 0045));  //ERYX	GRIZZLY
            TransportPairs.Add(new TransportPair(0, 0060, 0055));  //	Bison
            TransportPairs.Add(new TransportPair(0, 0060, 0546));  //	M113A1
            TransportPairs.Add(new TransportPair(0, 0060, 0608));  //	CH-118
            TransportPairs.Add(new TransportPair(0, 0060, 0609));  //	CH-135
            TransportPairs.Add(new TransportPair(0, 0825, 0045));  //Highlanders	GRIZZLY
            TransportPairs.Add(new TransportPair(0, 0825, 0055));  //	Bison
            TransportPairs.Add(new TransportPair(0, 0825, 0608));  //	CH-118
            TransportPairs.Add(new TransportPair(0, 0825, 0609));  //	CH-135
            TransportPairs.Add(new TransportPair(0, 0825, 0857));  //	CH-147
            TransportPairs.Add(new TransportPair(0, 0828, 0045));  //HIGHLANDERS 90	GRIZZLY
            TransportPairs.Add(new TransportPair(0, 0828, 0055));  //	Bison
            TransportPairs.Add(new TransportPair(0, 0828, 0608));  //	CH-118
            TransportPairs.Add(new TransportPair(0, 0828, 0609));  //	CH-135
            TransportPairs.Add(new TransportPair(0, 0828, 0857));  //	CH-147
            TransportPairs.Add(new TransportPair(0, 0829, 0045));  //JAVELIN G/L	GRIZZLY
            TransportPairs.Add(new TransportPair(0, 0829, 0055));  //	Bison
            TransportPairs.Add(new TransportPair(0, 0829, 0546));  //	M113A1
            TransportPairs.Add(new TransportPair(0, 0829, 0608));  //	CH-118
            TransportPairs.Add(new TransportPair(0, 0829, 0609));  //	CH-135
            TransportPairs.Add(new TransportPair(0, 0387, 0045));  //MAW	GRIZZLY
            TransportPairs.Add(new TransportPair(0, 0387, 0055));  //	Bison
            TransportPairs.Add(new TransportPair(0, 0387, 0546));  //	M113A1
            TransportPairs.Add(new TransportPair(0, 0387, 0608));  //	CH-118
            TransportPairs.Add(new TransportPair(0, 0387, 0609));  //	CH-135
            TransportPairs.Add(new TransportPair(0, 0418, 0551));  //PATHFINDERS	M35
            TransportPairs.Add(new TransportPair(0, 0418, 0045));  //	GRIZZLY
            TransportPairs.Add(new TransportPair(0, 0418, 0055));  //	Bison
            TransportPairs.Add(new TransportPair(0, 0418, 0857));  //	CH-147
            TransportPairs.Add(new TransportPair(0, 0147, 0045));  //PIONEERS	GRIZZLY
            TransportPairs.Add(new TransportPair(0, 0147, 0055));  //	Bison
            TransportPairs.Add(new TransportPair(0, 0147, 0546));  //	M113A1
            TransportPairs.Add(new TransportPair(0, 0147, 0069));  //	TH-495
            TransportPairs.Add(new TransportPair(0, 0147, 0608));  //	CH-118
            TransportPairs.Add(new TransportPair(0, 0147, 0609));  //	CH-135
            TransportPairs.Add(new TransportPair(0, 0068, 0551));  //RECCE	M35
            TransportPairs.Add(new TransportPair(0, 0068, 0045));  //	GRIZZLY
            TransportPairs.Add(new TransportPair(0, 0068, 0055));  //	Bison
            TransportPairs.Add(new TransportPair(0, 0068, 0857));  //	CH-147
            TransportPairs.Add(new TransportPair(0, 0795, 0557));  //Stabsdeling	MD Jupiter
            TransportPairs.Add(new TransportPair(0, 0795, 0553));  //	M/113A1
            TransportPairs.Add(new TransportPair(0, 0795, 0902));  //	M/113G
            TransportPairs.Add(new TransportPair(0, 0795, 0846));  //	LYNX
            TransportPairs.Add(new TransportPair(0, 0107, 0553));  //DRAGONER	M/113A1
            TransportPairs.Add(new TransportPair(0, 0107, 0902));  //	M/113G
            TransportPairs.Add(new TransportPair(0, 0894, 0557));  //FKP	MD Jupiter
            TransportPairs.Add(new TransportPair(0, 0894, 0846));  //	LYNX
            TransportPairs.Add(new TransportPair(0, 0151, 0374));  //HAER HJEMMEVAERNET	M6 MOSENGRIS
            TransportPairs.Add(new TransportPair(0, 0897, 0553));  //ILDSTOTTEDRUPPE	M/113A1
            TransportPairs.Add(new TransportPair(0, 0897, 0902));  //	M/113G
            TransportPairs.Add(new TransportPair(0, 0896, 0553));  //ILDSTOTTEDRUPPE 85	M/113A1
            TransportPairs.Add(new TransportPair(0, 0896, 0902));  //	M/113G
            TransportPairs.Add(new TransportPair(0, 0174, 0557));  //JAEGERE	MD Jupiter
            TransportPairs.Add(new TransportPair(0, 0174, 0846));  //	LYNX
            TransportPairs.Add(new TransportPair(0, 0898, 0557));  //JAEGERE 90	MD Jupiter
            TransportPairs.Add(new TransportPair(0, 0898, 0846));  //	LYNX
            TransportPairs.Add(new TransportPair(0, 0254, 0553));  //LIVGARDEN	M/113A1
            TransportPairs.Add(new TransportPair(0, 0254, 0902));  //	M/113G
            TransportPairs.Add(new TransportPair(0, 0901, 0553));  //LIVRAGDEN 85	M/113A1
            TransportPairs.Add(new TransportPair(0, 0901, 0902));  //	M/113G
            TransportPairs.Add(new TransportPair(0, 0152, 0553));  //LLRkt HAMLET	M/113A1
            TransportPairs.Add(new TransportPair(0, 0152, 0902));  //	M/113G
            TransportPairs.Add(new TransportPair(0, 0904, 0553));  //LLRkt M/93	M/113A1
            TransportPairs.Add(new TransportPair(0, 0904, 0902));  //	M/113G
            TransportPairs.Add(new TransportPair(0, 0146, 0557));  //SPEJDERNE	MD Jupiter
            TransportPairs.Add(new TransportPair(0, 0146, 0553));  //	M/113A1
            TransportPairs.Add(new TransportPair(0, 0146, 0902));  //	M/113G
            TransportPairs.Add(new TransportPair(0, 0146, 0846));  //	LYNX
            TransportPairs.Add(new TransportPair(0, 0797, 0493));  //Stabsgrupp	TGB 13
            TransportPairs.Add(new TransportPair(0, 0797, 0872));  //	AMFIBIEBIL
            TransportPairs.Add(new TransportPair(0, 0797, 0882));  //	PATGB XA-180
            TransportPairs.Add(new TransportPair(0, 0797, 0627));  //	HKP 3C
            TransportPairs.Add(new TransportPair(0, 0133, 0493));  //FALLSKAERMSAEGARE 	TGB 13
            TransportPairs.Add(new TransportPair(0, 0133, 0872));  //	AMFIBIEBIL
            TransportPairs.Add(new TransportPair(0, 0133, 0882));  //	PATGB XA-180
            TransportPairs.Add(new TransportPair(0, 0133, 0627));  //	HKP 3C
            TransportPairs.Add(new TransportPair(0, 0133, 0612));  //	HKP 4C
            TransportPairs.Add(new TransportPair(0, 0155, 0494));  //HEMVAERNSMAEN	TGB m/42
            TransportPairs.Add(new TransportPair(0, 0210, 0872));  //KUSTJAEGARE	AMFIBIEBIL
            TransportPairs.Add(new TransportPair(0, 0210, 0627));  //	HKP 3C
            TransportPairs.Add(new TransportPair(0, 0210, 0612));  //	HKP 4C
            TransportPairs.Add(new TransportPair(0, 0876, 0872));  //KUSTJAEGARE 90	AMFIBIEBIL
            TransportPairs.Add(new TransportPair(0, 0876, 0627));  //	HKP 3C
            TransportPairs.Add(new TransportPair(0, 0876, 0612));  //	HKP 4C
            TransportPairs.Add(new TransportPair(0, 0427, 0494));  //Lvgrp RBS 70	TGB m/42
            TransportPairs.Add(new TransportPair(0, 0427, 0872));  //	AMFIBIEBIL
            TransportPairs.Add(new TransportPair(0, 0427, 0408));  //	PBV 302A
            TransportPairs.Add(new TransportPair(0, 0427, 0483));  //	STRF 9040
            TransportPairs.Add(new TransportPair(0, 0427, 0627));  //	HKP 3C
            TransportPairs.Add(new TransportPair(0, 0831, 0494));  //Lvgrp RBS 90	TGB m/42
            TransportPairs.Add(new TransportPair(0, 0831, 0872));  //	AMFIBIEBIL
            TransportPairs.Add(new TransportPair(0, 0831, 0882));  //	PATGB XA-180
            TransportPairs.Add(new TransportPair(0, 0831, 0483));  //	STRF 9040
            TransportPairs.Add(new TransportPair(0, 0831, 0627));  //	HKP 3C
            TransportPairs.Add(new TransportPair(0, 0878, 0494));  //NORRLANDSJAEGARE	TGB m/42
            TransportPairs.Add(new TransportPair(0, 0878, 0872));  //	AMFIBIEBIL
            TransportPairs.Add(new TransportPair(0, 0878, 0882));  //	PATGB XA-180
            TransportPairs.Add(new TransportPair(0, 0878, 0627));  //	HKP 3C
            TransportPairs.Add(new TransportPair(0, 0878, 0612));  //	HKP 4C
            TransportPairs.Add(new TransportPair(0, 0412, 0494));  //Pansarskytte	TGB m/42
            TransportPairs.Add(new TransportPair(0, 0412, 0872));  //	AMFIBIEBIL
            TransportPairs.Add(new TransportPair(0, 0412, 0408));  //	PBV 302A
            TransportPairs.Add(new TransportPair(0, 0412, 0483));  //	STRF 9040
            TransportPairs.Add(new TransportPair(0, 0412, 0627));  //	HKP 3C
            TransportPairs.Add(new TransportPair(0, 0881, 0494));  //Pansarskytte 90	TGB m/42
            TransportPairs.Add(new TransportPair(0, 0881, 0872));  //	AMFIBIEBIL
            TransportPairs.Add(new TransportPair(0, 0881, 0882));  //	PATGB XA-180
            TransportPairs.Add(new TransportPair(0, 0881, 0408));  //	PBV 302A
            TransportPairs.Add(new TransportPair(0, 0881, 0483));  //	STRF 9040
            TransportPairs.Add(new TransportPair(0, 0881, 0627));  //	HKP 3C
            TransportPairs.Add(new TransportPair(0, 0425, 0494));  //Pvgrp RBS 56	TGB m/42
            TransportPairs.Add(new TransportPair(0, 0425, 0872));  //	AMFIBIEBIL
            TransportPairs.Add(new TransportPair(0, 0425, 0882));  //	PATGB XA-180
            TransportPairs.Add(new TransportPair(0, 0425, 0408));  //	PBV 302A
            TransportPairs.Add(new TransportPair(0, 0425, 0483));  //	STRF 9040
            TransportPairs.Add(new TransportPair(0, 0425, 0627));  //	HKP 3C
            TransportPairs.Add(new TransportPair(0, 0887, 0494));  //Stormpionjaerer	TGB m/42
            TransportPairs.Add(new TransportPair(0, 0887, 0872));  //	AMFIBIEBIL
            TransportPairs.Add(new TransportPair(0, 0887, 0882));  //	PATGB XA-180
            TransportPairs.Add(new TransportPair(0, 0887, 0408));  //	PBV 302A
            TransportPairs.Add(new TransportPair(0, 0887, 0483));  //	STRF 9040
            TransportPairs.Add(new TransportPair(0, 0796, 0372));  //Kommandoplass	M621
            TransportPairs.Add(new TransportPair(0, 0796, 0473));  //	XA-180
            TransportPairs.Add(new TransportPair(0, 0796, 0920));  //	XA-186NO
            TransportPairs.Add(new TransportPair(0, 0796, 0673));  //	UH-1B
            TransportPairs.Add(new TransportPair(0, 0796, 0935));  //	BELL 412
            TransportPairs.Add(new TransportPair(0, 0907, 0473));  //FALLSKJERMJEGER	XA-180
            TransportPairs.Add(new TransportPair(0, 0907, 0920));  //	XA-186NO
            TransportPairs.Add(new TransportPair(0, 0907, 0673));  //	UH-1B
            TransportPairs.Add(new TransportPair(0, 0907, 0935));  //	BELL 412
            TransportPairs.Add(new TransportPair(0, 0907, 0854));  //	BELL 204
            TransportPairs.Add(new TransportPair(0, 0826, 0473));  //FALLSKJERMSJEGER 90	XA-180
            TransportPairs.Add(new TransportPair(0, 0826, 0920));  //	XA-186NO
            TransportPairs.Add(new TransportPair(0, 0826, 0673));  //	UH-1B
            TransportPairs.Add(new TransportPair(0, 0826, 0935));  //	BELL 412
            TransportPairs.Add(new TransportPair(0, 0826, 0854));  //	BELL 204
            TransportPairs.Add(new TransportPair(0, 0906, 0473));  //FSK	XA-180
            TransportPairs.Add(new TransportPair(0, 0906, 0920));  //	XA-186NO
            TransportPairs.Add(new TransportPair(0, 0906, 0673));  //	UH-1B
            TransportPairs.Add(new TransportPair(0, 0906, 0935));  //	BELL 412
            TransportPairs.Add(new TransportPair(0, 0906, 0854));  //	BELL 204
            TransportPairs.Add(new TransportPair(0, 0149, 0473));  //GEVAERMENN	XA-180
            TransportPairs.Add(new TransportPair(0, 0149, 0920));  //	XA-186NO
            TransportPairs.Add(new TransportPair(0, 0149, 0560));  //	NM113
            TransportPairs.Add(new TransportPair(0, 0149, 0403));  //	NM135
            TransportPairs.Add(new TransportPair(0, 0149, 0673));  //	UH-1B
            TransportPairs.Add(new TransportPair(0, 0149, 0935));  //	BELL 412
            TransportPairs.Add(new TransportPair(0, 0908, 0473));  //GEVAERMENN 90	XA-180
            TransportPairs.Add(new TransportPair(0, 0908, 0920));  //	XA-186NO
            TransportPairs.Add(new TransportPair(0, 0908, 0560));  //	NM113
            TransportPairs.Add(new TransportPair(0, 0908, 0403));  //	NM135
            TransportPairs.Add(new TransportPair(0, 0908, 0905));  //	CV9030N
            TransportPairs.Add(new TransportPair(0, 0908, 0673));  //	UH-1B
            TransportPairs.Add(new TransportPair(0, 0908, 0935));  //	BELL 412
            TransportPairs.Add(new TransportPair(0, 0154, 0560));  //LHV	NM113
            TransportPairs.Add(new TransportPair(0, 0401, 0372));  //MARINEJEGER	M621
            TransportPairs.Add(new TransportPair(0, 0401, 0473));  //	XA-180
            TransportPairs.Add(new TransportPair(0, 0401, 0920));  //	XA-186NO
            TransportPairs.Add(new TransportPair(0, 0401, 0673));  //	UH-1B
            TransportPairs.Add(new TransportPair(0, 0401, 0935));  //	BELL 412
            TransportPairs.Add(new TransportPair(0, 0401, 0854));  //	BELL 204
            TransportPairs.Add(new TransportPair(0, 0830, 0372));  //OPPKLARING	M621
            TransportPairs.Add(new TransportPair(0, 0830, 0560));  //	NM113
            TransportPairs.Add(new TransportPair(0, 0830, 0473));  //	XA-180
            TransportPairs.Add(new TransportPair(0, 0830, 0920));  //	XA-186NO
            TransportPairs.Add(new TransportPair(0, 0830, 0673));  //	UH-1B
            TransportPairs.Add(new TransportPair(0, 0830, 0935));  //	BELL 412
            TransportPairs.Add(new TransportPair(0, 0830, 0854));  //	BELL 204
            TransportPairs.Add(new TransportPair(0, 0426, 0473));  //RBS 70	XA-180
            TransportPairs.Add(new TransportPair(0, 0426, 0920));  //	XA-186NO
            TransportPairs.Add(new TransportPair(0, 0426, 0560));  //	NM113
            TransportPairs.Add(new TransportPair(0, 0426, 0673));  //	UH-1B
            TransportPairs.Add(new TransportPair(0, 0426, 0935));  //	BELL 412
            TransportPairs.Add(new TransportPair(0, 0916, 0473));  //RBS 70 Mk.2	XA-180
            TransportPairs.Add(new TransportPair(0, 0916, 0920));  //	XA-186NO
            TransportPairs.Add(new TransportPair(0, 0916, 0560));  //	NM113
            TransportPairs.Add(new TransportPair(0, 0916, 0673));  //	UH-1B
            TransportPairs.Add(new TransportPair(0, 0916, 0935));  //	BELL 412
            TransportPairs.Add(new TransportPair(0, 0481, 0473));  //STORMER	XA-180
            TransportPairs.Add(new TransportPair(0, 0481, 0920));  //	XA-186NO
            TransportPairs.Add(new TransportPair(0, 0481, 0560));  //	NM113
            TransportPairs.Add(new TransportPair(0, 0481, 0403));  //	NM135
            TransportPairs.Add(new TransportPair(0, 0481, 0905));  //	CV9030N
            TransportPairs.Add(new TransportPair(0, 0481, 0673));  //	UH-1B
            TransportPairs.Add(new TransportPair(0, 0481, 0935));  //	BELL 412
            TransportPairs.Add(new TransportPair(0, 0918, 0473));  //STORMINGENIOR	XA-180
            TransportPairs.Add(new TransportPair(0, 0918, 0920));  //	XA-186NO
            TransportPairs.Add(new TransportPair(0, 0918, 0560));  //	NM113
            TransportPairs.Add(new TransportPair(0, 0918, 0403));  //	NM135
            TransportPairs.Add(new TransportPair(0, 0918, 0673));  //	UH-1B
            TransportPairs.Add(new TransportPair(0, 0918, 0935));  //	BELL 412
            TransportPairs.Add(new TransportPair(0, 0917, 0473));  //STORMINGENIOR 90	XA-180
            TransportPairs.Add(new TransportPair(0, 0917, 0920));  //	XA-186NO
            TransportPairs.Add(new TransportPair(0, 0917, 0560));  //	NM113
            TransportPairs.Add(new TransportPair(0, 0917, 0403));  //	NM135
            TransportPairs.Add(new TransportPair(0, 0917, 0905));  //	CV9030N
            TransportPairs.Add(new TransportPair(0, 0917, 0673));  //	UH-1B
            TransportPairs.Add(new TransportPair(0, 0917, 0935));  //	BELL 412
            TransportPairs.Add(new TransportPair(0, 0022, 0522));  //TAC HQ	UNIMOG
            TransportPairs.Add(new TransportPair(0, 0022, 0037));  //	ASLAV-PC
            TransportPairs.Add(new TransportPair(0, 0022, 0675));  //	UH-1H HUEY
            TransportPairs.Add(new TransportPair(0, 0022, 0655));  //	S-70
            TransportPairs.Add(new TransportPair(0, 0028, 0048));  //ASSAULT PINOEERS	STOLLY
            TransportPairs.Add(new TransportPair(0, 0028, 0279));  //	M113A1 30/30
            TransportPairs.Add(new TransportPair(0, 0028, 0280));  //	M113A1 30/50
            TransportPairs.Add(new TransportPair(0, 0028, 0287));  //	M113A1 MINIGUN
            TransportPairs.Add(new TransportPair(0, 0028, 0037));  //	ASLAV-PC
            TransportPairs.Add(new TransportPair(0, 0028, 0675));  //	UH-1H HUEY
            TransportPairs.Add(new TransportPair(0, 0028, 0655));  //	S-70
            TransportPairs.Add(new TransportPair(0, 0023, 0048));  //COMMANDOS	STOLLY
            TransportPairs.Add(new TransportPair(0, 0023, 0279));  //	M113A1 30/30
            TransportPairs.Add(new TransportPair(0, 0023, 0280));  //	M113A1 30/50
            TransportPairs.Add(new TransportPair(0, 0023, 0675));  //	UH-1H HUEY
            TransportPairs.Add(new TransportPair(0, 0023, 0655));  //	S-70
            TransportPairs.Add(new TransportPair(0, 0798, 0048));  //COMMANDOS 90	STOLLY
            TransportPairs.Add(new TransportPair(0, 0798, 0279));  //	M113A1 30/30
            TransportPairs.Add(new TransportPair(0, 0798, 0280));  //	M113A1 30/50
            TransportPairs.Add(new TransportPair(0, 0798, 0037));  //	ASLAV-PC
            TransportPairs.Add(new TransportPair(0, 0798, 0675));  //	UH-1H HUEY
            TransportPairs.Add(new TransportPair(0, 0798, 0655));  //	S-70
            TransportPairs.Add(new TransportPair(0, 0024, 0048));  //DIGGERS	STOLLY
            TransportPairs.Add(new TransportPair(0, 0024, 0279));  //	M113A1 30/30
            TransportPairs.Add(new TransportPair(0, 0024, 0280));  //	M113A1 30/50
            TransportPairs.Add(new TransportPair(0, 0799, 0048));  //DIGGERS 90	STOLLY
            TransportPairs.Add(new TransportPair(0, 0799, 0279));  //	M113A1 30/30
            TransportPairs.Add(new TransportPair(0, 0799, 0280));  //	M113A1 30/50
            TransportPairs.Add(new TransportPair(0, 0799, 0037));  //	ASLAV-PC
            TransportPairs.Add(new TransportPair(0, 0025, 0048));  //MILAN	STOLLY
            TransportPairs.Add(new TransportPair(0, 0025, 0279));  //	M113A1 30/30
            TransportPairs.Add(new TransportPair(0, 0025, 0280));  //	M113A1 30/50
            TransportPairs.Add(new TransportPair(0, 0025, 0037));  //	ASLAV-PC
            TransportPairs.Add(new TransportPair(0, 0025, 0675));  //	UH-1H HUEY
            TransportPairs.Add(new TransportPair(0, 0025, 0655));  //	S-70
            TransportPairs.Add(new TransportPair(0, 0026, 0048));  //MRAAW	STOLLY
            TransportPairs.Add(new TransportPair(0, 0026, 0279));  //	M113A1 30/30
            TransportPairs.Add(new TransportPair(0, 0026, 0280));  //	M113A1 30/50
            TransportPairs.Add(new TransportPair(0, 0026, 0675));  //	UH-1H HUEY
            TransportPairs.Add(new TransportPair(0, 0026, 0655));  //	S-70
            TransportPairs.Add(new TransportPair(0, 0031, 0048));  //NORFORCE	STOLLY
            TransportPairs.Add(new TransportPair(0, 0031, 0279));  //	M113A1 30/30
            TransportPairs.Add(new TransportPair(0, 0031, 0280));  //	M113A1 30/50
            TransportPairs.Add(new TransportPair(0, 0031, 0037));  //	ASLAV-PC
            TransportPairs.Add(new TransportPair(0, 0031, 0675));  //	UH-1H HUEY
            TransportPairs.Add(new TransportPair(0, 0031, 0655));  //	S-70
            TransportPairs.Add(new TransportPair(0, 0027, 0522));  //NZSAS	UNIMOG
            TransportPairs.Add(new TransportPair(0, 0027, 0048));  //	STOLLY
            TransportPairs.Add(new TransportPair(0, 0027, 0037));  //	ASLAV-PC
            TransportPairs.Add(new TransportPair(0, 0027, 0614));  //	CH-47C Chinook
            TransportPairs.Add(new TransportPair(0, 0029, 0048));  //RBS 70	STOLLY
            TransportPairs.Add(new TransportPair(0, 0029, 0279));  //	M113A1 30/30
            TransportPairs.Add(new TransportPair(0, 0029, 0280));  //	M113A1 30/50
            TransportPairs.Add(new TransportPair(0, 0029, 0675));  //	UH-1H HUEY
            TransportPairs.Add(new TransportPair(0, 0029, 0655));  //	S-70
            TransportPairs.Add(new TransportPair(0, 0030, 0048));  //REDEYE	STOLLY
            TransportPairs.Add(new TransportPair(0, 0030, 0279));  //	M113A1 30/30
            TransportPairs.Add(new TransportPair(0, 0030, 0280));  //	M113A1 30/50
            TransportPairs.Add(new TransportPair(0, 0030, 0675));  //	UH-1H HUEY
            TransportPairs.Add(new TransportPair(0, 0030, 0655));  //	S-70
            TransportPairs.Add(new TransportPair(0, 0807, 0048));  //SASR	STOLLY
            TransportPairs.Add(new TransportPair(0, 0807, 0037));  //	ASLAV-PC
            TransportPairs.Add(new TransportPair(0, 0807, 0614));  //	CH-47C Chinook
            TransportPairs.Add(new TransportPair(0, 0164, 0501));  //Honbu-Han	Chugata
            TransportPairs.Add(new TransportPair(0, 0164, 0163));  //	HMV
            TransportPairs.Add(new TransportPair(0, 0164, 0626));  //	UH-1H
            TransportPairs.Add(new TransportPair(0, 0165, 0163));  //CHU-MAT	HMV
            TransportPairs.Add(new TransportPair(0, 0165, 0504));  //	NANA-SAN SHIKI
            TransportPairs.Add(new TransportPair(0, 0165, 0626));  //	UH-1H
            TransportPairs.Add(new TransportPair(0, 0167, 0163));  //HUDOU-REN	HMV
            TransportPairs.Add(new TransportPair(0, 0167, 0868));  //	KYU-ROKU WAPC
            TransportPairs.Add(new TransportPair(0, 0167, 0626));  //	UH-1H
            TransportPairs.Add(new TransportPair(0, 0167, 0630));  //	KV-107 Shirasagi
            TransportPairs.Add(new TransportPair(0, 0170, 0501));  //JSDF RANGERS	Chugata
            TransportPairs.Add(new TransportPair(0, 0170, 0163));  //	HMV
            TransportPairs.Add(new TransportPair(0, 0170, 0868));  //	KYU-ROKU WAPC
            TransportPairs.Add(new TransportPair(0, 0170, 0626));  //	UH-1H
            TransportPairs.Add(new TransportPair(0, 0170, 0630));  //	KV-107 Shirasagi
            TransportPairs.Add(new TransportPair(0, 0169, 0626));  //KUTEI	UH-1H
            TransportPairs.Add(new TransportPair(0, 0169, 0630));  //	KV-107 Shirasagi
            TransportPairs.Add(new TransportPair(0, 0821, 0163));  //KUTEI 90	HMV
            TransportPairs.Add(new TransportPair(0, 0821, 0868));  //	KYU-ROKU WAPC
            TransportPairs.Add(new TransportPair(0, 0821, 0626));  //	UH-1H
            TransportPairs.Add(new TransportPair(0, 0821, 0630));  //	KV-107 Shirasagi
            TransportPairs.Add(new TransportPair(0, 0168, 0163));  //M67-HAN	HMV
            TransportPairs.Add(new TransportPair(0, 0168, 0868));  //	KYU-ROKU WAPC
            TransportPairs.Add(new TransportPair(0, 0168, 0504));  //	NANA-SAN SHIKI
            TransportPairs.Add(new TransportPair(0, 0168, 0515));  //	HACHI-KYU SHIKI
            TransportPairs.Add(new TransportPair(0, 0168, 0626));  //	UH-1H
            TransportPairs.Add(new TransportPair(0, 0173, 0163));  //PSAM	HMV
            TransportPairs.Add(new TransportPair(0, 0173, 0504));  //	NANA-SAN SHIKI
            TransportPairs.Add(new TransportPair(0, 0173, 0626));  //	UH-1H
            TransportPairs.Add(new TransportPair(0, 0172, 0163));  //STINGER	HMV
            TransportPairs.Add(new TransportPair(0, 0172, 0504));  //	NANA-SAN SHIKI
            TransportPairs.Add(new TransportPair(0, 0172, 0626));  //	UH-1H
            TransportPairs.Add(new TransportPair(0, 0171, 0163));  //Syouju-Buntai	HMV
            TransportPairs.Add(new TransportPair(0, 0171, 0504));  //	NANA-SAN SHIKI
            TransportPairs.Add(new TransportPair(0, 0823, 0163));  //Syouju-Buntai 90	HMV
            TransportPairs.Add(new TransportPair(0, 0823, 0868));  //	KYU-ROKU WAPC
            TransportPairs.Add(new TransportPair(0, 0823, 0504));  //	NANA-SAN SHIKI
            TransportPairs.Add(new TransportPair(0, 0823, 0515));  //	HACHI-KYU SHIKI
            TransportPairs.Add(new TransportPair(0, 0436, 0203));  //BONBU	K-511
            TransportPairs.Add(new TransportPair(0, 0436, 0205));  //	KM900
            TransportPairs.Add(new TransportPair(0, 0436, 0676));  //	UH-1H
            TransportPairs.Add(new TransportPair(0, 0446, 0198));  //GONGBYUNG	KM113A1
            TransportPairs.Add(new TransportPair(0, 0446, 0185));  //	K200
            TransportPairs.Add(new TransportPair(0, 0446, 0205));  //	KM900
            TransportPairs.Add(new TransportPair(0, 0446, 0676));  //	UH-1H
            TransportPairs.Add(new TransportPair(0, 0442, 0205));  //HAEBYUNG	KM900
            TransportPairs.Add(new TransportPair(0, 0442, 0231));  //	LVTP-7
            TransportPairs.Add(new TransportPair(0, 0442, 0676));  //	UH-1H
            TransportPairs.Add(new TransportPair(0, 0820, 0205));  //HAEBYUNG 90	KM900
            TransportPairs.Add(new TransportPair(0, 0820, 0231));  //	LVTP-7
            TransportPairs.Add(new TransportPair(0, 0820, 0676));  //	UH-1H
            TransportPairs.Add(new TransportPair(0, 0443, 0198));  //HYU-SAM MISTRAL	KM113A1
            TransportPairs.Add(new TransportPair(0, 0443, 0185));  //	K200
            TransportPairs.Add(new TransportPair(0, 0443, 0205));  //	KM900
            TransportPairs.Add(new TransportPair(0, 0443, 0676));  //	UH-1H
            TransportPairs.Add(new TransportPair(0, 0444, 0198));  //HYU-SAM REDEYE	KM113A1
            TransportPairs.Add(new TransportPair(0, 0444, 0185));  //	K200
            TransportPairs.Add(new TransportPair(0, 0444, 0205));  //	KM900
            TransportPairs.Add(new TransportPair(0, 0444, 0676));  //	UH-1H
            TransportPairs.Add(new TransportPair(0, 0448, 0198));  //HYU-SAM STINGER	KM113A1
            TransportPairs.Add(new TransportPair(0, 0448, 0185));  //	K200
            TransportPairs.Add(new TransportPair(0, 0448, 0205));  //	KM900
            TransportPairs.Add(new TransportPair(0, 0448, 0676));  //	UH-1H
            TransportPairs.Add(new TransportPair(0, 0441, 0198));  //JIKSA-HWAGI-BAN	KM113A1
            TransportPairs.Add(new TransportPair(0, 0441, 0185));  //	K200
            TransportPairs.Add(new TransportPair(0, 0441, 0205));  //	KM900
            TransportPairs.Add(new TransportPair(0, 0441, 0676));  //	UH-1H
            TransportPairs.Add(new TransportPair(0, 0445, 0198));  //SOCHONG-SU	KM113A1
            TransportPairs.Add(new TransportPair(0, 0445, 0185));  //	K200
            TransportPairs.Add(new TransportPair(0, 0445, 0205));  //	KM900
            TransportPairs.Add(new TransportPair(0, 0445, 0676));  //	UH-1H
            TransportPairs.Add(new TransportPair(0, 0819, 0198));  //SOCHONG-SU 85	KM113A1
            TransportPairs.Add(new TransportPair(0, 0819, 0185));  //	K200
            TransportPairs.Add(new TransportPair(0, 0819, 0205));  //	KM900
            TransportPairs.Add(new TransportPair(0, 0819, 0438));  //	KAFV 25
            TransportPairs.Add(new TransportPair(0, 0819, 0439));  //	KAFV 40/50
            TransportPairs.Add(new TransportPair(0, 0819, 0676));  //	UH-1H
            TransportPairs.Add(new TransportPair(0, 0447, 0203));  //SUSAEK-DAE	K-511
            TransportPairs.Add(new TransportPair(0, 0447, 0198));  //	KM113A1
            TransportPairs.Add(new TransportPair(0, 0447, 0185));  //	K200
            TransportPairs.Add(new TransportPair(0, 0447, 0205));  //	KM900
            TransportPairs.Add(new TransportPair(0, 0447, 0670));  //	BELL 205
            TransportPairs.Add(new TransportPair(0, 0447, 0682));  //	UH-60P
            TransportPairs.Add(new TransportPair(0, 0447, 0676));  //	UH-1H
            TransportPairs.Add(new TransportPair(0, 0435, 0203));  //Teukjeonsa	K-511
            TransportPairs.Add(new TransportPair(0, 0435, 0205));  //	KM900
            TransportPairs.Add(new TransportPair(0, 0435, 0670));  //	BELL 205
            TransportPairs.Add(new TransportPair(0, 0435, 0682));  //	UH-60P
            TransportPairs.Add(new TransportPair(0, 0435, 0676));  //	UH-1H
            TransportPairs.Add(new TransportPair(0, 0449, 0205));  //UDT/SEAL	KM900
            TransportPairs.Add(new TransportPair(0, 0449, 0231));  //	LVTP-7
            TransportPairs.Add(new TransportPair(0, 0449, 0670));  //	BELL 205
            TransportPairs.Add(new TransportPair(0, 0449, 0682));  //	UH-60P
            TransportPairs.Add(new TransportPair(0, 0449, 0676));  //	UH-1H
            TransportPairs.Add(new TransportPair(0, 0437, 0198));  //YEBIGUN	KM113A1
            TransportPairs.Add(new TransportPair(0, 0437, 0185));  //	K200
            TransportPairs.Add(new TransportPair(0, 0980, 0946));  //Staf Eenheid	DAF YA 4440
            TransportPairs.Add(new TransportPair(0, 0980, 0990));  //	YP-408 PWI
            TransportPairs.Add(new TransportPair(0, 0980, 0940));  //	AMX-PRI
            TransportPairs.Add(new TransportPair(0, 0980, 0994));  //	YP-765-50
            TransportPairs.Add(new TransportPair(0, 0980, 0993));  //	YP-765-25
            TransportPairs.Add(new TransportPair(0, 0980, 1005));  //	UH-14
            TransportPairs.Add(new TransportPair(0, 0947, 0966));  //GENIE	M113A1
            TransportPairs.Add(new TransportPair(0, 0947, 0990));  //	YP-408 PWI
            TransportPairs.Add(new TransportPair(0, 0947, 0998));  //	AB-204B
            TransportPairs.Add(new TransportPair(0, 0948, 0990));  //GRENADIERS	YP-408 PWI
            TransportPairs.Add(new TransportPair(0, 0948, 0940));  //	AMX-PRI
            TransportPairs.Add(new TransportPair(0, 0948, 0994));  //	YP-765-50
            TransportPairs.Add(new TransportPair(0, 0948, 0993));  //	YP-765-25
            TransportPairs.Add(new TransportPair(0, 0948, 0998));  //	AB-204B
            TransportPairs.Add(new TransportPair(0, 0949, 0946));  //HUZAREN	DAF YA 4440
            TransportPairs.Add(new TransportPair(0, 0949, 0990));  //	YP-408 PWI
            TransportPairs.Add(new TransportPair(0, 0949, 0966));  //	M113A1
            TransportPairs.Add(new TransportPair(0, 0949, 1005));  //	UH-14
            TransportPairs.Add(new TransportPair(0, 0950, 0946));  //KCT	DAF YA 4440
            TransportPairs.Add(new TransportPair(0, 0950, 0990));  //	YP-408 PWI
            TransportPairs.Add(new TransportPair(0, 0950, 1005));  //	UH-14
            TransportPairs.Add(new TransportPair(0, 0952, 0990));  //KORPS MARINIER	YP-408 PWI
            TransportPairs.Add(new TransportPair(0, 0952, 0953));  //	LVT-4
            TransportPairs.Add(new TransportPair(0, 0952, 1005));  //	UH-14
            TransportPairs.Add(new TransportPair(0, 0951, 0990));  //KORPS MARINIER 95	YP-408 PWI
            TransportPairs.Add(new TransportPair(0, 0951, 0953));  //	LVT-4
            TransportPairs.Add(new TransportPair(0, 0951, 1005));  //	UH-14
            TransportPairs.Add(new TransportPair(0, 0973, 0946));  //NATRES	DAF YA 4440
            TransportPairs.Add(new TransportPair(0, 0973, 0940));  //	AMX-PRI
            TransportPairs.Add(new TransportPair(0, 0981, 0990));  //STINGER	YP-408 PWI
            TransportPairs.Add(new TransportPair(0, 0981, 0940));  //	AMX-PRI
            TransportPairs.Add(new TransportPair(0, 0981, 0998));  //	AB-204B
            TransportPairs.Add(new TransportPair(0, 0983, 0990));  //STOOTTROEPEN	YP-408 PWI
            TransportPairs.Add(new TransportPair(0, 0983, 0940));  //	AMX-PRI
            TransportPairs.Add(new TransportPair(0, 0983, 0994));  //	YP-765-50
            TransportPairs.Add(new TransportPair(0, 0983, 0993));  //	YP-765-25
            TransportPairs.Add(new TransportPair(0, 0983, 0998));  //	AB-204B
            TransportPairs.Add(new TransportPair(0, 0982, 0990));  //STOOTTROEPEN 95	YP-408 PWI
            TransportPairs.Add(new TransportPair(0, 0982, 0940));  //	AMX-PRI
            TransportPairs.Add(new TransportPair(0, 0982, 0994));  //	YP-765-50
            TransportPairs.Add(new TransportPair(0, 0982, 0993));  //	YP-765-25
            TransportPairs.Add(new TransportPair(0, 0982, 0998));  //	AB-204B
            TransportPairs.Add(new TransportPair(0, 0985, 0990));  //VUURPLOEG	YP-408 PWI
            TransportPairs.Add(new TransportPair(0, 0985, 0940));  //	AMX-PRI
            TransportPairs.Add(new TransportPair(0, 0985, 0998));  //	AB-204B
            TransportPairs.Add(new TransportPair(0, 0984, 0990));  //VUURPLOEG 95	YP-408 PWI
            TransportPairs.Add(new TransportPair(0, 0984, 0940));  //	AMX-PRI
            TransportPairs.Add(new TransportPair(0, 0984, 0998));  //	AB-204B
			TransportPairs.Add(new TransportPair(1, 0619, 0332 )); //#command VELITELSKÇ ÿTÇB	TATRA 148
            TransportPairs.Add(new TransportPair(1, 0619, 0424 )); //	OT-64A
            TransportPairs.Add(new TransportPair(1, 0619, 0425 )); //	OT-64C
            TransportPairs.Add(new TransportPair(1, 0619, 0644 )); //	Mi-4T
            TransportPairs.Add(new TransportPair(1, 0619, 0529 )); //	Mi-8T
            TransportPairs.Add(new TransportPair(1, 0619, 0706 )); //	Mi-17
            TransportPairs.Add(new TransportPair(1, 0662, 0424 )); //GRANATOMET AGS-17	OT-64A
            TransportPairs.Add(new TransportPair(1, 0662, 0425 )); //	OT-64C
            TransportPairs.Add(new TransportPair(1, 0662, 0421 )); //	OT-62A
            TransportPairs.Add(new TransportPair(1, 0662, 0422 )); //	OT-62B
            TransportPairs.Add(new TransportPair(1, 0662, 0202 )); //	OT-62 VYDRA-I
            TransportPairs.Add(new TransportPair(1, 0662, 0203 )); //	OT-62 VYDRA-II
            TransportPairs.Add(new TransportPair(1, 0662, 0644 )); //	Mi-4T
            TransportPairs.Add(new TransportPair(1, 0662, 0529 )); //	Mi-8T
            TransportPairs.Add(new TransportPair(1, 0662, 0706 )); //	Mi-17
            TransportPairs.Add(new TransportPair(1, 0668, 0424 )); //LEHKA PECHOTA	OT-64A
            TransportPairs.Add(new TransportPair(1, 0668, 0425 )); //	OT-64C
            TransportPairs.Add(new TransportPair(1, 0668, 0644 )); //	Mi-4T
            TransportPairs.Add(new TransportPair(1, 0668, 0529 )); //	Mi-8T
            TransportPairs.Add(new TransportPair(1, 0668, 0706 )); //	Mi-17
            TransportPairs.Add(new TransportPair(1, 0668, 0496 )); //	Mi-25
            TransportPairs.Add(new TransportPair(1, 0180, 0424 )); //MOTOST?ELCI	OT-64A
            TransportPairs.Add(new TransportPair(1, 0180, 0425 )); //	OT-64C
            TransportPairs.Add(new TransportPair(1, 0180, 0421 )); //	OT-62A
            TransportPairs.Add(new TransportPair(1, 0180, 0422 )); //	OT-62B
            TransportPairs.Add(new TransportPair(1, 0180, 0202 )); //	OT-62 VYDRA-I
            TransportPairs.Add(new TransportPair(1, 0180, 0203 )); //	OT-62 VYDRA-II
            TransportPairs.Add(new TransportPair(1, 0180, 0098 )); //	BVP-1
            TransportPairs.Add(new TransportPair(1, 0180, 0100 )); //	BVP-1P
            TransportPairs.Add(new TransportPair(1, 0180, 0101 )); //	BVP-2
            TransportPairs.Add(new TransportPair(1, 0180, 0658 )); //	BVP-2 VZ.86
            TransportPairs.Add(new TransportPair(1, 0226, 0424 )); //PANCÇ??OVNÇCI	OT-64A
            TransportPairs.Add(new TransportPair(1, 0226, 0425 )); //	OT-64C
            TransportPairs.Add(new TransportPair(1, 0226, 0421 )); //	OT-62A
            TransportPairs.Add(new TransportPair(1, 0226, 0422 )); //	OT-62B
            TransportPairs.Add(new TransportPair(1, 0226, 0202 )); //	OT-62 VYDRA-I
            TransportPairs.Add(new TransportPair(1, 0226, 0203 )); //	OT-62 VYDRA-II
            TransportPairs.Add(new TransportPair(1, 0226, 0098 )); //	BVP-1
            TransportPairs.Add(new TransportPair(1, 0226, 0100 )); //	BVP-1P
            TransportPairs.Add(new TransportPair(1, 0226, 0101 )); //	BVP-2
            TransportPairs.Add(new TransportPair(1, 0226, 0658 )); //	BVP-2 VZ.86
            TransportPairs.Add(new TransportPair(1, 0226, 0644 )); //	Mi-4T
            TransportPairs.Add(new TransportPair(1, 0226, 0529 )); //	Mi-8T
            TransportPairs.Add(new TransportPair(1, 0226, 0706 )); //	Mi-17
            TransportPairs.Add(new TransportPair(1, 0273, 0424 )); //PLRK STRELA-2	OT-64A
            TransportPairs.Add(new TransportPair(1, 0273, 0425 )); //	OT-64C
            TransportPairs.Add(new TransportPair(1, 0273, 0421 )); //	OT-62A
            TransportPairs.Add(new TransportPair(1, 0273, 0422 )); //	OT-62B
            TransportPairs.Add(new TransportPair(1, 0273, 0202 )); //	OT-62 VYDRA-I
            TransportPairs.Add(new TransportPair(1, 0273, 0203 )); //	OT-62 VYDRA-II
            TransportPairs.Add(new TransportPair(1, 0273, 0644 )); //	Mi-4T
            TransportPairs.Add(new TransportPair(1, 0273, 0529 )); //	Mi-8T
            TransportPairs.Add(new TransportPair(1, 0273, 0706 )); //	Mi-17
            TransportPairs.Add(new TransportPair(1, 0636, 0424 )); //PLRK STRELA-3	OT-64A
            TransportPairs.Add(new TransportPair(1, 0636, 0425 )); //	OT-64C
            TransportPairs.Add(new TransportPair(1, 0636, 0421 )); //	OT-62A
            TransportPairs.Add(new TransportPair(1, 0636, 0422 )); //	OT-62B
            TransportPairs.Add(new TransportPair(1, 0636, 0202 )); //	OT-62 VYDRA-I
            TransportPairs.Add(new TransportPair(1, 0636, 0203 )); //	OT-62 VYDRA-II
            TransportPairs.Add(new TransportPair(1, 0636, 0644 )); //	Mi-4T
            TransportPairs.Add(new TransportPair(1, 0636, 0529 )); //	Mi-8T
            TransportPairs.Add(new TransportPair(1, 0636, 0706 )); //	Mi-17
            TransportPairs.Add(new TransportPair(1, 0262, 0332 )); //PR©ZKUMNÇCI #reco2	TATRA 148
            TransportPairs.Add(new TransportPair(1, 0262, 0424 )); //	OT-64A
            TransportPairs.Add(new TransportPair(1, 0262, 0425 )); //	OT-64C
            TransportPairs.Add(new TransportPair(1, 0262, 0644 )); //	Mi-4T
            TransportPairs.Add(new TransportPair(1, 0262, 0529 )); //	Mi-8T
            TransportPairs.Add(new TransportPair(1, 0262, 0706 )); //	Mi-17
            TransportPairs.Add(new TransportPair(1, 0262, 0496 )); //	Mi-25
            TransportPairs.Add(new TransportPair(1, 0134, 0424 )); //PT?S FAGOT	OT-64A
            TransportPairs.Add(new TransportPair(1, 0134, 0425 )); //	OT-64C
            TransportPairs.Add(new TransportPair(1, 0134, 0421 )); //	OT-62A
            TransportPairs.Add(new TransportPair(1, 0134, 0422 )); //	OT-62B
            TransportPairs.Add(new TransportPair(1, 0134, 0202 )); //	OT-62 VYDRA-I
            TransportPairs.Add(new TransportPair(1, 0134, 0203 )); //	OT-62 VYDRA-II
            TransportPairs.Add(new TransportPair(1, 0134, 0644 )); //	Mi-4T
            TransportPairs.Add(new TransportPair(1, 0134, 0529 )); //	Mi-8T
            TransportPairs.Add(new TransportPair(1, 0134, 0706 )); //	Mi-17
            TransportPairs.Add(new TransportPair(1, 0633, 0424 )); //PT?S KONKURS	OT-64A
            TransportPairs.Add(new TransportPair(1, 0633, 0425 )); //	OT-64C
            TransportPairs.Add(new TransportPair(1, 0633, 0421 )); //	OT-62A
            TransportPairs.Add(new TransportPair(1, 0633, 0422 )); //	OT-62B
            TransportPairs.Add(new TransportPair(1, 0633, 0202 )); //	OT-62 VYDRA-I
            TransportPairs.Add(new TransportPair(1, 0633, 0203 )); //	OT-62 VYDRA-II
            TransportPairs.Add(new TransportPair(1, 0633, 0644 )); //	Mi-4T
            TransportPairs.Add(new TransportPair(1, 0633, 0529 )); //	Mi-8T
            TransportPairs.Add(new TransportPair(1, 0633, 0706 )); //	Mi-17
            TransportPairs.Add(new TransportPair(1, 0664, 0424 )); //PT?S KONKURS-M	OT-64A
            TransportPairs.Add(new TransportPair(1, 0664, 0425 )); //	OT-64C
            TransportPairs.Add(new TransportPair(1, 0664, 0421 )); //	OT-62A
            TransportPairs.Add(new TransportPair(1, 0664, 0422 )); //	OT-62B
            TransportPairs.Add(new TransportPair(1, 0664, 0202 )); //	OT-62 VYDRA-I
            TransportPairs.Add(new TransportPair(1, 0664, 0203 )); //	OT-62 VYDRA-II
            TransportPairs.Add(new TransportPair(1, 0664, 0644 )); //	Mi-4T
            TransportPairs.Add(new TransportPair(1, 0664, 0529 )); //	Mi-8T
            TransportPairs.Add(new TransportPair(1, 0664, 0706 )); //	Mi-17
            TransportPairs.Add(new TransportPair(1, 0400, 0332 )); //SPECIÇLNÇ JEDNOTKY #reco2	TATRA 148
            TransportPairs.Add(new TransportPair(1, 0400, 0424 )); //	OT-64A
            TransportPairs.Add(new TransportPair(1, 0400, 0425 )); //	OT-64C
            TransportPairs.Add(new TransportPair(1, 0400, 0644 )); //	Mi-4T
            TransportPairs.Add(new TransportPair(1, 0400, 0529 )); //	Mi-8T
            TransportPairs.Add(new TransportPair(1, 0400, 0706 )); //	Mi-17
            TransportPairs.Add(new TransportPair(1, 0400, 0496 )); //	Mi-25
            TransportPairs.Add(new TransportPair(1, 0690, 0332 )); //SPECIÇLNÇ JEDNOTKY 90 #reco2	TATRA 148
            TransportPairs.Add(new TransportPair(1, 0690, 0424 )); //	OT-64A
            TransportPairs.Add(new TransportPair(1, 0690, 0425 )); //	OT-64C
            TransportPairs.Add(new TransportPair(1, 0690, 0644 )); //	Mi-4T
            TransportPairs.Add(new TransportPair(1, 0690, 0529 )); //	Mi-8T
            TransportPairs.Add(new TransportPair(1, 0690, 0706 )); //	Mi-17
            TransportPairs.Add(new TransportPair(1, 0690, 0496 )); //	Mi-25
            TransportPairs.Add(new TransportPair(1, 0399, 0424 )); //VÇSADKÇ?I	OT-64A
            TransportPairs.Add(new TransportPair(1, 0399, 0425 )); //	OT-64C
            TransportPairs.Add(new TransportPair(1, 0399, 0644 )); //	Mi-4T
            TransportPairs.Add(new TransportPair(1, 0399, 0529 )); //	Mi-8T
            TransportPairs.Add(new TransportPair(1, 0399, 0706 )); //	Mi-17
            TransportPairs.Add(new TransportPair(1, 0702, 0424 )); //VÇSADKÇ?I 90	OT-64A
            TransportPairs.Add(new TransportPair(1, 0702, 0425 )); //	OT-64C
            TransportPairs.Add(new TransportPair(1, 0702, 0644 )); //	Mi-4T
            TransportPairs.Add(new TransportPair(1, 0702, 0529 )); //	Mi-8T
            TransportPairs.Add(new TransportPair(1, 0702, 0706 )); //	Mi-17
            TransportPairs.Add(new TransportPair(1, 0705, 0674 )); //ZALOZNICI	OT-810
            TransportPairs.Add(new TransportPair(1, 0258, 0424 )); //«ENISTÇ?	OT-64A
            TransportPairs.Add(new TransportPair(1, 0258, 0425 )); //	OT-64C
            TransportPairs.Add(new TransportPair(1, 0258, 0421 )); //	OT-62A
            TransportPairs.Add(new TransportPair(1, 0258, 0422 )); //	OT-62B
            TransportPairs.Add(new TransportPair(1, 0258, 0202 )); //	OT-62 VYDRA-I
            TransportPairs.Add(new TransportPair(1, 0258, 0203 )); //	OT-62 VYDRA-II
            TransportPairs.Add(new TransportPair(1, 0258, 0644 )); //	Mi-4T
            TransportPairs.Add(new TransportPair(1, 0258, 0529 )); //	Mi-8T
            TransportPairs.Add(new TransportPair(1, 0258, 0706 )); //	Mi-17
            TransportPairs.Add(new TransportPair(1, 0621, 0441 )); //#command FÇ?HRUNGSTRUPP	LKV URAL
            TransportPairs.Add(new TransportPair(1, 0621, 0250 )); //	SPW-60PB
            TransportPairs.Add(new TransportPair(1, 0621, 0251 )); //	SPW-70
            TransportPairs.Add(new TransportPair(1, 0621, 0685 )); //	SPW-80
            TransportPairs.Add(new TransportPair(1, 0621, 0509 )); //	THS Mi-8T
            TransportPairs.Add(new TransportPair(1, 0621, 0508 )); //	THS Mi-8TV
            TransportPairs.Add(new TransportPair(1, 0135, 0250 )); //FJB-40	SPW-60PB
            TransportPairs.Add(new TransportPair(1, 0135, 0251 )); //	SPW-70
            TransportPairs.Add(new TransportPair(1, 0135, 0685 )); //	SPW-80
            TransportPairs.Add(new TransportPair(1, 0135, 0509 )); //	THS Mi-8T
            TransportPairs.Add(new TransportPair(1, 0135, 0508 )); //	THS Mi-8TV
            TransportPairs.Add(new TransportPair(1, 0135, 0488 )); //	THS Mi-24A
            TransportPairs.Add(new TransportPair(1, 0135, 0490 )); //	THS Mi-24D
            TransportPairs.Add(new TransportPair(1, 0659, 0250 )); //Fla-Kom IGLA-1	SPW-60PB
            TransportPairs.Add(new TransportPair(1, 0659, 0251 )); //	SPW-70
            TransportPairs.Add(new TransportPair(1, 0659, 0685 )); //	SPW-80
            TransportPairs.Add(new TransportPair(1, 0659, 0247 )); //	SPW-50PK
            TransportPairs.Add(new TransportPair(1, 0659, 0670 )); //	MZTM MT-LB
            TransportPairs.Add(new TransportPair(1, 0659, 0509 )); //	THS Mi-8T
            TransportPairs.Add(new TransportPair(1, 0659, 0508 )); //	THS Mi-8TV
            TransportPairs.Add(new TransportPair(1, 0138, 0250 )); //Fla-Kom STRELA-2	SPW-60PB
            TransportPairs.Add(new TransportPair(1, 0138, 0251 )); //	SPW-70
            TransportPairs.Add(new TransportPair(1, 0138, 0685 )); //	SPW-80
            TransportPairs.Add(new TransportPair(1, 0138, 0247 )); //	SPW-50PK
            TransportPairs.Add(new TransportPair(1, 0138, 0670 )); //	MZTM MT-LB
            TransportPairs.Add(new TransportPair(1, 0138, 0509 )); //	THS Mi-8T
            TransportPairs.Add(new TransportPair(1, 0138, 0508 )); //	THS Mi-8TV
            TransportPairs.Add(new TransportPair(1, 0146, 0441 )); //GRENZER #reco2	LKV URAL
            TransportPairs.Add(new TransportPair(1, 0146, 0247 )); //	SPW-50PK
            TransportPairs.Add(new TransportPair(1, 0146, 0670 )); //	MZTM MT-LB
            TransportPairs.Add(new TransportPair(1, 0146, 0240 )); //	SPW-152K
            TransportPairs.Add(new TransportPair(1, 0146, 0250 )); //	SPW-60PB
            TransportPairs.Add(new TransportPair(1, 0146, 0251 )); //	SPW-70
            TransportPairs.Add(new TransportPair(1, 0146, 0685 )); //	SPW-80
            TransportPairs.Add(new TransportPair(1, 0146, 0488 )); //	THS Mi-24A
            TransportPairs.Add(new TransportPair(1, 0146, 0490 )); //	THS Mi-24D
            TransportPairs.Add(new TransportPair(1, 0663, 0441 )); //KAMPFSCHWIMMER	LKV URAL
            TransportPairs.Add(new TransportPair(1, 0663, 0250 )); //	SPW-60PB
            TransportPairs.Add(new TransportPair(1, 0663, 0251 )); //	SPW-70
            TransportPairs.Add(new TransportPair(1, 0663, 0685 )); //	SPW-80
            TransportPairs.Add(new TransportPair(1, 0663, 0509 )); //	THS Mi-8T
            TransportPairs.Add(new TransportPair(1, 0663, 0508 )); //	THS Mi-8TV
            TransportPairs.Add(new TransportPair(1, 0663, 0488 )); //	THS Mi-24A
            TransportPairs.Add(new TransportPair(1, 0663, 0490 )); //	THS Mi-24D
            TransportPairs.Add(new TransportPair(1, 0634, 0240 )); //LEICHTE SCHÇ?TZEN	SPW-152K
            TransportPairs.Add(new TransportPair(1, 0634, 0250 )); //	SPW-60PB
            TransportPairs.Add(new TransportPair(1, 0634, 0251 )); //	SPW-70
            TransportPairs.Add(new TransportPair(1, 0634, 0685 )); //	SPW-80
            TransportPairs.Add(new TransportPair(1, 0634, 0488 )); //	THS Mi-24A
            TransportPairs.Add(new TransportPair(1, 0634, 0490 )); //	THS Mi-24D
            TransportPairs.Add(new TransportPair(1, 0667, 0250 )); //LstR-40	SPW-60PB
            TransportPairs.Add(new TransportPair(1, 0667, 0251 )); //	SPW-70
            TransportPairs.Add(new TransportPair(1, 0667, 0685 )); //	SPW-80
            TransportPairs.Add(new TransportPair(1, 0667, 0509 )); //	THS Mi-8T
            TransportPairs.Add(new TransportPair(1, 0667, 0508 )); //	THS Mi-8TV
            TransportPairs.Add(new TransportPair(1, 0667, 0488 )); //	THS Mi-24A
            TransportPairs.Add(new TransportPair(1, 0667, 0490 )); //	THS Mi-24D
            TransportPairs.Add(new TransportPair(1, 0261, 0250 )); //MOT.-SCHÇ?TZEN	SPW-60PB
            TransportPairs.Add(new TransportPair(1, 0261, 0251 )); //	SPW-70
            TransportPairs.Add(new TransportPair(1, 0261, 0685 )); //	SPW-80
            TransportPairs.Add(new TransportPair(1, 0261, 0247 )); //	SPW-50PK
            TransportPairs.Add(new TransportPair(1, 0261, 0670 )); //	MZTM MT-LB
            TransportPairs.Add(new TransportPair(1, 0261, 0252 )); //	SPz BMP-1 P/c
            TransportPairs.Add(new TransportPair(1, 0261, 0041 )); //	SPz BMP-1 SP-1
            TransportPairs.Add(new TransportPair(1, 0261, 0042 )); //	SPz BMP-1 SP-2
            TransportPairs.Add(new TransportPair(1, 0261, 0046 )); //	SPz BMP-2
            TransportPairs.Add(new TransportPair(1, 0261, 0253 )); //	SPz BMP-2/c
            TransportPairs.Add(new TransportPair(1, 0687, 0250 )); //MOT.-SCHÇ?TZEN 90	SPW-60PB
            TransportPairs.Add(new TransportPair(1, 0687, 0251 )); //	SPW-70
            TransportPairs.Add(new TransportPair(1, 0687, 0685 )); //	SPW-80
            TransportPairs.Add(new TransportPair(1, 0687, 0247 )); //	SPW-50PK
            TransportPairs.Add(new TransportPair(1, 0687, 0670 )); //	MZTM MT-LB
            TransportPairs.Add(new TransportPair(1, 0687, 0252 )); //	SPz BMP-1 P/c
            TransportPairs.Add(new TransportPair(1, 0687, 0041 )); //	SPz BMP-1 SP-1
            TransportPairs.Add(new TransportPair(1, 0687, 0042 )); //	SPz BMP-1 SP-2
            TransportPairs.Add(new TransportPair(1, 0687, 0046 )); //	SPz BMP-2
            TransportPairs.Add(new TransportPair(1, 0687, 0253 )); //	SPz BMP-2/c
            TransportPairs.Add(new TransportPair(1, 0208, 0250 )); //PALR FAGOT	SPW-60PB
            TransportPairs.Add(new TransportPair(1, 0208, 0251 )); //	SPW-70
            TransportPairs.Add(new TransportPair(1, 0208, 0685 )); //	SPW-80
            TransportPairs.Add(new TransportPair(1, 0208, 0247 )); //	SPW-50PK
            TransportPairs.Add(new TransportPair(1, 0208, 0670 )); //	MZTM MT-LB
            TransportPairs.Add(new TransportPair(1, 0208, 0509 )); //	THS Mi-8T
            TransportPairs.Add(new TransportPair(1, 0208, 0508 )); //	THS Mi-8TV
            TransportPairs.Add(new TransportPair(1, 0676, 0250 )); //PALR KONKURS	SPW-60PB
            TransportPairs.Add(new TransportPair(1, 0676, 0251 )); //	SPW-70
            TransportPairs.Add(new TransportPair(1, 0676, 0685 )); //	SPW-80
            TransportPairs.Add(new TransportPair(1, 0676, 0247 )); //	SPW-50PK
            TransportPairs.Add(new TransportPair(1, 0676, 0670 )); //	MZTM MT-LB
            TransportPairs.Add(new TransportPair(1, 0676, 0509 )); //	THS Mi-8T
            TransportPairs.Add(new TransportPair(1, 0676, 0508 )); //	THS Mi-8TV
            TransportPairs.Add(new TransportPair(1, 0227, 0250 )); //PANZERJAGER	SPW-60PB
            TransportPairs.Add(new TransportPair(1, 0227, 0251 )); //	SPW-70
            TransportPairs.Add(new TransportPair(1, 0227, 0685 )); //	SPW-80
            TransportPairs.Add(new TransportPair(1, 0227, 0247 )); //	SPW-50PK
            TransportPairs.Add(new TransportPair(1, 0227, 0670 )); //	MZTM MT-LB
            TransportPairs.Add(new TransportPair(1, 0227, 0509 )); //	THS Mi-8T
            TransportPairs.Add(new TransportPair(1, 0227, 0508 )); //	THS Mi-8TV
            TransportPairs.Add(new TransportPair(1, 0232, 0240 )); //RESERVESCHÇ?TZEN	SPW-152K
            TransportPairs.Add(new TransportPair(1, 0159, 0441 )); //SPEZIALAUFKLÇ?RER #reco2	LKV URAL
            TransportPairs.Add(new TransportPair(1, 0159, 0250 )); //	SPW-60PB
            TransportPairs.Add(new TransportPair(1, 0159, 0251 )); //	SPW-70
            TransportPairs.Add(new TransportPair(1, 0159, 0685 )); //	SPW-80
            TransportPairs.Add(new TransportPair(1, 0159, 0488 )); //	THS Mi-24A
            TransportPairs.Add(new TransportPair(1, 0159, 0490 )); //	THS Mi-24D
            TransportPairs.Add(new TransportPair(1, 0228, 0250 )); //STURMPIONIER	SPW-60PB
            TransportPairs.Add(new TransportPair(1, 0228, 0251 )); //	SPW-70
            TransportPairs.Add(new TransportPair(1, 0228, 0685 )); //	SPW-80
            TransportPairs.Add(new TransportPair(1, 0228, 0247 )); //	SPW-50PK
            TransportPairs.Add(new TransportPair(1, 0228, 0670 )); //	MZTM MT-LB
            TransportPairs.Add(new TransportPair(1, 0228, 0252 )); //	SPz BMP-1 P/c
            TransportPairs.Add(new TransportPair(1, 0228, 0041 )); //	SPz BMP-1 SP-1
            TransportPairs.Add(new TransportPair(1, 0228, 0042 )); //	SPz BMP-1 SP-2
            TransportPairs.Add(new TransportPair(1, 0228, 0509 )); //	THS Mi-8T
            TransportPairs.Add(new TransportPair(1, 0228, 0508 )); //	THS Mi-8TV
            TransportPairs.Add(new TransportPair(1, 0704, 0250 )); //WACHTREGIMENT	SPW-60PB
            TransportPairs.Add(new TransportPair(1, 0704, 0251 )); //	SPW-70
            TransportPairs.Add(new TransportPair(1, 0704, 0685 )); //	SPW-80
            TransportPairs.Add(new TransportPair(1, 0704, 0509 )); //	THS Mi-8T
            TransportPairs.Add(new TransportPair(1, 0704, 0508 )); //	THS Mi-8TV
            TransportPairs.Add(new TransportPair(1, 0704, 0488 )); //	THS Mi-24A
            TransportPairs.Add(new TransportPair(1, 0704, 0490 )); //	THS Mi-24D
            TransportPairs.Add(new TransportPair(1, 0182, 0407 )); //#command JIHWI-BAN	ZIL-130
            TransportPairs.Add(new TransportPair(1, 0182, 0094 )); //	BTR-60P
            TransportPairs.Add(new TransportPair(1, 0182, 0093 )); //	BTR-60PB
            TransportPairs.Add(new TransportPair(1, 0182, 0513 )); //	Mi-8
            TransportPairs.Add(new TransportPair(1, 0183, 0094 )); //BAN-TANK FAGOT	BTR-60P
            TransportPairs.Add(new TransportPair(1, 0183, 0093 )); //	BTR-60PB
            TransportPairs.Add(new TransportPair(1, 0183, 0092 )); //	BTR-50PK
            TransportPairs.Add(new TransportPair(1, 0183, 0153 )); //	ZSD-531A
            TransportPairs.Add(new TransportPair(1, 0183, 0513 )); //	Mi-8
            TransportPairs.Add(new TransportPair(1, 0195, 0094 )); //BIBANCHUNGPO	BTR-60P
            TransportPairs.Add(new TransportPair(1, 0195, 0093 )); //	BTR-60PB
            TransportPairs.Add(new TransportPair(1, 0195, 0092 )); //	BTR-50PK
            TransportPairs.Add(new TransportPair(1, 0195, 0153 )); //	ZSD-531A
            TransportPairs.Add(new TransportPair(1, 0195, 0513 )); //	Mi-8
            TransportPairs.Add(new TransportPair(1, 0190, 0092 )); //BOCHONGSU	BTR-50PK
            TransportPairs.Add(new TransportPair(1, 0190, 0153 )); //	ZSD-531A
            TransportPairs.Add(new TransportPair(1, 0190, 0094 )); //	BTR-60P
            TransportPairs.Add(new TransportPair(1, 0190, 0093 )); //	BTR-60PB
            TransportPairs.Add(new TransportPair(1, 0190, 0397 )); //	VTT-323
            TransportPairs.Add(new TransportPair(1, 0190, 0398 )); //	VTT-323 HWASUNG-CHONG
            TransportPairs.Add(new TransportPair(1, 0190, 0396 )); //	VTT-323 SUSONG-POL
            TransportPairs.Add(new TransportPair(1, 0190, 0051 )); //	KORSHUN
            TransportPairs.Add(new TransportPair(1, 0186, 0094 )); //GONGBOBYONG	BTR-60P
            TransportPairs.Add(new TransportPair(1, 0186, 0093 )); //	BTR-60PB
            TransportPairs.Add(new TransportPair(1, 0186, 0503 )); //	Mi-4
            TransportPairs.Add(new TransportPair(1, 0186, 0513 )); //	Mi-8
            TransportPairs.Add(new TransportPair(1, 0192, 0094 )); //GONGBYONG	BTR-60P
            TransportPairs.Add(new TransportPair(1, 0192, 0093 )); //	BTR-60PB
            TransportPairs.Add(new TransportPair(1, 0192, 0092 )); //	BTR-50PK
            TransportPairs.Add(new TransportPair(1, 0192, 0153 )); //	ZSD-531A
            TransportPairs.Add(new TransportPair(1, 0192, 0513 )); //	Mi-8
            TransportPairs.Add(new TransportPair(1, 0184, 0094 )); //IGLA	BTR-60P
            TransportPairs.Add(new TransportPair(1, 0184, 0093 )); //	BTR-60PB
            TransportPairs.Add(new TransportPair(1, 0184, 0092 )); //	BTR-50PK
            TransportPairs.Add(new TransportPair(1, 0184, 0153 )); //	ZSD-531A
            TransportPairs.Add(new TransportPair(1, 0184, 0513 )); //	Mi-8
            TransportPairs.Add(new TransportPair(1, 0188, 0094 )); //JEOGOCKDAE	BTR-60P
            TransportPairs.Add(new TransportPair(1, 0188, 0093 )); //	BTR-60PB
            TransportPairs.Add(new TransportPair(1, 0188, 0092 )); //	BTR-50PK
            TransportPairs.Add(new TransportPair(1, 0188, 0153 )); //	ZSD-531A
            TransportPairs.Add(new TransportPair(1, 0188, 0513 )); //	Mi-8
            TransportPairs.Add(new TransportPair(1, 0625, 0094 )); //JEOGOCKDAE '90	BTR-60P
            TransportPairs.Add(new TransportPair(1, 0625, 0093 )); //	BTR-60PB
            TransportPairs.Add(new TransportPair(1, 0625, 0084 )); //	BTR-80A
            TransportPairs.Add(new TransportPair(1, 0625, 0051 )); //	KORSHUN
            TransportPairs.Add(new TransportPair(1, 0625, 0513 )); //	Mi-8
            TransportPairs.Add(new TransportPair(1, 0193, 0407 )); //JEONGCHALDAE #reco2	ZIL-130
            TransportPairs.Add(new TransportPair(1, 0193, 0094 )); //	BTR-60P
            TransportPairs.Add(new TransportPair(1, 0193, 0093 )); //	BTR-60PB
            TransportPairs.Add(new TransportPair(1, 0193, 0503 )); //	Mi-4
            TransportPairs.Add(new TransportPair(1, 0189, 0090 )); //JUCKWIDAE	BTR-152
            TransportPairs.Add(new TransportPair(1, 0194, 0094 )); //STRELA-2	BTR-60P
            TransportPairs.Add(new TransportPair(1, 0194, 0093 )); //	BTR-60PB
            TransportPairs.Add(new TransportPair(1, 0194, 0092 )); //	BTR-50PK
            TransportPairs.Add(new TransportPair(1, 0194, 0153 )); //	ZSD-531A
            TransportPairs.Add(new TransportPair(1, 0194, 0513 )); //	Mi-8
            TransportPairs.Add(new TransportPair(1, 0627, 0094 )); //YUCKJEONDAE	BTR-60P
            TransportPairs.Add(new TransportPair(1, 0627, 0093 )); //	BTR-60PB
            TransportPairs.Add(new TransportPair(1, 0627, 0503 )); //	Mi-4
            TransportPairs.Add(new TransportPair(1, 0627, 0513 )); //	Mi-8
            TransportPairs.Add(new TransportPair(1, 0626, 0094 )); //YUCKJEONDAE '90	BTR-60P
            TransportPairs.Add(new TransportPair(1, 0626, 0093 )); //	BTR-60PB
            TransportPairs.Add(new TransportPair(1, 0626, 0084 )); //	BTR-80A
            TransportPairs.Add(new TransportPair(1, 0626, 0503 )); //	Mi-4
            TransportPairs.Add(new TransportPair(1, 0626, 0513 )); //	Mi-8
            TransportPairs.Add(new TransportPair(1, 0620, 0272 )); //#command SZTAB DOWODZENIA	STAR 266
            TransportPairs.Add(new TransportPair(1, 0620, 0236 )); //	SKOT-2
            TransportPairs.Add(new TransportPair(1, 0620, 0237 )); //	SKOT-2A
            TransportPairs.Add(new TransportPair(1, 0620, 0238 )); //	SKOT-2AM
            TransportPairs.Add(new TransportPair(1, 0620, 0683 )); //	SKOT-2AP
            TransportPairs.Add(new TransportPair(1, 0620, 0531 )); //	Mi-8T
            TransportPairs.Add(new TransportPair(1, 0620, 0707 )); //	Mi-17
            TransportPairs.Add(new TransportPair(1, 0620, 0643 )); //	Mi-2T
            TransportPairs.Add(new TransportPair(1, 0620, 0713 )); //	W-3T SOKÇ"
            TransportPairs.Add(new TransportPair(1, 0660, 0272 )); //FORMOZA	STAR 266
            TransportPairs.Add(new TransportPair(1, 0660, 0236 )); //	SKOT-2
            TransportPairs.Add(new TransportPair(1, 0660, 0237 )); //	SKOT-2A
            TransportPairs.Add(new TransportPair(1, 0660, 0238 )); //	SKOT-2AM
            TransportPairs.Add(new TransportPair(1, 0660, 0683 )); //	SKOT-2AP
            TransportPairs.Add(new TransportPair(1, 0660, 0643 )); //	Mi-2T
            TransportPairs.Add(new TransportPair(1, 0660, 0713 )); //	W-3T SOKÇ"
            TransportPairs.Add(new TransportPair(1, 0660, 0531 )); //	Mi-8T
            TransportPairs.Add(new TransportPair(1, 0660, 0707 )); //	Mi-17
            TransportPairs.Add(new TransportPair(1, 0660, 0530 )); //	Mi-24D
            TransportPairs.Add(new TransportPair(1, 0632, 0236 )); //KOMANDOSI	SKOT-2
            TransportPairs.Add(new TransportPair(1, 0632, 0237 )); //	SKOT-2A
            TransportPairs.Add(new TransportPair(1, 0632, 0238 )); //	SKOT-2AM
            TransportPairs.Add(new TransportPair(1, 0632, 0683 )); //	SKOT-2AP
            TransportPairs.Add(new TransportPair(1, 0632, 0643 )); //	Mi-2T
            TransportPairs.Add(new TransportPair(1, 0632, 0713 )); //	W-3T SOKÇ"
            TransportPairs.Add(new TransportPair(1, 0632, 0531 )); //	Mi-8T
            TransportPairs.Add(new TransportPair(1, 0632, 0707 )); //	Mi-17
            TransportPairs.Add(new TransportPair(1, 0632, 0530 )); //	Mi-24D
            TransportPairs.Add(new TransportPair(1, 0196, 0199 )); //NIEBIESKIE BERETY	TOPAS
            TransportPairs.Add(new TransportPair(1, 0196, 0200 )); //	TOPAS-2A
            TransportPairs.Add(new TransportPair(1, 0196, 0201 )); //	TOPAS-2AP
            TransportPairs.Add(new TransportPair(1, 0196, 0531 )); //	Mi-8T
            TransportPairs.Add(new TransportPair(1, 0196, 0707 )); //	Mi-17
            TransportPairs.Add(new TransportPair(1, 0673, 0199 )); //NIEBIESKIE BERETY 90	TOPAS
            TransportPairs.Add(new TransportPair(1, 0673, 0200 )); //	TOPAS-2A
            TransportPairs.Add(new TransportPair(1, 0673, 0201 )); //	TOPAS-2AP
            TransportPairs.Add(new TransportPair(1, 0673, 0531 )); //	Mi-8T
            TransportPairs.Add(new TransportPair(1, 0673, 0707 )); //	Mi-17
            TransportPairs.Add(new TransportPair(1, 0277, 0236 )); //PIECHOTA ZMECH.	SKOT-2
            TransportPairs.Add(new TransportPair(1, 0277, 0237 )); //	SKOT-2A
            TransportPairs.Add(new TransportPair(1, 0277, 0238 )); //	SKOT-2AM
            TransportPairs.Add(new TransportPair(1, 0277, 0683 )); //	SKOT-2AP
            TransportPairs.Add(new TransportPair(1, 0277, 0199 )); //	TOPAS
            TransportPairs.Add(new TransportPair(1, 0277, 0200 )); //	TOPAS-2A
            TransportPairs.Add(new TransportPair(1, 0277, 0201 )); //	TOPAS-2AP
            TransportPairs.Add(new TransportPair(1, 0277, 0102 )); //	BWP-1
            TransportPairs.Add(new TransportPair(1, 0277, 0103 )); //	BWP-2
            TransportPairs.Add(new TransportPair(1, 0277, 0104 )); //	BWP-2D
            TransportPairs.Add(new TransportPair(1, 0210, 0236 )); //PPK FAGOT	SKOT-2
            TransportPairs.Add(new TransportPair(1, 0210, 0237 )); //	SKOT-2A
            TransportPairs.Add(new TransportPair(1, 0210, 0238 )); //	SKOT-2AM
            TransportPairs.Add(new TransportPair(1, 0210, 0683 )); //	SKOT-2AP
            TransportPairs.Add(new TransportPair(1, 0210, 0199 )); //	TOPAS
            TransportPairs.Add(new TransportPair(1, 0210, 0200 )); //	TOPAS-2A
            TransportPairs.Add(new TransportPair(1, 0210, 0201 )); //	TOPAS-2AP
            TransportPairs.Add(new TransportPair(1, 0210, 0531 )); //	Mi-8T
            TransportPairs.Add(new TransportPair(1, 0210, 0707 )); //	Mi-17
            TransportPairs.Add(new TransportPair(1, 0665, 0236 )); //PPK KONKURS	SKOT-2
            TransportPairs.Add(new TransportPair(1, 0665, 0237 )); //	SKOT-2A
            TransportPairs.Add(new TransportPair(1, 0665, 0238 )); //	SKOT-2AM
            TransportPairs.Add(new TransportPair(1, 0665, 0683 )); //	SKOT-2AP
            TransportPairs.Add(new TransportPair(1, 0665, 0199 )); //	TOPAS
            TransportPairs.Add(new TransportPair(1, 0665, 0200 )); //	TOPAS-2A
            TransportPairs.Add(new TransportPair(1, 0665, 0201 )); //	TOPAS-2AP
            TransportPairs.Add(new TransportPair(1, 0665, 0531 )); //	Mi-8T
            TransportPairs.Add(new TransportPair(1, 0665, 0707 )); //	Mi-17
            TransportPairs.Add(new TransportPair(1, 0661, 0236 )); //PPZR GROM	SKOT-2
            TransportPairs.Add(new TransportPair(1, 0661, 0237 )); //	SKOT-2A
            TransportPairs.Add(new TransportPair(1, 0661, 0238 )); //	SKOT-2AM
            TransportPairs.Add(new TransportPair(1, 0661, 0683 )); //	SKOT-2AP
            TransportPairs.Add(new TransportPair(1, 0661, 0199 )); //	TOPAS
            TransportPairs.Add(new TransportPair(1, 0661, 0200 )); //	TOPAS-2A
            TransportPairs.Add(new TransportPair(1, 0661, 0201 )); //	TOPAS-2AP
            TransportPairs.Add(new TransportPair(1, 0661, 0229 )); //	PROMET
            TransportPairs.Add(new TransportPair(1, 0661, 0531 )); //	Mi-8T
            TransportPairs.Add(new TransportPair(1, 0661, 0707 )); //	Mi-17
            TransportPairs.Add(new TransportPair(1, 0276, 0236 )); //PPZR STRZAA-2¶	SKOT-2
            TransportPairs.Add(new TransportPair(1, 0276, 0237 )); //	SKOT-2A
            TransportPairs.Add(new TransportPair(1, 0276, 0238 )); //	SKOT-2AM
            TransportPairs.Add(new TransportPair(1, 0276, 0683 )); //	SKOT-2AP
            TransportPairs.Add(new TransportPair(1, 0276, 0199 )); //	TOPAS
            TransportPairs.Add(new TransportPair(1, 0276, 0200 )); //	TOPAS-2A
            TransportPairs.Add(new TransportPair(1, 0276, 0201 )); //	TOPAS-2AP
            TransportPairs.Add(new TransportPair(1, 0276, 0229 )); //	PROMET
            TransportPairs.Add(new TransportPair(1, 0276, 0531 )); //	Mi-8T
            TransportPairs.Add(new TransportPair(1, 0276, 0707 )); //	Mi-17
            TransportPairs.Add(new TransportPair(1, 0260, 0236 )); //SAPERZY	SKOT-2
            TransportPairs.Add(new TransportPair(1, 0260, 0237 )); //	SKOT-2A
            TransportPairs.Add(new TransportPair(1, 0260, 0238 )); //	SKOT-2AM
            TransportPairs.Add(new TransportPair(1, 0260, 0683 )); //	SKOT-2AP
            TransportPairs.Add(new TransportPair(1, 0260, 0199 )); //	TOPAS
            TransportPairs.Add(new TransportPair(1, 0260, 0200 )); //	TOPAS-2A
            TransportPairs.Add(new TransportPair(1, 0260, 0201 )); //	TOPAS-2AP
            TransportPairs.Add(new TransportPair(1, 0260, 0174 )); //	MT-LB 23M KRAK
            TransportPairs.Add(new TransportPair(1, 0132, 0236 )); //SAPERZY SZTURMOWI	SKOT-2
            TransportPairs.Add(new TransportPair(1, 0132, 0237 )); //	SKOT-2A
            TransportPairs.Add(new TransportPair(1, 0132, 0238 )); //	SKOT-2AM
            TransportPairs.Add(new TransportPair(1, 0132, 0683 )); //	SKOT-2AP
            TransportPairs.Add(new TransportPair(1, 0132, 0643 )); //	Mi-2T
            TransportPairs.Add(new TransportPair(1, 0132, 0713 )); //	W-3T SOKÇ"
            TransportPairs.Add(new TransportPair(1, 0132, 0531 )); //	Mi-8T
            TransportPairs.Add(new TransportPair(1, 0132, 0707 )); //	Mi-17
            TransportPairs.Add(new TransportPair(1, 0131, 0236 )); //SPADOCHRONIARZE	SKOT-2
            TransportPairs.Add(new TransportPair(1, 0131, 0237 )); //	SKOT-2A
            TransportPairs.Add(new TransportPair(1, 0131, 0238 )); //	SKOT-2AM
            TransportPairs.Add(new TransportPair(1, 0131, 0683 )); //	SKOT-2AP
            TransportPairs.Add(new TransportPair(1, 0131, 0643 )); //	Mi-2T
            TransportPairs.Add(new TransportPair(1, 0131, 0713 )); //	W-3T SOKÇ"
            TransportPairs.Add(new TransportPair(1, 0131, 0531 )); //	Mi-8T
            TransportPairs.Add(new TransportPair(1, 0131, 0707 )); //	Mi-17
            TransportPairs.Add(new TransportPair(1, 0689, 0236 )); //SPADOCHRONIARZE 90	SKOT-2
            TransportPairs.Add(new TransportPair(1, 0689, 0237 )); //	SKOT-2A
            TransportPairs.Add(new TransportPair(1, 0689, 0238 )); //	SKOT-2AM
            TransportPairs.Add(new TransportPair(1, 0689, 0683 )); //	SKOT-2AP
            TransportPairs.Add(new TransportPair(1, 0689, 0643 )); //	Mi-2T
            TransportPairs.Add(new TransportPair(1, 0689, 0713 )); //	W-3T SOKÇ"
            TransportPairs.Add(new TransportPair(1, 0689, 0531 )); //	Mi-8T
            TransportPairs.Add(new TransportPair(1, 0689, 0707 )); //	Mi-17
            TransportPairs.Add(new TransportPair(1, 0684, 0236 )); //SPG9-D	SKOT-2
            TransportPairs.Add(new TransportPair(1, 0684, 0237 )); //	SKOT-2A
            TransportPairs.Add(new TransportPair(1, 0684, 0238 )); //	SKOT-2AM
            TransportPairs.Add(new TransportPair(1, 0684, 0683 )); //	SKOT-2AP
            TransportPairs.Add(new TransportPair(1, 0684, 0643 )); //	Mi-2T
            TransportPairs.Add(new TransportPair(1, 0684, 0713 )); //	W-3T SOKÇ"
            TransportPairs.Add(new TransportPair(1, 0684, 0531 )); //	Mi-8T
            TransportPairs.Add(new TransportPair(1, 0684, 0707 )); //	Mi-17
            TransportPairs.Add(new TransportPair(1, 0178, 0236 )); //STRZELCY POLDHALAŸSCY	SKOT-2
            TransportPairs.Add(new TransportPair(1, 0178, 0237 )); //	SKOT-2A
            TransportPairs.Add(new TransportPair(1, 0178, 0238 )); //	SKOT-2AM
            TransportPairs.Add(new TransportPair(1, 0178, 0683 )); //	SKOT-2AP
            TransportPairs.Add(new TransportPair(1, 0178, 0643 )); //	Mi-2T
            TransportPairs.Add(new TransportPair(1, 0178, 0713 )); //	W-3T SOKÇ"
            TransportPairs.Add(new TransportPair(1, 0178, 0531 )); //	Mi-8T
            TransportPairs.Add(new TransportPair(1, 0178, 0707 )); //	Mi-17
            TransportPairs.Add(new TransportPair(1, 0178, 0530 )); //	Mi-24D
            TransportPairs.Add(new TransportPair(1, 0133, 0272 )); //ZWIADOWCY #reco2	STAR 266
            TransportPairs.Add(new TransportPair(1, 0133, 0236 )); //	SKOT-2
            TransportPairs.Add(new TransportPair(1, 0133, 0237 )); //	SKOT-2A
            TransportPairs.Add(new TransportPair(1, 0133, 0238 )); //	SKOT-2AM
            TransportPairs.Add(new TransportPair(1, 0133, 0683 )); //	SKOT-2AP
            TransportPairs.Add(new TransportPair(1, 0133, 0643 )); //	Mi-2T
            TransportPairs.Add(new TransportPair(1, 0133, 0713 )); //	W-3T SOKÇ"
            TransportPairs.Add(new TransportPair(1, 0133, 0530 )); //	Mi-24D
            TransportPairs.Add(new TransportPair(1, 0107, 0256 )); //#command ZHIHUIBAN	SX250
            TransportPairs.Add(new TransportPair(1, 0107, 0339 )); //	ZSL-56
            TransportPairs.Add(new TransportPair(1, 0107, 0511 )); //	Mi-8T
            TransportPairs.Add(new TransportPair(1, 0115, 0339 )); //FÇNG HUÇ\[Euro] BŽ¦NG	ZSL-56
            TransportPairs.Add(new TransportPair(1, 0115, 0349 )); //	ZSD-63A
            TransportPairs.Add(new TransportPair(1, 0115, 0337 )); //	ZSD-63C
            TransportPairs.Add(new TransportPair(1, 0115, 0511 )); //	Mi-8T
            TransportPairs.Add(new TransportPair(1, 0108, 0339 )); //HN-5A	ZSL-56
            TransportPairs.Add(new TransportPair(1, 0108, 0349 )); //	ZSD-63A
            TransportPairs.Add(new TransportPair(1, 0108, 0337 )); //	ZSD-63C
            TransportPairs.Add(new TransportPair(1, 0108, 0511 )); //	Mi-8T
            TransportPairs.Add(new TransportPair(1, 0109, 0339 )); //HN-5B	ZSL-56
            TransportPairs.Add(new TransportPair(1, 0109, 0349 )); //	ZSD-63A
            TransportPairs.Add(new TransportPair(1, 0109, 0337 )); //	ZSD-63C
            TransportPairs.Add(new TransportPair(1, 0109, 0511 )); //	Mi-8T
            TransportPairs.Add(new TransportPair(1, 0112, 0256 )); //LIÇ? RÇ?N #reco2	SX250
            TransportPairs.Add(new TransportPair(1, 0112, 0339 )); //	ZSL-56
            TransportPairs.Add(new TransportPair(1, 0112, 0651 )); //	WZ-551
            TransportPairs.Add(new TransportPair(1, 0112, 0525 )); //	Z-5
            TransportPairs.Add(new TransportPair(1, 0112, 0527 )); //	Z-9A
            TransportPairs.Add(new TransportPair(1, 0116, 0339 )); //LÇ? JIÇ\[Euro]N	ZSL-56
            TransportPairs.Add(new TransportPair(1, 0116, 0525 )); //	Z-5
            TransportPairs.Add(new TransportPair(1, 0624, 0339 )); //li jian 90	ZSL-56
            TransportPairs.Add(new TransportPair(1, 0624, 0651 )); //	WZ-551
            TransportPairs.Add(new TransportPair(1, 0624, 0525 )); //	Z-5
            TransportPairs.Add(new TransportPair(1, 0624, 0527 )); //	Z-9A
            TransportPairs.Add(new TransportPair(1, 0110, 0349 )); //LÇ\[Trademark] ZHÇ\[Euro]NDUÇ?	ZSD-63A
            TransportPairs.Add(new TransportPair(1, 0110, 0337 )); //	ZSD-63C
            TransportPairs.Add(new TransportPair(1, 0110, 0358 )); //	ZBD-86
            TransportPairs.Add(new TransportPair(1, 0110, 0511 )); //	Mi-8T
            TransportPairs.Add(new TransportPair(1, 0623, 0349 )); //lu zhandui 90	ZSD-63A
            TransportPairs.Add(new TransportPair(1, 0623, 0337 )); //	ZSD-63C
            TransportPairs.Add(new TransportPair(1, 0623, 0358 )); //	ZBD-86
            TransportPairs.Add(new TransportPair(1, 0623, 0409 )); //	ZSD-90
            TransportPairs.Add(new TransportPair(1, 0623, 0511 )); //	Mi-8T
            TransportPairs.Add(new TransportPair(1, 0111, 0339 )); //QW-1	ZSL-56
            TransportPairs.Add(new TransportPair(1, 0111, 0349 )); //	ZSD-63A
            TransportPairs.Add(new TransportPair(1, 0111, 0337 )); //	ZSD-63C
            TransportPairs.Add(new TransportPair(1, 0111, 0511 )); //	Mi-8T
            TransportPairs.Add(new TransportPair(1, 0117, 0339 )); //TÇNKÇ? SHŽ\[Euro]SH€'U	ZSL-56
            TransportPairs.Add(new TransportPair(1, 0117, 0349 )); //	ZSD-63A
            TransportPairs.Add(new TransportPair(1, 0117, 0337 )); //	ZSD-63C
            TransportPairs.Add(new TransportPair(1, 0117, 0511 )); //	Mi-8T
            TransportPairs.Add(new TransportPair(1, 0650, 0339 )); //TÇNKÇ? SHŽ\[Euro]SH€'U '85	ZSL-56
            TransportPairs.Add(new TransportPair(1, 0650, 0651 )); //	WZ-551
            TransportPairs.Add(new TransportPair(1, 0650, 0349 )); //	ZSD-63A
            TransportPairs.Add(new TransportPair(1, 0650, 0337 )); //	ZSD-63C
            TransportPairs.Add(new TransportPair(1, 0650, 0511 )); //	Mi-8T
            TransportPairs.Add(new TransportPair(1, 0113, 0339 )); //Y¦BÇ?IYÇ?	ZSL-56
            TransportPairs.Add(new TransportPair(1, 0114, 0339 )); //ZHÇ\[Euro]NSHÇ?	ZSL-56
            TransportPairs.Add(new TransportPair(1, 0114, 0349 )); //	ZSD-63A
            TransportPairs.Add(new TransportPair(1, 0114, 0337 )); //	ZSD-63C
            TransportPairs.Add(new TransportPair(1, 0114, 0511 )); //	Mi-8T
            TransportPairs.Add(new TransportPair(1, 0622, 0339 )); //zhanshi 85	ZSL-56
            TransportPairs.Add(new TransportPair(1, 0622, 0349 )); //	ZSD-63A
            TransportPairs.Add(new TransportPair(1, 0622, 0337 )); //	ZSD-63C
            TransportPairs.Add(new TransportPair(1, 0622, 0358 )); //	ZBD-86
            TransportPairs.Add(new TransportPair(1, 0622, 0409 )); //	ZSD-90
            TransportPairs.Add(new TransportPair(1, 0622, 0511 )); //	Mi-8T
            TransportPairs.Add(new TransportPair(1, 0385, 0389 )); //#command KOMANDNOE OTDELENIE	URAL-375D
            TransportPairs.Add(new TransportPair(1, 0385, 0079 )); //	BTR-60PB
            TransportPairs.Add(new TransportPair(1, 0385, 0080 )); //	BTR-70
            TransportPairs.Add(new TransportPair(1, 0385, 0506 )); //	Mi-8T
            TransportPairs.Add(new TransportPair(1, 0385, 0507 )); //	Mi-8TV
            TransportPairs.Add(new TransportPair(1, 0385, 0486 )); //	Mi-8MTV
            TransportPairs.Add(new TransportPair(1, 0385, 0464 )); //	Ka-29TB
            TransportPairs.Add(new TransportPair(1, 0386, 0079 )); //GORNOSTRELKI	BTR-60PB
            TransportPairs.Add(new TransportPair(1, 0386, 0080 )); //	BTR-70
            TransportPairs.Add(new TransportPair(1, 0386, 0506 )); //	Mi-8T
            TransportPairs.Add(new TransportPair(1, 0386, 0507 )); //	Mi-8TV
            TransportPairs.Add(new TransportPair(1, 0386, 0486 )); //	Mi-8MTV
            TransportPairs.Add(new TransportPair(1, 0386, 0487 )); //	Mi-24A
            TransportPairs.Add(new TransportPair(1, 0386, 0489 )); //	Mi-24D
            TransportPairs.Add(new TransportPair(1, 0629, 0506 )); //GORNOSTRELKI '90	Mi-8T
            TransportPairs.Add(new TransportPair(1, 0629, 0507 )); //	Mi-8TV
            TransportPairs.Add(new TransportPair(1, 0629, 0486 )); //	Mi-8MTV
            TransportPairs.Add(new TransportPair(1, 0629, 0487 )); //	Mi-24A
            TransportPairs.Add(new TransportPair(1, 0629, 0489 )); //	Mi-24D
            TransportPairs.Add(new TransportPair(1, 0179, 0079 )); //MORSKAYA PEKHOTA	BTR-60PB
            TransportPairs.Add(new TransportPair(1, 0179, 0080 )); //	BTR-70
            TransportPairs.Add(new TransportPair(1, 0179, 0172 )); //	MT-LBV
            TransportPairs.Add(new TransportPair(1, 0179, 0464 )); //	Ka-29TB
            TransportPairs.Add(new TransportPair(1, 0630, 0083 )); //MORSKAYA PEKHOTA '90	BTR-80
            TransportPairs.Add(new TransportPair(1, 0630, 0085 )); //	BTR-80A
            TransportPairs.Add(new TransportPair(1, 0630, 0086 )); //	BTR-90
            TransportPairs.Add(new TransportPair(1, 0630, 0172 )); //	MT-LBV
            TransportPairs.Add(new TransportPair(1, 0630, 0464 )); //	Ka-29TB
            TransportPairs.Add(new TransportPair(1, 0181, 0079 )); //MOTOSTRELKI	BTR-60PB
            TransportPairs.Add(new TransportPair(1, 0181, 0080 )); //	BTR-70
            TransportPairs.Add(new TransportPair(1, 0181, 0172 )); //	MT-LBV
            TransportPairs.Add(new TransportPair(1, 0181, 0038 )); //	BMP-1
            TransportPairs.Add(new TransportPair(1, 0181, 0039 )); //	BMP-1D
            TransportPairs.Add(new TransportPair(1, 0181, 0040 )); //	BMP-1P
            TransportPairs.Add(new TransportPair(1, 0181, 0045 )); //	BMP-2
            TransportPairs.Add(new TransportPair(1, 0181, 0047 )); //	BMP-2D
            TransportPairs.Add(new TransportPair(1, 0181, 0048 )); //	BMP- 2 Obr. 1986
            TransportPairs.Add(new TransportPair(1, 0635, 0172 )); //MOTOSTRELKI '90	MT-LBV
            TransportPairs.Add(new TransportPair(1, 0635, 0083 )); //	BTR-80
            TransportPairs.Add(new TransportPair(1, 0635, 0085 )); //	BTR-80A
            TransportPairs.Add(new TransportPair(1, 0635, 0086 )); //	BTR-90
            TransportPairs.Add(new TransportPair(1, 0635, 0038 )); //	BMP-1
            TransportPairs.Add(new TransportPair(1, 0635, 0039 )); //	BMP-1D
            TransportPairs.Add(new TransportPair(1, 0635, 0040 )); //	BMP-1P
            TransportPairs.Add(new TransportPair(1, 0635, 0045 )); //	BMP-2
            TransportPairs.Add(new TransportPair(1, 0635, 0047 )); //	BMP-2D
            TransportPairs.Add(new TransportPair(1, 0635, 0048 )); //	BMP- 2 Obr. 1986
            TransportPairs.Add(new TransportPair(1, 0635, 0049 )); //	BMP-3
            TransportPairs.Add(new TransportPair(1, 0268, 0079 )); //PTUR FAKTORIYA	BTR-60PB
            TransportPairs.Add(new TransportPair(1, 0268, 0080 )); //	BTR-70
            TransportPairs.Add(new TransportPair(1, 0268, 0172 )); //	MT-LBV
            TransportPairs.Add(new TransportPair(1, 0268, 0095 )); //	BTR-D
            TransportPairs.Add(new TransportPair(1, 0268, 0096 )); //	BTR-RD ROBOT
            TransportPairs.Add(new TransportPair(1, 0268, 0097 )); //	BTR-ZD SKREZHET
            TransportPairs.Add(new TransportPair(1, 0268, 0506 )); //	Mi-8T
            TransportPairs.Add(new TransportPair(1, 0268, 0507 )); //	Mi-8TV
            TransportPairs.Add(new TransportPair(1, 0268, 0486 )); //	Mi-8MTV
            TransportPairs.Add(new TransportPair(1, 0215, 0079 )); //PTUR KONKURS	BTR-60PB
            TransportPairs.Add(new TransportPair(1, 0215, 0080 )); //	BTR-70
            TransportPairs.Add(new TransportPair(1, 0215, 0172 )); //	MT-LBV
            TransportPairs.Add(new TransportPair(1, 0215, 0095 )); //	BTR-D
            TransportPairs.Add(new TransportPair(1, 0215, 0096 )); //	BTR-RD ROBOT
            TransportPairs.Add(new TransportPair(1, 0215, 0097 )); //	BTR-ZD SKREZHET
            TransportPairs.Add(new TransportPair(1, 0215, 0506 )); //	Mi-8T
            TransportPairs.Add(new TransportPair(1, 0215, 0507 )); //	Mi-8TV
            TransportPairs.Add(new TransportPair(1, 0215, 0486 )); //	Mi-8MTV
            TransportPairs.Add(new TransportPair(1, 0388, 0079 )); //PTUR KONKURS-M	BTR-60PB
            TransportPairs.Add(new TransportPair(1, 0388, 0080 )); //	BTR-70
            TransportPairs.Add(new TransportPair(1, 0388, 0172 )); //	MT-LBV
            TransportPairs.Add(new TransportPair(1, 0388, 0095 )); //	BTR-D
            TransportPairs.Add(new TransportPair(1, 0388, 0096 )); //	BTR-RD ROBOT
            TransportPairs.Add(new TransportPair(1, 0388, 0097 )); //	BTR-ZD SKREZHET
            TransportPairs.Add(new TransportPair(1, 0388, 0506 )); //	Mi-8T
            TransportPairs.Add(new TransportPair(1, 0388, 0507 )); //	Mi-8TV
            TransportPairs.Add(new TransportPair(1, 0388, 0486 )); //	Mi-8MTV
            TransportPairs.Add(new TransportPair(1, 0223, 0079 )); //PZRK IGLA	BTR-60PB
            TransportPairs.Add(new TransportPair(1, 0223, 0080 )); //	BTR-70
            TransportPairs.Add(new TransportPair(1, 0223, 0172 )); //	MT-LBV
            TransportPairs.Add(new TransportPair(1, 0223, 0095 )); //	BTR-D
            TransportPairs.Add(new TransportPair(1, 0223, 0096 )); //	BTR-RD ROBOT
            TransportPairs.Add(new TransportPair(1, 0223, 0097 )); //	BTR-ZD SKREZHET
            TransportPairs.Add(new TransportPair(1, 0223, 0506 )); //	Mi-8T
            TransportPairs.Add(new TransportPair(1, 0223, 0507 )); //	Mi-8TV
            TransportPairs.Add(new TransportPair(1, 0223, 0486 )); //	Mi-8MTV
            TransportPairs.Add(new TransportPair(1, 0387, 0079 )); //PZRK IGLA-N	BTR-60PB
            TransportPairs.Add(new TransportPair(1, 0387, 0080 )); //	BTR-70
            TransportPairs.Add(new TransportPair(1, 0387, 0172 )); //	MT-LBV
            TransportPairs.Add(new TransportPair(1, 0387, 0095 )); //	BTR-D
            TransportPairs.Add(new TransportPair(1, 0387, 0096 )); //	BTR-RD ROBOT
            TransportPairs.Add(new TransportPair(1, 0387, 0097 )); //	BTR-ZD SKREZHET
            TransportPairs.Add(new TransportPair(1, 0387, 0506 )); //	Mi-8T
            TransportPairs.Add(new TransportPair(1, 0387, 0507 )); //	Mi-8TV
            TransportPairs.Add(new TransportPair(1, 0387, 0486 )); //	Mi-8MTV
            TransportPairs.Add(new TransportPair(1, 0225, 0079 )); //PZRK STRELA-3	BTR-60PB
            TransportPairs.Add(new TransportPair(1, 0225, 0080 )); //	BTR-70
            TransportPairs.Add(new TransportPair(1, 0225, 0172 )); //	MT-LBV
            TransportPairs.Add(new TransportPair(1, 0225, 0095 )); //	BTR-D
            TransportPairs.Add(new TransportPair(1, 0225, 0096 )); //	BTR-RD ROBOT
            TransportPairs.Add(new TransportPair(1, 0225, 0097 )); //	BTR-ZD SKREZHET
            TransportPairs.Add(new TransportPair(1, 0225, 0506 )); //	Mi-8T
            TransportPairs.Add(new TransportPair(1, 0225, 0507 )); //	Mi-8TV
            TransportPairs.Add(new TransportPair(1, 0225, 0486 )); //	Mi-8MTV
            TransportPairs.Add(new TransportPair(1, 0231, 0389 )); //RAZVEDKA #reco2	URAL-375D
            TransportPairs.Add(new TransportPair(1, 0231, 0079 )); //	BTR-60PB
            TransportPairs.Add(new TransportPair(1, 0231, 0080 )); //	BTR-70
            TransportPairs.Add(new TransportPair(1, 0231, 0172 )); //	MT-LBV
            TransportPairs.Add(new TransportPair(1, 0231, 0506 )); //	Mi-8T
            TransportPairs.Add(new TransportPair(1, 0231, 0507 )); //	Mi-8TV
            TransportPairs.Add(new TransportPair(1, 0231, 0486 )); //	Mi-8MTV
            TransportPairs.Add(new TransportPair(1, 0231, 0487 )); //	Mi-24A
            TransportPairs.Add(new TransportPair(1, 0231, 0489 )); //	Mi-24D
            TransportPairs.Add(new TransportPair(1, 0259, 0079 )); //SAPERY	BTR-60PB
            TransportPairs.Add(new TransportPair(1, 0259, 0080 )); //	BTR-70
            TransportPairs.Add(new TransportPair(1, 0259, 0172 )); //	MT-LBV
            TransportPairs.Add(new TransportPair(1, 0259, 0095 )); //	BTR-D
            TransportPairs.Add(new TransportPair(1, 0259, 0096 )); //	BTR-RD ROBOT
            TransportPairs.Add(new TransportPair(1, 0259, 0097 )); //	BTR-ZD SKREZHET
            TransportPairs.Add(new TransportPair(1, 0259, 0087 )); //	BTR-T
            TransportPairs.Add(new TransportPair(1, 0259, 0506 )); //	Mi-8T
            TransportPairs.Add(new TransportPair(1, 0259, 0507 )); //	Mi-8TV
            TransportPairs.Add(new TransportPair(1, 0259, 0486 )); //	Mi-8MTV
            TransportPairs.Add(new TransportPair(1, 0628, 0079 )); //SAPERY '85	BTR-60PB
            TransportPairs.Add(new TransportPair(1, 0628, 0080 )); //	BTR-70
            TransportPairs.Add(new TransportPair(1, 0628, 0172 )); //	MT-LBV
            TransportPairs.Add(new TransportPair(1, 0628, 0095 )); //	BTR-D
            TransportPairs.Add(new TransportPair(1, 0628, 0096 )); //	BTR-RD ROBOT
            TransportPairs.Add(new TransportPair(1, 0628, 0097 )); //	BTR-ZD SKREZHET
            TransportPairs.Add(new TransportPair(1, 0628, 0087 )); //	BTR-T
            TransportPairs.Add(new TransportPair(1, 0628, 0506 )); //	Mi-8T
            TransportPairs.Add(new TransportPair(1, 0628, 0507 )); //	Mi-8TV
            TransportPairs.Add(new TransportPair(1, 0628, 0486 )); //	Mi-8MTV
            TransportPairs.Add(new TransportPair(1, 0269, 0079 )); //SPETSNAZ	BTR-60PB
            TransportPairs.Add(new TransportPair(1, 0269, 0080 )); //	BTR-70
            TransportPairs.Add(new TransportPair(1, 0269, 0083 )); //	BTR-80
            TransportPairs.Add(new TransportPair(1, 0269, 0085 )); //	BTR-80A
            TransportPairs.Add(new TransportPair(1, 0269, 0086 )); //	BTR-90
            TransportPairs.Add(new TransportPair(1, 0269, 0095 )); //	BTR-D
            TransportPairs.Add(new TransportPair(1, 0269, 0096 )); //	BTR-RD ROBOT
            TransportPairs.Add(new TransportPair(1, 0269, 0097 )); //	BTR-ZD SKREZHET
            TransportPairs.Add(new TransportPair(1, 0269, 0506 )); //	Mi-8T
            TransportPairs.Add(new TransportPair(1, 0269, 0507 )); //	Mi-8TV
            TransportPairs.Add(new TransportPair(1, 0269, 0486 )); //	Mi-8MTV
            TransportPairs.Add(new TransportPair(1, 0269, 0487 )); //	Mi-24A
            TransportPairs.Add(new TransportPair(1, 0269, 0489 )); //	Mi-24D
            TransportPairs.Add(new TransportPair(1, 0723, 0389 )); //SPETSNAZ GRU #reco2	URAL-375D
            TransportPairs.Add(new TransportPair(1, 0723, 0172 )); //	MT-LBV
            TransportPairs.Add(new TransportPair(1, 0723, 0079 )); //	BTR-60PB
            TransportPairs.Add(new TransportPair(1, 0723, 0080 )); //	BTR-70
            TransportPairs.Add(new TransportPair(1, 0723, 0083 )); //	BTR-80
            TransportPairs.Add(new TransportPair(1, 0723, 0085 )); //	BTR-80A
            TransportPairs.Add(new TransportPair(1, 0723, 0086 )); //	BTR-90
            TransportPairs.Add(new TransportPair(1, 0723, 0487 )); //	Mi-24A
            TransportPairs.Add(new TransportPair(1, 0723, 0489 )); //	Mi-24D
            TransportPairs.Add(new TransportPair(1, 0270, 0389 )); //SPETSNAZ VMF #reco2	URAL-375D
            TransportPairs.Add(new TransportPair(1, 0270, 0079 )); //	BTR-60PB
            TransportPairs.Add(new TransportPair(1, 0270, 0080 )); //	BTR-70
            TransportPairs.Add(new TransportPair(1, 0270, 0083 )); //	BTR-80
            TransportPairs.Add(new TransportPair(1, 0270, 0085 )); //	BTR-80A
            TransportPairs.Add(new TransportPair(1, 0270, 0086 )); //	BTR-90
            TransportPairs.Add(new TransportPair(1, 0270, 0464 )); //	Ka-29TB
            TransportPairs.Add(new TransportPair(1, 0270, 0487 )); //	Mi-24A
            TransportPairs.Add(new TransportPair(1, 0270, 0489 )); //	Mi-24D
            TransportPairs.Add(new TransportPair(1, 0392, 0095 )); //VDV	BTR-D
            TransportPairs.Add(new TransportPair(1, 0392, 0096 )); //	BTR-RD ROBOT
            TransportPairs.Add(new TransportPair(1, 0392, 0097 )); //	BTR-ZD SKREZHET
            TransportPairs.Add(new TransportPair(1, 0392, 0506 )); //	Mi-8T
            TransportPairs.Add(new TransportPair(1, 0392, 0507 )); //	Mi-8TV
            TransportPairs.Add(new TransportPair(1, 0392, 0486 )); //	Mi-8MTV
            TransportPairs.Add(new TransportPair(1, 0392, 0034 )); //	BMD-1
            TransportPairs.Add(new TransportPair(1, 0392, 0033 )); //	BMD-1P
            TransportPairs.Add(new TransportPair(1, 0392, 0036 )); //	BMD-2
            TransportPairs.Add(new TransportPair(1, 0392, 0037 )); //	BMD-3
            TransportPairs.Add(new TransportPair(1, 0631, 0095 )); //VDV '90	BTR-D
            TransportPairs.Add(new TransportPair(1, 0631, 0096 )); //	BTR-RD ROBOT
            TransportPairs.Add(new TransportPair(1, 0631, 0097 )); //	BTR-ZD SKREZHET
            TransportPairs.Add(new TransportPair(1, 0631, 0506 )); //	Mi-8T
            TransportPairs.Add(new TransportPair(1, 0631, 0507 )); //	Mi-8TV
            TransportPairs.Add(new TransportPair(1, 0631, 0486 )); //	Mi-8MTV
            TransportPairs.Add(new TransportPair(1, 0631, 0034 )); //	BMD-1
            TransportPairs.Add(new TransportPair(1, 0631, 0033 )); //	BMD-1P
            TransportPairs.Add(new TransportPair(1, 0631, 0036 )); //	BMD-2
            TransportPairs.Add(new TransportPair(1, 0631, 0037 ));	//	BMD-3
			
        }
    }
}
