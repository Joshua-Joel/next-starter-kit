'use client';

import { useEffect } from 'react';

export default function GlobalError({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <html>
      <body style={{ textAlign: 'center', padding: '50px' }}>
        <h1 style={{ fontSize: '3rem', color: '#ff4757' }}>500 - Something went wrong</h1>
        <p style={{ fontSize: '1.5rem' }}>
          Sorry! An unexpected error has occurred.
        </p>
        <button
          onClick={reset}
          style={{
            backgroundColor: '#1e90ff',
            color: 'white',
            border: 'none',
            padding: '10px 20px',
            fontSize: '1rem',
            cursor: 'pointer',
            borderRadius: '5px',
          }}
        >
          Try again
        </button>
      </body>
    </html>
  );
}
