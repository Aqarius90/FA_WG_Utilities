using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows;

namespace FADeckBuilder
{
    class Dictionaries
    {
        public Dictionary<char, int> UTFlook = new Dictionary<char, int>();
        public Dictionary<string, char> B36look = new Dictionary<string, char>();
        public Dictionary<int, string> NATlook = new Dictionary<int, string>();
        public Dictionary<int, string> SPClook = new Dictionary<int, string>();
        public Dictionary<int, string> ERAlook = new Dictionary<int, string>();
        public Dictionary<int, string> UNIlook = new Dictionary<int, string>();
        public Dictionary<int, string> VETlook = new Dictionary<int, string>();

        public Dictionaries()
        {
            buildUTF();
            buildNAT();
            buildSPC();
            buildERA();
            buildVET();
            buildB36();

        }

        public void buildUTF()
        {
            UTFlook.Add('A', 0);
            UTFlook.Add('B', 1);
            UTFlook.Add('C', 2);
            UTFlook.Add('D', 3);
            UTFlook.Add('E', 4);
            UTFlook.Add('F', 5);
            UTFlook.Add('G', 6);
            UTFlook.Add('H', 7);
            UTFlook.Add('I', 8);
            UTFlook.Add('J', 9);
            UTFlook.Add('K', 10);
            UTFlook.Add('L', 11);
            UTFlook.Add('M', 12);
            UTFlook.Add('N', 13);
            UTFlook.Add('O', 14);
            UTFlook.Add('P', 15);
            UTFlook.Add('Q', 16);
            UTFlook.Add('R', 17);
            UTFlook.Add('S', 18);
            UTFlook.Add('T', 19);
            UTFlook.Add('U', 20);
            UTFlook.Add('V', 21);
            UTFlook.Add('W', 22);
            UTFlook.Add('X', 23);
            UTFlook.Add('Y', 24);
            UTFlook.Add('Z', 25);
            UTFlook.Add('a', 26);
            UTFlook.Add('b', 27);
            UTFlook.Add('c', 28);
            UTFlook.Add('d', 29);
            UTFlook.Add('e', 30);
            UTFlook.Add('f', 31);
            UTFlook.Add('g', 32);
            UTFlook.Add('h', 33);
            UTFlook.Add('i', 34);
            UTFlook.Add('j', 35);
            UTFlook.Add('k', 36);
            UTFlook.Add('l', 37);
            UTFlook.Add('m', 38);
            UTFlook.Add('n', 39);
            UTFlook.Add('o', 40);
            UTFlook.Add('p', 41);
            UTFlook.Add('q', 42);
            UTFlook.Add('r', 43);
            UTFlook.Add('s', 44);
            UTFlook.Add('t', 45);
            UTFlook.Add('u', 46);
            UTFlook.Add('v', 47);
            UTFlook.Add('w', 48);
            UTFlook.Add('x', 49);
            UTFlook.Add('y', 50);
            UTFlook.Add('z', 51);
            UTFlook.Add('0', 52);
            UTFlook.Add('1', 53);
            UTFlook.Add('2', 54);
            UTFlook.Add('3', 55);
            UTFlook.Add('4', 56);
            UTFlook.Add('5', 57);
            UTFlook.Add('6', 58);
            UTFlook.Add('7', 59);
            UTFlook.Add('8', 60);
            UTFlook.Add('9', 61);
            UTFlook.Add('+', 62);
            UTFlook.Add('/', 63);
        }

        public void buildB36()
        {
            B36look.Add("000000", 'A');
            B36look.Add("000001", 'B');
            B36look.Add("000010", 'C');
            B36look.Add("000011", 'D');
            B36look.Add("000100", 'E');
            B36look.Add("000101", 'F');
            B36look.Add("000110", 'G');
            B36look.Add("000111", 'H');
            B36look.Add("001000", 'I');
            B36look.Add("001001", 'J');
            B36look.Add("001010", 'K');
            B36look.Add("001011", 'L');
            B36look.Add("001100", 'M');
            B36look.Add("001101", 'N');
            B36look.Add("001110", 'O');
            B36look.Add("001111", 'P');
            B36look.Add("010000", 'Q');
            B36look.Add("010001", 'R');
            B36look.Add("010010", 'S');
            B36look.Add("010011", 'T');
            B36look.Add("010100", 'U');
            B36look.Add("010101", 'V');
            B36look.Add("010110", 'W');
            B36look.Add("010111", 'X');
            B36look.Add("011000", 'Y');
            B36look.Add("011001", 'Z');
            B36look.Add("011010", 'a');
            B36look.Add("011011", 'b');
            B36look.Add("011100", 'c');
            B36look.Add("011101", 'd');
            B36look.Add("011110", 'e');
            B36look.Add("011111", 'f');
            B36look.Add("100000", 'g');
            B36look.Add("100001", 'h');
            B36look.Add("100010", 'i');
            B36look.Add("100011", 'j');
            B36look.Add("100100", 'k');
            B36look.Add("100101", 'l');
            B36look.Add("100110", 'm');
            B36look.Add("100111", 'n');
            B36look.Add("101000", 'o');
            B36look.Add("101001", 'p');
            B36look.Add("101010", 'q');
            B36look.Add("101011", 'r');
            B36look.Add("101100", 's');
            B36look.Add("101101", 't');
            B36look.Add("101110", 'u');
            B36look.Add("101111", 'v');
            B36look.Add("110000", 'w');
            B36look.Add("110001", 'x');
            B36look.Add("110010", 'y');
            B36look.Add("110011", 'z');
            B36look.Add("110100", '0');
            B36look.Add("110101", '1');
            B36look.Add("110110", '2');
            B36look.Add("110111", '3');
            B36look.Add("111000", '4');
            B36look.Add("111001", '5');
            B36look.Add("111010", '6');
            B36look.Add("111011", '7');
            B36look.Add("111100", '8');
            B36look.Add("111101", '9');
            B36look.Add("111110", '+');
            B36look.Add("111111", '/');
        }

        public void buildNAT()
        {
            NATlook.Add(10, "USA");		
            NATlook.Add(26, "UK");
            NATlook.Add(42, "FRA");
            NATlook.Add(58, "BRD");
            NATlook.Add(74, "CAN");
            NATlook.Add(90, "DEN");
            NATlook.Add(106, "SWE");
            NATlook.Add(122, "NOR");
            NATlook.Add(138, "ANZAC");
            NATlook.Add(154, "JAP");
            NATlook.Add(170, "ROK");
            NATlook.Add(186, "NED");
            NATlook.Add(192, "EU");
            NATlook.Add(193, "SCA");
            NATlook.Add(194, "CW");
            NATlook.Add(195, "BD");
            NATlook.Add(198, "LJUT");
            NATlook.Add(200, "NORAD");
            NATlook.Add(201, "BDRNL");
            NATlook.Add(202, "NATO");
            NATlook.Add(266, "DDR");
            NATlook.Add(282, "USSR");
            NATlook.Add(298, "POL");
            NATlook.Add(314, "CZS");  
            NATlook.Add(330, "PRC");  
            NATlook.Add(346, "DPRK"); 
            NATlook.Add(356, "RD");
            NATlook.Add(357, "NSWP");
            NATlook.Add(359, "SOVKOR");
            NATlook.Add(362, "REDFOR");
        }

        public void buildSPC()
        {
            SPClook.Add(0, "MOTO");
            SPClook.Add(1, "ARM");
            SPClook.Add(2, "SUP");
            SPClook.Add(3, "MAR");
            SPClook.Add(4, "MECH");
            SPClook.Add(5, "AIR");
            SPClook.Add(6, "NAV");
            SPClook.Add(7, "GEN");
        }

        public void buildERA()
        {
            ERAlook.Add(0, "C");
            ERAlook.Add(1, "B");
            ERAlook.Add(2, "A");
        }

        public void buildVET()
        {
            VETlook.Add(0, "Rookie");
            VETlook.Add(1, "Trained");
            VETlook.Add(2, "Hardened");
            VETlook.Add(3, "Veteran");
            VETlook.Add(4, "Elite");
        }

        public char[] lookupUTF(char[] caArray) //string to binary
        {
            string sDeck = null;
            foreach (char x in caArray)
            {
                if (UTFlook.ContainsKey(x)== true)
                {
                    int value = UTFlook[x];
                    sDeck += Convert.ToString(value, 2).PadLeft(6, '0');
                }
            }
            try
            {
                char[] caOut = sDeck.ToCharArray();
                return caOut;
            }
            catch
            {
                MessageBox.Show("code error - invalid code");
                return new char[] { '0', '1', '1', '0', '0', '0', '0', '1', '1', '1', '1', '1', '1', '0', '0', '0', '0', '0', '0', '1', '0', '0', '0', '0' };
            }
        }

        public string lookupB36(char[] caBinary)
        {
            string s36 = null, s6stack = null;
            int i4s=0, i6s=0, i8s=0;
            /*          **EUGEN** deck decoding
             * ->bin blob grouped into bytes (8bit, padded to 0), back to bin blob
             * ->new bin blob cut to 6bits, converted to chars, then grouped by 4 (= as padding)             
            */
            foreach (char x in caBinary)
            {
                i8s++;
                i6s++;
                s6stack += x.ToString();
                if (i8s == 8)
                {
                    i8s = 0;
                }
                if (i6s == 6)
                {
                    i6s = 0;
                    s36 += B36look[s6stack].ToString();
                    s6stack = null;
                    i4s++;
                    if (i4s == 4)
                    {
                        i4s = 0;
                    }
                }
            }
            while (i8s != 0)
            {
                i8s++;
                i6s++;
                s6stack += "0";
                if (i8s == 8)
                {
                    i8s = 0;
                }
                if (i6s == 6)
                {
                    i6s = 0;
                    s36 += B36look[s6stack].ToString();
                    s6stack = null;
                    i4s++;
                    if (i4s == 4)
                    {
                        i4s = 0;
                    }
                }
            }
            while (i6s != 0)
            {
                i6s++;
                s6stack += "0";
                if (i8s == 8)
                {
                    i8s = 0;
                }
                if (i6s == 6)
                {
                    i6s = 0;
                    s36 += B36look[s6stack].ToString();
                    s6stack = null;
                    i4s++;
                    if (i4s == 4)
                    {
                        i4s = 0;
                    }
                }
            }
            while (i4s != 0)
            {
                s36 += "=";
                i4s++;
                if (i4s == 4)
                {
                    i4s = 0;
                }
            }
            return s36;
        }

        public string lookupNAT(int i)
        {
            if (NATlook.ContainsKey(i))
            {
                return NATlook[i];
            }
            else
            {
                return "INVALID";
            }
        }

        public string lookupSPEC(int i)
        {
            if (SPClook.ContainsKey(i))
            {
                return SPClook[i];
            }
            else
            {
                return "INVALID";
            }
        }

        public string lookupERA(int i)
        {
            if (ERAlook.ContainsKey(i))
            {
                return ERAlook[i];
            }
            else
            {
                return "INVALID";
            }
        }

        public string lookupVET(int i)
        {
            if (VETlook.ContainsKey(i))
            {
                return VETlook[i];
            }
            else
            {
                return "INVALID";
            }
        }
    }
}
