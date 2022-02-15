import Link from 'next/link';
import Head from 'next/head';

export default function app(){
 return <>
   <Head>
     <title>Test my app</title>
     <meta name="description" content="selamat datang di komunitas programming Indonesia" />
   </Head>
     <div className="text-center font-sans text-500-slate bg-blue-500 px-3 py-3 w-auto flex items-center">
      Wellcome to KPI
     </div>
      <div className="w-16 h-16 bg-sky-500 flex items-center justify-center">
        <div className="text-center font-sans block>
           Home
        </div>
     </div>
   </>
}
