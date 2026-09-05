import { ImageResponse } from 'next/og';
import { readFile } from 'node:fs/promises';
import { join } from 'node:path';

export const alt =
  'ManiFlowStations — manifesteren voor mensen met een bullshitdetector';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default async function OpengraphImage() {
  const inter = await readFile(join(process.cwd(), 'fonts/Inter-Bold.ttf'));

  return new ImageResponse(
    (
      <div
        style={{
          height: '100%',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          background: '#f2ede4',
          color: '#15171b',
          padding: 72,
          fontFamily: 'Inter'
        }}
      >
        <div
          style={{
            display: 'flex',
            gap: 24,
            fontSize: 22,
            letterSpacing: 4,
            color: '#8a8371'
          }}
        >
          <span>VERTREKHAL</span>
          <span>·</span>
          <span>12 STATIONS</span>
          <span>·</span>
          <span>4 LIJNEN</span>
          <span>·</span>
          <span>GEEN GARANTIES</span>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <div
            style={{
              display: 'flex',
              fontSize: 116,
              letterSpacing: -4,
              lineHeight: 1
            }}
          >
            <span>ManiFlow</span>
            <span style={{ color: '#b8410f' }}>Stations</span>
          </div>
          <div
            style={{
              display: 'flex',
              marginTop: 28,
              fontSize: 34,
              color: '#494e56'
            }}
          >
            Manifesteren voor mensen met een bullshitdetector.
          </div>
        </div>

        <div style={{ display: 'flex', gap: 10 }}>
          {['#1f4e46', '#b0451a', '#2b4c7e', '#7a5c2e'].map((c) => (
            <div
              key={c}
              style={{ display: 'flex', width: 128, height: 10, background: c }}
            />
          ))}
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [{ name: 'Inter', data: inter, style: 'normal', weight: 700 }]
    }
  );
}
