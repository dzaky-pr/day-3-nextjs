import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

export default function Card({ image, description, title, price, href }) {
  return (
    <div class="w-[320px] flex flex-col justify-between h-fit bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
      <Link href={href}>
        <figure className=" w-full h-[200px] object-cover">
          <Image width={320} height={200} class="rounded-t-lg object-cover w-full h-full" src={image} alt={title} />
        </figure>
      </Link>
      <div class="p-5">
        <Link href={href}>
          <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{title}</h5>
        </Link>
        <p>{price.toLocaleString('en-US', { style: 'currency', currency: 'USD' })}</p>
        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">{description}</p>
        <Link
          href={href}
          class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Read more
          <svg class="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
          </svg>
        </Link>
      </div>
    </div>
  );
}
