import { ImageResponse } from 'next/og';

export const runtime = 'edge';
export const size = { width: 180, height: 180 };
export const contentType = 'image/png';

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: 180,
          height: 180,
          background: '#0a0a0c',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <div
          style={{
            width: 78,
            height: 78,
            borderRadius: 999,
            background: '#6BE197',
            boxShadow: '0 0 24px #6BE197',
          }}
        />
      </div>
    ),
    size,
  );
}
