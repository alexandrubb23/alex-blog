import { ImageResponse } from 'next/server';
import { AUTHOR } from '../constants';

export const runtime = 'edge';

export const alt = 'About Acme';
export const size = {
  width: 1200,
  height: 630,
};

export const contentType = 'image/png';

const interSemiBold = fetch(
  new URL(
    '../../../public/assets/fonts/Inter-Semi-Bold-600.otf',
    import.meta.url
  )
).then(res => res.arrayBuffer());

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          display: 'flex',
          fontSize: 60,
          color: 'black',
          background: '#000',
          width: '100%',
          height: '100%',
          paddingTop: 50,
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <img
          width='256'
          height='256'
          src={`https://github.com/alexandrubb23.png`}
          style={{
            borderRadius: 128,
          }}
        />
        <h1 style={{ color: 'white', fontSize: '1.25rem' }}>{AUTHOR.NAME}</h1>
      </div>
    ),
    {
      ...size,
      fonts: [
        {
          name: 'Inter',
          data: await interSemiBold,
          style: 'normal',
          weight: 400,
        },
      ],
    }
  );
}
