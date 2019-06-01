# satisfactory-blueprint
*Exchangeable blueprints of Satisfactory factories*

## Goal
The goal is to create a file format that allows to take a factory from a Satisfactory save file and instantiate it at another place in the world or in a different save file.

The blueprint should be created in a human-readable JSON format that can be easily editited by humans or other tools. It should only contain plain-text so that it is easily shareable. A blueprint should only contain as much data as needed to instantiate the factory. It should not necessary need to change when the save file format changes and old blueprints should be migrateable to newer formats.

## Ideas
- All coordinates should be relative to an origin at `[0, 0, 0]`. 
- Only store Buildables, no environment, items, players or creatures.
- Don't store color information as the color slots are differently assigned by each user?
- Don't store inventory information? 
- Don't store Miners / OilPumps / GeoThermalGenerators as they need to be connected to resource nodes?
- Don't store SpaceElevator / HUB (&integrated parts)? As there should only be one in a game?
- Don't store vehicles and their paths as they are heavily bound to the terrain?
- Only store connected systems, no loose PowerLines or ConveyorBelts
- Instantiate buildings with no legs?

## Buildings
### Foundations
#### Foundation_8x2
#### Foundation_8x4
#### Ramp_8x2
#### Ramp_8x4
#### Stairs_Left
#### Stairs_Right
#### Walkway_Cross
#### Walkway_Ramp
#### Walkway_Straight
#### Walkway_T
#### Walkway_Turn
#### Wall_8x4_01
#### Wall_8x4_02
#### Wall_Conveyor_8x4_01
#### Wall_Conveyor_8x4_02
#### Wall_Conveyor_8x4_03
#### Wall_Conveyor_8x4_04
#### Wall_Door_8x4_01
#### Wall_Door_8x4_02
#### Wall_Door_8x4_03
#### Wall_Gate_8x4_01
#### Build_Wall_1a
#### Build_Wall_2a ?
### Machines
#### Assembler (Mk1-2)
#### ConveyorSplitter
#### ConveyorMerger
#### ConveyorSplitter_Programmable
#### ConveyorSplitter_Smart
#### Constructor (Mk1-2)
#### ConveyorPole
#### ConveyorPoleStackable
#### Foundry (Mk1-2)
#### GeneratorBiomass
#### GeneratorCoal
#### GeneratorFuel
#### GeneratorGeoThermal
#### JumpPad
#### JumpPadTilted
#### LandingPad
#### LookoutTower
#### Manufacturer (Mk1-2)
#### ~~Miner (Mk1-2)~~
#### ~~OilPump~~
#### OilRefinery
#### PowerPole (Mk1-3)
#### RadarTower
#### Smelter (Mk1-2)
#### ~~SpaceElevator~~
#### StorageContainer (Mk1-2)
#### StoragePlayer
#### ~~TradingPost~~
#### TruckStation
#### WorkBench
#### Workshop

### Connectors
#### ConveyorBelt (Mk1-4)
#### ConveyorLift (Mk1-4)
#### PowerLine