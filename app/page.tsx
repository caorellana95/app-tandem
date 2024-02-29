import Banner from "@/components/banner";
import Footer from "@/components/footer";
import Header from "@/components/header";
import News from "@/components/news";
import Image from "next/image";
import Head from 'next/head'
import Services from "@/components/services";
import Flota from "@/components/flota";
import Seguridad from "@/components/seguridad";
import Clientes from "@/components/clientes";
import BannerClientes from "@/components/banner-clientes";
import FooterIndustrial from "@/components/footer-industrial";


export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <div className=" w-full items-center justify-between text-sm lg:flex">
    
      <Banner/> 
       
        
      </div>
      <div>         
          <Services/>
          <Flota/>
          <Seguridad/>
          <Clientes/>
          <BannerClientes/>
          {/* <Footer/> */}
        </div>
      <Footer/>

    </main>
  );
}
