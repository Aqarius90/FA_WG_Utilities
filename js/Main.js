//var Dicts = new Dictionaries();
function init() {
    window.Deck = new DeckAssembly();
    window.CardsDB = new Array(1024);
    for (var i = 0; i < 1025; i++) {
    CardsDB[i]=Array(2);
    }
    initMainDB();
    //window.Page = new ModelGUI();
    window.selectedCards = [];
}

function btDecode()
{
    debugClear();
    DeckDisAssembly();
    GUIDisplay();
    DeckExport();
}

function btClear()
{
    Deck = new DeckAssembly();
    console.log(Deck);
    GUIDisplay();
    //txtEncodeDeck.Text = MasterDeck.DeckExport(MasterDeck);
}

/*
        List<VehicleCard> decklist { get; set; }
        ObservableCollection<deckRow> LOGLIST = new ObservableCollection<deckRow>();
        ObservableCollection<deckRow> INFLIST = new ObservableCollection<deckRow>();
        ObservableCollection<deckRow> SUPLIST = new ObservableCollection<deckRow>();
        ObservableCollection<deckRow> TNKLIST = new ObservableCollection<deckRow>();
        ObservableCollection<deckRow> RECLIST = new ObservableCollection<deckRow>();
        ObservableCollection<deckRow> VEHLIST = new ObservableCollection<deckRow>();
        ObservableCollection<deckRow> HELLIST = new ObservableCollection<deckRow>();
        ObservableCollection<deckRow> AIRLIST = new ObservableCollection<deckRow>();
        SpecMatrix MainMatrix = new SpecMatrix();
*/

/*
        private void listUnits(List<VehicleCard> dcUnits) //available units datagrid
        {
            foreach (VehicleCard x in dcUnits)
            {
                if (x != null)
                {
                    var DeckRow = new deckRow();
                    DeckRow.UID = x.Unit.iUnitID.ToString();
                    DeckRow.Name = x.Unit.sNameU;
                    DeckRow.Nation = x.sNation;
                    DeckRow.vet0 = x.iaAvailability[0];
                    DeckRow.vet1 = x.iaAvailability[1];
                    DeckRow.vet2 = x.iaAvailability[2];
                    DeckRow.vet3 = x.iaAvailability[3];
                    DeckRow.vet4 = x.iaAvailability[4];
                    DeckRow.Cost = x.iCost;
                    DeckRow.iCards = MasterDeck.Cards0T.Count(element => (element != null && element.Unit.iUnitID == x.Unit.iUnitID));//
                    DeckRow.iCards += MasterDeck.Cards1T.Count(element => (element != null && element.Unit.iUnitID == x.Unit.iUnitID));//one is 0
                    DeckRow.Cards = (x.Unit.iCards - DeckRow.iCards) + "/" + x.Unit.iCards;
                    DeckRow.iCards -= x.Unit.iCards;
                    if (x.Transport != null)
                    {
                        DeckRow.iTCards = MasterDeck.Cards1T.Count(element => (element != null && element.Transport.iUnitID == x.Transport.iUnitID));
                        DeckRow.Transport = x.Transport.sNameU;
                        DeckRow.TID = x.Transport.iUnitID.ToString();
                        DeckRow.TCards = (x.Transport.iCards - DeckRow.iTCards) + "/" + x.Transport.iCards;
                        DeckRow.iTCards -= x.Transport.iCards;
                    }
                    else
                    {
                        DeckRow.TID = "0";
                    }

                    char[] caData = x.Unit.caUnitData;
                    if (caData[4] == '0')
                    {
                        if (caData[17] == '1')//logi
                        {
                            if (MasterDeck.sSpec == "SUP")
                            {
                                DeckRow.vet4 = DeckRow.vet3;
                                DeckRow.vet3 = DeckRow.vet2;
                                DeckRow.vet2 = DeckRow.vet1;
                                DeckRow.vet1 = DeckRow.vet0;
                                DeckRow.vet0 = 0;
                            }
                            LOGLIST.Add(DeckRow);
                        }
                        else if (caData[18] == '1') // INF
                        {
                            if (MasterDeck.sSpec == "MOTO" || MasterDeck.sSpec == "MECH" || MasterDeck.sSpec == "MAR" || MasterDeck.sSpec == "AIR")
                            {
                                DeckRow.vet4 = DeckRow.vet3;
                                DeckRow.vet3 = DeckRow.vet2;
                                DeckRow.vet2 = DeckRow.vet1;
                                DeckRow.vet1 = DeckRow.vet0;
                                DeckRow.vet0 = 0;
                            }
                            INFLIST.Add(DeckRow);
                        }
                        else if (caData[19] == '1') // support
                        {
                            if (MasterDeck.sSpec == "SUP")
                            {
                                DeckRow.vet4 = DeckRow.vet3;
                                DeckRow.vet3 = DeckRow.vet2;
                                DeckRow.vet2 = DeckRow.vet1;
                                DeckRow.vet1 = DeckRow.vet0;
                                DeckRow.vet0 = 0;
                            }
                            SUPLIST.Add(DeckRow);
                        }
                        else if (caData[20] == '1') // tanks
                        {
                            if (MasterDeck.sSpec == "ARM")
                            {
                                DeckRow.vet4 = DeckRow.vet2;
                                DeckRow.vet3 = DeckRow.vet1;
                                DeckRow.vet2 = DeckRow.vet0;
                                DeckRow.vet1 = 0;
                                DeckRow.vet0 = 0;
                            }
                            TNKLIST.Add(DeckRow);
                        }
                        else if (caData[21] == '1')
                        {
                            if (MasterDeck.sSpec == "REC")
                            {
                                DeckRow.vet4 = DeckRow.vet3;
                                DeckRow.vet3 = DeckRow.vet2;
                                DeckRow.vet2 = DeckRow.vet1;
                                DeckRow.vet1 = DeckRow.vet0;
                                DeckRow.vet0 = 0;
                            }
                            RECLIST.Add(DeckRow);
                        }
                        else if (caData[22] == '1')
                        {
                            if (MasterDeck.sSpec == "MECH" || MasterDeck.sSpec == "MOTO")
                            {
                                DeckRow.vet4 = DeckRow.vet3;
                                DeckRow.vet3 = DeckRow.vet2;
                                DeckRow.vet2 = DeckRow.vet1;
                                DeckRow.vet1 = DeckRow.vet0;
                                DeckRow.vet0 = 0;
                            }
                            VEHLIST.Add(DeckRow);
                        }
                        else if (caData[23] == '1')
                        {
                            if (MasterDeck.sSpec == "AIR")
                            {
                                DeckRow.vet4 = DeckRow.vet3;
                                DeckRow.vet3 = DeckRow.vet2;
                                DeckRow.vet2 = DeckRow.vet1;
                                DeckRow.vet1 = DeckRow.vet0;
                                DeckRow.vet0 = 0;
                            }
                            HELLIST.Add(DeckRow);
                        }
                        else if (caData[24] == '1')
                        {
                            if (MasterDeck.sSpec == "MAR" || MasterDeck.sSpec == "AIR")
                            {
                                DeckRow.vet4 = DeckRow.vet3;
                                DeckRow.vet3 = DeckRow.vet2;
                                DeckRow.vet2 = DeckRow.vet1;
                                DeckRow.vet1 = DeckRow.vet0;
                                DeckRow.vet0 = 0;
                            }
                            AIRLIST.Add(DeckRow);
                        }
                    }
                }
            }
        }

        private void resetEncodeDGVs()
        {
            LOGLIST.Clear();
            INFLIST.Clear();
            SUPLIST.Clear();
            TNKLIST.Clear();
            RECLIST.Clear();
            VEHLIST.Clear();
            HELLIST.Clear();
            AIRLIST.Clear();
            dgDeckLog.ItemsSource = LOGLIST;
            dgDeckInf.ItemsSource = INFLIST;
            dgDeckSup.ItemsSource = SUPLIST;
            dgDeckTnk.ItemsSource = TNKLIST;
            dgDeckRec.ItemsSource = RECLIST;
            dgDeckVeh.ItemsSource = VEHLIST;
            dgDeckHel.ItemsSource = HELLIST;
            dgDeckAir.ItemsSource = AIRLIST;
        }

        #endregion encode flag displays, list units per nation
*/
/*
        #region ENCODE SELECT LAND
        //BLU RED BD CW EU LJ NORAD SCA NSWP RD RKA  ANZAC BRD CAN DEN FRA JAP NED NOR  ROK SWE UK USA  CZS DDR DPRK POL PRC USSR
        private void btNATO_Click(object sender, RoutedEventArgs e)
        {
            MasterDeck.sSide = "BLU";
            MasterDeck.iSide = 0;
            MasterDeck.sNation = "NATO";
            GUIDisplay(MasterDeck);
            txtEncodeDeck.Text = MasterDeck.DeckExport(MasterDeck);
            //displayNato();
        }
        private void btREDFOR_Click(object sender, RoutedEventArgs e)
        {
            MasterDeck.sSide = "RED";
            MasterDeck.iSide = 1;
            MasterDeck.sNation = "REDFOR";
            GUIDisplay(MasterDeck);
            txtEncodeDeck.Text = MasterDeck.DeckExport(MasterDeck);
        }
        private void btBD_Click(object sender, RoutedEventArgs e)
        {
            MasterDeck.sSide = "BLU";
            MasterDeck.iSide = 0;
            MasterDeck.sNation = "BD";
            GUIDisplay(MasterDeck);
            txtEncodeDeck.Text = MasterDeck.DeckExport(MasterDeck);
        }
        private void btCOM_Click(object sender, RoutedEventArgs e)
        {
            MasterDeck.sSide = "BLU";
            MasterDeck.iSide = 0;
            MasterDeck.sNation = "CW";
            GUIDisplay(MasterDeck);
            txtEncodeDeck.Text = MasterDeck.DeckExport(MasterDeck);
        }
        private void btEU_Click(object sender, RoutedEventArgs e)
        {
            MasterDeck.sSide = "BLU";
            MasterDeck.iSide = 0;
            MasterDeck.sNation = "EU";
            GUIDisplay(MasterDeck);
            txtEncodeDeck.Text = MasterDeck.DeckExport(MasterDeck);
        }
        private void btLJ_Click(object sender, RoutedEventArgs e)
        {
            MasterDeck.sSide = "BLU";
            MasterDeck.iSide = 0;
            MasterDeck.sNation = "LJUT";
            GUIDisplay(MasterDeck);
            txtEncodeDeck.Text = MasterDeck.DeckExport(MasterDeck);
        }
        private void btDutch_Click(object sender, RoutedEventArgs e)
        {
            MasterDeck.sSide = "BLU";
            MasterDeck.iSide = 0;
            MasterDeck.sNation = "BDRNL";
            GUIDisplay(MasterDeck);
            txtEncodeDeck.Text = MasterDeck.DeckExport(MasterDeck);
        }
        private void btNORAD_Click(object sender, RoutedEventArgs e)
        {
            MasterDeck.sSide = "BLU";
            MasterDeck.iSide = 0;
            MasterDeck.sNation = "NORAD";
            GUIDisplay(MasterDeck);
            txtEncodeDeck.Text = MasterDeck.DeckExport(MasterDeck);
        }
        private void btSCA_Click(object sender, RoutedEventArgs e)
        {
            MasterDeck.sSide = "BLU";
            MasterDeck.iSide = 0;
            MasterDeck.sNation = "SCA";
            GUIDisplay(MasterDeck);
            txtEncodeDeck.Text = MasterDeck.DeckExport(MasterDeck);
        }
        private void btNSWP_Click(object sender, RoutedEventArgs e)
        {
            MasterDeck.sSide = "RED";
            MasterDeck.iSide = 1;
            MasterDeck.sNation = "NSWP";
            GUIDisplay(MasterDeck);
            txtEncodeDeck.Text = MasterDeck.DeckExport(MasterDeck);
        }
        private void btRD_Click(object sender, RoutedEventArgs e)
        {
            MasterDeck.sSide = "RED";
            MasterDeck.iSide = 1;
            MasterDeck.sNation = "RD";
            GUIDisplay(MasterDeck);
            txtEncodeDeck.Text = MasterDeck.DeckExport(MasterDeck);
        }
        private void btRKA_Click(object sender, RoutedEventArgs e)
        {
            MasterDeck.sSide = "RED";
            MasterDeck.iSide = 1;
            MasterDeck.sNation = "SOVKOR";
            GUIDisplay(MasterDeck);
            txtEncodeDeck.Text = MasterDeck.DeckExport(MasterDeck);
        }
        private void btANZAC_Click(object sender, RoutedEventArgs e)
        {
            MasterDeck.sSide = "BLU";
            MasterDeck.iSide = 0;
            MasterDeck.sNation = "ANZAC";
            GUIDisplay(MasterDeck);
            txtEncodeDeck.Text = MasterDeck.DeckExport(MasterDeck);
        }
        private void btBRD_Click(object sender, RoutedEventArgs e)
        {
            MasterDeck.sSide = "BLU";
            MasterDeck.iSide = 0;
            MasterDeck.sNation = "BRD";
            GUIDisplay(MasterDeck);
            txtEncodeDeck.Text = MasterDeck.DeckExport(MasterDeck);
        }
        private void btCAN_Click(object sender, RoutedEventArgs e)
        {
            MasterDeck.sSide = "BLU";
            MasterDeck.iSide = 0;
            MasterDeck.sNation = "CAN";
            GUIDisplay(MasterDeck);
            txtEncodeDeck.Text = MasterDeck.DeckExport(MasterDeck);
        }
        private void btDEN_Click(object sender, RoutedEventArgs e)
        {
            MasterDeck.sSide = "BLU";
            MasterDeck.iSide = 0;
            MasterDeck.sNation = "DEN";
            GUIDisplay(MasterDeck);
            txtEncodeDeck.Text = MasterDeck.DeckExport(MasterDeck);
        }
        private void btFRA_Click(object sender, RoutedEventArgs e)
        {
            MasterDeck.sSide = "BLU";
            MasterDeck.iSide = 0;
            MasterDeck.sNation = "FRA";
            GUIDisplay(MasterDeck);
            txtEncodeDeck.Text = MasterDeck.DeckExport(MasterDeck);
        }
        private void btJAP_Click(object sender, RoutedEventArgs e)
        {
            MasterDeck.sSide = "BLU";
            MasterDeck.iSide = 0;
            MasterDeck.sNation = "JAP";
            GUIDisplay(MasterDeck);
            txtEncodeDeck.Text = MasterDeck.DeckExport(MasterDeck);
        }
        private void btNED_Click(object sender, RoutedEventArgs e)
        {
            MasterDeck.sSide = "BLU";
            MasterDeck.iSide = 0;
            MasterDeck.sNation = "NED";
            GUIDisplay(MasterDeck);
            txtEncodeDeck.Text = MasterDeck.DeckExport(MasterDeck);
        }
        private void btNOR_Click(object sender, RoutedEventArgs e)
        {
            MasterDeck.sSide = "BLU";
            MasterDeck.iSide = 0;
            MasterDeck.sNation = "NOR";
            GUIDisplay(MasterDeck);
            txtEncodeDeck.Text = MasterDeck.DeckExport(MasterDeck);
        }
        private void btROK_Click(object sender, RoutedEventArgs e)
        {
            MasterDeck.sSide = "BLU";
            MasterDeck.iSide = 0;
            MasterDeck.sNation = "ROK";
            GUIDisplay(MasterDeck);
            txtEncodeDeck.Text = MasterDeck.DeckExport(MasterDeck);
        }
        private void btSWE_Click(object sender, RoutedEventArgs e)
        {
            MasterDeck.sSide = "BLU";
            MasterDeck.iSide = 0;
            MasterDeck.sNation = "SWE";
            GUIDisplay(MasterDeck);
            txtEncodeDeck.Text = MasterDeck.DeckExport(MasterDeck);
        }

        private void btUK_Click(object sender, RoutedEventArgs e)
        {
            MasterDeck.sSide = "BLU";
            MasterDeck.iSide = 0;
            MasterDeck.sNation = "UK";
            GUIDisplay(MasterDeck);
            txtEncodeDeck.Text = MasterDeck.DeckExport(MasterDeck);
        }

        private void btUSA_Click(object sender, RoutedEventArgs e)
        {
            MasterDeck.sSide = "BLU";
            MasterDeck.iSide = 0;
            MasterDeck.sNation = "USA";
            GUIDisplay(MasterDeck);
            txtEncodeDeck.Text = MasterDeck.DeckExport(MasterDeck);
        }*/

/*

        private void btCZS_Click(object sender, RoutedEventArgs e)
        {
            MasterDeck.sSide = "RED";
            MasterDeck.iSide = 1;
            MasterDeck.sNation = "CZS";
            GUIDisplay(MasterDeck);
            txtEncodeDeck.Text = MasterDeck.DeckExport(MasterDeck);
        }
        private void btDDR_Click(object sender, RoutedEventArgs e)
        {
            MasterDeck.sSide = "RED";
            MasterDeck.iSide = 1;
            MasterDeck.sNation = "DDR";
            GUIDisplay(MasterDeck);
            txtEncodeDeck.Text = MasterDeck.DeckExport(MasterDeck);
        }
        private void btDPRK_Click(object sender, RoutedEventArgs e)
        {
            MasterDeck.sSide = "RED";
            MasterDeck.iSide = 1;
            MasterDeck.sNation = "DPRK";
            GUIDisplay(MasterDeck);
            txtEncodeDeck.Text = MasterDeck.DeckExport(MasterDeck);
        }
        private void btPOL_Click(object sender, RoutedEventArgs e)
        {
            MasterDeck.sSide = "RED";
            MasterDeck.iSide = 1;
            MasterDeck.sNation = "POL";
            GUIDisplay(MasterDeck);
            txtEncodeDeck.Text = MasterDeck.DeckExport(MasterDeck);
        }

        private void btPRC_Click(object sender, RoutedEventArgs e)
        {
            MasterDeck.sSide = "RED";
            MasterDeck.iSide = 1;
            MasterDeck.sNation = "PRC";
            GUIDisplay(MasterDeck);
            txtEncodeDeck.Text = MasterDeck.DeckExport(MasterDeck);
        }

        private void btUSSR_Click(object sender, RoutedEventArgs e)
        {
            MasterDeck.sSide = "RED";
            MasterDeck.iSide = 1;
            MasterDeck.sNation = "USSR";
            GUIDisplay(MasterDeck);
            txtEncodeDeck.Text = MasterDeck.DeckExport(MasterDeck);
        }
        #endregion ENCODE SELECT LAND
*/

/*
        private void updatePointsDisplay(int[][] DA)
        {
            if (DA[1].Length > 0 && DA[1][0] != 0) { P200.Content = DA[1][0]; P200.Visibility = Visibility.Visible; P100.Content = DA[1][0]; P100.Visibility = Visibility.Visible; } else { P200.Visibility = Visibility.Hidden; P100.Visibility = Visibility.Hidden; }
            if (DA[1].Length > 1 && DA[1][1] != 0) { P201.Content = DA[1][1]; P201.Visibility = Visibility.Visible; P101.Content = DA[1][1]; P101.Visibility = Visibility.Visible; } else { P201.Visibility = Visibility.Hidden; P101.Visibility = Visibility.Hidden; }
            if (DA[1].Length > 2 && DA[1][2] != 0) { P202.Content = DA[1][2]; P202.Visibility = Visibility.Visible; P102.Content = DA[1][2]; P102.Visibility = Visibility.Visible; } else { P202.Visibility = Visibility.Hidden; P102.Visibility = Visibility.Hidden; }
            if (DA[1].Length > 3 && DA[1][3] != 0) { P203.Content = DA[1][3]; P203.Visibility = Visibility.Visible; P103.Content = DA[1][3]; P103.Visibility = Visibility.Visible; } else { P203.Visibility = Visibility.Hidden; P103.Visibility = Visibility.Hidden; }
            if (DA[1].Length > 4 && DA[1][4] != 0) { P204.Content = DA[1][4]; P204.Visibility = Visibility.Visible; P104.Content = DA[1][4]; P104.Visibility = Visibility.Visible; } else { P204.Visibility = Visibility.Hidden; P104.Visibility = Visibility.Hidden; }
            if (DA[1].Length > 5 && DA[1][5] != 0) { P205.Content = DA[1][5]; P205.Visibility = Visibility.Visible; P105.Content = DA[1][5]; P105.Visibility = Visibility.Visible; } else { P205.Visibility = Visibility.Hidden; P105.Visibility = Visibility.Hidden; }
            if (DA[1].Length > 6 && DA[1][6] != 0) { P206.Content = DA[1][6]; P206.Visibility = Visibility.Visible; P106.Content = DA[1][6]; P106.Visibility = Visibility.Visible; } else { P206.Visibility = Visibility.Hidden; P106.Visibility = Visibility.Hidden; }
            if (DA[1].Length > 7 && DA[1][7] != 0) { P207.Content = DA[1][7]; P207.Visibility = Visibility.Visible; P107.Content = DA[1][7]; P107.Visibility = Visibility.Visible; } else { P207.Visibility = Visibility.Hidden; P107.Visibility = Visibility.Hidden; }
            if (DA[1].Length > 8 && DA[1][8] != 0) { P208.Content = DA[1][8]; P208.Visibility = Visibility.Visible; P108.Content = DA[1][8]; P108.Visibility = Visibility.Visible; } else { P208.Visibility = Visibility.Hidden; P108.Visibility = Visibility.Hidden; }

            if (DA[2].Length > 0 && DA[2][0] != 0) { P210.Content = DA[2][0]; P210.Visibility = Visibility.Visible; P110.Content = DA[2][0]; P110.Visibility = Visibility.Visible; } else { P210.Visibility = Visibility.Hidden; P110.Visibility = Visibility.Hidden; }
            if (DA[2].Length > 1 && DA[2][1] != 0) { P211.Content = DA[2][1]; P211.Visibility = Visibility.Visible; P111.Content = DA[2][1]; P111.Visibility = Visibility.Visible; } else { P211.Visibility = Visibility.Hidden; P111.Visibility = Visibility.Hidden; }
            if (DA[2].Length > 2 && DA[2][2] != 0) { P212.Content = DA[2][2]; P212.Visibility = Visibility.Visible; P112.Content = DA[2][2]; P112.Visibility = Visibility.Visible; } else { P212.Visibility = Visibility.Hidden; P112.Visibility = Visibility.Hidden; }
            if (DA[2].Length > 3 && DA[2][3] != 0) { P213.Content = DA[2][3]; P213.Visibility = Visibility.Visible; P113.Content = DA[2][3]; P113.Visibility = Visibility.Visible; } else { P213.Visibility = Visibility.Hidden; P113.Visibility = Visibility.Hidden; }
            if (DA[2].Length > 4 && DA[2][4] != 0) { P214.Content = DA[2][4]; P214.Visibility = Visibility.Visible; P114.Content = DA[2][4]; P114.Visibility = Visibility.Visible; } else { P214.Visibility = Visibility.Hidden; P114.Visibility = Visibility.Hidden; }
            if (DA[2].Length > 5 && DA[2][5] != 0) { P215.Content = DA[2][5]; P215.Visibility = Visibility.Visible; P115.Content = DA[2][5]; P115.Visibility = Visibility.Visible; } else { P215.Visibility = Visibility.Hidden; P115.Visibility = Visibility.Hidden; }
            if (DA[2].Length > 6 && DA[2][6] != 0) { P216.Content = DA[2][6]; P216.Visibility = Visibility.Visible; P116.Content = DA[2][6]; P116.Visibility = Visibility.Visible; } else { P216.Visibility = Visibility.Hidden; P116.Visibility = Visibility.Hidden; }
            if (DA[2].Length > 7 && DA[2][7] != 0) { P217.Content = DA[2][7]; P217.Visibility = Visibility.Visible; P117.Content = DA[2][7]; P117.Visibility = Visibility.Visible; } else { P217.Visibility = Visibility.Hidden; P117.Visibility = Visibility.Hidden; }
            if (DA[2].Length > 8 && DA[2][8] != 0) { P218.Content = DA[2][8]; P218.Visibility = Visibility.Visible; P118.Content = DA[2][8]; P118.Visibility = Visibility.Visible; } else { P218.Visibility = Visibility.Hidden; P118.Visibility = Visibility.Hidden; }

            if (DA[3].Length > 0 && DA[3][0] != 0) { P220.Content = DA[3][0]; P220.Visibility = Visibility.Visible; P120.Content = DA[3][0]; P120.Visibility = Visibility.Visible; } else { P220.Visibility = Visibility.Hidden; P120.Visibility = Visibility.Hidden; }
            if (DA[3].Length > 1 && DA[3][1] != 0) { P221.Content = DA[3][1]; P221.Visibility = Visibility.Visible; P121.Content = DA[3][1]; P121.Visibility = Visibility.Visible; } else { P221.Visibility = Visibility.Hidden; P121.Visibility = Visibility.Hidden; }
            if (DA[3].Length > 2 && DA[3][2] != 0) { P222.Content = DA[3][2]; P222.Visibility = Visibility.Visible; P122.Content = DA[3][2]; P122.Visibility = Visibility.Visible; } else { P222.Visibility = Visibility.Hidden; P122.Visibility = Visibility.Hidden; }
            if (DA[3].Length > 3 && DA[3][3] != 0) { P223.Content = DA[3][3]; P223.Visibility = Visibility.Visible; P123.Content = DA[3][3]; P123.Visibility = Visibility.Visible; } else { P223.Visibility = Visibility.Hidden; P123.Visibility = Visibility.Hidden; }
            if (DA[3].Length > 4 && DA[3][4] != 0) { P224.Content = DA[3][4]; P224.Visibility = Visibility.Visible; P124.Content = DA[3][4]; P124.Visibility = Visibility.Visible; } else { P224.Visibility = Visibility.Hidden; P124.Visibility = Visibility.Hidden; }
            if (DA[3].Length > 5 && DA[3][5] != 0) { P225.Content = DA[3][5]; P225.Visibility = Visibility.Visible; P125.Content = DA[3][5]; P125.Visibility = Visibility.Visible; } else { P225.Visibility = Visibility.Hidden; P125.Visibility = Visibility.Hidden; }
            if (DA[3].Length > 6 && DA[3][6] != 0) { P226.Content = DA[3][6]; P226.Visibility = Visibility.Visible; P126.Content = DA[3][6]; P126.Visibility = Visibility.Visible; } else { P226.Visibility = Visibility.Hidden; P126.Visibility = Visibility.Hidden; }
            if (DA[3].Length > 7 && DA[3][7] != 0) { P227.Content = DA[3][7]; P227.Visibility = Visibility.Visible; P127.Content = DA[3][7]; P127.Visibility = Visibility.Visible; } else { P227.Visibility = Visibility.Hidden; P127.Visibility = Visibility.Hidden; }
            if (DA[3].Length > 8 && DA[3][8] != 0) { P228.Content = DA[3][8]; P228.Visibility = Visibility.Visible; P128.Content = DA[3][8]; P128.Visibility = Visibility.Visible; } else { P228.Visibility = Visibility.Hidden; P128.Visibility = Visibility.Hidden; }

            if (DA[7].Length > 0 && DA[7][0] != 0) { P260.Content = DA[7][0]; P260.Visibility = Visibility.Visible; P160.Content = DA[7][0]; P160.Visibility = Visibility.Visible; } else { P260.Visibility = Visibility.Hidden; P160.Visibility = Visibility.Hidden; }
            if (DA[7].Length > 1 && DA[7][1] != 0) { P261.Content = DA[7][1]; P261.Visibility = Visibility.Visible; P161.Content = DA[7][1]; P161.Visibility = Visibility.Visible; } else { P261.Visibility = Visibility.Hidden; P161.Visibility = Visibility.Hidden; }
            if (DA[7].Length > 2 && DA[7][2] != 0) { P262.Content = DA[7][2]; P262.Visibility = Visibility.Visible; P162.Content = DA[7][2]; P162.Visibility = Visibility.Visible; } else { P262.Visibility = Visibility.Hidden; P162.Visibility = Visibility.Hidden; }
            if (DA[7].Length > 3 && DA[7][3] != 0) { P263.Content = DA[7][3]; P263.Visibility = Visibility.Visible; P163.Content = DA[7][3]; P163.Visibility = Visibility.Visible; } else { P263.Visibility = Visibility.Hidden; P163.Visibility = Visibility.Hidden; }
            if (DA[7].Length > 4 && DA[7][4] != 0) { P264.Content = DA[7][4]; P264.Visibility = Visibility.Visible; P164.Content = DA[7][4]; P164.Visibility = Visibility.Visible; } else { P264.Visibility = Visibility.Hidden; P164.Visibility = Visibility.Hidden; }
            if (DA[7].Length > 5 && DA[7][5] != 0) { P265.Content = DA[7][5]; P265.Visibility = Visibility.Visible; P165.Content = DA[7][5]; P165.Visibility = Visibility.Visible; } else { P265.Visibility = Visibility.Hidden; P165.Visibility = Visibility.Hidden; }
            if (DA[7].Length > 6 && DA[7][6] != 0) { P266.Content = DA[7][6]; P266.Visibility = Visibility.Visible; P166.Content = DA[7][6]; P166.Visibility = Visibility.Visible; } else { P266.Visibility = Visibility.Hidden; P166.Visibility = Visibility.Hidden; }
            if (DA[7].Length > 7 && DA[7][7] != 0) { P267.Content = DA[7][7]; P267.Visibility = Visibility.Visible; P167.Content = DA[7][7]; P167.Visibility = Visibility.Visible; } else { P267.Visibility = Visibility.Hidden; P167.Visibility = Visibility.Hidden; }
            if (DA[7].Length > 8 && DA[7][8] != 0) { P268.Content = DA[7][8]; P268.Visibility = Visibility.Visible; P168.Content = DA[7][8]; P168.Visibility = Visibility.Visible; } else { P268.Visibility = Visibility.Hidden; P168.Visibility = Visibility.Hidden; }

            if (DA[8].Length > 0 && DA[8][0] != 0) { P270.Content = DA[8][0]; P270.Visibility = Visibility.Visible; P170.Content = DA[8][0]; P170.Visibility = Visibility.Visible; } else { P270.Visibility = Visibility.Hidden; P170.Visibility = Visibility.Hidden; }
            if (DA[8].Length > 1 && DA[8][1] != 0) { P271.Content = DA[8][1]; P271.Visibility = Visibility.Visible; P171.Content = DA[8][1]; P171.Visibility = Visibility.Visible; } else { P271.Visibility = Visibility.Hidden; P171.Visibility = Visibility.Hidden; }
            if (DA[8].Length > 2 && DA[8][2] != 0) { P272.Content = DA[8][2]; P272.Visibility = Visibility.Visible; P172.Content = DA[8][2]; P172.Visibility = Visibility.Visible; } else { P272.Visibility = Visibility.Hidden; P172.Visibility = Visibility.Hidden; }
            if (DA[8].Length > 3 && DA[8][3] != 0) { P273.Content = DA[8][3]; P273.Visibility = Visibility.Visible; P173.Content = DA[8][3]; P173.Visibility = Visibility.Visible; } else { P273.Visibility = Visibility.Hidden; P173.Visibility = Visibility.Hidden; }
            if (DA[8].Length > 4 && DA[8][4] != 0) { P274.Content = DA[8][4]; P274.Visibility = Visibility.Visible; P174.Content = DA[8][4]; P174.Visibility = Visibility.Visible; } else { P274.Visibility = Visibility.Hidden; P174.Visibility = Visibility.Hidden; }
            if (DA[8].Length > 5 && DA[8][5] != 0) { P275.Content = DA[8][5]; P275.Visibility = Visibility.Visible; P175.Content = DA[8][5]; P175.Visibility = Visibility.Visible; } else { P275.Visibility = Visibility.Hidden; P175.Visibility = Visibility.Hidden; }
            if (DA[8].Length > 6 && DA[8][6] != 0) { P276.Content = DA[8][6]; P276.Visibility = Visibility.Visible; P176.Content = DA[8][6]; P176.Visibility = Visibility.Visible; } else { P276.Visibility = Visibility.Hidden; P176.Visibility = Visibility.Hidden; }
            if (DA[8].Length > 7 && DA[8][7] != 0) { P277.Content = DA[8][7]; P277.Visibility = Visibility.Visible; P177.Content = DA[8][7]; P177.Visibility = Visibility.Visible; } else { P277.Visibility = Visibility.Hidden; P177.Visibility = Visibility.Hidden; }
            if (DA[8].Length > 8 && DA[8][8] != 0) { P278.Content = DA[8][8]; P278.Visibility = Visibility.Visible; P178.Content = DA[8][8]; P178.Visibility = Visibility.Visible; } else { P278.Visibility = Visibility.Hidden; P178.Visibility = Visibility.Hidden; }
        }
*/

/*
        private bool isError(VehicleCard Card)
        {

            bool isUnavailable = false;

            if (MasterDeck.sNation == "NATO")
            {
                if (
                Card.sNation != "ANZAC" &&
                Card.sNation != "BRD" &&
                Card.sNation != "CAN" &&
                Card.sNation != "DEN" &&
                Card.sNation != "FRA" &&
                Card.sNation != "JAP" &&
                Card.sNation != "NED" &&
                Card.sNation != "NOR" &&
                Card.sNation != "ROK" &&
                Card.sNation != "SWE" &&
                Card.sNation != "UK" &&
                Card.sNation != "USA")
                { isUnavailable = true; }
                if (Card.iIsProto == 1) { isUnavailable = true; }
            }
            else if (MasterDeck.sNation == "REDFOR")
            {
                if (
                Card.sNation != "CZS" &&
                Card.sNation != "DDR" &&
                Card.sNation != "DPRK" &&
                Card.sNation != "POL" &&
                Card.sNation != "PRC" &&
                Card.sNation != "USSR")
                { isUnavailable = true; }
                if (Card.iIsProto == 1) { isUnavailable = true; }
            }
            else if (MasterDeck.sNation == "BD")
            {
                if (
                Card.sNation != "JAP" &&
                Card.sNation != "ROK")
                { isUnavailable = true; }
            }
            else if (MasterDeck.sNation == "CW")
            {
                if (
                Card.sNation != "ANZAC" &&
                Card.sNation != "CAN" &&
                Card.sNation != "UK")
                { isUnavailable = true; }
            }
            else if (MasterDeck.sNation == "EU")
            {
                if (
                Card.sNation != "BRD" &&
                Card.sNation != "FRA")
                { isUnavailable = true; }
            }
            else if (MasterDeck.sNation == "LJUT")
            {
                if (
                Card.sNation != "BRD" &&
                Card.sNation != "DEN")
                { isUnavailable = true; }
            }
            else if (MasterDeck.sNation == "NORAD")
            {
                if (
                Card.sNation != "CAN" ||
                Card.sNation != "USA")
                { isUnavailable = true; }
            }
            else if (MasterDeck.sNation == "SCA")
            {
                if (
                Card.sNation != "DEN" &&
                Card.sNation != "NOR" &&
                Card.sNation != "SWE")
                { isUnavailable = true; }
            }
            else if (MasterDeck.sNation == "NSWP")
            {
                if (
                Card.sNation != "CZS" &&
                Card.sNation != "DDR" &&
                Card.sNation != "POL")
                { isUnavailable = true; }
            }
            else if (MasterDeck.sNation == "RD")
            {
                if (
                Card.sNation != "DPRK" &&
                Card.sNation != "PRC")
                { isUnavailable = true; }
            }
            else if (MasterDeck.sNation == "SOVKOR")
            {
                if (
                Card.sNation != "DPRK" &&
                Card.sNation != "USSR")
                { isUnavailable = true; }
            }
            else if (MasterDeck.sNation == "BDRNL")
            {
                if (
                Card.sNation != "BRD" &&
                Card.sNation != "NED")
                { isUnavailable = true; }
            }
            else
            {
                if (Card.sNation != MasterDeck.sNation)
                { isUnavailable = true; }
            }
            if (MasterDeck.sEra == "B" && Card.iYear > 1985){ isUnavailable = true; }
            else if (MasterDeck.sEra == "C" && Card.iYear > 1980){ isUnavailable = true; }
            if (MasterDeck.sSpec == "MAR" && Card.caSpec[0] != '1') { isUnavailable = true; }
            else if (MasterDeck.sSpec == "AIR" && Card.caSpec[1] != '1') { isUnavailable = true; }
            else if (MasterDeck.sSpec == "MECH" && Card.caSpec[2] != '1') { isUnavailable = true; }
            else if (MasterDeck.sSpec == "ARM" && Card.caSpec[3] != '1') { isUnavailable = true; }
            else if (MasterDeck.sSpec == "MOTO" && Card.caSpec[4] != '1') { isUnavailable = true; }
            else if (MasterDeck.sSpec == "SUP" && Card.caSpec[5] != '1') { isUnavailable = true; }
            return isUnavailable;
        }
        #endregion GUI Icons Display
*/
/*
        #region cardsshow
        private void ShowData(VehicleCard Card, int Type)
        {
            switch (Type)
            {
                case 0://LOG
                    lLOGunit.Content = Card.Unit.sNameU;
                    lLOGunitHP.Content = "HP:" + Card.Unit.iHP;
                    lLOGunitSize.Content = InterpretSize(Card.Unit);
                    lLOGunitOptics.Content = InterpretOptics(Card.Unit);
                    lLOGunitStealth.Content = InterpretStealth(Card.Unit);
                    lLOGunitSpeed.Content = "Ground Speed:" + Card.Unit.iSpeed + "km/h";
                    lLOGunitRSPeed.Content = "Road Speed:" + Card.Unit.iRSpeed + "km/h";
                    lLOGunitASPeed.Content = "Amphibious Speed:" + Card.Unit.iASpeed + "km/h";
                    lLOGunitTraining.Content = InterpretTraining(Card);
                    lLOGunitAutonomy.Content = Card.Unit.iAutonomy;
                    //lLOGunitProto.Content = Card.Unit.iIsProto;
                    //lLOGunitDeck.Content = Card.Unit.
                    lLOGunitYear.Content = Card.Unit.iYear;
                    lLOGunitFAV.Content = Card.Unit.iaArmor[0];
                    lLOGunitBAV.Content = Card.Unit.iaArmor[1];
                    lLOGunitSAV.Content = Card.Unit.iaArmor[2];
                    lLOGunitTAV.Content = Card.Unit.iaArmor[3];
                    ShowWeapon(Card.Unit.W1, lLLB1);
                    ShowWeapon(Card.Unit.W2, lLLB2);
                    ShowWeapon(Card.Unit.W3, lLLB3);

                    if (Card.Transport != null)
                    {
                        TlLOGunit.Content = Card.Transport.sNameU;
                        TlLOGunitHP.Content = "HP:" + Card.Transport.iHP;
                        TlLOGunitSize.Content = InterpretSize(Card.Transport);
                        TlLOGunitOptics.Content = InterpretOptics(Card.Transport);
                        TlLOGunitStealth.Content = InterpretStealth(Card.Transport);
                        TlLOGunitSpeed.Content = "Ground Speed:" + Card.Transport.iSpeed + "km/h";
                        TlLOGunitRSPeed.Content = "Road Speed:" + Card.Transport.iRSpeed + "km/h";
                        TlLOGunitASPeed.Content = "Amphibious Speed:" + Card.Transport.iASpeed + "km/h";
                        TlLOGunitTraining.Content = InterpretTraining(Card);
                        TlLOGunitAutonomy.Content = Card.Transport.iAutonomy;
                        //lLOGunitProto.Content = Card.Unit.iIsProto;
                        //lLOGunitDeck.Content = Card.Unit.
                        TlLOGunitYear.Content = Card.Transport.iYear;
                        TlLOGunitFAV.Content = Card.Transport.iaArmor[0];
                        TlLOGunitBAV.Content = Card.Transport.iaArmor[1];
                        TlLOGunitSAV.Content = Card.Transport.iaArmor[2];
                        TlLOGunitTAV.Content = Card.Transport.iaArmor[3];
                        ShowWeapon(Card.Transport.W1, TlLLB1);
                        ShowWeapon(Card.Transport.W2, TlLLB2);
                        ShowWeapon(Card.Transport.W3, TlLLB3);
                    }
                    else
                    {
                        TlLOGunit.Content = "";
                        TlLOGunitHP.Content = "";
                        TlLOGunitSize.Content = "";
                        TlLOGunitOptics.Content = "";
                        TlLOGunitStealth.Content = "";
                        TlLOGunitSpeed.Content = "";
                        TlLOGunitRSPeed.Content = "";
                        TlLOGunitASPeed.Content = "";
                        TlLOGunitTraining.Content = "";
                        TlLOGunitAutonomy.Content = "";
                        //lLOGunitProto.Content = Card.Unit.iIsProto;
                        //lLOGunitDeck.Content = Card.Unit.
                        TlLOGunitYear.Content = "";
                        TlLOGunitFAV.Content = "";
                        TlLOGunitBAV.Content = "";
                        TlLOGunitSAV.Content = "";
                        TlLOGunitTAV.Content = "";
                        ShowWeapon(MasterDeck.nullWeapon, TlLLB1);
                        ShowWeapon(MasterDeck.nullWeapon, TlLLB2);
                        ShowWeapon(MasterDeck.nullWeapon, TlLLB3);

                    }
                    break;
                case 1://INF
                    lINFunit.Content = Card.Unit.sNameU;
                    lINFunitHP.Content = "HP:" + Card.Unit.iHP;
                    lINFunitSize.Content = InterpretSize(Card.Unit);
                    lINFunitOptics.Content = InterpretOptics(Card.Unit);
                    lINFunitStealth.Content = InterpretStealth(Card.Unit);
                    lINFunitSpeed.Content = "Ground Speed:" + Card.Unit.iSpeed + "km/h";
                    lINFunitRSPeed.Content = "Road Speed:" + Card.Unit.iRSpeed + "km/h";
                    lINFunitASPeed.Content = "Amphibious Speed:" + Card.Unit.iASpeed + "km/h";
                    lINFunitTraining.Content = InterpretTraining(Card);
                    lINFunitAutonomy.Content = Card.Unit.iAutonomy;
                    //lLOGunitProto.Content = Card.Unit.iIsProto;
                    //lLOGunitDeck.Content = Card.Unit.
                    lINFunitYear.Content = Card.Unit.iYear;
                    lINFunitFAV.Content = Card.Unit.iaArmor[0];
                    lINFunitBAV.Content = Card.Unit.iaArmor[1];
                    lINFunitSAV.Content = Card.Unit.iaArmor[2];
                    lINFunitTAV.Content = Card.Unit.iaArmor[3];
                    ShowWeapon(Card.Unit.W1, lILB1);
                    ShowWeapon(Card.Unit.W2, lILB2);
                    ShowWeapon(Card.Unit.W3, lILB3);

                    if (Card.Transport != null)
                    {
                        TlINFunit.Content = Card.Transport.sNameU;
                        TlINFunitHP.Content = "HP:" + Card.Transport.iHP;
                        TlINFunitSize.Content = InterpretSize(Card.Transport);
                        TlINFunitOptics.Content = InterpretOptics(Card.Transport);
                        TlINFunitStealth.Content = InterpretStealth(Card.Transport);
                        TlINFunitSpeed.Content = "Ground Speed:" + Card.Transport.iSpeed + "km/h";
                        TlINFunitRSPeed.Content = "Road Speed:" + Card.Transport.iRSpeed + "km/h";
                        TlINFunitASPeed.Content = "Amphibious Speed:" + Card.Transport.iASpeed + "km/h";
                        TlINFunitTraining.Content = InterpretTraining(Card);
                        TlINFunitAutonomy.Content = Card.Transport.iAutonomy;
                        //lLOGunitProto.Content = Card.Unit.iIsProto;
                        //lLOGunitDeck.Content = Card.Unit.
                        TlINFunitYear.Content = Card.Transport.iYear;
                        TlINFunitFAV.Content = Card.Transport.iaArmor[0];
                        TlINFunitBAV.Content = Card.Transport.iaArmor[1];
                        TlINFunitSAV.Content = Card.Transport.iaArmor[2];
                        TlINFunitTAV.Content = Card.Transport.iaArmor[3];
                        ShowWeapon(Card.Transport.W1, TlILB1);
                        ShowWeapon(Card.Transport.W2, TlILB2);
                        ShowWeapon(Card.Transport.W3, TlILB3);
                    }
                    else
                    {
                        TlINFunit.Content = "";
                        TlINFunitHP.Content = "";
                        TlINFunitSize.Content = "";
                        TlINFunitOptics.Content = "";
                        TlINFunitStealth.Content = "";
                        TlINFunitSpeed.Content = "";
                        TlINFunitRSPeed.Content = "";
                        TlINFunitASPeed.Content = "";
                        TlINFunitTraining.Content = "";
                        TlINFunitAutonomy.Content = "";
                        //lLOGunitProto.Content = Card.Unit.iIsProto;
                        //lLOGunitDeck.Content = Card.Unit.
                        TlINFunitYear.Content = "";
                        TlINFunitFAV.Content = "";
                        TlINFunitBAV.Content = "";
                        TlINFunitSAV.Content = "";
                        TlINFunitTAV.Content = "";
                        ShowWeapon(MasterDeck.nullWeapon, TlILB1);
                        ShowWeapon(MasterDeck.nullWeapon, TlILB2);
                        ShowWeapon(MasterDeck.nullWeapon, TlILB3);

                    }
                    break;
                case 2://SUP
                    lSUPunit.Content = Card.Unit.sNameU;
                    lSUPunitHP.Content = "HP:" + Card.Unit.iHP;
                    lSUPunitSize.Content = InterpretSize(Card.Unit);
                    lSUPunitOptics.Content = InterpretOptics(Card.Unit);
                    lSUPunitStealth.Content = InterpretStealth(Card.Unit);
                    lSUPunitSpeed.Content = "Ground Speed:" + Card.Unit.iSpeed + "km/h";
                    lSUPunitRSPeed.Content = "Road Speed:" + Card.Unit.iRSpeed + "km/h";
                    lSUPunitASPeed.Content = "Amphibious Speed:" + Card.Unit.iASpeed + "km/h";
                    lSUPunitTraining.Content = InterpretTraining(Card);
                    lSUPunitAutonomy.Content = Card.Unit.iAutonomy;
                    lSUPunitYear.Content = Card.Unit.iYear;
                    lSUPunitFAV.Content = Card.Unit.iaArmor[0];
                    lSUPunitBAV.Content = Card.Unit.iaArmor[1];
                    lSUPunitSAV.Content = Card.Unit.iaArmor[2];
                    lSUPunitTAV.Content = Card.Unit.iaArmor[3];
                    //lLOGunitProto.Content = Card.Unit.iIsProto;
                    //lLOGunitDeck.Content = Card.Unit.
                    ShowWeapon(Card.Unit.W1, lSLB1);
                    ShowWeapon(Card.Unit.W2, lSLB2);
                    ShowWeapon(Card.Unit.W3, lSLB3);

                    if (Card.Transport != null)
                    {
                        TlSUPunit.Content = Card.Transport.sNameU;
                        TlSUPunitHP.Content = "HP:" + Card.Transport.iHP;
                        TlSUPunitSize.Content = InterpretSize(Card.Transport);
                        TlSUPunitOptics.Content = InterpretOptics(Card.Transport);
                        TlSUPunitStealth.Content = InterpretStealth(Card.Transport);
                        TlSUPunitSpeed.Content = "Ground Speed:" + Card.Transport.iSpeed + "km/h";
                        TlSUPunitRSPeed.Content = "Road Speed:" + Card.Transport.iRSpeed + "km/h";
                        TlSUPunitASPeed.Content = "Amphibious Speed:" + Card.Transport.iASpeed + "km/h";
                        TlSUPunitTraining.Content = InterpretTraining(Card);
                        TlSUPunitAutonomy.Content = Card.Transport.iAutonomy;
                        //lLOGunitProto.Content = Card.Unit.iIsProto;
                        //lLOGunitDeck.Content = Card.Unit.
                        TlSUPunitYear.Content = Card.Transport.iYear;
                        TlSUPunitFAV.Content = Card.Transport.iaArmor[0];
                        TlSUPunitBAV.Content = Card.Transport.iaArmor[1];
                        TlSUPunitSAV.Content = Card.Transport.iaArmor[2];
                        TlSUPunitTAV.Content = Card.Transport.iaArmor[3];
                        ShowWeapon(Card.Transport.W1, TlSLB1);
                        ShowWeapon(Card.Transport.W2, TlSLB2);
                        ShowWeapon(Card.Transport.W3, TlSLB3);
                    }
                    else
                    {
                        TlSUPunit.Content = "";
                        TlSUPunitHP.Content = "";
                        TlSUPunitSize.Content = "";
                        TlSUPunitOptics.Content = "";
                        TlSUPunitStealth.Content = "";
                        TlSUPunitSpeed.Content = "";
                        TlSUPunitRSPeed.Content = "";
                        TlSUPunitASPeed.Content = "";
                        TlSUPunitTraining.Content = "";
                        TlSUPunitAutonomy.Content = "";
                        //lLOGunitProto.Content = Card.Unit.iIsProto;
                        //lLOGunitDeck.Content = Card.Unit.
                        TlSUPunitYear.Content = "";
                        TlSUPunitFAV.Content = "";
                        TlSUPunitBAV.Content = "";
                        TlSUPunitSAV.Content = "";
                        TlSUPunitTAV.Content = "";
                        ShowWeapon(MasterDeck.nullWeapon, TlSLB1);
                        ShowWeapon(MasterDeck.nullWeapon, TlSLB2);
                        ShowWeapon(MasterDeck.nullWeapon, TlSLB3);

                    }
                    break;
                case 3://TNK
                    lTNKunit.Content = Card.Unit.sNameU;
                    lTNKunitHP.Content = "HP:" + Card.Unit.iHP;
                    lTNKunitSize.Content = InterpretSize(Card.Unit);
                    lTNKunitOptics.Content = InterpretOptics(Card.Unit);
                    lTNKunitStealth.Content = InterpretStealth(Card.Unit);
                    lTNKunitSpeed.Content = "Ground Speed:" + Card.Unit.iSpeed + "km/h";
                    lTNKunitRSPeed.Content = "Road Speed:" + Card.Unit.iRSpeed + "km/h";
                    lTNKunitASPeed.Content = "Amphibious Speed:" + Card.Unit.iASpeed + "km/h";
                    lTNKunitTraining.Content = InterpretTraining(Card);
                    lTNKunitAutonomy.Content = Card.Unit.iAutonomy;
                    lTNKunitYear.Content = Card.Unit.iYear;
                    lTNKunitFAV.Content = Card.Unit.iaArmor[0];
                    lTNKunitBAV.Content = Card.Unit.iaArmor[1];
                    lTNKunitSAV.Content = Card.Unit.iaArmor[2];
                    lTNKunitTAV.Content = Card.Unit.iaArmor[3];
                    //lLOGunitProto.Content = Card.Unit.iIsProto;
                    //lLOGunitDeck.Content = Card.Unit.
                    ShowWeapon(Card.Unit.W1, lTLB1);
                    ShowWeapon(Card.Unit.W2, lTLB2);
                    ShowWeapon(Card.Unit.W3, lTLB3);

                    if (Card.Transport != null)
                    {
                        TlTNKunit.Content = Card.Transport.sNameU;
                        TlTNKunitHP.Content = "HP:" + Card.Transport.iHP;
                        TlTNKunitSize.Content = InterpretSize(Card.Transport);
                        TlTNKunitOptics.Content = InterpretOptics(Card.Transport);
                        TlTNKunitStealth.Content = InterpretStealth(Card.Transport);
                        TlTNKunitSpeed.Content = "Ground Speed:" + Card.Transport.iSpeed + "km/h";
                        TlTNKunitRSPeed.Content = "Road Speed:" + Card.Transport.iRSpeed + "km/h";
                        TlTNKunitASPeed.Content = "Amphibious Speed:" + Card.Transport.iASpeed + "km/h";
                        TlTNKunitTraining.Content = InterpretTraining(Card);
                        TlTNKunitAutonomy.Content = Card.Transport.iAutonomy;
                        //lLOGunitProto.Content = Card.Unit.iIsProto;
                        //lLOGunitDeck.Content = Card.Unit.
                        TlTNKunitYear.Content = Card.Transport.iYear;
                        TlTNKunitFAV.Content = Card.Transport.iaArmor[0];
                        TlTNKunitBAV.Content = Card.Transport.iaArmor[1];
                        TlTNKunitSAV.Content = Card.Transport.iaArmor[2];
                        TlTNKunitTAV.Content = Card.Transport.iaArmor[3];
                        ShowWeapon(Card.Transport.W1, TlTLB1);
                        ShowWeapon(Card.Transport.W2, TlTLB2);
                        ShowWeapon(Card.Transport.W3, TlTLB3);
                    }
                    else
                    {
                        TlTNKunit.Content = "";
                        TlTNKunitHP.Content = "";
                        TlTNKunitSize.Content = "";
                        TlTNKunitOptics.Content = "";
                        TlTNKunitStealth.Content = "";
                        TlTNKunitSpeed.Content = "";
                        TlTNKunitRSPeed.Content = "";
                        TlTNKunitASPeed.Content = "";
                        TlTNKunitTraining.Content = "";
                        TlTNKunitAutonomy.Content = "";
                        //lLOGunitProto.Content = Card.Unit.iIsProto;
                        //lLOGunitDeck.Content = Card.Unit.
                        TlTNKunitYear.Content = "";
                        TlTNKunitFAV.Content = "";
                        TlTNKunitBAV.Content = "";
                        TlTNKunitSAV.Content = "";
                        TlTNKunitTAV.Content = "";
                        ShowWeapon(MasterDeck.nullWeapon, TlTLB1);
                        ShowWeapon(MasterDeck.nullWeapon, TlTLB2);
                        ShowWeapon(MasterDeck.nullWeapon, TlTLB3);

                    }
                    break;
                case 4://REC
                    lRECunit.Content = Card.Unit.sNameU;
                    lRECunitHP.Content = "HP:" + Card.Unit.iHP;
                    lRECunitSize.Content = InterpretSize(Card.Unit);
                    lRECunitOptics.Content = InterpretOptics(Card.Unit);
                    lRECunitStealth.Content = InterpretStealth(Card.Unit);
                    lRECunitSpeed.Content = "Ground Speed:" + Card.Unit.iSpeed + "km/h";
                    lRECunitRSPeed.Content = "Road Speed:" + Card.Unit.iRSpeed + "km/h";
                    lRECunitASPeed.Content = "Amphibious Speed:" + Card.Unit.iASpeed + "km/h";
                    lRECunitTraining.Content = InterpretTraining(Card);
                    lRECunitAutonomy.Content = Card.Unit.iAutonomy;
                    lRECunitYear.Content = Card.Unit.iYear;
                    lRECunitFAV.Content = Card.Unit.iaArmor[0];
                    lRECunitBAV.Content = Card.Unit.iaArmor[1];
                    lRECunitSAV.Content = Card.Unit.iaArmor[2];
                    lRECunitTAV.Content = Card.Unit.iaArmor[3];
                    //lLOGunitProto.Content = Card.Unit.iIsProto;
                    //lLOGunitDeck.Content = Card.Unit.
                    ShowWeapon(Card.Unit.W1, lRLB1);
                    ShowWeapon(Card.Unit.W2, lRLB2);
                    ShowWeapon(Card.Unit.W3, lRLB3);

                    if (Card.Transport != null)
                    {
                        TlRECunit.Content = Card.Transport.sNameU;
                        TlRECunitHP.Content = "HP:" + Card.Transport.iHP;
                        TlRECunitSize.Content = InterpretSize(Card.Transport);
                        TlRECunitOptics.Content = InterpretOptics(Card.Transport);
                        TlRECunitStealth.Content = InterpretStealth(Card.Transport);
                        TlRECunitSpeed.Content = "Ground Speed:" + Card.Transport.iSpeed + "km/h";
                        TlRECunitRSPeed.Content = "Road Speed:" + Card.Transport.iRSpeed + "km/h";
                        TlRECunitASPeed.Content = "Amphibious Speed:" + Card.Transport.iASpeed + "km/h";
                        TlRECunitTraining.Content = InterpretTraining(Card);
                        TlRECunitAutonomy.Content = Card.Transport.iAutonomy;
                        //lLOGunitProto.Content = Card.Unit.iIsProto;
                        //lLOGunitDeck.Content = Card.Unit.
                        TlRECunitYear.Content = Card.Transport.iYear;
                        TlRECunitFAV.Content = Card.Transport.iaArmor[0];
                        TlRECunitBAV.Content = Card.Transport.iaArmor[1];
                        TlRECunitSAV.Content = Card.Transport.iaArmor[2];
                        TlRECunitTAV.Content = Card.Transport.iaArmor[3];
                        ShowWeapon(Card.Transport.W1, TlRLB1);
                        ShowWeapon(Card.Transport.W2, TlRLB2);
                        ShowWeapon(Card.Transport.W3, TlRLB3);
                    }
                    else
                    {
                        TlRECunit.Content = "";
                        TlRECunitHP.Content = "";
                        TlRECunitSize.Content = "";
                        TlRECunitOptics.Content = "";
                        TlRECunitStealth.Content = "";
                        TlRECunitSpeed.Content = "";
                        TlRECunitRSPeed.Content = "";
                        TlRECunitASPeed.Content = "";
                        TlRECunitTraining.Content = "";
                        TlRECunitAutonomy.Content = "";
                        //lLOGunitProto.Content = Card.Unit.iIsProto;
                        //lLOGunitDeck.Content = Card.Unit.
                        TlRECunitYear.Content = "";
                        TlRECunitFAV.Content = "";
                        TlRECunitBAV.Content = "";
                        TlRECunitSAV.Content = "";
                        TlRECunitTAV.Content = "";
                        ShowWeapon(MasterDeck.nullWeapon, TlRLB1);
                        ShowWeapon(MasterDeck.nullWeapon, TlRLB2);
                        ShowWeapon(MasterDeck.nullWeapon, TlRLB3);

                    }
                    break;
                case 5://VEH
                    lVEHunit.Content = Card.Unit.sNameU;
                    lVEHunitHP.Content = "HP:" + Card.Unit.iHP;
                    lVEHunitSize.Content = InterpretSize(Card.Unit);
                    lVEHunitOptics.Content = InterpretOptics(Card.Unit);
                    lVEHunitStealth.Content = InterpretStealth(Card.Unit);
                    lVEHunitSpeed.Content = "Ground Speed:" + Card.Unit.iSpeed + "km/h";
                    lVEHunitRSPeed.Content = "Road Speed:" + Card.Unit.iRSpeed + "km/h";
                    lVEHunitASPeed.Content = "Amphibious Speed:" + Card.Unit.iASpeed + "km/h";
                    lVEHunitTraining.Content = InterpretTraining(Card);
                    lVEHunitAutonomy.Content = Card.Unit.iAutonomy;
                    lVEHunitYear.Content = Card.Unit.iYear;
                    lVEHunitFAV.Content = Card.Unit.iaArmor[0];
                    lVEHunitBAV.Content = Card.Unit.iaArmor[1];
                    lVEHunitSAV.Content = Card.Unit.iaArmor[2];
                    lVEHunitTAV.Content = Card.Unit.iaArmor[3];
                    //lLOGunitProto.Content = Card.Unit.iIsProto;
                    //lLOGunitDeck.Content = Card.Unit.
                    ShowWeapon(Card.Unit.W1, lVLB1);
                    ShowWeapon(Card.Unit.W2, lVLB2);
                    ShowWeapon(Card.Unit.W3, lVLB3);

                    if (Card.Transport != null)
                    {
                        TlVEHunit.Content = Card.Transport.sNameU;
                        TlVEHunitHP.Content = "HP:" + Card.Transport.iHP;
                        TlVEHunitSize.Content = InterpretSize(Card.Transport);
                        TlVEHunitOptics.Content = InterpretOptics(Card.Transport);
                        TlVEHunitStealth.Content = InterpretStealth(Card.Transport);
                        TlVEHunitSpeed.Content = "Ground Speed:" + Card.Transport.iSpeed + "km/h";
                        TlVEHunitRSPeed.Content = "Road Speed:" + Card.Transport.iRSpeed + "km/h";
                        TlVEHunitASPeed.Content = "Amphibious Speed:" + Card.Transport.iASpeed + "km/h";
                        TlVEHunitTraining.Content = InterpretTraining(Card);
                        TlVEHunitAutonomy.Content = Card.Transport.iAutonomy;
                        //lLOGunitProto.Content = Card.Unit.iIsProto;
                        //lLOGunitDeck.Content = Card.Unit.
                        TlVEHunitYear.Content = Card.Transport.iYear;
                        TlVEHunitFAV.Content = Card.Transport.iaArmor[0];
                        TlVEHunitBAV.Content = Card.Transport.iaArmor[1];
                        TlVEHunitSAV.Content = Card.Transport.iaArmor[2];
                        TlVEHunitTAV.Content = Card.Transport.iaArmor[3];
                        ShowWeapon(Card.Transport.W1, TlVLB1);
                        ShowWeapon(Card.Transport.W2, TlVLB2);
                        ShowWeapon(Card.Transport.W3, TlVLB3);
                    }
                    else
                    {
                        TlVEHunit.Content = "";
                        TlVEHunitHP.Content = "";
                        TlVEHunitSize.Content = "";
                        TlVEHunitOptics.Content = "";
                        TlVEHunitStealth.Content = "";
                        TlVEHunitSpeed.Content = "";
                        TlVEHunitRSPeed.Content = "";
                        TlVEHunitASPeed.Content = "";
                        TlVEHunitTraining.Content = "";
                        TlVEHunitAutonomy.Content = "";
                        //lLOGunitProto.Content = Card.Unit.iIsProto;
                        //lLOGunitDeck.Content = Card.Unit.
                        TlVEHunitYear.Content = "";
                        TlVEHunitFAV.Content = "";
                        TlVEHunitBAV.Content = "";
                        TlVEHunitSAV.Content = "";
                        TlVEHunitTAV.Content = "";
                        ShowWeapon(MasterDeck.nullWeapon, TlVLB1);
                        ShowWeapon(MasterDeck.nullWeapon, TlVLB2);
                        ShowWeapon(MasterDeck.nullWeapon, TlVLB3);

                    }
                    break;
                case 6://HEL
                    lHELunit.Content = Card.Unit.sNameU;
                    lHELunitHP.Content = "HP:" + Card.Unit.iHP;
                    lHELunitSize.Content = InterpretSize(Card.Unit);
                    lHELunitOptics.Content = InterpretOptics(Card.Unit);
                    lHELunitStealth.Content = InterpretStealth(Card.Unit);
                    lHELunitSpeed.Content = "Ground Speed:" + Card.Unit.iSpeed + "km/h";
                    lHELunitRSPeed.Content = "Road Speed:" + Card.Unit.iRSpeed + "km/h";
                    lHELunitASPeed.Content = "Amphibious Speed:" + Card.Unit.iASpeed + "km/h";
                    lHELunitTraining.Content = InterpretTraining(Card);
                    lHELunitAutonomy.Content = Card.Unit.iAutonomy;
                    lHELunitYear.Content = Card.Unit.iYear;
                    lHELunitFAV.Content = Card.Unit.iaArmor[0];
                    lHELunitBAV.Content = Card.Unit.iaArmor[1];
                    lHELunitSAV.Content = Card.Unit.iaArmor[2];
                    lHELunitTAV.Content = Card.Unit.iaArmor[3];
                    //lLOGunitProto.Content = Card.Unit.iIsProto;
                    //lLOGunitDeck.Content = Card.Unit.
                    ShowWeapon(Card.Unit.W1, lHLB1);
                    ShowWeapon(Card.Unit.W2, lHLB2);
                    ShowWeapon(Card.Unit.W3, lHLB3);

                    if (Card.Transport != null)
                    {
                        TlHELunit.Content = Card.Transport.sNameU;
                        TlHELunitHP.Content = "HP:" + Card.Transport.iHP;
                        TlHELunitSize.Content = InterpretSize(Card.Transport);
                        TlHELunitOptics.Content = InterpretOptics(Card.Transport);
                        TlHELunitStealth.Content = InterpretStealth(Card.Transport);
                        TlHELunitSpeed.Content = "Ground Speed:" + Card.Transport.iSpeed + "km/h";
                        TlHELunitRSPeed.Content = "Road Speed:" + Card.Transport.iRSpeed + "km/h";
                        TlHELunitASPeed.Content = "Amphibious Speed:" + Card.Transport.iASpeed + "km/h";
                        TlHELunitTraining.Content = InterpretTraining(Card);
                        TlHELunitAutonomy.Content = Card.Transport.iAutonomy;
                        //lLOGunitProto.Content = Card.Unit.iIsProto;
                        //lLOGunitDeck.Content = Card.Unit.
                        TlHELunitYear.Content = Card.Transport.iYear;
                        TlHELunitFAV.Content = Card.Transport.iaArmor[0];
                        TlHELunitBAV.Content = Card.Transport.iaArmor[1];
                        TlHELunitSAV.Content = Card.Transport.iaArmor[2];
                        TlHELunitTAV.Content = Card.Transport.iaArmor[3];
                        ShowWeapon(Card.Transport.W1, TlHLB1);
                        ShowWeapon(Card.Transport.W2, TlHLB2);
                        ShowWeapon(Card.Transport.W3, TlHLB3);
                    }
                    else
                    {
                        TlHELunit.Content = "";
                        TlHELunitHP.Content = "";
                        TlHELunitSize.Content = "";
                        TlHELunitOptics.Content = "";
                        TlHELunitStealth.Content = "";
                        TlHELunitSpeed.Content = "";
                        TlHELunitRSPeed.Content = "";
                        TlHELunitASPeed.Content = "";
                        TlHELunitTraining.Content = "";
                        TlHELunitAutonomy.Content = "";
                        //lLOGunitProto.Content = Card.Unit.iIsProto;
                        //lLOGunitDeck.Content = Card.Unit.
                        TlHELunitYear.Content = "";
                        TlHELunitFAV.Content = "";
                        TlHELunitBAV.Content = "";
                        TlHELunitSAV.Content = "";
                        TlHELunitTAV.Content = "";
                        ShowWeapon(MasterDeck.nullWeapon, TlHLB1);
                        ShowWeapon(MasterDeck.nullWeapon, TlHLB2);
                        ShowWeapon(MasterDeck.nullWeapon, TlHLB3);

                    }
                    break;
                case 7://AIR
                    lAIRunit.Content = Card.Unit.sNameU;
                    lAIRunitHP.Content = "HP:" + Card.Unit.iHP;
                    lAIRunitSize.Content = InterpretSize(Card.Unit);
                    lAIRunitOptics.Content = InterpretOptics(Card.Unit);
                    lAIRunitStealth.Content = InterpretStealth(Card.Unit);
                    lAIRunitSpeed.Content = "Ground Speed:" + Card.Unit.iSpeed + "km/h";
                    lAIRunitRSPeed.Content = "Road Speed:" + Card.Unit.iRSpeed + "km/h";
                    lAIRunitASPeed.Content = "Amphibious Speed:" + Card.Unit.iASpeed + "km/h";
                    lAIRunitTraining.Content = InterpretTraining(Card);
                    lAIRunitAutonomy.Content = Card.Unit.iAutonomy;
                    lAIRunitYear.Content = Card.Unit.iYear;
                    lAIRunitFAV.Content = Card.Unit.iaArmor[0];
                    lAIRunitBAV.Content = Card.Unit.iaArmor[1];
                    lAIRunitSAV.Content = Card.Unit.iaArmor[2];
                    lAIRunitTAV.Content = Card.Unit.iaArmor[3];
                    //lLOGunitProto.Content = Card.Unit.iIsProto;
                    //lLOGunitDeck.Content = Card.Unit.
                    ShowWeapon(Card.Unit.W1, lALB1);
                    ShowWeapon(Card.Unit.W2, lALB2);
                    ShowWeapon(Card.Unit.W3, lALB3);

                    if (Card.Transport != null)
                    {
                        TlAIRunit.Content = Card.Transport.sNameU;
                        TlAIRunitHP.Content = "HP:" + Card.Transport.iHP;
                        TlAIRunitSize.Content = InterpretSize(Card.Transport);
                        TlAIRunitOptics.Content = InterpretOptics(Card.Transport);
                        TlAIRunitStealth.Content = InterpretStealth(Card.Transport);
                        TlAIRunitSpeed.Content = "Ground Speed:" + Card.Transport.iSpeed + "km/h";
                        TlAIRunitRSPeed.Content = "Road Speed:" + Card.Transport.iRSpeed + "km/h";
                        TlAIRunitASPeed.Content = "Amphibious Speed:" + Card.Transport.iASpeed + "km/h";
                        TlAIRunitTraining.Content = InterpretTraining(Card);
                        TlAIRunitAutonomy.Content = Card.Transport.iAutonomy;
                        //lLOGunitProto.Content = Card.Unit.iIsProto;
                        //lLOGunitDeck.Content = Card.Unit.
                        TlAIRunitYear.Content = Card.Transport.iYear;
                        TlAIRunitFAV.Content = Card.Transport.iaArmor[0];
                        TlAIRunitBAV.Content = Card.Transport.iaArmor[1];
                        TlAIRunitSAV.Content = Card.Transport.iaArmor[2];
                        TlAIRunitTAV.Content = Card.Transport.iaArmor[3];
                        ShowWeapon(Card.Transport.W1, TlALB1);
                        ShowWeapon(Card.Transport.W2, TlALB2);
                        ShowWeapon(Card.Transport.W3, TlALB3);
                    }
                    else
                    {
                        TlAIRunit.Content = "";
                        TlAIRunitHP.Content = "";
                        TlAIRunitSize.Content = "";
                        TlAIRunitOptics.Content = "";
                        TlAIRunitStealth.Content = "";
                        TlAIRunitSpeed.Content = "";
                        TlAIRunitRSPeed.Content = "";
                        TlAIRunitASPeed.Content = "";
                        TlAIRunitTraining.Content = "";
                        TlAIRunitAutonomy.Content = "";
                        //lLOGunitProto.Content = Card.Unit.iIsProto;
                        //lLOGunitDeck.Content = Card.Unit.
                        TlAIRunitYear.Content = "";
                        TlAIRunitFAV.Content = "";
                        TlAIRunitBAV.Content = "";
                        TlAIRunitSAV.Content = "";
                        TlAIRunitTAV.Content = "";
                        ShowWeapon(MasterDeck.nullWeapon, TlALB1);
                        ShowWeapon(MasterDeck.nullWeapon, TlALB2);
                        ShowWeapon(MasterDeck.nullWeapon, TlALB3);

                    }
                    break;
            }
        }

        private void ShowWeapon(Weapon wep, ListBox Box)
        {
            if (wep != null)
            {
                List<string> lista = new List<string>();
                lista.Add("" + wep.sName);
                if (wep.sName != "NONE")
                {
                    lista.Add(wep.sRoundType + "x" + wep.iAmmo);
                    lista.Add(wep.sTags);
                    if (wep.rGround != 0) { lista.Add("Ground:" + wep.rGround.ToString() + "m"); } else { lista.Add(""); }
                    if (wep.rHelo != 0) { lista.Add("Low air:" + wep.rHelo.ToString() + "m"); } else { lista.Add(""); }
                    if (wep.rAir != 0) { lista.Add("High air:" + wep.rAir.ToString() + "m"); } else { lista.Add(""); }
                    if (wep.iAccuracy >= 100 || wep.iAccuracy == 0) { lista.Add("Dispersion:" + wep.iAccuracy.ToString() + "m"); } else { lista.Add("Accuracy:" + wep.iAccuracy.ToString() + "%"); }
                    if (wep.iStab != 0) { lista.Add("Stabilizer:" + wep.iStab.ToString() + "m"); } else { lista.Add(""); }
                    lista.Add("AP:" + wep.AP.ToString());
                    lista.Add("HE:" + wep.HE.ToString());
                    lista.Add("Suppression:" + wep.iSuppression.ToString());
                    lista.Add("ROF:" + wep.ROF.ToString());
                }
                Box.ItemsSource = lista;
            }
        }

        private string InterpretTraining(VehicleCard Card)
        {
            switch (Card.Unit.iTraining)
            {
                case 1:
                    return "Training: Militia";
                case 2:
                    return "Training: Line";
                case 3:
                    return "Training: Shock";
                case 4:
                    return "Training: Elite";
                default:
                    return "";
            }
        }

        private string InterpretStealth(Datacard Card)
        {
            switch (Card.iStealth)
            {
                case 1: return "Stealth: Poor";
                case 2: return "Stealth: Medium";
                case 3: return "Stealth: Good";
                case 4: return "Stealth: Very good";
                case 5: return "Stealth: Exceptional";
                default: return "Stealth: none";
            }
        }

        private string InterpretOptics(Datacard Card)
        {
            string optika;
            if (Card.caUnitData[24] == 1) { optika = "Air Detection"; } else { optika = "Optics"; }
            switch (Card.iOptics)
            {
                case 1:
                    return optika + ": Poor";
                case 2:
                    return optika + ": Medium";
                case 3:
                    return optika + ": Good";
                case 4:
                    return optika + ": Very good";
                case 5:
                    return optika + ": Exceptional";
            }
            return "Steevie Wonder";
        }

        private string InterpretSize(Datacard Card)
        {
            switch (Card.iSize)
            {
                case 1: return "Size: Very small";
                case 2: return  "Size: Small";
                case 3: return  "Size: Medium";
                case 4: return  "Size: Big";
                case 5: return "Size: Very big";
                default: return "ECM:" + Card.iSize + "%";
            }
        }
        #endregion cardshow
*/
/*
        private void DisplayAvailability(VehicleCard Card)
        {
            double temp = 0;
            try
            {
                temp = (Card.iaAvailability[Card.iVet] * MainMatrix.getCoeff(MasterDeck.sNation));
            }
            catch (Exception)
            {
                MessageBox.Show("Availability error: debug 0x0000");
                //throw;
            }
            temp = Math.Round(temp / 100);
            int iAv = (int)temp;

            switch (Card.iArrayIndex)
            {
                case 0:  { A200.Content = iAv; A100.Content = iAv; A200.Visibility = Visibility.Visible; A100.Visibility = Visibility.Visible; break; }
                case 1:  { A201.Content = iAv; A101.Content = iAv; A201.Visibility = Visibility.Visible; A101.Visibility = Visibility.Visible; break; }
                case 2:  { A202.Content = iAv; A102.Content = iAv; A202.Visibility = Visibility.Visible; A102.Visibility = Visibility.Visible; break; }
                case 3:  { A203.Content = iAv; A103.Content = iAv; A203.Visibility = Visibility.Visible; A103.Visibility = Visibility.Visible; break; }
                case 4:  { A204.Content = iAv; A104.Content = iAv; A204.Visibility = Visibility.Visible; A104.Visibility = Visibility.Visible; break; }
                case 5:  { A205.Content = iAv; A105.Content = iAv; A205.Visibility = Visibility.Visible; A105.Visibility = Visibility.Visible; break; }
                case 6:  { A206.Content = iAv; A106.Content = iAv; A206.Visibility = Visibility.Visible; A106.Visibility = Visibility.Visible; break; }
                case 7:  { A207.Content = iAv; A107.Content = iAv; A207.Visibility = Visibility.Visible; A107.Visibility = Visibility.Visible; break; }
                case 8:  { A208.Content = iAv; A108.Content = iAv; A208.Visibility = Visibility.Visible; A108.Visibility = Visibility.Visible; break; }
                case 10: { A210.Content = iAv; A110.Content = iAv; A210.Visibility = Visibility.Visible; A110.Visibility = Visibility.Visible; break; }
                case 11: { A211.Content = iAv; A111.Content = iAv; A211.Visibility = Visibility.Visible; A111.Visibility = Visibility.Visible; break; }
                case 12: { A212.Content = iAv; A112.Content = iAv; A212.Visibility = Visibility.Visible; A112.Visibility = Visibility.Visible; break; }
                case 13: { A213.Content = iAv; A113.Content = iAv; A213.Visibility = Visibility.Visible; A113.Visibility = Visibility.Visible; break; }
                case 14: { A214.Content = iAv; A114.Content = iAv; A214.Visibility = Visibility.Visible; A114.Visibility = Visibility.Visible; break; }
                case 15: { A215.Content = iAv; A115.Content = iAv; A215.Visibility = Visibility.Visible; A115.Visibility = Visibility.Visible; break; }
                case 16: { A216.Content = iAv; A116.Content = iAv; A216.Visibility = Visibility.Visible; A116.Visibility = Visibility.Visible; break; }
                case 17: { A217.Content = iAv; A117.Content = iAv; A217.Visibility = Visibility.Visible; A117.Visibility = Visibility.Visible; break; }
                case 18: { A218.Content = iAv; A118.Content = iAv; A218.Visibility = Visibility.Visible; A118.Visibility = Visibility.Visible; break; }
                case 20: { A220.Content = iAv; A120.Content = iAv; A220.Visibility = Visibility.Visible; A120.Visibility = Visibility.Visible; break; }
                case 21: { A221.Content = iAv; A121.Content = iAv; A221.Visibility = Visibility.Visible; A121.Visibility = Visibility.Visible; break; }
                case 22: { A222.Content = iAv; A122.Content = iAv; A222.Visibility = Visibility.Visible; A122.Visibility = Visibility.Visible; break; }
                case 23: { A223.Content = iAv; A123.Content = iAv; A223.Visibility = Visibility.Visible; A123.Visibility = Visibility.Visible; break; }
                case 24: { A224.Content = iAv; A124.Content = iAv; A224.Visibility = Visibility.Visible; A124.Visibility = Visibility.Visible; break; }
                case 25: { A225.Content = iAv; A125.Content = iAv; A225.Visibility = Visibility.Visible; A125.Visibility = Visibility.Visible; break; }
                case 26: { A226.Content = iAv; A126.Content = iAv; A226.Visibility = Visibility.Visible; A126.Visibility = Visibility.Visible; break; }
                case 27: { A227.Content = iAv; A127.Content = iAv; A227.Visibility = Visibility.Visible; A127.Visibility = Visibility.Visible; break; }
                case 28: { A228.Content = iAv; A128.Content = iAv; A228.Visibility = Visibility.Visible; A128.Visibility = Visibility.Visible; break; }
                case 30: { A230.Content = iAv; A130.Content = iAv; A230.Visibility = Visibility.Visible; A130.Visibility = Visibility.Visible; break; }
                case 31: { A231.Content = iAv; A131.Content = iAv; A231.Visibility = Visibility.Visible; A131.Visibility = Visibility.Visible; break; }
                case 32: { A232.Content = iAv; A132.Content = iAv; A232.Visibility = Visibility.Visible; A132.Visibility = Visibility.Visible; break; }
                case 33: { A233.Content = iAv; A133.Content = iAv; A233.Visibility = Visibility.Visible; A133.Visibility = Visibility.Visible; break; }
                case 34: { A234.Content = iAv; A134.Content = iAv; A234.Visibility = Visibility.Visible; A134.Visibility = Visibility.Visible; break; }
                case 35: { A235.Content = iAv; A135.Content = iAv; A235.Visibility = Visibility.Visible; A135.Visibility = Visibility.Visible; break; }
                case 36: { A236.Content = iAv; A136.Content = iAv; A236.Visibility = Visibility.Visible; A136.Visibility = Visibility.Visible; break; }
                case 37: { A237.Content = iAv; A137.Content = iAv; A237.Visibility = Visibility.Visible; A137.Visibility = Visibility.Visible; break; }
                case 38: { A238.Content = iAv; A138.Content = iAv; A238.Visibility = Visibility.Visible; A138.Visibility = Visibility.Visible; break; }
                case 40: { A240.Content = iAv; A140.Content = iAv; A240.Visibility = Visibility.Visible; A140.Visibility = Visibility.Visible; break; }
                case 41: { A241.Content = iAv; A141.Content = iAv; A241.Visibility = Visibility.Visible; A141.Visibility = Visibility.Visible; break; }
                case 42: { A242.Content = iAv; A142.Content = iAv; A242.Visibility = Visibility.Visible; A142.Visibility = Visibility.Visible; break; }
                case 43: { A243.Content = iAv; A143.Content = iAv; A243.Visibility = Visibility.Visible; A143.Visibility = Visibility.Visible; break; }
                case 44: { A244.Content = iAv; A144.Content = iAv; A244.Visibility = Visibility.Visible; A144.Visibility = Visibility.Visible; break; }
                case 45: { A245.Content = iAv; A145.Content = iAv; A245.Visibility = Visibility.Visible; A145.Visibility = Visibility.Visible; break; }
                case 46: { A246.Content = iAv; A146.Content = iAv; A246.Visibility = Visibility.Visible; A146.Visibility = Visibility.Visible; break; }
                case 47: { A247.Content = iAv; A147.Content = iAv; A247.Visibility = Visibility.Visible; A147.Visibility = Visibility.Visible; break; }
                case 48: { A248.Content = iAv; A148.Content = iAv; A248.Visibility = Visibility.Visible; A148.Visibility = Visibility.Visible; break; }
                case 50: { A250.Content = iAv; A150.Content = iAv; A250.Visibility = Visibility.Visible; A150.Visibility = Visibility.Visible; break; }
                case 51: { A251.Content = iAv; A151.Content = iAv; A251.Visibility = Visibility.Visible; A151.Visibility = Visibility.Visible; break; }
                case 52: { A252.Content = iAv; A152.Content = iAv; A252.Visibility = Visibility.Visible; A152.Visibility = Visibility.Visible; break; }
                case 53: { A253.Content = iAv; A153.Content = iAv; A253.Visibility = Visibility.Visible; A153.Visibility = Visibility.Visible; break; }
                case 54: { A254.Content = iAv; A154.Content = iAv; A254.Visibility = Visibility.Visible; A154.Visibility = Visibility.Visible; break; }
                case 55: { A255.Content = iAv; A155.Content = iAv; A255.Visibility = Visibility.Visible; A155.Visibility = Visibility.Visible; break; }
                case 56: { A256.Content = iAv; A156.Content = iAv; A256.Visibility = Visibility.Visible; A156.Visibility = Visibility.Visible; break; }
                case 57: { A257.Content = iAv; A157.Content = iAv; A257.Visibility = Visibility.Visible; A157.Visibility = Visibility.Visible; break; }
                case 58: { A258.Content = iAv; A158.Content = iAv; A258.Visibility = Visibility.Visible; A158.Visibility = Visibility.Visible; break; }
                case 60: { A260.Content = iAv; A160.Content = iAv; A260.Visibility = Visibility.Visible; A160.Visibility = Visibility.Visible; break; }
                case 61: { A261.Content = iAv; A161.Content = iAv; A261.Visibility = Visibility.Visible; A161.Visibility = Visibility.Visible; break; }
                case 62: { A262.Content = iAv; A162.Content = iAv; A262.Visibility = Visibility.Visible; A162.Visibility = Visibility.Visible; break; }
                case 63: { A263.Content = iAv; A163.Content = iAv; A263.Visibility = Visibility.Visible; A163.Visibility = Visibility.Visible; break; }
                case 64: { A264.Content = iAv; A164.Content = iAv; A264.Visibility = Visibility.Visible; A164.Visibility = Visibility.Visible; break; }
                case 65: { A265.Content = iAv; A165.Content = iAv; A265.Visibility = Visibility.Visible; A165.Visibility = Visibility.Visible; break; }
                case 66: { A266.Content = iAv; A166.Content = iAv; A266.Visibility = Visibility.Visible; A166.Visibility = Visibility.Visible; break; }
                case 67: { A267.Content = iAv; A167.Content = iAv; A267.Visibility = Visibility.Visible; A167.Visibility = Visibility.Visible; break; }
                case 68: { A268.Content = iAv; A168.Content = iAv; A268.Visibility = Visibility.Visible; A168.Visibility = Visibility.Visible; break; }
                case 70: { A270.Content = iAv; A170.Content = iAv; A270.Visibility = Visibility.Visible; A170.Visibility = Visibility.Visible; break; }
                case 71: { A271.Content = iAv; A171.Content = iAv; A271.Visibility = Visibility.Visible; A171.Visibility = Visibility.Visible; break; }
                case 72: { A272.Content = iAv; A172.Content = iAv; A272.Visibility = Visibility.Visible; A172.Visibility = Visibility.Visible; break; }
                case 73: { A273.Content = iAv; A173.Content = iAv; A273.Visibility = Visibility.Visible; A173.Visibility = Visibility.Visible; break; }
                case 74: { A274.Content = iAv; A174.Content = iAv; A274.Visibility = Visibility.Visible; A174.Visibility = Visibility.Visible; break; }
                case 75: { A275.Content = iAv; A175.Content = iAv; A275.Visibility = Visibility.Visible; A175.Visibility = Visibility.Visible; break; }
                case 76: { A276.Content = iAv; A176.Content = iAv; A276.Visibility = Visibility.Visible; A176.Visibility = Visibility.Visible; break; }
                case 77: { A277.Content = iAv; A177.Content = iAv; A277.Visibility = Visibility.Visible; A177.Visibility = Visibility.Visible; break; }
                case 78: { A278.Content = iAv; A178.Content = iAv; A278.Visibility = Visibility.Visible; A178.Visibility = Visibility.Visible; break; }
            }
        }
        */
/*
        private void TallyPoints(VehicleCard Card)
        {
            try
            {

                switch (Card.iArrayIndex)
                {
                    case 0: { P200.Visibility = Visibility.Hidden; P100.Visibility = Visibility.Hidden; deckpoints += Convert.ToInt32(P200.Content.ToString()); break; }
                    case 1: { P201.Visibility = Visibility.Hidden; P101.Visibility = Visibility.Hidden; deckpoints += Convert.ToInt32(P201.Content.ToString()); break; }
                    case 2: { P202.Visibility = Visibility.Hidden; P102.Visibility = Visibility.Hidden; deckpoints += Convert.ToInt32(P202.Content.ToString()); break; }
                    case 3: { P203.Visibility = Visibility.Hidden; P103.Visibility = Visibility.Hidden; deckpoints += Convert.ToInt32(P203.Content.ToString()); break; }
                    case 4: { P204.Visibility = Visibility.Hidden; P104.Visibility = Visibility.Hidden; deckpoints += Convert.ToInt32(P204.Content.ToString()); break; }
                    case 5: { P205.Visibility = Visibility.Hidden; P105.Visibility = Visibility.Hidden; deckpoints += Convert.ToInt32(P205.Content.ToString()); break; }
                    case 6: { P206.Visibility = Visibility.Hidden; P106.Visibility = Visibility.Hidden; deckpoints += Convert.ToInt32(P206.Content.ToString()); break; }
                    case 7: { P207.Visibility = Visibility.Hidden; P107.Visibility = Visibility.Hidden; deckpoints += Convert.ToInt32(P207.Content.ToString()); break; }
                    case 8: { P208.Visibility = Visibility.Hidden; P108.Visibility = Visibility.Hidden; deckpoints += Convert.ToInt32(P208.Content.ToString()); break; }
                    case 10: { P210.Visibility = Visibility.Hidden; P110.Visibility = Visibility.Hidden; deckpoints += Convert.ToInt32(P210.Content.ToString()); break; }
                    case 11: { P211.Visibility = Visibility.Hidden; P111.Visibility = Visibility.Hidden; deckpoints += Convert.ToInt32(P211.Content.ToString()); break; }
                    case 12: { P212.Visibility = Visibility.Hidden; P112.Visibility = Visibility.Hidden; deckpoints += Convert.ToInt32(P212.Content.ToString()); break; }
                    case 13: { P213.Visibility = Visibility.Hidden; P113.Visibility = Visibility.Hidden; deckpoints += Convert.ToInt32(P213.Content.ToString()); break; }
                    case 14: { P214.Visibility = Visibility.Hidden; P114.Visibility = Visibility.Hidden; deckpoints += Convert.ToInt32(P214.Content.ToString()); break; }
                    case 15: { P215.Visibility = Visibility.Hidden; P115.Visibility = Visibility.Hidden; deckpoints += Convert.ToInt32(P215.Content.ToString()); break; }
                    case 16: { P216.Visibility = Visibility.Hidden; P116.Visibility = Visibility.Hidden; deckpoints += Convert.ToInt32(P216.Content.ToString()); break; }
                    case 17: { P217.Visibility = Visibility.Hidden; P117.Visibility = Visibility.Hidden; deckpoints += Convert.ToInt32(P217.Content.ToString()); break; }
                    case 18: { P218.Visibility = Visibility.Hidden; P118.Visibility = Visibility.Hidden; deckpoints += Convert.ToInt32(P218.Content.ToString()); break; }
                    case 20: { P220.Visibility = Visibility.Hidden; P120.Visibility = Visibility.Hidden; deckpoints += Convert.ToInt32(P220.Content.ToString()); break; }
                    case 21: { P221.Visibility = Visibility.Hidden; P121.Visibility = Visibility.Hidden; deckpoints += Convert.ToInt32(P221.Content.ToString()); break; }
                    case 22: { P222.Visibility = Visibility.Hidden; P122.Visibility = Visibility.Hidden; deckpoints += Convert.ToInt32(P222.Content.ToString()); break; }
                    case 23: { P223.Visibility = Visibility.Hidden; P123.Visibility = Visibility.Hidden; deckpoints += Convert.ToInt32(P223.Content.ToString()); break; }
                    case 24: { P224.Visibility = Visibility.Hidden; P124.Visibility = Visibility.Hidden; deckpoints += Convert.ToInt32(P224.Content.ToString()); break; }
                    case 25: { P225.Visibility = Visibility.Hidden; P125.Visibility = Visibility.Hidden; deckpoints += Convert.ToInt32(P225.Content.ToString()); break; }
                    case 26: { P226.Visibility = Visibility.Hidden; P126.Visibility = Visibility.Hidden; deckpoints += Convert.ToInt32(P226.Content.ToString()); break; }
                    case 27: { P227.Visibility = Visibility.Hidden; P127.Visibility = Visibility.Hidden; deckpoints += Convert.ToInt32(P227.Content.ToString()); break; }
                    case 28: { P228.Visibility = Visibility.Hidden; P128.Visibility = Visibility.Hidden; deckpoints += Convert.ToInt32(P228.Content.ToString()); break; }
                    case 30: { P230.Visibility = Visibility.Hidden; P130.Visibility = Visibility.Hidden; deckpoints += Convert.ToInt32(P230.Content.ToString()); break; }
                    case 31: { P231.Visibility = Visibility.Hidden; P131.Visibility = Visibility.Hidden; deckpoints += Convert.ToInt32(P231.Content.ToString()); break; }
                    case 32: { P232.Visibility = Visibility.Hidden; P132.Visibility = Visibility.Hidden; deckpoints += Convert.ToInt32(P232.Content.ToString()); break; }
                    case 33: { P233.Visibility = Visibility.Hidden; P133.Visibility = Visibility.Hidden; deckpoints += Convert.ToInt32(P233.Content.ToString()); break; }
                    case 34: { P234.Visibility = Visibility.Hidden; P134.Visibility = Visibility.Hidden; deckpoints += Convert.ToInt32(P234.Content.ToString()); break; }
                    case 35: { P235.Visibility = Visibility.Hidden; P135.Visibility = Visibility.Hidden; deckpoints += Convert.ToInt32(P235.Content.ToString()); break; }
                    case 36: { P236.Visibility = Visibility.Hidden; P136.Visibility = Visibility.Hidden; deckpoints += Convert.ToInt32(P236.Content.ToString()); break; }
                    case 37: { P237.Visibility = Visibility.Hidden; P137.Visibility = Visibility.Hidden; deckpoints += Convert.ToInt32(P237.Content.ToString()); break; }
                    case 38: { P238.Visibility = Visibility.Hidden; P138.Visibility = Visibility.Hidden; deckpoints += Convert.ToInt32(P238.Content.ToString()); break; }
                    case 40: { P240.Visibility = Visibility.Hidden; P140.Visibility = Visibility.Hidden; deckpoints += Convert.ToInt32(P240.Content.ToString()); break; }
                    case 41: { P241.Visibility = Visibility.Hidden; P141.Visibility = Visibility.Hidden; deckpoints += Convert.ToInt32(P241.Content.ToString()); break; }
                    case 42: { P242.Visibility = Visibility.Hidden; P142.Visibility = Visibility.Hidden; deckpoints += Convert.ToInt32(P242.Content.ToString()); break; }
                    case 43: { P243.Visibility = Visibility.Hidden; P143.Visibility = Visibility.Hidden; deckpoints += Convert.ToInt32(P243.Content.ToString()); break; }
                    case 44: { P244.Visibility = Visibility.Hidden; P144.Visibility = Visibility.Hidden; deckpoints += Convert.ToInt32(P244.Content.ToString()); break; }
                    case 45: { P245.Visibility = Visibility.Hidden; P145.Visibility = Visibility.Hidden; deckpoints += Convert.ToInt32(P245.Content.ToString()); break; }
                    case 46: { P246.Visibility = Visibility.Hidden; P146.Visibility = Visibility.Hidden; deckpoints += Convert.ToInt32(P246.Content.ToString()); break; }
                    case 47: { P247.Visibility = Visibility.Hidden; P147.Visibility = Visibility.Hidden; deckpoints += Convert.ToInt32(P247.Content.ToString()); break; }
                    case 48: { P248.Visibility = Visibility.Hidden; P148.Visibility = Visibility.Hidden; deckpoints += Convert.ToInt32(P248.Content.ToString()); break; }
                    case 50: { P250.Visibility = Visibility.Hidden; P150.Visibility = Visibility.Hidden; deckpoints += Convert.ToInt32(P250.Content.ToString()); break; }
                    case 51: { P251.Visibility = Visibility.Hidden; P151.Visibility = Visibility.Hidden; deckpoints += Convert.ToInt32(P251.Content.ToString()); break; }
                    case 52: { P252.Visibility = Visibility.Hidden; P152.Visibility = Visibility.Hidden; deckpoints += Convert.ToInt32(P252.Content.ToString()); break; }
                    case 53: { P253.Visibility = Visibility.Hidden; P153.Visibility = Visibility.Hidden; deckpoints += Convert.ToInt32(P253.Content.ToString()); break; }
                    case 54: { P254.Visibility = Visibility.Hidden; P154.Visibility = Visibility.Hidden; deckpoints += Convert.ToInt32(P254.Content.ToString()); break; }
                    case 55: { P255.Visibility = Visibility.Hidden; P155.Visibility = Visibility.Hidden; deckpoints += Convert.ToInt32(P255.Content.ToString()); break; }
                    case 56: { P256.Visibility = Visibility.Hidden; P156.Visibility = Visibility.Hidden; deckpoints += Convert.ToInt32(P256.Content.ToString()); break; }
                    case 57: { P257.Visibility = Visibility.Hidden; P157.Visibility = Visibility.Hidden; deckpoints += Convert.ToInt32(P257.Content.ToString()); break; }
                    case 58: { P258.Visibility = Visibility.Hidden; P158.Visibility = Visibility.Hidden; deckpoints += Convert.ToInt32(P258.Content.ToString()); break; }
                    case 60: { P260.Visibility = Visibility.Hidden; P160.Visibility = Visibility.Hidden; deckpoints += Convert.ToInt32(P260.Content.ToString()); break; }
                    case 61: { P261.Visibility = Visibility.Hidden; P161.Visibility = Visibility.Hidden; deckpoints += Convert.ToInt32(P261.Content.ToString()); break; }
                    case 62: { P262.Visibility = Visibility.Hidden; P162.Visibility = Visibility.Hidden; deckpoints += Convert.ToInt32(P262.Content.ToString()); break; }
                    case 63: { P263.Visibility = Visibility.Hidden; P163.Visibility = Visibility.Hidden; deckpoints += Convert.ToInt32(P263.Content.ToString()); break; }
                    case 64: { P264.Visibility = Visibility.Hidden; P164.Visibility = Visibility.Hidden; deckpoints += Convert.ToInt32(P264.Content.ToString()); break; }
                    case 65: { P265.Visibility = Visibility.Hidden; P165.Visibility = Visibility.Hidden; deckpoints += Convert.ToInt32(P265.Content.ToString()); break; }
                    case 66: { P266.Visibility = Visibility.Hidden; P166.Visibility = Visibility.Hidden; deckpoints += Convert.ToInt32(P266.Content.ToString()); break; }
                    case 67: { P267.Visibility = Visibility.Hidden; P167.Visibility = Visibility.Hidden; deckpoints += Convert.ToInt32(P267.Content.ToString()); break; }
                    case 68: { P268.Visibility = Visibility.Hidden; P168.Visibility = Visibility.Hidden; deckpoints += Convert.ToInt32(P268.Content.ToString()); break; }
                    case 70: { P270.Visibility = Visibility.Hidden; P170.Visibility = Visibility.Hidden; deckpoints += Convert.ToInt32(P270.Content.ToString()); break; }
                    case 71: { P271.Visibility = Visibility.Hidden; P171.Visibility = Visibility.Hidden; deckpoints += Convert.ToInt32(P271.Content.ToString()); break; }
                    case 72: { P272.Visibility = Visibility.Hidden; P172.Visibility = Visibility.Hidden; deckpoints += Convert.ToInt32(P272.Content.ToString()); break; }
                    case 73: { P273.Visibility = Visibility.Hidden; P173.Visibility = Visibility.Hidden; deckpoints += Convert.ToInt32(P273.Content.ToString()); break; }
                    case 74: { P274.Visibility = Visibility.Hidden; P174.Visibility = Visibility.Hidden; deckpoints += Convert.ToInt32(P274.Content.ToString()); break; }
                    case 75: { P275.Visibility = Visibility.Hidden; P175.Visibility = Visibility.Hidden; deckpoints += Convert.ToInt32(P275.Content.ToString()); break; }
                    case 76: { P276.Visibility = Visibility.Hidden; P176.Visibility = Visibility.Hidden; deckpoints += Convert.ToInt32(P276.Content.ToString()); break; }
                    case 77: { P277.Visibility = Visibility.Hidden; P177.Visibility = Visibility.Hidden; deckpoints += Convert.ToInt32(P277.Content.ToString()); break; }
                    case 78: { P278.Visibility = Visibility.Hidden; P178.Visibility = Visibility.Hidden; deckpoints += Convert.ToInt32(P278.Content.ToString()); break; }
                }
            }
            catch
            {

            }
        }
*/


/*
        #region Delete buttons
        private void btLOG0_Click(object sender, RoutedEventArgs e)
        {
            MasterDeck.CardDelete(00);
            txtEncodeDeck.Text = MasterDeck.DeckExport(MasterDeck);
            GUIDisplay(MasterDeck);
        }
        private void btLOG1_Click(object sender, RoutedEventArgs e)
        {
                MasterDeck.CardDelete(01);
                txtEncodeDeck.Text = MasterDeck.DeckExport(MasterDeck);
                GUIDisplay(MasterDeck);
        }
        private void btLOG2_Click(object sender, RoutedEventArgs e)
        {
                MasterDeck.CardDelete(02);
                txtEncodeDeck.Text = MasterDeck.DeckExport(MasterDeck);
                GUIDisplay(MasterDeck);
        }
        private void btLOG3_Click(object sender, RoutedEventArgs e)
        {
                MasterDeck.CardDelete(03);
                txtEncodeDeck.Text = MasterDeck.DeckExport(MasterDeck);
                GUIDisplay(MasterDeck);
        }
        private void btLOG4_Click(object sender, RoutedEventArgs e)
        {
                MasterDeck.CardDelete(04);
                txtEncodeDeck.Text = MasterDeck.DeckExport(MasterDeck);
                GUIDisplay(MasterDeck);
        }
        private void btLOG5_Click(object sender, RoutedEventArgs e)
        {
                MasterDeck.CardDelete(05);
                txtEncodeDeck.Text = MasterDeck.DeckExport(MasterDeck);
                GUIDisplay(MasterDeck);
        }
        private void btLOG6_Click(object sender, RoutedEventArgs e)
        {
                MasterDeck.CardDelete(06);
                txtEncodeDeck.Text = MasterDeck.DeckExport(MasterDeck);
                GUIDisplay(MasterDeck);
        }
        private void btLOG7_Click(object sender, RoutedEventArgs e)
        {
                MasterDeck.CardDelete(07);
                txtEncodeDeck.Text = MasterDeck.DeckExport(MasterDeck);
                GUIDisplay(MasterDeck);
        }
        private void btLOG8_Click(object sender, RoutedEventArgs e)
        {
                MasterDeck.CardDelete(08);
                txtEncodeDeck.Text = MasterDeck.DeckExport(MasterDeck);
                GUIDisplay(MasterDeck);
        }

        private void btINF0_Click(object sender, RoutedEventArgs e)
        {
                MasterDeck.CardDelete(10);
                txtEncodeDeck.Text = MasterDeck.DeckExport(MasterDeck);
                GUIDisplay(MasterDeck);
        }
        private void btINF1_Click(object sender, RoutedEventArgs e)
        {
                MasterDeck.CardDelete(11);
                txtEncodeDeck.Text = MasterDeck.DeckExport(MasterDeck);
                GUIDisplay(MasterDeck);
        }
        private void btINF2_Click(object sender, RoutedEventArgs e)
        {
                MasterDeck.CardDelete(12);
                txtEncodeDeck.Text = MasterDeck.DeckExport(MasterDeck);
                GUIDisplay(MasterDeck);
        }
        private void btINF3_Click(object sender, RoutedEventArgs e)
        {
                MasterDeck.CardDelete(13);
                txtEncodeDeck.Text = MasterDeck.DeckExport(MasterDeck);
                GUIDisplay(MasterDeck);
        }
        private void btINF4_Click(object sender, RoutedEventArgs e)
        {
                MasterDeck.CardDelete(14);
                txtEncodeDeck.Text = MasterDeck.DeckExport(MasterDeck);
                GUIDisplay(MasterDeck);
        }
        private void btINF5_Click(object sender, RoutedEventArgs e)
        {
                MasterDeck.CardDelete(15);
                txtEncodeDeck.Text = MasterDeck.DeckExport(MasterDeck);
                GUIDisplay(MasterDeck);
        }
        private void btINF6_Click(object sender, RoutedEventArgs e)
        {
                MasterDeck.CardDelete(16);
                txtEncodeDeck.Text = MasterDeck.DeckExport(MasterDeck);
                GUIDisplay(MasterDeck);
        }
        private void btINF7_Click(object sender, RoutedEventArgs e)
        {
                MasterDeck.CardDelete(17);
                txtEncodeDeck.Text = MasterDeck.DeckExport(MasterDeck);
                GUIDisplay(MasterDeck);
        }
        private void btINF8_Click(object sender, RoutedEventArgs e)
        {
                MasterDeck.CardDelete(18);
                txtEncodeDeck.Text = MasterDeck.DeckExport(MasterDeck);
                GUIDisplay(MasterDeck);
        }

        private void btSUP0_Click(object sender, RoutedEventArgs e)
        {
                MasterDeck.CardDelete(20);
                txtEncodeDeck.Text = MasterDeck.DeckExport(MasterDeck);
                GUIDisplay(MasterDeck);
        }
        private void btSUP1_Click(object sender, RoutedEventArgs e)
        {
                MasterDeck.CardDelete(21);
                txtEncodeDeck.Text = MasterDeck.DeckExport(MasterDeck);
                GUIDisplay(MasterDeck);
        }
        private void btSUP2_Click(object sender, RoutedEventArgs e)
        {
                MasterDeck.CardDelete(22);
                txtEncodeDeck.Text = MasterDeck.DeckExport(MasterDeck);
                GUIDisplay(MasterDeck);
        }
        private void btSUP3_Click(object sender, RoutedEventArgs e)
        {
                MasterDeck.CardDelete(23);
                txtEncodeDeck.Text = MasterDeck.DeckExport(MasterDeck);
                GUIDisplay(MasterDeck);
        }
        private void btSUP4_Click(object sender, RoutedEventArgs e)
        {
                MasterDeck.CardDelete(24);
                txtEncodeDeck.Text = MasterDeck.DeckExport(MasterDeck);
                GUIDisplay(MasterDeck);
        }
        private void btSUP5_Click(object sender, RoutedEventArgs e)
        {
                MasterDeck.CardDelete(25);
                txtEncodeDeck.Text = MasterDeck.DeckExport(MasterDeck);
                GUIDisplay(MasterDeck);
        }
        private void btSUP6_Click(object sender, RoutedEventArgs e)
        {
                MasterDeck.CardDelete(26);
                txtEncodeDeck.Text = MasterDeck.DeckExport(MasterDeck);
                GUIDisplay(MasterDeck);
        }
        private void btSUP7_Click(object sender, RoutedEventArgs e)
        {
                MasterDeck.CardDelete(27);
                txtEncodeDeck.Text = MasterDeck.DeckExport(MasterDeck);
                GUIDisplay(MasterDeck);
        }
        private void btSUP8_Click(object sender, RoutedEventArgs e)
        {
                MasterDeck.CardDelete(28);
                txtEncodeDeck.Text = MasterDeck.DeckExport(MasterDeck);
                GUIDisplay(MasterDeck);
        }

        private void btTNK0_Click(object sender, RoutedEventArgs e)
        {
            MasterDeck.CardDelete(30);
            txtEncodeDeck.Text = MasterDeck.DeckExport(MasterDeck);
            GUIDisplay(MasterDeck);
        }
        private void btTNK1_Click(object sender, RoutedEventArgs e)
        {
                MasterDeck.CardDelete(31);
                txtEncodeDeck.Text = MasterDeck.DeckExport(MasterDeck);
                GUIDisplay(MasterDeck);
        }
        private void btTNK2_Click(object sender, RoutedEventArgs e)
        {
                MasterDeck.CardDelete(32);
                txtEncodeDeck.Text = MasterDeck.DeckExport(MasterDeck);
                GUIDisplay(MasterDeck);
        }
        private void btTNK3_Click(object sender, RoutedEventArgs e)
        {
                MasterDeck.CardDelete(33);
                txtEncodeDeck.Text = MasterDeck.DeckExport(MasterDeck);
                GUIDisplay(MasterDeck);
        }
        private void btTNK4_Click(object sender, RoutedEventArgs e)
        {
                MasterDeck.CardDelete(34);
                txtEncodeDeck.Text = MasterDeck.DeckExport(MasterDeck);
                GUIDisplay(MasterDeck);
        }
        private void btTNK5_Click(object sender, RoutedEventArgs e)
        {
                MasterDeck.CardDelete(35);
                txtEncodeDeck.Text = MasterDeck.DeckExport(MasterDeck);
                GUIDisplay(MasterDeck);
        }
        private void btTNK6_Click(object sender, RoutedEventArgs e)
        {
                MasterDeck.CardDelete(36);
                txtEncodeDeck.Text = MasterDeck.DeckExport(MasterDeck);
                GUIDisplay(MasterDeck);
        }
        private void btTNK7_Click(object sender, RoutedEventArgs e)
        {
                MasterDeck.CardDelete(37);
                txtEncodeDeck.Text = MasterDeck.DeckExport(MasterDeck);
                GUIDisplay(MasterDeck);
        }
        private void btTNK8_Click(object sender, RoutedEventArgs e)
        {
                MasterDeck.CardDelete(38);
                txtEncodeDeck.Text = MasterDeck.DeckExport(MasterDeck);
                GUIDisplay(MasterDeck);
        }

        private void btREC0_Click(object sender, RoutedEventArgs e)
        {
                MasterDeck.CardDelete(40);
                GUIDisplay(MasterDeck);
                txtEncodeDeck.Text = MasterDeck.DeckExport(MasterDeck);
        }
        private void btREC1_Click(object sender, RoutedEventArgs e)
        {
                MasterDeck.CardDelete(41);
                txtEncodeDeck.Text = MasterDeck.DeckExport(MasterDeck);
                GUIDisplay(MasterDeck);
        }
        private void btREC2_Click(object sender, RoutedEventArgs e)
        {
                MasterDeck.CardDelete(42);
                txtEncodeDeck.Text = MasterDeck.DeckExport(MasterDeck);
                GUIDisplay(MasterDeck);
        }
        private void btREC3_Click(object sender, RoutedEventArgs e)
        {
                MasterDeck.CardDelete(43);
                txtEncodeDeck.Text = MasterDeck.DeckExport(MasterDeck);
                GUIDisplay(MasterDeck);
        }
        private void btREC4_Click(object sender, RoutedEventArgs e)
        {
                MasterDeck.CardDelete(44);
                txtEncodeDeck.Text = MasterDeck.DeckExport(MasterDeck);
                GUIDisplay(MasterDeck);
        }
        private void btREC5_Click(object sender, RoutedEventArgs e)
        {
                MasterDeck.CardDelete(45);
                txtEncodeDeck.Text = MasterDeck.DeckExport(MasterDeck);
                GUIDisplay(MasterDeck);
        }
        private void btREC6_Click(object sender, RoutedEventArgs e)
        {
                MasterDeck.CardDelete(46);
                txtEncodeDeck.Text = MasterDeck.DeckExport(MasterDeck);
                GUIDisplay(MasterDeck);
        }
        private void btREC7_Click(object sender, RoutedEventArgs e)
        {
                MasterDeck.CardDelete(47);
                txtEncodeDeck.Text = MasterDeck.DeckExport(MasterDeck);
                GUIDisplay(MasterDeck);
        }
        private void btREC8_Click(object sender, RoutedEventArgs e)
        {
                MasterDeck.CardDelete(48);
                txtEncodeDeck.Text = MasterDeck.DeckExport(MasterDeck);
                GUIDisplay(MasterDeck);
        }

        private void btVEH0_Click(object sender, RoutedEventArgs e)
        {
                MasterDeck.CardDelete(50);
                txtEncodeDeck.Text = MasterDeck.DeckExport(MasterDeck);
                GUIDisplay(MasterDeck);
        }
        private void btVEH1_Click(object sender, RoutedEventArgs e)
        {
                MasterDeck.CardDelete(51);
                txtEncodeDeck.Text = MasterDeck.DeckExport(MasterDeck);
                GUIDisplay(MasterDeck);
        }
        private void btVEH2_Click(object sender, RoutedEventArgs e)
        {
                MasterDeck.CardDelete(52);
                txtEncodeDeck.Text = MasterDeck.DeckExport(MasterDeck);
                GUIDisplay(MasterDeck);
        }
        private void btVEH3_Click(object sender, RoutedEventArgs e)
        {
                MasterDeck.CardDelete(53);
                txtEncodeDeck.Text = MasterDeck.DeckExport(MasterDeck);
                GUIDisplay(MasterDeck);
        }
        private void btVEH4_Click(object sender, RoutedEventArgs e)
        {
                MasterDeck.CardDelete(54);
                txtEncodeDeck.Text = MasterDeck.DeckExport(MasterDeck);
                GUIDisplay(MasterDeck);
        }
        private void btVEH5_Click(object sender, RoutedEventArgs e)
        {
                MasterDeck.CardDelete(55);
                txtEncodeDeck.Text = MasterDeck.DeckExport(MasterDeck);
                GUIDisplay(MasterDeck);
        }
        private void btVEH6_Click(object sender, RoutedEventArgs e)
        {
                MasterDeck.CardDelete(56);
                txtEncodeDeck.Text = MasterDeck.DeckExport(MasterDeck);
                GUIDisplay(MasterDeck);
        }
        private void btVEH7_Click(object sender, RoutedEventArgs e)
        {
                MasterDeck.CardDelete(57);
                txtEncodeDeck.Text = MasterDeck.DeckExport(MasterDeck);
                GUIDisplay(MasterDeck);
        }
        private void btVEH8_Click(object sender, RoutedEventArgs e)
        {
                MasterDeck.CardDelete(58);
                txtEncodeDeck.Text = MasterDeck.DeckExport(MasterDeck);
                GUIDisplay(MasterDeck);
        }

        private void btHEL0_Click(object sender, RoutedEventArgs e)
        {
                MasterDeck.CardDelete(60);
                txtEncodeDeck.Text = MasterDeck.DeckExport(MasterDeck);
                GUIDisplay(MasterDeck);
        }
        private void btHEL1_Click(object sender, RoutedEventArgs e)
        {
                MasterDeck.CardDelete(61);
                txtEncodeDeck.Text = MasterDeck.DeckExport(MasterDeck);
                GUIDisplay(MasterDeck);
        }
        private void btHEL2_Click(object sender, RoutedEventArgs e)
        {
                MasterDeck.CardDelete(62);
                txtEncodeDeck.Text = MasterDeck.DeckExport(MasterDeck);
                GUIDisplay(MasterDeck);
        }
        private void btHEL3_Click(object sender, RoutedEventArgs e)
        {
                MasterDeck.CardDelete(63);
                txtEncodeDeck.Text = MasterDeck.DeckExport(MasterDeck);
                GUIDisplay(MasterDeck);
        }
        private void btHEL4_Click(object sender, RoutedEventArgs e)
        {
                MasterDeck.CardDelete(64);
                txtEncodeDeck.Text = MasterDeck.DeckExport(MasterDeck);
                GUIDisplay(MasterDeck);
        }
        private void btHEL5_Click(object sender, RoutedEventArgs e)
        {
                MasterDeck.CardDelete(65);
                txtEncodeDeck.Text = MasterDeck.DeckExport(MasterDeck);
                GUIDisplay(MasterDeck);
        }
        private void btHEL6_Click(object sender, RoutedEventArgs e)
        {
                MasterDeck.CardDelete(66);
                txtEncodeDeck.Text = MasterDeck.DeckExport(MasterDeck);
                GUIDisplay(MasterDeck);
        }
        private void btHEL7_Click(object sender, RoutedEventArgs e)
        {
                MasterDeck.CardDelete(67);
                txtEncodeDeck.Text = MasterDeck.DeckExport(MasterDeck);
                GUIDisplay(MasterDeck);
        }
        private void btHEL8_Click(object sender, RoutedEventArgs e)
        {
                MasterDeck.CardDelete(68);
                txtEncodeDeck.Text = MasterDeck.DeckExport(MasterDeck);
                GUIDisplay(MasterDeck);
        }

        private void btAIR0_Click(object sender, RoutedEventArgs e)
        {
                MasterDeck.CardDelete(70);
                txtEncodeDeck.Text = MasterDeck.DeckExport(MasterDeck);
                GUIDisplay(MasterDeck);
        }
        private void btAIR1_Click(object sender, RoutedEventArgs e)
        {
                MasterDeck.CardDelete(71);
                txtEncodeDeck.Text = MasterDeck.DeckExport(MasterDeck);
                GUIDisplay(MasterDeck);
        }
        private void btAIR2_Click(object sender, RoutedEventArgs e)
        {
                MasterDeck.CardDelete(72);
                txtEncodeDeck.Text = MasterDeck.DeckExport(MasterDeck);
                GUIDisplay(MasterDeck);
        }
        private void btAIR3_Click(object sender, RoutedEventArgs e)
        {
                MasterDeck.CardDelete(73);
                txtEncodeDeck.Text = MasterDeck.DeckExport(MasterDeck);
                GUIDisplay(MasterDeck);
        }
        private void btAIR4_Click(object sender, RoutedEventArgs e)
        {
                MasterDeck.CardDelete(74);
                txtEncodeDeck.Text = MasterDeck.DeckExport(MasterDeck);
                GUIDisplay(MasterDeck);
        }
        private void btAIR5_Click(object sender, RoutedEventArgs e)
        {
                MasterDeck.CardDelete(75);
                txtEncodeDeck.Text = MasterDeck.DeckExport(MasterDeck);
                GUIDisplay(MasterDeck);
        }
        private void btAIR6_Click(object sender, RoutedEventArgs e)
        {
                MasterDeck.CardDelete(76);
                txtEncodeDeck.Text = MasterDeck.DeckExport(MasterDeck);
                GUIDisplay(MasterDeck);
        }
        private void btAIR7_Click(object sender, RoutedEventArgs e)
        {
                MasterDeck.CardDelete(77);
                txtEncodeDeck.Text = MasterDeck.DeckExport(MasterDeck);
                GUIDisplay(MasterDeck);
        }
        private void btAIR8_Click(object sender, RoutedEventArgs e)
        {
                MasterDeck.CardDelete(78);
                txtEncodeDeck.Text = MasterDeck.DeckExport(MasterDeck);
                GUIDisplay(MasterDeck);
        }
        #endregion delete buttons

        #region Unit add buttons, stats display
        #region LOG
        private void dgDeckLog_SelectionChanged(object sender, SelectionChangedEventArgs e)
        {
            if (dgDeckLog.CurrentItem != null)
            {
                deckRow row = (deckRow)dgDeckLog.SelectedCells[0].Item;
                VehicleCard selCard;
                if (row.iCards!=0  && (row.iCards==null || row.iCards != 0))
                {
                    Datacard dcUnit = MasterDeck.dbLookup(row.UID);
                    if (row.TID == "0")
                    {
                        selCard = new VehicleCard(dcUnit);
                    }
                    else
                    {
                        Datacard dcTransport = MasterDeck.dbLookup(row.TID);
                        selCard = new VehicleCard(dcUnit, dcTransport);
                    }
                    ShowData(selCard, 0);

                    btLOGRookieAdd.Content = row.vet0.ToString();
                    if (row.TID != null)
                    {
                        Datacard dcVeh = MasterDeck.dbLookup(row.TID);
                        selectedCards[0] = new VehicleCard(dcUnit, dcVeh);
                    }
                    else
                    {
                        selectedCards[0] = new VehicleCard(dcUnit);
                    }
                    if (row.vet0 != 0)
                    {
                        btLOGRookieAdd.IsEnabled = true;
                    }
                    else
                    {
                        btLOGRookieAdd.IsEnabled = false;
                    }
                    btLOGTrainedAdd.Content = row.vet1.ToString();
                    if (row.vet1 != 0)
                    {
                        btLOGTrainedAdd.IsEnabled = true;
                    }
                    else
                    {
                        btLOGTrainedAdd.IsEnabled = false;
                    }
                    btLOGHardenedAdd.Content = row.vet2.ToString();
                    if (row.vet2 != 0)
                    {
                        btLOGHardenedAdd.IsEnabled = true;
                    }
                    else
                    {
                        btLOGHardenedAdd.IsEnabled = false;
                    }
                    btLOGVeteranAdd.Content = row.vet3.ToString();
                    if (row.vet3 != 0)
                    {
                        btLOGVeteranAdd.IsEnabled = true;
                    }
                    else
                    {
                        btLOGVeteranAdd.IsEnabled = false;
                    }
                    btLOGEliteAdd.Content = row.vet4.ToString();
                    if (row.vet4 != 0)
                    {
                        btLOGEliteAdd.IsEnabled = true;
                    }
                    else
                    {
                        btLOGEliteAdd.IsEnabled = false;
                    }
                }
                else
                {
                    btLOGRookieAdd.IsEnabled = false;
                    btLOGTrainedAdd.IsEnabled = false;
                    btLOGHardenedAdd.IsEnabled = false;
                    btLOGVeteranAdd.IsEnabled = false;
                    btLOGEliteAdd.IsEnabled = false;
                }
            }
        }

        private void btLOGRookieAdd_Click(object sender, RoutedEventArgs e)
        {
            MasterDeck.AddCard("000", selectedCards[0].Unit.iUnitID, selectedCards[0].Transport.iUnitID);
            GUIDisplay(MasterDeck);
            txtEncodeDeck.Text = MasterDeck.DeckExport(MasterDeck);

        }

        private void btLOGTrainedAdd_Click(object sender, RoutedEventArgs e)
        {
            MasterDeck.AddCard("001", selectedCards[0].Unit.iUnitID, selectedCards[0].Transport.iUnitID);
            GUIDisplay(MasterDeck);
            txtEncodeDeck.Text = MasterDeck.DeckExport(MasterDeck);

        }

        private void btLOGHardenedAdd_Click(object sender, RoutedEventArgs e)
        {
            MasterDeck.AddCard("010", selectedCards[0].Unit.iUnitID, selectedCards[0].Transport.iUnitID);
            GUIDisplay(MasterDeck);
            txtEncodeDeck.Text = MasterDeck.DeckExport(MasterDeck);

        }

        private void btLOGVeteranAdd_Click(object sender, RoutedEventArgs e)
        {
            MasterDeck.AddCard("011", selectedCards[0].Unit.iUnitID, selectedCards[0].Transport.iUnitID);
            GUIDisplay(MasterDeck);
            txtEncodeDeck.Text = MasterDeck.DeckExport(MasterDeck);

        }

        private void btLOGEliteAdd_Click(object sender, RoutedEventArgs e)
        {
            MasterDeck.AddCard("100", selectedCards[0].Unit.iUnitID, selectedCards[0].Transport.iUnitID);
            GUIDisplay(MasterDeck);
            txtEncodeDeck.Text = MasterDeck.DeckExport(MasterDeck);

        }
        #endregion LOG
        #region INF
        private void dgDeckInf_SelectionChanged(object sender, SelectionChangedEventArgs e)
        {
            if (dgDeckInf.CurrentItem != null)
            {
                deckRow row = (deckRow)dgDeckInf.SelectedCells[0].Item;
                VehicleCard selCard;
                if (row.iCards!=0  && (row.iCards==null || row.iCards != 0))
                {
                    Datacard dcUnit = MasterDeck.dbLookup(row.UID);
                    if (row.TID == "0")
                    {
                        selCard = new VehicleCard(dcUnit);
                    }
                    else
                    {
                        Datacard dcTransport = MasterDeck.dbLookup(row.TID);
                        selCard = new VehicleCard(dcUnit, dcTransport);
                    }
                    ShowData(selCard, 1);

                    btINFRookieAdd.Content = row.vet0.ToString();
                    if (row.TID != null)
                    {
                        Datacard dcVeh = MasterDeck.dbLookup(row.TID);
                        selectedCards[1] = new VehicleCard(dcUnit, dcVeh);
                    }
                    else
                    {
                        selectedCards[1] = new VehicleCard(dcUnit);
                    }
                    if (row.vet0 != 0)
                    {
                        btINFRookieAdd.IsEnabled = true;
                    }
                    else
                    {
                        btINFRookieAdd.IsEnabled = false;
                    }
                    btINFTrainedAdd.Content = row.vet1.ToString();
                    if (row.vet1 != 0)
                    {
                        btINFTrainedAdd.IsEnabled = true;
                    }
                    else
                    {
                        btINFTrainedAdd.IsEnabled = false;
                    }
                    btINFHardenedAdd.Content = row.vet2.ToString();
                    if (row.vet2 != 0)
                    {
                        btINFHardenedAdd.IsEnabled = true;
                    }
                    else
                    {
                        btINFHardenedAdd.IsEnabled = false;
                    }
                    btINFVeteranAdd.Content = row.vet3.ToString();
                    if (row.vet3 != 0)
                    {
                        btINFVeteranAdd.IsEnabled = true;
                    }
                    else
                    {
                        btINFVeteranAdd.IsEnabled = false;
                    }
                    btINFEliteAdd.Content = row.vet4.ToString();
                    if (row.vet4 != 0)
                    {
                        btINFEliteAdd.IsEnabled = true;
                    }
                    else
                    {
                        btINFEliteAdd.IsEnabled = false;
                    }
                }
                else
                {
                    btINFRookieAdd.IsEnabled = false;
                    btINFTrainedAdd.IsEnabled = false;
                    btINFHardenedAdd.IsEnabled = false;
                    btINFVeteranAdd.IsEnabled = false;
                    btINFEliteAdd.IsEnabled = false;
                }
            }
        }

        private void btINFRookieAdd_Click(object sender, RoutedEventArgs e)
        {
            MasterDeck.AddCard("000", selectedCards[1].Unit.iUnitID, selectedCards[1].Transport.iUnitID);
            GUIDisplay(MasterDeck);
            txtEncodeDeck.Text = MasterDeck.DeckExport(MasterDeck);

        }

        private void btINFTrainedAdd_Click(object sender, RoutedEventArgs e)
        {
            MasterDeck.AddCard("001", selectedCards[1].Unit.iUnitID, selectedCards[1].Transport.iUnitID);
            GUIDisplay(MasterDeck);
            txtEncodeDeck.Text = MasterDeck.DeckExport(MasterDeck);

        }

        private void btINFHardenedAdd_Click(object sender, RoutedEventArgs e)
        {
            MasterDeck.AddCard("010", selectedCards[1].Unit.iUnitID, selectedCards[1].Transport.iUnitID);
            GUIDisplay(MasterDeck);
            txtEncodeDeck.Text = MasterDeck.DeckExport(MasterDeck);

        }

        private void btINFVeteranAdd_Click(object sender, RoutedEventArgs e)
        {
            MasterDeck.AddCard("011", selectedCards[1].Unit.iUnitID, selectedCards[1].Transport.iUnitID);
            GUIDisplay(MasterDeck);
            txtEncodeDeck.Text = MasterDeck.DeckExport(MasterDeck);

        }

        private void btINFEliteAdd_Click(object sender, RoutedEventArgs e)
        {
            MasterDeck.AddCard("100", selectedCards[1].Unit.iUnitID, selectedCards[1].Transport.iUnitID);
            GUIDisplay(MasterDeck);
            txtEncodeDeck.Text = MasterDeck.DeckExport(MasterDeck);

        }
        #endregion INF
        #region SUP
        private void dgDeckSup_SelectionChanged(object sender, SelectionChangedEventArgs e)
        {
            if (dgDeckSup.CurrentItem != null)
            {
                deckRow row = (deckRow)dgDeckSup.SelectedCells[0].Item;
                if (row.iCards!=0  && (row.iCards==null || row.iCards != 0))
                {
                    VehicleCard selCard;
                    Datacard dcUnit = MasterDeck.dbLookup(row.UID);
                    if (row.TID == "0")
                    {
                        selCard = new VehicleCard(dcUnit);
                    }
                    else
                    {
                        Datacard dcTransport = MasterDeck.dbLookup(row.TID);
                        selCard = new VehicleCard(dcUnit, dcTransport);
                    }
                    ShowData(selCard, 2);

                    btSUPRookieAdd.Content = row.vet0.ToString();
                    if (row.TID != null)
                    {
                        Datacard dcVeh = MasterDeck.dbLookup(row.TID);
                        selectedCards[2] = new VehicleCard(dcUnit, dcVeh);
                    }
                    else
                    {
                        selectedCards[2] = new VehicleCard(dcUnit);
                    }
                    if (row.vet0 != 0)
                    {
                        btSUPRookieAdd.IsEnabled = true;
                    }
                    else
                    {
                        btSUPRookieAdd.IsEnabled = false;
                    }
                    btSUPTrainedAdd.Content = row.vet1.ToString();
                    if (row.vet1 != 0)
                    {
                        btSUPTrainedAdd.IsEnabled = true;
                    }
                    else
                    {
                        btSUPTrainedAdd.IsEnabled = false;
                    }
                    btSUPHardenedAdd.Content = row.vet2.ToString();
                    if (row.vet2 != 0)
                    {
                        btSUPHardenedAdd.IsEnabled = true;
                    }
                    else
                    {
                        btSUPHardenedAdd.IsEnabled = false;
                    }
                    btSUPVeteranAdd.Content = row.vet3.ToString();
                    if (row.vet3 != 0)
                    {
                        btSUPVeteranAdd.IsEnabled = true;
                    }
                    else
                    {
                        btSUPVeteranAdd.IsEnabled = false;
                    }
                    btSUPEliteAdd.Content = row.vet4.ToString();
                    if (row.vet4 != 0)
                    {
                        btSUPEliteAdd.IsEnabled = true;
                    }
                    else
                    {
                        btSUPEliteAdd.IsEnabled = false;
                    }
                }
                else
                {
                    btSUPRookieAdd.IsEnabled = false;
                    btSUPTrainedAdd.IsEnabled = false;
                    btSUPHardenedAdd.IsEnabled = false;
                    btSUPVeteranAdd.IsEnabled = false;
                    btSUPEliteAdd.IsEnabled = false;
                }
            }
        }

        private void btSUPRookieAdd_Click(object sender, RoutedEventArgs e)
        {
            MasterDeck.AddCard("000", selectedCards[2].Unit.iUnitID, selectedCards[2].Transport.iUnitID);
            GUIDisplay(MasterDeck);
            txtEncodeDeck.Text = MasterDeck.DeckExport(MasterDeck);

        }

        private void btSUPTrainedAdd_Click(object sender, RoutedEventArgs e)
        {
            MasterDeck.AddCard("001", selectedCards[2].Unit.iUnitID, selectedCards[2].Transport.iUnitID);
            GUIDisplay(MasterDeck);
            txtEncodeDeck.Text = MasterDeck.DeckExport(MasterDeck);

        }

        private void btSUPHardenedAdd_Click(object sender, RoutedEventArgs e)
        {
            MasterDeck.AddCard("010", selectedCards[2].Unit.iUnitID, selectedCards[2].Transport.iUnitID);
            GUIDisplay(MasterDeck);
            txtEncodeDeck.Text = MasterDeck.DeckExport(MasterDeck);

        }

        private void btSUPVeteranAdd_Click(object sender, RoutedEventArgs e)
        {
            MasterDeck.AddCard("011", selectedCards[2].Unit.iUnitID, selectedCards[2].Transport.iUnitID);
            GUIDisplay(MasterDeck);
            txtEncodeDeck.Text = MasterDeck.DeckExport(MasterDeck);

        }

        private void btSUPEliteAdd_Click(object sender, RoutedEventArgs e)
        {
            MasterDeck.AddCard("100", selectedCards[2].Unit.iUnitID, selectedCards[2].Transport.iUnitID);
            GUIDisplay(MasterDeck);
            txtEncodeDeck.Text = MasterDeck.DeckExport(MasterDeck);

        }
        #endregion SUP
        #region TNK
        private void dgDeckTnk_SelectionChanged(object sender, SelectionChangedEventArgs e)
        {
            if (dgDeckTnk.CurrentItem != null)
            {
                deckRow row = (deckRow)dgDeckTnk.SelectedCells[0].Item;
                if (row.iCards!=0  && (row.iCards==null || row.iCards != 0))
                {
                    VehicleCard selCard;
                    Datacard dcUnit = MasterDeck.dbLookup(row.UID);
                    if (row.TID == "0")
                    {
                        selCard = new VehicleCard(dcUnit);
                    }
                    else
                    {
                        Datacard dcTransport = MasterDeck.dbLookup(row.TID);
                        selCard = new VehicleCard(dcUnit, dcTransport);
                    }
                    ShowData(selCard, 3);

                    btTNKRookieAdd.Content = row.vet0.ToString();
                    if (row.TID != null)
                    {
                        Datacard dcVeh = MasterDeck.dbLookup(row.TID);
                        selectedCards[3] = new VehicleCard(dcUnit, dcVeh);
                    }
                    else
                    {
                        selectedCards[3] = new VehicleCard(dcUnit);
                    }
                    if (row.vet0 != 0)
                    {
                        btTNKRookieAdd.IsEnabled = true;
                    }
                    else
                    {
                        btTNKRookieAdd.IsEnabled = false;
                    }
                    btTNKTrainedAdd.Content = row.vet1.ToString();
                    if (row.vet1 != 0)
                    {
                        btTNKTrainedAdd.IsEnabled = true;
                    }
                    else
                    {
                        btTNKTrainedAdd.IsEnabled = false;
                    }
                    btTNKHardenedAdd.Content = row.vet2.ToString();
                    if (row.vet2 != 0)
                    {
                        btTNKHardenedAdd.IsEnabled = true;
                    }
                    else
                    {
                        btTNKHardenedAdd.IsEnabled = false;
                    }
                    btTNKVeteranAdd.Content = row.vet3.ToString();
                    if (row.vet3 != 0)
                    {
                        btTNKVeteranAdd.IsEnabled = true;
                    }
                    else
                    {
                        btTNKVeteranAdd.IsEnabled = false;
                    }
                    btTNKEliteAdd.Content = row.vet4.ToString();
                    if (row.vet4 != 0)
                    {
                        btTNKEliteAdd.IsEnabled = true;
                    }
                    else
                    {
                        btTNKEliteAdd.IsEnabled = false;
                    }
                }
                else
                {
                    btTNKRookieAdd.IsEnabled = false;
                    btTNKTrainedAdd.IsEnabled = false;
                    btTNKHardenedAdd.IsEnabled = false;
                    btTNKVeteranAdd.IsEnabled = false;
                    btTNKEliteAdd.IsEnabled = false;
                }
            }
        }

        private void btTNKRookieAdd_Click(object sender, RoutedEventArgs e)
        {
            MasterDeck.AddCard("000", selectedCards[3].Unit.iUnitID, selectedCards[3].Transport.iUnitID);
            GUIDisplay(MasterDeck);
            txtEncodeDeck.Text = MasterDeck.DeckExport(MasterDeck);

        }

        private void btTNKTrainedAdd_Click(object sender, RoutedEventArgs e)
        {
            MasterDeck.AddCard("001", selectedCards[3].Unit.iUnitID, selectedCards[3].Transport.iUnitID);
            GUIDisplay(MasterDeck);
            txtEncodeDeck.Text = MasterDeck.DeckExport(MasterDeck);

        }

        private void btTNKHardenedAdd_Click(object sender, RoutedEventArgs e)
        {
            MasterDeck.AddCard("010", selectedCards[3].Unit.iUnitID, selectedCards[3].Transport.iUnitID);
            GUIDisplay(MasterDeck);
            txtEncodeDeck.Text = MasterDeck.DeckExport(MasterDeck);

        }

        private void btTNKVeteranAdd_Click(object sender, RoutedEventArgs e)
        {
            MasterDeck.AddCard("011", selectedCards[3].Unit.iUnitID, selectedCards[3].Transport.iUnitID);
            GUIDisplay(MasterDeck);
            txtEncodeDeck.Text = MasterDeck.DeckExport(MasterDeck);

        }

        private void btTNKEliteAdd_Click(object sender, RoutedEventArgs e)
        {
            MasterDeck.AddCard("100", selectedCards[3].Unit.iUnitID, selectedCards[3].Transport.iUnitID);
            GUIDisplay(MasterDeck);
            txtEncodeDeck.Text = MasterDeck.DeckExport(MasterDeck);

        }
        #endregion TNK
        #region REC
        private void dgDeckRec_SelectionChanged(object sender, SelectionChangedEventArgs e)
        {
            if (dgDeckRec.CurrentItem != null)
            {
                deckRow row = (deckRow)dgDeckRec.SelectedCells[0].Item;
                if (row.iCards!=0  && (row.iCards==null || row.iCards != 0))
                {
                    VehicleCard selCard;
                    Datacard dcUnit = MasterDeck.dbLookup(row.UID);
                    if (row.TID == "0")
                    {
                        selCard = new VehicleCard(dcUnit);
                    }
                    else
                    {
                        Datacard dcTransport = MasterDeck.dbLookup(row.TID);
                        selCard = new VehicleCard(dcUnit, dcTransport);
                    }
                    ShowData(selCard, 4);

                    btRECRookieAdd.Content = row.vet0.ToString();
                    if (row.TID != null)
                    {
                        Datacard dcVeh = MasterDeck.dbLookup(row.TID);
                        selectedCards[4] = new VehicleCard(dcUnit, dcVeh);
                    }
                    else
                    {
                        selectedCards[4] = new VehicleCard(dcUnit);
                    }
                    if (row.vet0 != 0)
                    {
                        btRECRookieAdd.IsEnabled = true;
                    }
                    else
                    {
                        btRECRookieAdd.IsEnabled = false;
                    }
                    btRECTrainedAdd.Content = row.vet1.ToString();
                    if (row.vet1 != 0)
                    {
                        btRECTrainedAdd.IsEnabled = true;
                    }
                    else
                    {
                        btRECTrainedAdd.IsEnabled = false;
                    }
                    btRECHardenedAdd.Content = row.vet2.ToString();
                    if (row.vet2 != 0)
                    {
                        btRECHardenedAdd.IsEnabled = true;
                    }
                    else
                    {
                        btRECHardenedAdd.IsEnabled = false;
                    }
                    btRECVeteranAdd.Content = row.vet3.ToString();
                    if (row.vet3 != 0)
                    {
                        btRECVeteranAdd.IsEnabled = true;
                    }
                    else
                    {
                        btRECVeteranAdd.IsEnabled = false;
                    }
                    btRECEliteAdd.Content = row.vet4.ToString();
                    if (row.vet4 != 0)
                    {
                        btRECEliteAdd.IsEnabled = true;
                    }
                    else
                    {
                        btRECEliteAdd.IsEnabled = false;
                    }
                }
                else
                {
                    btRECRookieAdd.IsEnabled = false;
                    btRECTrainedAdd.IsEnabled = false;
                    btRECHardenedAdd.IsEnabled = false;
                    btRECVeteranAdd.IsEnabled = false;
                    btRECEliteAdd.IsEnabled = false;
                }
            }
        }

        private void btRECRookieAdd_Click(object sender, RoutedEventArgs e)
        {
            MasterDeck.AddCard("000", selectedCards[4].Unit.iUnitID, selectedCards[4].Transport.iUnitID);
            GUIDisplay(MasterDeck);
            txtEncodeDeck.Text = MasterDeck.DeckExport(MasterDeck);

        }

        private void btRECTrainedAdd_Click(object sender, RoutedEventArgs e)
        {
            MasterDeck.AddCard("001", selectedCards[4].Unit.iUnitID, selectedCards[4].Transport.iUnitID);
            GUIDisplay(MasterDeck);
            txtEncodeDeck.Text = MasterDeck.DeckExport(MasterDeck);

        }

        private void btRECHardenedAdd_Click(object sender, RoutedEventArgs e)
        {
            MasterDeck.AddCard("010", selectedCards[4].Unit.iUnitID, selectedCards[4].Transport.iUnitID);
            GUIDisplay(MasterDeck);
            txtEncodeDeck.Text = MasterDeck.DeckExport(MasterDeck);

        }

        private void btRECVeteranAdd_Click(object sender, RoutedEventArgs e)
        {
            MasterDeck.AddCard("011", selectedCards[4].Unit.iUnitID, selectedCards[4].Transport.iUnitID);
            GUIDisplay(MasterDeck);
            txtEncodeDeck.Text = MasterDeck.DeckExport(MasterDeck);

        }

        private void btRECEliteAdd_Click(object sender, RoutedEventArgs e)
        {
            MasterDeck.AddCard("100", selectedCards[4].Unit.iUnitID, selectedCards[4].Transport.iUnitID);
            GUIDisplay(MasterDeck);
            txtEncodeDeck.Text = MasterDeck.DeckExport(MasterDeck);

        }
        #endregion REC
        #region VEH
        private void dgDeckVeh_SelectionChanged(object sender, SelectionChangedEventArgs e)
        {
            if (dgDeckVeh.CurrentItem != null)
            {
                deckRow row = (deckRow)dgDeckVeh.SelectedCells[0].Item;
                if (row.iCards!=0  && (row.iCards==null || row.iCards != 0))
                {
                    VehicleCard selCard;
                    Datacard dcUnit = MasterDeck.dbLookup(row.UID);
                    if (row.TID == "0")
                    {
                        selCard = new VehicleCard(dcUnit);
                    }
                    else
                    {
                        Datacard dcTransport = MasterDeck.dbLookup(row.TID);
                        selCard = new VehicleCard(dcUnit, dcTransport);
                    }
                    ShowData(selCard, 5);

                    btVEHRookieAdd.Content = row.vet0.ToString();
                    if (row.TID != null)
                    {
                        Datacard dcVeh = MasterDeck.dbLookup(row.TID);
                        selectedCards[5] = new VehicleCard(dcUnit, dcVeh);
                    }
                    else
                    {
                        selectedCards[5] = new VehicleCard(dcUnit);
                    }
                    if (row.vet0 != 0)
                    {
                        btVEHRookieAdd.IsEnabled = true;
                    }
                    else
                    {
                        btVEHRookieAdd.IsEnabled = false;
                    }
                    btVEHTrainedAdd.Content = row.vet1.ToString();
                    if (row.vet1 != 0)
                    {
                        btVEHTrainedAdd.IsEnabled = true;
                    }
                    else
                    {
                        btVEHTrainedAdd.IsEnabled = false;
                    }
                    btVEHHardenedAdd.Content = row.vet2.ToString();
                    if (row.vet2 != 0)
                    {
                        btVEHHardenedAdd.IsEnabled = true;
                    }
                    else
                    {
                        btVEHHardenedAdd.IsEnabled = false;
                    }
                    btVEHVeteranAdd.Content = row.vet3.ToString();
                    if (row.vet3 != 0)
                    {
                        btVEHVeteranAdd.IsEnabled = true;
                    }
                    else
                    {
                        btVEHVeteranAdd.IsEnabled = false;
                    }
                    btVEHEliteAdd.Content = row.vet4.ToString();
                    if (row.vet4 != 0)
                    {
                        btVEHEliteAdd.IsEnabled = true;
                    }
                    else
                    {
                        btVEHEliteAdd.IsEnabled = false;
                    }
                }
                else
                {
                    btVEHRookieAdd.IsEnabled = false;
                    btVEHTrainedAdd.IsEnabled = false;
                    btVEHHardenedAdd.IsEnabled = false;
                    btVEHVeteranAdd.IsEnabled = false;
                    btVEHEliteAdd.IsEnabled = false;
                }
            }
        }

        private void btVEHRookieAdd_Click(object sender, RoutedEventArgs e)
        {
            MasterDeck.AddCard("000", selectedCards[5].Unit.iUnitID, selectedCards[5].Transport.iUnitID);
            GUIDisplay(MasterDeck);
            txtEncodeDeck.Text = MasterDeck.DeckExport(MasterDeck);

        }

        private void btVEHTrainedAdd_Click(object sender, RoutedEventArgs e)
        {
            MasterDeck.AddCard("001", selectedCards[5].Unit.iUnitID, selectedCards[5].Transport.iUnitID);
            GUIDisplay(MasterDeck);
            txtEncodeDeck.Text = MasterDeck.DeckExport(MasterDeck);

        }

        private void btVEHHardenedAdd_Click(object sender, RoutedEventArgs e)
        {
            MasterDeck.AddCard("010", selectedCards[5].Unit.iUnitID, selectedCards[5].Transport.iUnitID);
            GUIDisplay(MasterDeck);
            txtEncodeDeck.Text = MasterDeck.DeckExport(MasterDeck);

        }

        private void btVEHVeteranAdd_Click(object sender, RoutedEventArgs e)
        {
            MasterDeck.AddCard("011", selectedCards[5].Unit.iUnitID, selectedCards[5].Transport.iUnitID);
            GUIDisplay(MasterDeck);
            txtEncodeDeck.Text = MasterDeck.DeckExport(MasterDeck);

        }

        private void btVEHEliteAdd_Click(object sender, RoutedEventArgs e)
        {
            MasterDeck.AddCard("100", selectedCards[5].Unit.iUnitID, selectedCards[5].Transport.iUnitID);
            GUIDisplay(MasterDeck);
            txtEncodeDeck.Text = MasterDeck.DeckExport(MasterDeck);

        }
        #endregion VEH
        #region HEL
        private void dgDeckHel_SelectionChanged(object sender, SelectionChangedEventArgs e)
        {
            if (dgDeckHel.CurrentItem != null)
            {
                deckRow row = (deckRow)dgDeckHel.SelectedCells[0].Item;
                if (row.iCards!=0  && (row.iCards==null || row.iCards != 0))
                {

                    VehicleCard selCard;
                    Datacard dcUnit = MasterDeck.dbLookup(row.UID);
                    if (row.TID == "0")
                    {
                        selCard = new VehicleCard(dcUnit);
                    }
                    else
                    {
                        Datacard dcTransport = MasterDeck.dbLookup(row.TID);
                        selCard = new VehicleCard(dcUnit, dcTransport);
                    }
                    ShowData(selCard, 6);

                    btHELRookieAdd.Content = row.vet0.ToString();
                    if (row.TID != null)
                    {
                        Datacard dcVeh = MasterDeck.dbLookup(row.TID);
                        selectedCards[6] = new VehicleCard(dcUnit, dcVeh);
                    }
                    else
                    {
                        selectedCards[6] = new VehicleCard(dcUnit);
                    }
                    if (row.vet0 != 0)
                    {
                        btHELRookieAdd.IsEnabled = true;
                    }
                    else
                    {
                        btHELRookieAdd.IsEnabled = false;
                    }
                    btHELTrainedAdd.Content = row.vet1.ToString();
                    if (row.vet1 != 0)
                    {
                        btHELTrainedAdd.IsEnabled = true;
                    }
                    else
                    {
                        btHELTrainedAdd.IsEnabled = false;
                    }
                    btHELHardenedAdd.Content = row.vet2.ToString();
                    if (row.vet2 != 0)
                    {
                        btHELHardenedAdd.IsEnabled = true;
                    }
                    else
                    {
                        btHELHardenedAdd.IsEnabled = false;
                    }
                    btHELVeteranAdd.Content = row.vet3.ToString();
                    if (row.vet3 != 0)
                    {
                        btHELVeteranAdd.IsEnabled = true;
                    }
                    else
                    {
                        btHELVeteranAdd.IsEnabled = false;
                    }
                    btHELEliteAdd.Content = row.vet4.ToString();
                    if (row.vet4 != 0)
                    {
                        btHELEliteAdd.IsEnabled = true;
                    }
                    else
                    {
                        btHELEliteAdd.IsEnabled = false;
                    }
                }
                else
                {
                    btHELRookieAdd.IsEnabled = false;
                    btHELTrainedAdd.IsEnabled = false;
                    btHELHardenedAdd.IsEnabled = false;
                    btHELVeteranAdd.IsEnabled = false;
                    btHELEliteAdd.IsEnabled = false;
                }
            }
        }

        private void btHELRookieAdd_Click(object sender, RoutedEventArgs e)
        {
            MasterDeck.AddCard("000", selectedCards[6].Unit.iUnitID, selectedCards[6].Transport.iUnitID);
            GUIDisplay(MasterDeck);
            txtEncodeDeck.Text = MasterDeck.DeckExport(MasterDeck);

        }

        private void btHELTrainedAdd_Click(object sender, RoutedEventArgs e)
        {
            MasterDeck.AddCard("001", selectedCards[6].Unit.iUnitID, selectedCards[6].Transport.iUnitID);
            GUIDisplay(MasterDeck);
            txtEncodeDeck.Text = MasterDeck.DeckExport(MasterDeck);

        }

        private void btHELHardenedAdd_Click(object sender, RoutedEventArgs e)
        {
            MasterDeck.AddCard("010", selectedCards[6].Unit.iUnitID, selectedCards[6].Transport.iUnitID);
            GUIDisplay(MasterDeck);
            txtEncodeDeck.Text = MasterDeck.DeckExport(MasterDeck);

        }

        private void btHELVeteranAdd_Click(object sender, RoutedEventArgs e)
        {
            MasterDeck.AddCard("011", selectedCards[6].Unit.iUnitID, selectedCards[6].Transport.iUnitID);
            GUIDisplay(MasterDeck);
            txtEncodeDeck.Text = MasterDeck.DeckExport(MasterDeck);

        }

        private void btHELEliteAdd_Click(object sender, RoutedEventArgs e)
        {
            MasterDeck.AddCard("100", selectedCards[6].Unit.iUnitID, selectedCards[6].Transport.iUnitID);
            GUIDisplay(MasterDeck);
            txtEncodeDeck.Text = MasterDeck.DeckExport(MasterDeck);

        }
        #endregion HEL
        #region AIR
        private void dgDeckAir_SelectionChanged(object sender, SelectionChangedEventArgs e)
        {
            if (dgDeckAir.CurrentItem != null)
            {
                deckRow row = (deckRow)dgDeckAir.SelectedCells[0].Item;
                if (row.iCards!=0  && (row.iCards==null || row.iCards != 0))
                {

                    VehicleCard selCard;
                    Datacard dcUnit = MasterDeck.dbLookup(row.UID);
                    if (row.TID == "0")
                    {
                        selCard = new VehicleCard(dcUnit);
                    }
                    else
                    {
                        Datacard dcTransport = MasterDeck.dbLookup(row.TID);
                        selCard = new VehicleCard(dcUnit, dcTransport);
                    }
                    ShowData(selCard, 7);

                    btAIRRookieAdd.Content = row.vet0.ToString();
                    if (row.TID != null)
                    {
                        Datacard dcVeh = MasterDeck.dbLookup(row.TID);
                        selectedCards[7] = new VehicleCard(dcUnit, dcVeh);
                    }
                    else
                    {
                        selectedCards[7] = new VehicleCard(dcUnit);
                    }
                    if (row.vet0 != 0)
                    {
                        btAIRRookieAdd.IsEnabled = true;
                    }
                    else
                    {
                        btAIRRookieAdd.IsEnabled = false;
                    }
                    btAIRTrainedAdd.Content = row.vet1.ToString();
                    if (row.vet1 != 0)
                    {
                        btAIRTrainedAdd.IsEnabled = true;
                    }
                    else
                    {
                        btAIRTrainedAdd.IsEnabled = false;
                    }
                    btAIRHardenedAdd.Content = row.vet2.ToString();
                    if (row.vet2 != 0)
                    {
                        btAIRHardenedAdd.IsEnabled = true;
                    }
                    else
                    {
                        btAIRHardenedAdd.IsEnabled = false;
                    }
                    btAIRVeteranAdd.Content = row.vet3.ToString();
                    if (row.vet3 != 0)
                    {
                        btAIRVeteranAdd.IsEnabled = true;
                    }
                    else
                    {
                        btAIRVeteranAdd.IsEnabled = false;
                    }
                    btAIREliteAdd.Content = row.vet4.ToString();
                    if (row.vet4 != 0)
                    {
                        btAIREliteAdd.IsEnabled = true;
                    }
                    else
                    {
                        btAIREliteAdd.IsEnabled = false;
                    }
                }
                else
                {
                    btAIRRookieAdd.IsEnabled = false;
                    btAIRTrainedAdd.IsEnabled = false;
                    btAIRHardenedAdd.IsEnabled = false;
                    btAIRVeteranAdd.IsEnabled = false;
                    btAIREliteAdd.IsEnabled = false;
                }
            }
        }

        private void btAIRRookieAdd_Click(object sender, RoutedEventArgs e)
        {
            MasterDeck.AddCard("000", selectedCards[7].Unit.iUnitID, selectedCards[7].Transport.iUnitID);
            GUIDisplay(MasterDeck);
            txtEncodeDeck.Text = MasterDeck.DeckExport(MasterDeck);
        }

        private void btAIRTrainedAdd_Click(object sender, RoutedEventArgs e)
        {
            MasterDeck.AddCard("001", selectedCards[7].Unit.iUnitID, selectedCards[7].Transport.iUnitID);
            GUIDisplay(MasterDeck);
            txtEncodeDeck.Text = MasterDeck.DeckExport(MasterDeck);
        }

        private void btAIRHardenedAdd_Click(object sender, RoutedEventArgs e)
        {
            MasterDeck.AddCard("010", selectedCards[7].Unit.iUnitID, selectedCards[7].Transport.iUnitID);
            GUIDisplay(MasterDeck);
            txtEncodeDeck.Text = MasterDeck.DeckExport(MasterDeck);
        }

        private void btAIRVeteranAdd_Click(object sender, RoutedEventArgs e)
        {
            MasterDeck.AddCard("011", selectedCards[7].Unit.iUnitID, selectedCards[7].Transport.iUnitID);
            GUIDisplay(MasterDeck);
            txtEncodeDeck.Text = MasterDeck.DeckExport(MasterDeck);
        }

        private void btAIREliteAdd_Click(object sender, RoutedEventArgs e)
        {
            MasterDeck.AddCard("011", selectedCards[7].Unit.iUnitID, selectedCards[7].Transport.iUnitID);
            GUIDisplay(MasterDeck);
            txtEncodeDeck.Text = MasterDeck.DeckExport(MasterDeck);
        }
        #endregion AIR
        #endregion Unit add buttons

        #region Caregory select
        private void btCatA_Click(object sender, RoutedEventArgs e)
        {
            MasterDeck.sEra = "A";

            GUIDisplay(MasterDeck);
            txtEncodeDeck.Text = MasterDeck.DeckExport(MasterDeck);
        }

        private void btCatB_Click(object sender, RoutedEventArgs e)
        {
            MasterDeck.sEra = "B";

            GUIDisplay(MasterDeck);
            txtEncodeDeck.Text = MasterDeck.DeckExport(MasterDeck);
            PrintDebug();
        }

        private void btCatC_Click(object sender, RoutedEventArgs e)
        {
            MasterDeck.sEra = "C";

            GUIDisplay(MasterDeck);
            txtEncodeDeck.Text = MasterDeck.DeckExport(MasterDeck);
            PrintDebug();
        }
        #endregion category select

        #region spec select
        private void btMarine_Click(object sender, RoutedEventArgs e)
        {
            ConvertToGen();
            MasterDeck.sSpec = "MAR";
            ConvertToSpec();

            GUIDisplay(MasterDeck);
            txtEncodeDeck.Text = MasterDeck.DeckExport(MasterDeck);

        }

        private void btAirborne_Click(object sender, RoutedEventArgs e)
        {
            ConvertToGen();
            MasterDeck.sSpec = "AIR";
            ConvertToSpec();

            GUIDisplay(MasterDeck);
            txtEncodeDeck.Text = MasterDeck.DeckExport(MasterDeck);
        }

        private void btMechanized_Click(object sender, RoutedEventArgs e)
        {
            ConvertToGen();
            MasterDeck.sSpec = "MECH";
            ConvertToSpec();

            GUIDisplay(MasterDeck);
            txtEncodeDeck.Text = MasterDeck.DeckExport(MasterDeck);

        }

        private void btArmoured_Click(object sender, RoutedEventArgs e)
        {
            ConvertToGen();
            MasterDeck.sSpec = "ARM";
            ConvertToSpec();

            GUIDisplay(MasterDeck);
            txtEncodeDeck.Text = MasterDeck.DeckExport(MasterDeck);

        }

        private void btMotorized_Click(object sender, RoutedEventArgs e)
        {
            ConvertToGen();
            MasterDeck.sSpec = "MOTO";
            ConvertToSpec();

            GUIDisplay(MasterDeck);
            txtEncodeDeck.Text = MasterDeck.DeckExport(MasterDeck);

        }

        private void btSupport_Click(object sender, RoutedEventArgs e)
        {
            ConvertToGen();
            MasterDeck.sSpec = "SUP";
            ConvertToSpec();

            GUIDisplay(MasterDeck);
            txtEncodeDeck.Text = MasterDeck.DeckExport(MasterDeck);

        }

        private void btGeneral_Click(object sender, RoutedEventArgs e)
        {
            ConvertToGen();
            MasterDeck.sSpec = "GEN";

            GUIDisplay(MasterDeck);
            txtEncodeDeck.Text = MasterDeck.DeckExport(MasterDeck);

        }
        #endregion spec select

        #endregion
*/
/*
        #region specialty converter
        private void ConvertToGen()
        {
            for (int i = 0; i < 72; i++)
            {
                if (MasterDeck.Cards0T[i] != null)
                {
                    MasterDeck.Cards0T[i] = toGen(MasterDeck.Cards0T[i]);
                }
                if (MasterDeck.Cards1T[i] != null)
                {
                    MasterDeck.Cards1T[i] = toGen(MasterDeck.Cards1T[i]);
                }
                if (MasterDeck.Cards2T[i] != null)
                {
                    MasterDeck.Cards2T[i] = toGen(MasterDeck.Cards2T[i]);
                }
            }
        }
        private void ConvertToSpec()
        {
            for(int i=0;i<72;i++)
            {
                if (MasterDeck.Cards0T[i] != null)
                {
                    MasterDeck.Cards0T[i] = toSpec(MasterDeck.Cards0T[i]);
                }
                if (MasterDeck.Cards1T[i] != null)
                {
                    MasterDeck.Cards1T[i] = toSpec(MasterDeck.Cards1T[i]);
                }
                if (MasterDeck.Cards2T[i] != null)
                {
                    MasterDeck.Cards2T[i] = toSpec(MasterDeck.Cards2T[i]);
                }
            }
        }
*/
/*
        VehicleCard toGen(VehicleCard Card)
        {
            char[] caData = Card.Unit.caUnitData;
            if (caData[4] == '0')
            {
                if (caData[18] == '1') // INF
                {
                    if (MasterDeck.sSpec == "MOTO" || MasterDeck.sSpec == "MECH" || MasterDeck.sSpec == "MAR" || MasterDeck.sSpec == "AIR")
                    {
                        if (Card.iVet == 4) { Card.sVeterancy = "100"; } else
                        if (Card.iVet == 3) { Card.sVeterancy = "011"; } else
                        if (Card.iVet == 2) { Card.sVeterancy = "010"; } else
                        if (Card.iVet == 1) { Card.sVeterancy = "001"; } else
                        if (Card.iVet == 0) { Card.sVeterancy = "000"; }
                    }
                }
                else if (caData[19] == '1') // support
                {
                    if (MasterDeck.sSpec == "SUP")
                    {
                        if (Card.iVet == 4) { Card.sVeterancy = "100"; } else
                        if (Card.iVet == 3) { Card.sVeterancy = "011"; } else
                        if (Card.iVet == 2) { Card.sVeterancy = "010"; } else
                        if (Card.iVet == 1) { Card.sVeterancy = "001"; } else
                        if (Card.iVet == 0) { Card.sVeterancy = "000"; }
                    }
                }
                else if (caData[20] == '1') // tanks
                {
                    if (MasterDeck.sSpec == "ARM")
                    {
                        if (Card.iVet == 4) { Card.sVeterancy = "100"; } else
                        if (Card.iVet == 3) { Card.sVeterancy = "011"; } else
                        if (Card.iVet == 2) { Card.sVeterancy = "010"; } else
                        if (Card.iVet == 1) { Card.sVeterancy = "001"; } else
                        if (Card.iVet == 0) { Card.sVeterancy = "000"; }
                    }
                }
                else if (caData[21] == '1')
                {
                    if (MasterDeck.sSpec == "REC")
                    {
                        if (Card.iVet == 4) { Card.sVeterancy = "100"; } else
                        if (Card.iVet == 3) { Card.sVeterancy = "011"; } else
                        if (Card.iVet == 2) { Card.sVeterancy = "010"; } else
                        if (Card.iVet == 1) { Card.sVeterancy = "001"; } else
                        if (Card.iVet == 0) { Card.sVeterancy = "000"; }
                    }
                }
                else if (caData[22] == '1')
                {
                    if (MasterDeck.sSpec == "MECH" || MasterDeck.sSpec == "MOTO")
                    {
                        if (Card.iVet == 4) { Card.sVeterancy = "100"; } else
                        if (Card.iVet == 3) { Card.sVeterancy = "011"; } else
                        if (Card.iVet == 2) { Card.sVeterancy = "010"; } else
                        if (Card.iVet == 1) { Card.sVeterancy = "001"; } else
                        if (Card.iVet == 0) { Card.sVeterancy = "000"; }
                    }
                }
                else if (caData[23] == '1')
                {
                    if (MasterDeck.sSpec == "AIR")
                    {
                        if (Card.iVet == 4) { Card.sVeterancy = "111"; } else
                        if (Card.iVet == 3) { Card.sVeterancy = "011"; } else
                        if (Card.iVet == 2) { Card.sVeterancy = "010"; } else
                        if (Card.iVet == 1) { Card.sVeterancy = "001"; } else
                        if (Card.iVet == 0) { Card.sVeterancy = "000"; }
                    }
                }
                else if (caData[24] == '1')
                {
                    if (MasterDeck.sSpec == "MAR" || MasterDeck.sSpec == "AIR")
                    {
                        if (Card.iVet == 4) { Card.sVeterancy = "100"; } else
                        if (Card.iVet == 3) { Card.sVeterancy = "011"; } else
                        if (Card.iVet == 2) { Card.sVeterancy = "010"; } else
                        if (Card.iVet == 1) { Card.sVeterancy = "001"; } else
                        if (Card.iVet == 0) { Card.sVeterancy = "000"; }
                    }
                }
            }
            return Card;
        }
*/
		/*
        VehicleCard toSpec(VehicleCard x)
        {
            char[] caData = x.Unit.caUnitData;
            if (caData[4] == '0')
            {
                if (caData[18] == '1') // INF
                {
                    if (MasterDeck.sSpec == "MOTO" || MasterDeck.sSpec == "MECH" || MasterDeck.sSpec == "MAR" || MasterDeck.sSpec == "AIR")
                    {
                        if (x.iVet == 4) { x.sVeterancy = "100"; } else
                        if (x.iVet == 3) { x.sVeterancy = "100"; } else
                        if (x.iVet == 2) { x.sVeterancy = "011"; } else
                        if (x.iVet == 1) { x.sVeterancy = "010"; } else
                        if (x.iVet == 0) { x.sVeterancy = "001"; }
                    }
                }
                else if (caData[19] == '1') // support
                {
                    if (MasterDeck.sSpec == "SUP")
                    {
                        if (x.iVet == 4) { x.sVeterancy = "100"; } else
                        if (x.iVet == 3) { x.sVeterancy = "100"; } else
                        if (x.iVet == 2) { x.sVeterancy = "011"; } else
                        if (x.iVet == 1) { x.sVeterancy = "010"; } else
                        if (x.iVet == 0) { x.sVeterancy = "001"; }
                    }
                }
                else if (caData[20] == '1') // tanks
                {
                    if (MasterDeck.sSpec == "ARM")
                    {
                        if (x.iVet == 4) { x.sVeterancy = "100"; } else
                        if (x.iVet == 3) { x.sVeterancy = "100"; } else
                        if (x.iVet == 2) { x.sVeterancy = "100"; } else
                        if (x.iVet == 1) { x.sVeterancy = "011"; } else
                        if (x.iVet == 0) { x.sVeterancy = "010"; }
                    }
                }
                else if (caData[21] == '1')
                {
                    if (MasterDeck.sSpec == "REC")
                    {
                        if (x.iVet == 4) { x.sVeterancy = "100"; } else
                        if (x.iVet == 3) { x.sVeterancy = "100"; } else
                        if (x.iVet == 2) { x.sVeterancy = "011"; } else
                        if (x.iVet == 1) { x.sVeterancy = "010"; } else
                        if (x.iVet == 0) { x.sVeterancy = "001"; }
                    }
                }
                else if (caData[22] == '1')
                {
                    if (MasterDeck.sSpec == "MECH" || MasterDeck.sSpec == "MOTO")
                    {
                        if (x.iVet == 4) { x.sVeterancy = "100"; } else
                        if (x.iVet == 3) { x.sVeterancy = "100"; } else
                        if (x.iVet == 2) { x.sVeterancy = "011"; } else
                        if (x.iVet == 1) { x.sVeterancy = "010"; } else
                        if (x.iVet == 0) { x.sVeterancy = "001"; }
                    }
                }
                else if (caData[23] == '1')
                {
                    if (MasterDeck.sSpec == "AIR")
                    {
                        if (x.iVet == 4) { x.sVeterancy = "100"; } else
                        if (x.iVet == 3) { x.sVeterancy = "100"; } else
                        if (x.iVet == 2) { x.sVeterancy = "011"; } else
                        if (x.iVet == 1) { x.sVeterancy = "010"; } else
                        if (x.iVet == 0) { x.sVeterancy = "001"; }
                    }
                }
                else if (caData[24] == '1')
                {
                    if (MasterDeck.sSpec == "MAR" || MasterDeck.sSpec == "AIR")
                    {
                        if (x.iVet == 4) { x.sVeterancy = "100"; } else
                        if (x.iVet == 3) { x.sVeterancy = "100"; } else
                        if (x.iVet == 2) { x.sVeterancy = "011"; } else
                        if (x.iVet == 1) { x.sVeterancy = "010"; } else
                        if (x.iVet == 0) { x.sVeterancy = "001"; }
                    }
                }
            }
            return x;
        }

        #endregion Specialtyconverter*/
