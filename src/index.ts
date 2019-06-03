import {Actor, Component, SaveGame} from "satisfactory-json";
import { SatisfactoryBlueprint, Transform } from "./schema";

export interface InstantiatedBlueprint {
    newActors: Actor[];
    newComponents: Component[];
    changesToSubsystems: any; // TODO

}

/**
 * Instantiates a blueprint and returns information needed to place the actors and components into the save game.
 * @param blueprint The blueprint that should be instantiated
 * @param transform Position and rotation at which the blueprint should be instantiated
 * @param saveGame SaveGame to look up stuff in the subsystems
 */
export function createActorsFromBlueprint(blueprint: SatisfactoryBlueprint, transform: Transform, saveGame: SaveGame): InstantiatedBlueprint {
    throw Error("not implemented")
}

/**
 * Creates a new blueprint from the set of actors 
 * @param actorsToInclude All the actors that should make up the blueprint
 * @param saveGame The save game is needed to look up stuff in the subsystems and in the corresponding components
 */
export function createBlueprintFromActors(actorsToInclude: Actor[], saveGame: SaveGame): SatisfactoryBlueprint {
    throw Error("not implemented")
}
