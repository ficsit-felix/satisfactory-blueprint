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
- Don't store Miners / GeoThermalGenerators as they need to be connected to resource nodes?
- Don't store SpaceElevator / HUB (&integrated parts)? As there should only be one in a game?
- Only store connected systems, no loose PowerLines or ConveyorBelts
- Instantiate buildings with no legs?