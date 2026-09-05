'use client';

import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { Annot, Eyebrow } from './bits';
import { route, stationNumber, stations } from 'lib/maniflow';

const KEY = 'maniflowstations.journaal.v1';

type LogRow = {
  id: string;
  date: string;
  action: string;
  expected: string;
  happened: string;
  reaction: string;
  energy: string;
  assumption: 'sterker' | 'zwakker' | 'onveranderd';
};

type WeekRow = {
  id: string;
  week: string;
  movement: string;
  evidence: string;
  alignment: string;
};

type State = {
  destination: string;
  recognise: string;
  need: string;
  nextReroute: string;
  visited: number[];
  log: LogRow[];
  weeks: WeekRow[];
};

const empty: State = {
  destination: '',
  recognise: '',
  need: '',
  nextReroute: '',
  visited: [],
  log: [],
  weeks: []
};

const uid = () => Math.random().toString(36).slice(2, 9);
const today = () => new Date().toISOString().slice(0, 10);

export function Journal() {
  const [state, setState] = useState<State>(empty);
  const [ready, setReady] = useState(false);
  const [savedAt, setSavedAt] = useState<string | null>(null);
  const first = useRef(true);

  useEffect(() => {
    try {
      const raw = window.localStorage.getItem(KEY);
      if (raw) setState({ ...empty, ...(JSON.parse(raw) as Partial<State>) });
    } catch {
      /* privémodus of geblokkeerde opslag: we werken gewoon zonder opslag verder */
    }
    setReady(true);
  }, []);

  useEffect(() => {
    if (!ready) return;
    if (first.current) {
      first.current = false;
      return;
    }
    try {
      window.localStorage.setItem(KEY, JSON.stringify(state));
      setSavedAt(
        new Date().toLocaleTimeString('nl-NL', {
          hour: '2-digit',
          minute: '2-digit'
        })
      );
    } catch {
      /* opslag niet beschikbaar */
    }
  }, [state, ready]);

  const patch = useCallback(
    (p: Partial<State>) => setState((s) => ({ ...s, ...p })),
    []
  );

  const toggle = (id: number) =>
    setState((s) => ({
      ...s,
      visited: s.visited.includes(id)
        ? s.visited.filter((x) => x !== id)
        : [...s.visited, id]
    }));

  const markdown = useMemo(() => renderMarkdown(state), [state]);

  const download = () => {
    const blob = new Blob([markdown], { type: 'text/markdown;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `maniflowstations-journaal-${today()}.md`;
    a.click();
    URL.revokeObjectURL(url);
  };

  const wipe = () => {
    if (!window.confirm('Alles wissen? Dit kan niet ongedaan worden gemaakt.'))
      return;
    try {
      window.localStorage.removeItem(KEY);
    } catch {
      /* niets te wissen */
    }
    setState(empty);
  };

  const done = state.visited.length;

  return (
    <>
      <header
        className="shell"
        style={{ paddingBlock: 'clamp(2.5rem, 6vw, 4.5rem) 1.5rem' }}
      >
        <Eyebrow>Journaal</Eyebrow>
        <h1
          style={{
            fontSize: 'clamp(2.2rem, 6vw, 3.6rem)',
            letterSpacing: '-0.035em'
          }}
        >
          Je reisdocument.
        </h1>
        <p className="hero-lede" style={{ marginTop: '1.4rem' }}>
          Alles hieronder blijft in je eigen browser staan. Er is geen account,
          geen server en geen moment waarop iemand anders dit leest. Exporteer
          af en toe naar markdown — een browser is geen archief.
        </p>
        <div className="cluster noprint" style={{ marginTop: '2rem' }}>
          <button className="btn" type="button" onClick={download}>
            Exporteer naar markdown
          </button>
          <button
            className="btn btn-ghost"
            type="button"
            onClick={() => window.print()}
          >
            Print
          </button>
          <button className="btn btn-ghost" type="button" onClick={wipe}>
            Wis alles
          </button>
          {savedAt ? (
            <span className="saved">Opgeslagen om {savedAt}</span>
          ) : null}
        </div>
      </header>

      <div className="shell" style={{ paddingBottom: '3rem' }}>
        {/* ------------------------------------------------------- routekaart */}
        <Annot n="01" label="Routekaart">
          <label className="field">
            <span>Bestemming — in één zin</span>
            <textarea
              rows={2}
              value={state.destination}
              onChange={(e) => patch({ destination: e.target.value })}
              placeholder="Waar wil je heen? Nog geen plan — een richting."
            />
          </label>
          <label className="field">
            <span>Herkenzin — ik zou weten dat ik er ben als…</span>
            <textarea
              rows={2}
              value={state.recognise}
              onChange={(e) => patch({ recognise: e.target.value })}
              placeholder="Iets wat een camera zou kunnen zien. Geen gevoel."
            />
          </label>
          <div className="cols2">
            <label className="field">
              <span>Onderliggende behoefte — één woord</span>
              <input
                value={state.need}
                onChange={(e) => patch({ need: e.target.value })}
                placeholder="rust · autonomie · erkenning · veiligheid · betekenis"
              />
            </label>
            <label className="field">
              <span>Volgende Reroute Moment</span>
              <input
                type="date"
                value={state.nextReroute}
                onChange={(e) => patch({ nextReroute: e.target.value })}
              />
            </label>
          </div>
        </Annot>

        {/* -------------------------------------------------------- voortgang */}
        <Annot n="02" label="Reisstatus">
          <p className="dim measure" style={{ marginBottom: '1.2rem' }}>
            Vink af waar je bent geweest. Dit is geen streak en er wordt niets
            geteld dat je tegen jezelf kunt gebruiken — {done} van de{' '}
            {stations.length} haltes aangedaan.
          </p>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(15rem, 1fr))',
              gap: '0.1rem 1.5rem'
            }}
          >
            {stations.map((s) => (
              <label
                key={s.slug}
                style={{
                  display: 'flex',
                  gap: '0.7rem',
                  alignItems: 'baseline',
                  padding: '0.55rem 0',
                  borderTop: '1px solid var(--rule-soft)',
                  cursor: 'pointer',
                  fontSize: '0.95rem'
                }}
              >
                <input
                  type="checkbox"
                  checked={state.visited.includes(s.id)}
                  onChange={() => toggle(s.id)}
                  style={{ accentColor: 'var(--signal)' }}
                />
                <span className="mono faint" style={{ minWidth: '1.8rem' }}>
                  {stationNumber(s)}
                </span>
                <span>{s.name}</span>
              </label>
            ))}
          </div>
        </Annot>

        {/* ------------------------------------------------------ evidence log */}
        <Annot n="03" label="Evidence Log">
          <p className="dim measure" style={{ marginBottom: '1.4rem' }}>
            Vul de verwachting in vóórdat je de handeling doet. Anders herinner
            je je achteraf dat je het al wist, en dan is het log een dagboek
            geworden.
          </p>

          {state.log.length === 0 ? (
            <p className="mono faint">Nog geen regels.</p>
          ) : (
            <div>
              <div
                className="logrow mono faint"
                style={{
                  borderTop: '1px solid var(--ink)',
                  paddingBottom: '0.4rem'
                }}
              >
                <span>Handeling</span>
                <span>Verwachting</span>
                <span>Wat er gebeurde</span>
                <span>Reactie · energie</span>
                <span>Aanname</span>
              </div>
              {state.log.map((r) => (
                <div className="logrow" key={r.id}>
                  <div>
                    <p className="mono faint" style={{ margin: '0 0 0.3rem' }}>
                      {r.date}
                    </p>
                    <Auto
                      value={r.action}
                      onChange={(v) => editLog(setState, r.id, { action: v })}
                      placeholder="Wat deed je?"
                    />
                  </div>
                  <Auto
                    value={r.expected}
                    onChange={(v) => editLog(setState, r.id, { expected: v })}
                    placeholder="Wat verwachtte je?"
                  />
                  <Auto
                    value={r.happened}
                    onChange={(v) => editLog(setState, r.id, { happened: v })}
                    placeholder="Wat gebeurde er feitelijk?"
                  />
                  <div>
                    <Auto
                      value={r.reaction}
                      onChange={(v) => editLog(setState, r.id, { reaction: v })}
                      placeholder="Wie reageerde, en hoe?"
                    />
                    <label
                      className="field"
                      style={{ marginTop: '0.5rem', marginBottom: 0 }}
                    >
                      <span>Energie −2…+2</span>
                      <input
                        value={r.energy}
                        onChange={(e) =>
                          editLog(setState, r.id, { energy: e.target.value })
                        }
                        inputMode="numeric"
                      />
                    </label>
                  </div>
                  <div>
                    <select
                      value={r.assumption}
                      onChange={(e) =>
                        editLog(setState, r.id, {
                          assumption: e.target.value as LogRow['assumption']
                        })
                      }
                      style={{
                        width: '100%',
                        font: 'inherit',
                        fontSize: '0.85rem',
                        background: 'var(--paper-2)',
                        color: 'var(--ink)',
                        border: '1px solid var(--rule)',
                        padding: '0.5rem'
                      }}
                    >
                      <option value="sterker">Sterker</option>
                      <option value="zwakker">Zwakker</option>
                      <option value="onveranderd">Onveranderd</option>
                    </select>
                    <button
                      type="button"
                      className="mono noprint"
                      onClick={() =>
                        setState((s) => ({
                          ...s,
                          log: s.log.filter((x) => x.id !== r.id)
                        }))
                      }
                      style={{
                        marginTop: '0.5rem',
                        background: 'none',
                        border: 0,
                        color: 'var(--ink-3)',
                        cursor: 'pointer',
                        padding: 0
                      }}
                    >
                      Verwijder
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}

          <button
            type="button"
            className="btn btn-ghost noprint"
            style={{ marginTop: '1.4rem' }}
            onClick={() =>
              setState((s) => ({
                ...s,
                log: [
                  ...s.log,
                  {
                    id: uid(),
                    date: today(),
                    action: '',
                    expected: '',
                    happened: '',
                    reaction: '',
                    energy: '',
                    assumption: 'onveranderd'
                  }
                ]
              }))
            }
          >
            + Regel toevoegen
          </button>
        </Annot>

        {/* -------------------------------------------------------- weekmeter */}
        <Annot n="04" label="Weekmeter">
          <p className="dim measure" style={{ marginBottom: '1.4rem' }}>
            Eén keer per week, tien minuten, drie regels. Missen reset niets.
            Zestig procent is geslaagd.
          </p>
          {state.weeks.map((w) => (
            <div
              key={w.id}
              style={{
                borderTop: '1px solid var(--rule-soft)',
                paddingBlock: '1.1rem'
              }}
            >
              <div className="cols2">
                <label className="field">
                  <span>Week</span>
                  <input
                    value={w.week}
                    onChange={(e) =>
                      editWeek(setState, w.id, { week: e.target.value })
                    }
                    placeholder="bv. week 12"
                  />
                </label>
                <label className="field">
                  <span>
                    Beweging — handelingen waar iets op kon reageren (band 2–5)
                  </span>
                  <input
                    value={w.movement}
                    onChange={(e) =>
                      editWeek(setState, w.id, { movement: e.target.value })
                    }
                  />
                </label>
              </div>
              <label className="field">
                <span>
                  Bewijs — welke aanname toetste je, en wat kwam eruit? (band
                  1–2)
                </span>
                <textarea
                  rows={2}
                  value={w.evidence}
                  onChange={(e) =>
                    editWeek(setState, w.id, { evidence: e.target.value })
                  }
                />
              </label>
              <label className="field">
                <span>
                  Alignment — waar gingen je beste uren en euro&apos;s heen?
                </span>
                <textarea
                  rows={2}
                  value={w.alignment}
                  onChange={(e) =>
                    editWeek(setState, w.id, { alignment: e.target.value })
                  }
                />
              </label>
              <button
                type="button"
                className="mono noprint"
                onClick={() =>
                  setState((s) => ({
                    ...s,
                    weeks: s.weeks.filter((x) => x.id !== w.id)
                  }))
                }
                style={{
                  background: 'none',
                  border: 0,
                  color: 'var(--ink-3)',
                  cursor: 'pointer',
                  padding: 0
                }}
              >
                Verwijder week
              </button>
            </div>
          ))}
          <button
            type="button"
            className="btn btn-ghost noprint"
            style={{ marginTop: '1.4rem' }}
            onClick={() =>
              setState((s) => ({
                ...s,
                weeks: [
                  ...s.weeks,
                  {
                    id: uid(),
                    week: '',
                    movement: '',
                    evidence: '',
                    alignment: ''
                  }
                ]
              }))
            }
          >
            + Week toevoegen
          </button>
        </Annot>

        <Annot n="05" label="Reroute-vragen">
          <p className="dim measure" style={{ marginBottom: '1.2rem' }}>
            Elke twee weken, twintig minuten. Verplicht: één stopbesluit en één
            versterking. Label je reroute LEREN of VLUCHT — en bij VLUCHT spreek
            je een terugkomdatum af.
          </p>
          <ol className="qs">
            {route
              .find((s) => s.slug === 'reroute')!
              .platformQuestions.map((q) => (
                <li key={q}>{q}</li>
              ))}
          </ol>
        </Annot>
      </div>
    </>
  );
}

/* Automatisch meegroeiend tekstveld, zodat het log leesbaar blijft. */
function Auto({
  value,
  onChange,
  placeholder
}: {
  value: string;
  onChange: (v: string) => void;
  placeholder?: string;
}) {
  return (
    <label className="field" style={{ marginBottom: 0 }}>
      <textarea
        rows={2}
        value={value}
        placeholder={placeholder}
        onChange={(e) => onChange(e.target.value)}
        style={{ fontSize: '0.9rem' }}
      />
    </label>
  );
}

function editLog(
  setState: React.Dispatch<React.SetStateAction<State>>,
  id: string,
  patch: Partial<LogRow>
) {
  setState((s) => ({
    ...s,
    log: s.log.map((r) => (r.id === id ? { ...r, ...patch } : r))
  }));
}

function editWeek(
  setState: React.Dispatch<React.SetStateAction<State>>,
  id: string,
  patch: Partial<WeekRow>
) {
  setState((s) => ({
    ...s,
    weeks: s.weeks.map((r) => (r.id === id ? { ...r, ...patch } : r))
  }));
}

function renderMarkdown(s: State) {
  const visited = stations
    .filter((x) => s.visited.includes(x.id))
    .map((x) => `- ${stationNumber(x)} ${x.name} — ${x.dutch}`)
    .join('\n');

  const log = s.log.length
    ? [
        '| Datum | Handeling | Verwachting | Wat er gebeurde | Reactie | Energie | Aanname |',
        '| --- | --- | --- | --- | --- | --- | --- |',
        ...s.log.map(
          (r) =>
            `| ${r.date} | ${cell(r.action)} | ${cell(r.expected)} | ${cell(r.happened)} | ${cell(
              r.reaction
            )} | ${cell(r.energy)} | ${r.assumption} |`
        )
      ].join('\n')
    : '_Nog geen regels._';

  const weeks = s.weeks.length
    ? s.weeks
        .map(
          (w) =>
            `### ${w.week || 'Week'}\n\n- **Beweging:** ${w.movement || '—'}\n- **Bewijs:** ${
              w.evidence || '—'
            }\n- **Alignment:** ${w.alignment || '—'}`
        )
        .join('\n\n')
    : '_Nog geen weken._';

  return `# ManiFlowStations — journaal

Geëxporteerd op ${today()}

## Routekaart

- **Bestemming:** ${s.destination || '—'}
- **Herkenzin:** ${s.recognise || '—'}
- **Onderliggende behoefte:** ${s.need || '—'}
- **Volgende Reroute Moment:** ${s.nextReroute || '—'}

## Reisstatus

${visited || '_Nog geen haltes aangedaan._'}

## Evidence Log

${log}

## Weekmeter

${weeks}
`;
}

const cell = (v: string) =>
  (v || '—').replace(/\n+/g, ' ').replace(/\|/g, '\\|');
