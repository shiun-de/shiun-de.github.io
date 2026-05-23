import { ImageResponse } from 'next/og';

export const runtime = 'edge';
export const alt = 'Shiun — the bedside air monitor';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default async function OG() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          background: '#0a0a0c',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          padding: 64,
          color: '#f5f5f7',
          fontFamily: 'monospace',
        }}
      >
        {/* Top hairline frame */}
        <div
          style={{
            position: 'absolute',
            top: 32,
            left: 32,
            right: 32,
            bottom: 32,
            border: '1px solid rgba(255,255,255,0.10)',
          }}
        />

        {/* Top instrument label */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            fontSize: 18,
            letterSpacing: '0.24em',
            textTransform: 'uppercase',
            color: '#5a5a62',
          }}
        >
          <span>Shiun · LOT-001</span>
          <span>The Bedside Air Monitor</span>
        </div>

        {/* Center wordmark */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-start',
            gap: 28,
          }}
        >
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: 28,
              fontSize: 220,
              fontWeight: 600,
              letterSpacing: '-0.05em',
              lineHeight: 0.9,
              color: '#f5f5f7',
            }}
          >
            <span>shiun</span>
            <span
              style={{
                width: 28,
                height: 28,
                borderRadius: 999,
                background: '#6BE197',
                boxShadow: '0 0 36px #6BE197',
                marginTop: 100,
              }}
            />
          </div>
          <div
            style={{
              fontSize: 32,
              color: '#9a9aa1',
              letterSpacing: '-0.01em',
            }}
          >
            the bedside air monitor
          </div>
        </div>

        {/* Bottom instrument readouts */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            fontSize: 18,
            letterSpacing: '0.24em',
            textTransform: 'uppercase',
            color: '#5a5a62',
          }}
        >
          <span>CO₂ · TEMP · RH</span>
          <span>12 months battery</span>
        </div>
      </div>
    ),
    { ...size },
  );
}
