"use client"
import Head from 'next/head';
import { useRouter } from 'next/navigation';
import * as React from 'react';

import '@/styles/colors.css';

import FormComponent from '@/app/components/FormComponent';

export default function HomePage() {

  const router = useRouter()
  React.useEffect(() => {
    router.push("/lorebase")
  }, [])
  return (
    <main>
      <Head>
        <title>LoreBase</title>
      </Head>

      <div className='min-h-screen  bg-black-300'>
        <FormComponent />
      </div>

    </main>
  )
};