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
        private void DisplayVeterancy(VehicleCard Card)
        {
            var uri = new Uri("rank/" + Card.sVeterancy + ".png", UriKind.Relative);
            var bitmap = new BitmapImage(uri);

            switch (Card.iArrayIndex)
            {
                case 0:  { R200.Source = bitmap; R100.Source = bitmap; break; }
                case 1:  { R201.Source = bitmap; R101.Source = bitmap; break; }
                case 2:  { R202.Source = bitmap; R102.Source = bitmap; break; }
                case 3:  { R203.Source = bitmap; R103.Source = bitmap; break; }
                case 4:  { R204.Source = bitmap; R104.Source = bitmap; break; }
                case 5:  { R205.Source = bitmap; R105.Source = bitmap; break; }
                case 6:  { R206.Source = bitmap; R106.Source = bitmap; break; }
                case 7:  { R207.Source = bitmap; R107.Source = bitmap; break; }
                case 8:  { R208.Source = bitmap; R108.Source = bitmap; break; }
                case 10: { R210.Source = bitmap; R110.Source = bitmap; break; }
                case 11: { R211.Source = bitmap; R111.Source = bitmap; break; }
                case 12: { R212.Source = bitmap; R112.Source = bitmap; break; }
                case 13: { R213.Source = bitmap; R113.Source = bitmap; break; }
                case 14: { R214.Source = bitmap; R114.Source = bitmap; break; }
                case 15: { R215.Source = bitmap; R115.Source = bitmap; break; }
                case 16: { R216.Source = bitmap; R116.Source = bitmap; break; }
                case 17: { R217.Source = bitmap; R117.Source = bitmap; break; }
                case 18: { R218.Source = bitmap; R118.Source = bitmap; break; }
                case 20: { R220.Source = bitmap; R120.Source = bitmap; break; }
                case 21: { R221.Source = bitmap; R121.Source = bitmap; break; }
                case 22: { R222.Source = bitmap; R122.Source = bitmap; break; }
                case 23: { R223.Source = bitmap; R123.Source = bitmap; break; }
                case 24: { R224.Source = bitmap; R124.Source = bitmap; break; }
                case 25: { R225.Source = bitmap; R125.Source = bitmap; break; }
                case 26: { R226.Source = bitmap; R126.Source = bitmap; break; }
                case 27: { R227.Source = bitmap; R127.Source = bitmap; break; }
                case 28: { R228.Source = bitmap; R128.Source = bitmap; break; }
                case 30: { R230.Source = bitmap; R130.Source = bitmap; break; }
                case 31: { R231.Source = bitmap; R131.Source = bitmap; break; }
                case 32: { R232.Source = bitmap; R132.Source = bitmap; break; }
                case 33: { R233.Source = bitmap; R133.Source = bitmap; break; }
                case 34: { R234.Source = bitmap; R134.Source = bitmap; break; }
                case 35: { R235.Source = bitmap; R135.Source = bitmap; break; }
                case 36: { R236.Source = bitmap; R136.Source = bitmap; break; }
                case 37: { R237.Source = bitmap; R137.Source = bitmap; break; }
                case 38: { R238.Source = bitmap; R138.Source = bitmap; break; }
                case 40: { R240.Source = bitmap; R140.Source = bitmap; break; }
                case 41: { R241.Source = bitmap; R141.Source = bitmap; break; }
                case 42: { R242.Source = bitmap; R142.Source = bitmap; break; }
                case 43: { R243.Source = bitmap; R143.Source = bitmap; break; }
                case 44: { R244.Source = bitmap; R144.Source = bitmap; break; }
                case 45: { R245.Source = bitmap; R145.Source = bitmap; break; }
                case 46: { R246.Source = bitmap; R146.Source = bitmap; break; }
                case 47: { R247.Source = bitmap; R147.Source = bitmap; break; }
                case 48: { R248.Source = bitmap; R148.Source = bitmap; break; }
                case 50: { R250.Source = bitmap; R150.Source = bitmap; break; }
                case 51: { R251.Source = bitmap; R151.Source = bitmap; break; }
                case 52: { R252.Source = bitmap; R152.Source = bitmap; break; }
                case 53: { R253.Source = bitmap; R153.Source = bitmap; break; }
                case 54: { R254.Source = bitmap; R154.Source = bitmap; break; }
                case 55: { R255.Source = bitmap; R155.Source = bitmap; break; }
                case 56: { R256.Source = bitmap; R156.Source = bitmap; break; }
                case 57: { R257.Source = bitmap; R157.Source = bitmap; break; }
                case 58: { R258.Source = bitmap; R158.Source = bitmap; break; }
                case 60: { R260.Source = bitmap; R160.Source = bitmap; break; }
                case 61: { R261.Source = bitmap; R161.Source = bitmap; break; }
                case 62: { R262.Source = bitmap; R162.Source = bitmap; break; }
                case 63: { R263.Source = bitmap; R163.Source = bitmap; break; }
                case 64: { R264.Source = bitmap; R164.Source = bitmap; break; }
                case 65: { R265.Source = bitmap; R165.Source = bitmap; break; }
                case 66: { R266.Source = bitmap; R166.Source = bitmap; break; }
                case 67: { R267.Source = bitmap; R167.Source = bitmap; break; }
                case 68: { R268.Source = bitmap; R168.Source = bitmap; break; }
                case 70: { R270.Source = bitmap; R170.Source = bitmap; break; }
                case 71: { R271.Source = bitmap; R171.Source = bitmap; break; }
                case 72: { R272.Source = bitmap; R172.Source = bitmap; break; }
                case 73: { R273.Source = bitmap; R173.Source = bitmap; break; }
                case 74: { R274.Source = bitmap; R174.Source = bitmap; break; }
                case 75: { R275.Source = bitmap; R175.Source = bitmap; break; }
                case 76: { R276.Source = bitmap; R176.Source = bitmap; break; }
                case 77: { R277.Source = bitmap; R177.Source = bitmap; break; }
                case 78: { R278.Source = bitmap; R178.Source = bitmap; break; }
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
        private void resetDisplay()
        {
            if (decklist != null)
            {
                decklist.Clear();
            }

            var converter = new System.Windows.Media.BrushConverter();
            var brush = (Brush)converter.ConvertFromString("Black");
            btMotorized.BorderBrush = brush;
            btArmoured.BorderBrush = brush;
            btSupport.BorderBrush = brush;
            btMarine.BorderBrush = brush;
            btMechanized.BorderBrush = brush;
            btAirborne.BorderBrush = brush;
            btGeneral.BorderBrush = brush;
            btCatC.BorderBrush = brush;
            btCatB.BorderBrush = brush;
            btCatA.BorderBrush = brush;

            #region logistics
            LOG01.Visibility = System.Windows.Visibility.Hidden;
            laLOG01.Content = "NONE";
            laLOGc01.Content = "";
            LOG01ERR.Visibility = System.Windows.Visibility.Hidden;
            LOG01AA.Visibility = System.Windows.Visibility.Hidden;
            LOG01AAM.Visibility = System.Windows.Visibility.Hidden;
            LOG01ARM.Visibility = System.Windows.Visibility.Hidden;
            LOG01ATGM.Visibility = System.Windows.Visibility.Hidden;
            LOG01CAR.Visibility = System.Windows.Visibility.Hidden;
            LOG01CMD.Visibility = System.Windows.Visibility.Hidden;
            LOG01HEL.Visibility = System.Windows.Visibility.Hidden;
            LOG01INF.Visibility = System.Windows.Visibility.Hidden;
            LOG01LOG.Visibility = System.Windows.Visibility.Hidden;
            LOG01ENG.Visibility = System.Windows.Visibility.Hidden;
            LOG01AIR.Visibility = System.Windows.Visibility.Hidden;
            LOG01EW.Visibility = System.Windows.Visibility.Hidden;
            LOG01RKT.Visibility = System.Windows.Visibility.Hidden;
            LOG01MTR.Visibility = System.Windows.Visibility.Hidden;
            LOG01REC.Visibility = System.Windows.Visibility.Hidden;
            LOG01TUBE.Visibility = System.Windows.Visibility.Hidden;
            LOG01RAD.Visibility = System.Windows.Visibility.Hidden;


            LOG11.Visibility = System.Windows.Visibility.Hidden;
            laLOG11.Content = "NONE";
            LOG11ERR.Visibility = System.Windows.Visibility.Hidden;
            LOG11AA.Visibility = System.Windows.Visibility.Hidden;
            LOG11AAM.Visibility = System.Windows.Visibility.Hidden;
            LOG11ARM.Visibility = System.Windows.Visibility.Hidden;
            LOG11ATGM.Visibility = System.Windows.Visibility.Hidden;
            LOG11CAR.Visibility = System.Windows.Visibility.Hidden;
            LOG11CMD.Visibility = System.Windows.Visibility.Hidden;
            LOG11HEL.Visibility = System.Windows.Visibility.Hidden;
            LOG11INF.Visibility = System.Windows.Visibility.Hidden;
            LOG11LOG.Visibility = System.Windows.Visibility.Hidden;
            LOG11ENG.Visibility = System.Windows.Visibility.Hidden;
            LOG11AIR.Visibility = System.Windows.Visibility.Hidden;
            LOG11EW.Visibility = System.Windows.Visibility.Hidden;
            LOG11RKT.Visibility = System.Windows.Visibility.Hidden;
            LOG11MTR.Visibility = System.Windows.Visibility.Hidden;
            LOG11REC.Visibility = System.Windows.Visibility.Hidden;
            LOG11TUBE.Visibility = System.Windows.Visibility.Hidden;
            LOG11RAD.Visibility = System.Windows.Visibility.Hidden;

            LOG21.Visibility = System.Windows.Visibility.Hidden;
            laLOG21.Content = "NONE";
            LOG21ERR.Visibility = System.Windows.Visibility.Hidden;
            LOG21AA.Visibility = System.Windows.Visibility.Hidden;
            LOG21AAM.Visibility = System.Windows.Visibility.Hidden;
            LOG21ARM.Visibility = System.Windows.Visibility.Hidden;
            LOG21ATGM.Visibility = System.Windows.Visibility.Hidden;
            LOG21CAR.Visibility = System.Windows.Visibility.Hidden;
            LOG21CMD.Visibility = System.Windows.Visibility.Hidden;
            LOG21HEL.Visibility = System.Windows.Visibility.Hidden;
            LOG21INF.Visibility = System.Windows.Visibility.Hidden;
            LOG21LOG.Visibility = System.Windows.Visibility.Hidden;
            LOG21ENG.Visibility = System.Windows.Visibility.Hidden;
            LOG21AIR.Visibility = System.Windows.Visibility.Hidden;
            LOG21EW.Visibility = System.Windows.Visibility.Hidden;
            LOG21RKT.Visibility = System.Windows.Visibility.Hidden;
            LOG21MTR.Visibility = System.Windows.Visibility.Hidden;
            LOG21REC.Visibility = System.Windows.Visibility.Hidden;
            LOG21TUBE.Visibility = System.Windows.Visibility.Hidden;
            LOG21RAD.Visibility = System.Windows.Visibility.Hidden;

            LOG31.Visibility = System.Windows.Visibility.Hidden;
            laLOG31.Content = "NONE";
            LOG31ERR.Visibility = System.Windows.Visibility.Hidden;
            LOG31AA.Visibility = System.Windows.Visibility.Hidden;
            LOG31AAM.Visibility = System.Windows.Visibility.Hidden;
            LOG31ARM.Visibility = System.Windows.Visibility.Hidden;
            LOG31ATGM.Visibility = System.Windows.Visibility.Hidden;
            LOG31CAR.Visibility = System.Windows.Visibility.Hidden;
            LOG31CMD.Visibility = System.Windows.Visibility.Hidden;
            LOG31HEL.Visibility = System.Windows.Visibility.Hidden;
            LOG31INF.Visibility = System.Windows.Visibility.Hidden;
            LOG31LOG.Visibility = System.Windows.Visibility.Hidden;
            LOG31ENG.Visibility = System.Windows.Visibility.Hidden;
            LOG31AIR.Visibility = System.Windows.Visibility.Hidden;
            LOG31EW.Visibility = System.Windows.Visibility.Hidden;
            LOG31RKT.Visibility = System.Windows.Visibility.Hidden;
            LOG31MTR.Visibility = System.Windows.Visibility.Hidden;
            LOG31REC.Visibility = System.Windows.Visibility.Hidden;
            LOG31TUBE.Visibility = System.Windows.Visibility.Hidden;
            LOG31RAD.Visibility = System.Windows.Visibility.Hidden;

            LOG41.Visibility = System.Windows.Visibility.Hidden;
            laLOG41.Content = "NONE";
            LOG41ERR.Visibility = System.Windows.Visibility.Hidden;
            LOG41AA.Visibility = System.Windows.Visibility.Hidden;
            LOG41AAM.Visibility = System.Windows.Visibility.Hidden;
            LOG41ARM.Visibility = System.Windows.Visibility.Hidden;
            LOG41ATGM.Visibility = System.Windows.Visibility.Hidden;
            LOG41CAR.Visibility = System.Windows.Visibility.Hidden;
            LOG41CMD.Visibility = System.Windows.Visibility.Hidden;
            LOG41HEL.Visibility = System.Windows.Visibility.Hidden;
            LOG41INF.Visibility = System.Windows.Visibility.Hidden;
            LOG41LOG.Visibility = System.Windows.Visibility.Hidden;
            LOG41ENG.Visibility = System.Windows.Visibility.Hidden;
            LOG41AIR.Visibility = System.Windows.Visibility.Hidden;
            LOG41EW.Visibility = System.Windows.Visibility.Hidden;
            LOG41RKT.Visibility = System.Windows.Visibility.Hidden;
            LOG41MTR.Visibility = System.Windows.Visibility.Hidden;
            LOG41REC.Visibility = System.Windows.Visibility.Hidden;
            LOG41TUBE.Visibility = System.Windows.Visibility.Hidden;
            LOG41RAD.Visibility = System.Windows.Visibility.Hidden;

            LOG51.Visibility = System.Windows.Visibility.Hidden;
            laLOG51.Content = "NONE";
            LOG51ERR.Visibility = System.Windows.Visibility.Hidden;
            LOG51AA.Visibility = System.Windows.Visibility.Hidden;
            LOG51AAM.Visibility = System.Windows.Visibility.Hidden;
            LOG51ARM.Visibility = System.Windows.Visibility.Hidden;
            LOG51ATGM.Visibility = System.Windows.Visibility.Hidden;
            LOG51CAR.Visibility = System.Windows.Visibility.Hidden;
            LOG51CMD.Visibility = System.Windows.Visibility.Hidden;
            LOG51HEL.Visibility = System.Windows.Visibility.Hidden;
            LOG51INF.Visibility = System.Windows.Visibility.Hidden;
            LOG51LOG.Visibility = System.Windows.Visibility.Hidden;
            LOG51ENG.Visibility = System.Windows.Visibility.Hidden;
            LOG51AIR.Visibility = System.Windows.Visibility.Hidden;
            LOG51EW.Visibility = System.Windows.Visibility.Hidden;
            LOG51RKT.Visibility = System.Windows.Visibility.Hidden;
            LOG51MTR.Visibility = System.Windows.Visibility.Hidden;
            LOG51REC.Visibility = System.Windows.Visibility.Hidden;
            LOG51TUBE.Visibility = System.Windows.Visibility.Hidden;
            LOG51RAD.Visibility = System.Windows.Visibility.Hidden;

            LOG61.Visibility = System.Windows.Visibility.Hidden;
            laLOG61.Content = "NONE";
            LOG61ERR.Visibility = System.Windows.Visibility.Hidden;
            LOG61AA.Visibility = System.Windows.Visibility.Hidden;
            LOG61AAM.Visibility = System.Windows.Visibility.Hidden;
            LOG61ARM.Visibility = System.Windows.Visibility.Hidden;
            LOG61ATGM.Visibility = System.Windows.Visibility.Hidden;
            LOG61CAR.Visibility = System.Windows.Visibility.Hidden;
            LOG61CMD.Visibility = System.Windows.Visibility.Hidden;
            LOG61HEL.Visibility = System.Windows.Visibility.Hidden;
            LOG61INF.Visibility = System.Windows.Visibility.Hidden;
            LOG61LOG.Visibility = System.Windows.Visibility.Hidden;
            LOG61ENG.Visibility = System.Windows.Visibility.Hidden;
            LOG61AIR.Visibility = System.Windows.Visibility.Hidden;
            LOG61EW.Visibility = System.Windows.Visibility.Hidden;
            LOG61RKT.Visibility = System.Windows.Visibility.Hidden;
            LOG61MTR.Visibility = System.Windows.Visibility.Hidden;
            LOG61REC.Visibility = System.Windows.Visibility.Hidden;
            LOG61TUBE.Visibility = System.Windows.Visibility.Hidden;
            LOG61RAD.Visibility = System.Windows.Visibility.Hidden;

            LOG71.Visibility = System.Windows.Visibility.Hidden;
            laLOG71.Content = "NONE";
            LOG71ERR.Visibility = System.Windows.Visibility.Hidden;
            LOG71AA.Visibility = System.Windows.Visibility.Hidden;
            LOG71AAM.Visibility = System.Windows.Visibility.Hidden;
            LOG71ARM.Visibility = System.Windows.Visibility.Hidden;
            LOG71ATGM.Visibility = System.Windows.Visibility.Hidden;
            LOG71CAR.Visibility = System.Windows.Visibility.Hidden;
            LOG71CMD.Visibility = System.Windows.Visibility.Hidden;
            LOG71HEL.Visibility = System.Windows.Visibility.Hidden;
            LOG71INF.Visibility = System.Windows.Visibility.Hidden;
            LOG71LOG.Visibility = System.Windows.Visibility.Hidden;
            LOG71ENG.Visibility = System.Windows.Visibility.Hidden;
            LOG71AIR.Visibility = System.Windows.Visibility.Hidden;
            LOG71EW.Visibility = System.Windows.Visibility.Hidden;
            LOG71RKT.Visibility = System.Windows.Visibility.Hidden;
            LOG71MTR.Visibility = System.Windows.Visibility.Hidden;
            LOG71REC.Visibility = System.Windows.Visibility.Hidden;
            LOG71TUBE.Visibility = System.Windows.Visibility.Hidden;
            LOG71RAD.Visibility = System.Windows.Visibility.Hidden;

            LOG81.Visibility = System.Windows.Visibility.Hidden;
            laLOG81.Content = "NONE";
            LOG81ERR.Visibility = System.Windows.Visibility.Hidden;
            LOG81AA.Visibility = System.Windows.Visibility.Hidden;
            LOG81AAM.Visibility = System.Windows.Visibility.Hidden;
            LOG81ARM.Visibility = System.Windows.Visibility.Hidden;
            LOG81ATGM.Visibility = System.Windows.Visibility.Hidden;
            LOG81CAR.Visibility = System.Windows.Visibility.Hidden;
            LOG81CMD.Visibility = System.Windows.Visibility.Hidden;
            LOG81HEL.Visibility = System.Windows.Visibility.Hidden;
            LOG81INF.Visibility = System.Windows.Visibility.Hidden;
            LOG81LOG.Visibility = System.Windows.Visibility.Hidden;
            LOG81ENG.Visibility = System.Windows.Visibility.Hidden;
            LOG81AIR.Visibility = System.Windows.Visibility.Hidden;
            LOG81EW.Visibility = System.Windows.Visibility.Hidden;
            LOG81RKT.Visibility = System.Windows.Visibility.Hidden;
            LOG81MTR.Visibility = System.Windows.Visibility.Hidden;
            LOG81REC.Visibility = System.Windows.Visibility.Hidden;
            LOG81TUBE.Visibility = System.Windows.Visibility.Hidden;
            LOG81RAD.Visibility = System.Windows.Visibility.Hidden;


            LOG02.Visibility = System.Windows.Visibility.Hidden;
            laLOG02.Content = "NONE";
            LOG02ERR.Visibility = System.Windows.Visibility.Hidden;
            LOG02AA.Visibility = System.Windows.Visibility.Hidden;
            LOG02AAM.Visibility = System.Windows.Visibility.Hidden;
            LOG02ARM.Visibility = System.Windows.Visibility.Hidden;
            LOG02ATGM.Visibility = System.Windows.Visibility.Hidden;
            LOG02CAR.Visibility = System.Windows.Visibility.Hidden;
            LOG02CMD.Visibility = System.Windows.Visibility.Hidden;
            LOG02HEL.Visibility = System.Windows.Visibility.Hidden;
            LOG02INF.Visibility = System.Windows.Visibility.Hidden;
            LOG02LOG.Visibility = System.Windows.Visibility.Hidden;
            LOG02ENG.Visibility = System.Windows.Visibility.Hidden;
            LOG02AIR.Visibility = System.Windows.Visibility.Hidden;
            LOG02EW.Visibility = System.Windows.Visibility.Hidden;
            LOG02RKT.Visibility = System.Windows.Visibility.Hidden;
            LOG02MTR.Visibility = System.Windows.Visibility.Hidden;
            LOG02REC.Visibility = System.Windows.Visibility.Hidden;
            LOG02TUBE.Visibility = System.Windows.Visibility.Hidden;
            LOG02RAD.Visibility = System.Windows.Visibility.Hidden;


            LOG12.Visibility = System.Windows.Visibility.Hidden;
            laLOG12.Content = "NONE";
            LOG12ERR.Visibility = System.Windows.Visibility.Hidden;
            LOG12AA.Visibility = System.Windows.Visibility.Hidden;
            LOG12AAM.Visibility = System.Windows.Visibility.Hidden;
            LOG12ARM.Visibility = System.Windows.Visibility.Hidden;
            LOG12ATGM.Visibility = System.Windows.Visibility.Hidden;
            LOG12CAR.Visibility = System.Windows.Visibility.Hidden;
            LOG12CMD.Visibility = System.Windows.Visibility.Hidden;
            LOG12HEL.Visibility = System.Windows.Visibility.Hidden;
            LOG12INF.Visibility = System.Windows.Visibility.Hidden;
            LOG12LOG.Visibility = System.Windows.Visibility.Hidden;
            LOG12ENG.Visibility = System.Windows.Visibility.Hidden;
            LOG12AIR.Visibility = System.Windows.Visibility.Hidden;
            LOG12EW.Visibility = System.Windows.Visibility.Hidden;
            LOG12RKT.Visibility = System.Windows.Visibility.Hidden;
            LOG12MTR.Visibility = System.Windows.Visibility.Hidden;
            LOG12REC.Visibility = System.Windows.Visibility.Hidden;
            LOG12TUBE.Visibility = System.Windows.Visibility.Hidden;
            LOG12RAD.Visibility = System.Windows.Visibility.Hidden;

            LOG22.Visibility = System.Windows.Visibility.Hidden;
            laLOG22.Content = "NONE";
            LOG22ERR.Visibility = System.Windows.Visibility.Hidden;
            LOG22AA.Visibility = System.Windows.Visibility.Hidden;
            LOG22AAM.Visibility = System.Windows.Visibility.Hidden;
            LOG22ARM.Visibility = System.Windows.Visibility.Hidden;
            LOG22ATGM.Visibility = System.Windows.Visibility.Hidden;
            LOG22CAR.Visibility = System.Windows.Visibility.Hidden;
            LOG22CMD.Visibility = System.Windows.Visibility.Hidden;
            LOG22HEL.Visibility = System.Windows.Visibility.Hidden;
            LOG22INF.Visibility = System.Windows.Visibility.Hidden;
            LOG22LOG.Visibility = System.Windows.Visibility.Hidden;
            LOG22ENG.Visibility = System.Windows.Visibility.Hidden;
            LOG22AIR.Visibility = System.Windows.Visibility.Hidden;
            LOG22EW.Visibility = System.Windows.Visibility.Hidden;
            LOG22RKT.Visibility = System.Windows.Visibility.Hidden;
            LOG22MTR.Visibility = System.Windows.Visibility.Hidden;
            LOG22REC.Visibility = System.Windows.Visibility.Hidden;
            LOG22TUBE.Visibility = System.Windows.Visibility.Hidden;
            LOG22RAD.Visibility = System.Windows.Visibility.Hidden;

            LOG32.Visibility = System.Windows.Visibility.Hidden;
            laLOG32.Content = "NONE";
            LOG32ERR.Visibility = System.Windows.Visibility.Hidden;
            LOG32AA.Visibility = System.Windows.Visibility.Hidden;
            LOG32AAM.Visibility = System.Windows.Visibility.Hidden;
            LOG32ARM.Visibility = System.Windows.Visibility.Hidden;
            LOG32ATGM.Visibility = System.Windows.Visibility.Hidden;
            LOG32CAR.Visibility = System.Windows.Visibility.Hidden;
            LOG32CMD.Visibility = System.Windows.Visibility.Hidden;
            LOG32HEL.Visibility = System.Windows.Visibility.Hidden;
            LOG32INF.Visibility = System.Windows.Visibility.Hidden;
            LOG32LOG.Visibility = System.Windows.Visibility.Hidden;
            LOG32ENG.Visibility = System.Windows.Visibility.Hidden;
            LOG32AIR.Visibility = System.Windows.Visibility.Hidden;
            LOG32EW.Visibility = System.Windows.Visibility.Hidden;
            LOG32RKT.Visibility = System.Windows.Visibility.Hidden;
            LOG32MTR.Visibility = System.Windows.Visibility.Hidden;
            LOG32REC.Visibility = System.Windows.Visibility.Hidden;
            LOG32TUBE.Visibility = System.Windows.Visibility.Hidden;
            LOG32RAD.Visibility = System.Windows.Visibility.Hidden;

            LOG42.Visibility = System.Windows.Visibility.Hidden;
            laLOG42.Content = "NONE";
            LOG42ERR.Visibility = System.Windows.Visibility.Hidden;
            LOG42AA.Visibility = System.Windows.Visibility.Hidden;
            LOG42AAM.Visibility = System.Windows.Visibility.Hidden;
            LOG42ARM.Visibility = System.Windows.Visibility.Hidden;
            LOG42ATGM.Visibility = System.Windows.Visibility.Hidden;
            LOG42CAR.Visibility = System.Windows.Visibility.Hidden;
            LOG42CMD.Visibility = System.Windows.Visibility.Hidden;
            LOG42HEL.Visibility = System.Windows.Visibility.Hidden;
            LOG42INF.Visibility = System.Windows.Visibility.Hidden;
            LOG42LOG.Visibility = System.Windows.Visibility.Hidden;
            LOG42ENG.Visibility = System.Windows.Visibility.Hidden;
            LOG42AIR.Visibility = System.Windows.Visibility.Hidden;
            LOG42EW.Visibility = System.Windows.Visibility.Hidden;
            LOG42RKT.Visibility = System.Windows.Visibility.Hidden;
            LOG42MTR.Visibility = System.Windows.Visibility.Hidden;
            LOG42REC.Visibility = System.Windows.Visibility.Hidden;
            LOG42TUBE.Visibility = System.Windows.Visibility.Hidden;
            LOG42RAD.Visibility = System.Windows.Visibility.Hidden;

            LOG52.Visibility = System.Windows.Visibility.Hidden;
            laLOG52.Content = "NONE";
            LOG52ERR.Visibility = System.Windows.Visibility.Hidden;
            LOG52AA.Visibility = System.Windows.Visibility.Hidden;
            LOG52AAM.Visibility = System.Windows.Visibility.Hidden;
            LOG52ARM.Visibility = System.Windows.Visibility.Hidden;
            LOG52ATGM.Visibility = System.Windows.Visibility.Hidden;
            LOG52CAR.Visibility = System.Windows.Visibility.Hidden;
            LOG52CMD.Visibility = System.Windows.Visibility.Hidden;
            LOG52HEL.Visibility = System.Windows.Visibility.Hidden;
            LOG52INF.Visibility = System.Windows.Visibility.Hidden;
            LOG52LOG.Visibility = System.Windows.Visibility.Hidden;
            LOG52ENG.Visibility = System.Windows.Visibility.Hidden;
            LOG52AIR.Visibility = System.Windows.Visibility.Hidden;
            LOG52EW.Visibility = System.Windows.Visibility.Hidden;
            LOG52RKT.Visibility = System.Windows.Visibility.Hidden;
            LOG52MTR.Visibility = System.Windows.Visibility.Hidden;
            LOG52REC.Visibility = System.Windows.Visibility.Hidden;
            LOG52TUBE.Visibility = System.Windows.Visibility.Hidden;
            LOG52RAD.Visibility = System.Windows.Visibility.Hidden;

            LOG62.Visibility = System.Windows.Visibility.Hidden;
            laLOG62.Content = "NONE";
            LOG62ERR.Visibility = System.Windows.Visibility.Hidden;
            LOG62AA.Visibility = System.Windows.Visibility.Hidden;
            LOG62AAM.Visibility = System.Windows.Visibility.Hidden;
            LOG62ARM.Visibility = System.Windows.Visibility.Hidden;
            LOG62ATGM.Visibility = System.Windows.Visibility.Hidden;
            LOG62CAR.Visibility = System.Windows.Visibility.Hidden;
            LOG62CMD.Visibility = System.Windows.Visibility.Hidden;
            LOG62HEL.Visibility = System.Windows.Visibility.Hidden;
            LOG62INF.Visibility = System.Windows.Visibility.Hidden;
            LOG62LOG.Visibility = System.Windows.Visibility.Hidden;
            LOG62ENG.Visibility = System.Windows.Visibility.Hidden;
            LOG62AIR.Visibility = System.Windows.Visibility.Hidden;
            LOG62EW.Visibility = System.Windows.Visibility.Hidden;
            LOG62RKT.Visibility = System.Windows.Visibility.Hidden;
            LOG62MTR.Visibility = System.Windows.Visibility.Hidden;
            LOG62REC.Visibility = System.Windows.Visibility.Hidden;
            LOG62TUBE.Visibility = System.Windows.Visibility.Hidden;
            LOG62RAD.Visibility = System.Windows.Visibility.Hidden;

            LOG72.Visibility = System.Windows.Visibility.Hidden;
            laLOG72.Content = "NONE";
            LOG72ERR.Visibility = System.Windows.Visibility.Hidden;
            LOG72AA.Visibility = System.Windows.Visibility.Hidden;
            LOG72AAM.Visibility = System.Windows.Visibility.Hidden;
            LOG72ARM.Visibility = System.Windows.Visibility.Hidden;
            LOG72ATGM.Visibility = System.Windows.Visibility.Hidden;
            LOG72CAR.Visibility = System.Windows.Visibility.Hidden;
            LOG72CMD.Visibility = System.Windows.Visibility.Hidden;
            LOG72HEL.Visibility = System.Windows.Visibility.Hidden;
            LOG72INF.Visibility = System.Windows.Visibility.Hidden;
            LOG72LOG.Visibility = System.Windows.Visibility.Hidden;
            LOG72ENG.Visibility = System.Windows.Visibility.Hidden;
            LOG72AIR.Visibility = System.Windows.Visibility.Hidden;
            LOG72EW.Visibility = System.Windows.Visibility.Hidden;
            LOG72RKT.Visibility = System.Windows.Visibility.Hidden;
            LOG72MTR.Visibility = System.Windows.Visibility.Hidden;
            LOG72REC.Visibility = System.Windows.Visibility.Hidden;
            LOG72TUBE.Visibility = System.Windows.Visibility.Hidden;
            LOG72RAD.Visibility = System.Windows.Visibility.Hidden;

            LOG82.Visibility = System.Windows.Visibility.Hidden;
            laLOG82.Content = "NONE";
            LOG82ERR.Visibility = System.Windows.Visibility.Hidden;
            LOG82AA.Visibility = System.Windows.Visibility.Hidden;
            LOG82AAM.Visibility = System.Windows.Visibility.Hidden;
            LOG82ARM.Visibility = System.Windows.Visibility.Hidden;
            LOG82ATGM.Visibility = System.Windows.Visibility.Hidden;
            LOG82CAR.Visibility = System.Windows.Visibility.Hidden;
            LOG82CMD.Visibility = System.Windows.Visibility.Hidden;
            LOG82HEL.Visibility = System.Windows.Visibility.Hidden;
            LOG82INF.Visibility = System.Windows.Visibility.Hidden;
            LOG82LOG.Visibility = System.Windows.Visibility.Hidden;
            LOG82ENG.Visibility = System.Windows.Visibility.Hidden;
            LOG82AIR.Visibility = System.Windows.Visibility.Hidden;
            LOG82EW.Visibility = System.Windows.Visibility.Hidden;
            LOG82RKT.Visibility = System.Windows.Visibility.Hidden;
            LOG82MTR.Visibility = System.Windows.Visibility.Hidden;
            LOG82REC.Visibility = System.Windows.Visibility.Hidden;
            LOG82TUBE.Visibility = System.Windows.Visibility.Hidden;
            LOG82RAD.Visibility = System.Windows.Visibility.Hidden;
            #endregion LOGI
            #region INF
            INF01.Visibility = System.Windows.Visibility.Hidden;
            laINF01.Content = "NONE";
            INF01ERR.Visibility = System.Windows.Visibility.Hidden;
            INF01AA.Visibility = System.Windows.Visibility.Hidden;
            INF01AAM.Visibility = System.Windows.Visibility.Hidden;
            INF01ARM.Visibility = System.Windows.Visibility.Hidden;
            INF01ATGM.Visibility = System.Windows.Visibility.Hidden;
            INF01CAR.Visibility = System.Windows.Visibility.Hidden;
            INF01CMD.Visibility = System.Windows.Visibility.Hidden;
            INF01HEL.Visibility = System.Windows.Visibility.Hidden;
            INF01INF.Visibility = System.Windows.Visibility.Hidden;
            INF01LOG.Visibility = System.Windows.Visibility.Hidden;
            INF01ENG.Visibility = System.Windows.Visibility.Hidden;
            INF01AIR.Visibility = System.Windows.Visibility.Hidden;
            INF01EW.Visibility = System.Windows.Visibility.Hidden;
            INF01RKT.Visibility = System.Windows.Visibility.Hidden;
            INF01MTR.Visibility = System.Windows.Visibility.Hidden;
            INF01REC.Visibility = System.Windows.Visibility.Hidden;
            INF01TUBE.Visibility = System.Windows.Visibility.Hidden;
            INF01RAD.Visibility = System.Windows.Visibility.Hidden;

            INF11.Visibility = System.Windows.Visibility.Hidden;
            laINF11.Content = "NONE";
            INF11ERR.Visibility = System.Windows.Visibility.Hidden;
            INF11AA.Visibility = System.Windows.Visibility.Hidden;
            INF11AAM.Visibility = System.Windows.Visibility.Hidden;
            INF11ARM.Visibility = System.Windows.Visibility.Hidden;
            INF11ATGM.Visibility = System.Windows.Visibility.Hidden;
            INF11CAR.Visibility = System.Windows.Visibility.Hidden;
            INF11CMD.Visibility = System.Windows.Visibility.Hidden;
            INF11HEL.Visibility = System.Windows.Visibility.Hidden;
            INF11INF.Visibility = System.Windows.Visibility.Hidden;
            INF11LOG.Visibility = System.Windows.Visibility.Hidden;
            INF11ENG.Visibility = System.Windows.Visibility.Hidden;
            INF11AIR.Visibility = System.Windows.Visibility.Hidden;
            INF11EW.Visibility = System.Windows.Visibility.Hidden;
            INF11RKT.Visibility = System.Windows.Visibility.Hidden;
            INF11MTR.Visibility = System.Windows.Visibility.Hidden;
            INF11REC.Visibility = System.Windows.Visibility.Hidden;
            INF11TUBE.Visibility = System.Windows.Visibility.Hidden;
            INF11RAD.Visibility = System.Windows.Visibility.Hidden;

            INF11.Visibility = System.Windows.Visibility.Hidden;
            laINF21.Content = "NONE";
            INF21ERR.Visibility = System.Windows.Visibility.Hidden;
            INF21AA.Visibility = System.Windows.Visibility.Hidden;
            INF21AAM.Visibility = System.Windows.Visibility.Hidden;
            INF21ARM.Visibility = System.Windows.Visibility.Hidden;
            INF21ATGM.Visibility = System.Windows.Visibility.Hidden;
            INF21CAR.Visibility = System.Windows.Visibility.Hidden;
            INF21CMD.Visibility = System.Windows.Visibility.Hidden;
            INF21HEL.Visibility = System.Windows.Visibility.Hidden;
            INF21INF.Visibility = System.Windows.Visibility.Hidden;
            INF21LOG.Visibility = System.Windows.Visibility.Hidden;
            INF21ENG.Visibility = System.Windows.Visibility.Hidden;
            INF21AIR.Visibility = System.Windows.Visibility.Hidden;
            INF21EW.Visibility = System.Windows.Visibility.Hidden;
            INF21RKT.Visibility = System.Windows.Visibility.Hidden;
            INF21MTR.Visibility = System.Windows.Visibility.Hidden;
            INF21REC.Visibility = System.Windows.Visibility.Hidden;
            INF21TUBE.Visibility = System.Windows.Visibility.Hidden;
            INF21RAD.Visibility = System.Windows.Visibility.Hidden;

            INF31.Visibility = System.Windows.Visibility.Hidden;
            laINF31.Content = "NONE";
            INF31ERR.Visibility = System.Windows.Visibility.Hidden;
            INF31AA.Visibility = System.Windows.Visibility.Hidden;
            INF31AAM.Visibility = System.Windows.Visibility.Hidden;
            INF31ARM.Visibility = System.Windows.Visibility.Hidden;
            INF31ATGM.Visibility = System.Windows.Visibility.Hidden;
            INF31CAR.Visibility = System.Windows.Visibility.Hidden;
            INF31CMD.Visibility = System.Windows.Visibility.Hidden;
            INF31HEL.Visibility = System.Windows.Visibility.Hidden;
            INF31INF.Visibility = System.Windows.Visibility.Hidden;
            INF31LOG.Visibility = System.Windows.Visibility.Hidden;
            INF31ENG.Visibility = System.Windows.Visibility.Hidden;
            INF31AIR.Visibility = System.Windows.Visibility.Hidden;
            INF31EW.Visibility = System.Windows.Visibility.Hidden;
            INF31RKT.Visibility = System.Windows.Visibility.Hidden;
            INF31MTR.Visibility = System.Windows.Visibility.Hidden;
            INF31REC.Visibility = System.Windows.Visibility.Hidden;
            INF31TUBE.Visibility = System.Windows.Visibility.Hidden;
            INF31RAD.Visibility = System.Windows.Visibility.Hidden;

            INF41.Visibility = System.Windows.Visibility.Hidden;
            laINF41.Content = "NONE";
            INF41ERR.Visibility = System.Windows.Visibility.Hidden;
            INF41AA.Visibility = System.Windows.Visibility.Hidden;
            INF41AAM.Visibility = System.Windows.Visibility.Hidden;
            INF41ARM.Visibility = System.Windows.Visibility.Hidden;
            INF41ATGM.Visibility = System.Windows.Visibility.Hidden;
            INF41CAR.Visibility = System.Windows.Visibility.Hidden;
            INF41CMD.Visibility = System.Windows.Visibility.Hidden;
            INF41HEL.Visibility = System.Windows.Visibility.Hidden;
            INF41INF.Visibility = System.Windows.Visibility.Hidden;
            INF41LOG.Visibility = System.Windows.Visibility.Hidden;
            INF41ENG.Visibility = System.Windows.Visibility.Hidden;
            INF41AIR.Visibility = System.Windows.Visibility.Hidden;
            INF41EW.Visibility = System.Windows.Visibility.Hidden;
            INF41RKT.Visibility = System.Windows.Visibility.Hidden;
            INF41MTR.Visibility = System.Windows.Visibility.Hidden;
            INF41REC.Visibility = System.Windows.Visibility.Hidden;
            INF41TUBE.Visibility = System.Windows.Visibility.Hidden;
            INF41RAD.Visibility = System.Windows.Visibility.Hidden;

            INF51.Visibility = System.Windows.Visibility.Hidden;
            laINF51.Content = "NONE";
            INF51ERR.Visibility = System.Windows.Visibility.Hidden;
            INF51AA.Visibility = System.Windows.Visibility.Hidden;
            INF51AAM.Visibility = System.Windows.Visibility.Hidden;
            INF51ARM.Visibility = System.Windows.Visibility.Hidden;
            INF51ATGM.Visibility = System.Windows.Visibility.Hidden;
            INF51CAR.Visibility = System.Windows.Visibility.Hidden;
            INF51CMD.Visibility = System.Windows.Visibility.Hidden;
            INF51HEL.Visibility = System.Windows.Visibility.Hidden;
            INF51INF.Visibility = System.Windows.Visibility.Hidden;
            INF51LOG.Visibility = System.Windows.Visibility.Hidden;
            INF51ENG.Visibility = System.Windows.Visibility.Hidden;
            INF51AIR.Visibility = System.Windows.Visibility.Hidden;
            INF51EW.Visibility = System.Windows.Visibility.Hidden;
            INF51RKT.Visibility = System.Windows.Visibility.Hidden;
            INF51MTR.Visibility = System.Windows.Visibility.Hidden;
            INF51REC.Visibility = System.Windows.Visibility.Hidden;
            INF51TUBE.Visibility = System.Windows.Visibility.Hidden;
            INF51RAD.Visibility = System.Windows.Visibility.Hidden;

            INF61.Visibility = System.Windows.Visibility.Hidden;
            laINF61.Content = "NONE";
            INF61ERR.Visibility = System.Windows.Visibility.Hidden;
            INF61AA.Visibility = System.Windows.Visibility.Hidden;
            INF61AAM.Visibility = System.Windows.Visibility.Hidden;
            INF61ARM.Visibility = System.Windows.Visibility.Hidden;
            INF61ATGM.Visibility = System.Windows.Visibility.Hidden;
            INF61CAR.Visibility = System.Windows.Visibility.Hidden;
            INF61CMD.Visibility = System.Windows.Visibility.Hidden;
            INF61HEL.Visibility = System.Windows.Visibility.Hidden;
            INF61INF.Visibility = System.Windows.Visibility.Hidden;
            INF61LOG.Visibility = System.Windows.Visibility.Hidden;
            INF61ENG.Visibility = System.Windows.Visibility.Hidden;
            INF61AIR.Visibility = System.Windows.Visibility.Hidden;
            INF61EW.Visibility = System.Windows.Visibility.Hidden;
            INF61RKT.Visibility = System.Windows.Visibility.Hidden;
            INF61MTR.Visibility = System.Windows.Visibility.Hidden;
            INF61REC.Visibility = System.Windows.Visibility.Hidden;
            INF61TUBE.Visibility = System.Windows.Visibility.Hidden;
            INF61RAD.Visibility = System.Windows.Visibility.Hidden;

            INF71.Visibility = System.Windows.Visibility.Hidden;
            laINF71.Content = "NONE";
            INF71ERR.Visibility = System.Windows.Visibility.Hidden;
            INF71AA.Visibility = System.Windows.Visibility.Hidden;
            INF71AAM.Visibility = System.Windows.Visibility.Hidden;
            INF71ARM.Visibility = System.Windows.Visibility.Hidden;
            INF71ATGM.Visibility = System.Windows.Visibility.Hidden;
            INF71CAR.Visibility = System.Windows.Visibility.Hidden;
            INF71CMD.Visibility = System.Windows.Visibility.Hidden;
            INF71HEL.Visibility = System.Windows.Visibility.Hidden;
            INF71INF.Visibility = System.Windows.Visibility.Hidden;
            INF71LOG.Visibility = System.Windows.Visibility.Hidden;
            INF71ENG.Visibility = System.Windows.Visibility.Hidden;
            INF71AIR.Visibility = System.Windows.Visibility.Hidden;
            INF71EW.Visibility = System.Windows.Visibility.Hidden;
            INF71RKT.Visibility = System.Windows.Visibility.Hidden;
            INF71MTR.Visibility = System.Windows.Visibility.Hidden;
            INF71REC.Visibility = System.Windows.Visibility.Hidden;
            INF71TUBE.Visibility = System.Windows.Visibility.Hidden;
            INF71RAD.Visibility = System.Windows.Visibility.Hidden;

            INF81.Visibility = System.Windows.Visibility.Hidden;
            laINF81.Content = "NONE";
            INF81ERR.Visibility = System.Windows.Visibility.Hidden;
            INF81AA.Visibility = System.Windows.Visibility.Hidden;
            INF81AAM.Visibility = System.Windows.Visibility.Hidden;
            INF81ARM.Visibility = System.Windows.Visibility.Hidden;
            INF81ATGM.Visibility = System.Windows.Visibility.Hidden;
            INF81CAR.Visibility = System.Windows.Visibility.Hidden;
            INF81CMD.Visibility = System.Windows.Visibility.Hidden;
            INF81HEL.Visibility = System.Windows.Visibility.Hidden;
            INF81INF.Visibility = System.Windows.Visibility.Hidden;
            INF81LOG.Visibility = System.Windows.Visibility.Hidden;
            INF81ENG.Visibility = System.Windows.Visibility.Hidden;
            INF81AIR.Visibility = System.Windows.Visibility.Hidden;
            INF81EW.Visibility = System.Windows.Visibility.Hidden;
            INF81RKT.Visibility = System.Windows.Visibility.Hidden;
            INF81MTR.Visibility = System.Windows.Visibility.Hidden;
            INF81REC.Visibility = System.Windows.Visibility.Hidden;
            INF81TUBE.Visibility = System.Windows.Visibility.Hidden;
            INF81RAD.Visibility = System.Windows.Visibility.Hidden;

            INF02.Visibility = System.Windows.Visibility.Hidden;
            laINF02.Content = "NONE";
            INF02ERR.Visibility = System.Windows.Visibility.Hidden;
            INF02AA.Visibility = System.Windows.Visibility.Hidden;
            INF02AAM.Visibility = System.Windows.Visibility.Hidden;
            INF02ARM.Visibility = System.Windows.Visibility.Hidden;
            INF02ATGM.Visibility = System.Windows.Visibility.Hidden;
            INF02CAR.Visibility = System.Windows.Visibility.Hidden;
            INF02CMD.Visibility = System.Windows.Visibility.Hidden;
            INF02HEL.Visibility = System.Windows.Visibility.Hidden;
            INF02INF.Visibility = System.Windows.Visibility.Hidden;
            INF02LOG.Visibility = System.Windows.Visibility.Hidden;
            INF02ENG.Visibility = System.Windows.Visibility.Hidden;
            INF02AIR.Visibility = System.Windows.Visibility.Hidden;
            INF02EW.Visibility = System.Windows.Visibility.Hidden;
            INF02RKT.Visibility = System.Windows.Visibility.Hidden;
            INF02MTR.Visibility = System.Windows.Visibility.Hidden;
            INF02REC.Visibility = System.Windows.Visibility.Hidden;
            INF02TUBE.Visibility = System.Windows.Visibility.Hidden;
            INF02RAD.Visibility = System.Windows.Visibility.Hidden;

            INF12.Visibility = System.Windows.Visibility.Hidden;
            laINF12.Content = "NONE";
            INF12ERR.Visibility = System.Windows.Visibility.Hidden;
            INF12AA.Visibility = System.Windows.Visibility.Hidden;
            INF12AAM.Visibility = System.Windows.Visibility.Hidden;
            INF12ARM.Visibility = System.Windows.Visibility.Hidden;
            INF12ATGM.Visibility = System.Windows.Visibility.Hidden;
            INF12CAR.Visibility = System.Windows.Visibility.Hidden;
            INF12CMD.Visibility = System.Windows.Visibility.Hidden;
            INF12HEL.Visibility = System.Windows.Visibility.Hidden;
            INF12INF.Visibility = System.Windows.Visibility.Hidden;
            INF12LOG.Visibility = System.Windows.Visibility.Hidden;
            INF12ENG.Visibility = System.Windows.Visibility.Hidden;
            INF12AIR.Visibility = System.Windows.Visibility.Hidden;
            INF12EW.Visibility = System.Windows.Visibility.Hidden;
            INF12RKT.Visibility = System.Windows.Visibility.Hidden;
            INF12MTR.Visibility = System.Windows.Visibility.Hidden;
            INF12REC.Visibility = System.Windows.Visibility.Hidden;
            INF12TUBE.Visibility = System.Windows.Visibility.Hidden;
            INF12RAD.Visibility = System.Windows.Visibility.Hidden;

            INF22.Visibility = System.Windows.Visibility.Hidden;
            laINF22.Content = "NONE";
            INF22ERR.Visibility = System.Windows.Visibility.Hidden;
            INF22AA.Visibility = System.Windows.Visibility.Hidden;
            INF22AAM.Visibility = System.Windows.Visibility.Hidden;
            INF22ARM.Visibility = System.Windows.Visibility.Hidden;
            INF22ATGM.Visibility = System.Windows.Visibility.Hidden;
            INF22CAR.Visibility = System.Windows.Visibility.Hidden;
            INF22CMD.Visibility = System.Windows.Visibility.Hidden;
            INF22HEL.Visibility = System.Windows.Visibility.Hidden;
            INF22INF.Visibility = System.Windows.Visibility.Hidden;
            INF22LOG.Visibility = System.Windows.Visibility.Hidden;
            INF22ENG.Visibility = System.Windows.Visibility.Hidden;
            INF22AIR.Visibility = System.Windows.Visibility.Hidden;
            INF22EW.Visibility = System.Windows.Visibility.Hidden;
            INF22RKT.Visibility = System.Windows.Visibility.Hidden;
            INF22MTR.Visibility = System.Windows.Visibility.Hidden;
            INF22REC.Visibility = System.Windows.Visibility.Hidden;
            INF22TUBE.Visibility = System.Windows.Visibility.Hidden;
            INF22RAD.Visibility = System.Windows.Visibility.Hidden;

            INF32.Visibility = System.Windows.Visibility.Hidden;
            laINF32.Content = "NONE";
            INF32ERR.Visibility = System.Windows.Visibility.Hidden;
            INF32AA.Visibility = System.Windows.Visibility.Hidden;
            INF32AAM.Visibility = System.Windows.Visibility.Hidden;
            INF32ARM.Visibility = System.Windows.Visibility.Hidden;
            INF32ATGM.Visibility = System.Windows.Visibility.Hidden;
            INF32CAR.Visibility = System.Windows.Visibility.Hidden;
            INF32CMD.Visibility = System.Windows.Visibility.Hidden;
            INF32HEL.Visibility = System.Windows.Visibility.Hidden;
            INF32INF.Visibility = System.Windows.Visibility.Hidden;
            INF32LOG.Visibility = System.Windows.Visibility.Hidden;
            INF32ENG.Visibility = System.Windows.Visibility.Hidden;
            INF32AIR.Visibility = System.Windows.Visibility.Hidden;
            INF32EW.Visibility = System.Windows.Visibility.Hidden;
            INF32RKT.Visibility = System.Windows.Visibility.Hidden;
            INF32MTR.Visibility = System.Windows.Visibility.Hidden;
            INF32REC.Visibility = System.Windows.Visibility.Hidden;
            INF32TUBE.Visibility = System.Windows.Visibility.Hidden;
            INF32RAD.Visibility = System.Windows.Visibility.Hidden;

            INF42.Visibility = System.Windows.Visibility.Hidden;
            laINF42.Content = "NONE";
            INF42ERR.Visibility = System.Windows.Visibility.Hidden;
            INF42AA.Visibility = System.Windows.Visibility.Hidden;
            INF42AAM.Visibility = System.Windows.Visibility.Hidden;
            INF42ARM.Visibility = System.Windows.Visibility.Hidden;
            INF42ATGM.Visibility = System.Windows.Visibility.Hidden;
            INF42CAR.Visibility = System.Windows.Visibility.Hidden;
            INF42CMD.Visibility = System.Windows.Visibility.Hidden;
            INF42HEL.Visibility = System.Windows.Visibility.Hidden;
            INF42INF.Visibility = System.Windows.Visibility.Hidden;
            INF42LOG.Visibility = System.Windows.Visibility.Hidden;
            INF42ENG.Visibility = System.Windows.Visibility.Hidden;
            INF42AIR.Visibility = System.Windows.Visibility.Hidden;
            INF42EW.Visibility = System.Windows.Visibility.Hidden;
            INF42RKT.Visibility = System.Windows.Visibility.Hidden;
            INF42MTR.Visibility = System.Windows.Visibility.Hidden;
            INF42REC.Visibility = System.Windows.Visibility.Hidden;
            INF42TUBE.Visibility = System.Windows.Visibility.Hidden;
            INF42RAD.Visibility = System.Windows.Visibility.Hidden;

            INF52.Visibility = System.Windows.Visibility.Hidden;
            laINF52.Content = "NONE";
            INF52ERR.Visibility = System.Windows.Visibility.Hidden;
            INF52AA.Visibility = System.Windows.Visibility.Hidden;
            INF52AAM.Visibility = System.Windows.Visibility.Hidden;
            INF52ARM.Visibility = System.Windows.Visibility.Hidden;
            INF52ATGM.Visibility = System.Windows.Visibility.Hidden;
            INF52CAR.Visibility = System.Windows.Visibility.Hidden;
            INF52CMD.Visibility = System.Windows.Visibility.Hidden;
            INF52HEL.Visibility = System.Windows.Visibility.Hidden;
            INF52INF.Visibility = System.Windows.Visibility.Hidden;
            INF52LOG.Visibility = System.Windows.Visibility.Hidden;
            INF52ENG.Visibility = System.Windows.Visibility.Hidden;
            INF52AIR.Visibility = System.Windows.Visibility.Hidden;
            INF52EW.Visibility = System.Windows.Visibility.Hidden;
            INF52RKT.Visibility = System.Windows.Visibility.Hidden;
            INF52MTR.Visibility = System.Windows.Visibility.Hidden;
            INF52REC.Visibility = System.Windows.Visibility.Hidden;
            INF52TUBE.Visibility = System.Windows.Visibility.Hidden;
            INF52RAD.Visibility = System.Windows.Visibility.Hidden;

            INF62.Visibility = System.Windows.Visibility.Hidden;
            laINF62.Content = "NONE";
            INF62ERR.Visibility = System.Windows.Visibility.Hidden;
            INF62AA.Visibility = System.Windows.Visibility.Hidden;
            INF62AAM.Visibility = System.Windows.Visibility.Hidden;
            INF62ARM.Visibility = System.Windows.Visibility.Hidden;
            INF62ATGM.Visibility = System.Windows.Visibility.Hidden;
            INF62CAR.Visibility = System.Windows.Visibility.Hidden;
            INF62CMD.Visibility = System.Windows.Visibility.Hidden;
            INF62HEL.Visibility = System.Windows.Visibility.Hidden;
            INF62INF.Visibility = System.Windows.Visibility.Hidden;
            INF62LOG.Visibility = System.Windows.Visibility.Hidden;
            INF62ENG.Visibility = System.Windows.Visibility.Hidden;
            INF62AIR.Visibility = System.Windows.Visibility.Hidden;
            INF62EW.Visibility = System.Windows.Visibility.Hidden;
            INF62RKT.Visibility = System.Windows.Visibility.Hidden;
            INF62MTR.Visibility = System.Windows.Visibility.Hidden;
            INF62REC.Visibility = System.Windows.Visibility.Hidden;
            INF62TUBE.Visibility = System.Windows.Visibility.Hidden;
            INF62RAD.Visibility = System.Windows.Visibility.Hidden;

            INF72.Visibility = System.Windows.Visibility.Hidden;
            laINF72.Content = "NONE";
            INF72ERR.Visibility = System.Windows.Visibility.Hidden;
            INF72AA.Visibility = System.Windows.Visibility.Hidden;
            INF72AAM.Visibility = System.Windows.Visibility.Hidden;
            INF72ARM.Visibility = System.Windows.Visibility.Hidden;
            INF72ATGM.Visibility = System.Windows.Visibility.Hidden;
            INF72CAR.Visibility = System.Windows.Visibility.Hidden;
            INF72CMD.Visibility = System.Windows.Visibility.Hidden;
            INF72HEL.Visibility = System.Windows.Visibility.Hidden;
            INF72INF.Visibility = System.Windows.Visibility.Hidden;
            INF72LOG.Visibility = System.Windows.Visibility.Hidden;
            INF72ENG.Visibility = System.Windows.Visibility.Hidden;
            INF72AIR.Visibility = System.Windows.Visibility.Hidden;
            INF72EW.Visibility = System.Windows.Visibility.Hidden;
            INF72RKT.Visibility = System.Windows.Visibility.Hidden;
            INF72MTR.Visibility = System.Windows.Visibility.Hidden;
            INF72REC.Visibility = System.Windows.Visibility.Hidden;
            INF72TUBE.Visibility = System.Windows.Visibility.Hidden;
            INF72RAD.Visibility = System.Windows.Visibility.Hidden;

            INF82.Visibility = System.Windows.Visibility.Hidden;
            laINF82.Content = "NONE";
            INF82ERR.Visibility = System.Windows.Visibility.Hidden;
            INF82AA.Visibility = System.Windows.Visibility.Hidden;
            INF82AAM.Visibility = System.Windows.Visibility.Hidden;
            INF82ARM.Visibility = System.Windows.Visibility.Hidden;
            INF82ATGM.Visibility = System.Windows.Visibility.Hidden;
            INF82CAR.Visibility = System.Windows.Visibility.Hidden;
            INF82CMD.Visibility = System.Windows.Visibility.Hidden;
            INF82HEL.Visibility = System.Windows.Visibility.Hidden;
            INF82INF.Visibility = System.Windows.Visibility.Hidden;
            INF82LOG.Visibility = System.Windows.Visibility.Hidden;
            INF82ENG.Visibility = System.Windows.Visibility.Hidden;
            INF82AIR.Visibility = System.Windows.Visibility.Hidden;
            INF82EW.Visibility = System.Windows.Visibility.Hidden;
            INF82RKT.Visibility = System.Windows.Visibility.Hidden;
            INF82MTR.Visibility = System.Windows.Visibility.Hidden;
            INF82REC.Visibility = System.Windows.Visibility.Hidden;
            INF82TUBE.Visibility = System.Windows.Visibility.Hidden;
            INF82RAD.Visibility = System.Windows.Visibility.Hidden;
            #endregion INF
            #region sup
            SUP01.Visibility = System.Windows.Visibility.Hidden;
            laSUP01.Content = "NONE";
            SUP01ERR.Visibility = System.Windows.Visibility.Hidden;
            SUP01AA.Visibility = System.Windows.Visibility.Hidden;
            SUP01AAM.Visibility = System.Windows.Visibility.Hidden;
            SUP01ARM.Visibility = System.Windows.Visibility.Hidden;
            SUP01ATGM.Visibility = System.Windows.Visibility.Hidden;
            SUP01CAR.Visibility = System.Windows.Visibility.Hidden;
            SUP01CMD.Visibility = System.Windows.Visibility.Hidden;
            SUP01HEL.Visibility = System.Windows.Visibility.Hidden;
            SUP01INF.Visibility = System.Windows.Visibility.Hidden;
            SUP01LOG.Visibility = System.Windows.Visibility.Hidden;
            SUP01ENG.Visibility = System.Windows.Visibility.Hidden;
            SUP01AIR.Visibility = System.Windows.Visibility.Hidden;
            SUP01EW.Visibility = System.Windows.Visibility.Hidden;
            SUP01RKT.Visibility = System.Windows.Visibility.Hidden;
            SUP01MTR.Visibility = System.Windows.Visibility.Hidden;
            SUP01REC.Visibility = System.Windows.Visibility.Hidden;
            SUP01TUBE.Visibility = System.Windows.Visibility.Hidden;
            SUP01RAD.Visibility = System.Windows.Visibility.Hidden;

            SUP11.Visibility = System.Windows.Visibility.Hidden;
            laSUP11.Content = "NONE";
            SUP11ERR.Visibility = System.Windows.Visibility.Hidden;
            SUP11AA.Visibility = System.Windows.Visibility.Hidden;
            SUP11AAM.Visibility = System.Windows.Visibility.Hidden;
            SUP11ARM.Visibility = System.Windows.Visibility.Hidden;
            SUP11ATGM.Visibility = System.Windows.Visibility.Hidden;
            SUP11CAR.Visibility = System.Windows.Visibility.Hidden;
            SUP11CMD.Visibility = System.Windows.Visibility.Hidden;
            SUP11HEL.Visibility = System.Windows.Visibility.Hidden;
            SUP11INF.Visibility = System.Windows.Visibility.Hidden;
            SUP11LOG.Visibility = System.Windows.Visibility.Hidden;
            SUP11ENG.Visibility = System.Windows.Visibility.Hidden;
            SUP11AIR.Visibility = System.Windows.Visibility.Hidden;
            SUP11EW.Visibility = System.Windows.Visibility.Hidden;
            SUP11RKT.Visibility = System.Windows.Visibility.Hidden;
            SUP11MTR.Visibility = System.Windows.Visibility.Hidden;
            SUP11REC.Visibility = System.Windows.Visibility.Hidden;
            SUP11TUBE.Visibility = System.Windows.Visibility.Hidden;
            SUP11RAD.Visibility = System.Windows.Visibility.Hidden;

            SUP21.Visibility = System.Windows.Visibility.Hidden;
            laSUP21.Content = "NONE";
            SUP21ERR.Visibility = System.Windows.Visibility.Hidden;
            SUP21AA.Visibility = System.Windows.Visibility.Hidden;
            SUP21AAM.Visibility = System.Windows.Visibility.Hidden;
            SUP21ARM.Visibility = System.Windows.Visibility.Hidden;
            SUP21ATGM.Visibility = System.Windows.Visibility.Hidden;
            SUP21CAR.Visibility = System.Windows.Visibility.Hidden;
            SUP21CMD.Visibility = System.Windows.Visibility.Hidden;
            SUP21HEL.Visibility = System.Windows.Visibility.Hidden;
            SUP21INF.Visibility = System.Windows.Visibility.Hidden;
            SUP21LOG.Visibility = System.Windows.Visibility.Hidden;
            SUP21ENG.Visibility = System.Windows.Visibility.Hidden;
            SUP21AIR.Visibility = System.Windows.Visibility.Hidden;
            SUP21EW.Visibility = System.Windows.Visibility.Hidden;
            SUP21RKT.Visibility = System.Windows.Visibility.Hidden;
            SUP21MTR.Visibility = System.Windows.Visibility.Hidden;
            SUP21REC.Visibility = System.Windows.Visibility.Hidden;
            SUP21TUBE.Visibility = System.Windows.Visibility.Hidden;
            SUP21RAD.Visibility = System.Windows.Visibility.Hidden;

            SUP31.Visibility = System.Windows.Visibility.Hidden;
            laSUP31.Content = "NONE";
            SUP31ERR.Visibility = System.Windows.Visibility.Hidden;
            SUP31AA.Visibility = System.Windows.Visibility.Hidden;
            SUP31AAM.Visibility = System.Windows.Visibility.Hidden;
            SUP31ARM.Visibility = System.Windows.Visibility.Hidden;
            SUP31ATGM.Visibility = System.Windows.Visibility.Hidden;
            SUP31CAR.Visibility = System.Windows.Visibility.Hidden;
            SUP31CMD.Visibility = System.Windows.Visibility.Hidden;
            SUP31HEL.Visibility = System.Windows.Visibility.Hidden;
            SUP31INF.Visibility = System.Windows.Visibility.Hidden;
            SUP31LOG.Visibility = System.Windows.Visibility.Hidden;
            SUP31ENG.Visibility = System.Windows.Visibility.Hidden;
            SUP31AIR.Visibility = System.Windows.Visibility.Hidden;
            SUP31EW.Visibility = System.Windows.Visibility.Hidden;
            SUP31RKT.Visibility = System.Windows.Visibility.Hidden;
            SUP31MTR.Visibility = System.Windows.Visibility.Hidden;
            SUP31REC.Visibility = System.Windows.Visibility.Hidden;
            SUP31TUBE.Visibility = System.Windows.Visibility.Hidden;
            SUP31RAD.Visibility = System.Windows.Visibility.Hidden;

            SUP41.Visibility = System.Windows.Visibility.Hidden;
            laSUP41.Content = "NONE";
            SUP41ERR.Visibility = System.Windows.Visibility.Hidden;
            SUP41AA.Visibility = System.Windows.Visibility.Hidden;
            SUP41AAM.Visibility = System.Windows.Visibility.Hidden;
            SUP41ARM.Visibility = System.Windows.Visibility.Hidden;
            SUP41ATGM.Visibility = System.Windows.Visibility.Hidden;
            SUP41CAR.Visibility = System.Windows.Visibility.Hidden;
            SUP41CMD.Visibility = System.Windows.Visibility.Hidden;
            SUP41HEL.Visibility = System.Windows.Visibility.Hidden;
            SUP41INF.Visibility = System.Windows.Visibility.Hidden;
            SUP41LOG.Visibility = System.Windows.Visibility.Hidden;
            SUP41ENG.Visibility = System.Windows.Visibility.Hidden;
            SUP41AIR.Visibility = System.Windows.Visibility.Hidden;
            SUP41EW.Visibility = System.Windows.Visibility.Hidden;
            SUP41RKT.Visibility = System.Windows.Visibility.Hidden;
            SUP41MTR.Visibility = System.Windows.Visibility.Hidden;
            SUP41REC.Visibility = System.Windows.Visibility.Hidden;
            SUP41TUBE.Visibility = System.Windows.Visibility.Hidden;
            SUP41RAD.Visibility = System.Windows.Visibility.Hidden;

            SUP51.Visibility = System.Windows.Visibility.Hidden;
            laSUP51.Content = "NONE";
            SUP51ERR.Visibility = System.Windows.Visibility.Hidden;
            SUP51AA.Visibility = System.Windows.Visibility.Hidden;
            SUP51AAM.Visibility = System.Windows.Visibility.Hidden;
            SUP51ARM.Visibility = System.Windows.Visibility.Hidden;
            SUP51ATGM.Visibility = System.Windows.Visibility.Hidden;
            SUP51CAR.Visibility = System.Windows.Visibility.Hidden;
            SUP51CMD.Visibility = System.Windows.Visibility.Hidden;
            SUP51HEL.Visibility = System.Windows.Visibility.Hidden;
            SUP51INF.Visibility = System.Windows.Visibility.Hidden;
            SUP51LOG.Visibility = System.Windows.Visibility.Hidden;
            SUP51ENG.Visibility = System.Windows.Visibility.Hidden;
            SUP51AIR.Visibility = System.Windows.Visibility.Hidden;
            SUP51EW.Visibility = System.Windows.Visibility.Hidden;
            SUP51RKT.Visibility = System.Windows.Visibility.Hidden;
            SUP51MTR.Visibility = System.Windows.Visibility.Hidden;
            SUP51REC.Visibility = System.Windows.Visibility.Hidden;
            SUP51TUBE.Visibility = System.Windows.Visibility.Hidden;
            SUP51RAD.Visibility = System.Windows.Visibility.Hidden;

            SUP61.Visibility = System.Windows.Visibility.Hidden;
            laSUP61.Content = "NONE";
            SUP61ERR.Visibility = System.Windows.Visibility.Hidden;
            SUP61AA.Visibility = System.Windows.Visibility.Hidden;
            SUP61AAM.Visibility = System.Windows.Visibility.Hidden;
            SUP61ARM.Visibility = System.Windows.Visibility.Hidden;
            SUP61ATGM.Visibility = System.Windows.Visibility.Hidden;
            SUP61CAR.Visibility = System.Windows.Visibility.Hidden;
            SUP61CMD.Visibility = System.Windows.Visibility.Hidden;
            SUP61HEL.Visibility = System.Windows.Visibility.Hidden;
            SUP61INF.Visibility = System.Windows.Visibility.Hidden;
            SUP61LOG.Visibility = System.Windows.Visibility.Hidden;
            SUP61ENG.Visibility = System.Windows.Visibility.Hidden;
            SUP61AIR.Visibility = System.Windows.Visibility.Hidden;
            SUP61EW.Visibility = System.Windows.Visibility.Hidden;
            SUP61RKT.Visibility = System.Windows.Visibility.Hidden;
            SUP61MTR.Visibility = System.Windows.Visibility.Hidden;
            SUP61REC.Visibility = System.Windows.Visibility.Hidden;
            SUP61TUBE.Visibility = System.Windows.Visibility.Hidden;
            SUP61RAD.Visibility = System.Windows.Visibility.Hidden;

            SUP71.Visibility = System.Windows.Visibility.Hidden;
            laSUP71.Content = "NONE";
            SUP71ERR.Visibility = System.Windows.Visibility.Hidden;
            SUP71AA.Visibility = System.Windows.Visibility.Hidden;
            SUP71AAM.Visibility = System.Windows.Visibility.Hidden;
            SUP71ARM.Visibility = System.Windows.Visibility.Hidden;
            SUP71ATGM.Visibility = System.Windows.Visibility.Hidden;
            SUP71CAR.Visibility = System.Windows.Visibility.Hidden;
            SUP71CMD.Visibility = System.Windows.Visibility.Hidden;
            SUP71HEL.Visibility = System.Windows.Visibility.Hidden;
            SUP71INF.Visibility = System.Windows.Visibility.Hidden;
            SUP71LOG.Visibility = System.Windows.Visibility.Hidden;
            SUP71ENG.Visibility = System.Windows.Visibility.Hidden;
            SUP71AIR.Visibility = System.Windows.Visibility.Hidden;
            SUP71EW.Visibility = System.Windows.Visibility.Hidden;
            SUP71RKT.Visibility = System.Windows.Visibility.Hidden;
            SUP71MTR.Visibility = System.Windows.Visibility.Hidden;
            SUP71REC.Visibility = System.Windows.Visibility.Hidden;
            SUP71TUBE.Visibility = System.Windows.Visibility.Hidden;
            SUP71RAD.Visibility = System.Windows.Visibility.Hidden;

            SUP81.Visibility = System.Windows.Visibility.Hidden;
            laSUP81.Content = "NONE";
            SUP81ERR.Visibility = System.Windows.Visibility.Hidden;
            SUP81AA.Visibility = System.Windows.Visibility.Hidden;
            SUP81AAM.Visibility = System.Windows.Visibility.Hidden;
            SUP81ARM.Visibility = System.Windows.Visibility.Hidden;
            SUP81ATGM.Visibility = System.Windows.Visibility.Hidden;
            SUP81CAR.Visibility = System.Windows.Visibility.Hidden;
            SUP81CMD.Visibility = System.Windows.Visibility.Hidden;
            SUP81HEL.Visibility = System.Windows.Visibility.Hidden;
            SUP81INF.Visibility = System.Windows.Visibility.Hidden;
            SUP81LOG.Visibility = System.Windows.Visibility.Hidden;
            SUP81ENG.Visibility = System.Windows.Visibility.Hidden;
            SUP81AIR.Visibility = System.Windows.Visibility.Hidden;
            SUP81EW.Visibility = System.Windows.Visibility.Hidden;
            SUP81RKT.Visibility = System.Windows.Visibility.Hidden;
            SUP81MTR.Visibility = System.Windows.Visibility.Hidden;
            SUP81REC.Visibility = System.Windows.Visibility.Hidden;
            SUP81TUBE.Visibility = System.Windows.Visibility.Hidden;
            SUP81RAD.Visibility = System.Windows.Visibility.Hidden;

            SUP02.Visibility = System.Windows.Visibility.Hidden;
            laSUP02.Content = "NONE";
            SUP02ERR.Visibility = System.Windows.Visibility.Hidden;
            SUP02AA.Visibility = System.Windows.Visibility.Hidden;
            SUP02AAM.Visibility = System.Windows.Visibility.Hidden;
            SUP02ARM.Visibility = System.Windows.Visibility.Hidden;
            SUP02ATGM.Visibility = System.Windows.Visibility.Hidden;
            SUP02CAR.Visibility = System.Windows.Visibility.Hidden;
            SUP02CMD.Visibility = System.Windows.Visibility.Hidden;
            SUP02HEL.Visibility = System.Windows.Visibility.Hidden;
            SUP02INF.Visibility = System.Windows.Visibility.Hidden;
            SUP02LOG.Visibility = System.Windows.Visibility.Hidden;
            SUP02ENG.Visibility = System.Windows.Visibility.Hidden;
            SUP02AIR.Visibility = System.Windows.Visibility.Hidden;
            SUP02EW.Visibility = System.Windows.Visibility.Hidden;
            SUP02RKT.Visibility = System.Windows.Visibility.Hidden;
            SUP02MTR.Visibility = System.Windows.Visibility.Hidden;
            SUP02REC.Visibility = System.Windows.Visibility.Hidden;
            SUP02TUBE.Visibility = System.Windows.Visibility.Hidden;
            SUP02RAD.Visibility = System.Windows.Visibility.Hidden;

            SUP12.Visibility = System.Windows.Visibility.Hidden;
            laSUP12.Content = "NONE";
            SUP12ERR.Visibility = System.Windows.Visibility.Hidden;
            SUP12AA.Visibility = System.Windows.Visibility.Hidden;
            SUP12AAM.Visibility = System.Windows.Visibility.Hidden;
            SUP12ARM.Visibility = System.Windows.Visibility.Hidden;
            SUP12ATGM.Visibility = System.Windows.Visibility.Hidden;
            SUP12CAR.Visibility = System.Windows.Visibility.Hidden;
            SUP12CMD.Visibility = System.Windows.Visibility.Hidden;
            SUP12HEL.Visibility = System.Windows.Visibility.Hidden;
            SUP12INF.Visibility = System.Windows.Visibility.Hidden;
            SUP12LOG.Visibility = System.Windows.Visibility.Hidden;
            SUP12ENG.Visibility = System.Windows.Visibility.Hidden;
            SUP12AIR.Visibility = System.Windows.Visibility.Hidden;
            SUP12EW.Visibility = System.Windows.Visibility.Hidden;
            SUP12RKT.Visibility = System.Windows.Visibility.Hidden;
            SUP12MTR.Visibility = System.Windows.Visibility.Hidden;
            SUP12REC.Visibility = System.Windows.Visibility.Hidden;
            SUP12TUBE.Visibility = System.Windows.Visibility.Hidden;
            SUP12RAD.Visibility = System.Windows.Visibility.Hidden;

            SUP22.Visibility = System.Windows.Visibility.Hidden;
            laSUP22.Content = "NONE";
            SUP22ERR.Visibility = System.Windows.Visibility.Hidden;
            SUP22AA.Visibility = System.Windows.Visibility.Hidden;
            SUP22AAM.Visibility = System.Windows.Visibility.Hidden;
            SUP22ARM.Visibility = System.Windows.Visibility.Hidden;
            SUP22ATGM.Visibility = System.Windows.Visibility.Hidden;
            SUP22CAR.Visibility = System.Windows.Visibility.Hidden;
            SUP22CMD.Visibility = System.Windows.Visibility.Hidden;
            SUP22HEL.Visibility = System.Windows.Visibility.Hidden;
            SUP22INF.Visibility = System.Windows.Visibility.Hidden;
            SUP22LOG.Visibility = System.Windows.Visibility.Hidden;
            SUP22ENG.Visibility = System.Windows.Visibility.Hidden;
            SUP22AIR.Visibility = System.Windows.Visibility.Hidden;
            SUP22EW.Visibility = System.Windows.Visibility.Hidden;
            SUP22RKT.Visibility = System.Windows.Visibility.Hidden;
            SUP22MTR.Visibility = System.Windows.Visibility.Hidden;
            SUP22REC.Visibility = System.Windows.Visibility.Hidden;
            SUP22TUBE.Visibility = System.Windows.Visibility.Hidden;
            SUP22RAD.Visibility = System.Windows.Visibility.Hidden;

            SUP32.Visibility = System.Windows.Visibility.Hidden;
            laSUP32.Content = "NONE";
            SUP32ERR.Visibility = System.Windows.Visibility.Hidden;
            SUP32AA.Visibility = System.Windows.Visibility.Hidden;
            SUP32AAM.Visibility = System.Windows.Visibility.Hidden;
            SUP32ARM.Visibility = System.Windows.Visibility.Hidden;
            SUP32ATGM.Visibility = System.Windows.Visibility.Hidden;
            SUP32CAR.Visibility = System.Windows.Visibility.Hidden;
            SUP32CMD.Visibility = System.Windows.Visibility.Hidden;
            SUP32HEL.Visibility = System.Windows.Visibility.Hidden;
            SUP32INF.Visibility = System.Windows.Visibility.Hidden;
            SUP32LOG.Visibility = System.Windows.Visibility.Hidden;
            SUP32ENG.Visibility = System.Windows.Visibility.Hidden;
            SUP32AIR.Visibility = System.Windows.Visibility.Hidden;
            SUP32EW.Visibility = System.Windows.Visibility.Hidden;
            SUP32RKT.Visibility = System.Windows.Visibility.Hidden;
            SUP32MTR.Visibility = System.Windows.Visibility.Hidden;
            SUP32REC.Visibility = System.Windows.Visibility.Hidden;
            SUP32TUBE.Visibility = System.Windows.Visibility.Hidden;
            SUP32RAD.Visibility = System.Windows.Visibility.Hidden;

            SUP42.Visibility = System.Windows.Visibility.Hidden;
            laSUP42.Content = "NONE";
            SUP42ERR.Visibility = System.Windows.Visibility.Hidden;
            SUP42AA.Visibility = System.Windows.Visibility.Hidden;
            SUP42AAM.Visibility = System.Windows.Visibility.Hidden;
            SUP42ARM.Visibility = System.Windows.Visibility.Hidden;
            SUP42ATGM.Visibility = System.Windows.Visibility.Hidden;
            SUP42CAR.Visibility = System.Windows.Visibility.Hidden;
            SUP42CMD.Visibility = System.Windows.Visibility.Hidden;
            SUP42HEL.Visibility = System.Windows.Visibility.Hidden;
            SUP42INF.Visibility = System.Windows.Visibility.Hidden;
            SUP42LOG.Visibility = System.Windows.Visibility.Hidden;
            SUP42ENG.Visibility = System.Windows.Visibility.Hidden;
            SUP42AIR.Visibility = System.Windows.Visibility.Hidden;
            SUP42EW.Visibility = System.Windows.Visibility.Hidden;
            SUP42RKT.Visibility = System.Windows.Visibility.Hidden;
            SUP42MTR.Visibility = System.Windows.Visibility.Hidden;
            SUP42REC.Visibility = System.Windows.Visibility.Hidden;
            SUP42TUBE.Visibility = System.Windows.Visibility.Hidden;
            SUP42RAD.Visibility = System.Windows.Visibility.Hidden;

            SUP52.Visibility = System.Windows.Visibility.Hidden;
            laSUP52.Content = "NONE";
            SUP52ERR.Visibility = System.Windows.Visibility.Hidden;
            SUP52AA.Visibility = System.Windows.Visibility.Hidden;
            SUP52AAM.Visibility = System.Windows.Visibility.Hidden;
            SUP52ARM.Visibility = System.Windows.Visibility.Hidden;
            SUP52ATGM.Visibility = System.Windows.Visibility.Hidden;
            SUP52CAR.Visibility = System.Windows.Visibility.Hidden;
            SUP52CMD.Visibility = System.Windows.Visibility.Hidden;
            SUP52HEL.Visibility = System.Windows.Visibility.Hidden;
            SUP52INF.Visibility = System.Windows.Visibility.Hidden;
            SUP52LOG.Visibility = System.Windows.Visibility.Hidden;
            SUP52ENG.Visibility = System.Windows.Visibility.Hidden;
            SUP52AIR.Visibility = System.Windows.Visibility.Hidden;
            SUP52EW.Visibility = System.Windows.Visibility.Hidden;
            SUP52RKT.Visibility = System.Windows.Visibility.Hidden;
            SUP52MTR.Visibility = System.Windows.Visibility.Hidden;
            SUP52REC.Visibility = System.Windows.Visibility.Hidden;
            SUP52TUBE.Visibility = System.Windows.Visibility.Hidden;
            SUP52RAD.Visibility = System.Windows.Visibility.Hidden;

            SUP62.Visibility = System.Windows.Visibility.Hidden;
            laSUP62.Content = "NONE";
            SUP62ERR.Visibility = System.Windows.Visibility.Hidden;
            SUP62AA.Visibility = System.Windows.Visibility.Hidden;
            SUP62AAM.Visibility = System.Windows.Visibility.Hidden;
            SUP62ARM.Visibility = System.Windows.Visibility.Hidden;
            SUP62ATGM.Visibility = System.Windows.Visibility.Hidden;
            SUP62CAR.Visibility = System.Windows.Visibility.Hidden;
            SUP62CMD.Visibility = System.Windows.Visibility.Hidden;
            SUP62HEL.Visibility = System.Windows.Visibility.Hidden;
            SUP62INF.Visibility = System.Windows.Visibility.Hidden;
            SUP62LOG.Visibility = System.Windows.Visibility.Hidden;
            SUP62ENG.Visibility = System.Windows.Visibility.Hidden;
            SUP62AIR.Visibility = System.Windows.Visibility.Hidden;
            SUP62EW.Visibility = System.Windows.Visibility.Hidden;
            SUP62RKT.Visibility = System.Windows.Visibility.Hidden;
            SUP62MTR.Visibility = System.Windows.Visibility.Hidden;
            SUP62REC.Visibility = System.Windows.Visibility.Hidden;
            SUP62TUBE.Visibility = System.Windows.Visibility.Hidden;
            SUP62RAD.Visibility = System.Windows.Visibility.Hidden;

            SUP72.Visibility = System.Windows.Visibility.Hidden;
            laSUP72.Content = "NONE";
            SUP72ERR.Visibility = System.Windows.Visibility.Hidden;
            SUP72AA.Visibility = System.Windows.Visibility.Hidden;
            SUP72AAM.Visibility = System.Windows.Visibility.Hidden;
            SUP72ARM.Visibility = System.Windows.Visibility.Hidden;
            SUP72ATGM.Visibility = System.Windows.Visibility.Hidden;
            SUP72CAR.Visibility = System.Windows.Visibility.Hidden;
            SUP72CMD.Visibility = System.Windows.Visibility.Hidden;
            SUP72HEL.Visibility = System.Windows.Visibility.Hidden;
            SUP72INF.Visibility = System.Windows.Visibility.Hidden;
            SUP72LOG.Visibility = System.Windows.Visibility.Hidden;
            SUP72ENG.Visibility = System.Windows.Visibility.Hidden;
            SUP72AIR.Visibility = System.Windows.Visibility.Hidden;
            SUP72EW.Visibility = System.Windows.Visibility.Hidden;
            SUP72RKT.Visibility = System.Windows.Visibility.Hidden;
            SUP72MTR.Visibility = System.Windows.Visibility.Hidden;
            SUP72REC.Visibility = System.Windows.Visibility.Hidden;
            SUP72TUBE.Visibility = System.Windows.Visibility.Hidden;
            SUP72RAD.Visibility = System.Windows.Visibility.Hidden;

            SUP82.Visibility = System.Windows.Visibility.Hidden;
            laSUP82.Content = "NONE";
            SUP82ERR.Visibility = System.Windows.Visibility.Hidden;
            SUP82AA.Visibility = System.Windows.Visibility.Hidden;
            SUP82AAM.Visibility = System.Windows.Visibility.Hidden;
            SUP82ARM.Visibility = System.Windows.Visibility.Hidden;
            SUP82ATGM.Visibility = System.Windows.Visibility.Hidden;
            SUP82CAR.Visibility = System.Windows.Visibility.Hidden;
            SUP82CMD.Visibility = System.Windows.Visibility.Hidden;
            SUP82HEL.Visibility = System.Windows.Visibility.Hidden;
            SUP82INF.Visibility = System.Windows.Visibility.Hidden;
            SUP82LOG.Visibility = System.Windows.Visibility.Hidden;
            SUP82ENG.Visibility = System.Windows.Visibility.Hidden;
            SUP82AIR.Visibility = System.Windows.Visibility.Hidden;
            SUP82EW.Visibility = System.Windows.Visibility.Hidden;
            SUP82RKT.Visibility = System.Windows.Visibility.Hidden;
            SUP82MTR.Visibility = System.Windows.Visibility.Hidden;
            SUP82REC.Visibility = System.Windows.Visibility.Hidden;
            SUP82TUBE.Visibility = System.Windows.Visibility.Hidden;
            SUP82RAD.Visibility = System.Windows.Visibility.Hidden;
            #endregion SUP
            #region TANK
            TNK01.Visibility = System.Windows.Visibility.Hidden;
            laTNK01.Content = "NONE";
            TNK01ERR.Visibility = System.Windows.Visibility.Hidden;
            TNK01AA.Visibility = System.Windows.Visibility.Hidden;
            TNK01AAM.Visibility = System.Windows.Visibility.Hidden;
            TNK01ARM.Visibility = System.Windows.Visibility.Hidden;
            TNK01ATGM.Visibility = System.Windows.Visibility.Hidden;
            TNK01CAR.Visibility = System.Windows.Visibility.Hidden;
            TNK01CMD.Visibility = System.Windows.Visibility.Hidden;
            TNK01HEL.Visibility = System.Windows.Visibility.Hidden;
            TNK01INF.Visibility = System.Windows.Visibility.Hidden;
            TNK01LOG.Visibility = System.Windows.Visibility.Hidden;
            TNK01ENG.Visibility = System.Windows.Visibility.Hidden;
            TNK01AIR.Visibility = System.Windows.Visibility.Hidden;
            TNK01EW.Visibility = System.Windows.Visibility.Hidden;
            TNK01RKT.Visibility = System.Windows.Visibility.Hidden;
            TNK01MTR.Visibility = System.Windows.Visibility.Hidden;
            TNK01REC.Visibility = System.Windows.Visibility.Hidden;
            TNK01TUBE.Visibility = System.Windows.Visibility.Hidden;
            TNK01RAD.Visibility = System.Windows.Visibility.Hidden;

            TNK11.Visibility = System.Windows.Visibility.Hidden;
            laTNK11.Content = "NONE";
            TNK11ERR.Visibility = System.Windows.Visibility.Hidden;
            TNK11AA.Visibility = System.Windows.Visibility.Hidden;
            TNK11AAM.Visibility = System.Windows.Visibility.Hidden;
            TNK11ARM.Visibility = System.Windows.Visibility.Hidden;
            TNK11ATGM.Visibility = System.Windows.Visibility.Hidden;
            TNK11CAR.Visibility = System.Windows.Visibility.Hidden;
            TNK11CMD.Visibility = System.Windows.Visibility.Hidden;
            TNK11HEL.Visibility = System.Windows.Visibility.Hidden;
            TNK11INF.Visibility = System.Windows.Visibility.Hidden;
            TNK11LOG.Visibility = System.Windows.Visibility.Hidden;
            TNK11ENG.Visibility = System.Windows.Visibility.Hidden;
            TNK11AIR.Visibility = System.Windows.Visibility.Hidden;
            TNK11EW.Visibility = System.Windows.Visibility.Hidden;
            TNK11RKT.Visibility = System.Windows.Visibility.Hidden;
            TNK11MTR.Visibility = System.Windows.Visibility.Hidden;
            TNK11REC.Visibility = System.Windows.Visibility.Hidden;
            TNK11TUBE.Visibility = System.Windows.Visibility.Hidden;
            TNK11RAD.Visibility = System.Windows.Visibility.Hidden;

            TNK21.Visibility = System.Windows.Visibility.Hidden;
            laTNK21.Content = "NONE";
            TNK21ERR.Visibility = System.Windows.Visibility.Hidden;
            TNK21AA.Visibility = System.Windows.Visibility.Hidden;
            TNK21AAM.Visibility = System.Windows.Visibility.Hidden;
            TNK21ARM.Visibility = System.Windows.Visibility.Hidden;
            TNK21ATGM.Visibility = System.Windows.Visibility.Hidden;
            TNK21CAR.Visibility = System.Windows.Visibility.Hidden;
            TNK21CMD.Visibility = System.Windows.Visibility.Hidden;
            TNK21HEL.Visibility = System.Windows.Visibility.Hidden;
            TNK21INF.Visibility = System.Windows.Visibility.Hidden;
            TNK21LOG.Visibility = System.Windows.Visibility.Hidden;
            TNK21ENG.Visibility = System.Windows.Visibility.Hidden;
            TNK21AIR.Visibility = System.Windows.Visibility.Hidden;
            TNK21EW.Visibility = System.Windows.Visibility.Hidden;
            TNK21RKT.Visibility = System.Windows.Visibility.Hidden;
            TNK21MTR.Visibility = System.Windows.Visibility.Hidden;
            TNK21REC.Visibility = System.Windows.Visibility.Hidden;
            TNK21TUBE.Visibility = System.Windows.Visibility.Hidden;
            TNK21RAD.Visibility = System.Windows.Visibility.Hidden;

            TNK31.Visibility = System.Windows.Visibility.Hidden;
            laTNK31.Content = "NONE";
            TNK31ERR.Visibility = System.Windows.Visibility.Hidden;
            TNK31AA.Visibility = System.Windows.Visibility.Hidden;
            TNK31AAM.Visibility = System.Windows.Visibility.Hidden;
            TNK31ARM.Visibility = System.Windows.Visibility.Hidden;
            TNK31ATGM.Visibility = System.Windows.Visibility.Hidden;
            TNK31CAR.Visibility = System.Windows.Visibility.Hidden;
            TNK31CMD.Visibility = System.Windows.Visibility.Hidden;
            TNK31HEL.Visibility = System.Windows.Visibility.Hidden;
            TNK31INF.Visibility = System.Windows.Visibility.Hidden;
            TNK31LOG.Visibility = System.Windows.Visibility.Hidden;
            TNK31ENG.Visibility = System.Windows.Visibility.Hidden;
            TNK31AIR.Visibility = System.Windows.Visibility.Hidden;
            TNK31EW.Visibility = System.Windows.Visibility.Hidden;
            TNK31RKT.Visibility = System.Windows.Visibility.Hidden;
            TNK31MTR.Visibility = System.Windows.Visibility.Hidden;
            TNK31REC.Visibility = System.Windows.Visibility.Hidden;
            TNK31TUBE.Visibility = System.Windows.Visibility.Hidden;
            TNK31RAD.Visibility = System.Windows.Visibility.Hidden;

            TNK41.Visibility = System.Windows.Visibility.Hidden;
            laTNK41.Content = "NONE";
            TNK41ERR.Visibility = System.Windows.Visibility.Hidden;
            TNK41AA.Visibility = System.Windows.Visibility.Hidden;
            TNK41AAM.Visibility = System.Windows.Visibility.Hidden;
            TNK41ARM.Visibility = System.Windows.Visibility.Hidden;
            TNK41ATGM.Visibility = System.Windows.Visibility.Hidden;
            TNK41CAR.Visibility = System.Windows.Visibility.Hidden;
            TNK41CMD.Visibility = System.Windows.Visibility.Hidden;
            TNK41HEL.Visibility = System.Windows.Visibility.Hidden;
            TNK41INF.Visibility = System.Windows.Visibility.Hidden;
            TNK41LOG.Visibility = System.Windows.Visibility.Hidden;
            TNK41ENG.Visibility = System.Windows.Visibility.Hidden;
            TNK41AIR.Visibility = System.Windows.Visibility.Hidden;
            TNK41EW.Visibility = System.Windows.Visibility.Hidden;
            TNK41RKT.Visibility = System.Windows.Visibility.Hidden;
            TNK41MTR.Visibility = System.Windows.Visibility.Hidden;
            TNK41REC.Visibility = System.Windows.Visibility.Hidden;
            TNK41TUBE.Visibility = System.Windows.Visibility.Hidden;
            TNK41RAD.Visibility = System.Windows.Visibility.Hidden;

            TNK51.Visibility = System.Windows.Visibility.Hidden;
            laTNK51.Content = "NONE";
            TNK51ERR.Visibility = System.Windows.Visibility.Hidden;
            TNK51AA.Visibility = System.Windows.Visibility.Hidden;
            TNK51AAM.Visibility = System.Windows.Visibility.Hidden;
            TNK51ARM.Visibility = System.Windows.Visibility.Hidden;
            TNK51ATGM.Visibility = System.Windows.Visibility.Hidden;
            TNK51CAR.Visibility = System.Windows.Visibility.Hidden;
            TNK51CMD.Visibility = System.Windows.Visibility.Hidden;
            TNK51HEL.Visibility = System.Windows.Visibility.Hidden;
            TNK51INF.Visibility = System.Windows.Visibility.Hidden;
            TNK51LOG.Visibility = System.Windows.Visibility.Hidden;
            TNK51ENG.Visibility = System.Windows.Visibility.Hidden;
            TNK51AIR.Visibility = System.Windows.Visibility.Hidden;
            TNK51EW.Visibility = System.Windows.Visibility.Hidden;
            TNK51RKT.Visibility = System.Windows.Visibility.Hidden;
            TNK51MTR.Visibility = System.Windows.Visibility.Hidden;
            TNK51REC.Visibility = System.Windows.Visibility.Hidden;
            TNK51TUBE.Visibility = System.Windows.Visibility.Hidden;
            TNK51RAD.Visibility = System.Windows.Visibility.Hidden;

            TNK61.Visibility = System.Windows.Visibility.Hidden;
            laTNK61.Content = "NONE";
            TNK61ERR.Visibility = System.Windows.Visibility.Hidden;
            TNK61AA.Visibility = System.Windows.Visibility.Hidden;
            TNK61AAM.Visibility = System.Windows.Visibility.Hidden;
            TNK61ARM.Visibility = System.Windows.Visibility.Hidden;
            TNK61ATGM.Visibility = System.Windows.Visibility.Hidden;
            TNK61CAR.Visibility = System.Windows.Visibility.Hidden;
            TNK61CMD.Visibility = System.Windows.Visibility.Hidden;
            TNK61HEL.Visibility = System.Windows.Visibility.Hidden;
            TNK61INF.Visibility = System.Windows.Visibility.Hidden;
            TNK61LOG.Visibility = System.Windows.Visibility.Hidden;
            TNK61ENG.Visibility = System.Windows.Visibility.Hidden;
            TNK61AIR.Visibility = System.Windows.Visibility.Hidden;
            TNK61EW.Visibility = System.Windows.Visibility.Hidden;
            TNK61RKT.Visibility = System.Windows.Visibility.Hidden;
            TNK61MTR.Visibility = System.Windows.Visibility.Hidden;
            TNK61REC.Visibility = System.Windows.Visibility.Hidden;
            TNK61TUBE.Visibility = System.Windows.Visibility.Hidden;
            TNK61RAD.Visibility = System.Windows.Visibility.Hidden;

            TNK71.Visibility = System.Windows.Visibility.Hidden;
            laTNK71.Content = "NONE";
            TNK71ERR.Visibility = System.Windows.Visibility.Hidden;
            TNK71AA.Visibility = System.Windows.Visibility.Hidden;
            TNK71AAM.Visibility = System.Windows.Visibility.Hidden;
            TNK71ARM.Visibility = System.Windows.Visibility.Hidden;
            TNK71ATGM.Visibility = System.Windows.Visibility.Hidden;
            TNK71CAR.Visibility = System.Windows.Visibility.Hidden;
            TNK71CMD.Visibility = System.Windows.Visibility.Hidden;
            TNK71HEL.Visibility = System.Windows.Visibility.Hidden;
            TNK71INF.Visibility = System.Windows.Visibility.Hidden;
            TNK71LOG.Visibility = System.Windows.Visibility.Hidden;
            TNK71ENG.Visibility = System.Windows.Visibility.Hidden;
            TNK71AIR.Visibility = System.Windows.Visibility.Hidden;
            TNK71EW.Visibility = System.Windows.Visibility.Hidden;
            TNK71RKT.Visibility = System.Windows.Visibility.Hidden;
            TNK71MTR.Visibility = System.Windows.Visibility.Hidden;
            TNK71REC.Visibility = System.Windows.Visibility.Hidden;
            TNK71TUBE.Visibility = System.Windows.Visibility.Hidden;
            TNK71RAD.Visibility = System.Windows.Visibility.Hidden;

            TNK81.Visibility = System.Windows.Visibility.Hidden;
            laTNK81.Content = "NONE";
            TNK81ERR.Visibility = System.Windows.Visibility.Hidden;
            TNK81AA.Visibility = System.Windows.Visibility.Hidden;
            TNK81AAM.Visibility = System.Windows.Visibility.Hidden;
            TNK81ARM.Visibility = System.Windows.Visibility.Hidden;
            TNK81ATGM.Visibility = System.Windows.Visibility.Hidden;
            TNK81CAR.Visibility = System.Windows.Visibility.Hidden;
            TNK81CMD.Visibility = System.Windows.Visibility.Hidden;
            TNK81HEL.Visibility = System.Windows.Visibility.Hidden;
            TNK81INF.Visibility = System.Windows.Visibility.Hidden;
            TNK81LOG.Visibility = System.Windows.Visibility.Hidden;
            TNK81ENG.Visibility = System.Windows.Visibility.Hidden;
            TNK81AIR.Visibility = System.Windows.Visibility.Hidden;
            TNK81EW.Visibility = System.Windows.Visibility.Hidden;
            TNK81RKT.Visibility = System.Windows.Visibility.Hidden;
            TNK81MTR.Visibility = System.Windows.Visibility.Hidden;
            TNK81REC.Visibility = System.Windows.Visibility.Hidden;
            TNK81TUBE.Visibility = System.Windows.Visibility.Hidden;
            TNK81RAD.Visibility = System.Windows.Visibility.Hidden;

            TNK02.Visibility = System.Windows.Visibility.Hidden;
            laTNK02.Content = "NONE";
            TNK02ERR.Visibility = System.Windows.Visibility.Hidden;
            TNK02AA.Visibility = System.Windows.Visibility.Hidden;
            TNK02AAM.Visibility = System.Windows.Visibility.Hidden;
            TNK02ARM.Visibility = System.Windows.Visibility.Hidden;
            TNK02ATGM.Visibility = System.Windows.Visibility.Hidden;
            TNK02CAR.Visibility = System.Windows.Visibility.Hidden;
            TNK02CMD.Visibility = System.Windows.Visibility.Hidden;
            TNK02HEL.Visibility = System.Windows.Visibility.Hidden;
            TNK02INF.Visibility = System.Windows.Visibility.Hidden;
            TNK02LOG.Visibility = System.Windows.Visibility.Hidden;
            TNK02ENG.Visibility = System.Windows.Visibility.Hidden;
            TNK02AIR.Visibility = System.Windows.Visibility.Hidden;
            TNK02EW.Visibility = System.Windows.Visibility.Hidden;
            TNK02RKT.Visibility = System.Windows.Visibility.Hidden;
            TNK02MTR.Visibility = System.Windows.Visibility.Hidden;
            TNK02REC.Visibility = System.Windows.Visibility.Hidden;
            TNK02TUBE.Visibility = System.Windows.Visibility.Hidden;
            TNK02RAD.Visibility = System.Windows.Visibility.Hidden;

            TNK12.Visibility = System.Windows.Visibility.Hidden;
            laTNK12.Content = "NONE";
            TNK12ERR.Visibility = System.Windows.Visibility.Hidden;
            TNK12AA.Visibility = System.Windows.Visibility.Hidden;
            TNK12AAM.Visibility = System.Windows.Visibility.Hidden;
            TNK12ARM.Visibility = System.Windows.Visibility.Hidden;
            TNK12ATGM.Visibility = System.Windows.Visibility.Hidden;
            TNK12CAR.Visibility = System.Windows.Visibility.Hidden;
            TNK12CMD.Visibility = System.Windows.Visibility.Hidden;
            TNK12HEL.Visibility = System.Windows.Visibility.Hidden;
            TNK12INF.Visibility = System.Windows.Visibility.Hidden;
            TNK12LOG.Visibility = System.Windows.Visibility.Hidden;
            TNK12ENG.Visibility = System.Windows.Visibility.Hidden;
            TNK12AIR.Visibility = System.Windows.Visibility.Hidden;
            TNK12EW.Visibility = System.Windows.Visibility.Hidden;
            TNK12RKT.Visibility = System.Windows.Visibility.Hidden;
            TNK12MTR.Visibility = System.Windows.Visibility.Hidden;
            TNK12REC.Visibility = System.Windows.Visibility.Hidden;
            TNK12TUBE.Visibility = System.Windows.Visibility.Hidden;
            TNK12RAD.Visibility = System.Windows.Visibility.Hidden;

            TNK22.Visibility = System.Windows.Visibility.Hidden;
            laTNK22.Content = "NONE";
            TNK22ERR.Visibility = System.Windows.Visibility.Hidden;
            TNK22AA.Visibility = System.Windows.Visibility.Hidden;
            TNK22AAM.Visibility = System.Windows.Visibility.Hidden;
            TNK22ARM.Visibility = System.Windows.Visibility.Hidden;
            TNK22ATGM.Visibility = System.Windows.Visibility.Hidden;
            TNK22CAR.Visibility = System.Windows.Visibility.Hidden;
            TNK22CMD.Visibility = System.Windows.Visibility.Hidden;
            TNK22HEL.Visibility = System.Windows.Visibility.Hidden;
            TNK22INF.Visibility = System.Windows.Visibility.Hidden;
            TNK22LOG.Visibility = System.Windows.Visibility.Hidden;
            TNK22ENG.Visibility = System.Windows.Visibility.Hidden;
            TNK22AIR.Visibility = System.Windows.Visibility.Hidden;
            TNK22EW.Visibility = System.Windows.Visibility.Hidden;
            TNK22RKT.Visibility = System.Windows.Visibility.Hidden;
            TNK22MTR.Visibility = System.Windows.Visibility.Hidden;
            TNK22REC.Visibility = System.Windows.Visibility.Hidden;
            TNK22TUBE.Visibility = System.Windows.Visibility.Hidden;
            TNK22RAD.Visibility = System.Windows.Visibility.Hidden;

            TNK32.Visibility = System.Windows.Visibility.Hidden;
            laTNK32.Content = "NONE";
            TNK32ERR.Visibility = System.Windows.Visibility.Hidden;
            TNK32AA.Visibility = System.Windows.Visibility.Hidden;
            TNK32AAM.Visibility = System.Windows.Visibility.Hidden;
            TNK32ARM.Visibility = System.Windows.Visibility.Hidden;
            TNK32ATGM.Visibility = System.Windows.Visibility.Hidden;
            TNK32CAR.Visibility = System.Windows.Visibility.Hidden;
            TNK32CMD.Visibility = System.Windows.Visibility.Hidden;
            TNK32HEL.Visibility = System.Windows.Visibility.Hidden;
            TNK32INF.Visibility = System.Windows.Visibility.Hidden;
            TNK32LOG.Visibility = System.Windows.Visibility.Hidden;
            TNK32ENG.Visibility = System.Windows.Visibility.Hidden;
            TNK32AIR.Visibility = System.Windows.Visibility.Hidden;
            TNK32EW.Visibility = System.Windows.Visibility.Hidden;
            TNK32RKT.Visibility = System.Windows.Visibility.Hidden;
            TNK32MTR.Visibility = System.Windows.Visibility.Hidden;
            TNK32REC.Visibility = System.Windows.Visibility.Hidden;
            TNK32TUBE.Visibility = System.Windows.Visibility.Hidden;
            TNK32RAD.Visibility = System.Windows.Visibility.Hidden;

            TNK42.Visibility = System.Windows.Visibility.Hidden;
            laTNK42.Content = "NONE";
            TNK42ERR.Visibility = System.Windows.Visibility.Hidden;
            TNK42AA.Visibility = System.Windows.Visibility.Hidden;
            TNK42AAM.Visibility = System.Windows.Visibility.Hidden;
            TNK42ARM.Visibility = System.Windows.Visibility.Hidden;
            TNK42ATGM.Visibility = System.Windows.Visibility.Hidden;
            TNK42CAR.Visibility = System.Windows.Visibility.Hidden;
            TNK42CMD.Visibility = System.Windows.Visibility.Hidden;
            TNK42HEL.Visibility = System.Windows.Visibility.Hidden;
            TNK42INF.Visibility = System.Windows.Visibility.Hidden;
            TNK42LOG.Visibility = System.Windows.Visibility.Hidden;
            TNK42ENG.Visibility = System.Windows.Visibility.Hidden;
            TNK42AIR.Visibility = System.Windows.Visibility.Hidden;
            TNK42EW.Visibility = System.Windows.Visibility.Hidden;
            TNK42RKT.Visibility = System.Windows.Visibility.Hidden;
            TNK42MTR.Visibility = System.Windows.Visibility.Hidden;
            TNK42REC.Visibility = System.Windows.Visibility.Hidden;
            TNK42TUBE.Visibility = System.Windows.Visibility.Hidden;
            TNK42RAD.Visibility = System.Windows.Visibility.Hidden;

            TNK52.Visibility = System.Windows.Visibility.Hidden;
            laTNK52.Content = "NONE";
            TNK52ERR.Visibility = System.Windows.Visibility.Hidden;
            TNK52AA.Visibility = System.Windows.Visibility.Hidden;
            TNK52AAM.Visibility = System.Windows.Visibility.Hidden;
            TNK52ARM.Visibility = System.Windows.Visibility.Hidden;
            TNK52ATGM.Visibility = System.Windows.Visibility.Hidden;
            TNK52CAR.Visibility = System.Windows.Visibility.Hidden;
            TNK52CMD.Visibility = System.Windows.Visibility.Hidden;
            TNK52HEL.Visibility = System.Windows.Visibility.Hidden;
            TNK52INF.Visibility = System.Windows.Visibility.Hidden;
            TNK52LOG.Visibility = System.Windows.Visibility.Hidden;
            TNK52ENG.Visibility = System.Windows.Visibility.Hidden;
            TNK52AIR.Visibility = System.Windows.Visibility.Hidden;
            TNK52EW.Visibility = System.Windows.Visibility.Hidden;
            TNK52RKT.Visibility = System.Windows.Visibility.Hidden;
            TNK52MTR.Visibility = System.Windows.Visibility.Hidden;
            TNK52REC.Visibility = System.Windows.Visibility.Hidden;
            TNK52TUBE.Visibility = System.Windows.Visibility.Hidden;
            TNK52RAD.Visibility = System.Windows.Visibility.Hidden;

            TNK62.Visibility = System.Windows.Visibility.Hidden;
            laTNK62.Content = "NONE";
            TNK62ERR.Visibility = System.Windows.Visibility.Hidden;
            TNK62AA.Visibility = System.Windows.Visibility.Hidden;
            TNK62AAM.Visibility = System.Windows.Visibility.Hidden;
            TNK62ARM.Visibility = System.Windows.Visibility.Hidden;
            TNK62ATGM.Visibility = System.Windows.Visibility.Hidden;
            TNK62CAR.Visibility = System.Windows.Visibility.Hidden;
            TNK62CMD.Visibility = System.Windows.Visibility.Hidden;
            TNK62HEL.Visibility = System.Windows.Visibility.Hidden;
            TNK62INF.Visibility = System.Windows.Visibility.Hidden;
            TNK62LOG.Visibility = System.Windows.Visibility.Hidden;
            TNK62ENG.Visibility = System.Windows.Visibility.Hidden;
            TNK62AIR.Visibility = System.Windows.Visibility.Hidden;
            TNK62EW.Visibility = System.Windows.Visibility.Hidden;
            TNK62RKT.Visibility = System.Windows.Visibility.Hidden;
            TNK62MTR.Visibility = System.Windows.Visibility.Hidden;
            TNK62REC.Visibility = System.Windows.Visibility.Hidden;
            TNK62TUBE.Visibility = System.Windows.Visibility.Hidden;
            TNK62RAD.Visibility = System.Windows.Visibility.Hidden;

            TNK72.Visibility = System.Windows.Visibility.Hidden;
            laTNK72.Content = "NONE";
            TNK72ERR.Visibility = System.Windows.Visibility.Hidden;
            TNK72AA.Visibility = System.Windows.Visibility.Hidden;
            TNK72AAM.Visibility = System.Windows.Visibility.Hidden;
            TNK72ARM.Visibility = System.Windows.Visibility.Hidden;
            TNK72ATGM.Visibility = System.Windows.Visibility.Hidden;
            TNK72CAR.Visibility = System.Windows.Visibility.Hidden;
            TNK72CMD.Visibility = System.Windows.Visibility.Hidden;
            TNK72HEL.Visibility = System.Windows.Visibility.Hidden;
            TNK72INF.Visibility = System.Windows.Visibility.Hidden;
            TNK72LOG.Visibility = System.Windows.Visibility.Hidden;
            TNK72ENG.Visibility = System.Windows.Visibility.Hidden;
            TNK72AIR.Visibility = System.Windows.Visibility.Hidden;
            TNK72EW.Visibility = System.Windows.Visibility.Hidden;
            TNK72RKT.Visibility = System.Windows.Visibility.Hidden;
            TNK72MTR.Visibility = System.Windows.Visibility.Hidden;
            TNK72REC.Visibility = System.Windows.Visibility.Hidden;
            TNK72TUBE.Visibility = System.Windows.Visibility.Hidden;
            TNK72RAD.Visibility = System.Windows.Visibility.Hidden;

            TNK82.Visibility = System.Windows.Visibility.Hidden;
            laTNK82.Content = "NONE";
            TNK82ERR.Visibility = System.Windows.Visibility.Hidden;
            TNK82AA.Visibility = System.Windows.Visibility.Hidden;
            TNK82AAM.Visibility = System.Windows.Visibility.Hidden;
            TNK82ARM.Visibility = System.Windows.Visibility.Hidden;
            TNK82ATGM.Visibility = System.Windows.Visibility.Hidden;
            TNK82CAR.Visibility = System.Windows.Visibility.Hidden;
            TNK82CMD.Visibility = System.Windows.Visibility.Hidden;
            TNK82HEL.Visibility = System.Windows.Visibility.Hidden;
            TNK82INF.Visibility = System.Windows.Visibility.Hidden;
            TNK82LOG.Visibility = System.Windows.Visibility.Hidden;
            TNK82ENG.Visibility = System.Windows.Visibility.Hidden;
            TNK82AIR.Visibility = System.Windows.Visibility.Hidden;
            TNK82EW.Visibility = System.Windows.Visibility.Hidden;
            TNK82RKT.Visibility = System.Windows.Visibility.Hidden;
            TNK82MTR.Visibility = System.Windows.Visibility.Hidden;
            TNK82REC.Visibility = System.Windows.Visibility.Hidden;
            TNK82TUBE.Visibility = System.Windows.Visibility.Hidden;
            TNK82RAD.Visibility = System.Windows.Visibility.Hidden;
            #endregion Tank
            #region rec
            REC01.Visibility = System.Windows.Visibility.Hidden;
            laREC01.Content = "NONE";
            REC01ERR.Visibility = System.Windows.Visibility.Hidden;
            REC01AA.Visibility = System.Windows.Visibility.Hidden;
            REC01AAM.Visibility = System.Windows.Visibility.Hidden;
            REC01ARM.Visibility = System.Windows.Visibility.Hidden;
            REC01ATGM.Visibility = System.Windows.Visibility.Hidden;
            REC01CAR.Visibility = System.Windows.Visibility.Hidden;
            REC01CMD.Visibility = System.Windows.Visibility.Hidden;
            REC01HEL.Visibility = System.Windows.Visibility.Hidden;
            REC01INF.Visibility = System.Windows.Visibility.Hidden;
            REC01LOG.Visibility = System.Windows.Visibility.Hidden;
            REC01ENG.Visibility = System.Windows.Visibility.Hidden;
            REC01AIR.Visibility = System.Windows.Visibility.Hidden;
            REC01EW.Visibility = System.Windows.Visibility.Hidden;
            REC01RKT.Visibility = System.Windows.Visibility.Hidden;
            REC01MTR.Visibility = System.Windows.Visibility.Hidden;
            REC01REC.Visibility = System.Windows.Visibility.Hidden;
            REC01REC2.Visibility = System.Windows.Visibility.Hidden;
            REC01REC3.Visibility = System.Windows.Visibility.Hidden;
            REC01TUBE.Visibility = System.Windows.Visibility.Hidden;
            REC01RAD.Visibility = System.Windows.Visibility.Hidden;

            REC11.Visibility = System.Windows.Visibility.Hidden;
            laREC11.Content = "NONE";
            REC11ERR.Visibility = System.Windows.Visibility.Hidden;
            REC11AA.Visibility = System.Windows.Visibility.Hidden;
            REC11AAM.Visibility = System.Windows.Visibility.Hidden;
            REC11ARM.Visibility = System.Windows.Visibility.Hidden;
            REC11ATGM.Visibility = System.Windows.Visibility.Hidden;
            REC11CAR.Visibility = System.Windows.Visibility.Hidden;
            REC11CMD.Visibility = System.Windows.Visibility.Hidden;
            REC11HEL.Visibility = System.Windows.Visibility.Hidden;
            REC11INF.Visibility = System.Windows.Visibility.Hidden;
            REC11LOG.Visibility = System.Windows.Visibility.Hidden;
            REC11ENG.Visibility = System.Windows.Visibility.Hidden;
            REC11AIR.Visibility = System.Windows.Visibility.Hidden;
            REC11EW.Visibility = System.Windows.Visibility.Hidden;
            REC11RKT.Visibility = System.Windows.Visibility.Hidden;
            REC11MTR.Visibility = System.Windows.Visibility.Hidden;
            REC11REC.Visibility = System.Windows.Visibility.Hidden;
            REC11REC2.Visibility = System.Windows.Visibility.Hidden;
            REC11REC3.Visibility = System.Windows.Visibility.Hidden;
            REC11TUBE.Visibility = System.Windows.Visibility.Hidden;
            REC11RAD.Visibility = System.Windows.Visibility.Hidden;

            REC21.Visibility = System.Windows.Visibility.Hidden;
            laREC21.Content = "NONE";
            REC21ERR.Visibility = System.Windows.Visibility.Hidden;
            REC21AA.Visibility = System.Windows.Visibility.Hidden;
            REC21AAM.Visibility = System.Windows.Visibility.Hidden;
            REC21ARM.Visibility = System.Windows.Visibility.Hidden;
            REC21ATGM.Visibility = System.Windows.Visibility.Hidden;
            REC21CAR.Visibility = System.Windows.Visibility.Hidden;
            REC21CMD.Visibility = System.Windows.Visibility.Hidden;
            REC21HEL.Visibility = System.Windows.Visibility.Hidden;
            REC21INF.Visibility = System.Windows.Visibility.Hidden;
            REC21LOG.Visibility = System.Windows.Visibility.Hidden;
            REC21ENG.Visibility = System.Windows.Visibility.Hidden;
            REC21AIR.Visibility = System.Windows.Visibility.Hidden;
            REC21EW.Visibility = System.Windows.Visibility.Hidden;
            REC21RKT.Visibility = System.Windows.Visibility.Hidden;
            REC21MTR.Visibility = System.Windows.Visibility.Hidden;
            REC21REC.Visibility = System.Windows.Visibility.Hidden;
            REC21REC2.Visibility = System.Windows.Visibility.Hidden;
            REC21REC3.Visibility = System.Windows.Visibility.Hidden;
            REC21TUBE.Visibility = System.Windows.Visibility.Hidden;
            REC21RAD.Visibility = System.Windows.Visibility.Hidden;

            REC31.Visibility = System.Windows.Visibility.Hidden;
            laREC31.Content = "NONE";
            REC31ERR.Visibility = System.Windows.Visibility.Hidden;
            REC31AA.Visibility = System.Windows.Visibility.Hidden;
            REC31AAM.Visibility = System.Windows.Visibility.Hidden;
            REC31ARM.Visibility = System.Windows.Visibility.Hidden;
            REC31ATGM.Visibility = System.Windows.Visibility.Hidden;
            REC31CAR.Visibility = System.Windows.Visibility.Hidden;
            REC31CMD.Visibility = System.Windows.Visibility.Hidden;
            REC31HEL.Visibility = System.Windows.Visibility.Hidden;
            REC31INF.Visibility = System.Windows.Visibility.Hidden;
            REC31LOG.Visibility = System.Windows.Visibility.Hidden;
            REC31ENG.Visibility = System.Windows.Visibility.Hidden;
            REC31AIR.Visibility = System.Windows.Visibility.Hidden;
            REC31EW.Visibility = System.Windows.Visibility.Hidden;
            REC31RKT.Visibility = System.Windows.Visibility.Hidden;
            REC31MTR.Visibility = System.Windows.Visibility.Hidden;
            REC31REC.Visibility = System.Windows.Visibility.Hidden;
            REC31REC2.Visibility = System.Windows.Visibility.Hidden;
            REC31REC3.Visibility = System.Windows.Visibility.Hidden;
            REC31TUBE.Visibility = System.Windows.Visibility.Hidden;
            REC31RAD.Visibility = System.Windows.Visibility.Hidden;

            REC41.Visibility = System.Windows.Visibility.Hidden;
            laREC41.Content = "NONE";
            REC41ERR.Visibility = System.Windows.Visibility.Hidden;
            REC41AA.Visibility = System.Windows.Visibility.Hidden;
            REC41AAM.Visibility = System.Windows.Visibility.Hidden;
            REC41ARM.Visibility = System.Windows.Visibility.Hidden;
            REC41ATGM.Visibility = System.Windows.Visibility.Hidden;
            REC41CAR.Visibility = System.Windows.Visibility.Hidden;
            REC41CMD.Visibility = System.Windows.Visibility.Hidden;
            REC41HEL.Visibility = System.Windows.Visibility.Hidden;
            REC41INF.Visibility = System.Windows.Visibility.Hidden;
            REC41LOG.Visibility = System.Windows.Visibility.Hidden;
            REC41ENG.Visibility = System.Windows.Visibility.Hidden;
            REC41AIR.Visibility = System.Windows.Visibility.Hidden;
            REC41EW.Visibility = System.Windows.Visibility.Hidden;
            REC41RKT.Visibility = System.Windows.Visibility.Hidden;
            REC41MTR.Visibility = System.Windows.Visibility.Hidden;
            REC41REC.Visibility = System.Windows.Visibility.Hidden;
            REC41REC2.Visibility = System.Windows.Visibility.Hidden;
            REC41REC3.Visibility = System.Windows.Visibility.Hidden;
            REC41TUBE.Visibility = System.Windows.Visibility.Hidden;
            REC41RAD.Visibility = System.Windows.Visibility.Hidden;

            REC51.Visibility = System.Windows.Visibility.Hidden;
            laREC51.Content = "NONE";
            REC51ERR.Visibility = System.Windows.Visibility.Hidden;
            REC51AA.Visibility = System.Windows.Visibility.Hidden;
            REC51AAM.Visibility = System.Windows.Visibility.Hidden;
            REC51ARM.Visibility = System.Windows.Visibility.Hidden;
            REC51ATGM.Visibility = System.Windows.Visibility.Hidden;
            REC51CAR.Visibility = System.Windows.Visibility.Hidden;
            REC51CMD.Visibility = System.Windows.Visibility.Hidden;
            REC51HEL.Visibility = System.Windows.Visibility.Hidden;
            REC51INF.Visibility = System.Windows.Visibility.Hidden;
            REC51LOG.Visibility = System.Windows.Visibility.Hidden;
            REC51ENG.Visibility = System.Windows.Visibility.Hidden;
            REC51AIR.Visibility = System.Windows.Visibility.Hidden;
            REC51EW.Visibility = System.Windows.Visibility.Hidden;
            REC51RKT.Visibility = System.Windows.Visibility.Hidden;
            REC51MTR.Visibility = System.Windows.Visibility.Hidden;
            REC51REC.Visibility = System.Windows.Visibility.Hidden;
            REC51REC2.Visibility = System.Windows.Visibility.Hidden;
            REC51REC3.Visibility = System.Windows.Visibility.Hidden;
            REC51TUBE.Visibility = System.Windows.Visibility.Hidden;
            REC51RAD.Visibility = System.Windows.Visibility.Hidden;

            REC61.Visibility = System.Windows.Visibility.Hidden;
            laREC61.Content = "NONE";
            REC61ERR.Visibility = System.Windows.Visibility.Hidden;
            REC61AA.Visibility = System.Windows.Visibility.Hidden;
            REC61AAM.Visibility = System.Windows.Visibility.Hidden;
            REC61ARM.Visibility = System.Windows.Visibility.Hidden;
            REC61ATGM.Visibility = System.Windows.Visibility.Hidden;
            REC61CAR.Visibility = System.Windows.Visibility.Hidden;
            REC61CMD.Visibility = System.Windows.Visibility.Hidden;
            REC61HEL.Visibility = System.Windows.Visibility.Hidden;
            REC61INF.Visibility = System.Windows.Visibility.Hidden;
            REC61LOG.Visibility = System.Windows.Visibility.Hidden;
            REC61ENG.Visibility = System.Windows.Visibility.Hidden;
            REC61AIR.Visibility = System.Windows.Visibility.Hidden;
            REC61EW.Visibility = System.Windows.Visibility.Hidden;
            REC61RKT.Visibility = System.Windows.Visibility.Hidden;
            REC61MTR.Visibility = System.Windows.Visibility.Hidden;
            REC61REC.Visibility = System.Windows.Visibility.Hidden;
            REC61REC2.Visibility = System.Windows.Visibility.Hidden;
            REC61REC3.Visibility = System.Windows.Visibility.Hidden;
            REC61TUBE.Visibility = System.Windows.Visibility.Hidden;
            REC61RAD.Visibility = System.Windows.Visibility.Hidden;

            REC71.Visibility = System.Windows.Visibility.Hidden;
            laREC71.Content = "NONE";
            REC71ERR.Visibility = System.Windows.Visibility.Hidden;
            REC71AA.Visibility = System.Windows.Visibility.Hidden;
            REC71AAM.Visibility = System.Windows.Visibility.Hidden;
            REC71ARM.Visibility = System.Windows.Visibility.Hidden;
            REC71ATGM.Visibility = System.Windows.Visibility.Hidden;
            REC71CAR.Visibility = System.Windows.Visibility.Hidden;
            REC71CMD.Visibility = System.Windows.Visibility.Hidden;
            REC71HEL.Visibility = System.Windows.Visibility.Hidden;
            REC71INF.Visibility = System.Windows.Visibility.Hidden;
            REC71LOG.Visibility = System.Windows.Visibility.Hidden;
            REC71ENG.Visibility = System.Windows.Visibility.Hidden;
            REC71AIR.Visibility = System.Windows.Visibility.Hidden;
            REC71EW.Visibility = System.Windows.Visibility.Hidden;
            REC71RKT.Visibility = System.Windows.Visibility.Hidden;
            REC71MTR.Visibility = System.Windows.Visibility.Hidden;
            REC71REC.Visibility = System.Windows.Visibility.Hidden;
            REC71REC2.Visibility = System.Windows.Visibility.Hidden;
            REC71REC3.Visibility = System.Windows.Visibility.Hidden;
            REC71TUBE.Visibility = System.Windows.Visibility.Hidden;
            REC71RAD.Visibility = System.Windows.Visibility.Hidden;

            REC81.Visibility = System.Windows.Visibility.Hidden;
            laREC81.Content = "NONE";
            REC81ERR.Visibility = System.Windows.Visibility.Hidden;
            REC81AA.Visibility = System.Windows.Visibility.Hidden;
            REC81AAM.Visibility = System.Windows.Visibility.Hidden;
            REC81ARM.Visibility = System.Windows.Visibility.Hidden;
            REC81ATGM.Visibility = System.Windows.Visibility.Hidden;
            REC81CAR.Visibility = System.Windows.Visibility.Hidden;
            REC81CMD.Visibility = System.Windows.Visibility.Hidden;
            REC81HEL.Visibility = System.Windows.Visibility.Hidden;
            REC81INF.Visibility = System.Windows.Visibility.Hidden;
            REC81LOG.Visibility = System.Windows.Visibility.Hidden;
            REC81ENG.Visibility = System.Windows.Visibility.Hidden;
            REC81AIR.Visibility = System.Windows.Visibility.Hidden;
            REC81EW.Visibility = System.Windows.Visibility.Hidden;
            REC81RKT.Visibility = System.Windows.Visibility.Hidden;
            REC81MTR.Visibility = System.Windows.Visibility.Hidden;
            REC81REC.Visibility = System.Windows.Visibility.Hidden;
            REC81REC2.Visibility = System.Windows.Visibility.Hidden;
            REC81REC3.Visibility = System.Windows.Visibility.Hidden;
            REC81TUBE.Visibility = System.Windows.Visibility.Hidden;
            REC81RAD.Visibility = System.Windows.Visibility.Hidden;

            REC02.Visibility = System.Windows.Visibility.Hidden;
            laREC02.Content = "NONE";
            REC02ERR.Visibility = System.Windows.Visibility.Hidden;
            REC02AA.Visibility = System.Windows.Visibility.Hidden;
            REC02AAM.Visibility = System.Windows.Visibility.Hidden;
            REC02ARM.Visibility = System.Windows.Visibility.Hidden;
            REC02ATGM.Visibility = System.Windows.Visibility.Hidden;
            REC02CAR.Visibility = System.Windows.Visibility.Hidden;
            REC02CMD.Visibility = System.Windows.Visibility.Hidden;
            REC02HEL.Visibility = System.Windows.Visibility.Hidden;
            REC02INF.Visibility = System.Windows.Visibility.Hidden;
            REC02LOG.Visibility = System.Windows.Visibility.Hidden;
            REC02ENG.Visibility = System.Windows.Visibility.Hidden;
            REC02AIR.Visibility = System.Windows.Visibility.Hidden;
            REC02EW.Visibility = System.Windows.Visibility.Hidden;
            REC02RKT.Visibility = System.Windows.Visibility.Hidden;
            REC02MTR.Visibility = System.Windows.Visibility.Hidden;
            REC02REC.Visibility = System.Windows.Visibility.Hidden;
            REC02REC2.Visibility = System.Windows.Visibility.Hidden;
            REC02REC3.Visibility = System.Windows.Visibility.Hidden;
            REC02TUBE.Visibility = System.Windows.Visibility.Hidden;
            REC02RAD.Visibility = System.Windows.Visibility.Hidden;

            REC12.Visibility = System.Windows.Visibility.Hidden;
            laREC12.Content = "NONE";
            REC12ERR.Visibility = System.Windows.Visibility.Hidden;
            REC12AA.Visibility = System.Windows.Visibility.Hidden;
            REC12AAM.Visibility = System.Windows.Visibility.Hidden;
            REC12ARM.Visibility = System.Windows.Visibility.Hidden;
            REC12ATGM.Visibility = System.Windows.Visibility.Hidden;
            REC12CAR.Visibility = System.Windows.Visibility.Hidden;
            REC12CMD.Visibility = System.Windows.Visibility.Hidden;
            REC12HEL.Visibility = System.Windows.Visibility.Hidden;
            REC12INF.Visibility = System.Windows.Visibility.Hidden;
            REC12LOG.Visibility = System.Windows.Visibility.Hidden;
            REC12ENG.Visibility = System.Windows.Visibility.Hidden;
            REC12AIR.Visibility = System.Windows.Visibility.Hidden;
            REC12EW.Visibility = System.Windows.Visibility.Hidden;
            REC12RKT.Visibility = System.Windows.Visibility.Hidden;
            REC12MTR.Visibility = System.Windows.Visibility.Hidden;
            REC12REC.Visibility = System.Windows.Visibility.Hidden;
            REC12REC2.Visibility = System.Windows.Visibility.Hidden;
            REC12REC3.Visibility = System.Windows.Visibility.Hidden;
            REC12TUBE.Visibility = System.Windows.Visibility.Hidden;
            REC12RAD.Visibility = System.Windows.Visibility.Hidden;

            REC22.Visibility = System.Windows.Visibility.Hidden;
            laREC22.Content = "NONE";
            REC22ERR.Visibility = System.Windows.Visibility.Hidden;
            REC22AA.Visibility = System.Windows.Visibility.Hidden;
            REC22AAM.Visibility = System.Windows.Visibility.Hidden;
            REC22ARM.Visibility = System.Windows.Visibility.Hidden;
            REC22ATGM.Visibility = System.Windows.Visibility.Hidden;
            REC22CAR.Visibility = System.Windows.Visibility.Hidden;
            REC22CMD.Visibility = System.Windows.Visibility.Hidden;
            REC22HEL.Visibility = System.Windows.Visibility.Hidden;
            REC22INF.Visibility = System.Windows.Visibility.Hidden;
            REC22LOG.Visibility = System.Windows.Visibility.Hidden;
            REC22ENG.Visibility = System.Windows.Visibility.Hidden;
            REC22AIR.Visibility = System.Windows.Visibility.Hidden;
            REC22EW.Visibility = System.Windows.Visibility.Hidden;
            REC22RKT.Visibility = System.Windows.Visibility.Hidden;
            REC22MTR.Visibility = System.Windows.Visibility.Hidden;
            REC22REC.Visibility = System.Windows.Visibility.Hidden;
            REC22REC2.Visibility = System.Windows.Visibility.Hidden;
            REC22REC3.Visibility = System.Windows.Visibility.Hidden;
            REC22TUBE.Visibility = System.Windows.Visibility.Hidden;
            REC22RAD.Visibility = System.Windows.Visibility.Hidden;

            REC32.Visibility = System.Windows.Visibility.Hidden;
            laREC32.Content = "NONE";
            REC32ERR.Visibility = System.Windows.Visibility.Hidden;
            REC32AA.Visibility = System.Windows.Visibility.Hidden;
            REC32AAM.Visibility = System.Windows.Visibility.Hidden;
            REC32ARM.Visibility = System.Windows.Visibility.Hidden;
            REC32ATGM.Visibility = System.Windows.Visibility.Hidden;
            REC32CAR.Visibility = System.Windows.Visibility.Hidden;
            REC32CMD.Visibility = System.Windows.Visibility.Hidden;
            REC32HEL.Visibility = System.Windows.Visibility.Hidden;
            REC32INF.Visibility = System.Windows.Visibility.Hidden;
            REC32LOG.Visibility = System.Windows.Visibility.Hidden;
            REC32ENG.Visibility = System.Windows.Visibility.Hidden;
            REC32AIR.Visibility = System.Windows.Visibility.Hidden;
            REC32EW.Visibility = System.Windows.Visibility.Hidden;
            REC32RKT.Visibility = System.Windows.Visibility.Hidden;
            REC32MTR.Visibility = System.Windows.Visibility.Hidden;
            REC32REC.Visibility = System.Windows.Visibility.Hidden;
            REC32REC2.Visibility = System.Windows.Visibility.Hidden;
            REC32REC3.Visibility = System.Windows.Visibility.Hidden;
            REC32TUBE.Visibility = System.Windows.Visibility.Hidden;
            REC32RAD.Visibility = System.Windows.Visibility.Hidden;

            REC42.Visibility = System.Windows.Visibility.Hidden;
            laREC42.Content = "NONE";
            REC42ERR.Visibility = System.Windows.Visibility.Hidden;
            REC42AA.Visibility = System.Windows.Visibility.Hidden;
            REC42AAM.Visibility = System.Windows.Visibility.Hidden;
            REC42ARM.Visibility = System.Windows.Visibility.Hidden;
            REC42ATGM.Visibility = System.Windows.Visibility.Hidden;
            REC42CAR.Visibility = System.Windows.Visibility.Hidden;
            REC42CMD.Visibility = System.Windows.Visibility.Hidden;
            REC42HEL.Visibility = System.Windows.Visibility.Hidden;
            REC42INF.Visibility = System.Windows.Visibility.Hidden;
            REC42LOG.Visibility = System.Windows.Visibility.Hidden;
            REC42ENG.Visibility = System.Windows.Visibility.Hidden;
            REC42AIR.Visibility = System.Windows.Visibility.Hidden;
            REC42EW.Visibility = System.Windows.Visibility.Hidden;
            REC42RKT.Visibility = System.Windows.Visibility.Hidden;
            REC42MTR.Visibility = System.Windows.Visibility.Hidden;
            REC42REC.Visibility = System.Windows.Visibility.Hidden;
            REC42REC2.Visibility = System.Windows.Visibility.Hidden;
            REC42REC3.Visibility = System.Windows.Visibility.Hidden;
            REC42TUBE.Visibility = System.Windows.Visibility.Hidden;
            REC42RAD.Visibility = System.Windows.Visibility.Hidden;

            REC52.Visibility = System.Windows.Visibility.Hidden;
            laREC52.Content = "NONE";
            REC52ERR.Visibility = System.Windows.Visibility.Hidden;
            REC52AA.Visibility = System.Windows.Visibility.Hidden;
            REC52AAM.Visibility = System.Windows.Visibility.Hidden;
            REC52ARM.Visibility = System.Windows.Visibility.Hidden;
            REC52ATGM.Visibility = System.Windows.Visibility.Hidden;
            REC52CAR.Visibility = System.Windows.Visibility.Hidden;
            REC52CMD.Visibility = System.Windows.Visibility.Hidden;
            REC52HEL.Visibility = System.Windows.Visibility.Hidden;
            REC52INF.Visibility = System.Windows.Visibility.Hidden;
            REC52LOG.Visibility = System.Windows.Visibility.Hidden;
            REC52ENG.Visibility = System.Windows.Visibility.Hidden;
            REC52AIR.Visibility = System.Windows.Visibility.Hidden;
            REC52EW.Visibility = System.Windows.Visibility.Hidden;
            REC52RKT.Visibility = System.Windows.Visibility.Hidden;
            REC52MTR.Visibility = System.Windows.Visibility.Hidden;
            REC52REC.Visibility = System.Windows.Visibility.Hidden;
            REC52REC2.Visibility = System.Windows.Visibility.Hidden;
            REC52REC3.Visibility = System.Windows.Visibility.Hidden;
            REC52TUBE.Visibility = System.Windows.Visibility.Hidden;
            REC52RAD.Visibility = System.Windows.Visibility.Hidden;

            REC62.Visibility = System.Windows.Visibility.Hidden;
            laREC62.Content = "NONE";
            REC62ERR.Visibility = System.Windows.Visibility.Hidden;
            REC62AA.Visibility = System.Windows.Visibility.Hidden;
            REC62AAM.Visibility = System.Windows.Visibility.Hidden;
            REC62ARM.Visibility = System.Windows.Visibility.Hidden;
            REC62ATGM.Visibility = System.Windows.Visibility.Hidden;
            REC62CAR.Visibility = System.Windows.Visibility.Hidden;
            REC62CMD.Visibility = System.Windows.Visibility.Hidden;
            REC62HEL.Visibility = System.Windows.Visibility.Hidden;
            REC62INF.Visibility = System.Windows.Visibility.Hidden;
            REC62LOG.Visibility = System.Windows.Visibility.Hidden;
            REC62ENG.Visibility = System.Windows.Visibility.Hidden;
            REC62AIR.Visibility = System.Windows.Visibility.Hidden;
            REC62EW.Visibility = System.Windows.Visibility.Hidden;
            REC62RKT.Visibility = System.Windows.Visibility.Hidden;
            REC62MTR.Visibility = System.Windows.Visibility.Hidden;
            REC62REC.Visibility = System.Windows.Visibility.Hidden;
            REC62REC2.Visibility = System.Windows.Visibility.Hidden;
            REC62REC3.Visibility = System.Windows.Visibility.Hidden;
            REC62TUBE.Visibility = System.Windows.Visibility.Hidden;
            REC62RAD.Visibility = System.Windows.Visibility.Hidden;

            REC72.Visibility = System.Windows.Visibility.Hidden;
            laREC72.Content = "NONE";
            REC72ERR.Visibility = System.Windows.Visibility.Hidden;
            REC72AA.Visibility = System.Windows.Visibility.Hidden;
            REC72AAM.Visibility = System.Windows.Visibility.Hidden;
            REC72ARM.Visibility = System.Windows.Visibility.Hidden;
            REC72ATGM.Visibility = System.Windows.Visibility.Hidden;
            REC72CAR.Visibility = System.Windows.Visibility.Hidden;
            REC72CMD.Visibility = System.Windows.Visibility.Hidden;
            REC72HEL.Visibility = System.Windows.Visibility.Hidden;
            REC72INF.Visibility = System.Windows.Visibility.Hidden;
            REC72LOG.Visibility = System.Windows.Visibility.Hidden;
            REC72ENG.Visibility = System.Windows.Visibility.Hidden;
            REC72AIR.Visibility = System.Windows.Visibility.Hidden;
            REC72EW.Visibility = System.Windows.Visibility.Hidden;
            REC72RKT.Visibility = System.Windows.Visibility.Hidden;
            REC72MTR.Visibility = System.Windows.Visibility.Hidden;
            REC72REC.Visibility = System.Windows.Visibility.Hidden;
            REC72REC2.Visibility = System.Windows.Visibility.Hidden;
            REC72REC3.Visibility = System.Windows.Visibility.Hidden;
            REC72TUBE.Visibility = System.Windows.Visibility.Hidden;
            REC72RAD.Visibility = System.Windows.Visibility.Hidden;

            REC82.Visibility = System.Windows.Visibility.Hidden;
            laREC82.Content = "NONE";
            REC82ERR.Visibility = System.Windows.Visibility.Hidden;
            REC82AA.Visibility = System.Windows.Visibility.Hidden;
            REC82AAM.Visibility = System.Windows.Visibility.Hidden;
            REC82ARM.Visibility = System.Windows.Visibility.Hidden;
            REC82ATGM.Visibility = System.Windows.Visibility.Hidden;
            REC82CAR.Visibility = System.Windows.Visibility.Hidden;
            REC82CMD.Visibility = System.Windows.Visibility.Hidden;
            REC82HEL.Visibility = System.Windows.Visibility.Hidden;
            REC82INF.Visibility = System.Windows.Visibility.Hidden;
            REC82LOG.Visibility = System.Windows.Visibility.Hidden;
            REC82ENG.Visibility = System.Windows.Visibility.Hidden;
            REC82AIR.Visibility = System.Windows.Visibility.Hidden;
            REC82EW.Visibility = System.Windows.Visibility.Hidden;
            REC82RKT.Visibility = System.Windows.Visibility.Hidden;
            REC82MTR.Visibility = System.Windows.Visibility.Hidden;
            REC82REC.Visibility = System.Windows.Visibility.Hidden;
            REC82REC2.Visibility = System.Windows.Visibility.Hidden;
            REC82REC3.Visibility = System.Windows.Visibility.Hidden;
            REC82TUBE.Visibility = System.Windows.Visibility.Hidden;
            REC82RAD.Visibility = System.Windows.Visibility.Hidden;
            #endregion rec
            #region VEH
            VEH01.Visibility = System.Windows.Visibility.Hidden;
            laVEH01.Content = "NONE";
            VEH01ERR.Visibility = System.Windows.Visibility.Hidden;
            VEH01AA.Visibility = System.Windows.Visibility.Hidden;
            VEH01AAM.Visibility = System.Windows.Visibility.Hidden;
            VEH01ARM.Visibility = System.Windows.Visibility.Hidden;
            VEH01ATGM.Visibility = System.Windows.Visibility.Hidden;
            VEH01CAR.Visibility = System.Windows.Visibility.Hidden;
            VEH01CMD.Visibility = System.Windows.Visibility.Hidden;
            VEH01HEL.Visibility = System.Windows.Visibility.Hidden;
            VEH01INF.Visibility = System.Windows.Visibility.Hidden;
            VEH01LOG.Visibility = System.Windows.Visibility.Hidden;
            VEH01ENG.Visibility = System.Windows.Visibility.Hidden;
            VEH01AIR.Visibility = System.Windows.Visibility.Hidden;
            VEH01EW.Visibility = System.Windows.Visibility.Hidden;
            VEH01RKT.Visibility = System.Windows.Visibility.Hidden;
            VEH01MTR.Visibility = System.Windows.Visibility.Hidden;
            VEH01REC.Visibility = System.Windows.Visibility.Hidden;
            VEH01TUBE.Visibility = System.Windows.Visibility.Hidden;
            VEH01RAD.Visibility = System.Windows.Visibility.Hidden;

            VEH11.Visibility = System.Windows.Visibility.Hidden;
            laVEH11.Content = "NONE";
            VEH11ERR.Visibility = System.Windows.Visibility.Hidden;
            VEH11AA.Visibility = System.Windows.Visibility.Hidden;
            VEH11AAM.Visibility = System.Windows.Visibility.Hidden;
            VEH11ARM.Visibility = System.Windows.Visibility.Hidden;
            VEH11ATGM.Visibility = System.Windows.Visibility.Hidden;
            VEH11CAR.Visibility = System.Windows.Visibility.Hidden;
            VEH11CMD.Visibility = System.Windows.Visibility.Hidden;
            VEH11HEL.Visibility = System.Windows.Visibility.Hidden;
            VEH11INF.Visibility = System.Windows.Visibility.Hidden;
            VEH11LOG.Visibility = System.Windows.Visibility.Hidden;
            VEH11ENG.Visibility = System.Windows.Visibility.Hidden;
            VEH11AIR.Visibility = System.Windows.Visibility.Hidden;
            VEH11EW.Visibility = System.Windows.Visibility.Hidden;
            VEH11RKT.Visibility = System.Windows.Visibility.Hidden;
            VEH11MTR.Visibility = System.Windows.Visibility.Hidden;
            VEH11REC.Visibility = System.Windows.Visibility.Hidden;
            VEH11TUBE.Visibility = System.Windows.Visibility.Hidden;
            VEH11RAD.Visibility = System.Windows.Visibility.Hidden;

            VEH21.Visibility = System.Windows.Visibility.Hidden;
            laVEH21.Content = "NONE";
            VEH21ERR.Visibility = System.Windows.Visibility.Hidden;
            VEH21AA.Visibility = System.Windows.Visibility.Hidden;
            VEH21AAM.Visibility = System.Windows.Visibility.Hidden;
            VEH21ARM.Visibility = System.Windows.Visibility.Hidden;
            VEH21ATGM.Visibility = System.Windows.Visibility.Hidden;
            VEH21CAR.Visibility = System.Windows.Visibility.Hidden;
            VEH21CMD.Visibility = System.Windows.Visibility.Hidden;
            VEH21HEL.Visibility = System.Windows.Visibility.Hidden;
            VEH21INF.Visibility = System.Windows.Visibility.Hidden;
            VEH21LOG.Visibility = System.Windows.Visibility.Hidden;
            VEH21ENG.Visibility = System.Windows.Visibility.Hidden;
            VEH21AIR.Visibility = System.Windows.Visibility.Hidden;
            VEH21EW.Visibility = System.Windows.Visibility.Hidden;
            VEH21RKT.Visibility = System.Windows.Visibility.Hidden;
            VEH21MTR.Visibility = System.Windows.Visibility.Hidden;
            VEH21REC.Visibility = System.Windows.Visibility.Hidden;
            VEH21TUBE.Visibility = System.Windows.Visibility.Hidden;
            VEH21RAD.Visibility = System.Windows.Visibility.Hidden;

            VEH31.Visibility = System.Windows.Visibility.Hidden;
            laVEH31.Content = "NONE";
            VEH31ERR.Visibility = System.Windows.Visibility.Hidden;
            VEH31AA.Visibility = System.Windows.Visibility.Hidden;
            VEH31AAM.Visibility = System.Windows.Visibility.Hidden;
            VEH31ARM.Visibility = System.Windows.Visibility.Hidden;
            VEH31ATGM.Visibility = System.Windows.Visibility.Hidden;
            VEH31CAR.Visibility = System.Windows.Visibility.Hidden;
            VEH31CMD.Visibility = System.Windows.Visibility.Hidden;
            VEH31HEL.Visibility = System.Windows.Visibility.Hidden;
            VEH31INF.Visibility = System.Windows.Visibility.Hidden;
            VEH31LOG.Visibility = System.Windows.Visibility.Hidden;
            VEH31ENG.Visibility = System.Windows.Visibility.Hidden;
            VEH31AIR.Visibility = System.Windows.Visibility.Hidden;
            VEH31EW.Visibility = System.Windows.Visibility.Hidden;
            VEH31RKT.Visibility = System.Windows.Visibility.Hidden;
            VEH31MTR.Visibility = System.Windows.Visibility.Hidden;
            VEH31REC.Visibility = System.Windows.Visibility.Hidden;
            VEH31TUBE.Visibility = System.Windows.Visibility.Hidden;
            VEH31RAD.Visibility = System.Windows.Visibility.Hidden;

            VEH41.Visibility = System.Windows.Visibility.Hidden;
            laVEH41.Content = "NONE";
            VEH41ERR.Visibility = System.Windows.Visibility.Hidden;
            VEH41AA.Visibility = System.Windows.Visibility.Hidden;
            VEH41AAM.Visibility = System.Windows.Visibility.Hidden;
            VEH41ARM.Visibility = System.Windows.Visibility.Hidden;
            VEH41ATGM.Visibility = System.Windows.Visibility.Hidden;
            VEH41CAR.Visibility = System.Windows.Visibility.Hidden;
            VEH41CMD.Visibility = System.Windows.Visibility.Hidden;
            VEH41HEL.Visibility = System.Windows.Visibility.Hidden;
            VEH41INF.Visibility = System.Windows.Visibility.Hidden;
            VEH41LOG.Visibility = System.Windows.Visibility.Hidden;
            VEH41ENG.Visibility = System.Windows.Visibility.Hidden;
            VEH41AIR.Visibility = System.Windows.Visibility.Hidden;
            VEH41EW.Visibility = System.Windows.Visibility.Hidden;
            VEH41RKT.Visibility = System.Windows.Visibility.Hidden;
            VEH41MTR.Visibility = System.Windows.Visibility.Hidden;
            VEH41REC.Visibility = System.Windows.Visibility.Hidden;
            VEH41TUBE.Visibility = System.Windows.Visibility.Hidden;
            VEH41RAD.Visibility = System.Windows.Visibility.Hidden;

            VEH51.Visibility = System.Windows.Visibility.Hidden;
            laVEH51.Content = "NONE";
            VEH51ERR.Visibility = System.Windows.Visibility.Hidden;
            VEH51AA.Visibility = System.Windows.Visibility.Hidden;
            VEH51AAM.Visibility = System.Windows.Visibility.Hidden;
            VEH51ARM.Visibility = System.Windows.Visibility.Hidden;
            VEH51ATGM.Visibility = System.Windows.Visibility.Hidden;
            VEH51CAR.Visibility = System.Windows.Visibility.Hidden;
            VEH51CMD.Visibility = System.Windows.Visibility.Hidden;
            VEH51HEL.Visibility = System.Windows.Visibility.Hidden;
            VEH51INF.Visibility = System.Windows.Visibility.Hidden;
            VEH51LOG.Visibility = System.Windows.Visibility.Hidden;
            VEH51ENG.Visibility = System.Windows.Visibility.Hidden;
            VEH51AIR.Visibility = System.Windows.Visibility.Hidden;
            VEH51EW.Visibility = System.Windows.Visibility.Hidden;
            VEH51RKT.Visibility = System.Windows.Visibility.Hidden;
            VEH51MTR.Visibility = System.Windows.Visibility.Hidden;
            VEH51REC.Visibility = System.Windows.Visibility.Hidden;
            VEH51TUBE.Visibility = System.Windows.Visibility.Hidden;
            VEH51RAD.Visibility = System.Windows.Visibility.Hidden;

            VEH61.Visibility = System.Windows.Visibility.Hidden;
            laVEH61.Content = "NONE";
            VEH61ERR.Visibility = System.Windows.Visibility.Hidden;
            VEH61AA.Visibility = System.Windows.Visibility.Hidden;
            VEH61AAM.Visibility = System.Windows.Visibility.Hidden;
            VEH61ARM.Visibility = System.Windows.Visibility.Hidden;
            VEH61ATGM.Visibility = System.Windows.Visibility.Hidden;
            VEH61CAR.Visibility = System.Windows.Visibility.Hidden;
            VEH61CMD.Visibility = System.Windows.Visibility.Hidden;
            VEH61HEL.Visibility = System.Windows.Visibility.Hidden;
            VEH61INF.Visibility = System.Windows.Visibility.Hidden;
            VEH61LOG.Visibility = System.Windows.Visibility.Hidden;
            VEH61ENG.Visibility = System.Windows.Visibility.Hidden;
            VEH61AIR.Visibility = System.Windows.Visibility.Hidden;
            VEH61EW.Visibility = System.Windows.Visibility.Hidden;
            VEH61RKT.Visibility = System.Windows.Visibility.Hidden;
            VEH61MTR.Visibility = System.Windows.Visibility.Hidden;
            VEH61REC.Visibility = System.Windows.Visibility.Hidden;
            VEH61TUBE.Visibility = System.Windows.Visibility.Hidden;
            VEH61RAD.Visibility = System.Windows.Visibility.Hidden;

            VEH71.Visibility = System.Windows.Visibility.Hidden;
            laVEH71.Content = "NONE";
            VEH71ERR.Visibility = System.Windows.Visibility.Hidden;
            VEH71AA.Visibility = System.Windows.Visibility.Hidden;
            VEH71AAM.Visibility = System.Windows.Visibility.Hidden;
            VEH71ARM.Visibility = System.Windows.Visibility.Hidden;
            VEH71ATGM.Visibility = System.Windows.Visibility.Hidden;
            VEH71CAR.Visibility = System.Windows.Visibility.Hidden;
            VEH71CMD.Visibility = System.Windows.Visibility.Hidden;
            VEH71HEL.Visibility = System.Windows.Visibility.Hidden;
            VEH71INF.Visibility = System.Windows.Visibility.Hidden;
            VEH71LOG.Visibility = System.Windows.Visibility.Hidden;
            VEH71ENG.Visibility = System.Windows.Visibility.Hidden;
            VEH71AIR.Visibility = System.Windows.Visibility.Hidden;
            VEH71EW.Visibility = System.Windows.Visibility.Hidden;
            VEH71RKT.Visibility = System.Windows.Visibility.Hidden;
            VEH71MTR.Visibility = System.Windows.Visibility.Hidden;
            VEH71REC.Visibility = System.Windows.Visibility.Hidden;
            VEH71TUBE.Visibility = System.Windows.Visibility.Hidden;
            VEH71RAD.Visibility = System.Windows.Visibility.Hidden;

            VEH81.Visibility = System.Windows.Visibility.Hidden;
            laVEH81.Content = "NONE";
            VEH81ERR.Visibility = System.Windows.Visibility.Hidden;
            VEH81AA.Visibility = System.Windows.Visibility.Hidden;
            VEH81AAM.Visibility = System.Windows.Visibility.Hidden;
            VEH81ARM.Visibility = System.Windows.Visibility.Hidden;
            VEH81ATGM.Visibility = System.Windows.Visibility.Hidden;
            VEH81CAR.Visibility = System.Windows.Visibility.Hidden;
            VEH81CMD.Visibility = System.Windows.Visibility.Hidden;
            VEH81HEL.Visibility = System.Windows.Visibility.Hidden;
            VEH81INF.Visibility = System.Windows.Visibility.Hidden;
            VEH81LOG.Visibility = System.Windows.Visibility.Hidden;
            VEH81ENG.Visibility = System.Windows.Visibility.Hidden;
            VEH81AIR.Visibility = System.Windows.Visibility.Hidden;
            VEH81EW.Visibility = System.Windows.Visibility.Hidden;
            VEH81RKT.Visibility = System.Windows.Visibility.Hidden;
            VEH81MTR.Visibility = System.Windows.Visibility.Hidden;
            VEH81REC.Visibility = System.Windows.Visibility.Hidden;
            VEH81TUBE.Visibility = System.Windows.Visibility.Hidden;
            VEH81RAD.Visibility = System.Windows.Visibility.Hidden;

            VEH02.Visibility = System.Windows.Visibility.Hidden;
            laVEH02.Content = "NONE";
            VEH02ERR.Visibility = System.Windows.Visibility.Hidden;
            VEH02AA.Visibility = System.Windows.Visibility.Hidden;
            VEH02AAM.Visibility = System.Windows.Visibility.Hidden;
            VEH02ARM.Visibility = System.Windows.Visibility.Hidden;
            VEH02ATGM.Visibility = System.Windows.Visibility.Hidden;
            VEH02CAR.Visibility = System.Windows.Visibility.Hidden;
            VEH02CMD.Visibility = System.Windows.Visibility.Hidden;
            VEH02HEL.Visibility = System.Windows.Visibility.Hidden;
            VEH02INF.Visibility = System.Windows.Visibility.Hidden;
            VEH02LOG.Visibility = System.Windows.Visibility.Hidden;
            VEH02ENG.Visibility = System.Windows.Visibility.Hidden;
            VEH02AIR.Visibility = System.Windows.Visibility.Hidden;
            VEH02EW.Visibility = System.Windows.Visibility.Hidden;
            VEH02RKT.Visibility = System.Windows.Visibility.Hidden;
            VEH02MTR.Visibility = System.Windows.Visibility.Hidden;
            VEH02REC.Visibility = System.Windows.Visibility.Hidden;
            VEH02TUBE.Visibility = System.Windows.Visibility.Hidden;
            VEH02RAD.Visibility = System.Windows.Visibility.Hidden;

            VEH12.Visibility = System.Windows.Visibility.Hidden;
            laVEH12.Content = "NONE";
            VEH12ERR.Visibility = System.Windows.Visibility.Hidden;
            VEH12AA.Visibility = System.Windows.Visibility.Hidden;
            VEH12AAM.Visibility = System.Windows.Visibility.Hidden;
            VEH12ARM.Visibility = System.Windows.Visibility.Hidden;
            VEH12ATGM.Visibility = System.Windows.Visibility.Hidden;
            VEH12CAR.Visibility = System.Windows.Visibility.Hidden;
            VEH12CMD.Visibility = System.Windows.Visibility.Hidden;
            VEH12HEL.Visibility = System.Windows.Visibility.Hidden;
            VEH12INF.Visibility = System.Windows.Visibility.Hidden;
            VEH12LOG.Visibility = System.Windows.Visibility.Hidden;
            VEH12ENG.Visibility = System.Windows.Visibility.Hidden;
            VEH12AIR.Visibility = System.Windows.Visibility.Hidden;
            VEH12EW.Visibility = System.Windows.Visibility.Hidden;
            VEH12RKT.Visibility = System.Windows.Visibility.Hidden;
            VEH12MTR.Visibility = System.Windows.Visibility.Hidden;
            VEH12REC.Visibility = System.Windows.Visibility.Hidden;
            VEH12TUBE.Visibility = System.Windows.Visibility.Hidden;
            VEH12RAD.Visibility = System.Windows.Visibility.Hidden;

            VEH22.Visibility = System.Windows.Visibility.Hidden;
            laVEH22.Content = "NONE";
            VEH22ERR.Visibility = System.Windows.Visibility.Hidden;
            VEH22AA.Visibility = System.Windows.Visibility.Hidden;
            VEH22AAM.Visibility = System.Windows.Visibility.Hidden;
            VEH22ARM.Visibility = System.Windows.Visibility.Hidden;
            VEH22ATGM.Visibility = System.Windows.Visibility.Hidden;
            VEH22CAR.Visibility = System.Windows.Visibility.Hidden;
            VEH22CMD.Visibility = System.Windows.Visibility.Hidden;
            VEH22HEL.Visibility = System.Windows.Visibility.Hidden;
            VEH22INF.Visibility = System.Windows.Visibility.Hidden;
            VEH22LOG.Visibility = System.Windows.Visibility.Hidden;
            VEH22ENG.Visibility = System.Windows.Visibility.Hidden;
            VEH22AIR.Visibility = System.Windows.Visibility.Hidden;
            VEH22EW.Visibility = System.Windows.Visibility.Hidden;
            VEH22RKT.Visibility = System.Windows.Visibility.Hidden;
            VEH22MTR.Visibility = System.Windows.Visibility.Hidden;
            VEH22REC.Visibility = System.Windows.Visibility.Hidden;
            VEH22TUBE.Visibility = System.Windows.Visibility.Hidden;
            VEH22RAD.Visibility = System.Windows.Visibility.Hidden;

            VEH32.Visibility = System.Windows.Visibility.Hidden;
            laVEH32.Content = "NONE";
            VEH32ERR.Visibility = System.Windows.Visibility.Hidden;
            VEH32AA.Visibility = System.Windows.Visibility.Hidden;
            VEH32AAM.Visibility = System.Windows.Visibility.Hidden;
            VEH32ARM.Visibility = System.Windows.Visibility.Hidden;
            VEH32ATGM.Visibility = System.Windows.Visibility.Hidden;
            VEH32CAR.Visibility = System.Windows.Visibility.Hidden;
            VEH32CMD.Visibility = System.Windows.Visibility.Hidden;
            VEH32HEL.Visibility = System.Windows.Visibility.Hidden;
            VEH32INF.Visibility = System.Windows.Visibility.Hidden;
            VEH32LOG.Visibility = System.Windows.Visibility.Hidden;
            VEH32ENG.Visibility = System.Windows.Visibility.Hidden;
            VEH32AIR.Visibility = System.Windows.Visibility.Hidden;
            VEH32EW.Visibility = System.Windows.Visibility.Hidden;
            VEH32RKT.Visibility = System.Windows.Visibility.Hidden;
            VEH32MTR.Visibility = System.Windows.Visibility.Hidden;
            VEH32REC.Visibility = System.Windows.Visibility.Hidden;
            VEH32TUBE.Visibility = System.Windows.Visibility.Hidden;
            VEH32RAD.Visibility = System.Windows.Visibility.Hidden;

            VEH42.Visibility = System.Windows.Visibility.Hidden;
            laVEH42.Content = "NONE";
            VEH42ERR.Visibility = System.Windows.Visibility.Hidden;
            VEH42AA.Visibility = System.Windows.Visibility.Hidden;
            VEH42AAM.Visibility = System.Windows.Visibility.Hidden;
            VEH42ARM.Visibility = System.Windows.Visibility.Hidden;
            VEH42ATGM.Visibility = System.Windows.Visibility.Hidden;
            VEH42CAR.Visibility = System.Windows.Visibility.Hidden;
            VEH42CMD.Visibility = System.Windows.Visibility.Hidden;
            VEH42HEL.Visibility = System.Windows.Visibility.Hidden;
            VEH42INF.Visibility = System.Windows.Visibility.Hidden;
            VEH42LOG.Visibility = System.Windows.Visibility.Hidden;
            VEH42ENG.Visibility = System.Windows.Visibility.Hidden;
            VEH42AIR.Visibility = System.Windows.Visibility.Hidden;
            VEH42EW.Visibility = System.Windows.Visibility.Hidden;
            VEH42RKT.Visibility = System.Windows.Visibility.Hidden;
            VEH42MTR.Visibility = System.Windows.Visibility.Hidden;
            VEH42REC.Visibility = System.Windows.Visibility.Hidden;
            VEH42TUBE.Visibility = System.Windows.Visibility.Hidden;
            VEH42RAD.Visibility = System.Windows.Visibility.Hidden;

            VEH52.Visibility = System.Windows.Visibility.Hidden;
            laVEH52.Content = "NONE";
            VEH52ERR.Visibility = System.Windows.Visibility.Hidden;
            VEH52AA.Visibility = System.Windows.Visibility.Hidden;
            VEH52AAM.Visibility = System.Windows.Visibility.Hidden;
            VEH52ARM.Visibility = System.Windows.Visibility.Hidden;
            VEH52ATGM.Visibility = System.Windows.Visibility.Hidden;
            VEH52CAR.Visibility = System.Windows.Visibility.Hidden;
            VEH52CMD.Visibility = System.Windows.Visibility.Hidden;
            VEH52HEL.Visibility = System.Windows.Visibility.Hidden;
            VEH52INF.Visibility = System.Windows.Visibility.Hidden;
            VEH52LOG.Visibility = System.Windows.Visibility.Hidden;
            VEH52ENG.Visibility = System.Windows.Visibility.Hidden;
            VEH52AIR.Visibility = System.Windows.Visibility.Hidden;
            VEH52EW.Visibility = System.Windows.Visibility.Hidden;
            VEH52RKT.Visibility = System.Windows.Visibility.Hidden;
            VEH52MTR.Visibility = System.Windows.Visibility.Hidden;
            VEH52REC.Visibility = System.Windows.Visibility.Hidden;
            VEH52TUBE.Visibility = System.Windows.Visibility.Hidden;
            VEH52RAD.Visibility = System.Windows.Visibility.Hidden;

            VEH62.Visibility = System.Windows.Visibility.Hidden;
            laVEH62.Content = "NONE";
            VEH62ERR.Visibility = System.Windows.Visibility.Hidden;
            VEH62AA.Visibility = System.Windows.Visibility.Hidden;
            VEH62AAM.Visibility = System.Windows.Visibility.Hidden;
            VEH62ARM.Visibility = System.Windows.Visibility.Hidden;
            VEH62ATGM.Visibility = System.Windows.Visibility.Hidden;
            VEH62CAR.Visibility = System.Windows.Visibility.Hidden;
            VEH62CMD.Visibility = System.Windows.Visibility.Hidden;
            VEH62HEL.Visibility = System.Windows.Visibility.Hidden;
            VEH62INF.Visibility = System.Windows.Visibility.Hidden;
            VEH62LOG.Visibility = System.Windows.Visibility.Hidden;
            VEH62ENG.Visibility = System.Windows.Visibility.Hidden;
            VEH62AIR.Visibility = System.Windows.Visibility.Hidden;
            VEH62EW.Visibility = System.Windows.Visibility.Hidden;
            VEH62RKT.Visibility = System.Windows.Visibility.Hidden;
            VEH62MTR.Visibility = System.Windows.Visibility.Hidden;
            VEH62REC.Visibility = System.Windows.Visibility.Hidden;
            VEH62TUBE.Visibility = System.Windows.Visibility.Hidden;
            VEH62RAD.Visibility = System.Windows.Visibility.Hidden;

            VEH72.Visibility = System.Windows.Visibility.Hidden;
            laVEH72.Content = "NONE";
            VEH72ERR.Visibility = System.Windows.Visibility.Hidden;
            VEH72AA.Visibility = System.Windows.Visibility.Hidden;
            VEH72AAM.Visibility = System.Windows.Visibility.Hidden;
            VEH72ARM.Visibility = System.Windows.Visibility.Hidden;
            VEH72ATGM.Visibility = System.Windows.Visibility.Hidden;
            VEH72CAR.Visibility = System.Windows.Visibility.Hidden;
            VEH72CMD.Visibility = System.Windows.Visibility.Hidden;
            VEH72HEL.Visibility = System.Windows.Visibility.Hidden;
            VEH72INF.Visibility = System.Windows.Visibility.Hidden;
            VEH72LOG.Visibility = System.Windows.Visibility.Hidden;
            VEH72ENG.Visibility = System.Windows.Visibility.Hidden;
            VEH72AIR.Visibility = System.Windows.Visibility.Hidden;
            VEH72EW.Visibility = System.Windows.Visibility.Hidden;
            VEH72RKT.Visibility = System.Windows.Visibility.Hidden;
            VEH72MTR.Visibility = System.Windows.Visibility.Hidden;
            VEH72REC.Visibility = System.Windows.Visibility.Hidden;
            VEH72TUBE.Visibility = System.Windows.Visibility.Hidden;
            VEH72RAD.Visibility = System.Windows.Visibility.Hidden;

            VEH82.Visibility = System.Windows.Visibility.Hidden;
            laVEH82.Content = "NONE";
            VEH82ERR.Visibility = System.Windows.Visibility.Hidden;
            VEH82AA.Visibility = System.Windows.Visibility.Hidden;
            VEH82AAM.Visibility = System.Windows.Visibility.Hidden;
            VEH82ARM.Visibility = System.Windows.Visibility.Hidden;
            VEH82ATGM.Visibility = System.Windows.Visibility.Hidden;
            VEH82CAR.Visibility = System.Windows.Visibility.Hidden;
            VEH82CMD.Visibility = System.Windows.Visibility.Hidden;
            VEH82HEL.Visibility = System.Windows.Visibility.Hidden;
            VEH82INF.Visibility = System.Windows.Visibility.Hidden;
            VEH82LOG.Visibility = System.Windows.Visibility.Hidden;
            VEH82ENG.Visibility = System.Windows.Visibility.Hidden;
            VEH82AIR.Visibility = System.Windows.Visibility.Hidden;
            VEH82EW.Visibility = System.Windows.Visibility.Hidden;
            VEH82RKT.Visibility = System.Windows.Visibility.Hidden;
            VEH82MTR.Visibility = System.Windows.Visibility.Hidden;
            VEH82REC.Visibility = System.Windows.Visibility.Hidden;
            VEH82TUBE.Visibility = System.Windows.Visibility.Hidden;
            VEH82RAD.Visibility = System.Windows.Visibility.Hidden;
            #endregion VEH
            #region HELI
            HEL01.Visibility = System.Windows.Visibility.Hidden;
            laHEL01.Content = "NONE";
            HEL01ERR.Visibility = System.Windows.Visibility.Hidden;
            HEL01AA.Visibility = System.Windows.Visibility.Hidden;
            HEL01AAM.Visibility = System.Windows.Visibility.Hidden;
            HEL01ARM.Visibility = System.Windows.Visibility.Hidden;
            HEL01ATGM.Visibility = System.Windows.Visibility.Hidden;
            HEL01CAR.Visibility = System.Windows.Visibility.Hidden;
            HEL01CMD.Visibility = System.Windows.Visibility.Hidden;
            HEL01HEL.Visibility = System.Windows.Visibility.Hidden;
            HEL01INF.Visibility = System.Windows.Visibility.Hidden;
            HEL01LOG.Visibility = System.Windows.Visibility.Hidden;
            HEL01ENG.Visibility = System.Windows.Visibility.Hidden;
            HEL01AIR.Visibility = System.Windows.Visibility.Hidden;
            HEL01EW.Visibility = System.Windows.Visibility.Hidden;
            HEL01RKT.Visibility = System.Windows.Visibility.Hidden;
            HEL01MTR.Visibility = System.Windows.Visibility.Hidden;
            HEL01REC.Visibility = System.Windows.Visibility.Hidden;
            HEL01TUBE.Visibility = System.Windows.Visibility.Hidden;
            HEL01RAD.Visibility = System.Windows.Visibility.Hidden;

            HEL11.Visibility = System.Windows.Visibility.Hidden;
            laHEL11.Content = "NONE";
            HEL11ERR.Visibility = System.Windows.Visibility.Hidden;
            HEL11AA.Visibility = System.Windows.Visibility.Hidden;
            HEL11AAM.Visibility = System.Windows.Visibility.Hidden;
            HEL11ARM.Visibility = System.Windows.Visibility.Hidden;
            HEL11ATGM.Visibility = System.Windows.Visibility.Hidden;
            HEL11CAR.Visibility = System.Windows.Visibility.Hidden;
            HEL11CMD.Visibility = System.Windows.Visibility.Hidden;
            HEL11HEL.Visibility = System.Windows.Visibility.Hidden;
            HEL11INF.Visibility = System.Windows.Visibility.Hidden;
            HEL11LOG.Visibility = System.Windows.Visibility.Hidden;
            HEL11ENG.Visibility = System.Windows.Visibility.Hidden;
            HEL11AIR.Visibility = System.Windows.Visibility.Hidden;
            HEL11EW.Visibility = System.Windows.Visibility.Hidden;
            HEL11RKT.Visibility = System.Windows.Visibility.Hidden;
            HEL11MTR.Visibility = System.Windows.Visibility.Hidden;
            HEL11REC.Visibility = System.Windows.Visibility.Hidden;
            HEL11TUBE.Visibility = System.Windows.Visibility.Hidden;
            HEL11RAD.Visibility = System.Windows.Visibility.Hidden;

            HEL21.Visibility = System.Windows.Visibility.Hidden;
            laHEL21.Content = "NONE";
            HEL21ERR.Visibility = System.Windows.Visibility.Hidden;
            HEL21AA.Visibility = System.Windows.Visibility.Hidden;
            HEL21AAM.Visibility = System.Windows.Visibility.Hidden;
            HEL21ARM.Visibility = System.Windows.Visibility.Hidden;
            HEL21ATGM.Visibility = System.Windows.Visibility.Hidden;
            HEL21CAR.Visibility = System.Windows.Visibility.Hidden;
            HEL21CMD.Visibility = System.Windows.Visibility.Hidden;
            HEL21HEL.Visibility = System.Windows.Visibility.Hidden;
            HEL21INF.Visibility = System.Windows.Visibility.Hidden;
            HEL21LOG.Visibility = System.Windows.Visibility.Hidden;
            HEL21ENG.Visibility = System.Windows.Visibility.Hidden;
            HEL21AIR.Visibility = System.Windows.Visibility.Hidden;
            HEL21EW.Visibility = System.Windows.Visibility.Hidden;
            HEL21RKT.Visibility = System.Windows.Visibility.Hidden;
            HEL21MTR.Visibility = System.Windows.Visibility.Hidden;
            HEL21REC.Visibility = System.Windows.Visibility.Hidden;
            HEL21TUBE.Visibility = System.Windows.Visibility.Hidden;
            HEL21RAD.Visibility = System.Windows.Visibility.Hidden;

            HEL31.Visibility = System.Windows.Visibility.Hidden;
            laHEL31.Content = "NONE";
            HEL31ERR.Visibility = System.Windows.Visibility.Hidden;
            HEL31AA.Visibility = System.Windows.Visibility.Hidden;
            HEL31AAM.Visibility = System.Windows.Visibility.Hidden;
            HEL31ARM.Visibility = System.Windows.Visibility.Hidden;
            HEL31ATGM.Visibility = System.Windows.Visibility.Hidden;
            HEL31CAR.Visibility = System.Windows.Visibility.Hidden;
            HEL31CMD.Visibility = System.Windows.Visibility.Hidden;
            HEL31HEL.Visibility = System.Windows.Visibility.Hidden;
            HEL31INF.Visibility = System.Windows.Visibility.Hidden;
            HEL31LOG.Visibility = System.Windows.Visibility.Hidden;
            HEL31ENG.Visibility = System.Windows.Visibility.Hidden;
            HEL31AIR.Visibility = System.Windows.Visibility.Hidden;
            HEL31EW.Visibility = System.Windows.Visibility.Hidden;
            HEL31RKT.Visibility = System.Windows.Visibility.Hidden;
            HEL31MTR.Visibility = System.Windows.Visibility.Hidden;
            HEL31REC.Visibility = System.Windows.Visibility.Hidden;
            HEL31TUBE.Visibility = System.Windows.Visibility.Hidden;
            HEL31RAD.Visibility = System.Windows.Visibility.Hidden;

            HEL41.Visibility = System.Windows.Visibility.Hidden;
            laHEL41.Content = "NONE";
            HEL41ERR.Visibility = System.Windows.Visibility.Hidden;
            HEL41AA.Visibility = System.Windows.Visibility.Hidden;
            HEL41AAM.Visibility = System.Windows.Visibility.Hidden;
            HEL41ARM.Visibility = System.Windows.Visibility.Hidden;
            HEL41ATGM.Visibility = System.Windows.Visibility.Hidden;
            HEL41CAR.Visibility = System.Windows.Visibility.Hidden;
            HEL41CMD.Visibility = System.Windows.Visibility.Hidden;
            HEL41HEL.Visibility = System.Windows.Visibility.Hidden;
            HEL41INF.Visibility = System.Windows.Visibility.Hidden;
            HEL41LOG.Visibility = System.Windows.Visibility.Hidden;
            HEL41ENG.Visibility = System.Windows.Visibility.Hidden;
            HEL41AIR.Visibility = System.Windows.Visibility.Hidden;
            HEL41EW.Visibility = System.Windows.Visibility.Hidden;
            HEL41RKT.Visibility = System.Windows.Visibility.Hidden;
            HEL41MTR.Visibility = System.Windows.Visibility.Hidden;
            HEL41REC.Visibility = System.Windows.Visibility.Hidden;
            HEL41TUBE.Visibility = System.Windows.Visibility.Hidden;
            HEL41RAD.Visibility = System.Windows.Visibility.Hidden;

            HEL51.Visibility = System.Windows.Visibility.Hidden;
            laHEL51.Content = "NONE";
            HEL51ERR.Visibility = System.Windows.Visibility.Hidden;
            HEL51AA.Visibility = System.Windows.Visibility.Hidden;
            HEL51AAM.Visibility = System.Windows.Visibility.Hidden;
            HEL51ARM.Visibility = System.Windows.Visibility.Hidden;
            HEL51ATGM.Visibility = System.Windows.Visibility.Hidden;
            HEL51CAR.Visibility = System.Windows.Visibility.Hidden;
            HEL51CMD.Visibility = System.Windows.Visibility.Hidden;
            HEL51HEL.Visibility = System.Windows.Visibility.Hidden;
            HEL51INF.Visibility = System.Windows.Visibility.Hidden;
            HEL51LOG.Visibility = System.Windows.Visibility.Hidden;
            HEL51ENG.Visibility = System.Windows.Visibility.Hidden;
            HEL51AIR.Visibility = System.Windows.Visibility.Hidden;
            HEL51EW.Visibility = System.Windows.Visibility.Hidden;
            HEL51RKT.Visibility = System.Windows.Visibility.Hidden;
            HEL51MTR.Visibility = System.Windows.Visibility.Hidden;
            HEL51REC.Visibility = System.Windows.Visibility.Hidden;
            HEL51TUBE.Visibility = System.Windows.Visibility.Hidden;
            HEL51RAD.Visibility = System.Windows.Visibility.Hidden;

            HEL61.Visibility = System.Windows.Visibility.Hidden;
            laHEL61.Content = "NONE";
            HEL61ERR.Visibility = System.Windows.Visibility.Hidden;
            HEL61AA.Visibility = System.Windows.Visibility.Hidden;
            HEL61AAM.Visibility = System.Windows.Visibility.Hidden;
            HEL61ARM.Visibility = System.Windows.Visibility.Hidden;
            HEL61ATGM.Visibility = System.Windows.Visibility.Hidden;
            HEL61CAR.Visibility = System.Windows.Visibility.Hidden;
            HEL61CMD.Visibility = System.Windows.Visibility.Hidden;
            HEL61HEL.Visibility = System.Windows.Visibility.Hidden;
            HEL61INF.Visibility = System.Windows.Visibility.Hidden;
            HEL61LOG.Visibility = System.Windows.Visibility.Hidden;
            HEL61ENG.Visibility = System.Windows.Visibility.Hidden;
            HEL61AIR.Visibility = System.Windows.Visibility.Hidden;
            HEL61EW.Visibility = System.Windows.Visibility.Hidden;
            HEL61RKT.Visibility = System.Windows.Visibility.Hidden;
            HEL61MTR.Visibility = System.Windows.Visibility.Hidden;
            HEL61REC.Visibility = System.Windows.Visibility.Hidden;
            HEL61TUBE.Visibility = System.Windows.Visibility.Hidden;
            HEL61RAD.Visibility = System.Windows.Visibility.Hidden;

            HEL71.Visibility = System.Windows.Visibility.Hidden;
            laHEL71.Content = "NONE";
            HEL71ERR.Visibility = System.Windows.Visibility.Hidden;
            HEL71AA.Visibility = System.Windows.Visibility.Hidden;
            HEL71AAM.Visibility = System.Windows.Visibility.Hidden;
            HEL71ARM.Visibility = System.Windows.Visibility.Hidden;
            HEL71ATGM.Visibility = System.Windows.Visibility.Hidden;
            HEL71CAR.Visibility = System.Windows.Visibility.Hidden;
            HEL71CMD.Visibility = System.Windows.Visibility.Hidden;
            HEL71HEL.Visibility = System.Windows.Visibility.Hidden;
            HEL71INF.Visibility = System.Windows.Visibility.Hidden;
            HEL71LOG.Visibility = System.Windows.Visibility.Hidden;
            HEL71ENG.Visibility = System.Windows.Visibility.Hidden;
            HEL71AIR.Visibility = System.Windows.Visibility.Hidden;
            HEL71EW.Visibility = System.Windows.Visibility.Hidden;
            HEL71RKT.Visibility = System.Windows.Visibility.Hidden;
            HEL71MTR.Visibility = System.Windows.Visibility.Hidden;
            HEL71REC.Visibility = System.Windows.Visibility.Hidden;
            HEL71TUBE.Visibility = System.Windows.Visibility.Hidden;
            HEL71RAD.Visibility = System.Windows.Visibility.Hidden;

            HEL81.Visibility = System.Windows.Visibility.Hidden;
            laHEL81.Content = "NONE";
            HEL81ERR.Visibility = System.Windows.Visibility.Hidden;
            HEL81AA.Visibility = System.Windows.Visibility.Hidden;
            HEL81AAM.Visibility = System.Windows.Visibility.Hidden;
            HEL81ARM.Visibility = System.Windows.Visibility.Hidden;
            HEL81ATGM.Visibility = System.Windows.Visibility.Hidden;
            HEL81CAR.Visibility = System.Windows.Visibility.Hidden;
            HEL81CMD.Visibility = System.Windows.Visibility.Hidden;
            HEL81HEL.Visibility = System.Windows.Visibility.Hidden;
            HEL81INF.Visibility = System.Windows.Visibility.Hidden;
            HEL81LOG.Visibility = System.Windows.Visibility.Hidden;
            HEL81ENG.Visibility = System.Windows.Visibility.Hidden;
            HEL81AIR.Visibility = System.Windows.Visibility.Hidden;
            HEL81EW.Visibility = System.Windows.Visibility.Hidden;
            HEL81RKT.Visibility = System.Windows.Visibility.Hidden;
            HEL81MTR.Visibility = System.Windows.Visibility.Hidden;
            HEL81REC.Visibility = System.Windows.Visibility.Hidden;
            HEL81TUBE.Visibility = System.Windows.Visibility.Hidden;
            HEL81RAD.Visibility = System.Windows.Visibility.Hidden;

            HEL02.Visibility = System.Windows.Visibility.Hidden;
            laHEL02.Content = "NONE";
            HEL02ERR.Visibility = System.Windows.Visibility.Hidden;
            HEL02AA.Visibility = System.Windows.Visibility.Hidden;
            HEL02AAM.Visibility = System.Windows.Visibility.Hidden;
            HEL02ARM.Visibility = System.Windows.Visibility.Hidden;
            HEL02ATGM.Visibility = System.Windows.Visibility.Hidden;
            HEL02CAR.Visibility = System.Windows.Visibility.Hidden;
            HEL02CMD.Visibility = System.Windows.Visibility.Hidden;
            HEL02HEL.Visibility = System.Windows.Visibility.Hidden;
            HEL02INF.Visibility = System.Windows.Visibility.Hidden;
            HEL02LOG.Visibility = System.Windows.Visibility.Hidden;
            HEL02ENG.Visibility = System.Windows.Visibility.Hidden;
            HEL02AIR.Visibility = System.Windows.Visibility.Hidden;
            HEL02EW.Visibility = System.Windows.Visibility.Hidden;
            HEL02RKT.Visibility = System.Windows.Visibility.Hidden;
            HEL02MTR.Visibility = System.Windows.Visibility.Hidden;
            HEL02REC.Visibility = System.Windows.Visibility.Hidden;
            HEL02TUBE.Visibility = System.Windows.Visibility.Hidden;
            HEL02RAD.Visibility = System.Windows.Visibility.Hidden;

            HEL12.Visibility = System.Windows.Visibility.Hidden;
            laHEL12.Content = "NONE";
            HEL12ERR.Visibility = System.Windows.Visibility.Hidden;
            HEL12AA.Visibility = System.Windows.Visibility.Hidden;
            HEL12AAM.Visibility = System.Windows.Visibility.Hidden;
            HEL12ARM.Visibility = System.Windows.Visibility.Hidden;
            HEL12ATGM.Visibility = System.Windows.Visibility.Hidden;
            HEL12CAR.Visibility = System.Windows.Visibility.Hidden;
            HEL12CMD.Visibility = System.Windows.Visibility.Hidden;
            HEL12HEL.Visibility = System.Windows.Visibility.Hidden;
            HEL12INF.Visibility = System.Windows.Visibility.Hidden;
            HEL12LOG.Visibility = System.Windows.Visibility.Hidden;
            HEL12ENG.Visibility = System.Windows.Visibility.Hidden;
            HEL12AIR.Visibility = System.Windows.Visibility.Hidden;
            HEL12EW.Visibility = System.Windows.Visibility.Hidden;
            HEL12RKT.Visibility = System.Windows.Visibility.Hidden;
            HEL12MTR.Visibility = System.Windows.Visibility.Hidden;
            HEL12REC.Visibility = System.Windows.Visibility.Hidden;
            HEL12TUBE.Visibility = System.Windows.Visibility.Hidden;
            HEL12RAD.Visibility = System.Windows.Visibility.Hidden;

            HEL22.Visibility = System.Windows.Visibility.Hidden;
            laHEL22.Content = "NONE";
            HEL22ERR.Visibility = System.Windows.Visibility.Hidden;
            HEL22AA.Visibility = System.Windows.Visibility.Hidden;
            HEL22AAM.Visibility = System.Windows.Visibility.Hidden;
            HEL22ARM.Visibility = System.Windows.Visibility.Hidden;
            HEL22ATGM.Visibility = System.Windows.Visibility.Hidden;
            HEL22CAR.Visibility = System.Windows.Visibility.Hidden;
            HEL22CMD.Visibility = System.Windows.Visibility.Hidden;
            HEL22HEL.Visibility = System.Windows.Visibility.Hidden;
            HEL22INF.Visibility = System.Windows.Visibility.Hidden;
            HEL22LOG.Visibility = System.Windows.Visibility.Hidden;
            HEL22ENG.Visibility = System.Windows.Visibility.Hidden;
            HEL22AIR.Visibility = System.Windows.Visibility.Hidden;
            HEL22EW.Visibility = System.Windows.Visibility.Hidden;
            HEL22RKT.Visibility = System.Windows.Visibility.Hidden;
            HEL22MTR.Visibility = System.Windows.Visibility.Hidden;
            HEL22REC.Visibility = System.Windows.Visibility.Hidden;
            HEL22TUBE.Visibility = System.Windows.Visibility.Hidden;
            HEL22RAD.Visibility = System.Windows.Visibility.Hidden;

            HEL32.Visibility = System.Windows.Visibility.Hidden;
            laHEL32.Content = "NONE";
            HEL32ERR.Visibility = System.Windows.Visibility.Hidden;
            HEL32AA.Visibility = System.Windows.Visibility.Hidden;
            HEL32AAM.Visibility = System.Windows.Visibility.Hidden;
            HEL32ARM.Visibility = System.Windows.Visibility.Hidden;
            HEL32ATGM.Visibility = System.Windows.Visibility.Hidden;
            HEL32CAR.Visibility = System.Windows.Visibility.Hidden;
            HEL32CMD.Visibility = System.Windows.Visibility.Hidden;
            HEL32HEL.Visibility = System.Windows.Visibility.Hidden;
            HEL32INF.Visibility = System.Windows.Visibility.Hidden;
            HEL32LOG.Visibility = System.Windows.Visibility.Hidden;
            HEL32ENG.Visibility = System.Windows.Visibility.Hidden;
            HEL32AIR.Visibility = System.Windows.Visibility.Hidden;
            HEL32EW.Visibility = System.Windows.Visibility.Hidden;
            HEL32RKT.Visibility = System.Windows.Visibility.Hidden;
            HEL32MTR.Visibility = System.Windows.Visibility.Hidden;
            HEL32REC.Visibility = System.Windows.Visibility.Hidden;
            HEL32TUBE.Visibility = System.Windows.Visibility.Hidden;
            HEL32RAD.Visibility = System.Windows.Visibility.Hidden;

            HEL42.Visibility = System.Windows.Visibility.Hidden;
            laHEL42.Content = "NONE";
            HEL42ERR.Visibility = System.Windows.Visibility.Hidden;
            HEL42AA.Visibility = System.Windows.Visibility.Hidden;
            HEL42AAM.Visibility = System.Windows.Visibility.Hidden;
            HEL42ARM.Visibility = System.Windows.Visibility.Hidden;
            HEL42ATGM.Visibility = System.Windows.Visibility.Hidden;
            HEL42CAR.Visibility = System.Windows.Visibility.Hidden;
            HEL42CMD.Visibility = System.Windows.Visibility.Hidden;
            HEL42HEL.Visibility = System.Windows.Visibility.Hidden;
            HEL42INF.Visibility = System.Windows.Visibility.Hidden;
            HEL42LOG.Visibility = System.Windows.Visibility.Hidden;
            HEL42ENG.Visibility = System.Windows.Visibility.Hidden;
            HEL42AIR.Visibility = System.Windows.Visibility.Hidden;
            HEL42EW.Visibility = System.Windows.Visibility.Hidden;
            HEL42RKT.Visibility = System.Windows.Visibility.Hidden;
            HEL42MTR.Visibility = System.Windows.Visibility.Hidden;
            HEL42REC.Visibility = System.Windows.Visibility.Hidden;
            HEL42TUBE.Visibility = System.Windows.Visibility.Hidden;
            HEL42RAD.Visibility = System.Windows.Visibility.Hidden;

            HEL52.Visibility = System.Windows.Visibility.Hidden;
            laHEL52.Content = "NONE";
            HEL52ERR.Visibility = System.Windows.Visibility.Hidden;
            HEL52AA.Visibility = System.Windows.Visibility.Hidden;
            HEL52AAM.Visibility = System.Windows.Visibility.Hidden;
            HEL52ARM.Visibility = System.Windows.Visibility.Hidden;
            HEL52ATGM.Visibility = System.Windows.Visibility.Hidden;
            HEL52CAR.Visibility = System.Windows.Visibility.Hidden;
            HEL52CMD.Visibility = System.Windows.Visibility.Hidden;
            HEL52HEL.Visibility = System.Windows.Visibility.Hidden;
            HEL52INF.Visibility = System.Windows.Visibility.Hidden;
            HEL52LOG.Visibility = System.Windows.Visibility.Hidden;
            HEL52ENG.Visibility = System.Windows.Visibility.Hidden;
            HEL52AIR.Visibility = System.Windows.Visibility.Hidden;
            HEL52EW.Visibility = System.Windows.Visibility.Hidden;
            HEL52RKT.Visibility = System.Windows.Visibility.Hidden;
            HEL52MTR.Visibility = System.Windows.Visibility.Hidden;
            HEL52REC.Visibility = System.Windows.Visibility.Hidden;
            HEL52TUBE.Visibility = System.Windows.Visibility.Hidden;
            HEL52RAD.Visibility = System.Windows.Visibility.Hidden;

            HEL62.Visibility = System.Windows.Visibility.Hidden;
            laHEL62.Content = "NONE";
            HEL62ERR.Visibility = System.Windows.Visibility.Hidden;
            HEL62AA.Visibility = System.Windows.Visibility.Hidden;
            HEL62AAM.Visibility = System.Windows.Visibility.Hidden;
            HEL62ARM.Visibility = System.Windows.Visibility.Hidden;
            HEL62ATGM.Visibility = System.Windows.Visibility.Hidden;
            HEL62CAR.Visibility = System.Windows.Visibility.Hidden;
            HEL62CMD.Visibility = System.Windows.Visibility.Hidden;
            HEL62HEL.Visibility = System.Windows.Visibility.Hidden;
            HEL62INF.Visibility = System.Windows.Visibility.Hidden;
            HEL62LOG.Visibility = System.Windows.Visibility.Hidden;
            HEL62ENG.Visibility = System.Windows.Visibility.Hidden;
            HEL62AIR.Visibility = System.Windows.Visibility.Hidden;
            HEL62EW.Visibility = System.Windows.Visibility.Hidden;
            HEL62RKT.Visibility = System.Windows.Visibility.Hidden;
            HEL62MTR.Visibility = System.Windows.Visibility.Hidden;
            HEL62REC.Visibility = System.Windows.Visibility.Hidden;
            HEL62TUBE.Visibility = System.Windows.Visibility.Hidden;
            HEL62RAD.Visibility = System.Windows.Visibility.Hidden;

            HEL72.Visibility = System.Windows.Visibility.Hidden;
            laHEL72.Content = "NONE";
            HEL72ERR.Visibility = System.Windows.Visibility.Hidden;
            HEL72AA.Visibility = System.Windows.Visibility.Hidden;
            HEL72AAM.Visibility = System.Windows.Visibility.Hidden;
            HEL72ARM.Visibility = System.Windows.Visibility.Hidden;
            HEL72ATGM.Visibility = System.Windows.Visibility.Hidden;
            HEL72CAR.Visibility = System.Windows.Visibility.Hidden;
            HEL72CMD.Visibility = System.Windows.Visibility.Hidden;
            HEL72HEL.Visibility = System.Windows.Visibility.Hidden;
            HEL72INF.Visibility = System.Windows.Visibility.Hidden;
            HEL72LOG.Visibility = System.Windows.Visibility.Hidden;
            HEL72ENG.Visibility = System.Windows.Visibility.Hidden;
            HEL72AIR.Visibility = System.Windows.Visibility.Hidden;
            HEL72EW.Visibility = System.Windows.Visibility.Hidden;
            HEL72RKT.Visibility = System.Windows.Visibility.Hidden;
            HEL72MTR.Visibility = System.Windows.Visibility.Hidden;
            HEL72REC.Visibility = System.Windows.Visibility.Hidden;
            HEL72TUBE.Visibility = System.Windows.Visibility.Hidden;
            HEL72RAD.Visibility = System.Windows.Visibility.Hidden;

            HEL82.Visibility = System.Windows.Visibility.Hidden;
            laHEL82.Content = "NONE";
            HEL82ERR.Visibility = System.Windows.Visibility.Hidden;
            HEL82AA.Visibility = System.Windows.Visibility.Hidden;
            HEL82AAM.Visibility = System.Windows.Visibility.Hidden;
            HEL82ARM.Visibility = System.Windows.Visibility.Hidden;
            HEL82ATGM.Visibility = System.Windows.Visibility.Hidden;
            HEL82CAR.Visibility = System.Windows.Visibility.Hidden;
            HEL82CMD.Visibility = System.Windows.Visibility.Hidden;
            HEL82HEL.Visibility = System.Windows.Visibility.Hidden;
            HEL82INF.Visibility = System.Windows.Visibility.Hidden;
            HEL82LOG.Visibility = System.Windows.Visibility.Hidden;
            HEL82ENG.Visibility = System.Windows.Visibility.Hidden;
            HEL82AIR.Visibility = System.Windows.Visibility.Hidden;
            HEL82EW.Visibility = System.Windows.Visibility.Hidden;
            HEL82RKT.Visibility = System.Windows.Visibility.Hidden;
            HEL82MTR.Visibility = System.Windows.Visibility.Hidden;
            HEL82REC.Visibility = System.Windows.Visibility.Hidden;
            HEL82TUBE.Visibility = System.Windows.Visibility.Hidden;
            HEL82RAD.Visibility = System.Windows.Visibility.Hidden;
            #endregion HEL
            #region AIR
            AIR01.Visibility = System.Windows.Visibility.Hidden;
            laAIR01.Content = "NONE";
            AIR01ERR.Visibility = System.Windows.Visibility.Hidden;
            AIR01AA.Visibility = System.Windows.Visibility.Hidden;
            AIR01AAM.Visibility = System.Windows.Visibility.Hidden;
            AIR01ARM.Visibility = System.Windows.Visibility.Hidden;
            AIR01ATGM.Visibility = System.Windows.Visibility.Hidden;
            AIR01CAR.Visibility = System.Windows.Visibility.Hidden;
            AIR01CMD.Visibility = System.Windows.Visibility.Hidden;
            AIR01HEL.Visibility = System.Windows.Visibility.Hidden;
            AIR01INF.Visibility = System.Windows.Visibility.Hidden;
            AIR01LOG.Visibility = System.Windows.Visibility.Hidden;
            AIR01ENG.Visibility = System.Windows.Visibility.Hidden;
            AIR01AIR.Visibility = System.Windows.Visibility.Hidden;
            AIR01EW.Visibility = System.Windows.Visibility.Hidden;
            AIR01RKT.Visibility = System.Windows.Visibility.Hidden;
            AIR01MTR.Visibility = System.Windows.Visibility.Hidden;
            AIR01REC.Visibility = System.Windows.Visibility.Hidden;
            AIR01TUBE.Visibility = System.Windows.Visibility.Hidden;
            AIR01RAD.Visibility = System.Windows.Visibility.Hidden;

            AIR11.Visibility = System.Windows.Visibility.Hidden;
            laAIR11.Content = "NONE";
            AIR11ERR.Visibility = System.Windows.Visibility.Hidden;
            AIR11AA.Visibility = System.Windows.Visibility.Hidden;
            AIR11AAM.Visibility = System.Windows.Visibility.Hidden;
            AIR11ARM.Visibility = System.Windows.Visibility.Hidden;
            AIR11ATGM.Visibility = System.Windows.Visibility.Hidden;
            AIR11CAR.Visibility = System.Windows.Visibility.Hidden;
            AIR11CMD.Visibility = System.Windows.Visibility.Hidden;
            AIR11HEL.Visibility = System.Windows.Visibility.Hidden;
            AIR11INF.Visibility = System.Windows.Visibility.Hidden;
            AIR11LOG.Visibility = System.Windows.Visibility.Hidden;
            AIR11ENG.Visibility = System.Windows.Visibility.Hidden;
            AIR11AIR.Visibility = System.Windows.Visibility.Hidden;
            AIR11EW.Visibility = System.Windows.Visibility.Hidden;
            AIR11RKT.Visibility = System.Windows.Visibility.Hidden;
            AIR11MTR.Visibility = System.Windows.Visibility.Hidden;
            AIR11REC.Visibility = System.Windows.Visibility.Hidden;
            AIR11TUBE.Visibility = System.Windows.Visibility.Hidden;
            AIR11RAD.Visibility = System.Windows.Visibility.Hidden;

            AIR21.Visibility = System.Windows.Visibility.Hidden;
            laAIR21.Content = "NONE";
            AIR21ERR.Visibility = System.Windows.Visibility.Hidden;
            AIR21AA.Visibility = System.Windows.Visibility.Hidden;
            AIR21AAM.Visibility = System.Windows.Visibility.Hidden;
            AIR21ARM.Visibility = System.Windows.Visibility.Hidden;
            AIR21ATGM.Visibility = System.Windows.Visibility.Hidden;
            AIR21CAR.Visibility = System.Windows.Visibility.Hidden;
            AIR21CMD.Visibility = System.Windows.Visibility.Hidden;
            AIR21HEL.Visibility = System.Windows.Visibility.Hidden;
            AIR21INF.Visibility = System.Windows.Visibility.Hidden;
            AIR21LOG.Visibility = System.Windows.Visibility.Hidden;
            AIR21ENG.Visibility = System.Windows.Visibility.Hidden;
            AIR21AIR.Visibility = System.Windows.Visibility.Hidden;
            AIR21EW.Visibility = System.Windows.Visibility.Hidden;
            AIR21RKT.Visibility = System.Windows.Visibility.Hidden;
            AIR21MTR.Visibility = System.Windows.Visibility.Hidden;
            AIR21REC.Visibility = System.Windows.Visibility.Hidden;
            AIR21TUBE.Visibility = System.Windows.Visibility.Hidden;
            AIR21RAD.Visibility = System.Windows.Visibility.Hidden;

            AIR31.Visibility = System.Windows.Visibility.Hidden;
            laAIR31.Content = "NONE";
            AIR31ERR.Visibility = System.Windows.Visibility.Hidden;
            AIR31AA.Visibility = System.Windows.Visibility.Hidden;
            AIR31AAM.Visibility = System.Windows.Visibility.Hidden;
            AIR31ARM.Visibility = System.Windows.Visibility.Hidden;
            AIR31ATGM.Visibility = System.Windows.Visibility.Hidden;
            AIR31CAR.Visibility = System.Windows.Visibility.Hidden;
            AIR31CMD.Visibility = System.Windows.Visibility.Hidden;
            AIR31HEL.Visibility = System.Windows.Visibility.Hidden;
            AIR31INF.Visibility = System.Windows.Visibility.Hidden;
            AIR31LOG.Visibility = System.Windows.Visibility.Hidden;
            AIR31ENG.Visibility = System.Windows.Visibility.Hidden;
            AIR31AIR.Visibility = System.Windows.Visibility.Hidden;
            AIR31EW.Visibility = System.Windows.Visibility.Hidden;
            AIR31RKT.Visibility = System.Windows.Visibility.Hidden;
            AIR31MTR.Visibility = System.Windows.Visibility.Hidden;
            AIR31REC.Visibility = System.Windows.Visibility.Hidden;
            AIR31TUBE.Visibility = System.Windows.Visibility.Hidden;
            AIR31RAD.Visibility = System.Windows.Visibility.Hidden;

            AIR41.Visibility = System.Windows.Visibility.Hidden;
            laAIR41.Content = "NONE";
            AIR41ERR.Visibility = System.Windows.Visibility.Hidden;
            AIR41AA.Visibility = System.Windows.Visibility.Hidden;
            AIR41AAM.Visibility = System.Windows.Visibility.Hidden;
            AIR41ARM.Visibility = System.Windows.Visibility.Hidden;
            AIR41ATGM.Visibility = System.Windows.Visibility.Hidden;
            AIR41CAR.Visibility = System.Windows.Visibility.Hidden;
            AIR41CMD.Visibility = System.Windows.Visibility.Hidden;
            AIR41HEL.Visibility = System.Windows.Visibility.Hidden;
            AIR41INF.Visibility = System.Windows.Visibility.Hidden;
            AIR41LOG.Visibility = System.Windows.Visibility.Hidden;
            AIR41ENG.Visibility = System.Windows.Visibility.Hidden;
            AIR41AIR.Visibility = System.Windows.Visibility.Hidden;
            AIR41EW.Visibility = System.Windows.Visibility.Hidden;
            AIR41RKT.Visibility = System.Windows.Visibility.Hidden;
            AIR41MTR.Visibility = System.Windows.Visibility.Hidden;
            AIR41REC.Visibility = System.Windows.Visibility.Hidden;
            AIR41TUBE.Visibility = System.Windows.Visibility.Hidden;
            AIR41RAD.Visibility = System.Windows.Visibility.Hidden;

            AIR51.Visibility = System.Windows.Visibility.Hidden;
            laAIR51.Content = "NONE";
            AIR51ERR.Visibility = System.Windows.Visibility.Hidden;
            AIR51AA.Visibility = System.Windows.Visibility.Hidden;
            AIR51AAM.Visibility = System.Windows.Visibility.Hidden;
            AIR51ARM.Visibility = System.Windows.Visibility.Hidden;
            AIR51ATGM.Visibility = System.Windows.Visibility.Hidden;
            AIR51CAR.Visibility = System.Windows.Visibility.Hidden;
            AIR51CMD.Visibility = System.Windows.Visibility.Hidden;
            AIR51HEL.Visibility = System.Windows.Visibility.Hidden;
            AIR51INF.Visibility = System.Windows.Visibility.Hidden;
            AIR51LOG.Visibility = System.Windows.Visibility.Hidden;
            AIR51ENG.Visibility = System.Windows.Visibility.Hidden;
            AIR51AIR.Visibility = System.Windows.Visibility.Hidden;
            AIR51EW.Visibility = System.Windows.Visibility.Hidden;
            AIR51RKT.Visibility = System.Windows.Visibility.Hidden;
            AIR51MTR.Visibility = System.Windows.Visibility.Hidden;
            AIR51REC.Visibility = System.Windows.Visibility.Hidden;
            AIR51TUBE.Visibility = System.Windows.Visibility.Hidden;
            AIR51RAD.Visibility = System.Windows.Visibility.Hidden;

            AIR61.Visibility = System.Windows.Visibility.Hidden;
            laAIR61.Content = "NONE";
            AIR61ERR.Visibility = System.Windows.Visibility.Hidden;
            AIR61AA.Visibility = System.Windows.Visibility.Hidden;
            AIR61AAM.Visibility = System.Windows.Visibility.Hidden;
            AIR61ARM.Visibility = System.Windows.Visibility.Hidden;
            AIR61ATGM.Visibility = System.Windows.Visibility.Hidden;
            AIR61CAR.Visibility = System.Windows.Visibility.Hidden;
            AIR61CMD.Visibility = System.Windows.Visibility.Hidden;
            AIR61HEL.Visibility = System.Windows.Visibility.Hidden;
            AIR61INF.Visibility = System.Windows.Visibility.Hidden;
            AIR61LOG.Visibility = System.Windows.Visibility.Hidden;
            AIR61ENG.Visibility = System.Windows.Visibility.Hidden;
            AIR61AIR.Visibility = System.Windows.Visibility.Hidden;
            AIR61EW.Visibility = System.Windows.Visibility.Hidden;
            AIR61RKT.Visibility = System.Windows.Visibility.Hidden;
            AIR61MTR.Visibility = System.Windows.Visibility.Hidden;
            AIR61REC.Visibility = System.Windows.Visibility.Hidden;
            AIR61TUBE.Visibility = System.Windows.Visibility.Hidden;
            AIR61RAD.Visibility = System.Windows.Visibility.Hidden;

            AIR71.Visibility = System.Windows.Visibility.Hidden;
            laAIR71.Content = "NONE";
            AIR71ERR.Visibility = System.Windows.Visibility.Hidden;
            AIR71AA.Visibility = System.Windows.Visibility.Hidden;
            AIR71AAM.Visibility = System.Windows.Visibility.Hidden;
            AIR71ARM.Visibility = System.Windows.Visibility.Hidden;
            AIR71ATGM.Visibility = System.Windows.Visibility.Hidden;
            AIR71CAR.Visibility = System.Windows.Visibility.Hidden;
            AIR71CMD.Visibility = System.Windows.Visibility.Hidden;
            AIR71HEL.Visibility = System.Windows.Visibility.Hidden;
            AIR71INF.Visibility = System.Windows.Visibility.Hidden;
            AIR71LOG.Visibility = System.Windows.Visibility.Hidden;
            AIR71ENG.Visibility = System.Windows.Visibility.Hidden;
            AIR71AIR.Visibility = System.Windows.Visibility.Hidden;
            AIR71EW.Visibility = System.Windows.Visibility.Hidden;
            AIR71RKT.Visibility = System.Windows.Visibility.Hidden;
            AIR71MTR.Visibility = System.Windows.Visibility.Hidden;
            AIR71REC.Visibility = System.Windows.Visibility.Hidden;
            AIR71TUBE.Visibility = System.Windows.Visibility.Hidden;
            AIR71RAD.Visibility = System.Windows.Visibility.Hidden;

            AIR81.Visibility = System.Windows.Visibility.Hidden;
            laAIR81.Content = "NONE";
            AIR81ERR.Visibility = System.Windows.Visibility.Hidden;
            AIR81AA.Visibility = System.Windows.Visibility.Hidden;
            AIR81AAM.Visibility = System.Windows.Visibility.Hidden;
            AIR81ARM.Visibility = System.Windows.Visibility.Hidden;
            AIR81ATGM.Visibility = System.Windows.Visibility.Hidden;
            AIR81CAR.Visibility = System.Windows.Visibility.Hidden;
            AIR81CMD.Visibility = System.Windows.Visibility.Hidden;
            AIR81HEL.Visibility = System.Windows.Visibility.Hidden;
            AIR81INF.Visibility = System.Windows.Visibility.Hidden;
            AIR81LOG.Visibility = System.Windows.Visibility.Hidden;
            AIR81ENG.Visibility = System.Windows.Visibility.Hidden;
            AIR81AIR.Visibility = System.Windows.Visibility.Hidden;
            AIR81EW.Visibility = System.Windows.Visibility.Hidden;
            AIR81RKT.Visibility = System.Windows.Visibility.Hidden;
            AIR81MTR.Visibility = System.Windows.Visibility.Hidden;
            AIR81REC.Visibility = System.Windows.Visibility.Hidden;
            AIR81TUBE.Visibility = System.Windows.Visibility.Hidden;
            AIR81RAD.Visibility = System.Windows.Visibility.Hidden;

            AIR02.Visibility = System.Windows.Visibility.Hidden;
            laAIR02.Content = "NONE";
            AIR02ERR.Visibility = System.Windows.Visibility.Hidden;
            AIR02AA.Visibility = System.Windows.Visibility.Hidden;
            AIR02AAM.Visibility = System.Windows.Visibility.Hidden;
            AIR02ARM.Visibility = System.Windows.Visibility.Hidden;
            AIR02ATGM.Visibility = System.Windows.Visibility.Hidden;
            AIR02CAR.Visibility = System.Windows.Visibility.Hidden;
            AIR02CMD.Visibility = System.Windows.Visibility.Hidden;
            AIR02HEL.Visibility = System.Windows.Visibility.Hidden;
            AIR02INF.Visibility = System.Windows.Visibility.Hidden;
            AIR02LOG.Visibility = System.Windows.Visibility.Hidden;
            AIR02ENG.Visibility = System.Windows.Visibility.Hidden;
            AIR02AIR.Visibility = System.Windows.Visibility.Hidden;
            AIR02EW.Visibility = System.Windows.Visibility.Hidden;
            AIR02RKT.Visibility = System.Windows.Visibility.Hidden;
            AIR02MTR.Visibility = System.Windows.Visibility.Hidden;
            AIR02REC.Visibility = System.Windows.Visibility.Hidden;
            AIR02TUBE.Visibility = System.Windows.Visibility.Hidden;
            AIR02RAD.Visibility = System.Windows.Visibility.Hidden;

            AIR12.Visibility = System.Windows.Visibility.Hidden;
            laAIR12.Content = "NONE";
            AIR12ERR.Visibility = System.Windows.Visibility.Hidden;
            AIR12AA.Visibility = System.Windows.Visibility.Hidden;
            AIR12AAM.Visibility = System.Windows.Visibility.Hidden;
            AIR12ARM.Visibility = System.Windows.Visibility.Hidden;
            AIR12ATGM.Visibility = System.Windows.Visibility.Hidden;
            AIR12CAR.Visibility = System.Windows.Visibility.Hidden;
            AIR12CMD.Visibility = System.Windows.Visibility.Hidden;
            AIR12HEL.Visibility = System.Windows.Visibility.Hidden;
            AIR12INF.Visibility = System.Windows.Visibility.Hidden;
            AIR12LOG.Visibility = System.Windows.Visibility.Hidden;
            AIR12ENG.Visibility = System.Windows.Visibility.Hidden;
            AIR12AIR.Visibility = System.Windows.Visibility.Hidden;
            AIR12EW.Visibility = System.Windows.Visibility.Hidden;
            AIR12RKT.Visibility = System.Windows.Visibility.Hidden;
            AIR12MTR.Visibility = System.Windows.Visibility.Hidden;
            AIR12REC.Visibility = System.Windows.Visibility.Hidden;
            AIR12TUBE.Visibility = System.Windows.Visibility.Hidden;
            AIR12RAD.Visibility = System.Windows.Visibility.Hidden;

            AIR22.Visibility = System.Windows.Visibility.Hidden;
            laAIR22.Content = "NONE";
            AIR22ERR.Visibility = System.Windows.Visibility.Hidden;
            AIR22AA.Visibility = System.Windows.Visibility.Hidden;
            AIR22AAM.Visibility = System.Windows.Visibility.Hidden;
            AIR22ARM.Visibility = System.Windows.Visibility.Hidden;
            AIR22ATGM.Visibility = System.Windows.Visibility.Hidden;
            AIR22CAR.Visibility = System.Windows.Visibility.Hidden;
            AIR22CMD.Visibility = System.Windows.Visibility.Hidden;
            AIR22HEL.Visibility = System.Windows.Visibility.Hidden;
            AIR22INF.Visibility = System.Windows.Visibility.Hidden;
            AIR22LOG.Visibility = System.Windows.Visibility.Hidden;
            AIR22ENG.Visibility = System.Windows.Visibility.Hidden;
            AIR22AIR.Visibility = System.Windows.Visibility.Hidden;
            AIR22EW.Visibility = System.Windows.Visibility.Hidden;
            AIR22RKT.Visibility = System.Windows.Visibility.Hidden;
            AIR22MTR.Visibility = System.Windows.Visibility.Hidden;
            AIR22REC.Visibility = System.Windows.Visibility.Hidden;
            AIR22TUBE.Visibility = System.Windows.Visibility.Hidden;
            AIR22RAD.Visibility = System.Windows.Visibility.Hidden;

            AIR32.Visibility = System.Windows.Visibility.Hidden;
            laAIR32.Content = "NONE";
            AIR32ERR.Visibility = System.Windows.Visibility.Hidden;
            AIR32AA.Visibility = System.Windows.Visibility.Hidden;
            AIR32AAM.Visibility = System.Windows.Visibility.Hidden;
            AIR32ARM.Visibility = System.Windows.Visibility.Hidden;
            AIR32ATGM.Visibility = System.Windows.Visibility.Hidden;
            AIR32CAR.Visibility = System.Windows.Visibility.Hidden;
            AIR32CMD.Visibility = System.Windows.Visibility.Hidden;
            AIR32HEL.Visibility = System.Windows.Visibility.Hidden;
            AIR32INF.Visibility = System.Windows.Visibility.Hidden;
            AIR32LOG.Visibility = System.Windows.Visibility.Hidden;
            AIR32ENG.Visibility = System.Windows.Visibility.Hidden;
            AIR32AIR.Visibility = System.Windows.Visibility.Hidden;
            AIR32EW.Visibility = System.Windows.Visibility.Hidden;
            AIR32RKT.Visibility = System.Windows.Visibility.Hidden;
            AIR32MTR.Visibility = System.Windows.Visibility.Hidden;
            AIR32REC.Visibility = System.Windows.Visibility.Hidden;
            AIR32TUBE.Visibility = System.Windows.Visibility.Hidden;
            AIR32RAD.Visibility = System.Windows.Visibility.Hidden;

            AIR42.Visibility = System.Windows.Visibility.Hidden;
            laAIR42.Content = "NONE";
            AIR42ERR.Visibility = System.Windows.Visibility.Hidden;
            AIR42AA.Visibility = System.Windows.Visibility.Hidden;
            AIR42AAM.Visibility = System.Windows.Visibility.Hidden;
            AIR42ARM.Visibility = System.Windows.Visibility.Hidden;
            AIR42ATGM.Visibility = System.Windows.Visibility.Hidden;
            AIR42CAR.Visibility = System.Windows.Visibility.Hidden;
            AIR42CMD.Visibility = System.Windows.Visibility.Hidden;
            AIR42HEL.Visibility = System.Windows.Visibility.Hidden;
            AIR42INF.Visibility = System.Windows.Visibility.Hidden;
            AIR42LOG.Visibility = System.Windows.Visibility.Hidden;
            AIR42ENG.Visibility = System.Windows.Visibility.Hidden;
            AIR42AIR.Visibility = System.Windows.Visibility.Hidden;
            AIR42EW.Visibility = System.Windows.Visibility.Hidden;
            AIR42RKT.Visibility = System.Windows.Visibility.Hidden;
            AIR42MTR.Visibility = System.Windows.Visibility.Hidden;
            AIR42REC.Visibility = System.Windows.Visibility.Hidden;
            AIR42TUBE.Visibility = System.Windows.Visibility.Hidden;
            AIR42RAD.Visibility = System.Windows.Visibility.Hidden;

            AIR52.Visibility = System.Windows.Visibility.Hidden;
            laAIR52.Content = "NONE";
            AIR52ERR.Visibility = System.Windows.Visibility.Hidden;
            AIR52AA.Visibility = System.Windows.Visibility.Hidden;
            AIR52AAM.Visibility = System.Windows.Visibility.Hidden;
            AIR52ARM.Visibility = System.Windows.Visibility.Hidden;
            AIR52ATGM.Visibility = System.Windows.Visibility.Hidden;
            AIR52CAR.Visibility = System.Windows.Visibility.Hidden;
            AIR52CMD.Visibility = System.Windows.Visibility.Hidden;
            AIR52HEL.Visibility = System.Windows.Visibility.Hidden;
            AIR52INF.Visibility = System.Windows.Visibility.Hidden;
            AIR52LOG.Visibility = System.Windows.Visibility.Hidden;
            AIR52ENG.Visibility = System.Windows.Visibility.Hidden;
            AIR52AIR.Visibility = System.Windows.Visibility.Hidden;
            AIR52EW.Visibility = System.Windows.Visibility.Hidden;
            AIR52RKT.Visibility = System.Windows.Visibility.Hidden;
            AIR52MTR.Visibility = System.Windows.Visibility.Hidden;
            AIR52REC.Visibility = System.Windows.Visibility.Hidden;
            AIR52TUBE.Visibility = System.Windows.Visibility.Hidden;
            AIR52RAD.Visibility = System.Windows.Visibility.Hidden;

            AIR62.Visibility = System.Windows.Visibility.Hidden;
            laAIR62.Content = "NONE";
            AIR62ERR.Visibility = System.Windows.Visibility.Hidden;
            AIR62AA.Visibility = System.Windows.Visibility.Hidden;
            AIR62AAM.Visibility = System.Windows.Visibility.Hidden;
            AIR62ARM.Visibility = System.Windows.Visibility.Hidden;
            AIR62ATGM.Visibility = System.Windows.Visibility.Hidden;
            AIR62CAR.Visibility = System.Windows.Visibility.Hidden;
            AIR62CMD.Visibility = System.Windows.Visibility.Hidden;
            AIR62HEL.Visibility = System.Windows.Visibility.Hidden;
            AIR62INF.Visibility = System.Windows.Visibility.Hidden;
            AIR62LOG.Visibility = System.Windows.Visibility.Hidden;
            AIR62ENG.Visibility = System.Windows.Visibility.Hidden;
            AIR62AIR.Visibility = System.Windows.Visibility.Hidden;
            AIR62EW.Visibility = System.Windows.Visibility.Hidden;
            AIR62RKT.Visibility = System.Windows.Visibility.Hidden;
            AIR62MTR.Visibility = System.Windows.Visibility.Hidden;
            AIR62REC.Visibility = System.Windows.Visibility.Hidden;
            AIR62TUBE.Visibility = System.Windows.Visibility.Hidden;
            AIR62RAD.Visibility = System.Windows.Visibility.Hidden;

            AIR72.Visibility = System.Windows.Visibility.Hidden;
            laAIR72.Content = "NONE";
            AIR72ERR.Visibility = System.Windows.Visibility.Hidden;
            AIR72AA.Visibility = System.Windows.Visibility.Hidden;
            AIR72AAM.Visibility = System.Windows.Visibility.Hidden;
            AIR72ARM.Visibility = System.Windows.Visibility.Hidden;
            AIR72ATGM.Visibility = System.Windows.Visibility.Hidden;
            AIR72CAR.Visibility = System.Windows.Visibility.Hidden;
            AIR72CMD.Visibility = System.Windows.Visibility.Hidden;
            AIR72HEL.Visibility = System.Windows.Visibility.Hidden;
            AIR72INF.Visibility = System.Windows.Visibility.Hidden;
            AIR72LOG.Visibility = System.Windows.Visibility.Hidden;
            AIR72ENG.Visibility = System.Windows.Visibility.Hidden;
            AIR72AIR.Visibility = System.Windows.Visibility.Hidden;
            AIR72EW.Visibility = System.Windows.Visibility.Hidden;
            AIR72RKT.Visibility = System.Windows.Visibility.Hidden;
            AIR72MTR.Visibility = System.Windows.Visibility.Hidden;
            AIR72REC.Visibility = System.Windows.Visibility.Hidden;
            AIR72TUBE.Visibility = System.Windows.Visibility.Hidden;
            AIR72RAD.Visibility = System.Windows.Visibility.Hidden;

            AIR82.Visibility = System.Windows.Visibility.Hidden;
            laAIR82.Content = "NONE";
            AIR82ERR.Visibility = System.Windows.Visibility.Hidden;
            AIR82AA.Visibility = System.Windows.Visibility.Hidden;
            AIR82AAM.Visibility = System.Windows.Visibility.Hidden;
            AIR82ARM.Visibility = System.Windows.Visibility.Hidden;
            AIR82ATGM.Visibility = System.Windows.Visibility.Hidden;
            AIR82CAR.Visibility = System.Windows.Visibility.Hidden;
            AIR82CMD.Visibility = System.Windows.Visibility.Hidden;
            AIR82HEL.Visibility = System.Windows.Visibility.Hidden;
            AIR82INF.Visibility = System.Windows.Visibility.Hidden;
            AIR82LOG.Visibility = System.Windows.Visibility.Hidden;
            AIR82ENG.Visibility = System.Windows.Visibility.Hidden;
            AIR82AIR.Visibility = System.Windows.Visibility.Hidden;
            AIR82EW.Visibility = System.Windows.Visibility.Hidden;
            AIR82RKT.Visibility = System.Windows.Visibility.Hidden;
            AIR82MTR.Visibility = System.Windows.Visibility.Hidden;
            AIR82REC.Visibility = System.Windows.Visibility.Hidden;
            AIR82TUBE.Visibility = System.Windows.Visibility.Hidden;
            AIR82RAD.Visibility = System.Windows.Visibility.Hidden;
            #endregion AIR
            #region VEH
            LOG01.Visibility = System.Windows.Visibility.Hidden;
            laLOGc01.Content = "NONE";
            laLOGc01.Visibility = Visibility.Hidden;
            LOG11.Visibility = System.Windows.Visibility.Hidden;
            laLOGc11.Content = "NONE";
            laLOGc11.Visibility = Visibility.Hidden;
            LOG11.Visibility = System.Windows.Visibility.Hidden;
            laLOGc21.Content = "NONE";
            laLOGc21.Visibility = Visibility.Hidden;
            LOG31.Visibility = System.Windows.Visibility.Hidden;
            laLOGc31.Content = "NONE";
            laLOGc31.Visibility = Visibility.Hidden;
            LOG41.Visibility = System.Windows.Visibility.Hidden;
            laLOGc41.Content = "NONE";
            laLOGc41.Visibility = Visibility.Hidden;
            LOG41.Visibility = System.Windows.Visibility.Hidden;
            laLOGc41.Content = "NONE";
            laLOGc41.Visibility = Visibility.Hidden;
            LOG61.Visibility = System.Windows.Visibility.Hidden;
            laLOGc61.Content = "NONE";
            laLOGc61.Visibility = Visibility.Hidden;
            LOG71.Visibility = System.Windows.Visibility.Hidden;
            laLOGc71.Content = "NONE";
            laLOGc71.Visibility = Visibility.Hidden;
            LOG81.Visibility = System.Windows.Visibility.Hidden;
            laLOGc81.Content = "NONE";
            laLOGc81.Visibility = Visibility.Hidden;
            INF01.Visibility = System.Windows.Visibility.Hidden;
            laINFc01.Content = "NONE";
            laINFc01.Visibility = Visibility.Hidden;
            INF11.Visibility = System.Windows.Visibility.Hidden;
            laINFc11.Content = "NONE";
            laINFc11.Visibility = Visibility.Hidden;
            INF21.Visibility = System.Windows.Visibility.Hidden;
            laINFc11.Content = "NONE";
            laINFc11.Visibility = Visibility.Hidden;
            INF31.Visibility = System.Windows.Visibility.Hidden;
            laINFc31.Content = "NONE";
            laINFc31.Visibility = Visibility.Hidden;
            INF41.Visibility = System.Windows.Visibility.Hidden;
            laINFc41.Content = "NONE";
            laINFc41.Visibility = Visibility.Hidden;
            INF41.Visibility = System.Windows.Visibility.Hidden;
            laINFc41.Content = "NONE";
            laINFc41.Visibility = Visibility.Hidden;
            INF61.Visibility = System.Windows.Visibility.Hidden;
            laINFc61.Content = "NONE";
            laINFc61.Visibility = Visibility.Hidden;
            INF71.Visibility = System.Windows.Visibility.Hidden;
            laINFc71.Content = "NONE";
            laINFc71.Visibility = Visibility.Hidden;
            INF81.Visibility = System.Windows.Visibility.Hidden;
            laINFc81.Content = "NONE";
            laINFc81.Visibility = Visibility.Hidden;
            REC01.Visibility = System.Windows.Visibility.Hidden;
            laRECc01.Visibility = Visibility.Hidden;
            laRECc01.Content = "NONE";
            REC11.Visibility = System.Windows.Visibility.Hidden;
            laRECc11.Visibility = Visibility.Hidden;
            laRECc11.Content = "NONE";
            REC21.Visibility = System.Windows.Visibility.Hidden;
            laRECc21.Visibility = Visibility.Hidden;
            laRECc21.Content = "NONE";
            REC31.Visibility = System.Windows.Visibility.Hidden;
            laRECc31.Visibility = Visibility.Hidden;
            laRECc31.Content = "NONE";
            REC41.Visibility = System.Windows.Visibility.Hidden;
            laRECc41.Visibility = Visibility.Hidden;
            laRECc41.Content = "NONE";
            REC41.Visibility = System.Windows.Visibility.Hidden;
            laRECc41.Visibility = Visibility.Hidden;
            laRECc41.Content = "NONE";
            REC61.Visibility = System.Windows.Visibility.Hidden;
            laRECc61.Visibility = Visibility.Hidden;
            laRECc61.Content = "NONE";
            REC71.Visibility = System.Windows.Visibility.Hidden;
            laRECc71.Visibility = Visibility.Hidden;
            laRECc71.Content = "NONE";
            REC81.Visibility = System.Windows.Visibility.Hidden;
            laRECc81.Visibility = Visibility.Hidden;
            laRECc81.Content = "NONE";
            #endregion VEHILCES
            #region FLAGS
            var uri = new Uri("flags/blank.png", UriKind.Relative);
            var bitmap = new BitmapImage(uri);
            LOGFL01.Source = bitmap;
            LOGFL11.Source = bitmap;
            LOGFL21.Source = bitmap;
            LOGFL31.Source = bitmap;
            LOGFL41.Source = bitmap;
            LOGFL51.Source = bitmap;
            LOGFL61.Source = bitmap;
            LOGFL71.Source = bitmap;
            LOGFL81.Source = bitmap;
            INFFL01.Source = bitmap;
            INFFL11.Source = bitmap;
            INFFL21.Source = bitmap;
            INFFL31.Source = bitmap;
            INFFL41.Source = bitmap;
            INFFL51.Source = bitmap;
            INFFL61.Source = bitmap;
            INFFL71.Source = bitmap;
            INFFL81.Source = bitmap;
            SUPFL01.Source = bitmap;
            SUPFL11.Source = bitmap;
            SUPFL21.Source = bitmap;
            SUPFL31.Source = bitmap;
            SUPFL41.Source = bitmap;
            SUPFL51.Source = bitmap;
            SUPFL61.Source = bitmap;
            SUPFL71.Source = bitmap;
            SUPFL81.Source = bitmap;
            TNKFL01.Source = bitmap;
            TNKFL11.Source = bitmap;
            TNKFL21.Source = bitmap;
            TNKFL31.Source = bitmap;
            TNKFL41.Source = bitmap;
            TNKFL51.Source = bitmap;
            TNKFL61.Source = bitmap;
            TNKFL71.Source = bitmap;
            TNKFL81.Source = bitmap;
            RECFL01.Source = bitmap;
            RECFL11.Source = bitmap;
            RECFL21.Source = bitmap;
            RECFL31.Source = bitmap;
            RECFL41.Source = bitmap;
            RECFL51.Source = bitmap;
            RECFL61.Source = bitmap;
            RECFL71.Source = bitmap;
            RECFL81.Source = bitmap;
            VEHFL01.Source = bitmap;
            VEHFL11.Source = bitmap;
            VEHFL21.Source = bitmap;
            VEHFL31.Source = bitmap;
            VEHFL41.Source = bitmap;
            VEHFL51.Source = bitmap;
            VEHFL61.Source = bitmap;
            VEHFL71.Source = bitmap;
            VEHFL81.Source = bitmap;
            HELFL01.Source = bitmap;
            HELFL11.Source = bitmap;
            HELFL21.Source = bitmap;
            HELFL31.Source = bitmap;
            HELFL41.Source = bitmap;
            HELFL51.Source = bitmap;
            HELFL61.Source = bitmap;
            HELFL71.Source = bitmap;
            HELFL81.Source = bitmap;
            AIRFL01.Source = bitmap;
            AIRFL11.Source = bitmap;
            AIRFL21.Source = bitmap;
            AIRFL31.Source = bitmap;
            AIRFL41.Source = bitmap;
            AIRFL51.Source = bitmap;
            AIRFL61.Source = bitmap;
            AIRFL71.Source = bitmap;
            AIRFL81.Source = bitmap;
            LOGFL02.Source = bitmap;
            LOGFL12.Source = bitmap;
            LOGFL22.Source = bitmap;
            LOGFL32.Source = bitmap;
            LOGFL42.Source = bitmap;
            LOGFL52.Source = bitmap;
            LOGFL62.Source = bitmap;
            LOGFL72.Source = bitmap;
            LOGFL82.Source = bitmap;
            INFFL02.Source = bitmap;
            INFFL12.Source = bitmap;
            INFFL22.Source = bitmap;
            INFFL32.Source = bitmap;
            INFFL42.Source = bitmap;
            INFFL52.Source = bitmap;
            INFFL62.Source = bitmap;
            INFFL72.Source = bitmap;
            INFFL82.Source = bitmap;
            SUPFL02.Source = bitmap;
            SUPFL12.Source = bitmap;
            SUPFL22.Source = bitmap;
            SUPFL32.Source = bitmap;
            SUPFL42.Source = bitmap;
            SUPFL52.Source = bitmap;
            SUPFL62.Source = bitmap;
            SUPFL72.Source = bitmap;
            SUPFL82.Source = bitmap;
            TNKFL02.Source = bitmap;
            TNKFL12.Source = bitmap;
            TNKFL22.Source = bitmap;
            TNKFL32.Source = bitmap;
            TNKFL42.Source = bitmap;
            TNKFL52.Source = bitmap;
            TNKFL62.Source = bitmap;
            TNKFL72.Source = bitmap;
            TNKFL82.Source = bitmap;
            RECFL02.Source = bitmap;
            RECFL12.Source = bitmap;
            RECFL22.Source = bitmap;
            RECFL32.Source = bitmap;
            RECFL42.Source = bitmap;
            RECFL52.Source = bitmap;
            RECFL62.Source = bitmap;
            RECFL72.Source = bitmap;
            RECFL82.Source = bitmap;
            VEHFL02.Source = bitmap;
            VEHFL12.Source = bitmap;
            VEHFL22.Source = bitmap;
            VEHFL32.Source = bitmap;
            VEHFL42.Source = bitmap;
            VEHFL52.Source = bitmap;
            VEHFL62.Source = bitmap;
            VEHFL72.Source = bitmap;
            VEHFL82.Source = bitmap;
            HELFL02.Source = bitmap;
            HELFL12.Source = bitmap;
            HELFL22.Source = bitmap;
            HELFL32.Source = bitmap;
            HELFL42.Source = bitmap;
            HELFL52.Source = bitmap;
            HELFL62.Source = bitmap;
            HELFL72.Source = bitmap;
            HELFL82.Source = bitmap;
            AIRFL02.Source = bitmap;
            AIRFL12.Source = bitmap;
            AIRFL22.Source = bitmap;
            AIRFL32.Source = bitmap;
            AIRFL42.Source = bitmap;
            AIRFL52.Source = bitmap;
            AIRFL62.Source = bitmap;
            AIRFL72.Source = bitmap;
            AIRFL82.Source = bitmap;
            #endregion flags

            #region AUX
            laLOGc01.Content = "";
            laLOGc21.Content = "";
            laLOGc31.Content = "";
            laLOGc41.Content = "";
            laLOGc51.Content = "";
            laLOGc61.Content = "";
            laLOGc71.Content = "";
            laLOGc81.Content = "";
            laLOGc02.Content = "";
            LOGco02.Content = "";
            laLOGc12.Content = "";
            LOGco12.Content = "";
            laLOGc22.Content = "";
            LOGco22.Content = "";
            laLOGc32.Content = "";
            LOGco32.Content = "";
            laLOGc42.Content = "";
            LOGco42.Content = "";
            laLOGc52.Content = "";
            LOGco52.Content = "";
            laLOGc62.Content = "";
            LOGco62.Content = "";
            laLOGc72.Content = "";
            LOGco72.Content = "";
            laLOGc82.Content = "";
            LOGco82.Content = "";

            laINFc01.Content = "";
            laINFc21.Content = "";
            laINFc31.Content = "";
            laINFc41.Content = "";
            laINFc51.Content = "";
            laINFc61.Content = "";
            laINFc71.Content = "";
            laINFc81.Content = "";
            laINFc02.Content = "";
            INFco02.Content = "";
            laINFc12.Content = "";
            INFco12.Content = "";
            laINFc22.Content = "";
            INFco22.Content = "";
            laINFc32.Content = "";
            INFco32.Content = "";
            laINFc42.Content = "";
            INFco42.Content = "";
            laINFc52.Content = "";
            INFco52.Content = "";
            laINFc62.Content = "";
            INFco62.Content = "";
            laINFc72.Content = "";
            INFco72.Content = "";
            laINFc82.Content = "";
            INFco82.Content = "";

            laSUPc02.Content = "";
            SUPco02.Content = "";
            laSUPc12.Content = "";
            SUPco12.Content = "";
            laSUPc22.Content = "";
            SUPco22.Content = "";
            laSUPc32.Content = "";
            SUPco32.Content = "";
            laSUPc42.Content = "";
            SUPco42.Content = "";
            laSUPc52.Content = "";
            SUPco52.Content = "";
            laSUPc62.Content = "";
            SUPco62.Content = "";
            laSUPc72.Content = "";
            SUPco72.Content = "";
            laSUPc82.Content = "";
            SUPco82.Content = "";

            laTNKc02.Content = "";
            TNKco02.Content = "";
            laTNKc12.Content = "";
            TNKco12.Content = "";
            laTNKc22.Content = "";
            TNKco22.Content = "";
            laTNKc32.Content = "";
            TNKco32.Content = "";
            laTNKc42.Content = "";
            TNKco42.Content = "";
            laTNKc52.Content = "";
            TNKco52.Content = "";
            laTNKc62.Content = "";
            TNKco62.Content = "";
            laTNKc72.Content = "";
            TNKco72.Content = "";
            laTNKc82.Content = "";
            TNKco82.Content = "";

            laRECc01.Content = "";
            laRECc21.Content = "";
            laRECc31.Content = "";
            laRECc41.Content = "";
            laRECc51.Content = "";
            laRECc61.Content = "";
            laRECc71.Content = "";
            laRECc81.Content = "";
            laRECc02.Content = "";
            RECco02.Content = "";
            laRECc12.Content = "";
            RECco12.Content = "";
            laRECc22.Content = "";
            RECco22.Content = "";
            laRECc32.Content = "";
            RECco32.Content = "";
            laRECc42.Content = "";
            RECco42.Content = "";
            laRECc52.Content = "";
            RECco52.Content = "";
            laRECc62.Content = "";
            RECco62.Content = "";
            laRECc72.Content = "";
            RECco72.Content = "";
            laRECc82.Content = "";
            RECco82.Content = "";

            laVEHc02.Content = "";
            VEHco02.Content = "";
            laVEHc12.Content = "";
            VEHco12.Content = "";
            laVEHc22.Content = "";
            VEHco22.Content = "";
            laVEHc32.Content = "";
            VEHco32.Content = "";
            laVEHc42.Content = "";
            VEHco42.Content = "";
            laVEHc52.Content = "";
            VEHco52.Content = "";
            laVEHc62.Content = "";
            VEHco62.Content = "";
            laVEHc72.Content = "";
            VEHco72.Content = "";
            laVEHc82.Content = "";
            VEHco82.Content = "";

            laHELc02.Content = "";
            HELco02.Content = "";
            laHELc12.Content = "";
            HELco12.Content = "";
            laHELc22.Content = "";
            HELco22.Content = "";
            laHELc32.Content = "";
            HELco32.Content = "";
            laHELc42.Content = "";
            HELco42.Content = "";
            laHELc52.Content = "";
            HELco52.Content = "";
            laHELc62.Content = "";
            HELco62.Content = "";
            laHELc72.Content = "";
            HELco72.Content = "";
            laHELc82.Content = "";
            HELco82.Content = "";

            AIRco02.Content = "";
            AIRco12.Content = "";
            laAIRc22.Content = "";
            AIRco22.Content = "";
            laAIRc32.Content = "";
            AIRco32.Content = "";
            laAIRc42.Content = "";
            AIRco42.Content = "";
            laAIRc52.Content = "";
            AIRco52.Content = "";
            laAIRc62.Content = "";
            AIRco62.Content = "";
            laAIRc72.Content = "";
            AIRco72.Content = "";
            laAIRc82.Content = "";
            AIRco82.Content = "";
            #endregion AUX

			#region numbers
			A100.Visibility = Visibility.Hidden;
			A101.Visibility = Visibility.Hidden;
			A102.Visibility = Visibility.Hidden;
			A103.Visibility = Visibility.Hidden;
			A104.Visibility = Visibility.Hidden;
			A105.Visibility = Visibility.Hidden;
			A106.Visibility = Visibility.Hidden;
			A107.Visibility = Visibility.Hidden;
			A108.Visibility = Visibility.Hidden;
			A110.Visibility = Visibility.Hidden;
			A111.Visibility = Visibility.Hidden;
			A112.Visibility = Visibility.Hidden;
			A113.Visibility = Visibility.Hidden;
			A114.Visibility = Visibility.Hidden;
			A115.Visibility = Visibility.Hidden;
			A116.Visibility = Visibility.Hidden;
			A117.Visibility = Visibility.Hidden;
			A118.Visibility = Visibility.Hidden;
			A120.Visibility = Visibility.Hidden;
			A121.Visibility = Visibility.Hidden;
			A122.Visibility = Visibility.Hidden;
			A123.Visibility = Visibility.Hidden;
			A124.Visibility = Visibility.Hidden;
			A125.Visibility = Visibility.Hidden;
			A126.Visibility = Visibility.Hidden;
			A127.Visibility = Visibility.Hidden;
			A128.Visibility = Visibility.Hidden;
			A130.Visibility = Visibility.Hidden;
			A131.Visibility = Visibility.Hidden;
			A132.Visibility = Visibility.Hidden;
			A133.Visibility = Visibility.Hidden;
			A134.Visibility = Visibility.Hidden;
			A135.Visibility = Visibility.Hidden;
			A136.Visibility = Visibility.Hidden;
			A137.Visibility = Visibility.Hidden;
			A138.Visibility = Visibility.Hidden;
			A140.Visibility = Visibility.Hidden;
			A141.Visibility = Visibility.Hidden;
			A142.Visibility = Visibility.Hidden;
			A143.Visibility = Visibility.Hidden;
			A144.Visibility = Visibility.Hidden;
			A145.Visibility = Visibility.Hidden;
			A146.Visibility = Visibility.Hidden;
			A147.Visibility = Visibility.Hidden;
			A148.Visibility = Visibility.Hidden;
			A150.Visibility = Visibility.Hidden;
			A151.Visibility = Visibility.Hidden;
			A152.Visibility = Visibility.Hidden;
			A153.Visibility = Visibility.Hidden;
			A154.Visibility = Visibility.Hidden;
			A155.Visibility = Visibility.Hidden;
			A156.Visibility = Visibility.Hidden;
			A157.Visibility = Visibility.Hidden;
			A158.Visibility = Visibility.Hidden;
			A160.Visibility = Visibility.Hidden;
			A161.Visibility = Visibility.Hidden;
			A162.Visibility = Visibility.Hidden;
			A163.Visibility = Visibility.Hidden;
			A164.Visibility = Visibility.Hidden;
			A165.Visibility = Visibility.Hidden;
			A166.Visibility = Visibility.Hidden;
			A167.Visibility = Visibility.Hidden;
			A168.Visibility = Visibility.Hidden;
			A170.Visibility = Visibility.Hidden;
			A171.Visibility = Visibility.Hidden;
			A172.Visibility = Visibility.Hidden;
			A173.Visibility = Visibility.Hidden;
			A174.Visibility = Visibility.Hidden;
			A175.Visibility = Visibility.Hidden;
			A176.Visibility = Visibility.Hidden;
			A177.Visibility = Visibility.Hidden;
			A178.Visibility = Visibility.Hidden;

			A200.Visibility = Visibility.Hidden;
			A201.Visibility = Visibility.Hidden;
			A202.Visibility = Visibility.Hidden;
			A203.Visibility = Visibility.Hidden;
			A204.Visibility = Visibility.Hidden;
			A205.Visibility = Visibility.Hidden;
			A206.Visibility = Visibility.Hidden;
			A207.Visibility = Visibility.Hidden;
			A208.Visibility = Visibility.Hidden;
			A210.Visibility = Visibility.Hidden;
			A211.Visibility = Visibility.Hidden;
			A212.Visibility = Visibility.Hidden;
			A213.Visibility = Visibility.Hidden;
			A214.Visibility = Visibility.Hidden;
			A215.Visibility = Visibility.Hidden;
			A216.Visibility = Visibility.Hidden;
			A217.Visibility = Visibility.Hidden;
			A218.Visibility = Visibility.Hidden;
			A220.Visibility = Visibility.Hidden;
			A221.Visibility = Visibility.Hidden;
			A222.Visibility = Visibility.Hidden;
			A223.Visibility = Visibility.Hidden;
			A224.Visibility = Visibility.Hidden;
			A225.Visibility = Visibility.Hidden;
			A226.Visibility = Visibility.Hidden;
			A227.Visibility = Visibility.Hidden;
			A228.Visibility = Visibility.Hidden;
			A230.Visibility = Visibility.Hidden;
			A231.Visibility = Visibility.Hidden;
			A232.Visibility = Visibility.Hidden;
			A233.Visibility = Visibility.Hidden;
			A234.Visibility = Visibility.Hidden;
			A235.Visibility = Visibility.Hidden;
			A236.Visibility = Visibility.Hidden;
			A237.Visibility = Visibility.Hidden;
			A238.Visibility = Visibility.Hidden;
			A240.Visibility = Visibility.Hidden;
			A241.Visibility = Visibility.Hidden;
			A242.Visibility = Visibility.Hidden;
			A243.Visibility = Visibility.Hidden;
			A244.Visibility = Visibility.Hidden;
			A245.Visibility = Visibility.Hidden;
			A246.Visibility = Visibility.Hidden;
			A247.Visibility = Visibility.Hidden;
			A248.Visibility = Visibility.Hidden;
			A250.Visibility = Visibility.Hidden;
			A251.Visibility = Visibility.Hidden;
			A252.Visibility = Visibility.Hidden;
			A253.Visibility = Visibility.Hidden;
			A254.Visibility = Visibility.Hidden;
			A255.Visibility = Visibility.Hidden;
			A256.Visibility = Visibility.Hidden;
			A257.Visibility = Visibility.Hidden;
			A258.Visibility = Visibility.Hidden;
			A260.Visibility = Visibility.Hidden;
			A261.Visibility = Visibility.Hidden;
			A262.Visibility = Visibility.Hidden;
			A263.Visibility = Visibility.Hidden;
			A264.Visibility = Visibility.Hidden;
			A265.Visibility = Visibility.Hidden;
			A266.Visibility = Visibility.Hidden;
			A267.Visibility = Visibility.Hidden;
			A268.Visibility = Visibility.Hidden;
			A270.Visibility = Visibility.Hidden;
			A271.Visibility = Visibility.Hidden;
			A272.Visibility = Visibility.Hidden;
			A273.Visibility = Visibility.Hidden;
			A274.Visibility = Visibility.Hidden;
			A275.Visibility = Visibility.Hidden;
			A276.Visibility = Visibility.Hidden;
			A277.Visibility = Visibility.Hidden;
			A278.Visibility = Visibility.Hidden;
			#endregion numbers

			#region numbers
			laLOG01.Visibility = Visibility.Hidden;
			laLOG11.Visibility = Visibility.Hidden;
			laLOG21.Visibility = Visibility.Hidden;
			laLOG31.Visibility = Visibility.Hidden;
			laLOG41.Visibility = Visibility.Hidden;
			laLOG51.Visibility = Visibility.Hidden;
			laLOG61.Visibility = Visibility.Hidden;
			laLOG71.Visibility = Visibility.Hidden;
			laLOG81.Visibility = Visibility.Hidden;
			laINF01.Visibility = Visibility.Hidden;
			laINF11.Visibility = Visibility.Hidden;
			laINF21.Visibility = Visibility.Hidden;
			laINF31.Visibility = Visibility.Hidden;
			laINF41.Visibility = Visibility.Hidden;
			laINF51.Visibility = Visibility.Hidden;
			laINF61.Visibility = Visibility.Hidden;
			laINF71.Visibility = Visibility.Hidden;
			laINF81.Visibility = Visibility.Hidden;
			laSUP01.Visibility = Visibility.Hidden;
			laSUP11.Visibility = Visibility.Hidden;
			laSUP21.Visibility = Visibility.Hidden;
			laSUP31.Visibility = Visibility.Hidden;
			laSUP41.Visibility = Visibility.Hidden;
			laSUP51.Visibility = Visibility.Hidden;
			laSUP61.Visibility = Visibility.Hidden;
			laSUP71.Visibility = Visibility.Hidden;
			laSUP81.Visibility = Visibility.Hidden;
			laTNK01.Visibility = Visibility.Hidden;
			laTNK11.Visibility = Visibility.Hidden;
			laTNK21.Visibility = Visibility.Hidden;
			laTNK31.Visibility = Visibility.Hidden;
			laTNK41.Visibility = Visibility.Hidden;
			laTNK51.Visibility = Visibility.Hidden;
			laTNK61.Visibility = Visibility.Hidden;
			laTNK71.Visibility = Visibility.Hidden;
			laTNK81.Visibility = Visibility.Hidden;
			laREC01.Visibility = Visibility.Hidden;
			laREC11.Visibility = Visibility.Hidden;
			laREC21.Visibility = Visibility.Hidden;
			laREC31.Visibility = Visibility.Hidden;
			laREC41.Visibility = Visibility.Hidden;
			laREC51.Visibility = Visibility.Hidden;
			laREC61.Visibility = Visibility.Hidden;
			laREC71.Visibility = Visibility.Hidden;
			laREC81.Visibility = Visibility.Hidden;
			laVEH01.Visibility = Visibility.Hidden;
			laVEH11.Visibility = Visibility.Hidden;
			laVEH21.Visibility = Visibility.Hidden;
			laVEH31.Visibility = Visibility.Hidden;
			laVEH41.Visibility = Visibility.Hidden;
			laVEH51.Visibility = Visibility.Hidden;
			laVEH61.Visibility = Visibility.Hidden;
			laVEH71.Visibility = Visibility.Hidden;
			laVEH81.Visibility = Visibility.Hidden;
			laHEL01.Visibility = Visibility.Hidden;
			laHEL11.Visibility = Visibility.Hidden;
			laHEL21.Visibility = Visibility.Hidden;
			laHEL31.Visibility = Visibility.Hidden;
			laHEL41.Visibility = Visibility.Hidden;
			laHEL51.Visibility = Visibility.Hidden;
			laHEL61.Visibility = Visibility.Hidden;
			laHEL71.Visibility = Visibility.Hidden;
			laHEL81.Visibility = Visibility.Hidden;
			laAIR01.Visibility = Visibility.Hidden;
			laAIR11.Visibility = Visibility.Hidden;
			laAIR21.Visibility = Visibility.Hidden;
			laAIR31.Visibility = Visibility.Hidden;
			laAIR41.Visibility = Visibility.Hidden;
			laAIR51.Visibility = Visibility.Hidden;
			laAIR61.Visibility = Visibility.Hidden;
			laAIR71.Visibility = Visibility.Hidden;
			laAIR81.Visibility = Visibility.Hidden;

			laLOG02.Visibility = Visibility.Hidden;
			laLOG12.Visibility = Visibility.Hidden;
			laLOG22.Visibility = Visibility.Hidden;
			laLOG32.Visibility = Visibility.Hidden;
			laLOG42.Visibility = Visibility.Hidden;
			laLOG52.Visibility = Visibility.Hidden;
			laLOG62.Visibility = Visibility.Hidden;
			laLOG72.Visibility = Visibility.Hidden;
			laLOG82.Visibility = Visibility.Hidden;
			laINF02.Visibility = Visibility.Hidden;
			laINF12.Visibility = Visibility.Hidden;
			laINF22.Visibility = Visibility.Hidden;
			laINF32.Visibility = Visibility.Hidden;
			laINF42.Visibility = Visibility.Hidden;
			laINF52.Visibility = Visibility.Hidden;
			laINF62.Visibility = Visibility.Hidden;
			laINF72.Visibility = Visibility.Hidden;
			laINF82.Visibility = Visibility.Hidden;
			laSUP02.Visibility = Visibility.Hidden;
			laSUP12.Visibility = Visibility.Hidden;
			laSUP22.Visibility = Visibility.Hidden;
			laSUP32.Visibility = Visibility.Hidden;
			laSUP42.Visibility = Visibility.Hidden;
			laSUP52.Visibility = Visibility.Hidden;
			laSUP62.Visibility = Visibility.Hidden;
			laSUP72.Visibility = Visibility.Hidden;
			laSUP82.Visibility = Visibility.Hidden;
			laTNK02.Visibility = Visibility.Hidden;
			laTNK12.Visibility = Visibility.Hidden;
			laTNK22.Visibility = Visibility.Hidden;
			laTNK32.Visibility = Visibility.Hidden;
			laTNK42.Visibility = Visibility.Hidden;
			laTNK52.Visibility = Visibility.Hidden;
			laTNK62.Visibility = Visibility.Hidden;
			laTNK72.Visibility = Visibility.Hidden;
			laTNK82.Visibility = Visibility.Hidden;
			laREC02.Visibility = Visibility.Hidden;
			laREC12.Visibility = Visibility.Hidden;
			laREC22.Visibility = Visibility.Hidden;
			laREC32.Visibility = Visibility.Hidden;
			laREC42.Visibility = Visibility.Hidden;
			laREC52.Visibility = Visibility.Hidden;
			laREC62.Visibility = Visibility.Hidden;
			laREC72.Visibility = Visibility.Hidden;
			laREC82.Visibility = Visibility.Hidden;
			laVEH02.Visibility = Visibility.Hidden;
			laVEH12.Visibility = Visibility.Hidden;
			laVEH22.Visibility = Visibility.Hidden;
			laVEH32.Visibility = Visibility.Hidden;
			laVEH42.Visibility = Visibility.Hidden;
			laVEH52.Visibility = Visibility.Hidden;
			laVEH62.Visibility = Visibility.Hidden;
			laVEH72.Visibility = Visibility.Hidden;
			laVEH82.Visibility = Visibility.Hidden;
			laHEL02.Visibility = Visibility.Hidden;
			laHEL12.Visibility = Visibility.Hidden;
			laHEL22.Visibility = Visibility.Hidden;
			laHEL32.Visibility = Visibility.Hidden;
			laHEL42.Visibility = Visibility.Hidden;
			laHEL52.Visibility = Visibility.Hidden;
			laHEL62.Visibility = Visibility.Hidden;
			laHEL72.Visibility = Visibility.Hidden;
			laHEL82.Visibility = Visibility.Hidden;
			laAIR02.Visibility = Visibility.Hidden;
			laAIR12.Visibility = Visibility.Hidden;
			laAIR22.Visibility = Visibility.Hidden;
			laAIR32.Visibility = Visibility.Hidden;
			laAIR42.Visibility = Visibility.Hidden;
			laAIR52.Visibility = Visibility.Hidden;
			laAIR62.Visibility = Visibility.Hidden;
			laAIR72.Visibility = Visibility.Hidden;
			laAIR82.Visibility = Visibility.Hidden;
			#endregion numbers

            ResetVeterancy();

        }
*/
/*
        private void ResetVeterancy()
        {
            var uri = new Uri("rank/111.png", UriKind.Relative);
            var bitmap = new BitmapImage(uri);
            R200.Source = bitmap; R100.Source = bitmap;
            R201.Source = bitmap; R101.Source = bitmap;
            R202.Source = bitmap; R102.Source = bitmap;
            R203.Source = bitmap; R103.Source = bitmap;
            R204.Source = bitmap; R104.Source = bitmap;
            R205.Source = bitmap; R105.Source = bitmap;
            R206.Source = bitmap; R106.Source = bitmap;
            R207.Source = bitmap; R107.Source = bitmap;
            R208.Source = bitmap; R108.Source = bitmap;
            R210.Source = bitmap; R110.Source = bitmap;
            R211.Source = bitmap; R111.Source = bitmap;
            R212.Source = bitmap; R112.Source = bitmap;
            R213.Source = bitmap; R113.Source = bitmap;
            R214.Source = bitmap; R114.Source = bitmap;
            R215.Source = bitmap; R115.Source = bitmap;
            R216.Source = bitmap; R116.Source = bitmap;
            R217.Source = bitmap; R117.Source = bitmap;
            R218.Source = bitmap; R118.Source = bitmap;
            R220.Source = bitmap; R120.Source = bitmap;
            R221.Source = bitmap; R121.Source = bitmap;
            R222.Source = bitmap; R122.Source = bitmap;
            R223.Source = bitmap; R123.Source = bitmap;
            R224.Source = bitmap; R124.Source = bitmap;
            R225.Source = bitmap; R125.Source = bitmap;
            R226.Source = bitmap; R126.Source = bitmap;
            R227.Source = bitmap; R127.Source = bitmap;
            R228.Source = bitmap; R128.Source = bitmap;
            R230.Source = bitmap; R130.Source = bitmap;
            R231.Source = bitmap; R131.Source = bitmap;
            R232.Source = bitmap; R132.Source = bitmap;
            R233.Source = bitmap; R133.Source = bitmap;
            R234.Source = bitmap; R134.Source = bitmap;
            R235.Source = bitmap; R135.Source = bitmap;
            R236.Source = bitmap; R136.Source = bitmap;
            R237.Source = bitmap; R137.Source = bitmap;
            R238.Source = bitmap; R138.Source = bitmap;
            R240.Source = bitmap; R140.Source = bitmap;
            R241.Source = bitmap; R141.Source = bitmap;
            R242.Source = bitmap; R142.Source = bitmap;
            R243.Source = bitmap; R143.Source = bitmap;
            R244.Source = bitmap; R144.Source = bitmap;
            R245.Source = bitmap; R145.Source = bitmap;
            R246.Source = bitmap; R146.Source = bitmap;
            R247.Source = bitmap; R147.Source = bitmap;
            R248.Source = bitmap; R148.Source = bitmap;
            R250.Source = bitmap; R150.Source = bitmap;
            R251.Source = bitmap; R151.Source = bitmap;
            R252.Source = bitmap; R152.Source = bitmap;
            R253.Source = bitmap; R153.Source = bitmap;
            R254.Source = bitmap; R154.Source = bitmap;
            R255.Source = bitmap; R155.Source = bitmap;
            R256.Source = bitmap; R156.Source = bitmap;
            R257.Source = bitmap; R157.Source = bitmap;
            R258.Source = bitmap; R158.Source = bitmap;
            R260.Source = bitmap; R160.Source = bitmap;
            R261.Source = bitmap; R161.Source = bitmap;
            R262.Source = bitmap; R162.Source = bitmap;
            R263.Source = bitmap; R163.Source = bitmap;
            R264.Source = bitmap; R164.Source = bitmap;
            R265.Source = bitmap; R165.Source = bitmap;
            R266.Source = bitmap; R166.Source = bitmap;
            R267.Source = bitmap; R167.Source = bitmap;
            R268.Source = bitmap; R168.Source = bitmap;
            R270.Source = bitmap; R170.Source = bitmap;
            R271.Source = bitmap; R171.Source = bitmap;
            R272.Source = bitmap; R172.Source = bitmap;
            R273.Source = bitmap; R173.Source = bitmap;
            R274.Source = bitmap; R174.Source = bitmap;
            R275.Source = bitmap; R175.Source = bitmap;
            R276.Source = bitmap; R176.Source = bitmap;
            R277.Source = bitmap; R177.Source = bitmap;
            R278.Source = bitmap; R178.Source = bitmap;
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

        private void btReset_Click(object sender, RoutedEventArgs e)
        {
            MasterDeck = new DeckDisAssembly();
            resetDisplay();
            GUIDisplay(MasterDeck);
            double[] flagstr = new double[] { 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1 };
            showFlags(flagstr);
            txtEncodeDeck.Text = MasterDeck.DeckExport(MasterDeck);
        }
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
