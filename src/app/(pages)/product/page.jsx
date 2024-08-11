'use client';

import Card from '@/app/components/Card';
import MainLayout from '@/app/layout/Layout';
import LoadingPage from '@/app/loading';
import axios from 'axios';
import React from 'react';
import useSWR from 'swr';

export default function ProductPage() {
  const fetcher = (url) => axios.get(url).then((res) => res.data);
  const { data, error, isLoading } = useSWR('https://fakestoreapi.com/products', fetcher);

  return (
    <MainLayout>
      <section className="max-w-screen-xl min-h-screen flex flex-col mx-auto my-28  ">
        <h1 className="mx-auto mb-6 text-neutral-50 text-2xl font-semibold">All Products</h1>
        <div className="gap-8 min-h-screen flex flex-wrap items-center justify-center">
          {error && <p className="text-red-600 font-bold">Error!: {error}</p>}
          {isLoading && <LoadingPage />}
          {!error &&
            !isLoading &&
            data.map((product) => {
              return (
                <Card
                  key={product.id}
                  href={
                    '/product/' +
                    product.title
                      .trim()
                      .replace(/\s+/g, '-')
                      .toLowerCase()
                      .replace(/[^a-z0-9]/g, '') +
                    '/' +
                    product.id
                  }
                  title={product.title.slice(0, 16) + '...'}
                  price={product.price}
                  description={product.description.slice(0, 80) + '...'}
                  image={product.image}
                />
              );
            })}
        </div>
      </section>
    </MainLayout>
  );
}
