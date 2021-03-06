import type { NextPage } from "next";
import Head from "next/head";
import Navbar from "../components/Navbar";
import LogoMain from "../components/LogoMain";
import OurServices from "../components/main/OurServices";
import AboutUs from "../components/main/AboutUs";
import Map from "../components/main/Map";
import Footer from "../components/Footer";
import Link from "next/link";

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
        <div className="mx-auto mt-12 flex max-w-7xl flex-wrap px-4 sm:px-6 lg:px-8">
          <div className="mx-auto text-center md:text-left xl:mt-16">
            <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl md:text-6xl">
              <span className="block xl:inline">Centrum Usług</span>{" "}
              <span className="block text-indigo-600">Motoryzacyjnych</span>
            </h1>
            <p className="mt-3 text-center text-base text-gray-500 sm:mx-auto sm:mt-5 sm:max-w-xl sm:text-lg md:mt-5 md:text-xl lg:mx-0 xl:text-left">
              Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui
              lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat
              fugiat aliqua.
            </p>
            <div className="mt-5 justify-center sm:mt-8 sm:flex xl:justify-start">
              <Link href="/contact">
                <a className="inline-block rounded bg-indigo-600 px-8 py-3 text-xl font-medium text-white transition hover:scale-110 hover:shadow-xl focus:outline-none focus:ring active:bg-indigo-500">
                  Skontaktuj się z nami!
                </a>
              </Link>
            </div>
          </div>
          <div className="mx-4 max-w-md flex-initial grow justify-center pt-6 xl:pt-2">
            <LogoMain />
          </div>
        </div>
        <AboutUs />
        <OurServices />
        <Map />
        {/* <MainClients /> */}
      </main>

      <Footer />
    </div>
  );
};

export default Home;
