import { eastArcs } from "@/data/arcs-east";
import { newWorldArcs } from "@/data/arcs-newworld";
import { paradiseArcs } from "@/data/arcs-paradise";
import type { Arc } from "@/data/types";

export const arcs: Arc[] = [...eastArcs, ...paradiseArcs, ...newWorldArcs];

export function arcById(id: string) {
  return arcs.find((arc) => arc.id === id);
}

export function arcsInSaga(sagaId: string) {
  return arcs.filter((arc) => arc.sagaId === sagaId);
}

export function arcNeighbors(id: string) {
  const index = arcs.findIndex((arc) => arc.id === id);
  return { prev: index > 0 ? arcs[index - 1] : undefined, next: arcs[index + 1] };
}
