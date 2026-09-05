export type Phase = {
  id: string;
  line: string;
  name: string;
  claim: string;
  stations: number[];
};

export type Translation = {
  claim: string;
  translation: string;
  keep?: string;
};

export type Debunk = {
  claim: string;
  check: string;
};

export type Experiment = {
  title: string;
  duration: string;
  setup: string[];
  measure: string;
  abort?: string;
};

export type Station = {
  id: number;
  slug: string;
  kind: 'platform' | 'station' | 'depot';
  name: string;
  dutch: string;
  phase: string;
  duration: string;
  /** 1. Arrival Board */
  arrivalBoard: string;
  /** doel */
  goal: string;
  /** kernconcept */
  coreConcept: string;
  /** 2. The Big Idea */
  bigIdea: string[];
  /** belangrijkste inzicht */
  keyInsight: string;
  /** 3. Manifestation Translation */
  translations: Translation[];
  /** 4. Reality Check */
  realityCheck: Debunk[];
  /** 5. Platform Questions */
  platformQuestions: string[];
  /** 6. Ticket to Action */
  ticket: { title: string; time: string; steps: string[] };
  /** 7. Experiment */
  experiment: Experiment;
  /** 8. Evidence Log */
  evidencePrompts: string[];
  /** 9. Reroute */
  reroute: string[];
  /** verwacht resultaat */
  expectedResult: string;
  /** 10. Departure Note */
  departureNote: string;
  /** koppeling naar vaste tools */
  tools: string[];
};

export type Tool = {
  slug: string;
  name: string;
  subtitle: string;
  usedAt: string;
  what: string;
  how: string[];
  columns?: string[];
  trap: string;
};

export type DomainExample = {
  slug: string;
  domain: string;
  headline: string;
  start: string;
  destination: string;
  translation: string;
  friction: { type: 'intern' | 'extern' | 'structureel'; text: string }[];
  experiment: string;
  evidence: string[];
  reroute: string;
  note: string;
};

export type Track = {
  slug: string;
  days: number;
  name: string;
  forWho: string;
  rhythm: string;
  perDay: string;
  schedule: { label: string; content: string }[];
  warning: string;
};
