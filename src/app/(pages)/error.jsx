'use client';

import React from 'react';
import MainLayout from '../layout/Layout';
import Link from 'next/link';

export default function Error({ error }) {
  React.useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);
  return (
    <MainLayout>
      <section className="min-h-screen bg-neutral-50 text-neutral-950 flex flex-col justify-center items-center">
        <h1 className="text-4xl font-extrabold">Error karena {error.message}</h1>
        <Link href="/" className="bg-blue-400 p-4 rounded-xl">
          <button>back to home</button>
        </Link>
      </section>
    </MainLayout>
  );
}
