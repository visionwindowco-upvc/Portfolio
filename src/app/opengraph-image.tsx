import { ImageResponse } from 'next/og';

// Route segment config
export const runtime = 'edge';

// Image metadata
export const alt = 'Vision Window Co | Premium UPVC Windows & Doors';
export const size = {
  width: 1200,
  height: 630,
};

export const contentType = 'image/png';

// Image generation
export default async function Image() {
  return new ImageResponse(
    (
      // ImageResponse JSX element
      <div
        style={{
          background: 'linear-gradient(to bottom right, #0f172a, #1e293b, #020617)',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '60px',
          fontFamily: 'sans-serif',
        }}
      >
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            background: 'rgba(255, 255, 255, 0.05)',
            padding: '30px',
            borderRadius: '40px',
            border: '1px solid rgba(255, 255, 255, 0.1)',
            marginBottom: '40px',
            boxShadow: '0 20px 40px rgba(0,0,0,0.4)',
          }}
        >
          <img
            src="https://res.cloudinary.com/dflulie2g/image/upload/q_auto,w_1200,c_limit/v1781720976/logo_ml0tyg.jpg"
            alt="Vision Window Co Logo"
            width={160}
            height={160}
            style={{
              borderRadius: '24px',
            }}
          />
        </div>
        
        <h1
          style={{
            fontSize: '72px',
            fontWeight: '900',
            color: '#ffffff',
            margin: '0 0 20px 0',
            textAlign: 'center',
            letterSpacing: '-2px',
            lineHeight: 1.1,
            textShadow: '0 4px 10px rgba(0,0,0,0.5)',
          }}
        >
          Vision Window Co.
        </h1>
        
        <p
          style={{
            fontSize: '36px',
            color: '#94a3b8',
            margin: '0 0 40px 0',
            textAlign: 'center',
            maxWidth: '900px',
            lineHeight: 1.4,
            fontWeight: '500',
          }}
        >
          Premium UPVC Windows & Doors in Vasai-Virar
        </p>

        <div
          style={{
            display: 'flex',
            gap: '20px',
          }}
        >
          <span
            style={{
              fontSize: '24px',
              color: '#38bdf8',
              background: 'rgba(56, 189, 248, 0.1)',
              padding: '10px 24px',
              borderRadius: '100px',
              border: '1px solid rgba(56, 189, 248, 0.2)',
            }}
          >
            Soundproof
          </span>
          <span
            style={{
              fontSize: '24px',
              color: '#38bdf8',
              background: 'rgba(56, 189, 248, 0.1)',
              padding: '10px 24px',
              borderRadius: '100px',
              border: '1px solid rgba(56, 189, 248, 0.2)',
            }}
          >
            Energy Efficient
          </span>
          <span
            style={{
              fontSize: '24px',
              color: '#38bdf8',
              background: 'rgba(56, 189, 248, 0.1)',
              padding: '10px 24px',
              borderRadius: '100px',
              border: '1px solid rgba(56, 189, 248, 0.2)',
            }}
          >
            Weather Resistant
          </span>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
