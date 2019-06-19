// tslint:disable: max-line-length
interface ClassAndMark {
    className: string;
    mark?: number;
}

export const classNameMap: {[id: string]: ClassAndMark} = {
    // buildings
    '/Game/FactoryGame/-Shared/Crate/BP_Crate.BP_Crate_C': {
        className: 'crate'
    },

    '/Game/FactoryGame/Buildable/Building/Foundation/Build_Foundation_8x2_01.Build_Foundation_8x2_01_C': {
        className: 'foundation8x2'
    },
    '/Game/FactoryGame/Buildable/Building/Foundation/Build_Foundation_8x4_01.Build_Foundation_8x4_01_C': {
        className: 'foundation8x4'
    },
    '/Game/FactoryGame/Buildable/Building/Ramp/Build_Ramp_8x2_01.Build_Ramp_8x2_01_C': {
        className: 'ramp8x2'
    },
    '/Game/FactoryGame/Buildable/Building/Ramp/Build_Ramp_8x4_01.Build_Ramp_8x4_01_C': {
        className: 'ramp8x4'
    },
    '/Game/FactoryGame/Buildable/Building/Stair/Build_Stairs_Left_01.Build_Stairs_Left_01_C': {
        className: 'stairsLeft'
    },
    '/Game/FactoryGame/Buildable/Building/Walkway/Build_WalkwayCross.Build_WalkwayCross_C': {
        className: 'walkwayCross'
    },
    '/Game/FactoryGame/Buildable/Building/Walkway/Build_WalkwayRamp.Build_WalkwayRamp_C': {
        className: 'walkwayRamp'
    },
    '/Game/FactoryGame/Buildable/Building/Walkway/Build_WalkwayStraight.Build_WalkwayStraight_C': {
        className: 'walkwayStraight'
    },
    '/Game/FactoryGame/Buildable/Building/Walkway/Build_WalkwayT.Build_WalkwayT_C': {
        className: 'walkwayT'
    },
    '/Game/FactoryGame/Buildable/Building/Walkway/Build_WalkwayTrun.Build_WalkwayTrun_C': {
        className: 'walkwayTurn'
    },
    '/Game/FactoryGame/Buildable/Building/Wall/Build_Wall_8x4_01.Build_Wall_8x4_01_C': {
      className: 'wall',
      mark: 1 // wood
    },
    '/Game/FactoryGame/Buildable/Building/Wall/Build_Wall_8x4_02.Build_Wall_8x4_02_C': {
      className: 'wall',
      mark: 2 // steel
    },
    '/Game/FactoryGame/Buildable/Building/Wall/Build_Wall_Conveyor_8x4_01_Steel.Build_Wall_Conveyor_8x4_01_Steel_C': {
      className: 'wallConveyor3',
      mark: 2
    },
    '/Game/FactoryGame/Buildable/Building/Wall/Build_Wall_Conveyor_8x4_01.Build_Wall_Conveyor_8x4_01_C': {
      className: 'wallConveyor3',
      mark: 1
    },
    '/Game/FactoryGame/Buildable/Building/Wall/Build_Wall_Conveyor_8x4_02_Steel.Build_Wall_Conveyor_8x4_02_Steel_C': {
      className: 'wallConveyor2',
      mark: 2
    },
    '/Game/FactoryGame/Buildable/Building/Wall/Build_Wall_Conveyor_8x4_02.Build_Wall_Conveyor_8x4_02_C': {
      className: 'wallConveyor2',
      mark: 1
    },
    '/Game/FactoryGame/Buildable/Building/Wall/Build_Wall_Conveyor_8x4_03_Steel.Build_Wall_Conveyor_8x4_03_Steel_C': {
      className: 'wallConveyor1',
      mark: 2
    },
    '/Game/FactoryGame/Buildable/Building/Wall/Build_Wall_Conveyor_8x4_03.Build_Wall_Conveyor_8x4_03_C': {
      className: 'wallConveyor1',
      mark: 1
    },
    '/Game/FactoryGame/Buildable/Building/Wall/Build_Wall_Conveyor_8x4_04_Steel.Build_Wall_Conveyor_8x4_04_Steel_C': {
      className: 'wallConveyorPerpendicular',
      mark: 2
    },
    '/Game/FactoryGame/Buildable/Building/Wall/Build_Wall_Conveyor_8x4_04.Build_Wall_Conveyor_8x4_04_C': {
      className: 'wallConveyorPerpendicular',
      mark: 1
    },
    '/Game/FactoryGame/Buildable/Building/Wall/Build_Wall_Door_8x4_01_Steel.Build_Wall_Door_8x4_01_Steel_C': {
      className: 'wallDoorCenter',
      mark: 2
    },
    '/Game/FactoryGame/Buildable/Building/Wall/Build_Wall_Door_8x4_01.Build_Wall_Door_8x4_01_C': {
      className: 'wallDoorCenter',
      mark: 1
    },
    '/Game/FactoryGame/Buildable/Building/Wall/Build_Wall_Door_8x4_02_Steel.Build_Wall_Door_8x4_02_Steel_C': {
      className: 'wallDoorLeft',
      mark: 2,
    },
    '/Game/FactoryGame/Buildable/Building/Wall/Build_Wall_Door_8x4_02.Build_Wall_Door_8x4_02_C': {
      className: 'wallDoorLeft',
      mark: 1
    },
    '/Game/FactoryGame/Buildable/Building/Wall/Build_Wall_Door_8x4_03_Steel.Build_Wall_Door_8x4_03_Steel_C': {
      className: 'wallDoorRight',
      mark: 2
    },
    '/Game/FactoryGame/Buildable/Building/Wall/Build_Wall_Door_8x4_03.Build_Wall_Door_8x4_03_C': {
      className: 'wallDoorRight',
      mark: 1
    },
    '/Game/FactoryGame/Buildable/Building/Wall/Build_Wall_Gate_8x4_01.Build_Wall_Gate_8x4_01_C': {
      className: 'wallGate'
    },
    '/Game/FactoryGame/Buildable/Factory/AssemblerMk1/Build_AssemblerMk1.Build_AssemblerMk1_C': {
      className: 'assembler',
      mark: 1
    },
    /*"/Game/FactoryGame/Buildable/Factory/AssemblerMk2/Build_AssemblerMk2.Build_AssemblerMk2_C": {
      className: "assembler",
      mark: 2
    },*/
    '/Game/FactoryGame/Buildable/Factory/CA_Merger/Build_ConveyorAttachmentMerger.Build_ConveyorAttachmentMerger_C': {
      className: 'merger'
    },
    '/Game/FactoryGame/Buildable/Factory/CA_Splitter/Build_ConveyorAttachmentSplitter.Build_ConveyorAttachmentSplitter_C': {
      className: 'splitter'
    },
    '/Game/FactoryGame/Buildable/Factory/CA_SplitterProgrammable/Build_ConveyorAttachmentSplitterProgrammable.Build_ConveyorAttachmentSplitterProgrammable_C': {
      className: 'splitterProgrammable'
    },
    '/Game/FactoryGame/Buildable/Factory/CA_SplitterSmart/Build_ConveyorAttachmentSplitterSmart.Build_ConveyorAttachmentSplitterSmart_C': {
      className: 'splitterSmart'
    },
    '/Game/FactoryGame/Buildable/Factory/ConstructorMk1/Build_ConstructorMk1.Build_ConstructorMk1_C': {
      className: 'contructor',
      mark: 1
    },
    /*"/Game/FactoryGame/Buildable/Factory/ConstructorMk2/Build_ConstructorMk2.Build_ConstructorMk2_C": {
      className: "constructor",
      mark: 2
    },*/

    '/Game/FactoryGame/Buildable/Factory/ConveyorPole/Build_ConveyorPole.Build_ConveyorPole_C': {
      className: 'conveyorPole'
      // mark is used for the height of the pole
    },
    '/Game/FactoryGame/Buildable/Factory/ConveyorPoleStackable/Build_ConveyorPoleStackable.Build_ConveyorPoleStackable_C': {
      className: 'conveyorPoleStackable'
    },
    '/Game/FactoryGame/Buildable/Factory/FoundryMk1/Build_FoundryMk1.Build_FoundryMk1_C': {
      className: 'foundry',
      mark: 1
    },
/*    "/Game/FactoryGame/Buildable/Factory/FoundryMk2/Build_FoundryMk2.Build_FoundryMk2_C": {
      className: "foundry",
      mark: 2
    },*/
    '/Game/FactoryGame/Buildable/Factory/GeneratorBiomass/Build_GeneratorBiomass.Build_GeneratorBiomass_C': {
      className: 'generatorBiomass'
    },
    '/Game/FactoryGame/Buildable/Factory/GeneratorCoal/Build_GeneratorCoal.Build_GeneratorCoal_C': {
      className: 'generatorCoal'
    },
    '/Game/FactoryGame/Buildable/Factory/GeneratorFuel/Build_GeneratorFuel.Build_GeneratorFuel_C': {
      className: 'generatorFuel'
    },
    '/Game/FactoryGame/Buildable/Factory/GeneratorGeoThermal/Build_GeneratorGeoThermal.Build_GeneratorGeoThermal_C': {
      className: 'generatorGeoThermal'
    },
    '/Game/FactoryGame/Buildable/Factory/JumpPad/Build_JumpPad.Build_JumpPad_C': {
      className: 'jumpPad'
    },
    '/Game/FactoryGame/Buildable/Factory/JumpPad/Build_JumpPadTilted.Build_JumpPadTilted_C': {
      className: 'jumpPadTilted'
    },
    '/Game/FactoryGame/Buildable/Factory/LandingPad/Build_LandingPad.Build_LandingPad_C': {
      className: 'landingPad'
    },
    '/Game/FactoryGame/Buildable/Factory/LookoutTower/Build_LookoutTower.Build_LookoutTower_C': {
      className: 'lookoutTower'
    },
    '/Game/FactoryGame/Buildable/Factory/ManufacturerMk1/Build_ManufacturerMk1.Build_ManufacturerMk1_C': {
      className: 'manufacturer',
      mark: 1
    },
    /*"/Game/FactoryGame/Buildable/Factory/ManufacturerMk2/Build_ManufacturerMk2.Build_ManufacturerMk2_C": {
      className: "manufacturer",
      mark: 2
    },*/
    '/Game/FactoryGame/Buildable/Factory/MinerMK1/Build_MinerMk1.Build_MinerMk1_C': {
      className: 'miner',
      mark: 1
    },
    '/Game/FactoryGame/Buildable/Factory/MinerMk2/Build_MinerMk2.Build_MinerMk2_C': {
      className: 'miner',
      mark: 2
    },
    /*"/Game/FactoryGame/Buildable/Factory/MinerMk3/Build_MinerMk3.Build_MinerMk3_C": {
      className: "miner",
      mark: 3
    },*/
    '/Game/FactoryGame/Buildable/Factory/OilPump/Build_OilPump.Build_OilPump_C': {
      className: 'oilPump'
    },
    '/Game/FactoryGame/Buildable/Factory/OilRefinery/Build_OilRefinery.Build_OilRefinery_C': {
      className: 'oilRefinery'
    },
    '/Game/FactoryGame/Buildable/Factory/PowerPoleMk1/Build_PowerPoleMk1.Build_PowerPoleMk1_C': {
      className: 'powerPole',
      mark: 1
    },
    '/Game/FactoryGame/Buildable/Factory/PowerPoleMk2/Build_PowerPoleMk2.Build_PowerPoleMk2_C': {
      className: 'powerPole',
      mark: 2
    },
    '/Game/FactoryGame/Buildable/Factory/PowerPoleMk3/Build_PowerPoleMk3.Build_PowerPoleMk3_C': {
      className: 'powerPole',
      mark: 3
    },
    '/Game/FactoryGame/Buildable/Factory/RadarTower/Build_RadarTower.Build_RadarTower_C': {
      className: 'radarTower'
    },
    '/Game/FactoryGame/Buildable/Factory/SmelterMk1/Build_SmelterMk1.Build_SmelterMk1_C': {
      className: 'smelter',
      mark: 1
    },
    /*"/Game/FactoryGame/Buildable/Factory/SmelterMk2/Build_SmelterMk2.Build_SmelterMk2_C": {
      className: "smelter",
      mark: 1
    },*/
    '/Game/FactoryGame/Buildable/Factory/StorageContainerMk1/Build_StorageContainerMk1.Build_StorageContainerMk1_C': {
      className: 'storageContaimer',
      mark: 1
    },
    '/Game/FactoryGame/Buildable/Factory/StorageContainerMk2/Build_StorageContainerMk2.Build_StorageContainerMk2_C': {
      className: 'storageContainer',
      mark: 2
    },
    '/Game/FactoryGame/Buildable/Factory/StoragePlayer/Build_StoragePlayer.Build_StoragePlayer_C': {
      className: 'playerStorage'
    },
    '/Game/FactoryGame/Buildable/Factory/TruckStation/Build_TruckStation.Build_TruckStation_C': {
      className: 'truckStation'
    },
    '/Game/FactoryGame/Buildable/Factory/WorkBench/Build_WorkBench.Build_WorkBench_C': {
      className: 'workbench'
    },
    '/Game/FactoryGame/Buildable/Factory/Workshop/Build_Workshop.Build_Workshop_C': {
      className: 'workshop'
    },

    // connections
    '/Game/FactoryGame/Buildable/Factory/ConveyorBeltMk1/Build_ConveyorBeltMk1.Build_ConveyorBeltMk1_C': {
      className: 'conveyorBelt',
      mark: 1
    },
    '/Game/FactoryGame/Buildable/Factory/ConveyorBeltMk2/Build_ConveyorBeltMk2.Build_ConveyorBeltMk2_C': {
      className: 'conveyorBelt',
      mark: 2
    },
    '/Game/FactoryGame/Buildable/Factory/ConveyorBeltMk3/Build_ConveyorBeltMk3.Build_ConveyorBeltMk3_C': {
      className: 'conveyorBelt',
      mark: 3
    },
    '/Game/FactoryGame/Buildable/Factory/ConveyorBeltMk4/Build_ConveyorBeltMk4.Build_ConveyorBeltMk4_C': {
      className: 'conveyorBelt',
      mark: 4
    },
    '/Game/FactoryGame/Buildable/Factory/ConveyorLiftMk1/Build_ConveyorLiftMk1.Build_ConveyorLiftMk1_C': {
      className: 'conveyorLift',
      mark: 1
    },
    '/Game/FactoryGame/Buildable/Factory/ConveyorLiftMk2/Build_ConveyorLiftMk2.Build_ConveyorLiftMk2_C': {
      className: 'conveyorLift',
      mark: 2
    },
    '/Game/FactoryGame/Buildable/Factory/ConveyorLiftMk3/Build_ConveyorLiftMk3.Build_ConveyorLiftMk3_C': {
      className: 'conveyorLift',
      mark: 3
    },
    '/Game/FactoryGame/Buildable/Factory/ConveyorLiftMk4/Build_ConveyorLiftMk4.Build_ConveyorLiftMk4_C': {
      className: 'conveyorLift',
      mark: 4
    },
    '/Game/FactoryGame/Buildable/Factory/PowerLine/Build_PowerLine.Build_PowerLine_C': {
      className: 'powerLine'
    }

};

export const recipeMap = {
    ironRod: '/Game/Factory/IronRod'
};
