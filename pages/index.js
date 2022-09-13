import Head from "next/head";
import Link from "next/link";



export default function Home() {
  return (
    <div className="w-full">
      <Head>
        <title> w-udhav </title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <img className="w-[100vw] h-[70vh] object-none object-center mx-auto container rounded-lg shadow-xl" src="/skis.jpg" alt='main photo' />
      <section className="text-gray-600 body-font">
        <div className="container mx-auto px-5 py-10">
          <div className="flex flex-col text-center w-full space-y-1">
            <h2 className="text-xs text-indigo-500 tracking-widest font-medium title-font mb-1">Let&apos;s make winter adventures!</h2>
            <h1 className="sm:text-3xl text-2xl font-bold title-font mb-4 text-gray-900">Wasatch Ski Company</h1>
          </div>
          <Link href="/products">
            <button className="flex mx-auto mt-5 text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">Shop Now</button>
          </Link>
        </div>
      </section>
    </div>
  )
}
