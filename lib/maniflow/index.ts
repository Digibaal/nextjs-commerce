import { stationsA } from './stations-a';
import { stationsB } from './stations-b';
import { stationsC } from './stations-c';
import type { Station } from './types';

export * from './types';
export * from './program';
export { tools } from './tools';
export { examples } from './examples';

export const stations: Station[] = [...stationsA, ...stationsB, ...stationsC];

/** De twaalf genummerde stations, zonder Perron 0. */
export const route = stations.filter((s) => s.kind === 'station');

export const platform = stations.find((s) => s.kind === 'platform')!;

export function getStation(slug: string) {
  return stations.find((s) => s.slug === slug);
}

export function neighbours(slug: string) {
  const i = stations.findIndex((s) => s.slug === slug);
  return {
    previous: i > 0 ? stations[i - 1] : undefined,
    next: i >= 0 && i < stations.length - 1 ? stations[i + 1] : undefined
  };
}

export const stationNumber = (s: Station) => String(s.id).padStart(2, '0');
