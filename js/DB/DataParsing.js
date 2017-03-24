/* jshint shadow:true */
function initDB(){
    //called by the load DB button
    //load Database from csv on server
    //might take a while, hence the button
    var DBstring;
    window.DBarr = [];
    window.IDpairs = new IDpairInit();
    jQuery.get('https://aqarius90.github.io/FA_WG_Utilities/final_data.csv', function(data) {
        DBstring = new String(data);
        DBarr = jQuery.csv.toArrays(data);
        DataToObjects();
        AssignDeckCode();
    });
    //display actual page
    ractiveHeader.set({DBisLoaded: true});
    ractiveHeader.set({DBisNotLoaded:  false});
    ractiveUnit.set({DBisLoaded:true});
    ractiveUnit.set({DBisNotLoaded:false});
    ractiveDeck.set({DBisLoaded: true});

}

function DataToObjects(){
    //go from XxY array to unit objects
    window.UnitParser = new Array(DBarr.length);

    //make array of empty units. 2000 for no particular reason
    for (var i = 1;i <=DBarr.length-1; i++ ){
        UnitParser[i] = new Unit();
    }

    //fill instances with data. go value-by-value, assign all units
    for (var i = 0; i < DBarr[0].length; i++) {
            if(DBarr[0][i] == "AirplaneMinimalAltitude"){ for (var j = 1; j < DBarr.length; j++) { UnitParser[j].AirplaneMinimalAltitude = DBarr[j][i]; }}
        else if(DBarr[0][i] == "Amphibious"){ for (var j = 1; j < DBarr.length; j++) { UnitParser[j].Amphibious = DBarr[j][i]; }}
        else if(DBarr[0][i] == "ArmorFront"){ for (var j = 1; j < DBarr.length; j++) { UnitParser[j].ArmorFront = DBarr[j][i]; }}
        else if(DBarr[0][i] == "ArmorFrontSplashResistant"){ for (var j = 1; j < DBarr.length; j++) { UnitParser[j].ArmorFrontSplashResistant = DBarr[j][i]; }}
        else if(DBarr[0][i] == "ArmorRear"){ for (var j = 1; j < DBarr.length; j++) { UnitParser[j].ArmorRear = DBarr[j][i]; }}
        else if(DBarr[0][i] == "ArmorRearSplashResistant"){ for (var j = 1; j < DBarr.length; j++) { UnitParser[j].ArmorRearSplashResistant = DBarr[j][i]; }}
        else if(DBarr[0][i] == "ArmorSides"){ for (var j = 1; j < DBarr.length; j++) { UnitParser[j].ArmorSides = DBarr[j][i]; }}
        else if(DBarr[0][i] == "ArmorSidesSplashResistant"){ for (var j = 1; j < DBarr.length; j++) { UnitParser[j].ArmorSidesSplashResistant = DBarr[j][i]; }}
        else if(DBarr[0][i] == "ArmorTop"){ for (var j = 1; j < DBarr.length; j++) { UnitParser[j].ArmorTop = DBarr[j][i]; }}
        else if(DBarr[0][i] == "ArmorTopSplashResistant"){ for (var j = 1; j < DBarr.length; j++) { UnitParser[j].ArmorTopSplashResistant = DBarr[j][i]; }}
        else if(DBarr[0][i] == "AutoOrientation"){ for (var j = 1; j < DBarr.length; j++) { UnitParser[j].AutoOrientation = DBarr[j][i]; }}
        else if(DBarr[0][i] == "CIWS"){ for (var j = 1; j < DBarr.length; j++) { UnitParser[j].CIWS = DBarr[j][i]; }}
        else if(DBarr[0][i] == "ClassNameForDebug"){ for (var j = 1; j < DBarr.length; j++) { UnitParser[j].ClassNameForDebug = DBarr[j][i]; }}
        else if(DBarr[0][i] == "CyclicManoeuvrability"){ for (var j = 1; j < DBarr.length; j++) { UnitParser[j].CyclicManoeuvrability = DBarr[j][i]; }}
        else if(DBarr[0][i] == "HelicopterDetectionRadius"){ for (var j = 1; j < DBarr.length; j++) { UnitParser[j].HelicopterDetectionRadius = DBarr[j][i]; }}
        else if(DBarr[0][i] == "EliteDeployableAmount"){ for (var j = 1; j < DBarr.length; j++) { UnitParser[j].EliteDeployableAmount = DBarr[j][i]; }}
        else if(DBarr[0][i] == "AirplaneFlyingAltitude"){ for (var j = 1; j < DBarr.length; j++) { UnitParser[j].AirplaneFlyingAltitude = DBarr[j][i]; }}
        else if(DBarr[0][i] == "FuelCapacity"){ for (var j = 1; j < DBarr.length; j++) { UnitParser[j].FuelCapacity = DBarr[j][i]; }}
        else if(DBarr[0][i] == "Autonomy"){ for (var j = 1; j < DBarr.length; j++) { UnitParser[j].Autonomy = DBarr[j][i]; }}
        else if(DBarr[0][i] == "GFactorLimit"){ for (var j = 1; j < DBarr.length; j++) { UnitParser[j].GFactorLimit = DBarr[j][i]; }}
        else if(DBarr[0][i] == "HardenedDeployableAmount"){ for (var j = 1; j < DBarr.length; j++) { UnitParser[j].HardenedDeployableAmount = DBarr[j][i]; }}
        else if(DBarr[0][i] == "HelicopterFlyingAltitude"){ for (var j = 1; j < DBarr.length; j++) { UnitParser[j].HelicopterFlyingAltitude = DBarr[j][i]; }}
        else if(DBarr[0][i] == "HelicopterHoverAltitude"){ for (var j = 1; j < DBarr.length; j++) { UnitParser[j].HelicopterHoverAltitude = DBarr[j][i]; }}
        else if(DBarr[0][i] == "ECM"){ for (var j = 1; j < DBarr.length; j++) { UnitParser[j].ECM = DBarr[j][i]; }}
        else if(DBarr[0][i] == "SizeModifier"){ for (var j = 1; j < DBarr.length; j++) { UnitParser[j].SizeModifier = DBarr[j][i]; }}
        else if(DBarr[0][i] == "ID"){ for (var j = 1; j < DBarr.length; j++) { UnitParser[j].ID = DBarr[j][i]; }}
        else if(DBarr[0][i] == "IdentifyBaseProbability"){ for (var j = 1; j < DBarr.length; j++) { UnitParser[j].IdentifyBaseProbability = DBarr[j][i]; }}
        else if(DBarr[0][i] == "IsCommandUnit"){ for (var j = 1; j < DBarr.length; j++) { UnitParser[j].IsCommandUnit = DBarr[j][i]; }}
        else if(DBarr[0][i] == "IsPrototype"){ for (var j = 1; j < DBarr.length; j++) { UnitParser[j].IsPrototype = DBarr[j][i]; }}
        else if(DBarr[0][i] == "IsShip"){ for (var j = 1; j < DBarr.length; j++) { UnitParser[j].IsShip = DBarr[j][i]; }}
        else if(DBarr[0][i] == "IsTransporter"){ for (var j = 1; j < DBarr.length; j++) { UnitParser[j].IsTransporter = DBarr[j][i]; }}
        else if(DBarr[0][i] == "LateralSpeed"){ for (var j = 1; j < DBarr.length; j++) { UnitParser[j].LateralSpeed = DBarr[j][i]; }}
        else if(DBarr[0][i] == "Mass"){ for (var j = 1; j < DBarr.length; j++) { UnitParser[j].Mass = DBarr[j][i]; }}
        else if(DBarr[0][i] == "MaxAcceleration"){ for (var j = 1; j < DBarr.length; j++) { UnitParser[j].MaxAcceleration = DBarr[j][i]; }}
        else if(DBarr[0][i] == "MaxDeceleration"){ for (var j = 1; j < DBarr.length; j++) { UnitParser[j].MaxDeceleration = DBarr[j][i]; }}
        else if(DBarr[0][i] == "MaxInclination"){ for (var j = 1; j < DBarr.length; j++) { UnitParser[j].MaxInclination = DBarr[j][i]; }}
        else if(DBarr[0][i] == "MaxPacks"){ for (var j = 1; j < DBarr.length; j++) { UnitParser[j].MaxPacks = DBarr[j][i]; }}
        else if(DBarr[0][i] == "MaxSpeed"){ for (var j = 1; j < DBarr.length; j++) { UnitParser[j].MaxSpeed = DBarr[j][i]; }}
        else if(DBarr[0][i] == "MotherCountry"){ for (var j = 1; j < DBarr.length; j++) { UnitParser[j].MotherCountry = DBarr[j][i]; }}
        else if(DBarr[0][i] == "MovementType"){ for (var j = 1; j < DBarr.length; j++) { UnitParser[j].MovementType = DBarr[j][i]; }}
        else if(DBarr[0][i] == "Name"){ for (var j = 1; j < DBarr.length; j++) { UnitParser[j].Name = DBarr[j][i]; }}
        else if(DBarr[0][i] == "OpticalStrengthGround"){ for (var j = 1; j < DBarr.length; j++) { UnitParser[j].OpticalStrengthGround = DBarr[j][i]; }}
        else if(DBarr[0][i] == "OpticalStrengthAir"){ for (var j = 1; j < DBarr.length; j++) { UnitParser[j].OpticalStrengthAir = DBarr[j][i]; }}
        else if(DBarr[0][i] == "OpticalStrengthAntiradar"){ for (var j = 1; j < DBarr.length; j++) { UnitParser[j].OpticalStrengthAntiradar = DBarr[j][i]; }}
        else if(DBarr[0][i] == "PorteeVision"){ for (var j = 1; j < DBarr.length; j++) { UnitParser[j].PorteeVision = DBarr[j][i]; }}
        else if(DBarr[0][i] == "AirToAirHelicopterDetectionRadius"){ for (var j = 1; j < DBarr.length; j++) { UnitParser[j].AirToAirHelicopterDetectionRadius = DBarr[j][i]; }}
        else if(DBarr[0][i] == "Price"){ for (var j = 1; j < DBarr.length; j++) { UnitParser[j].Price = DBarr[j][i]; }}
        else if(DBarr[0][i] == "ProductionTime"){ for (var j = 1; j < DBarr.length; j++) { UnitParser[j].ProductionTime = DBarr[j][i]; }}
        else if(DBarr[0][i] == "RookieDeployableAmount"){ for (var j = 1; j < DBarr.length; j++) { UnitParser[j].RookieDeployableAmount = DBarr[j][i]; }}
        else if(DBarr[0][i] == "RotorArea"){ for (var j = 1; j < DBarr.length; j++) { UnitParser[j].RotorArea = DBarr[j][i]; }}
        else if(DBarr[0][i] == "Sailing"){ for (var j = 1; j < DBarr.length; j++) { UnitParser[j].Sailing = DBarr[j][i]; }}
        else if(DBarr[0][i] == "Salves"){ for (var j = 1; j < DBarr.length; j++) { UnitParser[j].Salves = DBarr[j][i]; }}
        else if(DBarr[0][i] == "SalvoIsMainSalvo"){ for (var j = 1; j < DBarr.length; j++) { UnitParser[j].SalvoIsMainSalvo = DBarr[j][i]; }}
        else if(DBarr[0][i] == "Stealth"){ for (var j = 1; j < DBarr.length; j++) { UnitParser[j].Stealth = DBarr[j][i]; }}
        else if(DBarr[0][i] == "Strength"){ for (var j = 1; j < DBarr.length; j++) { UnitParser[j].Strength = DBarr[j][i]; }}
        else if(DBarr[0][i] == "StunDamageRegen"){ for (var j = 1; j < DBarr.length; j++) { UnitParser[j].StunDamageRegen = DBarr[j][i]; }}
        else if(DBarr[0][i] == "StunDamageToGetStunned"){ for (var j = 1; j < DBarr.length; j++) { UnitParser[j].StunDamageToGetStunned = DBarr[j][i]; }}
        else if(DBarr[0][i] == "SupplyCapacity"){ for (var j = 1; j < DBarr.length; j++) { UnitParser[j].SupplyCapacity = DBarr[j][i]; }}
        else if(DBarr[0][i] == "SupplyPriority"){ for (var j = 1; j < DBarr.length; j++) { UnitParser[j].SupplyPriority = DBarr[j][i]; }}
        else if(DBarr[0][i] == "SuppressDamageRatioIfTransporterKilled"){ for (var j = 1; j < DBarr.length; j++) { UnitParser[j].SuppressDamageRatioIfTransporterKilled = DBarr[j][i]; }}
        else if(DBarr[0][i] == "SuppressionCeiling"){ for (var j = 1; j < DBarr.length; j++) { UnitParser[j].SuppressionCeiling = DBarr[j][i]; }}
        else if(DBarr[0][i] == "Tab"){ for (var j = 1; j < DBarr.length; j++) { UnitParser[j].Tab = DBarr[j][i]; }}
        else if(DBarr[0][i] == "TimeBetweenEachIdentifyRoll"){ for (var j = 1; j < DBarr.length; j++) { UnitParser[j].TimeBetweenEachIdentifyRoll = DBarr[j][i]; }}
        else if(DBarr[0][i] == "TimeHalfTurn"){ for (var j = 1; j < DBarr.length; j++) { UnitParser[j].TimeHalfTurn = DBarr[j][i]; }}
        else if(DBarr[0][i] == "TorqueManoeuvrability"){ for (var j = 1; j < DBarr.length; j++) { UnitParser[j].TorqueManoeuvrability = DBarr[j][i]; }}
        else if(DBarr[0][i] == "TrainedDeployableAmount"){ for (var j = 1; j < DBarr.length; j++) { UnitParser[j].TrainedDeployableAmount = DBarr[j][i]; }}
        else if(DBarr[0][i] == "Training"){ for (var j = 1; j < DBarr.length; j++) { UnitParser[j].Training = DBarr[j][i]; }}
        else if(DBarr[0][i] == "UpgradeFrom"){ for (var j = 1; j < DBarr.length; j++) { UnitParser[j].UpgradeFrom = DBarr[j][i]; }}
        else if(DBarr[0][i] == "UpwardSpeed"){ for (var j = 1; j < DBarr.length; j++) { UnitParser[j].UpwardSpeed = DBarr[j][i]; }}
        else if(DBarr[0][i] == "VeteranDeployableAmount"){ for (var j = 1; j < DBarr.length; j++) { UnitParser[j].VeteranDeployableAmount = DBarr[j][i]; }}
        else if(DBarr[0][i] == "Year"){ for (var j = 1; j < DBarr.length; j++) { UnitParser[j].Year = DBarr[j][i]; }}
        else if(DBarr[0][i] == "UpgradeTo"){ for (var j = 1; j < DBarr.length; j++) { UnitParser[j].UpgradeTo = DBarr[j][i]; }}
        else if(DBarr[0][i] == "Optics"){ for (var j = 1; j < DBarr.length; j++) { UnitParser[j].Optics = DBarr[j][i]; }}
        else if(DBarr[0][i] == "Transporters"){
            //separate tags (tag|tag|tag) into an array
                for (var j = 1; j < DBarr.length; j++) { // for given unit
                    if(DBarr[j][i] !== ""){
                        var k = 0;
                        var summation = "";
                        for (var l = 0; l< DBarr[j][i].length; l++){ //loop through string
                            if(DBarr[j][i].charAt(l) == "|"){ //if separator, separate
                                UnitParser[j].Transporters[k] = summation; //must be inited as array in objects.js
                                summation = "";
                                k++;
                            }
                            else{
                                summation += DBarr[j][i].charAt(l);
                            }
                        }
                        UnitParser[j].Transporters[k] = summation;//last one
                    }
                }
            }
        else if(DBarr[0][i] == "Decks"){
            //separate tags (tag|tag|tag) into an array
                for (var j = 1; j < DBarr.length; j++) {
                    //UnitParser[j].Decks = DBarr[j][i];
                    var k = 0;
                    var summation = "";
                    for (var l = 0; l< DBarr[j][i].length; l++){
                        if(DBarr[j][i].charAt(l) == "|"){
                            UnitParser[j].Decks[k] = summation;
                            summation = "";
                            k++;
                        }
                        else{
                            summation += DBarr[j][i].charAt(l);
                        }
                    }
                    UnitParser[j].Decks[k] = summation;//last one
                }
            }
        else if(DBarr[0][i] == "Weapon1AP") { for (var j = 1; j < DBarr.length; j++) { UnitParser[j].Weapons[0].AP = DBarr[j][i]; }}
        else if(DBarr[0][i] == "Weapon1AimTime")    { for (var j = 1; j < DBarr.length; j++) { UnitParser[j].Weapons[0].AimTime = DBarr[j][i]; }}
        else if(DBarr[0][i] == "Weapon1AngleDispersion")    { for (var j = 1; j < DBarr.length; j++) { UnitParser[j].Weapons[0].AngleDispersion = DBarr[j][i]; }}
        else if(DBarr[0][i] == "Weapon1Caliber")    { for (var j = 1; j < DBarr.length; j++) { UnitParser[j].Weapons[0].Caliber = DBarr[j][i]; }}
        else if(DBarr[0][i] == "Weapon1CanSmoke")   { for (var j = 1; j < DBarr.length; j++) { UnitParser[j].Weapons[0].CanSmoke = DBarr[j][i]; }}
        else if(DBarr[0][i] == "Weapon1CorrectedShotDispersionMultiplier")  { for (var j = 1; j < DBarr.length; j++) { UnitParser[j].Weapons[0].CorrectedShotDispersionMultiplier = DBarr[j][i]; }}
        else if(DBarr[0][i] == "Weapon1DispersionAtMaxRange")   { for (var j = 1; j < DBarr.length; j++) { UnitParser[j].Weapons[0].DispersionAtMaxRange = DBarr[j][i]; }}
        else if(DBarr[0][i] == "Weapon1DispersionAtMinRange")   { for (var j = 1; j < DBarr.length; j++) { UnitParser[j].Weapons[0].DispersionAtMinRange = DBarr[j][i]; }}
        else if(DBarr[0][i] == "Weapon1DisplayedAmmunition")    { for (var j = 1; j < DBarr.length; j++) { UnitParser[j].Weapons[0].DisplayedAmmunition = DBarr[j][i]; }}
        else if(DBarr[0][i] == "Weapon1FireTriggeringProbability")  { for (var j = 1; j < DBarr.length; j++) { UnitParser[j].Weapons[0].FireTriggeringProbability = DBarr[j][i]; }}
        else if(DBarr[0][i] == "Weapon1HE") { for (var j = 1; j < DBarr.length; j++) { UnitParser[j].Weapons[0].HE = DBarr[j][i]; }}
        else if(DBarr[0][i] == "Weapon1HitProbability") { for (var j = 1; j < DBarr.length; j++) { UnitParser[j].Weapons[0].HitProbability = DBarr[j][i]; }}
        else if(DBarr[0][i] == "Weapon1HitProbabilityWhileMoving")  { for (var j = 1; j < DBarr.length; j++) { UnitParser[j].Weapons[0].HitProbabilityWhileMoving = DBarr[j][i]; }}
        else if(DBarr[0][i] == "Weapon1MinimalCritProbability") { for (var j = 1; j < DBarr.length; j++) { UnitParser[j].Weapons[0].MinimalCritProbability = DBarr[j][i]; }}
        else if(DBarr[0][i] == "Weapon1MinimalHitProbability")  { for (var j = 1; j < DBarr.length; j++) { UnitParser[j].Weapons[0].MinimalHitProbability = DBarr[j][i]; }}
        else if(DBarr[0][i] == "Weapon1MissileMaxAcceleration") { for (var j = 1; j < DBarr.length; j++) { UnitParser[j].Weapons[0].MissileMaxAcceleration = DBarr[j][i]; }}
        else if(DBarr[0][i] == "Weapon1MissileMaxSpeed")    { for (var j = 1; j < DBarr.length; j++) { UnitParser[j].Weapons[0].MissileMaxSpeed = DBarr[j][i]; }}
        else if(DBarr[0][i] == "Weapon1MissileTimeBetweenCorrections")  { for (var j = 1; j < DBarr.length; j++) { UnitParser[j].Weapons[0].MissileTimeBetweenCorrections = DBarr[j][i]; }}
        else if(DBarr[0][i] == "Weapon1Name")   { for (var j = 1; j < DBarr.length; j++) { UnitParser[j].Weapons[0].Name = DBarr[j][i]; }}
        else if(DBarr[0][i] == "Weapon1Noise")  { for (var j = 1; j < DBarr.length; j++) { UnitParser[j].Weapons[0].Noise = DBarr[j][i]; }}
        else if(DBarr[0][i] == "Weapon1NumberOfSalvos") { for (var j = 1; j < DBarr.length; j++) { UnitParser[j].Weapons[0].NumberOfSalvos = DBarr[j][i]; }}
        else if(DBarr[0][i] == "Weapon1PositionOnCard") { for (var j = 1; j < DBarr.length; j++) { UnitParser[j].Weapons[0].PositionOnCard = DBarr[j][i]; }}
        else if(DBarr[0][i] == "Weapon1ProjectilesPerShot") { for (var j = 1; j < DBarr.length; j++) { UnitParser[j].Weapons[0].ProjectilesPerShot = DBarr[j][i]; }}
        else if(DBarr[0][i] == "Weapon1RadiusSplashPhysicalDamage") { for (var j = 1; j < DBarr.length; j++) { UnitParser[j].Weapons[0].RadiusSplashPhysicalDamage = DBarr[j][i]; }}
        else if(DBarr[0][i] == "Weapon1RadiusSplashSuppressDamage") { for (var j = 1; j < DBarr.length; j++) { UnitParser[j].Weapons[0].RadiusSplashSuppressDamage = DBarr[j][i]; }}
        else if(DBarr[0][i] == "Weapon1RangeGround")    { for (var j = 1; j < DBarr.length; j++) { UnitParser[j].Weapons[0].RangeGround = DBarr[j][i]; }}
        else if(DBarr[0][i] == "Weapon1RangeGroundMinimum") { for (var j = 1; j < DBarr.length; j++) { UnitParser[j].Weapons[0].RangeGroundMinimum = DBarr[j][i]; }}
        else if(DBarr[0][i] == "Weapon1RangeHelicopters")   { for (var j = 1; j < DBarr.length; j++) { UnitParser[j].Weapons[0].RangeHelicopters = DBarr[j][i]; }}
        else if(DBarr[0][i] == "Weapon1RangeHelicoptersMinimum")    { for (var j = 1; j < DBarr.length; j++) { UnitParser[j].Weapons[0].RangeHelicoptersMinimum = DBarr[j][i]; }}
        else if(DBarr[0][i] == "Weapon1RangeMissiles")  { for (var j = 1; j < DBarr.length; j++) { UnitParser[j].Weapons[0].RangeMissiles = DBarr[j][i]; }}
        else if(DBarr[0][i] == "Weapon1RangeMissilesMinimum")   { for (var j = 1; j < DBarr.length; j++) { UnitParser[j].Weapons[0].RangeMissilesMinimum = DBarr[j][i]; }}
        else if(DBarr[0][i] == "Weapon1RangePlanes")    { for (var j = 1; j < DBarr.length; j++) { UnitParser[j].Weapons[0].RangePlanes = DBarr[j][i]; }}
        else if(DBarr[0][i] == "Weapon1RangePlanesMinimum") { for (var j = 1; j < DBarr.length; j++) { UnitParser[j].Weapons[0].RangePlanesMinimum = DBarr[j][i]; }}
        else if(DBarr[0][i] == "Weapon1RangeShip")  { for (var j = 1; j < DBarr.length; j++) { UnitParser[j].Weapons[0].RangeShip = DBarr[j][i]; }}
        else if(DBarr[0][i] == "Weapon1RangeShipMinimum")   { for (var j = 1; j < DBarr.length; j++) { UnitParser[j].Weapons[0].RangeShipMinimum = DBarr[j][i]; }}
        else if(DBarr[0][i] == "Weapon1RayonPinned")    { for (var j = 1; j < DBarr.length; j++) { UnitParser[j].Weapons[0].RayonPinned = DBarr[j][i]; }}
        else if(DBarr[0][i] == "Weapon1ShotsPerSalvo")  { for (var j = 1; j < DBarr.length; j++) { UnitParser[j].Weapons[0].ShotsPerSalvo = DBarr[j][i]; }}
        else if(DBarr[0][i] == "Weapon1SupplyCost") { for (var j = 1; j < DBarr.length; j++) { UnitParser[j].Weapons[0].SupplyCost = DBarr[j][i]; }}
        else if(DBarr[0][i] == "Weapon1Tags"){
            //separate tags (tag|tag|tag) into an array
                for (var j = 1; j < DBarr.length; j++) {
                    //UnitParser[j].Decks = DBarr[j][i];
                    var k = 0;
                    var summation = "";
                    for (var l = 0; l< DBarr[j][i].length; l++){
                        if(DBarr[j][i].charAt(l) == "|"){
                            UnitParser[j].Weapons[0].Tags[k] = summation;
                            summation = "";
                            k++;
                        }
                        else{
                            summation += DBarr[j][i].charAt(l);
                        }
                    }
                    UnitParser[j].Weapons[0].Tags[k] = summation;//last one
                }
            }// rest of tags are wrong, TODO
        else if(DBarr[0][i] == "Weapon1TimeBetweenSalvos"){ for (var j = 1; j < DBarr.length; j++) { UnitParser[j].Weapons[0].TimeBetweenSalvos = DBarr[j][i]; }}
        else if(DBarr[0][i] == "Weapon1TimeBetweenShots"){ for (var j = 1; j < DBarr.length; j++) { UnitParser[j].Weapons[0].TimeBetweenShots = DBarr[j][i]; }}
        else if(DBarr[0][i] == "Weapon1Type"){ for (var j = 1; j < DBarr.length; j++) { UnitParser[j].Weapons[0].Type = DBarr[j][i]; }}
        else if(DBarr[0][i] == "Weapon2AP") { for (var j = 1; j < DBarr.length; j++) { UnitParser[j].Weapons[1].AP = DBarr[j][i]; }}
        else if(DBarr[0][i] == "Weapon2AimTime")    { for (var j = 1; j < DBarr.length; j++) { UnitParser[j].Weapons[1].AimTime = DBarr[j][i]; }}
        else if(DBarr[0][i] == "Weapon2AngleDispersion")    { for (var j = 1; j < DBarr.length; j++) { UnitParser[j].Weapons[1].AngleDispersion = DBarr[j][i]; }}
        else if(DBarr[0][i] == "Weapon2Caliber")    { for (var j = 1; j < DBarr.length; j++) { UnitParser[j].Weapons[1].Caliber = DBarr[j][i]; }}
        else if(DBarr[0][i] == "Weapon2CanSmoke")   { for (var j = 1; j < DBarr.length; j++) { UnitParser[j].Weapons[1].CanSmoke = DBarr[j][i]; }}
        else if(DBarr[0][i] == "Weapon2CorrectedShotDispersionMultiplier")  { for (var j = 1; j < DBarr.length; j++) { UnitParser[j].Weapons[1].CorrectedShotDispersionMultiplier = DBarr[j][i]; }}
        else if(DBarr[0][i] == "Weapon2DispersionAtMaxRange")   { for (var j = 1; j < DBarr.length; j++) { UnitParser[j].Weapons[1].DispersionAtMaxRange = DBarr[j][i]; }}
        else if(DBarr[0][i] == "Weapon2DispersionAtMinRange")   { for (var j = 1; j < DBarr.length; j++) { UnitParser[j].Weapons[1].DispersionAtMinRange = DBarr[j][i]; }}
        else if(DBarr[0][i] == "Weapon2DisplayedAmmunition")    { for (var j = 1; j < DBarr.length; j++) { UnitParser[j].Weapons[1].DisplayedAmmunition = DBarr[j][i]; }}
        else if(DBarr[0][i] == "Weapon2FireTriggeringProbability")  { for (var j = 1; j < DBarr.length; j++) { UnitParser[j].Weapons[1].FireTriggeringProbability = DBarr[j][i]; }}
        else if(DBarr[0][i] == "Weapon2HE") { for (var j = 1; j < DBarr.length; j++) { UnitParser[j].Weapons[1].HE = DBarr[j][i]; }}
        else if(DBarr[0][i] == "Weapon2HitProbability") { for (var j = 1; j < DBarr.length; j++) { UnitParser[j].Weapons[1].HitProbability = DBarr[j][i]; }}
        else if(DBarr[0][i] == "Weapon2HitProbabilityWhileMoving")  { for (var j = 1; j < DBarr.length; j++) { UnitParser[j].Weapons[1].HitProbabilityWhileMoving = DBarr[j][i]; }}
        else if(DBarr[0][i] == "Weapon2MinimalCritProbability") { for (var j = 1; j < DBarr.length; j++) { UnitParser[j].Weapons[1].MinimalCritProbability = DBarr[j][i]; }}
        else if(DBarr[0][i] == "Weapon2MinimalHitProbability")  { for (var j = 1; j < DBarr.length; j++) { UnitParser[j].Weapons[1].MinimalHitProbability = DBarr[j][i]; }}
        else if(DBarr[0][i] == "Weapon2MissileMaxAcceleration") { for (var j = 1; j < DBarr.length; j++) { UnitParser[j].Weapons[1].MissileMaxAcceleration = DBarr[j][i]; }}
        else if(DBarr[0][i] == "Weapon2MissileMaxSpeed")    { for (var j = 1; j < DBarr.length; j++) { UnitParser[j].Weapons[1].MissileMaxSpeed = DBarr[j][i]; }}
        else if(DBarr[0][i] == "Weapon2MissileTimeBetweenCorrections")  { for (var j = 1; j < DBarr.length; j++) { UnitParser[j].Weapons[1].MissileTimeBetweenCorrections = DBarr[j][i]; }}
        else if(DBarr[0][i] == "Weapon2Name")   { for (var j = 1; j < DBarr.length; j++) { UnitParser[j].Weapons[1].Name = DBarr[j][i]; }}
        else if(DBarr[0][i] == "Weapon2Noise")  { for (var j = 1; j < DBarr.length; j++) { UnitParser[j].Weapons[1].Noise = DBarr[j][i]; }}
        else if(DBarr[0][i] == "Weapon2NumberOfSalvos") { for (var j = 1; j < DBarr.length; j++) { UnitParser[j].Weapons[1].NumberOfSalvos = DBarr[j][i]; }}
        else if(DBarr[0][i] == "Weapon2PositionOnCard") { for (var j = 1; j < DBarr.length; j++) { UnitParser[j].Weapons[1].PositionOnCard = DBarr[j][i]; }}
        else if(DBarr[0][i] == "Weapon2ProjectilesPerShot") { for (var j = 1; j < DBarr.length; j++) { UnitParser[j].Weapons[1].ProjectilesPerShot = DBarr[j][i]; }}
        else if(DBarr[0][i] == "Weapon2RadiusSplashPhysicalDamage") { for (var j = 1; j < DBarr.length; j++) { UnitParser[j].Weapons[1].RadiusSplashPhysicalDamage = DBarr[j][i]; }}
        else if(DBarr[0][i] == "Weapon2RadiusSplashSuppressDamage") { for (var j = 1; j < DBarr.length; j++) { UnitParser[j].Weapons[1].RadiusSplashSuppressDamage = DBarr[j][i]; }}
        else if(DBarr[0][i] == "Weapon2RangeGround")    { for (var j = 1; j < DBarr.length; j++) { UnitParser[j].Weapons[1].RangeGround = DBarr[j][i]; }}
        else if(DBarr[0][i] == "Weapon2RangeGroundMinimum") { for (var j = 1; j < DBarr.length; j++) { UnitParser[j].Weapons[1].RangeGroundMinimum = DBarr[j][i]; }}
        else if(DBarr[0][i] == "Weapon2RangeHelicopters")   { for (var j = 1; j < DBarr.length; j++) { UnitParser[j].Weapons[1].RangeHelicopters = DBarr[j][i]; }}
        else if(DBarr[0][i] == "Weapon2RangeHelicoptersMinimum")    { for (var j = 1; j < DBarr.length; j++) { UnitParser[j].Weapons[1].RangeHelicoptersMinimum = DBarr[j][i]; }}
        else if(DBarr[0][i] == "Weapon2RangeMissiles")  { for (var j = 1; j < DBarr.length; j++) { UnitParser[j].Weapons[1].RangeMissiles = DBarr[j][i]; }}
        else if(DBarr[0][i] == "Weapon2RangeMissilesMinimum")   { for (var j = 1; j < DBarr.length; j++) { UnitParser[j].Weapons[1].RangeMissilesMinimum = DBarr[j][i]; }}
        else if(DBarr[0][i] == "Weapon2RangePlanes")    { for (var j = 1; j < DBarr.length; j++) { UnitParser[j].Weapons[1].RangePlanes = DBarr[j][i]; }}
        else if(DBarr[0][i] == "Weapon2RangePlanesMinimum") { for (var j = 1; j < DBarr.length; j++) { UnitParser[j].Weapons[1].RangePlanesMinimum = DBarr[j][i]; }}
        else if(DBarr[0][i] == "Weapon2RangeShip")  { for (var j = 1; j < DBarr.length; j++) { UnitParser[j].Weapons[1].RangeShip = DBarr[j][i]; }}
        else if(DBarr[0][i] == "Weapon2RangeShipMinimum")   { for (var j = 1; j < DBarr.length; j++) { UnitParser[j].Weapons[1].RangeShipMinimum = DBarr[j][i]; }}
        else if(DBarr[0][i] == "Weapon2RayonPinned")    { for (var j = 1; j < DBarr.length; j++) { UnitParser[j].Weapons[1].RayonPinned = DBarr[j][i]; }}
        else if(DBarr[0][i] == "Weapon2ShotsPerSalvo")  { for (var j = 1; j < DBarr.length; j++) { UnitParser[j].Weapons[1].ShotsPerSalvo = DBarr[j][i]; }}
        else if(DBarr[0][i] == "Weapon2SupplyCost") { for (var j = 1; j < DBarr.length; j++) { UnitParser[j].Weapons[1].SupplyCost = DBarr[j][i]; }}
        else if(DBarr[0][i] == "Weapon2Tags"){
            //separate tags (tag|tag|tag) into an array
                for (var j = 1; j < DBarr.length; j++) {
                    UnitParser[j].Weapons[1].Tags = DBarr[j][i];
                    var k = 0;
                    for (var l = 0; l< DBarr[j][i].length; l++){
                        if(DBarr[j][i].charAt(l) == "|"){
                            k++;
                        }
                        else{
                            UnitParser[j].Weapons[1].Tags[k] += DBarr[j][i].charAt(l);
                        }
                    }
                }
            }
        else if(DBarr[0][i] == "Weapon2TimeBetweenSalvos"){ for (var j = 1; j < DBarr.length; j++) { UnitParser[j].Weapons[1].TimeBetweenSalvos = DBarr[j][i]; }}
        else if(DBarr[0][i] == "Weapon2TimeBetweenShots"){ for (var j = 1; j < DBarr.length; j++) { UnitParser[j].Weapons[1].TimeBetweenShots = DBarr[j][i]; }}
        else if(DBarr[0][i] == "Weapon2Type"){ for (var j = 1; j < DBarr.length; j++) { UnitParser[j].Weapons[1].Type = DBarr[j][i]; }}
        else if(DBarr[0][i] == "Weapon3AP"){ for (var j = 1; j < DBarr.length; j++) { UnitParser[j].Weapons[2].AP = DBarr[j][i]; }}
        else if(DBarr[0][i] == "Weapon3AimTime"){ for (var j = 1; j < DBarr.length; j++) { UnitParser[j].Weapons[2].AimTime = DBarr[j][i]; }}
        else if(DBarr[0][i] == "Weapon3AngleDispersion"){ for (var j = 1; j < DBarr.length; j++) { UnitParser[j].Weapons[2].AngleDispersion = DBarr[j][i]; }}
        else if(DBarr[0][i] == "Weapon3Caliber"){ for (var j = 1; j < DBarr.length; j++) { UnitParser[j].Weapons[2].Caliber = DBarr[j][i]; }}
        else if(DBarr[0][i] == "Weapon3CanSmoke"){ for (var j = 1; j < DBarr.length; j++) { UnitParser[j].Weapons[2].CanSmoke = DBarr[j][i]; }}
        else if(DBarr[0][i] == "Weapon3CorrectedShotDispersionMultiplier"){ for (var j = 1; j < DBarr.length; j++) { UnitParser[j].Weapons[2].CorrectedShotDispersionMultiplier = DBarr[j][i]; }}
        else if(DBarr[0][i] == "Weapon3DispersionAtMaxRange"){ for (var j = 1; j < DBarr.length; j++) { UnitParser[j].Weapons[2].DispersionAtMaxRange = DBarr[j][i]; }}
        else if(DBarr[0][i] == "Weapon3DispersionAtMinRange"){ for (var j = 1; j < DBarr.length; j++) { UnitParser[j].Weapons[2].DispersionAtMinRange = DBarr[j][i]; }}
        else if(DBarr[0][i] == "Weapon3DisplayedAmmunition"){ for (var j = 1; j < DBarr.length; j++) { UnitParser[j].Weapons[2].DisplayedAmmunition = DBarr[j][i]; }}
        else if(DBarr[0][i] == "Weapon3FireTriggeringProbability"){ for (var j = 1; j < DBarr.length; j++) { UnitParser[j].Weapons[2].FireTriggeringProbability = DBarr[j][i]; }}
        else if(DBarr[0][i] == "Weapon3HE"){ for (var j = 1; j < DBarr.length; j++) { UnitParser[j].Weapons[2].HE = DBarr[j][i]; }}
        else if(DBarr[0][i] == "Weapon3HitProbability"){ for (var j = 1; j < DBarr.length; j++) { UnitParser[j].Weapons[2].HitProbability = DBarr[j][i]; }}
        else if(DBarr[0][i] == "Weapon3HitProbabilityWhileMoving"){ for (var j = 1; j < DBarr.length; j++) { UnitParser[j].Weapons[2].HitProbabilityWhileMoving = DBarr[j][i]; }}
        else if(DBarr[0][i] == "Weapon3MinimalCritProbability"){ for (var j = 1; j < DBarr.length; j++) { UnitParser[j].Weapons[2].MinimalCritProbability = DBarr[j][i]; }}
        else if(DBarr[0][i] == "Weapon3MinimalHitProbability"){ for (var j = 1; j < DBarr.length; j++) { UnitParser[j].Weapons[2].MinimalHitProbability = DBarr[j][i]; }}
        else if(DBarr[0][i] == "Weapon3MissileMaxAcceleration"){ for (var j = 1; j < DBarr.length; j++) { UnitParser[j].Weapons[2].MissileMaxAcceleration = DBarr[j][i]; }}
        else if(DBarr[0][i] == "Weapon3MissileMaxSpeed"){ for (var j = 1; j < DBarr.length; j++) { UnitParser[j].Weapons[2].MissileMaxSpeed = DBarr[j][i]; }}
        else if(DBarr[0][i] == "Weapon3MissileTimeBetweenCorrections"){ for (var j = 1; j < DBarr.length; j++) { UnitParser[j].Weapons[2].MissileTimeBetweenCorrections = DBarr[j][i]; }}
        else if(DBarr[0][i] == "Weapon3Name"){ for (var j = 1; j < DBarr.length; j++) { UnitParser[j].Weapons[2].Name = DBarr[j][i]; }}
        else if(DBarr[0][i] == "Weapon3Noise"){ for (var j = 1; j < DBarr.length; j++) { UnitParser[j].Weapons[2].Noise = DBarr[j][i]; }}
        else if(DBarr[0][i] == "Weapon3NumberOfSalvos"){ for (var j = 1; j < DBarr.length; j++) { UnitParser[j].Weapons[2].NumberOfSalvos = DBarr[j][i]; }}
        else if(DBarr[0][i] == "Weapon3PositionOnCard"){ for (var j = 1; j < DBarr.length; j++) { UnitParser[j].Weapons[2].PositionOnCard = DBarr[j][i]; }}
        else if(DBarr[0][i] == "Weapon3ProjectilesPerShot"){ for (var j = 1; j < DBarr.length; j++) { UnitParser[j].Weapons[2].ProjectilesPerShot = DBarr[j][i]; }}
        else if(DBarr[0][i] == "Weapon3RadiusSplashPhysicalDamage"){ for (var j = 1; j < DBarr.length; j++) { UnitParser[j].Weapons[2].RadiusSplashPhysicalDamage = DBarr[j][i]; }}
        else if(DBarr[0][i] == "Weapon3RadiusSplashSuppressDamage"){ for (var j = 1; j < DBarr.length; j++) { UnitParser[j].Weapons[2].RadiusSplashSuppressDamage = DBarr[j][i]; }}
        else if(DBarr[0][i] == "Weapon3RangeGround"){ for (var j = 1; j < DBarr.length; j++) { UnitParser[j].Weapons[2].RangeGround = DBarr[j][i]; }}
        else if(DBarr[0][i] == "Weapon3RangeGroundMinimum"){ for (var j = 1; j < DBarr.length; j++) { UnitParser[j].Weapons[2].RangeGroundMinimum = DBarr[j][i]; }}
        else if(DBarr[0][i] == "Weapon3RangeHelicopters"){ for (var j = 1; j < DBarr.length; j++) { UnitParser[j].Weapons[2].RangeHelicopters = DBarr[j][i]; }}
        else if(DBarr[0][i] == "Weapon3RangeHelicoptersMinimum"){ for (var j = 1; j < DBarr.length; j++) { UnitParser[j].Weapons[2].RangeHelicoptersMinimum = DBarr[j][i]; }}
        else if(DBarr[0][i] == "Weapon3RangeMissiles"){ for (var j = 1; j < DBarr.length; j++) { UnitParser[j].Weapons[2].RangeMissiles = DBarr[j][i]; }}
        else if(DBarr[0][i] == "Weapon3RangeMissilesMinimum"){ for (var j = 1; j < DBarr.length; j++) { UnitParser[j].Weapons[2].RangeMissilesMinimum = DBarr[j][i]; }}
        else if(DBarr[0][i] == "Weapon3RangePlanes"){ for (var j = 1; j < DBarr.length; j++) { UnitParser[j].Weapons[2].RangePlanes = DBarr[j][i]; }}
        else if(DBarr[0][i] == "Weapon3RangePlanesMinimum"){ for (var j = 1; j < DBarr.length; j++) { UnitParser[j].Weapons[2].RangePlanesMinimum = DBarr[j][i]; }}
        else if(DBarr[0][i] == "Weapon3RangeShip"){ for (var j = 1; j < DBarr.length; j++) { UnitParser[j].Weapons[2].RangeShip = DBarr[j][i]; }}
        else if(DBarr[0][i] == "Weapon3RangeShipMinimum"){ for (var j = 1; j < DBarr.length; j++) { UnitParser[j].Weapons[2].RangeShipMinimum = DBarr[j][i]; }}
        else if(DBarr[0][i] == "Weapon3RayonPinned"){ for (var j = 1; j < DBarr.length; j++) { UnitParser[j].Weapons[2].RayonPinned = DBarr[j][i]; }}
        else if(DBarr[0][i] == "Weapon3ShotsPerSalvo"){ for (var j = 1; j < DBarr.length; j++) { UnitParser[j].Weapons[2].ShotsPerSalvo = DBarr[j][i]; }}
        else if(DBarr[0][i] == "Weapon3SupplyCost"){ for (var j = 1; j < DBarr.length; j++) { UnitParser[j].Weapons[2].SupplyCost = DBarr[j][i]; }}
        else if(DBarr[0][i] == "Weapon3Tags"){
            //separate tags (tag|tag|tag) into an array
                for (var j = 1; j < DBarr.length; j++) {
                    UnitParser[j].Weapons[2].Tags = DBarr[j][i];
                    var k = 0;
                    for (var l = 0; l< DBarr[j][i].length; l++){
                        if(DBarr[j][i].charAt(l) == "|"){
                            k++;
                        }
                        else{
                            UnitParser[j].Weapons[2].Tags[k] += DBarr[j][i].charAt(l);
                        }
                    }
                }
            }
        else if(DBarr[0][i] == "Weapon3TimeBetweenSalvos"){ for (var j = 1; j < DBarr.length; j++) { UnitParser[j].Weapons[2].TimeBetweenSalvos = DBarr[j][i]; }}
        else if(DBarr[0][i] == "Weapon3TimeBetweenShots"){ for (var j = 1; j < DBarr.length; j++) { UnitParser[j].Weapons[2].TimeBetweenShots = DBarr[j][i]; }}
        else if(DBarr[0][i] == "Weapon3Type"){ for (var j = 1; j < DBarr.length; j++) { UnitParser[j].Weapons[2].Type = DBarr[j][i]; }}
        else if(DBarr[0][i] == "Weapon4AP"){ for (var j = 1; j < DBarr.length; j++) { UnitParser[j].Weapons[3].AP = DBarr[j][i]; }}
        else if(DBarr[0][i] == "Weapon4AimTime"){ for (var j = 1; j < DBarr.length; j++) { UnitParser[j].Weapons[3].AimTime = DBarr[j][i]; }}
        else if(DBarr[0][i] == "Weapon4AngleDispersion"){ for (var j = 1; j < DBarr.length; j++) { UnitParser[j].Weapons[3].AngleDispersion = DBarr[j][i]; }}
        else if(DBarr[0][i] == "Weapon4Caliber"){ for (var j = 1; j < DBarr.length; j++) { UnitParser[j].Weapons[3].Caliber = DBarr[j][i]; }}
        else if(DBarr[0][i] == "Weapon4CanSmoke"){ for (var j = 1; j < DBarr.length; j++) { UnitParser[j].Weapons[3].CanSmoke = DBarr[j][i]; }}
        else if(DBarr[0][i] == "Weapon4CorrectedShotDispersionMultiplier"){ for (var j = 1; j < DBarr.length; j++) { UnitParser[j].Weapons[3].CorrectedShotDispersionMultiplier = DBarr[j][i]; }}
        else if(DBarr[0][i] == "Weapon4DispersionAtMaxRange"){ for (var j = 1; j < DBarr.length; j++) { UnitParser[j].Weapons[3].DispersionAtMaxRange = DBarr[j][i]; }}
        else if(DBarr[0][i] == "Weapon4DispersionAtMinRange"){ for (var j = 1; j < DBarr.length; j++) { UnitParser[j].Weapons[3].DispersionAtMinRange = DBarr[j][i]; }}
        else if(DBarr[0][i] == "Weapon4DisplayedAmmunition"){ for (var j = 1; j < DBarr.length; j++) { UnitParser[j].Weapons[3].DisplayedAmmunition = DBarr[j][i]; }}
        else if(DBarr[0][i] == "Weapon4FireTriggeringProbability"){ for (var j = 1; j < DBarr.length; j++) { UnitParser[j].Weapons[3].FireTriggeringProbability = DBarr[j][i]; }}
        else if(DBarr[0][i] == "Weapon4HE"){ for (var j = 1; j < DBarr.length; j++) { UnitParser[j].Weapons[3].HE = DBarr[j][i]; }}
        else if(DBarr[0][i] == "Weapon4HitProbability"){ for (var j = 1; j < DBarr.length; j++) { UnitParser[j].Weapons[3].HitProbability = DBarr[j][i]; }}
        else if(DBarr[0][i] == "Weapon4HitProbabilityWhileMoving"){ for (var j = 1; j < DBarr.length; j++) { UnitParser[j].Weapons[3].HitProbabilityWhileMoving = DBarr[j][i]; }}
        else if(DBarr[0][i] == "Weapon4MinimalCritProbability"){ for (var j = 1; j < DBarr.length; j++) { UnitParser[j].Weapons[3].MinimalCritProbability = DBarr[j][i]; }}
        else if(DBarr[0][i] == "Weapon4MinimalHitProbability"){ for (var j = 1; j < DBarr.length; j++) { UnitParser[j].Weapons[3].MinimalHitProbability = DBarr[j][i]; }}
        else if(DBarr[0][i] == "Weapon4MissileMaxAcceleration"){ for (var j = 1; j < DBarr.length; j++) { UnitParser[j].Weapons[3].MissileMaxAcceleration = DBarr[j][i]; }}
        else if(DBarr[0][i] == "Weapon4MissileMaxSpeed"){ for (var j = 1; j < DBarr.length; j++) { UnitParser[j].Weapons[3].MissileMaxSpeed = DBarr[j][i]; }}
        else if(DBarr[0][i] == "Weapon4MissileTimeBetweenCorrections"){ for (var j = 1; j < DBarr.length; j++) { UnitParser[j].Weapons[3].MissileTimeBetweenCorrections = DBarr[j][i]; }}
        else if(DBarr[0][i] == "Weapon4Name"){ for (var j = 1; j < DBarr.length; j++) { UnitParser[j].Weapons[3].Name = DBarr[j][i]; }}
        else if(DBarr[0][i] == "Weapon4Noise"){ for (var j = 1; j < DBarr.length; j++) { UnitParser[j].Weapons[3].Noise = DBarr[j][i]; }}
        else if(DBarr[0][i] == "Weapon4NumberOfSalvos"){ for (var j = 1; j < DBarr.length; j++) { UnitParser[j].Weapons[3].NumberOfSalvos = DBarr[j][i]; }}
        else if(DBarr[0][i] == "Weapon4PositionOnCard"){ for (var j = 1; j < DBarr.length; j++) { UnitParser[j].Weapons[3].PositionOnCard = DBarr[j][i]; }}
        else if(DBarr[0][i] == "Weapon4ProjectilesPerShot"){ for (var j = 1; j < DBarr.length; j++) { UnitParser[j].Weapons[3].ProjectilesPerShot = DBarr[j][i]; }}
        else if(DBarr[0][i] == "Weapon4RadiusSplashPhysicalDamage"){ for (var j = 1; j < DBarr.length; j++) { UnitParser[j].Weapons[3].RadiusSplashPhysicalDamage = DBarr[j][i]; }}
        else if(DBarr[0][i] == "Weapon4RadiusSplashSuppressDamage"){ for (var j = 1; j < DBarr.length; j++) { UnitParser[j].Weapons[3].RadiusSplashSuppressDamage = DBarr[j][i]; }}
        else if(DBarr[0][i] == "Weapon4RangeGround"){ for (var j = 1; j < DBarr.length; j++) { UnitParser[j].Weapons[3].RangeGround = DBarr[j][i]; }}
        else if(DBarr[0][i] == "Weapon4RangeGroundMinimum"){ for (var j = 1; j < DBarr.length; j++) { UnitParser[j].Weapons[3].RangeGroundMinimum = DBarr[j][i]; }}
        else if(DBarr[0][i] == "Weapon4RangeHelicopters"){ for (var j = 1; j < DBarr.length; j++) { UnitParser[j].Weapons[3].RangeHelicopters = DBarr[j][i]; }}
        else if(DBarr[0][i] == "Weapon4RangeHelicoptersMinimum"){ for (var j = 1; j < DBarr.length; j++) { UnitParser[j].Weapons[3].RangeHelicoptersMinimum = DBarr[j][i]; }}
        else if(DBarr[0][i] == "Weapon4RangeMissiles"){ for (var j = 1; j < DBarr.length; j++) { UnitParser[j].Weapons[3].RangeMissiles = DBarr[j][i]; }}
        else if(DBarr[0][i] == "Weapon4RangeMissilesMinimum"){ for (var j = 1; j < DBarr.length; j++) { UnitParser[j].Weapons[3].RangeMissilesMinimum = DBarr[j][i]; }}
        else if(DBarr[0][i] == "Weapon4RangePlanes"){ for (var j = 1; j < DBarr.length; j++) { UnitParser[j].Weapons[3].RangePlanes = DBarr[j][i]; }}
        else if(DBarr[0][i] == "Weapon4RangePlanesMinimum"){ for (var j = 1; j < DBarr.length; j++) { UnitParser[j].Weapons[3].RangePlanesMinimum = DBarr[j][i]; }}
        else if(DBarr[0][i] == "Weapon4RangeShip"){ for (var j = 1; j < DBarr.length; j++) { UnitParser[j].Weapons[3].RangeShip = DBarr[j][i]; }}
        else if(DBarr[0][i] == "Weapon4RangeShipMinimum"){ for (var j = 1; j < DBarr.length; j++) { UnitParser[j].Weapons[3].RangeShipMinimum = DBarr[j][i]; }}
        else if(DBarr[0][i] == "Weapon4RayonPinned"){ for (var j = 1; j < DBarr.length; j++) { UnitParser[j].Weapons[3].RayonPinned = DBarr[j][i]; }}
        else if(DBarr[0][i] == "Weapon4ShotsPerSalvo"){ for (var j = 1; j < DBarr.length; j++) { UnitParser[j].Weapons[3].ShotsPerSalvo = DBarr[j][i]; }}
        else if(DBarr[0][i] == "Weapon4SupplyCost"){ for (var j = 1; j < DBarr.length; j++) { UnitParser[j].Weapons[3].SupplyCost = DBarr[j][i]; }}
        else if(DBarr[0][i] == "Weapon4Tags"){
            //separate tags (tag|tag|tag) into an array
                for (var j = 1; j < DBarr.length; j++) {
                    UnitParser[j].Weapons[3].Tags = DBarr[j][i];
                    var k = 0;
                    for (var l = 0; l< DBarr[j][i].length; l++){
                        if(DBarr[j][i].charAt(l) == "|"){
                            k++;
                        }
                        else{
                            UnitParser[j].Weapons[3].Tags[k] += DBarr[j][i].charAt(l);
                        }
                    }
                }
            }
        else if(DBarr[0][i] == "Weapon4TimeBetweenSalvos"){ for (var j = 1; j < DBarr.length; j++) { UnitParser[j].Weapons[3].TimeBetweenSalvos = DBarr[j][i]; }}
        else if(DBarr[0][i] == "Weapon4TimeBetweenShots"){ for (var j = 1; j < DBarr.length; j++) { UnitParser[j].Weapons[3].TimeBetweenShots = DBarr[j][i]; }}
        else if(DBarr[0][i] == "Weapon4Type"){ for (var j = 1; j < DBarr.length; j++) { UnitParser[j].Weapons[3].Type = DBarr[j][i]; }}
        else if(DBarr[0][i] == "Weapon5AP"){ for (var j = 1; j < DBarr.length; j++) { UnitParser[j].Weapons[4].AP = DBarr[j][i]; }}
        else if(DBarr[0][i] == "Weapon5AimTime"){ for (var j = 1; j < DBarr.length; j++) { UnitParser[j].Weapons[4].AimTime = DBarr[j][i]; }}
        else if(DBarr[0][i] == "Weapon5AngleDispersion"){ for (var j = 1; j < DBarr.length; j++) { UnitParser[j].Weapons[4].AngleDispersion = DBarr[j][i]; }}
        else if(DBarr[0][i] == "Weapon5Caliber"){ for (var j = 1; j < DBarr.length; j++) { UnitParser[j].Weapons[4].Caliber = DBarr[j][i]; }}
        else if(DBarr[0][i] == "Weapon5CanSmoke"){ for (var j = 1; j < DBarr.length; j++) { UnitParser[j].Weapons[4].CanSmoke = DBarr[j][i]; }}
        else if(DBarr[0][i] == "Weapon5CorrectedShotDispersionMultiplier"){ for (var j = 1; j < DBarr.length; j++) { UnitParser[j].Weapons[4].CorrectedShotDispersionMultiplier = DBarr[j][i]; }}
        else if(DBarr[0][i] == "Weapon5DispersionAtMaxRange"){ for (var j = 1; j < DBarr.length; j++) { UnitParser[j].Weapons[4].DispersionAtMaxRange = DBarr[j][i]; }}
        else if(DBarr[0][i] == "Weapon5DispersionAtMinRange"){ for (var j = 1; j < DBarr.length; j++) { UnitParser[j].Weapons[4].DispersionAtMinRange = DBarr[j][i]; }}
        else if(DBarr[0][i] == "Weapon5DisplayedAmmunition"){ for (var j = 1; j < DBarr.length; j++) { UnitParser[j].Weapons[4].DisplayedAmmunition = DBarr[j][i]; }}
        else if(DBarr[0][i] == "Weapon5FireTriggeringProbability"){ for (var j = 1; j < DBarr.length; j++) { UnitParser[j].Weapons[4].FireTriggeringProbability = DBarr[j][i]; }}
        else if(DBarr[0][i] == "Weapon5HE"){ for (var j = 1; j < DBarr.length; j++) { UnitParser[j].Weapons[4].HE = DBarr[j][i]; }}
        else if(DBarr[0][i] == "Weapon5HitProbability"){ for (var j = 1; j < DBarr.length; j++) { UnitParser[j].Weapons[4].HitProbability = DBarr[j][i]; }}
        else if(DBarr[0][i] == "Weapon5HitProbabilityWhileMoving"){ for (var j = 1; j < DBarr.length; j++) { UnitParser[j].Weapons[4].HitProbabilityWhileMoving = DBarr[j][i]; }}
        else if(DBarr[0][i] == "Weapon5MinimalCritProbability"){ for (var j = 1; j < DBarr.length; j++) { UnitParser[j].Weapons[4].MinimalCritProbability = DBarr[j][i]; }}
        else if(DBarr[0][i] == "Weapon5MinimalHitProbability"){ for (var j = 1; j < DBarr.length; j++) { UnitParser[j].Weapons[4].MinimalHitProbability = DBarr[j][i]; }}
        else if(DBarr[0][i] == "Weapon5MissileMaxAcceleration"){ for (var j = 1; j < DBarr.length; j++) { UnitParser[j].Weapons[4].MissileMaxAcceleration = DBarr[j][i]; }}
        else if(DBarr[0][i] == "Weapon5MissileMaxSpeed"){ for (var j = 1; j < DBarr.length; j++) { UnitParser[j].Weapons[4].MissileMaxSpeed = DBarr[j][i]; }}
        else if(DBarr[0][i] == "Weapon5MissileTimeBetweenCorrections"){ for (var j = 1; j < DBarr.length; j++) { UnitParser[j].Weapons[4].MissileTimeBetweenCorrections = DBarr[j][i]; }}
        else if(DBarr[0][i] == "Weapon5Name"){ for (var j = 1; j < DBarr.length; j++) { UnitParser[j].Weapons[4].Name = DBarr[j][i]; }}
        else if(DBarr[0][i] == "Weapon5Noise"){ for (var j = 1; j < DBarr.length; j++) { UnitParser[j].Weapons[4].Noise = DBarr[j][i]; }}
        else if(DBarr[0][i] == "Weapon5NumberOfSalvos"){ for (var j = 1; j < DBarr.length; j++) { UnitParser[j].Weapons[4].NumberOfSalvos = DBarr[j][i]; }}
        else if(DBarr[0][i] == "Weapon5PositionOnCard"){ for (var j = 1; j < DBarr.length; j++) { UnitParser[j].Weapons[4].PositionOnCard = DBarr[j][i]; }}
        else if(DBarr[0][i] == "Weapon5ProjectilesPerShot"){ for (var j = 1; j < DBarr.length; j++) { UnitParser[j].Weapons[4].ProjectilesPerShot = DBarr[j][i]; }}
        else if(DBarr[0][i] == "Weapon5RadiusSplashPhysicalDamage"){ for (var j = 1; j < DBarr.length; j++) { UnitParser[j].Weapons[4].RadiusSplashPhysicalDamage = DBarr[j][i]; }}
        else if(DBarr[0][i] == "Weapon5RadiusSplashSuppressDamage"){ for (var j = 1; j < DBarr.length; j++) { UnitParser[j].Weapons[4].RadiusSplashSuppressDamage = DBarr[j][i]; }}
        else if(DBarr[0][i] == "Weapon5RangeGround"){ for (var j = 1; j < DBarr.length; j++) { UnitParser[j].Weapons[4].RangeGround = DBarr[j][i]; }}
        else if(DBarr[0][i] == "Weapon5RangeGroundMinimum"){ for (var j = 1; j < DBarr.length; j++) { UnitParser[j].Weapons[4].RangeGroundMinimum = DBarr[j][i]; }}
        else if(DBarr[0][i] == "Weapon5RangeHelicopters"){ for (var j = 1; j < DBarr.length; j++) { UnitParser[j].Weapons[4].RangeHelicopters = DBarr[j][i]; }}
        else if(DBarr[0][i] == "Weapon5RangeHelicoptersMinimum"){ for (var j = 1; j < DBarr.length; j++) { UnitParser[j].Weapons[4].RangeHelicoptersMinimum = DBarr[j][i]; }}
        else if(DBarr[0][i] == "Weapon5RangeMissiles"){ for (var j = 1; j < DBarr.length; j++) { UnitParser[j].Weapons[4].RangeMissiles = DBarr[j][i]; }}
        else if(DBarr[0][i] == "Weapon5RangeMissilesMinimum"){ for (var j = 1; j < DBarr.length; j++) { UnitParser[j].Weapons[4].RangeMissilesMinimum = DBarr[j][i]; }}
        else if(DBarr[0][i] == "Weapon5RangePlanes"){ for (var j = 1; j < DBarr.length; j++) { UnitParser[j].Weapons[4].RangePlanes = DBarr[j][i]; }}
        else if(DBarr[0][i] == "Weapon5RangePlanesMinimum"){ for (var j = 1; j < DBarr.length; j++) { UnitParser[j].Weapons[4].RangePlanesMinimum = DBarr[j][i]; }}
        else if(DBarr[0][i] == "Weapon5RangeShip"){ for (var j = 1; j < DBarr.length; j++) { UnitParser[j].Weapons[4].RangeShip = DBarr[j][i]; }}
        else if(DBarr[0][i] == "Weapon5RangeShipMinimum"){ for (var j = 1; j < DBarr.length; j++) { UnitParser[j].Weapons[4].RangeShipMinimum = DBarr[j][i]; }}
        else if(DBarr[0][i] == "Weapon5RayonPinned"){ for (var j = 1; j < DBarr.length; j++) { UnitParser[j].Weapons[4].RayonPinned = DBarr[j][i]; }}
        else if(DBarr[0][i] == "Weapon5ShotsPerSalvo"){ for (var j = 1; j < DBarr.length; j++) { UnitParser[j].Weapons[4].ShotsPerSalvo = DBarr[j][i]; }}
        else if(DBarr[0][i] == "Weapon5SupplyCost"){ for (var j = 1; j < DBarr.length; j++) { UnitParser[j].Weapons[4].SupplyCost = DBarr[j][i]; }}
        else if(DBarr[0][i] == "Weapon5Tags"){
            //separate tags (tag|tag|tag) into an array
                for (var j = 1; j < DBarr.length; j++) {
                    UnitParser[j].Weapons[4].Tags = DBarr[j][i];
                    var k = 0;
                    for (var l = 0; l< DBarr[j][i].length; l++){
                        if(DBarr[j][i].charAt(l) == "|"){
                            k++;
                        }
                        else{
                            UnitParser[j].Weapons[4].Tags[k] += DBarr[j][i].charAt(l);
                        }
                    }
                }
            }
        else if(DBarr[0][i] == "Weapon5TimeBetweenSalvos"){ for (var j = 1; j < DBarr.length; j++) { UnitParser[j].Weapons[4].TimeBetweenSalvos = DBarr[j][i]; }}
        else if(DBarr[0][i] == "Weapon5TimeBetweenShots"){ for (var j = 1; j < DBarr.length; j++) { UnitParser[j].Weapons[4].TimeBetweenShots = DBarr[j][i]; }}
        else if(DBarr[0][i] == "Weapon5Type"){ for (var j = 1; j < DBarr.length; j++) { UnitParser[j].Weapons[4].Type = DBarr[j][i]; }}
        else if(DBarr[0][i] == "Weapon6AP"){ for (var j = 1; j < DBarr.length; j++) { UnitParser[j].Weapons[5].AP = DBarr[j][i]; }}
        else if(DBarr[0][i] == "Weapon6AimTime"){ for (var j = 1; j < DBarr.length; j++) { UnitParser[j].Weapons[5].AimTime = DBarr[j][i]; }}
        else if(DBarr[0][i] == "Weapon6AngleDispersion"){ for (var j = 1; j < DBarr.length; j++) { UnitParser[j].Weapons[5].AngleDispersion = DBarr[j][i]; }}
        else if(DBarr[0][i] == "Weapon6Caliber"){ for (var j = 1; j < DBarr.length; j++) { UnitParser[j].Weapons[5].Caliber = DBarr[j][i]; }}
        else if(DBarr[0][i] == "Weapon6CanSmoke"){ for (var j = 1; j < DBarr.length; j++) { UnitParser[j].Weapons[5].CanSmoke = DBarr[j][i]; }}
        else if(DBarr[0][i] == "Weapon6CorrectedShotDispersionMultiplier"){ for (var j = 1; j < DBarr.length; j++) { UnitParser[j].Weapons[5].CorrectedShotDispersionMultiplier = DBarr[j][i]; }}
        else if(DBarr[0][i] == "Weapon6DispersionAtMaxRange"){ for (var j = 1; j < DBarr.length; j++) { UnitParser[j].Weapons[5].DispersionAtMaxRange = DBarr[j][i]; }}
        else if(DBarr[0][i] == "Weapon6DispersionAtMinRange"){ for (var j = 1; j < DBarr.length; j++) { UnitParser[j].Weapons[5].DispersionAtMinRange = DBarr[j][i]; }}
        else if(DBarr[0][i] == "Weapon6DisplayedAmmunition"){ for (var j = 1; j < DBarr.length; j++) { UnitParser[j].Weapons[5].DisplayedAmmunition = DBarr[j][i]; }}
        else if(DBarr[0][i] == "Weapon6FireTriggeringProbability"){ for (var j = 1; j < DBarr.length; j++) { UnitParser[j].Weapons[5].FireTriggeringProbability = DBarr[j][i]; }}
        else if(DBarr[0][i] == "Weapon6HE"){ for (var j = 1; j < DBarr.length; j++) { UnitParser[j].Weapons[5].HE = DBarr[j][i]; }}
        else if(DBarr[0][i] == "Weapon6HitProbability"){ for (var j = 1; j < DBarr.length; j++) { UnitParser[j].Weapons[5].HitProbability = DBarr[j][i]; }}
        else if(DBarr[0][i] == "Weapon6HitProbabilityWhileMoving"){ for (var j = 1; j < DBarr.length; j++) { UnitParser[j].Weapons[5].HitProbabilityWhileMoving = DBarr[j][i]; }}
        else if(DBarr[0][i] == "Weapon6MinimalCritProbability"){ for (var j = 1; j < DBarr.length; j++) { UnitParser[j].Weapons[5].MinimalCritProbability = DBarr[j][i]; }}
        else if(DBarr[0][i] == "Weapon6MinimalHitProbability"){ for (var j = 1; j < DBarr.length; j++) { UnitParser[j].Weapons[5].MinimalHitProbability = DBarr[j][i]; }}
        else if(DBarr[0][i] == "Weapon6MissileMaxAcceleration"){ for (var j = 1; j < DBarr.length; j++) { UnitParser[j].Weapons[5].MissileMaxAcceleration = DBarr[j][i]; }}
        else if(DBarr[0][i] == "Weapon6MissileMaxSpeed"){ for (var j = 1; j < DBarr.length; j++) { UnitParser[j].Weapons[5].MissileMaxSpeed = DBarr[j][i]; }}
        else if(DBarr[0][i] == "Weapon6MissileTimeBetweenCorrections"){ for (var j = 1; j < DBarr.length; j++) { UnitParser[j].Weapons[5].MissileTimeBetweenCorrections = DBarr[j][i]; }}
        else if(DBarr[0][i] == "Weapon6Name"){ for (var j = 1; j < DBarr.length; j++) { UnitParser[j].Weapons[5].Name = DBarr[j][i]; }}
        else if(DBarr[0][i] == "Weapon6Noise"){ for (var j = 1; j < DBarr.length; j++) { UnitParser[j].Weapons[5].Noise = DBarr[j][i]; }}
        else if(DBarr[0][i] == "Weapon6NumberOfSalvos"){ for (var j = 1; j < DBarr.length; j++) { UnitParser[j].Weapons[5].NumberOfSalvos = DBarr[j][i]; }}
        else if(DBarr[0][i] == "Weapon6PositionOnCard"){ for (var j = 1; j < DBarr.length; j++) { UnitParser[j].Weapons[5].PositionOnCard = DBarr[j][i]; }}
        else if(DBarr[0][i] == "Weapon6ProjectilesPerShot"){ for (var j = 1; j < DBarr.length; j++) { UnitParser[j].Weapons[5].ProjectilesPerShot = DBarr[j][i]; }}
        else if(DBarr[0][i] == "Weapon6RadiusSplashPhysicalDamage"){ for (var j = 1; j < DBarr.length; j++) { UnitParser[j].Weapons[5].RadiusSplashPhysicalDamage = DBarr[j][i]; }}
        else if(DBarr[0][i] == "Weapon6RadiusSplashSuppressDamage"){ for (var j = 1; j < DBarr.length; j++) { UnitParser[j].Weapons[5].RadiusSplashSuppressDamage = DBarr[j][i]; }}
        else if(DBarr[0][i] == "Weapon6RangeGround"){ for (var j = 1; j < DBarr.length; j++) { UnitParser[j].Weapons[5].RangeGround = DBarr[j][i]; }}
        else if(DBarr[0][i] == "Weapon6RangeGroundMinimum"){ for (var j = 1; j < DBarr.length; j++) { UnitParser[j].Weapons[5].RangeGroundMinimum = DBarr[j][i]; }}
        else if(DBarr[0][i] == "Weapon6RangeHelicopters"){ for (var j = 1; j < DBarr.length; j++) { UnitParser[j].Weapons[5].RangeHelicopters = DBarr[j][i]; }}
        else if(DBarr[0][i] == "Weapon6RangeHelicoptersMinimum"){ for (var j = 1; j < DBarr.length; j++) { UnitParser[j].Weapons[5].RangeHelicoptersMinimum = DBarr[j][i]; }}
        else if(DBarr[0][i] == "Weapon6RangeMissiles"){ for (var j = 1; j < DBarr.length; j++) { UnitParser[j].Weapons[5].RangeMissiles = DBarr[j][i]; }}
        else if(DBarr[0][i] == "Weapon6RangeMissilesMinimum"){ for (var j = 1; j < DBarr.length; j++) { UnitParser[j].Weapons[5].RangeMissilesMinimum = DBarr[j][i]; }}
        else if(DBarr[0][i] == "Weapon6RangePlanes"){ for (var j = 1; j < DBarr.length; j++) { UnitParser[j].Weapons[5].RangePlanes = DBarr[j][i]; }}
        else if(DBarr[0][i] == "Weapon6RangePlanesMinimum"){ for (var j = 1; j < DBarr.length; j++) { UnitParser[j].Weapons[5].RangePlanesMinimum = DBarr[j][i]; }}
        else if(DBarr[0][i] == "Weapon6RangeShip"){ for (var j = 1; j < DBarr.length; j++) { UnitParser[j].Weapons[5].RangeShip = DBarr[j][i]; }}
        else if(DBarr[0][i] == "Weapon6RangeShipMinimum"){ for (var j = 1; j < DBarr.length; j++) { UnitParser[j].Weapons[5].RangeShipMinimum = DBarr[j][i]; }}
        else if(DBarr[0][i] == "Weapon6RayonPinned"){ for (var j = 1; j < DBarr.length; j++) { UnitParser[j].Weapons[5].RayonPinned = DBarr[j][i]; }}
        else if(DBarr[0][i] == "Weapon6ShotsPerSalvo"){ for (var j = 1; j < DBarr.length; j++) { UnitParser[j].Weapons[5].ShotsPerSalvo = DBarr[j][i]; }}
        else if(DBarr[0][i] == "Weapon6SupplyCost"){ for (var j = 1; j < DBarr.length; j++) { UnitParser[j].Weapons[5].SupplyCost = DBarr[j][i]; }}
        else if(DBarr[0][i] == "Weapon6Tags"){
            //separate tags (tag|tag|tag) into an array
                for (var j = 1; j < DBarr.length; j++) {
                    UnitParser[j].Weapons[5].Tags = DBarr[j][i];
                    var k = 0;
                    for (var l = 0; l< DBarr[j][i].length; l++){
                        if(DBarr[j][i].charAt(l) == "|"){
                            k++;
                        }
                        else{
                            UnitParser[j].Weapons[5].Tags[k] += DBarr[j][i].charAt(l);
                        }
                    }
                }
            }
        else if(DBarr[0][i] == "Weapon6TimeBetweenSalvos"){ for (var j = 1; j < DBarr.length; j++) { UnitParser[j].Weapons[5].TimeBetweenSalvos = DBarr[j][i]; }}
        else if(DBarr[0][i] == "Weapon6TimeBetweenShots"){ for (var j = 1; j < DBarr.length; j++) { UnitParser[j].Weapons[5].TimeBetweenShots = DBarr[j][i]; }}
        else if(DBarr[0][i] == "Weapon6Type"){ for (var j = 1; j < DBarr.length; j++) { UnitParser[j].Weapons[5].Type = DBarr[j][i]; }}
        else if(DBarr[0][i] == "Weapon7AP"){ for (var j = 1; j < DBarr.length; j++) { UnitParser[j].Weapons[6].AP = DBarr[j][i]; }}
        else if(DBarr[0][i] == "Weapon7AimTime"){ for (var j = 1; j < DBarr.length; j++) { UnitParser[j].Weapons[6].AimTime = DBarr[j][i]; }}
        else if(DBarr[0][i] == "Weapon7AngleDispersion"){ for (var j = 1; j < DBarr.length; j++) { UnitParser[j].Weapons[6].AngleDispersion = DBarr[j][i]; }}
        else if(DBarr[0][i] == "Weapon7Caliber"){ for (var j = 1; j < DBarr.length; j++) { UnitParser[j].Weapons[6].Caliber = DBarr[j][i]; }}
        else if(DBarr[0][i] == "Weapon7CanSmoke"){ for (var j = 1; j < DBarr.length; j++) { UnitParser[j].Weapons[6].CanSmoke = DBarr[j][i]; }}
        else if(DBarr[0][i] == "Weapon7CorrectedShotDispersionMultiplier"){ for (var j = 1; j < DBarr.length; j++) { UnitParser[j].Weapons[6].CorrectedShotDispersionMultiplier = DBarr[j][i]; }}
        else if(DBarr[0][i] == "Weapon7DispersionAtMaxRange"){ for (var j = 1; j < DBarr.length; j++) { UnitParser[j].Weapons[6].DispersionAtMaxRange = DBarr[j][i]; }}
        else if(DBarr[0][i] == "Weapon7DispersionAtMinRange"){ for (var j = 1; j < DBarr.length; j++) { UnitParser[j].Weapons[6].DispersionAtMinRange = DBarr[j][i]; }}
        else if(DBarr[0][i] == "Weapon7DisplayedAmmunition"){ for (var j = 1; j < DBarr.length; j++) { UnitParser[j].Weapons[6].DisplayedAmmunition = DBarr[j][i]; }}
        else if(DBarr[0][i] == "Weapon7FireTriggeringProbability"){ for (var j = 1; j < DBarr.length; j++) { UnitParser[j].Weapons[6].FireTriggeringProbability = DBarr[j][i]; }}
        else if(DBarr[0][i] == "Weapon7HE"){ for (var j = 1; j < DBarr.length; j++) { UnitParser[j].Weapons[6].HE = DBarr[j][i]; }}
        else if(DBarr[0][i] == "Weapon7HitProbability"){ for (var j = 1; j < DBarr.length; j++) { UnitParser[j].Weapons[6].HitProbability = DBarr[j][i]; }}
        else if(DBarr[0][i] == "Weapon7HitProbabilityWhileMoving"){ for (var j = 1; j < DBarr.length; j++) { UnitParser[j].Weapons[6].HitProbabilityWhileMoving = DBarr[j][i]; }}
        else if(DBarr[0][i] == "Weapon7MinimalCritProbability"){ for (var j = 1; j < DBarr.length; j++) { UnitParser[j].Weapons[6].MinimalCritProbability = DBarr[j][i]; }}
        else if(DBarr[0][i] == "Weapon7MinimalHitProbability"){ for (var j = 1; j < DBarr.length; j++) { UnitParser[j].Weapons[6].MinimalHitProbability = DBarr[j][i]; }}
        else if(DBarr[0][i] == "Weapon7MissileTimeBetweenCorrections"){ for (var j = 1; j < DBarr.length; j++) { UnitParser[j].Weapons[6].MissileTimeBetweenCorrections = DBarr[j][i]; }}
        else if(DBarr[0][i] == "Weapon7Name"){ for (var j = 1; j < DBarr.length; j++) { UnitParser[j].Weapons[6].Name = DBarr[j][i]; }}
        else if(DBarr[0][i] == "Weapon7Noise"){ for (var j = 1; j < DBarr.length; j++) { UnitParser[j].Weapons[6].Noise = DBarr[j][i]; }}
        else if(DBarr[0][i] == "Weapon7NumberOfSalvos"){ for (var j = 1; j < DBarr.length; j++) { UnitParser[j].Weapons[6].NumberOfSalvos = DBarr[j][i]; }}
        else if(DBarr[0][i] == "Weapon7PositionOnCard"){ for (var j = 1; j < DBarr.length; j++) { UnitParser[j].Weapons[6].PositionOnCard = DBarr[j][i]; }}
        else if(DBarr[0][i] == "Weapon7ProjectilesPerShot"){ for (var j = 1; j < DBarr.length; j++) { UnitParser[j].Weapons[6].ProjectilesPerShot = DBarr[j][i]; }}
        else if(DBarr[0][i] == "Weapon7RadiusSplashPhysicalDamage"){ for (var j = 1; j < DBarr.length; j++) { UnitParser[j].Weapons[6].RadiusSplashPhysicalDamage = DBarr[j][i]; }}
        else if(DBarr[0][i] == "Weapon7RadiusSplashSuppressDamage"){ for (var j = 1; j < DBarr.length; j++) { UnitParser[j].Weapons[6].RadiusSplashSuppressDamage = DBarr[j][i]; }}
        else if(DBarr[0][i] == "Weapon7RangeGround"){ for (var j = 1; j < DBarr.length; j++) { UnitParser[j].Weapons[6].RangeGround = DBarr[j][i]; }}
        else if(DBarr[0][i] == "Weapon7RangeGroundMinimum"){ for (var j = 1; j < DBarr.length; j++) { UnitParser[j].Weapons[6].RangeGroundMinimum = DBarr[j][i]; }}
        else if(DBarr[0][i] == "Weapon7RangeHelicopters"){ for (var j = 1; j < DBarr.length; j++) { UnitParser[j].Weapons[6].RangeHelicopters = DBarr[j][i]; }}
        else if(DBarr[0][i] == "Weapon7RangeHelicoptersMinimum"){ for (var j = 1; j < DBarr.length; j++) { UnitParser[j].Weapons[6].RangeHelicoptersMinimum = DBarr[j][i]; }}
        else if(DBarr[0][i] == "Weapon7RangeMissiles"){ for (var j = 1; j < DBarr.length; j++) { UnitParser[j].Weapons[6].RangeMissiles = DBarr[j][i]; }}
        else if(DBarr[0][i] == "Weapon7RangeMissilesMinimum"){ for (var j = 1; j < DBarr.length; j++) { UnitParser[j].Weapons[6].RangeMissilesMinimum = DBarr[j][i]; }}
        else if(DBarr[0][i] == "Weapon7RangePlanes"){ for (var j = 1; j < DBarr.length; j++) { UnitParser[j].Weapons[6].RangePlanes = DBarr[j][i]; }}
        else if(DBarr[0][i] == "Weapon7RangePlanesMinimum"){ for (var j = 1; j < DBarr.length; j++) { UnitParser[j].Weapons[6].RangePlanesMinimum = DBarr[j][i]; }}
        else if(DBarr[0][i] == "Weapon7RangeShip"){ for (var j = 1; j < DBarr.length; j++) { UnitParser[j].Weapons[6].RangeShip = DBarr[j][i]; }}
        else if(DBarr[0][i] == "Weapon7RangeShipMinimum"){ for (var j = 1; j < DBarr.length; j++) { UnitParser[j].Weapons[6].RangeShipMinimum = DBarr[j][i]; }}
        else if(DBarr[0][i] == "Weapon7RayonPinned"){ for (var j = 1; j < DBarr.length; j++) { UnitParser[j].Weapons[6].RayonPinned = DBarr[j][i]; }}
        else if(DBarr[0][i] == "Weapon7ShotsPerSalvo"){ for (var j = 1; j < DBarr.length; j++) { UnitParser[j].Weapons[6].ShotsPerSalvo = DBarr[j][i]; }}
        else if(DBarr[0][i] == "Weapon7SupplyCost"){ for (var j = 1; j < DBarr.length; j++) { UnitParser[j].Weapons[6].SupplyCost = DBarr[j][i]; }}
        else if(DBarr[0][i] == "Weapon7Tags"){
            //separate tags (tag|tag|tag) into an array
                for (var j = 1; j < DBarr.length; j++) {
                    UnitParser[j].Weapons[6].Tags = DBarr[j][i];
                    var k = 0;
                    for (var l = 0; l< DBarr[j][i].length; l++){
                        if(DBarr[j][i].charAt(l) == "|"){
                            k++;
                        }
                        else{
                            UnitParser[j].Weapons[6].Tags[k] += DBarr[j][i].charAt(l);
                        }
                    }
                }
            }
        else if(DBarr[0][i] == "Weapon7TimeBetweenSalvos"){ for (var j = 1; j < DBarr.length; j++) { UnitParser[j].Weapons[6].TimeBetweenSalvos = DBarr[j][i]; }}
        else if(DBarr[0][i] == "Weapon7TimeBetweenShots"){ for (var j = 1; j < DBarr.length; j++) { UnitParser[j].Weapons[6].TimeBetweenShots = DBarr[j][i]; }}
        else if(DBarr[0][i] == "Weapon7Type"){ for (var j = 1; j < DBarr.length; j++) { UnitParser[j].Weapons[6].Type = DBarr[j][i]; }}
        else if(DBarr[0][i] == "Weapon8AP"){ for (var j = 1; j < DBarr.length; j++) { UnitParser[j].Weapons[7].AP = DBarr[j][i]; }}
        else if(DBarr[0][i] == "Weapon8AimTime"){ for (var j = 1; j < DBarr.length; j++) { UnitParser[j].Weapons[7].AimTime = DBarr[j][i]; }}
        else if(DBarr[0][i] == "Weapon8AngleDispersion"){ for (var j = 1; j < DBarr.length; j++) { UnitParser[j].Weapons[7].AngleDispersion = DBarr[j][i]; }}
        else if(DBarr[0][i] == "Weapon8Caliber"){ for (var j = 1; j < DBarr.length; j++) { UnitParser[j].Weapons[7].Caliber = DBarr[j][i]; }}
        else if(DBarr[0][i] == "Weapon8CanSmoke"){ for (var j = 1; j < DBarr.length; j++) { UnitParser[j].Weapons[7].CanSmoke = DBarr[j][i]; }}
        else if(DBarr[0][i] == "Weapon8CorrectedShotDispersionMultiplier"){ for (var j = 1; j < DBarr.length; j++) { UnitParser[j].Weapons[7].CorrectedShotDispersionMultiplier = DBarr[j][i]; }}
        else if(DBarr[0][i] == "Weapon8DispersionAtMaxRange"){ for (var j = 1; j < DBarr.length; j++) { UnitParser[j].Weapons[7].DispersionAtMaxRange = DBarr[j][i]; }}
        else if(DBarr[0][i] == "Weapon8DispersionAtMinRange"){ for (var j = 1; j < DBarr.length; j++) { UnitParser[j].Weapons[7].DispersionAtMinRange = DBarr[j][i]; }}
        else if(DBarr[0][i] == "Weapon8DisplayedAmmunition"){ for (var j = 1; j < DBarr.length; j++) { UnitParser[j].Weapons[7].DisplayedAmmunition = DBarr[j][i]; }}
        else if(DBarr[0][i] == "Weapon8FireTriggeringProbability"){ for (var j = 1; j < DBarr.length; j++) { UnitParser[j].Weapons[7].FireTriggeringProbability = DBarr[j][i]; }}
        else if(DBarr[0][i] == "Weapon8HE"){ for (var j = 1; j < DBarr.length; j++) { UnitParser[j].Weapons[7].HE = DBarr[j][i]; }}
        else if(DBarr[0][i] == "Weapon8HitProbability"){ for (var j = 1; j < DBarr.length; j++) { UnitParser[j].Weapons[7].HitProbability = DBarr[j][i]; }}
        else if(DBarr[0][i] == "Weapon8HitProbabilityWhileMoving"){ for (var j = 1; j < DBarr.length; j++) { UnitParser[j].Weapons[7].HitProbabilityWhileMoving = DBarr[j][i]; }}
        else if(DBarr[0][i] == "Weapon8MinimalCritProbability"){ for (var j = 1; j < DBarr.length; j++) { UnitParser[j].Weapons[7].MinimalCritProbability = DBarr[j][i]; }}
        else if(DBarr[0][i] == "Weapon8MinimalHitProbability"){ for (var j = 1; j < DBarr.length; j++) { UnitParser[j].Weapons[7].MinimalHitProbability = DBarr[j][i]; }}
        else if(DBarr[0][i] == "Weapon8MissileMaxAcceleration"){ for (var j = 1; j < DBarr.length; j++) { UnitParser[j].Weapons[7].MissileMaxAcceleration = DBarr[j][i]; }}
        else if(DBarr[0][i] == "Weapon8MissileMaxSpeed"){ for (var j = 1; j < DBarr.length; j++) { UnitParser[j].Weapons[7].MissileMaxSpeed = DBarr[j][i]; }}
        else if(DBarr[0][i] == "Weapon8MissileTimeBetweenCorrections"){ for (var j = 1; j < DBarr.length; j++) { UnitParser[j].Weapons[7].MissileTimeBetweenCorrections = DBarr[j][i]; }}
        else if(DBarr[0][i] == "Weapon8Name"){ for (var j = 1; j < DBarr.length; j++) { UnitParser[j].Weapons[7].Name = DBarr[j][i]; }}
        else if(DBarr[0][i] == "Weapon8Noise"){ for (var j = 1; j < DBarr.length; j++) { UnitParser[j].Weapons[7].Noise = DBarr[j][i]; }}
        else if(DBarr[0][i] == "Weapon8NumberOfSalvos"){ for (var j = 1; j < DBarr.length; j++) { UnitParser[j].Weapons[7].NumberOfSalvos = DBarr[j][i]; }}
        else if(DBarr[0][i] == "Weapon8PositionOnCard"){ for (var j = 1; j < DBarr.length; j++) { UnitParser[j].Weapons[7].PositionOnCard = DBarr[j][i]; }}
        else if(DBarr[0][i] == "Weapon8ProjectilesPerShot"){ for (var j = 1; j < DBarr.length; j++) { UnitParser[j].Weapons[7].ProjectilesPerShot = DBarr[j][i]; }}
        else if(DBarr[0][i] == "Weapon8RadiusSplashPhysicalDamage"){ for (var j = 1; j < DBarr.length; j++) { UnitParser[j].Weapons[7].RadiusSplashPhysicalDamage = DBarr[j][i]; }}
        else if(DBarr[0][i] == "Weapon8RadiusSplashSuppressDamage"){ for (var j = 1; j < DBarr.length; j++) { UnitParser[j].Weapons[7].RadiusSplashSuppressDamage = DBarr[j][i]; }}
        else if(DBarr[0][i] == "Weapon8RangeGround"){ for (var j = 1; j < DBarr.length; j++) { UnitParser[j].Weapons[7].RangeGround = DBarr[j][i]; }}
        else if(DBarr[0][i] == "Weapon8RangeGroundMinimum"){ for (var j = 1; j < DBarr.length; j++) { UnitParser[j].Weapons[7].RangeGroundMinimum = DBarr[j][i]; }}
        else if(DBarr[0][i] == "Weapon8RangeHelicopters"){ for (var j = 1; j < DBarr.length; j++) { UnitParser[j].Weapons[7].RangeHelicopters = DBarr[j][i]; }}
        else if(DBarr[0][i] == "Weapon8RangeHelicoptersMinimum"){ for (var j = 1; j < DBarr.length; j++) { UnitParser[j].Weapons[7].RangeHelicoptersMinimum = DBarr[j][i]; }}
        else if(DBarr[0][i] == "Weapon8RangeMissiles"){ for (var j = 1; j < DBarr.length; j++) { UnitParser[j].Weapons[7].RangeMissiles = DBarr[j][i]; }}
        else if(DBarr[0][i] == "Weapon8RangeMissilesMinimum"){ for (var j = 1; j < DBarr.length; j++) { UnitParser[j].Weapons[7].RangeMissilesMinimum = DBarr[j][i]; }}
        else if(DBarr[0][i] == "Weapon8RangePlanes"){ for (var j = 1; j < DBarr.length; j++) { UnitParser[j].Weapons[7].RangePlanes = DBarr[j][i]; }}
        else if(DBarr[0][i] == "Weapon8RangePlanesMinimum"){ for (var j = 1; j < DBarr.length; j++) { UnitParser[j].Weapons[7].RangePlanesMinimum = DBarr[j][i]; }}
        else if(DBarr[0][i] == "Weapon8RangeShip"){ for (var j = 1; j < DBarr.length; j++) { UnitParser[j].Weapons[7].RangeShip = DBarr[j][i]; }}
        else if(DBarr[0][i] == "Weapon8RangeShipMinimum"){ for (var j = 1; j < DBarr.length; j++) { UnitParser[j].Weapons[7].RangeShipMinimum = DBarr[j][i]; }}
        else if(DBarr[0][i] == "Weapon8RayonPinned"){ for (var j = 1; j < DBarr.length; j++) { UnitParser[j].Weapons[7].RayonPinned = DBarr[j][i]; }}
        else if(DBarr[0][i] == "Weapon8ShotsPerSalvo"){ for (var j = 1; j < DBarr.length; j++) { UnitParser[j].Weapons[7].ShotsPerSalvo = DBarr[j][i]; }}
        else if(DBarr[0][i] == "Weapon8SupplyCost"){ for (var j = 1; j < DBarr.length; j++) { UnitParser[j].Weapons[7].SupplyCost = DBarr[j][i]; }}
        else if(DBarr[0][i] == "Weapon8Tags"){
            //separate tags (tag|tag|tag) into an array
                for (var j = 1; j < DBarr.length; j++) {
                    UnitParser[j].Weapons[7].Tags = DBarr[j][i];
                    var k = 0;
                    for (var l = 0; l< DBarr[j][i].length; l++){
                        if(DBarr[j][i].charAt(l) == "|"){
                            k++;
                        }
                        else{
                            UnitParser[j].Weapons[7].Tags[k] += DBarr[j][i].charAt(l);
                        }
                    }
                }
            }
        else if(DBarr[0][i] == "Weapon8TimeBetweenSalvos"){ for (var j = 1; j < DBarr.length; j++) { UnitParser[j].Weapons[7].TimeBetweenSalvos = DBarr[j][i]; }}
        else if(DBarr[0][i] == "Weapon8TimeBetweenShots"){ for (var j = 1; j < DBarr.length; j++) { UnitParser[j].Weapons[7].TimeBetweenShots = DBarr[j][i]; }}
        else if(DBarr[0][i] == "Weapon8Type"){ for (var j = 1; j < DBarr.length; j++) { UnitParser[j].Weapons[7].Type = DBarr[j][i]; }}
        else if(DBarr[0][i] == "Weapon9AP"){ for (var j = 1; j < DBarr.length; j++) { UnitParser[j].Weapons[8].AP = DBarr[j][i]; }}
        else if(DBarr[0][i] == "Weapon9AimTime"){ for (var j = 1; j < DBarr.length; j++) { UnitParser[j].Weapons[8].AimTime = DBarr[j][i]; }}
        else if(DBarr[0][i] == "Weapon9AngleDispersion"){ for (var j = 1; j < DBarr.length; j++) { UnitParser[j].Weapons[8].AngleDispersion = DBarr[j][i]; }}
        else if(DBarr[0][i] == "Weapon9Caliber"){ for (var j = 1; j < DBarr.length; j++) { UnitParser[j].Weapons[8].Caliber = DBarr[j][i]; }}
        else if(DBarr[0][i] == "Weapon9CanSmoke"){ for (var j = 1; j < DBarr.length; j++) { UnitParser[j].Weapons[8].CanSmoke = DBarr[j][i]; }}
        else if(DBarr[0][i] == "Weapon9CorrectedShotDispersionMultiplier"){ for (var j = 1; j < DBarr.length; j++) { UnitParser[j].Weapons[8].CorrectedShotDispersionMultiplier = DBarr[j][i]; }}
        else if(DBarr[0][i] == "Weapon9DispersionAtMaxRange"){ for (var j = 1; j < DBarr.length; j++) { UnitParser[j].Weapons[8].DispersionAtMaxRange = DBarr[j][i]; }}
        else if(DBarr[0][i] == "Weapon9DispersionAtMinRange"){ for (var j = 1; j < DBarr.length; j++) { UnitParser[j].Weapons[8].DispersionAtMinRange = DBarr[j][i]; }}
        else if(DBarr[0][i] == "Weapon9DisplayedAmmunition"){ for (var j = 1; j < DBarr.length; j++) { UnitParser[j].Weapons[8].DisplayedAmmunition = DBarr[j][i]; }}
        else if(DBarr[0][i] == "Weapon9FireTriggeringProbability"){ for (var j = 1; j < DBarr.length; j++) { UnitParser[j].Weapons[8].FireTriggeringProbability = DBarr[j][i]; }}
        else if(DBarr[0][i] == "Weapon9HE"){ for (var j = 1; j < DBarr.length; j++) { UnitParser[j].Weapons[8].HE = DBarr[j][i]; }}
        else if(DBarr[0][i] == "Weapon9HitProbability"){ for (var j = 1; j < DBarr.length; j++) { UnitParser[j].Weapons[8].HitProbability = DBarr[j][i]; }}
        else if(DBarr[0][i] == "Weapon9HitProbabilityWhileMoving"){ for (var j = 1; j < DBarr.length; j++) { UnitParser[j].Weapons[8].HitProbabilityWhileMoving = DBarr[j][i]; }}
        else if(DBarr[0][i] == "Weapon9MinimalCritProbability"){ for (var j = 1; j < DBarr.length; j++) { UnitParser[j].Weapons[8].MinimalCritProbability = DBarr[j][i]; }}
        else if(DBarr[0][i] == "Weapon9MinimalHitProbability"){ for (var j = 1; j < DBarr.length; j++) { UnitParser[j].Weapons[8].MinimalHitProbability = DBarr[j][i]; }}
        else if(DBarr[0][i] == "Weapon9MissileTimeBetweenCorrections"){ for (var j = 1; j < DBarr.length; j++) { UnitParser[j].Weapons[8].MissileTimeBetweenCorrections = DBarr[j][i]; }}
        else if(DBarr[0][i] == "Weapon9Name"){ for (var j = 1; j < DBarr.length; j++) { UnitParser[j].Weapons[8].Name = DBarr[j][i]; }}
        else if(DBarr[0][i] == "Weapon9Noise"){ for (var j = 1; j < DBarr.length; j++) { UnitParser[j].Weapons[8].Noise = DBarr[j][i]; }}
        else if(DBarr[0][i] == "Weapon9NumberOfSalvos"){ for (var j = 1; j < DBarr.length; j++) { UnitParser[j].Weapons[8].NumberOfSalvos = DBarr[j][i]; }}
        else if(DBarr[0][i] == "Weapon9PositionOnCard"){ for (var j = 1; j < DBarr.length; j++) { UnitParser[j].Weapons[8].PositionOnCard = DBarr[j][i]; }}
        else if(DBarr[0][i] == "Weapon9ProjectilesPerShot"){ for (var j = 1; j < DBarr.length; j++) { UnitParser[j].Weapons[8].ProjectilesPerShot = DBarr[j][i]; }}
        else if(DBarr[0][i] == "Weapon9RadiusSplashPhysicalDamage"){ for (var j = 1; j < DBarr.length; j++) { UnitParser[j].Weapons[8].RadiusSplashPhysicalDamage = DBarr[j][i]; }}
        else if(DBarr[0][i] == "Weapon9RadiusSplashSuppressDamage"){ for (var j = 1; j < DBarr.length; j++) { UnitParser[j].Weapons[8].RadiusSplashSuppressDamage = DBarr[j][i]; }}
        else if(DBarr[0][i] == "Weapon9RangeGround"){ for (var j = 1; j < DBarr.length; j++) { UnitParser[j].Weapons[8].RangeGround = DBarr[j][i]; }}
        else if(DBarr[0][i] == "Weapon9RangeGroundMinimum"){ for (var j = 1; j < DBarr.length; j++) { UnitParser[j].Weapons[8].RangeGroundMinimum = DBarr[j][i]; }}
        else if(DBarr[0][i] == "Weapon9RangeHelicopters"){ for (var j = 1; j < DBarr.length; j++) { UnitParser[j].Weapons[8].RangeHelicopters = DBarr[j][i]; }}
        else if(DBarr[0][i] == "Weapon9RangeHelicoptersMinimum"){ for (var j = 1; j < DBarr.length; j++) { UnitParser[j].Weapons[8].RangeHelicoptersMinimum = DBarr[j][i]; }}
        else if(DBarr[0][i] == "Weapon9RangeMissiles"){ for (var j = 1; j < DBarr.length; j++) { UnitParser[j].Weapons[8].RangeMissiles = DBarr[j][i]; }}
        else if(DBarr[0][i] == "Weapon9RangeMissilesMinimum"){ for (var j = 1; j < DBarr.length; j++) { UnitParser[j].Weapons[8].RangeMissilesMinimum = DBarr[j][i]; }}
        else if(DBarr[0][i] == "Weapon9RangePlanes"){ for (var j = 1; j < DBarr.length; j++) { UnitParser[j].Weapons[8].RangePlanes = DBarr[j][i]; }}
        else if(DBarr[0][i] == "Weapon9RangePlanesMinimum"){ for (var j = 1; j < DBarr.length; j++) { UnitParser[j].Weapons[8].RangePlanesMinimum = DBarr[j][i]; }}
        else if(DBarr[0][i] == "Weapon9RangeShip"){ for (var j = 1; j < DBarr.length; j++) { UnitParser[j].Weapons[8].RangeShip = DBarr[j][i]; }}
        else if(DBarr[0][i] == "Weapon9RangeShipMinimum"){ for (var j = 1; j < DBarr.length; j++) { UnitParser[j].Weapons[8].RangeShipMinimum = DBarr[j][i]; }}
        else if(DBarr[0][i] == "Weapon9RayonPinned"){ for (var j = 1; j < DBarr.length; j++) { UnitParser[j].Weapons[8].RayonPinned = DBarr[j][i]; }}
        else if(DBarr[0][i] == "Weapon9ShotsPerSalvo"){ for (var j = 1; j < DBarr.length; j++) { UnitParser[j].Weapons[8].ShotsPerSalvo = DBarr[j][i]; }}
        else if(DBarr[0][i] == "Weapon9SupplyCost"){ for (var j = 1; j < DBarr.length; j++) { UnitParser[j].Weapons[8].SupplyCost = DBarr[j][i]; }}
        else if(DBarr[0][i] == "Weapon9Tags"){
            //separate tags (tag|tag|tag) into an array
                for (var j = 1; j < DBarr.length; j++) {
                    UnitParser[j].Weapons[8].Tags = DBarr[j][i];
                    var k = 0;
                    for (var l = 0; l< DBarr[j][i].length; l++){
                        if(DBarr[j][i].charAt(l) == "|"){
                            k++;
                        }
                        else{
                            UnitParser[j].Weapons[8].Tags[k] += DBarr[j][i].charAt(l);
                        }
                    }
                }
            }
        else if(DBarr[0][i] == "Weapon9TimeBetweenSalvos"){ for (var j = 1; j < DBarr.length; j++) { UnitParser[j].Weapons[8].TimeBetweenSalvos = DBarr[j][i]; }}
        else if(DBarr[0][i] == "Weapon9TimeBetweenShots"){ for (var j = 1; j < DBarr.length; j++) { UnitParser[j].Weapons[8].TimeBetweenShots = DBarr[j][i]; }}
        else if(DBarr[0][i] == "Weapon9Type"){ for (var j = 1; j < DBarr.length; j++) { UnitParser[j].Weapons[8].Type = DBarr[j][i]; }}
        else if(DBarr[0][i] == "Weapon10AP"){ for (var j = 1; j < DBarr.length; j++) { UnitParser[j].Weapons[9].AP = DBarr[j][i]; }}
        else if(DBarr[0][i] == "Weapon10AimTime"){ for (var j = 1; j < DBarr.length; j++) { UnitParser[j].Weapons[9].AimTime = DBarr[j][i]; }}
        else if(DBarr[0][i] == "Weapon10AngleDispersion"){ for (var j = 1; j < DBarr.length; j++) { UnitParser[j].Weapons[9].AngleDispersion = DBarr[j][i]; }}
        else if(DBarr[0][i] == "Weapon10Caliber"){ for (var j = 1; j < DBarr.length; j++) { UnitParser[j].Weapons[9].Caliber = DBarr[j][i]; }}
        else if(DBarr[0][i] == "Weapon10CanSmoke"){ for (var j = 1; j < DBarr.length; j++) { UnitParser[j].Weapons[9].CanSmoke = DBarr[j][i]; }}
        else if(DBarr[0][i] == "Weapon10CorrectedShotDispersionMultiplier"){ for (var j = 1; j < DBarr.length; j++) { UnitParser[j].Weapons[9].CorrectedShotDispersionMultiplier = DBarr[j][i]; }}
        else if(DBarr[0][i] == "Weapon10DispersionAtMaxRange"){ for (var j = 1; j < DBarr.length; j++) { UnitParser[j].Weapons[9].DispersionAtMaxRange = DBarr[j][i]; }}
        else if(DBarr[0][i] == "Weapon10DispersionAtMinRange"){ for (var j = 1; j < DBarr.length; j++) { UnitParser[j].Weapons[9].DispersionAtMinRange = DBarr[j][i]; }}
        else if(DBarr[0][i] == "Weapon10DisplayedAmmunition"){ for (var j = 1; j < DBarr.length; j++) { UnitParser[j].Weapons[9].DisplayedAmmunition = DBarr[j][i]; }}
        else if(DBarr[0][i] == "Weapon10FireTriggeringProbability"){ for (var j = 1; j < DBarr.length; j++) { UnitParser[j].Weapons[9].FireTriggeringProbability = DBarr[j][i]; }}
        else if(DBarr[0][i] == "Weapon10HE"){ for (var j = 1; j < DBarr.length; j++) { UnitParser[j].Weapons[9].HE = DBarr[j][i]; }}
        else if(DBarr[0][i] == "Weapon10HitProbability"){ for (var j = 1; j < DBarr.length; j++) { UnitParser[j].Weapons[9].HitProbability = DBarr[j][i]; }}
        else if(DBarr[0][i] == "Weapon10HitProbabilityWhileMoving"){ for (var j = 1; j < DBarr.length; j++) { UnitParser[j].Weapons[9].HitProbabilityWhileMoving = DBarr[j][i]; }}
        else if(DBarr[0][i] == "Weapon10MinimalCritProbability"){ for (var j = 1; j < DBarr.length; j++) { UnitParser[j].Weapons[9].MinimalCritProbability = DBarr[j][i]; }}
        else if(DBarr[0][i] == "Weapon10MinimalHitProbability"){ for (var j = 1; j < DBarr.length; j++) { UnitParser[j].Weapons[9].MinimalHitProbability = DBarr[j][i]; }}
        else if(DBarr[0][i] == "Weapon10MissileTimeBetweenCorrections"){ for (var j = 1; j < DBarr.length; j++) { UnitParser[j].Weapons[9].MissileTimeBetweenCorrections = DBarr[j][i]; }}
        else if(DBarr[0][i] == "Weapon10Name"){ for (var j = 1; j < DBarr.length; j++) { UnitParser[j].Weapons[9].Name = DBarr[j][i]; }}
        else if(DBarr[0][i] == "Weapon10Noise"){ for (var j = 1; j < DBarr.length; j++) { UnitParser[j].Weapons[9].Noise = DBarr[j][i]; }}
        else if(DBarr[0][i] == "Weapon10NumberOfSalvos"){ for (var j = 1; j < DBarr.length; j++) { UnitParser[j].Weapons[9].NumberOfSalvos = DBarr[j][i]; }}
        else if(DBarr[0][i] == "Weapon10PositionOnCard"){ for (var j = 1; j < DBarr.length; j++) { UnitParser[j].Weapons[9].PositionOnCard = DBarr[j][i]; }}
        else if(DBarr[0][i] == "Weapon10ProjectilesPerShot"){ for (var j = 1; j < DBarr.length; j++) { UnitParser[j].Weapons[9].ProjectilesPerShot = DBarr[j][i]; }}
        else if(DBarr[0][i] == "Weapon10RadiusSplashPhysicalDamage"){ for (var j = 1; j < DBarr.length; j++) { UnitParser[j].Weapons[9].RadiusSplashPhysicalDamage = DBarr[j][i]; }}
        else if(DBarr[0][i] == "Weapon10RadiusSplashSuppressDamage"){ for (var j = 1; j < DBarr.length; j++) { UnitParser[j].Weapons[9].RadiusSplashSuppressDamage = DBarr[j][i]; }}
        else if(DBarr[0][i] == "Weapon10RangeGround"){ for (var j = 1; j < DBarr.length; j++) { UnitParser[j].Weapons[9].RangeGround = DBarr[j][i]; }}
        else if(DBarr[0][i] == "Weapon10RangeGroundMinimum"){ for (var j = 1; j < DBarr.length; j++) { UnitParser[j].Weapons[9].RangeGroundMinimum = DBarr[j][i]; }}
        else if(DBarr[0][i] == "Weapon10RangeHelicopters"){ for (var j = 1; j < DBarr.length; j++) { UnitParser[j].Weapons[9].RangeHelicopters = DBarr[j][i]; }}
        else if(DBarr[0][i] == "Weapon10RangeHelicoptersMinimum"){ for (var j = 1; j < DBarr.length; j++) { UnitParser[j].Weapons[9].RangeHelicoptersMinimum = DBarr[j][i]; }}
        else if(DBarr[0][i] == "Weapon10RangeMissiles"){ for (var j = 1; j < DBarr.length; j++) { UnitParser[j].Weapons[9].RangeMissiles = DBarr[j][i]; }}
        else if(DBarr[0][i] == "Weapon10RangeMissilesMinimum"){ for (var j = 1; j < DBarr.length; j++) { UnitParser[j].Weapons[9].RangeMissilesMinimum = DBarr[j][i]; }}
        else if(DBarr[0][i] == "Weapon10RangePlanes"){ for (var j = 1; j < DBarr.length; j++) { UnitParser[j].Weapons[9].RangePlanes = DBarr[j][i]; }}
        else if(DBarr[0][i] == "Weapon10RangePlanesMinimum"){ for (var j = 1; j < DBarr.length; j++) { UnitParser[j].Weapons[9].RangePlanesMinimum = DBarr[j][i]; }}
        else if(DBarr[0][i] == "Weapon10RangeShip"){ for (var j = 1; j < DBarr.length; j++) { UnitParser[j].Weapons[9].RangeShip = DBarr[j][i]; }}
        else if(DBarr[0][i] == "Weapon10RangeShipMinimum"){ for (var j = 1; j < DBarr.length; j++) { UnitParser[j].Weapons[9].RangeShipMinimum = DBarr[j][i]; }}
        else if(DBarr[0][i] == "Weapon10RayonPinned"){ for (var j = 1; j < DBarr.length; j++) { UnitParser[j].Weapons[9].RayonPinned = DBarr[j][i]; }}
        else if(DBarr[0][i] == "Weapon10ShotsPerSalvo"){ for (var j = 1; j < DBarr.length; j++) { UnitParser[j].Weapons[9].ShotsPerSalvo = DBarr[j][i]; }}
        else if(DBarr[0][i] == "Weapon10SupplyCost"){ for (var j = 1; j < DBarr.length; j++) { UnitParser[j].Weapons[9].SupplyCost = DBarr[j][i]; }}
        else if(DBarr[0][i] == "Weapon10Tags"){
            //separate tags (tag|tag|tag) into an array
                for (var j = 1; j < DBarr.length; j++) {
                    UnitParser[j].Weapons[9].Tags = DBarr[j][i];
                    var k = 0;
                    for (var l = 0; l< DBarr[j][i].length; l++){
                        if(DBarr[j][i].charAt(l) == "|"){
                            k++;
                        }
                        else{
                            UnitParser[j].Weapons[9].Tags[k] += DBarr[j][i].charAt(l);
                        }
                    }
                }
            }
        else if(DBarr[0][i] == "Weapon10TimeBetweenSalvos"){ for (var j = 1; j < DBarr.length; j++) { UnitParser[j].Weapons[9].TimeBetweenSalvos = DBarr[j][i]; }}
        else if(DBarr[0][i] == "Weapon10TimeBetweenShots"){ for (var j = 1; j < DBarr.length; j++) { UnitParser[j].Weapons[9].TimeBetweenShots = DBarr[j][i]; }}
        else if(DBarr[0][i] == "Weapon10Type"){ for (var j = 1; j < DBarr.length; j++) { UnitParser[j].Weapons[9].Type = DBarr[j][i]; }}
        else if(DBarr[0][i] == "Weapon11AP"){ for (var j = 1; j < DBarr.length; j++) { UnitParser[j].Weapons[10].AP = DBarr[j][i]; }}
        else if(DBarr[0][i] == "Weapon11AimTime"){ for (var j = 1; j < DBarr.length; j++) { UnitParser[j].Weapons[10].AimTime = DBarr[j][i]; }}
        else if(DBarr[0][i] == "Weapon11AngleDispersion"){ for (var j = 1; j < DBarr.length; j++) { UnitParser[j].Weapons[10].AngleDispersion = DBarr[j][i]; }}
        else if(DBarr[0][i] == "Weapon11Caliber"){ for (var j = 1; j < DBarr.length; j++) { UnitParser[j].Weapons[10].Caliber = DBarr[j][i]; }}
        else if(DBarr[0][i] == "Weapon11CanSmoke"){ for (var j = 1; j < DBarr.length; j++) { UnitParser[j].Weapons[10].CanSmoke = DBarr[j][i]; }}
        else if(DBarr[0][i] == "Weapon11CorrectedShotDispersionMultiplier"){ for (var j = 1; j < DBarr.length; j++) { UnitParser[j].Weapons[10].CorrectedShotDispersionMultiplier = DBarr[j][i]; }}
        else if(DBarr[0][i] == "Weapon11DispersionAtMaxRange"){ for (var j = 1; j < DBarr.length; j++) { UnitParser[j].Weapons[10].DispersionAtMaxRange = DBarr[j][i]; }}
        else if(DBarr[0][i] == "Weapon11DispersionAtMinRange"){ for (var j = 1; j < DBarr.length; j++) { UnitParser[j].Weapons[10].DispersionAtMinRange = DBarr[j][i]; }}
        else if(DBarr[0][i] == "Weapon11DisplayedAmmunition"){ for (var j = 1; j < DBarr.length; j++) { UnitParser[j].Weapons[10].DisplayedAmmunition = DBarr[j][i]; }}
        else if(DBarr[0][i] == "Weapon11FireTriggeringProbability"){ for (var j = 1; j < DBarr.length; j++) { UnitParser[j].Weapons[10].FireTriggeringProbability = DBarr[j][i]; }}
        else if(DBarr[0][i] == "Weapon11HE"){ for (var j = 1; j < DBarr.length; j++) { UnitParser[j].Weapons[10].HE = DBarr[j][i]; }}
        else if(DBarr[0][i] == "Weapon11HitProbability"){ for (var j = 1; j < DBarr.length; j++) { UnitParser[j].Weapons[10].HitProbability = DBarr[j][i]; }}
        else if(DBarr[0][i] == "Weapon11HitProbabilityWhileMoving"){ for (var j = 1; j < DBarr.length; j++) { UnitParser[j].Weapons[10].HitProbabilityWhileMoving = DBarr[j][i]; }}
        else if(DBarr[0][i] == "Weapon11MinimalCritProbability"){ for (var j = 1; j < DBarr.length; j++) { UnitParser[j].Weapons[10].MinimalCritProbability = DBarr[j][i]; }}
        else if(DBarr[0][i] == "Weapon11MinimalHitProbability"){ for (var j = 1; j < DBarr.length; j++) { UnitParser[j].Weapons[10].MinimalHitProbability = DBarr[j][i]; }}
        else if(DBarr[0][i] == "Weapon11MissileTimeBetweenCorrections"){ for (var j = 1; j < DBarr.length; j++) { UnitParser[j].Weapons[10].MissileTimeBetweenCorrections = DBarr[j][i]; }}
        else if(DBarr[0][i] == "Weapon11Name"){ for (var j = 1; j < DBarr.length; j++) { UnitParser[j].Weapons[10].Name = DBarr[j][i]; }}
        else if(DBarr[0][i] == "Weapon11Noise"){ for (var j = 1; j < DBarr.length; j++) { UnitParser[j].Weapons[10].Noise = DBarr[j][i]; }}
        else if(DBarr[0][i] == "Weapon11NumberOfSalvos"){ for (var j = 1; j < DBarr.length; j++) { UnitParser[j].Weapons[10].NumberOfSalvos = DBarr[j][i]; }}
        else if(DBarr[0][i] == "Weapon11PositionOnCard"){ for (var j = 1; j < DBarr.length; j++) { UnitParser[j].Weapons[10].PositionOnCard = DBarr[j][i]; }}
        else if(DBarr[0][i] == "Weapon11ProjectilesPerShot"){ for (var j = 1; j < DBarr.length; j++) { UnitParser[j].Weapons[10].ProjectilesPerShot = DBarr[j][i]; }}
        else if(DBarr[0][i] == "Weapon11RadiusSplashPhysicalDamage"){ for (var j = 1; j < DBarr.length; j++) { UnitParser[j].Weapons[10].RadiusSplashPhysicalDamage = DBarr[j][i]; }}
        else if(DBarr[0][i] == "Weapon11RadiusSplashSuppressDamage"){ for (var j = 1; j < DBarr.length; j++) { UnitParser[j].Weapons[10].RadiusSplashSuppressDamage = DBarr[j][i]; }}
        else if(DBarr[0][i] == "Weapon11RangeGround"){ for (var j = 1; j < DBarr.length; j++) { UnitParser[j].Weapons[10].RangeGround = DBarr[j][i]; }}
        else if(DBarr[0][i] == "Weapon11RangeGroundMinimum"){ for (var j = 1; j < DBarr.length; j++) { UnitParser[j].Weapons[10].RangeGroundMinimum = DBarr[j][i]; }}
        else if(DBarr[0][i] == "Weapon11RangeHelicopters"){ for (var j = 1; j < DBarr.length; j++) { UnitParser[j].Weapons[10].RangeHelicopters = DBarr[j][i]; }}
        else if(DBarr[0][i] == "Weapon11RangeHelicoptersMinimum"){ for (var j = 1; j < DBarr.length; j++) { UnitParser[j].Weapons[10].RangeHelicoptersMinimum = DBarr[j][i]; }}
        else if(DBarr[0][i] == "Weapon11RangeMissiles"){ for (var j = 1; j < DBarr.length; j++) { UnitParser[j].Weapons[10].RangeMissiles = DBarr[j][i]; }}
        else if(DBarr[0][i] == "Weapon11RangeMissilesMinimum"){ for (var j = 1; j < DBarr.length; j++) { UnitParser[j].Weapons[10].RangeMissilesMinimum = DBarr[j][i]; }}
        else if(DBarr[0][i] == "Weapon11RangePlanes"){ for (var j = 1; j < DBarr.length; j++) { UnitParser[j].Weapons[10].RangePlanes = DBarr[j][i]; }}
        else if(DBarr[0][i] == "Weapon11RangePlanesMinimum"){ for (var j = 1; j < DBarr.length; j++) { UnitParser[j].Weapons[10].RangePlanesMinimum = DBarr[j][i]; }}
        else if(DBarr[0][i] == "Weapon11RangeShip"){ for (var j = 1; j < DBarr.length; j++) { UnitParser[j].Weapons[10].RangeShip = DBarr[j][i]; }}
        else if(DBarr[0][i] == "Weapon11RangeShipMinimum"){ for (var j = 1; j < DBarr.length; j++) { UnitParser[j].Weapons[10].RangeShipMinimum = DBarr[j][i]; }}
        else if(DBarr[0][i] == "Weapon11RayonPinned"){ for (var j = 1; j < DBarr.length; j++) { UnitParser[j].Weapons[10].RayonPinned = DBarr[j][i]; }}
        else if(DBarr[0][i] == "Weapon11ShotsPerSalvo"){ for (var j = 1; j < DBarr.length; j++) { UnitParser[j].Weapons[10].ShotsPerSalvo = DBarr[j][i]; }}
        else if(DBarr[0][i] == "Weapon11SupplyCost"){ for (var j = 1; j < DBarr.length; j++) { UnitParser[j].Weapons[10].SupplyCost = DBarr[j][i]; }}
        else if(DBarr[0][i] == "Weapon11Tags"){ for (var j = 1; j < DBarr.length; j++) { UnitParser[j].Weapons[10].Tags = DBarr[j][i]; }}
        else if(DBarr[0][i] == "Weapon11TimeBetweenSalvos"){ for (var j = 1; j < DBarr.length; j++) { UnitParser[j].Weapons[10].TimeBetweenSalvos = DBarr[j][i]; }}
        else if(DBarr[0][i] == "Weapon11TimeBetweenShots"){ for (var j = 1; j < DBarr.length; j++) { UnitParser[j].Weapons[10].TimeBetweenShots = DBarr[j][i]; }}
        else if(DBarr[0][i] == "Weapon11Type"){
            //separate tags (tag|tag|tag) into an array
                for (var j = 1; j < DBarr.length; j++) {
                    UnitParser[j].Weapons[10].Tags = DBarr[j][i];
                    var k = 0;
                    for (var l = 0; l< DBarr[j][i].length; l++){
                        if(DBarr[j][i].charAt(l) == "|"){
                            k++;
                        }
                        else{
                            UnitParser[j].Weapons[10].Tags[k] += DBarr[j][i].charAt(l);
                        }
                    }
                }
            }
    }
}

function AssignDeckCode(){
    window.UnitDatabase = [];
    window.UnitIdMin = 30000;
    window.UnitIdMax = 0;
    for (var i = 1;i < UnitParser.length; i++ ){
        if (UnitIdMax < UnitParser[i].ID){ UnitIdMax = UnitParser[i].ID;}
        if (UnitIdMin > UnitParser[i].ID){ UnitIdMin = UnitParser[i].ID;}
        UnitParser[i].DeckCode = IDpairs[UnitParser[i].ID];
        UnitDatabase[UnitParser[i].ID] = new UnitCopy(UnitParser[i]);
        if (IDpairs[UnitParser[i].ID].Card === 0){
            UnitDatabase[UnitParser[i].ID].IsTransporter = "True"; // deprecated units
        }
    }
    console.log("UnitIDMin:" + UnitIdMin);
    console.log("UnitIDMax:" + UnitIdMax);
}


function DisplayDB(tableData, type){
    var head = ractiveDB.get('DBhead');
    head = '';
    var body = ractiveDB.get('DBbody');
    body = '';
    var tmp = 0;
    //var table = document.getElementById('DBtable');
    //var tableBody = document.getElementById('DBbody');
    var tableArr = [];
    for (var j = 0; j < tableData.length; j++) {
        tableArr[j] = [];
    }
    /*console.log(tableArr);*/
    for (var i = 0; i < tableData[0].length; i++) {
        if((type == 1 && (tableData[0][i] == "Name" || tableData[0][i] == "Amphibious"))){
            console.log(tableData[0][i])  ;
            for (var k = 0; k < tableData.length; k++) {
                tableArr[k][tmp] = tableData[k][i];
                tmp++;
            }
        }
    }
    console.log(tableArr);
    var table = document.getElementById('DBtable');
    var tableBody = document.getElementById('DBbody');

    for (var i = 0; i < 2; i++) {
        var row = table.insertRow(i);
            for (var k = 0; k < tableArr[0].length; k++) {
                var cell = row.insertCell(k);
                cell.innerHTML = tableArr[i][k];
            }
    }
}
