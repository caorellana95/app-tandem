import Banner from "@/components/banner";
import Footer from "@/components/footer";
import Header from "@/components/header";
import News from "@/components/news";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <div className=" w-full items-center justify-between text-sm lg:flex">
      <Banner/>  
        
      </div>
      <div className="">
      
      </div>
      <Footer/>

    </main>
  );
}
