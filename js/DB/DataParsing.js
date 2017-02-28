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
    });
    DataToObjects();
    AssignDeckCode();
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

    //fill instances with data.
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
                for (var j = 1; j < DBarr.length; j++) {
                    UnitParser[j].Transporters = DBarr[j][i];
                    var k = 0;
                    for (var l = 0; l< DBarr[j][i].length; l++){
                        if(DBarr[j][i].charAt(l) == "|"){
                            k++;
                        }
                        else{
                            UnitParser[j].Transporters[k] += DBarr[j][i].charAt(l);
                        }
                    }
                }
            }
        else if(DBarr[0][i] == "Decks"){
            //separate tags (tag|tag|tag) into an array
                for (var j = 1; j < DBarr.length; j++) {
                    UnitParser[j].Decks = DBarr[j][i];
                    var k = 0;
                    for (var l = 0; l< DBarr[j][i].length; l++){
                        if(DBarr[j][i].charAt(l) == "|"){
                            k++;
                        }
                        else{
                            UnitParser[j].Decks[k] += DBarr[j][i].charAt(l);
                        }
                    }
                }
            }
        else if(DBarr[0][i] == "Weapon1AP"){ for (var j = 1; j < DBarr.length; j++) { UnitParser[j].Weapon1AP = DBarr[j][i]; }}
        else if(DBarr[0][i] == "Weapon1AimTime"){ for (var j = 1; j < DBarr.length; j++) { UnitParser[j].Weapon1AimTime = DBarr[j][i]; }}
        else if(DBarr[0][i] == "Weapon1AngleDispersion"){ for (var j = 1; j < DBarr.length; j++) { UnitParser[j].Weapon1AngleDispersion = DBarr[j][i]; }}
        else if(DBarr[0][i] == "Weapon1Caliber"){ for (var j = 1; j < DBarr.length; j++) { UnitParser[j].Weapon1Caliber = DBarr[j][i]; }}
        else if(DBarr[0][i] == "Weapon1CanSmoke"){ for (var j = 1; j < DBarr.length; j++) { UnitParser[j].Weapon1CanSmoke = DBarr[j][i]; }}
        else if(DBarr[0][i] == "Weapon1CorrectedShotDispersionMultiplier"){ for (var j = 1; j < DBarr.length; j++) { UnitParser[j].Weapon1CorrectedShotDispersionMultiplier = DBarr[j][i]; }}
        else if(DBarr[0][i] == "Weapon1DispersionAtMaxRange"){ for (var j = 1; j < DBarr.length; j++) { UnitParser[j].Weapon1DispersionAtMaxRange = DBarr[j][i]; }}
        else if(DBarr[0][i] == "Weapon1DispersionAtMinRange"){ for (var j = 1; j < DBarr.length; j++) { UnitParser[j].Weapon1DispersionAtMinRange = DBarr[j][i]; }}
        else if(DBarr[0][i] == "Weapon1DisplayedAmmunition"){ for (var j = 1; j < DBarr.length; j++) { UnitParser[j].Weapon1DisplayedAmmunition = DBarr[j][i]; }}
        else if(DBarr[0][i] == "Weapon1FireTriggeringProbability"){ for (var j = 1; j < DBarr.length; j++) { UnitParser[j].Weapon1FireTriggeringProbability = DBarr[j][i]; }}
        else if(DBarr[0][i] == "Weapon1HE"){ for (var j = 1; j < DBarr.length; j++) { UnitParser[j].Weapon1HE = DBarr[j][i]; }}
        else if(DBarr[0][i] == "Weapon1HitProbability"){ for (var j = 1; j < DBarr.length; j++) { UnitParser[j].Weapon1HitProbability = DBarr[j][i]; }}
        else if(DBarr[0][i] == "Weapon1HitProbabilityWhileMoving"){ for (var j = 1; j < DBarr.length; j++) { UnitParser[j].Weapon1HitProbabilityWhileMoving = DBarr[j][i]; }}
        else if(DBarr[0][i] == "Weapon1MinimalCritProbability"){ for (var j = 1; j < DBarr.length; j++) { UnitParser[j].Weapon1MinimalCritProbability = DBarr[j][i]; }}
        else if(DBarr[0][i] == "Weapon1MinimalHitProbability"){ for (var j = 1; j < DBarr.length; j++) { UnitParser[j].Weapon1MinimalHitProbability = DBarr[j][i]; }}
        else if(DBarr[0][i] == "Weapon1MissileMaxAcceleration"){ for (var j = 1; j < DBarr.length; j++) { UnitParser[j].Weapon1MissileMaxAcceleration = DBarr[j][i]; }}
        else if(DBarr[0][i] == "Weapon1MissileMaxSpeed"){ for (var j = 1; j < DBarr.length; j++) { UnitParser[j].Weapon1MissileMaxSpeed = DBarr[j][i]; }}
        else if(DBarr[0][i] == "Weapon1MissileTimeBetweenCorrections"){ for (var j = 1; j < DBarr.length; j++) { UnitParser[j].Weapon1MissileTimeBetweenCorrections = DBarr[j][i]; }}
        else if(DBarr[0][i] == "Weapon1Name"){ for (var j = 1; j < DBarr.length; j++) { UnitParser[j].Weapon1Name = DBarr[j][i]; }}
        else if(DBarr[0][i] == "Weapon1Noise"){ for (var j = 1; j < DBarr.length; j++) { UnitParser[j].Weapon1Noise = DBarr[j][i]; }}
        else if(DBarr[0][i] == "Weapon1NumberOfSalvos"){ for (var j = 1; j < DBarr.length; j++) { UnitParser[j].Weapon1NumberOfSalvos = DBarr[j][i]; }}
        else if(DBarr[0][i] == "Weapon1PositionOnCard"){ for (var j = 1; j < DBarr.length; j++) { UnitParser[j].Weapon1PositionOnCard = DBarr[j][i]; }}
        else if(DBarr[0][i] == "Weapon1ProjectilesPerShot"){ for (var j = 1; j < DBarr.length; j++) { UnitParser[j].Weapon1ProjectilesPerShot = DBarr[j][i]; }}
        else if(DBarr[0][i] == "Weapon1RadiusSplashPhysicalDamage"){ for (var j = 1; j < DBarr.length; j++) { UnitParser[j].Weapon1RadiusSplashPhysicalDamage = DBarr[j][i]; }}
        else if(DBarr[0][i] == "Weapon1RadiusSplashSuppressDamage"){ for (var j = 1; j < DBarr.length; j++) { UnitParser[j].Weapon1RadiusSplashSuppressDamage = DBarr[j][i]; }}
        else if(DBarr[0][i] == "Weapon1RangeGround"){ for (var j = 1; j < DBarr.length; j++) { UnitParser[j].Weapon1RangeGround = DBarr[j][i]; }}
        else if(DBarr[0][i] == "Weapon1RangeGroundMinimum"){ for (var j = 1; j < DBarr.length; j++) { UnitParser[j].Weapon1RangeGroundMinimum = DBarr[j][i]; }}
        else if(DBarr[0][i] == "Weapon1RangeHelicopters"){ for (var j = 1; j < DBarr.length; j++) { UnitParser[j].Weapon1RangeHelicopters = DBarr[j][i]; }}
        else if(DBarr[0][i] == "Weapon1RangeHelicoptersMinimum"){ for (var j = 1; j < DBarr.length; j++) { UnitParser[j].Weapon1RangeHelicoptersMinimum = DBarr[j][i]; }}
        else if(DBarr[0][i] == "Weapon1RangeMissiles"){ for (var j = 1; j < DBarr.length; j++) { UnitParser[j].Weapon1RangeMissiles = DBarr[j][i]; }}
        else if(DBarr[0][i] == "Weapon1RangeMissilesMinimum"){ for (var j = 1; j < DBarr.length; j++) { UnitParser[j].Weapon1RangeMissilesMinimum = DBarr[j][i]; }}
        else if(DBarr[0][i] == "Weapon1RangePlanes"){ for (var j = 1; j < DBarr.length; j++) { UnitParser[j].Weapon1RangePlanes = DBarr[j][i]; }}
        else if(DBarr[0][i] == "Weapon1RangePlanesMinimum"){ for (var j = 1; j < DBarr.length; j++) { UnitParser[j].Weapon1RangePlanesMinimum = DBarr[j][i]; }}
        else if(DBarr[0][i] == "Weapon1RangeShip"){ for (var j = 1; j < DBarr.length; j++) { UnitParser[j].Weapon1RangeShip = DBarr[j][i]; }}
        else if(DBarr[0][i] == "Weapon1RangeShipMinimum"){ for (var j = 1; j < DBarr.length; j++) { UnitParser[j].Weapon1RangeShipMinimum = DBarr[j][i]; }}
        else if(DBarr[0][i] == "Weapon1RayonPinned"){ for (var j = 1; j < DBarr.length; j++) { UnitParser[j].Weapon1RayonPinned = DBarr[j][i]; }}
        else if(DBarr[0][i] == "Weapon1ShotsPerSalvo"){ for (var j = 1; j < DBarr.length; j++) { UnitParser[j].Weapon1ShotsPerSalvo = DBarr[j][i]; }}
        else if(DBarr[0][i] == "Weapon1SupplyCost"){ for (var j = 1; j < DBarr.length; j++) { UnitParser[j].Weapon1SupplyCost = DBarr[j][i]; }}
        else if(DBarr[0][i] == "Weapon1Tags"){
            //separate tags (tag|tag|tag) into an array
                for (var j = 1; j < DBarr.length; j++) {
                    UnitParser[j].Weapon1Tags = DBarr[j][i];
                    var k = 0;
                    for (var l = 0; l< DBarr[j][i].length; l++){
                        if(DBarr[j][i].charAt(l) == "|"){
                            k++;
                        }
                        else{
                            UnitParser[j].Weapon1Tags[k] += DBarr[j][i].charAt(l);
                        }
                    }
                }
            }
        else if(DBarr[0][i] == "Weapon1TimeBetweenSalvos"){ for (var j = 1; j < DBarr.length; j++) { UnitParser[j].Weapon1TimeBetweenSalvos = DBarr[j][i]; }}
        else if(DBarr[0][i] == "Weapon1TimeBetweenShots"){ for (var j = 1; j < DBarr.length; j++) { UnitParser[j].Weapon1TimeBetweenShots = DBarr[j][i]; }}
        else if(DBarr[0][i] == "Weapon1Type"){ for (var j = 1; j < DBarr.length; j++) { UnitParser[j].Weapon1Type = DBarr[j][i]; }}
        else if(DBarr[0][i] == "Weapon2AP"){ for (var j = 1; j < DBarr.length; j++) { UnitParser[j].Weapon2AP = DBarr[j][i]; }}
        else if(DBarr[0][i] == "Weapon2AimTime"){ for (var j = 1; j < DBarr.length; j++) { UnitParser[j].Weapon2AimTime = DBarr[j][i]; }}
        else if(DBarr[0][i] == "Weapon2AngleDispersion"){ for (var j = 1; j < DBarr.length; j++) { UnitParser[j].Weapon2AngleDispersion = DBarr[j][i]; }}
        else if(DBarr[0][i] == "Weapon2Caliber"){ for (var j = 1; j < DBarr.length; j++) { UnitParser[j].Weapon2Caliber = DBarr[j][i]; }}
        else if(DBarr[0][i] == "Weapon2CanSmoke"){ for (var j = 1; j < DBarr.length; j++) { UnitParser[j].Weapon2CanSmoke = DBarr[j][i]; }}
        else if(DBarr[0][i] == "Weapon2CorrectedShotDispersionMultiplier"){ for (var j = 1; j < DBarr.length; j++) { UnitParser[j].Weapon2CorrectedShotDispersionMultiplier = DBarr[j][i]; }}
        else if(DBarr[0][i] == "Weapon2DispersionAtMaxRange"){ for (var j = 1; j < DBarr.length; j++) { UnitParser[j].Weapon2DispersionAtMaxRange = DBarr[j][i]; }}
        else if(DBarr[0][i] == "Weapon2DispersionAtMinRange"){ for (var j = 1; j < DBarr.length; j++) { UnitParser[j].Weapon2DispersionAtMinRange = DBarr[j][i]; }}
        else if(DBarr[0][i] == "Weapon2DisplayedAmmunition"){ for (var j = 1; j < DBarr.length; j++) { UnitParser[j].Weapon2DisplayedAmmunition = DBarr[j][i]; }}
        else if(DBarr[0][i] == "Weapon2FireTriggeringProbability"){ for (var j = 1; j < DBarr.length; j++) { UnitParser[j].Weapon2FireTriggeringProbability = DBarr[j][i]; }}
        else if(DBarr[0][i] == "Weapon2HE"){ for (var j = 1; j < DBarr.length; j++) { UnitParser[j].Weapon2HE = DBarr[j][i]; }}
        else if(DBarr[0][i] == "Weapon2HitProbability"){ for (var j = 1; j < DBarr.length; j++) { UnitParser[j].Weapon2HitProbability = DBarr[j][i]; }}
        else if(DBarr[0][i] == "Weapon2HitProbabilityWhileMoving"){ for (var j = 1; j < DBarr.length; j++) { UnitParser[j].Weapon2HitProbabilityWhileMoving = DBarr[j][i]; }}
        else if(DBarr[0][i] == "Weapon2MinimalCritProbability"){ for (var j = 1; j < DBarr.length; j++) { UnitParser[j].Weapon2MinimalCritProbability = DBarr[j][i]; }}
        else if(DBarr[0][i] == "Weapon2MinimalHitProbability"){ for (var j = 1; j < DBarr.length; j++) { UnitParser[j].Weapon2MinimalHitProbability = DBarr[j][i]; }}
        else if(DBarr[0][i] == "Weapon2MissileMaxAcceleration"){ for (var j = 1; j < DBarr.length; j++) { UnitParser[j].Weapon2MissileMaxAcceleration = DBarr[j][i]; }}
        else if(DBarr[0][i] == "Weapon2MissileMaxSpeed"){ for (var j = 1; j < DBarr.length; j++) { UnitParser[j].Weapon2MissileMaxSpeed = DBarr[j][i]; }}
        else if(DBarr[0][i] == "Weapon2MissileTimeBetweenCorrections"){ for (var j = 1; j < DBarr.length; j++) { UnitParser[j].Weapon2MissileTimeBetweenCorrections = DBarr[j][i]; }}
        else if(DBarr[0][i] == "Weapon2Name"){ for (var j = 1; j < DBarr.length; j++) { UnitParser[j].Weapon2Name = DBarr[j][i]; }}
        else if(DBarr[0][i] == "Weapon2Noise"){ for (var j = 1; j < DBarr.length; j++) { UnitParser[j].Weapon2Noise = DBarr[j][i]; }}
        else if(DBarr[0][i] == "Weapon2NumberOfSalvos"){ for (var j = 1; j < DBarr.length; j++) { UnitParser[j].Weapon2NumberOfSalvos = DBarr[j][i]; }}
        else if(DBarr[0][i] == "Weapon2PositionOnCard"){ for (var j = 1; j < DBarr.length; j++) { UnitParser[j].Weapon2PositionOnCard = DBarr[j][i]; }}
        else if(DBarr[0][i] == "Weapon2ProjectilesPerShot"){ for (var j = 1; j < DBarr.length; j++) { UnitParser[j].Weapon2ProjectilesPerShot = DBarr[j][i]; }}
        else if(DBarr[0][i] == "Weapon2RadiusSplashPhysicalDamage"){ for (var j = 1; j < DBarr.length; j++) { UnitParser[j].Weapon2RadiusSplashPhysicalDamage = DBarr[j][i]; }}
        else if(DBarr[0][i] == "Weapon2RadiusSplashSuppressDamage"){ for (var j = 1; j < DBarr.length; j++) { UnitParser[j].Weapon2RadiusSplashSuppressDamage = DBarr[j][i]; }}
        else if(DBarr[0][i] == "Weapon2RangeGround"){ for (var j = 1; j < DBarr.length; j++) { UnitParser[j].Weapon2RangeGround = DBarr[j][i]; }}
        else if(DBarr[0][i] == "Weapon2RangeGroundMinimum"){ for (var j = 1; j < DBarr.length; j++) { UnitParser[j].Weapon2RangeGroundMinimum = DBarr[j][i]; }}
        else if(DBarr[0][i] == "Weapon2RangeHelicopters"){ for (var j = 1; j < DBarr.length; j++) { UnitParser[j].Weapon2RangeHelicopters = DBarr[j][i]; }}
        else if(DBarr[0][i] == "Weapon2RangeHelicoptersMinimum"){ for (var j = 1; j < DBarr.length; j++) { UnitParser[j].Weapon2RangeHelicoptersMinimum = DBarr[j][i]; }}
        else if(DBarr[0][i] == "Weapon2RangeMissiles"){ for (var j = 1; j < DBarr.length; j++) { UnitParser[j].Weapon2RangeMissiles = DBarr[j][i]; }}
        else if(DBarr[0][i] == "Weapon2RangeMissilesMinimum"){ for (var j = 1; j < DBarr.length; j++) { UnitParser[j].Weapon2RangeMissilesMinimum = DBarr[j][i]; }}
        else if(DBarr[0][i] == "Weapon2RangePlanes"){ for (var j = 1; j < DBarr.length; j++) { UnitParser[j].Weapon2RangePlanes = DBarr[j][i]; }}
        else if(DBarr[0][i] == "Weapon2RangePlanesMinimum"){ for (var j = 1; j < DBarr.length; j++) { UnitParser[j].Weapon2RangePlanesMinimum = DBarr[j][i]; }}
        else if(DBarr[0][i] == "Weapon2RangeShip"){ for (var j = 1; j < DBarr.length; j++) { UnitParser[j].Weapon2RangeShip = DBarr[j][i]; }}
        else if(DBarr[0][i] == "Weapon2RangeShipMinimum"){ for (var j = 1; j < DBarr.length; j++) { UnitParser[j].Weapon2RangeShipMinimum = DBarr[j][i]; }}
        else if(DBarr[0][i] == "Weapon2RayonPinned"){ for (var j = 1; j < DBarr.length; j++) { UnitParser[j].Weapon2RayonPinned = DBarr[j][i]; }}
        else if(DBarr[0][i] == "Weapon2ShotsPerSalvo"){ for (var j = 1; j < DBarr.length; j++) { UnitParser[j].Weapon2ShotsPerSalvo = DBarr[j][i]; }}
        else if(DBarr[0][i] == "Weapon2SupplyCost"){ for (var j = 1; j < DBarr.length; j++) { UnitParser[j].Weapon2SupplyCost = DBarr[j][i]; }}
        else if(DBarr[0][i] == "Weapon2Tags"){
            //separate tags (tag|tag|tag) into an array
                for (var j = 1; j < DBarr.length; j++) {
                    UnitParser[j].Weapon2Tags = DBarr[j][i];
                    var k = 0;
                    for (var l = 0; l< DBarr[j][i].length; l++){
                        if(DBarr[j][i].charAt(l) == "|"){
                            k++;
                        }
                        else{
                            UnitParser[j].Weapon2Tags[k] += DBarr[j][i].charAt(l);
                        }
                    }
                }
            }
        else if(DBarr[0][i] == "Weapon2TimeBetweenSalvos"){ for (var j = 1; j < DBarr.length; j++) { UnitParser[j].Weapon2TimeBetweenSalvos = DBarr[j][i]; }}
        else if(DBarr[0][i] == "Weapon2TimeBetweenShots"){ for (var j = 1; j < DBarr.length; j++) { UnitParser[j].Weapon2TimeBetweenShots = DBarr[j][i]; }}
        else if(DBarr[0][i] == "Weapon2Type"){ for (var j = 1; j < DBarr.length; j++) { UnitParser[j].Weapon2Type = DBarr[j][i]; }}
        else if(DBarr[0][i] == "Weapon3AP"){ for (var j = 1; j < DBarr.length; j++) { UnitParser[j].Weapon3AP = DBarr[j][i]; }}
        else if(DBarr[0][i] == "Weapon3AimTime"){ for (var j = 1; j < DBarr.length; j++) { UnitParser[j].Weapon3AimTime = DBarr[j][i]; }}
        else if(DBarr[0][i] == "Weapon3AngleDispersion"){ for (var j = 1; j < DBarr.length; j++) { UnitParser[j].Weapon3AngleDispersion = DBarr[j][i]; }}
        else if(DBarr[0][i] == "Weapon3Caliber"){ for (var j = 1; j < DBarr.length; j++) { UnitParser[j].Weapon3Caliber = DBarr[j][i]; }}
        else if(DBarr[0][i] == "Weapon3CanSmoke"){ for (var j = 1; j < DBarr.length; j++) { UnitParser[j].Weapon3CanSmoke = DBarr[j][i]; }}
        else if(DBarr[0][i] == "Weapon3CorrectedShotDispersionMultiplier"){ for (var j = 1; j < DBarr.length; j++) { UnitParser[j].Weapon3CorrectedShotDispersionMultiplier = DBarr[j][i]; }}
        else if(DBarr[0][i] == "Weapon3DispersionAtMaxRange"){ for (var j = 1; j < DBarr.length; j++) { UnitParser[j].Weapon3DispersionAtMaxRange = DBarr[j][i]; }}
        else if(DBarr[0][i] == "Weapon3DispersionAtMinRange"){ for (var j = 1; j < DBarr.length; j++) { UnitParser[j].Weapon3DispersionAtMinRange = DBarr[j][i]; }}
        else if(DBarr[0][i] == "Weapon3DisplayedAmmunition"){ for (var j = 1; j < DBarr.length; j++) { UnitParser[j].Weapon3DisplayedAmmunition = DBarr[j][i]; }}
        else if(DBarr[0][i] == "Weapon3FireTriggeringProbability"){ for (var j = 1; j < DBarr.length; j++) { UnitParser[j].Weapon3FireTriggeringProbability = DBarr[j][i]; }}
        else if(DBarr[0][i] == "Weapon3HE"){ for (var j = 1; j < DBarr.length; j++) { UnitParser[j].Weapon3HE = DBarr[j][i]; }}
        else if(DBarr[0][i] == "Weapon3HitProbability"){ for (var j = 1; j < DBarr.length; j++) { UnitParser[j].Weapon3HitProbability = DBarr[j][i]; }}
        else if(DBarr[0][i] == "Weapon3HitProbabilityWhileMoving"){ for (var j = 1; j < DBarr.length; j++) { UnitParser[j].Weapon3HitProbabilityWhileMoving = DBarr[j][i]; }}
        else if(DBarr[0][i] == "Weapon3MinimalCritProbability"){ for (var j = 1; j < DBarr.length; j++) { UnitParser[j].Weapon3MinimalCritProbability = DBarr[j][i]; }}
        else if(DBarr[0][i] == "Weapon3MinimalHitProbability"){ for (var j = 1; j < DBarr.length; j++) { UnitParser[j].Weapon3MinimalHitProbability = DBarr[j][i]; }}
        else if(DBarr[0][i] == "Weapon3MissileMaxAcceleration"){ for (var j = 1; j < DBarr.length; j++) { UnitParser[j].Weapon3MissileMaxAcceleration = DBarr[j][i]; }}
        else if(DBarr[0][i] == "Weapon3MissileMaxSpeed"){ for (var j = 1; j < DBarr.length; j++) { UnitParser[j].Weapon3MissileMaxSpeed = DBarr[j][i]; }}
        else if(DBarr[0][i] == "Weapon3MissileTimeBetweenCorrections"){ for (var j = 1; j < DBarr.length; j++) { UnitParser[j].Weapon3MissileTimeBetweenCorrections = DBarr[j][i]; }}
        else if(DBarr[0][i] == "Weapon3Name"){ for (var j = 1; j < DBarr.length; j++) { UnitParser[j].Weapon3Name = DBarr[j][i]; }}
        else if(DBarr[0][i] == "Weapon3Noise"){ for (var j = 1; j < DBarr.length; j++) { UnitParser[j].Weapon3Noise = DBarr[j][i]; }}
        else if(DBarr[0][i] == "Weapon3NumberOfSalvos"){ for (var j = 1; j < DBarr.length; j++) { UnitParser[j].Weapon3NumberOfSalvos = DBarr[j][i]; }}
        else if(DBarr[0][i] == "Weapon3PositionOnCard"){ for (var j = 1; j < DBarr.length; j++) { UnitParser[j].Weapon3PositionOnCard = DBarr[j][i]; }}
        else if(DBarr[0][i] == "Weapon3ProjectilesPerShot"){ for (var j = 1; j < DBarr.length; j++) { UnitParser[j].Weapon3ProjectilesPerShot = DBarr[j][i]; }}
        else if(DBarr[0][i] == "Weapon3RadiusSplashPhysicalDamage"){ for (var j = 1; j < DBarr.length; j++) { UnitParser[j].Weapon3RadiusSplashPhysicalDamage = DBarr[j][i]; }}
        else if(DBarr[0][i] == "Weapon3RadiusSplashSuppressDamage"){ for (var j = 1; j < DBarr.length; j++) { UnitParser[j].Weapon3RadiusSplashSuppressDamage = DBarr[j][i]; }}
        else if(DBarr[0][i] == "Weapon3RangeGround"){ for (var j = 1; j < DBarr.length; j++) { UnitParser[j].Weapon3RangeGround = DBarr[j][i]; }}
        else if(DBarr[0][i] == "Weapon3RangeGroundMinimum"){ for (var j = 1; j < DBarr.length; j++) { UnitParser[j].Weapon3RangeGroundMinimum = DBarr[j][i]; }}
        else if(DBarr[0][i] == "Weapon3RangeHelicopters"){ for (var j = 1; j < DBarr.length; j++) { UnitParser[j].Weapon3RangeHelicopters = DBarr[j][i]; }}
        else if(DBarr[0][i] == "Weapon3RangeHelicoptersMinimum"){ for (var j = 1; j < DBarr.length; j++) { UnitParser[j].Weapon3RangeHelicoptersMinimum = DBarr[j][i]; }}
        else if(DBarr[0][i] == "Weapon3RangeMissiles"){ for (var j = 1; j < DBarr.length; j++) { UnitParser[j].Weapon3RangeMissiles = DBarr[j][i]; }}
        else if(DBarr[0][i] == "Weapon3RangeMissilesMinimum"){ for (var j = 1; j < DBarr.length; j++) { UnitParser[j].Weapon3RangeMissilesMinimum = DBarr[j][i]; }}
        else if(DBarr[0][i] == "Weapon3RangePlanes"){ for (var j = 1; j < DBarr.length; j++) { UnitParser[j].Weapon3RangePlanes = DBarr[j][i]; }}
        else if(DBarr[0][i] == "Weapon3RangePlanesMinimum"){ for (var j = 1; j < DBarr.length; j++) { UnitParser[j].Weapon3RangePlanesMinimum = DBarr[j][i]; }}
        else if(DBarr[0][i] == "Weapon3RangeShip"){ for (var j = 1; j < DBarr.length; j++) { UnitParser[j].Weapon3RangeShip = DBarr[j][i]; }}
        else if(DBarr[0][i] == "Weapon3RangeShipMinimum"){ for (var j = 1; j < DBarr.length; j++) { UnitParser[j].Weapon3RangeShipMinimum = DBarr[j][i]; }}
        else if(DBarr[0][i] == "Weapon3RayonPinned"){ for (var j = 1; j < DBarr.length; j++) { UnitParser[j].Weapon3RayonPinned = DBarr[j][i]; }}
        else if(DBarr[0][i] == "Weapon3ShotsPerSalvo"){ for (var j = 1; j < DBarr.length; j++) { UnitParser[j].Weapon3ShotsPerSalvo = DBarr[j][i]; }}
        else if(DBarr[0][i] == "Weapon3SupplyCost"){ for (var j = 1; j < DBarr.length; j++) { UnitParser[j].Weapon3SupplyCost = DBarr[j][i]; }}
        else if(DBarr[0][i] == "Weapon3Tags"){
            //separate tags (tag|tag|tag) into an array
                for (var j = 1; j < DBarr.length; j++) {
                    UnitParser[j].Weapon3Tags = DBarr[j][i];
                    var k = 0;
                    for (var l = 0; l< DBarr[j][i].length; l++){
                        if(DBarr[j][i].charAt(l) == "|"){
                            k++;
                        }
                        else{
                            UnitParser[j].Weapon3Tags[k] += DBarr[j][i].charAt(l);
                        }
                    }
                }
            }
        else if(DBarr[0][i] == "Weapon3TimeBetweenSalvos"){ for (var j = 1; j < DBarr.length; j++) { UnitParser[j].Weapon3TimeBetweenSalvos = DBarr[j][i]; }}
        else if(DBarr[0][i] == "Weapon3TimeBetweenShots"){ for (var j = 1; j < DBarr.length; j++) { UnitParser[j].Weapon3TimeBetweenShots = DBarr[j][i]; }}
        else if(DBarr[0][i] == "Weapon3Type"){ for (var j = 1; j < DBarr.length; j++) { UnitParser[j].Weapon3Type = DBarr[j][i]; }}
        else if(DBarr[0][i] == "Weapon4AP"){ for (var j = 1; j < DBarr.length; j++) { UnitParser[j].Weapon4AP = DBarr[j][i]; }}
        else if(DBarr[0][i] == "Weapon4AimTime"){ for (var j = 1; j < DBarr.length; j++) { UnitParser[j].Weapon4AimTime = DBarr[j][i]; }}
        else if(DBarr[0][i] == "Weapon4AngleDispersion"){ for (var j = 1; j < DBarr.length; j++) { UnitParser[j].Weapon4AngleDispersion = DBarr[j][i]; }}
        else if(DBarr[0][i] == "Weapon4Caliber"){ for (var j = 1; j < DBarr.length; j++) { UnitParser[j].Weapon4Caliber = DBarr[j][i]; }}
        else if(DBarr[0][i] == "Weapon4CanSmoke"){ for (var j = 1; j < DBarr.length; j++) { UnitParser[j].Weapon4CanSmoke = DBarr[j][i]; }}
        else if(DBarr[0][i] == "Weapon4CorrectedShotDispersionMultiplier"){ for (var j = 1; j < DBarr.length; j++) { UnitParser[j].Weapon4CorrectedShotDispersionMultiplier = DBarr[j][i]; }}
        else if(DBarr[0][i] == "Weapon4DispersionAtMaxRange"){ for (var j = 1; j < DBarr.length; j++) { UnitParser[j].Weapon4DispersionAtMaxRange = DBarr[j][i]; }}
        else if(DBarr[0][i] == "Weapon4DispersionAtMinRange"){ for (var j = 1; j < DBarr.length; j++) { UnitParser[j].Weapon4DispersionAtMinRange = DBarr[j][i]; }}
        else if(DBarr[0][i] == "Weapon4DisplayedAmmunition"){ for (var j = 1; j < DBarr.length; j++) { UnitParser[j].Weapon4DisplayedAmmunition = DBarr[j][i]; }}
        else if(DBarr[0][i] == "Weapon4FireTriggeringProbability"){ for (var j = 1; j < DBarr.length; j++) { UnitParser[j].Weapon4FireTriggeringProbability = DBarr[j][i]; }}
        else if(DBarr[0][i] == "Weapon4HE"){ for (var j = 1; j < DBarr.length; j++) { UnitParser[j].Weapon4HE = DBarr[j][i]; }}
        else if(DBarr[0][i] == "Weapon4HitProbability"){ for (var j = 1; j < DBarr.length; j++) { UnitParser[j].Weapon4HitProbability = DBarr[j][i]; }}
        else if(DBarr[0][i] == "Weapon4HitProbabilityWhileMoving"){ for (var j = 1; j < DBarr.length; j++) { UnitParser[j].Weapon4HitProbabilityWhileMoving = DBarr[j][i]; }}
        else if(DBarr[0][i] == "Weapon4MinimalCritProbability"){ for (var j = 1; j < DBarr.length; j++) { UnitParser[j].Weapon4MinimalCritProbability = DBarr[j][i]; }}
        else if(DBarr[0][i] == "Weapon4MinimalHitProbability"){ for (var j = 1; j < DBarr.length; j++) { UnitParser[j].Weapon4MinimalHitProbability = DBarr[j][i]; }}
        else if(DBarr[0][i] == "Weapon4MissileMaxAcceleration"){ for (var j = 1; j < DBarr.length; j++) { UnitParser[j].Weapon4MissileMaxAcceleration = DBarr[j][i]; }}
        else if(DBarr[0][i] == "Weapon4MissileMaxSpeed"){ for (var j = 1; j < DBarr.length; j++) { UnitParser[j].Weapon4MissileMaxSpeed = DBarr[j][i]; }}
        else if(DBarr[0][i] == "Weapon4MissileTimeBetweenCorrections"){ for (var j = 1; j < DBarr.length; j++) { UnitParser[j].Weapon4MissileTimeBetweenCorrections = DBarr[j][i]; }}
        else if(DBarr[0][i] == "Weapon4Name"){ for (var j = 1; j < DBarr.length; j++) { UnitParser[j].Weapon4Name = DBarr[j][i]; }}
        else if(DBarr[0][i] == "Weapon4Noise"){ for (var j = 1; j < DBarr.length; j++) { UnitParser[j].Weapon4Noise = DBarr[j][i]; }}
        else if(DBarr[0][i] == "Weapon4NumberOfSalvos"){ for (var j = 1; j < DBarr.length; j++) { UnitParser[j].Weapon4NumberOfSalvos = DBarr[j][i]; }}
        else if(DBarr[0][i] == "Weapon4PositionOnCard"){ for (var j = 1; j < DBarr.length; j++) { UnitParser[j].Weapon4PositionOnCard = DBarr[j][i]; }}
        else if(DBarr[0][i] == "Weapon4ProjectilesPerShot"){ for (var j = 1; j < DBarr.length; j++) { UnitParser[j].Weapon4ProjectilesPerShot = DBarr[j][i]; }}
        else if(DBarr[0][i] == "Weapon4RadiusSplashPhysicalDamage"){ for (var j = 1; j < DBarr.length; j++) { UnitParser[j].Weapon4RadiusSplashPhysicalDamage = DBarr[j][i]; }}
        else if(DBarr[0][i] == "Weapon4RadiusSplashSuppressDamage"){ for (var j = 1; j < DBarr.length; j++) { UnitParser[j].Weapon4RadiusSplashSuppressDamage = DBarr[j][i]; }}
        else if(DBarr[0][i] == "Weapon4RangeGround"){ for (var j = 1; j < DBarr.length; j++) { UnitParser[j].Weapon4RangeGround = DBarr[j][i]; }}
        else if(DBarr[0][i] == "Weapon4RangeGroundMinimum"){ for (var j = 1; j < DBarr.length; j++) { UnitParser[j].Weapon4RangeGroundMinimum = DBarr[j][i]; }}
        else if(DBarr[0][i] == "Weapon4RangeHelicopters"){ for (var j = 1; j < DBarr.length; j++) { UnitParser[j].Weapon4RangeHelicopters = DBarr[j][i]; }}
        else if(DBarr[0][i] == "Weapon4RangeHelicoptersMinimum"){ for (var j = 1; j < DBarr.length; j++) { UnitParser[j].Weapon4RangeHelicoptersMinimum = DBarr[j][i]; }}
        else if(DBarr[0][i] == "Weapon4RangeMissiles"){ for (var j = 1; j < DBarr.length; j++) { UnitParser[j].Weapon4RangeMissiles = DBarr[j][i]; }}
        else if(DBarr[0][i] == "Weapon4RangeMissilesMinimum"){ for (var j = 1; j < DBarr.length; j++) { UnitParser[j].Weapon4RangeMissilesMinimum = DBarr[j][i]; }}
        else if(DBarr[0][i] == "Weapon4RangePlanes"){ for (var j = 1; j < DBarr.length; j++) { UnitParser[j].Weapon4RangePlanes = DBarr[j][i]; }}
        else if(DBarr[0][i] == "Weapon4RangePlanesMinimum"){ for (var j = 1; j < DBarr.length; j++) { UnitParser[j].Weapon4RangePlanesMinimum = DBarr[j][i]; }}
        else if(DBarr[0][i] == "Weapon4RangeShip"){ for (var j = 1; j < DBarr.length; j++) { UnitParser[j].Weapon4RangeShip = DBarr[j][i]; }}
        else if(DBarr[0][i] == "Weapon4RangeShipMinimum"){ for (var j = 1; j < DBarr.length; j++) { UnitParser[j].Weapon4RangeShipMinimum = DBarr[j][i]; }}
        else if(DBarr[0][i] == "Weapon4RayonPinned"){ for (var j = 1; j < DBarr.length; j++) { UnitParser[j].Weapon4RayonPinned = DBarr[j][i]; }}
        else if(DBarr[0][i] == "Weapon4ShotsPerSalvo"){ for (var j = 1; j < DBarr.length; j++) { UnitParser[j].Weapon4ShotsPerSalvo = DBarr[j][i]; }}
        else if(DBarr[0][i] == "Weapon4SupplyCost"){ for (var j = 1; j < DBarr.length; j++) { UnitParser[j].Weapon4SupplyCost = DBarr[j][i]; }}
        else if(DBarr[0][i] == "Weapon4Tags"){
            //separate tags (tag|tag|tag) into an array
                for (var j = 1; j < DBarr.length; j++) {
                    UnitParser[j].Weapon4Tags = DBarr[j][i];
                    var k = 0;
                    for (var l = 0; l< DBarr[j][i].length; l++){
                        if(DBarr[j][i].charAt(l) == "|"){
                            k++;
                        }
                        else{
                            UnitParser[j].Weapon4Tags[k] += DBarr[j][i].charAt(l);
                        }
                    }
                }
            }
        else if(DBarr[0][i] == "Weapon4TimeBetweenSalvos"){ for (var j = 1; j < DBarr.length; j++) { UnitParser[j].Weapon4TimeBetweenSalvos = DBarr[j][i]; }}
        else if(DBarr[0][i] == "Weapon4TimeBetweenShots"){ for (var j = 1; j < DBarr.length; j++) { UnitParser[j].Weapon4TimeBetweenShots = DBarr[j][i]; }}
        else if(DBarr[0][i] == "Weapon4Type"){ for (var j = 1; j < DBarr.length; j++) { UnitParser[j].Weapon4Type = DBarr[j][i]; }}
        else if(DBarr[0][i] == "Weapon5AP"){ for (var j = 1; j < DBarr.length; j++) { UnitParser[j].Weapon5AP = DBarr[j][i]; }}
        else if(DBarr[0][i] == "Weapon5AimTime"){ for (var j = 1; j < DBarr.length; j++) { UnitParser[j].Weapon5AimTime = DBarr[j][i]; }}
        else if(DBarr[0][i] == "Weapon5AngleDispersion"){ for (var j = 1; j < DBarr.length; j++) { UnitParser[j].Weapon5AngleDispersion = DBarr[j][i]; }}
        else if(DBarr[0][i] == "Weapon5Caliber"){ for (var j = 1; j < DBarr.length; j++) { UnitParser[j].Weapon5Caliber = DBarr[j][i]; }}
        else if(DBarr[0][i] == "Weapon5CanSmoke"){ for (var j = 1; j < DBarr.length; j++) { UnitParser[j].Weapon5CanSmoke = DBarr[j][i]; }}
        else if(DBarr[0][i] == "Weapon5CorrectedShotDispersionMultiplier"){ for (var j = 1; j < DBarr.length; j++) { UnitParser[j].Weapon5CorrectedShotDispersionMultiplier = DBarr[j][i]; }}
        else if(DBarr[0][i] == "Weapon5DispersionAtMaxRange"){ for (var j = 1; j < DBarr.length; j++) { UnitParser[j].Weapon5DispersionAtMaxRange = DBarr[j][i]; }}
        else if(DBarr[0][i] == "Weapon5DispersionAtMinRange"){ for (var j = 1; j < DBarr.length; j++) { UnitParser[j].Weapon5DispersionAtMinRange = DBarr[j][i]; }}
        else if(DBarr[0][i] == "Weapon5DisplayedAmmunition"){ for (var j = 1; j < DBarr.length; j++) { UnitParser[j].Weapon5DisplayedAmmunition = DBarr[j][i]; }}
        else if(DBarr[0][i] == "Weapon5FireTriggeringProbability"){ for (var j = 1; j < DBarr.length; j++) { UnitParser[j].Weapon5FireTriggeringProbability = DBarr[j][i]; }}
        else if(DBarr[0][i] == "Weapon5HE"){ for (var j = 1; j < DBarr.length; j++) { UnitParser[j].Weapon5HE = DBarr[j][i]; }}
        else if(DBarr[0][i] == "Weapon5HitProbability"){ for (var j = 1; j < DBarr.length; j++) { UnitParser[j].Weapon5HitProbability = DBarr[j][i]; }}
        else if(DBarr[0][i] == "Weapon5HitProbabilityWhileMoving"){ for (var j = 1; j < DBarr.length; j++) { UnitParser[j].Weapon5HitProbabilityWhileMoving = DBarr[j][i]; }}
        else if(DBarr[0][i] == "Weapon5MinimalCritProbability"){ for (var j = 1; j < DBarr.length; j++) { UnitParser[j].Weapon5MinimalCritProbability = DBarr[j][i]; }}
        else if(DBarr[0][i] == "Weapon5MinimalHitProbability"){ for (var j = 1; j < DBarr.length; j++) { UnitParser[j].Weapon5MinimalHitProbability = DBarr[j][i]; }}
        else if(DBarr[0][i] == "Weapon5MissileMaxAcceleration"){ for (var j = 1; j < DBarr.length; j++) { UnitParser[j].Weapon5MissileMaxAcceleration = DBarr[j][i]; }}
        else if(DBarr[0][i] == "Weapon5MissileMaxSpeed"){ for (var j = 1; j < DBarr.length; j++) { UnitParser[j].Weapon5MissileMaxSpeed = DBarr[j][i]; }}
        else if(DBarr[0][i] == "Weapon5MissileTimeBetweenCorrections"){ for (var j = 1; j < DBarr.length; j++) { UnitParser[j].Weapon5MissileTimeBetweenCorrections = DBarr[j][i]; }}
        else if(DBarr[0][i] == "Weapon5Name"){ for (var j = 1; j < DBarr.length; j++) { UnitParser[j].Weapon5Name = DBarr[j][i]; }}
        else if(DBarr[0][i] == "Weapon5Noise"){ for (var j = 1; j < DBarr.length; j++) { UnitParser[j].Weapon5Noise = DBarr[j][i]; }}
        else if(DBarr[0][i] == "Weapon5NumberOfSalvos"){ for (var j = 1; j < DBarr.length; j++) { UnitParser[j].Weapon5NumberOfSalvos = DBarr[j][i]; }}
        else if(DBarr[0][i] == "Weapon5PositionOnCard"){ for (var j = 1; j < DBarr.length; j++) { UnitParser[j].Weapon5PositionOnCard = DBarr[j][i]; }}
        else if(DBarr[0][i] == "Weapon5ProjectilesPerShot"){ for (var j = 1; j < DBarr.length; j++) { UnitParser[j].Weapon5ProjectilesPerShot = DBarr[j][i]; }}
        else if(DBarr[0][i] == "Weapon5RadiusSplashPhysicalDamage"){ for (var j = 1; j < DBarr.length; j++) { UnitParser[j].Weapon5RadiusSplashPhysicalDamage = DBarr[j][i]; }}
        else if(DBarr[0][i] == "Weapon5RadiusSplashSuppressDamage"){ for (var j = 1; j < DBarr.length; j++) { UnitParser[j].Weapon5RadiusSplashSuppressDamage = DBarr[j][i]; }}
        else if(DBarr[0][i] == "Weapon5RangeGround"){ for (var j = 1; j < DBarr.length; j++) { UnitParser[j].Weapon5RangeGround = DBarr[j][i]; }}
        else if(DBarr[0][i] == "Weapon5RangeGroundMinimum"){ for (var j = 1; j < DBarr.length; j++) { UnitParser[j].Weapon5RangeGroundMinimum = DBarr[j][i]; }}
        else if(DBarr[0][i] == "Weapon5RangeHelicopters"){ for (var j = 1; j < DBarr.length; j++) { UnitParser[j].Weapon5RangeHelicopters = DBarr[j][i]; }}
        else if(DBarr[0][i] == "Weapon5RangeHelicoptersMinimum"){ for (var j = 1; j < DBarr.length; j++) { UnitParser[j].Weapon5RangeHelicoptersMinimum = DBarr[j][i]; }}
        else if(DBarr[0][i] == "Weapon5RangeMissiles"){ for (var j = 1; j < DBarr.length; j++) { UnitParser[j].Weapon5RangeMissiles = DBarr[j][i]; }}
        else if(DBarr[0][i] == "Weapon5RangeMissilesMinimum"){ for (var j = 1; j < DBarr.length; j++) { UnitParser[j].Weapon5RangeMissilesMinimum = DBarr[j][i]; }}
        else if(DBarr[0][i] == "Weapon5RangePlanes"){ for (var j = 1; j < DBarr.length; j++) { UnitParser[j].Weapon5RangePlanes = DBarr[j][i]; }}
        else if(DBarr[0][i] == "Weapon5RangePlanesMinimum"){ for (var j = 1; j < DBarr.length; j++) { UnitParser[j].Weapon5RangePlanesMinimum = DBarr[j][i]; }}
        else if(DBarr[0][i] == "Weapon5RangeShip"){ for (var j = 1; j < DBarr.length; j++) { UnitParser[j].Weapon5RangeShip = DBarr[j][i]; }}
        else if(DBarr[0][i] == "Weapon5RangeShipMinimum"){ for (var j = 1; j < DBarr.length; j++) { UnitParser[j].Weapon5RangeShipMinimum = DBarr[j][i]; }}
        else if(DBarr[0][i] == "Weapon5RayonPinned"){ for (var j = 1; j < DBarr.length; j++) { UnitParser[j].Weapon5RayonPinned = DBarr[j][i]; }}
        else if(DBarr[0][i] == "Weapon5ShotsPerSalvo"){ for (var j = 1; j < DBarr.length; j++) { UnitParser[j].Weapon5ShotsPerSalvo = DBarr[j][i]; }}
        else if(DBarr[0][i] == "Weapon5SupplyCost"){ for (var j = 1; j < DBarr.length; j++) { UnitParser[j].Weapon5SupplyCost = DBarr[j][i]; }}
        else if(DBarr[0][i] == "Weapon5Tags"){
            //separate tags (tag|tag|tag) into an array
                for (var j = 1; j < DBarr.length; j++) {
                    UnitParser[j].Weapon5Tags = DBarr[j][i];
                    var k = 0;
                    for (var l = 0; l< DBarr[j][i].length; l++){
                        if(DBarr[j][i].charAt(l) == "|"){
                            k++;
                        }
                        else{
                            UnitParser[j].Weapon5Tags[k] += DBarr[j][i].charAt(l);
                        }
                    }
                }
            }
        else if(DBarr[0][i] == "Weapon5TimeBetweenSalvos"){ for (var j = 1; j < DBarr.length; j++) { UnitParser[j].Weapon5TimeBetweenSalvos = DBarr[j][i]; }}
        else if(DBarr[0][i] == "Weapon5TimeBetweenShots"){ for (var j = 1; j < DBarr.length; j++) { UnitParser[j].Weapon5TimeBetweenShots = DBarr[j][i]; }}
        else if(DBarr[0][i] == "Weapon5Type"){ for (var j = 1; j < DBarr.length; j++) { UnitParser[j].Weapon5Type = DBarr[j][i]; }}
        else if(DBarr[0][i] == "Weapon6AP"){ for (var j = 1; j < DBarr.length; j++) { UnitParser[j].Weapon6AP = DBarr[j][i]; }}
        else if(DBarr[0][i] == "Weapon6AimTime"){ for (var j = 1; j < DBarr.length; j++) { UnitParser[j].Weapon6AimTime = DBarr[j][i]; }}
        else if(DBarr[0][i] == "Weapon6AngleDispersion"){ for (var j = 1; j < DBarr.length; j++) { UnitParser[j].Weapon6AngleDispersion = DBarr[j][i]; }}
        else if(DBarr[0][i] == "Weapon6Caliber"){ for (var j = 1; j < DBarr.length; j++) { UnitParser[j].Weapon6Caliber = DBarr[j][i]; }}
        else if(DBarr[0][i] == "Weapon6CanSmoke"){ for (var j = 1; j < DBarr.length; j++) { UnitParser[j].Weapon6CanSmoke = DBarr[j][i]; }}
        else if(DBarr[0][i] == "Weapon6CorrectedShotDispersionMultiplier"){ for (var j = 1; j < DBarr.length; j++) { UnitParser[j].Weapon6CorrectedShotDispersionMultiplier = DBarr[j][i]; }}
        else if(DBarr[0][i] == "Weapon6DispersionAtMaxRange"){ for (var j = 1; j < DBarr.length; j++) { UnitParser[j].Weapon6DispersionAtMaxRange = DBarr[j][i]; }}
        else if(DBarr[0][i] == "Weapon6DispersionAtMinRange"){ for (var j = 1; j < DBarr.length; j++) { UnitParser[j].Weapon6DispersionAtMinRange = DBarr[j][i]; }}
        else if(DBarr[0][i] == "Weapon6DisplayedAmmunition"){ for (var j = 1; j < DBarr.length; j++) { UnitParser[j].Weapon6DisplayedAmmunition = DBarr[j][i]; }}
        else if(DBarr[0][i] == "Weapon6FireTriggeringProbability"){ for (var j = 1; j < DBarr.length; j++) { UnitParser[j].Weapon6FireTriggeringProbability = DBarr[j][i]; }}
        else if(DBarr[0][i] == "Weapon6HE"){ for (var j = 1; j < DBarr.length; j++) { UnitParser[j].Weapon6HE = DBarr[j][i]; }}
        else if(DBarr[0][i] == "Weapon6HitProbability"){ for (var j = 1; j < DBarr.length; j++) { UnitParser[j].Weapon6HitProbability = DBarr[j][i]; }}
        else if(DBarr[0][i] == "Weapon6HitProbabilityWhileMoving"){ for (var j = 1; j < DBarr.length; j++) { UnitParser[j].Weapon6HitProbabilityWhileMoving = DBarr[j][i]; }}
        else if(DBarr[0][i] == "Weapon6MinimalCritProbability"){ for (var j = 1; j < DBarr.length; j++) { UnitParser[j].Weapon6MinimalCritProbability = DBarr[j][i]; }}
        else if(DBarr[0][i] == "Weapon6MinimalHitProbability"){ for (var j = 1; j < DBarr.length; j++) { UnitParser[j].Weapon6MinimalHitProbability = DBarr[j][i]; }}
        else if(DBarr[0][i] == "Weapon6MissileMaxAcceleration"){ for (var j = 1; j < DBarr.length; j++) { UnitParser[j].Weapon6MissileMaxAcceleration = DBarr[j][i]; }}
        else if(DBarr[0][i] == "Weapon6MissileMaxSpeed"){ for (var j = 1; j < DBarr.length; j++) { UnitParser[j].Weapon6MissileMaxSpeed = DBarr[j][i]; }}
        else if(DBarr[0][i] == "Weapon6MissileTimeBetweenCorrections"){ for (var j = 1; j < DBarr.length; j++) { UnitParser[j].Weapon6MissileTimeBetweenCorrections = DBarr[j][i]; }}
        else if(DBarr[0][i] == "Weapon6Name"){ for (var j = 1; j < DBarr.length; j++) { UnitParser[j].Weapon6Name = DBarr[j][i]; }}
        else if(DBarr[0][i] == "Weapon6Noise"){ for (var j = 1; j < DBarr.length; j++) { UnitParser[j].Weapon6Noise = DBarr[j][i]; }}
        else if(DBarr[0][i] == "Weapon6NumberOfSalvos"){ for (var j = 1; j < DBarr.length; j++) { UnitParser[j].Weapon6NumberOfSalvos = DBarr[j][i]; }}
        else if(DBarr[0][i] == "Weapon6PositionOnCard"){ for (var j = 1; j < DBarr.length; j++) { UnitParser[j].Weapon6PositionOnCard = DBarr[j][i]; }}
        else if(DBarr[0][i] == "Weapon6ProjectilesPerShot"){ for (var j = 1; j < DBarr.length; j++) { UnitParser[j].Weapon6ProjectilesPerShot = DBarr[j][i]; }}
        else if(DBarr[0][i] == "Weapon6RadiusSplashPhysicalDamage"){ for (var j = 1; j < DBarr.length; j++) { UnitParser[j].Weapon6RadiusSplashPhysicalDamage = DBarr[j][i]; }}
        else if(DBarr[0][i] == "Weapon6RadiusSplashSuppressDamage"){ for (var j = 1; j < DBarr.length; j++) { UnitParser[j].Weapon6RadiusSplashSuppressDamage = DBarr[j][i]; }}
        else if(DBarr[0][i] == "Weapon6RangeGround"){ for (var j = 1; j < DBarr.length; j++) { UnitParser[j].Weapon6RangeGround = DBarr[j][i]; }}
        else if(DBarr[0][i] == "Weapon6RangeGroundMinimum"){ for (var j = 1; j < DBarr.length; j++) { UnitParser[j].Weapon6RangeGroundMinimum = DBarr[j][i]; }}
        else if(DBarr[0][i] == "Weapon6RangeHelicopters"){ for (var j = 1; j < DBarr.length; j++) { UnitParser[j].Weapon6RangeHelicopters = DBarr[j][i]; }}
        else if(DBarr[0][i] == "Weapon6RangeHelicoptersMinimum"){ for (var j = 1; j < DBarr.length; j++) { UnitParser[j].Weapon6RangeHelicoptersMinimum = DBarr[j][i]; }}
        else if(DBarr[0][i] == "Weapon6RangeMissiles"){ for (var j = 1; j < DBarr.length; j++) { UnitParser[j].Weapon6RangeMissiles = DBarr[j][i]; }}
        else if(DBarr[0][i] == "Weapon6RangeMissilesMinimum"){ for (var j = 1; j < DBarr.length; j++) { UnitParser[j].Weapon6RangeMissilesMinimum = DBarr[j][i]; }}
        else if(DBarr[0][i] == "Weapon6RangePlanes"){ for (var j = 1; j < DBarr.length; j++) { UnitParser[j].Weapon6RangePlanes = DBarr[j][i]; }}
        else if(DBarr[0][i] == "Weapon6RangePlanesMinimum"){ for (var j = 1; j < DBarr.length; j++) { UnitParser[j].Weapon6RangePlanesMinimum = DBarr[j][i]; }}
        else if(DBarr[0][i] == "Weapon6RangeShip"){ for (var j = 1; j < DBarr.length; j++) { UnitParser[j].Weapon6RangeShip = DBarr[j][i]; }}
        else if(DBarr[0][i] == "Weapon6RangeShipMinimum"){ for (var j = 1; j < DBarr.length; j++) { UnitParser[j].Weapon6RangeShipMinimum = DBarr[j][i]; }}
        else if(DBarr[0][i] == "Weapon6RayonPinned"){ for (var j = 1; j < DBarr.length; j++) { UnitParser[j].Weapon6RayonPinned = DBarr[j][i]; }}
        else if(DBarr[0][i] == "Weapon6ShotsPerSalvo"){ for (var j = 1; j < DBarr.length; j++) { UnitParser[j].Weapon6ShotsPerSalvo = DBarr[j][i]; }}
        else if(DBarr[0][i] == "Weapon6SupplyCost"){ for (var j = 1; j < DBarr.length; j++) { UnitParser[j].Weapon6SupplyCost = DBarr[j][i]; }}
        else if(DBarr[0][i] == "Weapon6Tags"){
            //separate tags (tag|tag|tag) into an array
                for (var j = 1; j < DBarr.length; j++) {
                    UnitParser[j].Weapon6Tags = DBarr[j][i];
                    var k = 0;
                    for (var l = 0; l< DBarr[j][i].length; l++){
                        if(DBarr[j][i].charAt(l) == "|"){
                            k++;
                        }
                        else{
                            UnitParser[j].Weapon6Tags[k] += DBarr[j][i].charAt(l);
                        }
                    }
                }
            }
        else if(DBarr[0][i] == "Weapon6TimeBetweenSalvos"){ for (var j = 1; j < DBarr.length; j++) { UnitParser[j].Weapon6TimeBetweenSalvos = DBarr[j][i]; }}
        else if(DBarr[0][i] == "Weapon6TimeBetweenShots"){ for (var j = 1; j < DBarr.length; j++) { UnitParser[j].Weapon6TimeBetweenShots = DBarr[j][i]; }}
        else if(DBarr[0][i] == "Weapon6Type"){ for (var j = 1; j < DBarr.length; j++) { UnitParser[j].Weapon6Type = DBarr[j][i]; }}
        else if(DBarr[0][i] == "Weapon7AP"){ for (var j = 1; j < DBarr.length; j++) { UnitParser[j].Weapon7AP = DBarr[j][i]; }}
        else if(DBarr[0][i] == "Weapon7AimTime"){ for (var j = 1; j < DBarr.length; j++) { UnitParser[j].Weapon7AimTime = DBarr[j][i]; }}
        else if(DBarr[0][i] == "Weapon7AngleDispersion"){ for (var j = 1; j < DBarr.length; j++) { UnitParser[j].Weapon7AngleDispersion = DBarr[j][i]; }}
        else if(DBarr[0][i] == "Weapon7Caliber"){ for (var j = 1; j < DBarr.length; j++) { UnitParser[j].Weapon7Caliber = DBarr[j][i]; }}
        else if(DBarr[0][i] == "Weapon7CanSmoke"){ for (var j = 1; j < DBarr.length; j++) { UnitParser[j].Weapon7CanSmoke = DBarr[j][i]; }}
        else if(DBarr[0][i] == "Weapon7CorrectedShotDispersionMultiplier"){ for (var j = 1; j < DBarr.length; j++) { UnitParser[j].Weapon7CorrectedShotDispersionMultiplier = DBarr[j][i]; }}
        else if(DBarr[0][i] == "Weapon7DispersionAtMaxRange"){ for (var j = 1; j < DBarr.length; j++) { UnitParser[j].Weapon7DispersionAtMaxRange = DBarr[j][i]; }}
        else if(DBarr[0][i] == "Weapon7DispersionAtMinRange"){ for (var j = 1; j < DBarr.length; j++) { UnitParser[j].Weapon7DispersionAtMinRange = DBarr[j][i]; }}
        else if(DBarr[0][i] == "Weapon7DisplayedAmmunition"){ for (var j = 1; j < DBarr.length; j++) { UnitParser[j].Weapon7DisplayedAmmunition = DBarr[j][i]; }}
        else if(DBarr[0][i] == "Weapon7FireTriggeringProbability"){ for (var j = 1; j < DBarr.length; j++) { UnitParser[j].Weapon7FireTriggeringProbability = DBarr[j][i]; }}
        else if(DBarr[0][i] == "Weapon7HE"){ for (var j = 1; j < DBarr.length; j++) { UnitParser[j].Weapon7HE = DBarr[j][i]; }}
        else if(DBarr[0][i] == "Weapon7HitProbability"){ for (var j = 1; j < DBarr.length; j++) { UnitParser[j].Weapon7HitProbability = DBarr[j][i]; }}
        else if(DBarr[0][i] == "Weapon7HitProbabilityWhileMoving"){ for (var j = 1; j < DBarr.length; j++) { UnitParser[j].Weapon7HitProbabilityWhileMoving = DBarr[j][i]; }}
        else if(DBarr[0][i] == "Weapon7MinimalCritProbability"){ for (var j = 1; j < DBarr.length; j++) { UnitParser[j].Weapon7MinimalCritProbability = DBarr[j][i]; }}
        else if(DBarr[0][i] == "Weapon7MinimalHitProbability"){ for (var j = 1; j < DBarr.length; j++) { UnitParser[j].Weapon7MinimalHitProbability = DBarr[j][i]; }}
        else if(DBarr[0][i] == "Weapon7MissileTimeBetweenCorrections"){ for (var j = 1; j < DBarr.length; j++) { UnitParser[j].Weapon7MissileTimeBetweenCorrections = DBarr[j][i]; }}
        else if(DBarr[0][i] == "Weapon7Name"){ for (var j = 1; j < DBarr.length; j++) { UnitParser[j].Weapon7Name = DBarr[j][i]; }}
        else if(DBarr[0][i] == "Weapon7Noise"){ for (var j = 1; j < DBarr.length; j++) { UnitParser[j].Weapon7Noise = DBarr[j][i]; }}
        else if(DBarr[0][i] == "Weapon7NumberOfSalvos"){ for (var j = 1; j < DBarr.length; j++) { UnitParser[j].Weapon7NumberOfSalvos = DBarr[j][i]; }}
        else if(DBarr[0][i] == "Weapon7PositionOnCard"){ for (var j = 1; j < DBarr.length; j++) { UnitParser[j].Weapon7PositionOnCard = DBarr[j][i]; }}
        else if(DBarr[0][i] == "Weapon7ProjectilesPerShot"){ for (var j = 1; j < DBarr.length; j++) { UnitParser[j].Weapon7ProjectilesPerShot = DBarr[j][i]; }}
        else if(DBarr[0][i] == "Weapon7RadiusSplashPhysicalDamage"){ for (var j = 1; j < DBarr.length; j++) { UnitParser[j].Weapon7RadiusSplashPhysicalDamage = DBarr[j][i]; }}
        else if(DBarr[0][i] == "Weapon7RadiusSplashSuppressDamage"){ for (var j = 1; j < DBarr.length; j++) { UnitParser[j].Weapon7RadiusSplashSuppressDamage = DBarr[j][i]; }}
        else if(DBarr[0][i] == "Weapon7RangeGround"){ for (var j = 1; j < DBarr.length; j++) { UnitParser[j].Weapon7RangeGround = DBarr[j][i]; }}
        else if(DBarr[0][i] == "Weapon7RangeGroundMinimum"){ for (var j = 1; j < DBarr.length; j++) { UnitParser[j].Weapon7RangeGroundMinimum = DBarr[j][i]; }}
        else if(DBarr[0][i] == "Weapon7RangeHelicopters"){ for (var j = 1; j < DBarr.length; j++) { UnitParser[j].Weapon7RangeHelicopters = DBarr[j][i]; }}
        else if(DBarr[0][i] == "Weapon7RangeHelicoptersMinimum"){ for (var j = 1; j < DBarr.length; j++) { UnitParser[j].Weapon7RangeHelicoptersMinimum = DBarr[j][i]; }}
        else if(DBarr[0][i] == "Weapon7RangeMissiles"){ for (var j = 1; j < DBarr.length; j++) { UnitParser[j].Weapon7RangeMissiles = DBarr[j][i]; }}
        else if(DBarr[0][i] == "Weapon7RangeMissilesMinimum"){ for (var j = 1; j < DBarr.length; j++) { UnitParser[j].Weapon7RangeMissilesMinimum = DBarr[j][i]; }}
        else if(DBarr[0][i] == "Weapon7RangePlanes"){ for (var j = 1; j < DBarr.length; j++) { UnitParser[j].Weapon7RangePlanes = DBarr[j][i]; }}
        else if(DBarr[0][i] == "Weapon7RangePlanesMinimum"){ for (var j = 1; j < DBarr.length; j++) { UnitParser[j].Weapon7RangePlanesMinimum = DBarr[j][i]; }}
        else if(DBarr[0][i] == "Weapon7RangeShip"){ for (var j = 1; j < DBarr.length; j++) { UnitParser[j].Weapon7RangeShip = DBarr[j][i]; }}
        else if(DBarr[0][i] == "Weapon7RangeShipMinimum"){ for (var j = 1; j < DBarr.length; j++) { UnitParser[j].Weapon7RangeShipMinimum = DBarr[j][i]; }}
        else if(DBarr[0][i] == "Weapon7RayonPinned"){ for (var j = 1; j < DBarr.length; j++) { UnitParser[j].Weapon7RayonPinned = DBarr[j][i]; }}
        else if(DBarr[0][i] == "Weapon7ShotsPerSalvo"){ for (var j = 1; j < DBarr.length; j++) { UnitParser[j].Weapon7ShotsPerSalvo = DBarr[j][i]; }}
        else if(DBarr[0][i] == "Weapon7SupplyCost"){ for (var j = 1; j < DBarr.length; j++) { UnitParser[j].Weapon7SupplyCost = DBarr[j][i]; }}
        else if(DBarr[0][i] == "Weapon7Tags"){
            //separate tags (tag|tag|tag) into an array
                for (var j = 1; j < DBarr.length; j++) {
                    UnitParser[j].Weapon7Tags = DBarr[j][i];
                    var k = 0;
                    for (var l = 0; l< DBarr[j][i].length; l++){
                        if(DBarr[j][i].charAt(l) == "|"){
                            k++;
                        }
                        else{
                            UnitParser[j].Weapon7Tags[k] += DBarr[j][i].charAt(l);
                        }
                    }
                }
            }
        else if(DBarr[0][i] == "Weapon7TimeBetweenSalvos"){ for (var j = 1; j < DBarr.length; j++) { UnitParser[j].Weapon7TimeBetweenSalvos = DBarr[j][i]; }}
        else if(DBarr[0][i] == "Weapon7TimeBetweenShots"){ for (var j = 1; j < DBarr.length; j++) { UnitParser[j].Weapon7TimeBetweenShots = DBarr[j][i]; }}
        else if(DBarr[0][i] == "Weapon7Type"){ for (var j = 1; j < DBarr.length; j++) { UnitParser[j].Weapon7Type = DBarr[j][i]; }}
        else if(DBarr[0][i] == "Weapon8AP"){ for (var j = 1; j < DBarr.length; j++) { UnitParser[j].Weapon8AP = DBarr[j][i]; }}
        else if(DBarr[0][i] == "Weapon8AimTime"){ for (var j = 1; j < DBarr.length; j++) { UnitParser[j].Weapon8AimTime = DBarr[j][i]; }}
        else if(DBarr[0][i] == "Weapon8AngleDispersion"){ for (var j = 1; j < DBarr.length; j++) { UnitParser[j].Weapon8AngleDispersion = DBarr[j][i]; }}
        else if(DBarr[0][i] == "Weapon8Caliber"){ for (var j = 1; j < DBarr.length; j++) { UnitParser[j].Weapon8Caliber = DBarr[j][i]; }}
        else if(DBarr[0][i] == "Weapon8CanSmoke"){ for (var j = 1; j < DBarr.length; j++) { UnitParser[j].Weapon8CanSmoke = DBarr[j][i]; }}
        else if(DBarr[0][i] == "Weapon8CorrectedShotDispersionMultiplier"){ for (var j = 1; j < DBarr.length; j++) { UnitParser[j].Weapon8CorrectedShotDispersionMultiplier = DBarr[j][i]; }}
        else if(DBarr[0][i] == "Weapon8DispersionAtMaxRange"){ for (var j = 1; j < DBarr.length; j++) { UnitParser[j].Weapon8DispersionAtMaxRange = DBarr[j][i]; }}
        else if(DBarr[0][i] == "Weapon8DispersionAtMinRange"){ for (var j = 1; j < DBarr.length; j++) { UnitParser[j].Weapon8DispersionAtMinRange = DBarr[j][i]; }}
        else if(DBarr[0][i] == "Weapon8DisplayedAmmunition"){ for (var j = 1; j < DBarr.length; j++) { UnitParser[j].Weapon8DisplayedAmmunition = DBarr[j][i]; }}
        else if(DBarr[0][i] == "Weapon8FireTriggeringProbability"){ for (var j = 1; j < DBarr.length; j++) { UnitParser[j].Weapon8FireTriggeringProbability = DBarr[j][i]; }}
        else if(DBarr[0][i] == "Weapon8HE"){ for (var j = 1; j < DBarr.length; j++) { UnitParser[j].Weapon8HE = DBarr[j][i]; }}
        else if(DBarr[0][i] == "Weapon8HitProbability"){ for (var j = 1; j < DBarr.length; j++) { UnitParser[j].Weapon8HitProbability = DBarr[j][i]; }}
        else if(DBarr[0][i] == "Weapon8HitProbabilityWhileMoving"){ for (var j = 1; j < DBarr.length; j++) { UnitParser[j].Weapon8HitProbabilityWhileMoving = DBarr[j][i]; }}
        else if(DBarr[0][i] == "Weapon8MinimalCritProbability"){ for (var j = 1; j < DBarr.length; j++) { UnitParser[j].Weapon8MinimalCritProbability = DBarr[j][i]; }}
        else if(DBarr[0][i] == "Weapon8MinimalHitProbability"){ for (var j = 1; j < DBarr.length; j++) { UnitParser[j].Weapon8MinimalHitProbability = DBarr[j][i]; }}
        else if(DBarr[0][i] == "Weapon8MissileMaxAcceleration"){ for (var j = 1; j < DBarr.length; j++) { UnitParser[j].Weapon8MissileMaxAcceleration = DBarr[j][i]; }}
        else if(DBarr[0][i] == "Weapon8MissileMaxSpeed"){ for (var j = 1; j < DBarr.length; j++) { UnitParser[j].Weapon8MissileMaxSpeed = DBarr[j][i]; }}
        else if(DBarr[0][i] == "Weapon8MissileTimeBetweenCorrections"){ for (var j = 1; j < DBarr.length; j++) { UnitParser[j].Weapon8MissileTimeBetweenCorrections = DBarr[j][i]; }}
        else if(DBarr[0][i] == "Weapon8Name"){ for (var j = 1; j < DBarr.length; j++) { UnitParser[j].Weapon8Name = DBarr[j][i]; }}
        else if(DBarr[0][i] == "Weapon8Noise"){ for (var j = 1; j < DBarr.length; j++) { UnitParser[j].Weapon8Noise = DBarr[j][i]; }}
        else if(DBarr[0][i] == "Weapon8NumberOfSalvos"){ for (var j = 1; j < DBarr.length; j++) { UnitParser[j].Weapon8NumberOfSalvos = DBarr[j][i]; }}
        else if(DBarr[0][i] == "Weapon8PositionOnCard"){ for (var j = 1; j < DBarr.length; j++) { UnitParser[j].Weapon8PositionOnCard = DBarr[j][i]; }}
        else if(DBarr[0][i] == "Weapon8ProjectilesPerShot"){ for (var j = 1; j < DBarr.length; j++) { UnitParser[j].Weapon8ProjectilesPerShot = DBarr[j][i]; }}
        else if(DBarr[0][i] == "Weapon8RadiusSplashPhysicalDamage"){ for (var j = 1; j < DBarr.length; j++) { UnitParser[j].Weapon8RadiusSplashPhysicalDamage = DBarr[j][i]; }}
        else if(DBarr[0][i] == "Weapon8RadiusSplashSuppressDamage"){ for (var j = 1; j < DBarr.length; j++) { UnitParser[j].Weapon8RadiusSplashSuppressDamage = DBarr[j][i]; }}
        else if(DBarr[0][i] == "Weapon8RangeGround"){ for (var j = 1; j < DBarr.length; j++) { UnitParser[j].Weapon8RangeGround = DBarr[j][i]; }}
        else if(DBarr[0][i] == "Weapon8RangeGroundMinimum"){ for (var j = 1; j < DBarr.length; j++) { UnitParser[j].Weapon8RangeGroundMinimum = DBarr[j][i]; }}
        else if(DBarr[0][i] == "Weapon8RangeHelicopters"){ for (var j = 1; j < DBarr.length; j++) { UnitParser[j].Weapon8RangeHelicopters = DBarr[j][i]; }}
        else if(DBarr[0][i] == "Weapon8RangeHelicoptersMinimum"){ for (var j = 1; j < DBarr.length; j++) { UnitParser[j].Weapon8RangeHelicoptersMinimum = DBarr[j][i]; }}
        else if(DBarr[0][i] == "Weapon8RangeMissiles"){ for (var j = 1; j < DBarr.length; j++) { UnitParser[j].Weapon8RangeMissiles = DBarr[j][i]; }}
        else if(DBarr[0][i] == "Weapon8RangeMissilesMinimum"){ for (var j = 1; j < DBarr.length; j++) { UnitParser[j].Weapon8RangeMissilesMinimum = DBarr[j][i]; }}
        else if(DBarr[0][i] == "Weapon8RangePlanes"){ for (var j = 1; j < DBarr.length; j++) { UnitParser[j].Weapon8RangePlanes = DBarr[j][i]; }}
        else if(DBarr[0][i] == "Weapon8RangePlanesMinimum"){ for (var j = 1; j < DBarr.length; j++) { UnitParser[j].Weapon8RangePlanesMinimum = DBarr[j][i]; }}
        else if(DBarr[0][i] == "Weapon8RangeShip"){ for (var j = 1; j < DBarr.length; j++) { UnitParser[j].Weapon8RangeShip = DBarr[j][i]; }}
        else if(DBarr[0][i] == "Weapon8RangeShipMinimum"){ for (var j = 1; j < DBarr.length; j++) { UnitParser[j].Weapon8RangeShipMinimum = DBarr[j][i]; }}
        else if(DBarr[0][i] == "Weapon8RayonPinned"){ for (var j = 1; j < DBarr.length; j++) { UnitParser[j].Weapon8RayonPinned = DBarr[j][i]; }}
        else if(DBarr[0][i] == "Weapon8ShotsPerSalvo"){ for (var j = 1; j < DBarr.length; j++) { UnitParser[j].Weapon8ShotsPerSalvo = DBarr[j][i]; }}
        else if(DBarr[0][i] == "Weapon8SupplyCost"){ for (var j = 1; j < DBarr.length; j++) { UnitParser[j].Weapon8SupplyCost = DBarr[j][i]; }}
        else if(DBarr[0][i] == "Weapon8Tags"){
            //separate tags (tag|tag|tag) into an array
                for (var j = 1; j < DBarr.length; j++) {
                    UnitParser[j].Weapon8Tags = DBarr[j][i];
                    var k = 0;
                    for (var l = 0; l< DBarr[j][i].length; l++){
                        if(DBarr[j][i].charAt(l) == "|"){
                            k++;
                        }
                        else{
                            UnitParser[j].Weapon8Tags[k] += DBarr[j][i].charAt(l);
                        }
                    }
                }
            }
        else if(DBarr[0][i] == "Weapon8TimeBetweenSalvos"){ for (var j = 1; j < DBarr.length; j++) { UnitParser[j].Weapon8TimeBetweenSalvos = DBarr[j][i]; }}
        else if(DBarr[0][i] == "Weapon8TimeBetweenShots"){ for (var j = 1; j < DBarr.length; j++) { UnitParser[j].Weapon8TimeBetweenShots = DBarr[j][i]; }}
        else if(DBarr[0][i] == "Weapon8Type"){ for (var j = 1; j < DBarr.length; j++) { UnitParser[j].Weapon8Type = DBarr[j][i]; }}
        else if(DBarr[0][i] == "Weapon9AP"){ for (var j = 1; j < DBarr.length; j++) { UnitParser[j].Weapon9AP = DBarr[j][i]; }}
        else if(DBarr[0][i] == "Weapon9AimTime"){ for (var j = 1; j < DBarr.length; j++) { UnitParser[j].Weapon9AimTime = DBarr[j][i]; }}
        else if(DBarr[0][i] == "Weapon9AngleDispersion"){ for (var j = 1; j < DBarr.length; j++) { UnitParser[j].Weapon9AngleDispersion = DBarr[j][i]; }}
        else if(DBarr[0][i] == "Weapon9Caliber"){ for (var j = 1; j < DBarr.length; j++) { UnitParser[j].Weapon9Caliber = DBarr[j][i]; }}
        else if(DBarr[0][i] == "Weapon9CanSmoke"){ for (var j = 1; j < DBarr.length; j++) { UnitParser[j].Weapon9CanSmoke = DBarr[j][i]; }}
        else if(DBarr[0][i] == "Weapon9CorrectedShotDispersionMultiplier"){ for (var j = 1; j < DBarr.length; j++) { UnitParser[j].Weapon9CorrectedShotDispersionMultiplier = DBarr[j][i]; }}
        else if(DBarr[0][i] == "Weapon9DispersionAtMaxRange"){ for (var j = 1; j < DBarr.length; j++) { UnitParser[j].Weapon9DispersionAtMaxRange = DBarr[j][i]; }}
        else if(DBarr[0][i] == "Weapon9DispersionAtMinRange"){ for (var j = 1; j < DBarr.length; j++) { UnitParser[j].Weapon9DispersionAtMinRange = DBarr[j][i]; }}
        else if(DBarr[0][i] == "Weapon9DisplayedAmmunition"){ for (var j = 1; j < DBarr.length; j++) { UnitParser[j].Weapon9DisplayedAmmunition = DBarr[j][i]; }}
        else if(DBarr[0][i] == "Weapon9FireTriggeringProbability"){ for (var j = 1; j < DBarr.length; j++) { UnitParser[j].Weapon9FireTriggeringProbability = DBarr[j][i]; }}
        else if(DBarr[0][i] == "Weapon9HE"){ for (var j = 1; j < DBarr.length; j++) { UnitParser[j].Weapon9HE = DBarr[j][i]; }}
        else if(DBarr[0][i] == "Weapon9HitProbability"){ for (var j = 1; j < DBarr.length; j++) { UnitParser[j].Weapon9HitProbability = DBarr[j][i]; }}
        else if(DBarr[0][i] == "Weapon9HitProbabilityWhileMoving"){ for (var j = 1; j < DBarr.length; j++) { UnitParser[j].Weapon9HitProbabilityWhileMoving = DBarr[j][i]; }}
        else if(DBarr[0][i] == "Weapon9MinimalCritProbability"){ for (var j = 1; j < DBarr.length; j++) { UnitParser[j].Weapon9MinimalCritProbability = DBarr[j][i]; }}
        else if(DBarr[0][i] == "Weapon9MinimalHitProbability"){ for (var j = 1; j < DBarr.length; j++) { UnitParser[j].Weapon9MinimalHitProbability = DBarr[j][i]; }}
        else if(DBarr[0][i] == "Weapon9MissileTimeBetweenCorrections"){ for (var j = 1; j < DBarr.length; j++) { UnitParser[j].Weapon9MissileTimeBetweenCorrections = DBarr[j][i]; }}
        else if(DBarr[0][i] == "Weapon9Name"){ for (var j = 1; j < DBarr.length; j++) { UnitParser[j].Weapon9Name = DBarr[j][i]; }}
        else if(DBarr[0][i] == "Weapon9Noise"){ for (var j = 1; j < DBarr.length; j++) { UnitParser[j].Weapon9Noise = DBarr[j][i]; }}
        else if(DBarr[0][i] == "Weapon9NumberOfSalvos"){ for (var j = 1; j < DBarr.length; j++) { UnitParser[j].Weapon9NumberOfSalvos = DBarr[j][i]; }}
        else if(DBarr[0][i] == "Weapon9PositionOnCard"){ for (var j = 1; j < DBarr.length; j++) { UnitParser[j].Weapon9PositionOnCard = DBarr[j][i]; }}
        else if(DBarr[0][i] == "Weapon9ProjectilesPerShot"){ for (var j = 1; j < DBarr.length; j++) { UnitParser[j].Weapon9ProjectilesPerShot = DBarr[j][i]; }}
        else if(DBarr[0][i] == "Weapon9RadiusSplashPhysicalDamage"){ for (var j = 1; j < DBarr.length; j++) { UnitParser[j].Weapon9RadiusSplashPhysicalDamage = DBarr[j][i]; }}
        else if(DBarr[0][i] == "Weapon9RadiusSplashSuppressDamage"){ for (var j = 1; j < DBarr.length; j++) { UnitParser[j].Weapon9RadiusSplashSuppressDamage = DBarr[j][i]; }}
        else if(DBarr[0][i] == "Weapon9RangeGround"){ for (var j = 1; j < DBarr.length; j++) { UnitParser[j].Weapon9RangeGround = DBarr[j][i]; }}
        else if(DBarr[0][i] == "Weapon9RangeGroundMinimum"){ for (var j = 1; j < DBarr.length; j++) { UnitParser[j].Weapon9RangeGroundMinimum = DBarr[j][i]; }}
        else if(DBarr[0][i] == "Weapon9RangeHelicopters"){ for (var j = 1; j < DBarr.length; j++) { UnitParser[j].Weapon9RangeHelicopters = DBarr[j][i]; }}
        else if(DBarr[0][i] == "Weapon9RangeHelicoptersMinimum"){ for (var j = 1; j < DBarr.length; j++) { UnitParser[j].Weapon9RangeHelicoptersMinimum = DBarr[j][i]; }}
        else if(DBarr[0][i] == "Weapon9RangeMissiles"){ for (var j = 1; j < DBarr.length; j++) { UnitParser[j].Weapon9RangeMissiles = DBarr[j][i]; }}
        else if(DBarr[0][i] == "Weapon9RangeMissilesMinimum"){ for (var j = 1; j < DBarr.length; j++) { UnitParser[j].Weapon9RangeMissilesMinimum = DBarr[j][i]; }}
        else if(DBarr[0][i] == "Weapon9RangePlanes"){ for (var j = 1; j < DBarr.length; j++) { UnitParser[j].Weapon9RangePlanes = DBarr[j][i]; }}
        else if(DBarr[0][i] == "Weapon9RangePlanesMinimum"){ for (var j = 1; j < DBarr.length; j++) { UnitParser[j].Weapon9RangePlanesMinimum = DBarr[j][i]; }}
        else if(DBarr[0][i] == "Weapon9RangeShip"){ for (var j = 1; j < DBarr.length; j++) { UnitParser[j].Weapon9RangeShip = DBarr[j][i]; }}
        else if(DBarr[0][i] == "Weapon9RangeShipMinimum"){ for (var j = 1; j < DBarr.length; j++) { UnitParser[j].Weapon9RangeShipMinimum = DBarr[j][i]; }}
        else if(DBarr[0][i] == "Weapon9RayonPinned"){ for (var j = 1; j < DBarr.length; j++) { UnitParser[j].Weapon9RayonPinned = DBarr[j][i]; }}
        else if(DBarr[0][i] == "Weapon9ShotsPerSalvo"){ for (var j = 1; j < DBarr.length; j++) { UnitParser[j].Weapon9ShotsPerSalvo = DBarr[j][i]; }}
        else if(DBarr[0][i] == "Weapon9SupplyCost"){ for (var j = 1; j < DBarr.length; j++) { UnitParser[j].Weapon9SupplyCost = DBarr[j][i]; }}
        else if(DBarr[0][i] == "Weapon9Tags"){
            //separate tags (tag|tag|tag) into an array
                for (var j = 1; j < DBarr.length; j++) {
                    UnitParser[j].Weapon9Tags = DBarr[j][i];
                    var k = 0;
                    for (var l = 0; l< DBarr[j][i].length; l++){
                        if(DBarr[j][i].charAt(l) == "|"){
                            k++;
                        }
                        else{
                            UnitParser[j].Weapon9Tags[k] += DBarr[j][i].charAt(l);
                        }
                    }
                }
            }
        else if(DBarr[0][i] == "Weapon9TimeBetweenSalvos"){ for (var j = 1; j < DBarr.length; j++) { UnitParser[j].Weapon9TimeBetweenSalvos = DBarr[j][i]; }}
        else if(DBarr[0][i] == "Weapon9TimeBetweenShots"){ for (var j = 1; j < DBarr.length; j++) { UnitParser[j].Weapon9TimeBetweenShots = DBarr[j][i]; }}
        else if(DBarr[0][i] == "Weapon9Type"){ for (var j = 1; j < DBarr.length; j++) { UnitParser[j].Weapon9Type = DBarr[j][i]; }}
        else if(DBarr[0][i] == "Weapon10AP"){ for (var j = 1; j < DBarr.length; j++) { UnitParser[j].Weapon10AP = DBarr[j][i]; }}
        else if(DBarr[0][i] == "Weapon10AimTime"){ for (var j = 1; j < DBarr.length; j++) { UnitParser[j].Weapon10AimTime = DBarr[j][i]; }}
        else if(DBarr[0][i] == "Weapon10AngleDispersion"){ for (var j = 1; j < DBarr.length; j++) { UnitParser[j].Weapon10AngleDispersion = DBarr[j][i]; }}
        else if(DBarr[0][i] == "Weapon10Caliber"){ for (var j = 1; j < DBarr.length; j++) { UnitParser[j].Weapon10Caliber = DBarr[j][i]; }}
        else if(DBarr[0][i] == "Weapon10CanSmoke"){ for (var j = 1; j < DBarr.length; j++) { UnitParser[j].Weapon10CanSmoke = DBarr[j][i]; }}
        else if(DBarr[0][i] == "Weapon10CorrectedShotDispersionMultiplier"){ for (var j = 1; j < DBarr.length; j++) { UnitParser[j].Weapon10CorrectedShotDispersionMultiplier = DBarr[j][i]; }}
        else if(DBarr[0][i] == "Weapon10DispersionAtMaxRange"){ for (var j = 1; j < DBarr.length; j++) { UnitParser[j].Weapon10DispersionAtMaxRange = DBarr[j][i]; }}
        else if(DBarr[0][i] == "Weapon10DispersionAtMinRange"){ for (var j = 1; j < DBarr.length; j++) { UnitParser[j].Weapon10DispersionAtMinRange = DBarr[j][i]; }}
        else if(DBarr[0][i] == "Weapon10DisplayedAmmunition"){ for (var j = 1; j < DBarr.length; j++) { UnitParser[j].Weapon10DisplayedAmmunition = DBarr[j][i]; }}
        else if(DBarr[0][i] == "Weapon10FireTriggeringProbability"){ for (var j = 1; j < DBarr.length; j++) { UnitParser[j].Weapon10FireTriggeringProbability = DBarr[j][i]; }}
        else if(DBarr[0][i] == "Weapon10HE"){ for (var j = 1; j < DBarr.length; j++) { UnitParser[j].Weapon10HE = DBarr[j][i]; }}
        else if(DBarr[0][i] == "Weapon10HitProbability"){ for (var j = 1; j < DBarr.length; j++) { UnitParser[j].Weapon10HitProbability = DBarr[j][i]; }}
        else if(DBarr[0][i] == "Weapon10HitProbabilityWhileMoving"){ for (var j = 1; j < DBarr.length; j++) { UnitParser[j].Weapon10HitProbabilityWhileMoving = DBarr[j][i]; }}
        else if(DBarr[0][i] == "Weapon10MinimalCritProbability"){ for (var j = 1; j < DBarr.length; j++) { UnitParser[j].Weapon10MinimalCritProbability = DBarr[j][i]; }}
        else if(DBarr[0][i] == "Weapon10MinimalHitProbability"){ for (var j = 1; j < DBarr.length; j++) { UnitParser[j].Weapon10MinimalHitProbability = DBarr[j][i]; }}
        else if(DBarr[0][i] == "Weapon10MissileTimeBetweenCorrections"){ for (var j = 1; j < DBarr.length; j++) { UnitParser[j].Weapon10MissileTimeBetweenCorrections = DBarr[j][i]; }}
        else if(DBarr[0][i] == "Weapon10Name"){ for (var j = 1; j < DBarr.length; j++) { UnitParser[j].Weapon10Name = DBarr[j][i]; }}
        else if(DBarr[0][i] == "Weapon10Noise"){ for (var j = 1; j < DBarr.length; j++) { UnitParser[j].Weapon10Noise = DBarr[j][i]; }}
        else if(DBarr[0][i] == "Weapon10NumberOfSalvos"){ for (var j = 1; j < DBarr.length; j++) { UnitParser[j].Weapon10NumberOfSalvos = DBarr[j][i]; }}
        else if(DBarr[0][i] == "Weapon10PositionOnCard"){ for (var j = 1; j < DBarr.length; j++) { UnitParser[j].Weapon10PositionOnCard = DBarr[j][i]; }}
        else if(DBarr[0][i] == "Weapon10ProjectilesPerShot"){ for (var j = 1; j < DBarr.length; j++) { UnitParser[j].Weapon10ProjectilesPerShot = DBarr[j][i]; }}
        else if(DBarr[0][i] == "Weapon10RadiusSplashPhysicalDamage"){ for (var j = 1; j < DBarr.length; j++) { UnitParser[j].Weapon10RadiusSplashPhysicalDamage = DBarr[j][i]; }}
        else if(DBarr[0][i] == "Weapon10RadiusSplashSuppressDamage"){ for (var j = 1; j < DBarr.length; j++) { UnitParser[j].Weapon10RadiusSplashSuppressDamage = DBarr[j][i]; }}
        else if(DBarr[0][i] == "Weapon10RangeGround"){ for (var j = 1; j < DBarr.length; j++) { UnitParser[j].Weapon10RangeGround = DBarr[j][i]; }}
        else if(DBarr[0][i] == "Weapon10RangeGroundMinimum"){ for (var j = 1; j < DBarr.length; j++) { UnitParser[j].Weapon10RangeGroundMinimum = DBarr[j][i]; }}
        else if(DBarr[0][i] == "Weapon10RangeHelicopters"){ for (var j = 1; j < DBarr.length; j++) { UnitParser[j].Weapon10RangeHelicopters = DBarr[j][i]; }}
        else if(DBarr[0][i] == "Weapon10RangeHelicoptersMinimum"){ for (var j = 1; j < DBarr.length; j++) { UnitParser[j].Weapon10RangeHelicoptersMinimum = DBarr[j][i]; }}
        else if(DBarr[0][i] == "Weapon10RangeMissiles"){ for (var j = 1; j < DBarr.length; j++) { UnitParser[j].Weapon10RangeMissiles = DBarr[j][i]; }}
        else if(DBarr[0][i] == "Weapon10RangeMissilesMinimum"){ for (var j = 1; j < DBarr.length; j++) { UnitParser[j].Weapon10RangeMissilesMinimum = DBarr[j][i]; }}
        else if(DBarr[0][i] == "Weapon10RangePlanes"){ for (var j = 1; j < DBarr.length; j++) { UnitParser[j].Weapon10RangePlanes = DBarr[j][i]; }}
        else if(DBarr[0][i] == "Weapon10RangePlanesMinimum"){ for (var j = 1; j < DBarr.length; j++) { UnitParser[j].Weapon10RangePlanesMinimum = DBarr[j][i]; }}
        else if(DBarr[0][i] == "Weapon10RangeShip"){ for (var j = 1; j < DBarr.length; j++) { UnitParser[j].Weapon10RangeShip = DBarr[j][i]; }}
        else if(DBarr[0][i] == "Weapon10RangeShipMinimum"){ for (var j = 1; j < DBarr.length; j++) { UnitParser[j].Weapon10RangeShipMinimum = DBarr[j][i]; }}
        else if(DBarr[0][i] == "Weapon10RayonPinned"){ for (var j = 1; j < DBarr.length; j++) { UnitParser[j].Weapon10RayonPinned = DBarr[j][i]; }}
        else if(DBarr[0][i] == "Weapon10ShotsPerSalvo"){ for (var j = 1; j < DBarr.length; j++) { UnitParser[j].Weapon10ShotsPerSalvo = DBarr[j][i]; }}
        else if(DBarr[0][i] == "Weapon10SupplyCost"){ for (var j = 1; j < DBarr.length; j++) { UnitParser[j].Weapon10SupplyCost = DBarr[j][i]; }}
        else if(DBarr[0][i] == "Weapon10Tags"){
            //separate tags (tag|tag|tag) into an array
                for (var j = 1; j < DBarr.length; j++) {
                    UnitParser[j].Weapon10Tags = DBarr[j][i];
                    var k = 0;
                    for (var l = 0; l< DBarr[j][i].length; l++){
                        if(DBarr[j][i].charAt(l) == "|"){
                            k++;
                        }
                        else{
                            UnitParser[j].Weapon10Tags[k] += DBarr[j][i].charAt(l);
                        }
                    }
                }
            }
        else if(DBarr[0][i] == "Weapon10TimeBetweenSalvos"){ for (var j = 1; j < DBarr.length; j++) { UnitParser[j].Weapon10TimeBetweenSalvos = DBarr[j][i]; }}
        else if(DBarr[0][i] == "Weapon10TimeBetweenShots"){ for (var j = 1; j < DBarr.length; j++) { UnitParser[j].Weapon10TimeBetweenShots = DBarr[j][i]; }}
        else if(DBarr[0][i] == "Weapon10Type"){ for (var j = 1; j < DBarr.length; j++) { UnitParser[j].Weapon10Type = DBarr[j][i]; }}
        else if(DBarr[0][i] == "Weapon11AP"){ for (var j = 1; j < DBarr.length; j++) { UnitParser[j].Weapon11AP = DBarr[j][i]; }}
        else if(DBarr[0][i] == "Weapon11AimTime"){ for (var j = 1; j < DBarr.length; j++) { UnitParser[j].Weapon11AimTime = DBarr[j][i]; }}
        else if(DBarr[0][i] == "Weapon11AngleDispersion"){ for (var j = 1; j < DBarr.length; j++) { UnitParser[j].Weapon11AngleDispersion = DBarr[j][i]; }}
        else if(DBarr[0][i] == "Weapon11Caliber"){ for (var j = 1; j < DBarr.length; j++) { UnitParser[j].Weapon11Caliber = DBarr[j][i]; }}
        else if(DBarr[0][i] == "Weapon11CanSmoke"){ for (var j = 1; j < DBarr.length; j++) { UnitParser[j].Weapon11CanSmoke = DBarr[j][i]; }}
        else if(DBarr[0][i] == "Weapon11CorrectedShotDispersionMultiplier"){ for (var j = 1; j < DBarr.length; j++) { UnitParser[j].Weapon11CorrectedShotDispersionMultiplier = DBarr[j][i]; }}
        else if(DBarr[0][i] == "Weapon11DispersionAtMaxRange"){ for (var j = 1; j < DBarr.length; j++) { UnitParser[j].Weapon11DispersionAtMaxRange = DBarr[j][i]; }}
        else if(DBarr[0][i] == "Weapon11DispersionAtMinRange"){ for (var j = 1; j < DBarr.length; j++) { UnitParser[j].Weapon11DispersionAtMinRange = DBarr[j][i]; }}
        else if(DBarr[0][i] == "Weapon11DisplayedAmmunition"){ for (var j = 1; j < DBarr.length; j++) { UnitParser[j].Weapon11DisplayedAmmunition = DBarr[j][i]; }}
        else if(DBarr[0][i] == "Weapon11FireTriggeringProbability"){ for (var j = 1; j < DBarr.length; j++) { UnitParser[j].Weapon11FireTriggeringProbability = DBarr[j][i]; }}
        else if(DBarr[0][i] == "Weapon11HE"){ for (var j = 1; j < DBarr.length; j++) { UnitParser[j].Weapon11HE = DBarr[j][i]; }}
        else if(DBarr[0][i] == "Weapon11HitProbability"){ for (var j = 1; j < DBarr.length; j++) { UnitParser[j].Weapon11HitProbability = DBarr[j][i]; }}
        else if(DBarr[0][i] == "Weapon11HitProbabilityWhileMoving"){ for (var j = 1; j < DBarr.length; j++) { UnitParser[j].Weapon11HitProbabilityWhileMoving = DBarr[j][i]; }}
        else if(DBarr[0][i] == "Weapon11MinimalCritProbability"){ for (var j = 1; j < DBarr.length; j++) { UnitParser[j].Weapon11MinimalCritProbability = DBarr[j][i]; }}
        else if(DBarr[0][i] == "Weapon11MinimalHitProbability"){ for (var j = 1; j < DBarr.length; j++) { UnitParser[j].Weapon11MinimalHitProbability = DBarr[j][i]; }}
        else if(DBarr[0][i] == "Weapon11MissileTimeBetweenCorrections"){ for (var j = 1; j < DBarr.length; j++) { UnitParser[j].Weapon11MissileTimeBetweenCorrections = DBarr[j][i]; }}
        else if(DBarr[0][i] == "Weapon11Name"){ for (var j = 1; j < DBarr.length; j++) { UnitParser[j].Weapon11Name = DBarr[j][i]; }}
        else if(DBarr[0][i] == "Weapon11Noise"){ for (var j = 1; j < DBarr.length; j++) { UnitParser[j].Weapon11Noise = DBarr[j][i]; }}
        else if(DBarr[0][i] == "Weapon11NumberOfSalvos"){ for (var j = 1; j < DBarr.length; j++) { UnitParser[j].Weapon11NumberOfSalvos = DBarr[j][i]; }}
        else if(DBarr[0][i] == "Weapon11PositionOnCard"){ for (var j = 1; j < DBarr.length; j++) { UnitParser[j].Weapon11PositionOnCard = DBarr[j][i]; }}
        else if(DBarr[0][i] == "Weapon11ProjectilesPerShot"){ for (var j = 1; j < DBarr.length; j++) { UnitParser[j].Weapon11ProjectilesPerShot = DBarr[j][i]; }}
        else if(DBarr[0][i] == "Weapon11RadiusSplashPhysicalDamage"){ for (var j = 1; j < DBarr.length; j++) { UnitParser[j].Weapon11RadiusSplashPhysicalDamage = DBarr[j][i]; }}
        else if(DBarr[0][i] == "Weapon11RadiusSplashSuppressDamage"){ for (var j = 1; j < DBarr.length; j++) { UnitParser[j].Weapon11RadiusSplashSuppressDamage = DBarr[j][i]; }}
        else if(DBarr[0][i] == "Weapon11RangeGround"){ for (var j = 1; j < DBarr.length; j++) { UnitParser[j].Weapon11RangeGround = DBarr[j][i]; }}
        else if(DBarr[0][i] == "Weapon11RangeGroundMinimum"){ for (var j = 1; j < DBarr.length; j++) { UnitParser[j].Weapon11RangeGroundMinimum = DBarr[j][i]; }}
        else if(DBarr[0][i] == "Weapon11RangeHelicopters"){ for (var j = 1; j < DBarr.length; j++) { UnitParser[j].Weapon11RangeHelicopters = DBarr[j][i]; }}
        else if(DBarr[0][i] == "Weapon11RangeHelicoptersMinimum"){ for (var j = 1; j < DBarr.length; j++) { UnitParser[j].Weapon11RangeHelicoptersMinimum = DBarr[j][i]; }}
        else if(DBarr[0][i] == "Weapon11RangeMissiles"){ for (var j = 1; j < DBarr.length; j++) { UnitParser[j].Weapon11RangeMissiles = DBarr[j][i]; }}
        else if(DBarr[0][i] == "Weapon11RangeMissilesMinimum"){ for (var j = 1; j < DBarr.length; j++) { UnitParser[j].Weapon11RangeMissilesMinimum = DBarr[j][i]; }}
        else if(DBarr[0][i] == "Weapon11RangePlanes"){ for (var j = 1; j < DBarr.length; j++) { UnitParser[j].Weapon11RangePlanes = DBarr[j][i]; }}
        else if(DBarr[0][i] == "Weapon11RangePlanesMinimum"){ for (var j = 1; j < DBarr.length; j++) { UnitParser[j].Weapon11RangePlanesMinimum = DBarr[j][i]; }}
        else if(DBarr[0][i] == "Weapon11RangeShip"){ for (var j = 1; j < DBarr.length; j++) { UnitParser[j].Weapon11RangeShip = DBarr[j][i]; }}
        else if(DBarr[0][i] == "Weapon11RangeShipMinimum"){ for (var j = 1; j < DBarr.length; j++) { UnitParser[j].Weapon11RangeShipMinimum = DBarr[j][i]; }}
        else if(DBarr[0][i] == "Weapon11RayonPinned"){ for (var j = 1; j < DBarr.length; j++) { UnitParser[j].Weapon11RayonPinned = DBarr[j][i]; }}
        else if(DBarr[0][i] == "Weapon11ShotsPerSalvo"){ for (var j = 1; j < DBarr.length; j++) { UnitParser[j].Weapon11ShotsPerSalvo = DBarr[j][i]; }}
        else if(DBarr[0][i] == "Weapon11SupplyCost"){ for (var j = 1; j < DBarr.length; j++) { UnitParser[j].Weapon11SupplyCost = DBarr[j][i]; }}
        else if(DBarr[0][i] == "Weapon11Tags"){ for (var j = 1; j < DBarr.length; j++) { UnitParser[j].Weapon11Tags = DBarr[j][i]; }}
        else if(DBarr[0][i] == "Weapon11TimeBetweenSalvos"){ for (var j = 1; j < DBarr.length; j++) { UnitParser[j].Weapon11TimeBetweenSalvos = DBarr[j][i]; }}
        else if(DBarr[0][i] == "Weapon11TimeBetweenShots"){ for (var j = 1; j < DBarr.length; j++) { UnitParser[j].Weapon11TimeBetweenShots = DBarr[j][i]; }}
        else if(DBarr[0][i] == "Weapon11Type"){
            //separate tags (tag|tag|tag) into an array
                for (var j = 1; j < DBarr.length; j++) {
                    UnitParser[j].Weapon11Tags = DBarr[j][i];
                    var k = 0;
                    for (var l = 0; l< DBarr[j][i].length; l++){
                        if(DBarr[j][i].charAt(l) == "|"){
                            k++;
                        }
                        else{
                            UnitParser[j].Weapon11Tags[k] += DBarr[j][i].charAt(l);
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
    }
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
