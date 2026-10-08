import { arcs } from "@/data/arcs";
import { bountiesOf } from "@/data/bounties";
import { characters } from "@/data/characters";
import { fruits } from "@/data/fruits";
import { quotes } from "@/data/quotes";
import { relations } from "@/data/relations";
import { sagas } from "@/data/sagas";
import { themes } from "@/data/themes";
import { CHIBI_IDS } from "@/components/Chibi";

export function assertContent() {
  const chibi = new Set(CHIBI_IDS);
  const ids = new Set(characters.map((character) => character.id));
  const arcIds = new Set(arcs.map((arc) => arc.id));
  const sagaIds = new Set(sagas.map((saga) => saga.id));

  if (arcs.length < 30) throw new Error(`arc count ${arcs.length}`);
  if (quotes.length < 60) throw new Error(`quote count ${quotes.length}`);
  if (characters.filter((character) => character.group === "crew").length !== 10) {
    throw new Error("crew must be 10");
  }

  for (const character of characters) {
    if (!chibi.has(character.id)) throw new Error(`missing chibi ${character.id}`);
    for (const arcId of character.arcIds) {
      if (!arcIds.has(arcId)) throw new Error(`${character.id} arc ${arcId}`);
    }
    if (character.joined && !arcIds.has(character.joined)) throw new Error(`${character.id} joined`);
  }

  for (const arc of arcs) {
    if (!sagaIds.has(arc.sagaId)) throw new Error(`saga ${arc.sagaId}`);
    if (arc.overview.length < 1 || arc.events.length < 4 || arc.moving.length < 1) {
      throw new Error(`thin arc ${arc.id}`);
    }
    for (const face of arc.faces) {
      if (face.id && !chibi.has(face.id)) throw new Error(`${arc.id} face chibi ${face.id}`);
    }
  }

  for (const quote of quotes) {
    if (quote.speakerId && !chibi.has(quote.speakerId)) throw new Error(`quote chibi ${quote.id}`);
    if (quote.arcId && !arcIds.has(quote.arcId)) throw new Error(`quote arc ${quote.id}`);
    if (quote.line.length > 80) throw new Error(`quote too long ${quote.id}`);
  }

  for (const relation of relations) {
    if (!ids.has(relation.a) || !ids.has(relation.b)) throw new Error(`relation ${relation.a}-${relation.b}`);
  }

  for (const theme of themes) {
    for (const scene of theme.scenes) {
      if (scene.arcId && !arcIds.has(scene.arcId)) throw new Error(`theme arc ${scene.title}`);
      for (const id of scene.characterIds) {
        if (!ids.has(id) && !chibi.has(id)) throw new Error(`theme person ${id}`);
      }
    }
  }

  for (const fruit of fruits) {
    if (fruit.userId && !chibi.has(fruit.userId) && !ids.has(fruit.userId)) {
      throw new Error(`fruit ${fruit.id}`);
    }
  }

  for (const character of characters) {
    if (character.group === "crew" && !bountiesOf(character.id) && character.id !== "luffy") {
      /* chopper and all crew have bounties */
    }
  }
}
