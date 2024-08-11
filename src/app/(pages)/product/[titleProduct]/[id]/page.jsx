'use client';

import { IoChevronBackOutline } from 'react-icons/io5';
import MainLayout from '@/app/layout/Layout';
import axios from 'axios';
import React from 'react';
import useSWR from 'swr';
import { usePathname } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import LoadingPage from '@/app/loading';

export default function DetailProductPage() {
  const pathname = usePathname();
  const id = pathname.split('/').pop();
  const fetcher = (url) => axios.get(url).then((res) => res.data);
  const { data, error, isLoading } = useSWR(`https://fakestoreapi.com/products/${id}`, fetcher);
  // console.log(data);

  return (
    <MainLayout>
      <section className="max-w-screen-xl min-h-screen flex flex-wrap items-center mx-auto  gap-8 justify-center">
        {' '}
        {isLoading && <LoadingPage />}
        {error && <p className="text-red-600 font-bold">Error!: {error}</p>}
        {!error && !isLoading && (
          <div class="max-w-screen-xl px-4 mx-auto 2xl:px-0">
            <div class="lg:grid lg:grid-cols-2 lg:gap-8 xl:gap-16">
              <div class="shrink-0 max-w-md lg:max-w-lg mx-auto">
                {/* <figure className=" w-full  object-cover"> */}
                <Image height={200} width={200} class="w-full dark:hidden" src={data.image} alt={data.title} />
                {/* </figure> */}
                {/* <figure className=" w-full h-[200px] object-cover"> */}
                <Image height={200} width={200} class="w-full hidden dark:block" src={data.image} alt={data.title} />
                {/* </figure> */}
              </div>

              <div class="mt-6 sm:mt-8 lg:mt-0">
                <Link href="/product" className="flex items-center hover:underline flex-row gap-1 mb-6">
                  <IoChevronBackOutline />
                  <p className="text-neutral-50 ">back to home</p>
                </Link>
                <h1 class="text-xl font-semibold text-gray-900 sm:text-2xl dark:text-white">{data.title}</h1>
                <div class="mt-4 sm:items-center sm:gap-4 sm:flex">
                  <p class="text-2xl font-extrabold text-gray-900 sm:text-3xl dark:text-white">{data.price.toLocaleString('en-US', { style: 'currency', currency: 'USD' })}</p>

                  <div class="flex items-center gap-2 mt-2 sm:mt-0">
                    <div class="flex items-center gap-1">
                      {Array.from({ length: Math.floor(data.rating.rate) }).map((_, index) => (
                        <svg key={index} className="w-4 h-4 text-yellow-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M13.849 4.22c-.684-1.626-3.014-1.626-3.698 0L8.397 8.387l-4.552.361c-1.775.14-2.495 2.331-1.142 3.477l3.468 2.937-1.06 4.392c-.413 1.713 1.472 3.067 2.992 2.149L12 19.35l3.897 2.354c1.52.918 3.405-.436 2.992-2.15l-1.06-4.39 3.468-2.938c1.353-1.146.633-3.336-1.142-3.477l-4.552-.36-1.754-4.17Z" />
                        </svg>
                      ))}
                    </div>
                    <p class="text-sm font-medium leading-none text-gray-500 dark:text-gray-400">({data.rating.rate})</p>
                    <Link href="#" class="text-sm font-medium leading-none text-gray-900 underline hover:no-underline dark:text-white">
                      {data.rating.count} Reviews
                    </Link>
                  </div>
                </div>

                <div class="mt-6 sm:gap-4 sm:items-center sm:flex sm:mt-8">
                  <Link
                    href="#"
                    title=""
                    class="flex items-center justify-center py-2.5 px-5 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-primary-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
                    role="button"
                  >
                    <svg class="w-5 h-5 -ms-2 me-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                      <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12.01 6.001C6.5 1 1 8 5.782 13.001L12.011 20l6.23-7C23 8 17.5 1 12.01 6.002Z" />
                    </svg>
                    Add to favorites
                  </Link>

                  <Link
                    href="#"
                    title=""
                    class="text-white mt-4 sm:mt-0 bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-primary-600 dark:hover:bg-primary-700 focus:outline-none dark:focus:ring-primary-800 flex items-center justify-center"
                    role="button"
                  >
                    <svg class="w-5 h-5 -ms-2 me-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                      <path
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M4 4h1.5L8 16m0 0h8m-8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm.75-3H7.5M11 7H6.312M17 4v6m-3-3h6"
                      />
                    </svg>
                    Add to cart
                  </Link>
                </div>

                <hr class="my-6 md:my-8 border-gray-200 dark:border-gray-800" />

                <p class="mb-6 text-gray-500 dark:text-gray-400">{data.description}</p>

                <p class="mb-6 text-neutral-50 rounded-xl py-2 px-3 mt-4 bg-blue-900 w-fit h-fit">Category: {data.category}</p>
              </div>
            </div>
          </div>
        )}
      </section>
    </MainLayout>
  );
}
