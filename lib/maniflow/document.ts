/**
 * Rendert het volledige ManiFlowStations-programma als één markdown-document,
 * uit dezelfde bron als de website. Zo kan de tekst niet uit elkaar lopen.
 */
import {
  agencyModel,
  audience,
  brand,
  dailySession,
  differentiators,
  examples,
  houseRules,
  integration,
  phases,
  positioning,
  productForms,
  progressMethod,
  slogans,
  stationNumber,
  stations,
  subtitles,
  tools,
  tracks,
  workbook
} from './index';

const ul = (items: string[]) => items.map((i) => `- ${i}`).join('\n');
const ol = (items: string[]) =>
  items.map((i, n) => `${n + 1}. ${i}`).join('\n');

export function renderProgramDocument(): string {
  const out: string[] = [];
  const w = (...lines: string[]) => out.push(lines.join('\n'));

  w(
    `# ManiFlowStations`,
    ``,
    `**${brand.tagline}**`,
    ``,
    `_${brand.subtitle}_`
  );

  w(`---`);
  w(`## 1. De kernbelofte`, ``, brand.promise, ``, `> ${brand.thesis}`);

  w(
    `### Huisregels`,
    ``,
    houseRules.map((r) => `**${r.n} — ${r.rule}**  \n${r.why}`).join('\n\n')
  );

  w(`---`);
  w(`## 2. Doelgroep`, ``, `### Primair`, ``, ul(audience.primary));
  w(`### Ook bruikbaar voor`, ``, ul(audience.secondary));
  w(`### Niet voor`, ``, ul(audience.notFor));

  w(`---`);
  w(
    `## 3. Positionering`,
    ``,
    positioning.statement,
    ``,
    `**${positioning.category}** ${positioning.categoryBody}`
  );
  w(
    `| Van | Naar | Waar ManiFlowStations staat |`,
    `| --- | --- | --- |`,
    positioning.axes
      .map((a) => `| ${a.left} | ${a.right} | ${a.us}% richting rechts |`)
      .join('\n')
  );

  w(`---`);
  w(`## 4. Wat dit anders maakt dan een klassiek manifestatieprogramma`);
  w(
    `| Onderwerp | Klassiek | ManiFlowStations |`,
    `| --- | --- | --- |`,
    differentiators
      .map((d) => `| **${d.title}** | ${d.classic} | ${d.ours} |`)
      .join('\n')
  );

  w(`### ${agencyModel.title}`, ``, agencyModel.intro);
  w(
    agencyModel.quadrants
      .map((q) => `**${q.key}** — ${q.body}  \n_${q.todo}_`)
      .join('\n\n')
  );
  w(`> ${agencyModel.rule}`);

  w(`---`);
  w(`## 5. De volledige route`);
  for (const p of phases) {
    const namen = stations
      .filter((s) => s.phase === p.id)
      .map((s) => `${stationNumber(s)} ${s.name}`)
      .join(' · ');
    w(`**${p.line} — ${p.name}** · ${namen}  \n${p.claim}`);
  }
  w(
    `| Halte | Station | Nederlands | Waar het over gaat | Duur |`,
    `| --- | --- | --- | --- | --- |`,
    stations
      .map(
        (s) =>
          `| ${stationNumber(s)} | ${s.name} | ${s.dutch} | ${s.arrivalBoard} | ${s.duration} |`
      )
      .join('\n')
  );
  w(
    `Reroute Momenten staan na halte 04, 07 en 10. Na halte 12 volgt het Depot: veertien dagen integratie.`
  );

  w(`---`);
  w(`## 6. De stations`);

  for (const s of stations) {
    const kop =
      s.kind === 'platform'
        ? `Perron 0 — ${s.name}`
        : `Station ${s.id} — ${s.name}`;
    w(`### ${kop}`, ``, `_${s.dutch} · ${s.duration}_`);
    w(`**Arrival Board.** ${s.arrivalBoard}`);
    w(`**Doel.** ${s.goal}`);
    w(`**Kernconcept.** ${s.coreConcept}`);
    w(`#### The Big Idea`, ``, s.bigIdea.join('\n\n'));
    w(`> **Belangrijkste inzicht.** ${s.keyInsight}`);
    w(`#### Manifestation Translation`);
    for (const t of s.translations) {
      w(
        `~~"${t.claim}"~~  \n**→** ${t.translation}${t.keep ? `  \n_Wat je behoudt: ${t.keep}_` : ''}`
      );
    }
    w(`#### Reality Check`);
    for (const r of s.realityCheck) {
      w(`_"${r.claim}"_  \n${r.check}`);
    }
    w(`#### Platform Questions`, ``, ol(s.platformQuestions));
    w(
      `#### Ticket to Action — ${s.ticket.title} (${s.ticket.time})`,
      ``,
      ol(s.ticket.steps)
    );
    w(
      `#### Experiment — ${s.experiment.title} (${s.experiment.duration})`,
      ``,
      ul(s.experiment.setup)
    );
    w(`**Wat je meet.** ${s.experiment.measure}`);
    if (s.experiment.abort) w(`**Afbreekcriterium.** ${s.experiment.abort}`);
    w(`#### Evidence Log`, ``, ul(s.evidencePrompts));
    w(`#### Reroute`, ``, ul(s.reroute));
    w(`**Verwacht resultaat.** ${s.expectedResult}`);
    w(`**Departure Note.** _${s.departureNote}_`);
    w(`**Gereedschap.** ${s.tools.join(', ')}`);
    w(`---`);
  }

  w(`## 7. Terugkerende tools en templates`);
  for (const t of tools) {
    w(`### ${t.name}`, ``, `_${t.subtitle} · ${t.usedAt}_`);
    w(t.what);
    if (t.columns) w(`**Kolommen.** ${t.columns.join(' · ')}`);
    w(ol(t.how));
    w(`**Valkuil.** ${t.trap}`);
  }

  w(`---`);
  w(`## 8. Voorbeelden uit zes levensgebieden`);
  for (const e of examples) {
    w(`### ${e.domain} — ${e.headline}`);
    w(`**Vertrekpunt.** ${e.start}`);
    w(`**Bestemming.** ${e.destination}`);
    w(`**Vertaling.** ${e.translation}`);
    w(
      `**Frictie-triage.**`,
      ``,
      ul(e.friction.map((f) => `_${f.type}_ — ${f.text}`))
    );
    w(`**Experiment.** ${e.experiment}`);
    w(`**Evidence Log.**`, ``, ul(e.evidence));
    w(`**Reroute.** ${e.reroute}`);
    w(`**Let op.** ${e.note}`);
  }

  w(`---`);
  w(`## 9. Voortgang meten zonder obsessieve tracking`);
  w(`### ${progressMethod.title}`, ``, progressMethod.principle);
  w(
    `| Meter | Vraag | Wat telt mee | Gezonde band |`,
    `| --- | --- | --- | --- |`,
    progressMethod.gauges
      .map((g) => `| ${g.name} | ${g.question} | ${g.counts} | ${g.band} |`)
      .join('\n')
  );
  w(
    `**Cadans.**`,
    ``,
    ul(progressMethod.cadence.map((c) => `**${c.when}** — ${c.what}`))
  );
  w(`**Anti-obsessieregels.**`, ``, ul(progressMethod.antiRules));

  w(`---`);
  w(`## 10. De afsluitende integratiefase`);
  w(`### ${integration.name} · ${integration.duration}`, ``, integration.intro);
  w(
    integration.steps
      .map((s) => `**${s.n} — ${s.title}**  \n${s.body}`)
      .join('\n\n')
  );
  w(`> ${integration.closing}`);

  w(`---`);
  w(`## 11. Programmavormen en workbook`);
  w(`### Uitleveringsvormen`);
  w(
    productForms
      .map((f) => `**${f.name}** — ${f.body}  \n_Nodig: ${f.needs}_`)
      .join('\n\n')
  );
  w(
    `### Dagelijkse eenheid: ${dailySession.name} (${dailySession.duration})`,
    ``,
    dailySession.intro
  );
  w(
    ul(
      dailySession.steps.map(
        (s) => `**${s.n}. ${s.label}** (${s.time}) — ${s.body}`
      )
    )
  );
  w(`_${dailySession.lowEnergy}_`);

  w(`### Dagprogramma's`);
  for (const t of tracks) {
    w(`#### ${t.days} dagen — ${t.name}`, ``, t.forWho);
    w(`_${t.rhythm} · ${t.perDay} per dag_`);
    w(ul(t.schedule.map((r) => `**${r.label}** — ${r.content}`)));
    w(`**Wat dit spoor niet doet.** ${t.warning}`);
  }

  w(`### Workbook / journaal`, ``, workbook.intro);
  w(`**Fysieke uitvoering.**`, ``, ul(workbook.format));
  w(
    `**Paginatypes.**`,
    ``,
    ul(workbook.pageTypes.map((p) => `**${p.name}** — ${p.body}`))
  );
  w(`**Extra's.**`, ``, ul(workbook.extras));

  w(`---`);
  w(`## 12. Slogans en ondertitels`);
  w(`**Ondertitels.**`, ``, ul(subtitles));
  w(`**Slogans.**`, ``, ul(slogans));

  w(`---`);
  w(
    `_Dit document is gegenereerd uit \`lib/maniflow\` — dezelfde bron als de website. Wijzig de bron, niet dit bestand._`
  );

  return out.join('\n\n') + '\n';
}
