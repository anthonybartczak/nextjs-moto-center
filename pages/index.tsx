import type { NextPage } from 'next'
import Head from 'next/head'
import Navbar from '../components/Navbar'
import LogoMain from '../components/LogoMain';
import OurServices from '../components/main/OurServices';
import AboutUs from '../components/main/AboutUs';
import Map from '../components/main/Map';
import Footer from '../components/Footer';
import Link from 'next/link';

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <main>
        <div
          className="flex flex-wrap mt-12 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center md:text-left mx-auto xl:mt-16">
            <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
              <span className="block xl:inline">Centrum Usług</span>{' '}
              <span className="block text-indigo-600">Motoryzacyjnych</span>
            </h1>
            <p
              className="text-center xl:text-left mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
              Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt amet
              fugiat veniam occaecat fugiat aliqua.
            </p>
            <div className="mt-5 sm:mt-8 sm:flex justify-center xl:justify-start">
              <Link href="/kontakt">
                <a className="inline-block px-8 py-3 text-xl font-medium text-white transition bg-indigo-600 rounded hover:scale-110 hover:shadow-xl active:bg-indigo-500 focus:outline-none focus:ring">
                  Skontaktuj się z nami!
                </a>
              </Link>
            </div>
          </div>
          <div className="flex-initial grow mx-4 pt-6 xl:pt-2 max-w-md justify-center">
            <LogoMain />
          </div>
        </div>
        <AboutUs/>
        <OurServices/>
        <Map/>
        {/* <MainClients /> */}
      </main>

      <Footer />
    </div>
  )
}

export default Home
