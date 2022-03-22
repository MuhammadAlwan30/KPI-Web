import Link from 'next/link';
import Head from 'next/head';
import Footer from '../components/Footer';
import Header from '../components/Header';

const description ="halo selamat datang di komunitas programming indonesia"

export default function app(){
 return <>
   <Head>
     <title>This is your Home</title>
     <meta name="description" content={description} />
     <meta name="viewport" content="initial-scale=1.0, width=device-width" />
   </Head>
     <Header />
     <div className="text-center font-sans text-500-slate bg-blue-500 px-3 py-3 w-auto flex items-center">
      Wellcome to KPI
     </div>
      <div className="w-16 h-16 bg-sky-500 flex items-center justify-center">
        <div className="text-center font-sans block">
           Home
        </div>
     </div>
     <Footer />
   </>
}
