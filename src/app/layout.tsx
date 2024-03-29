import type { Metadata } from "next";
import { Urbanist } from "next/font/google";
import "./globals.css";
import clsx from "clsx";
import { createClient, repositoryName } from "@/prismicio";
import Header from "@/components/Header";
import { Meteor } from "@/components/Meteor";
import { BackgroundBeams } from "@/components/background-beams";
import Footer from "@/components/Footer";
import { PrismicPreview } from "@prismicio/next";


const urbanist = Urbanist({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    
    
    <html lang="en" className=" text-slate-100">
     
     
      
     <body className={clsx(urbanist.className, "relative min-h-screen")}>
      
      <div className="h-full w-full dark:bg-black  bg-slate-300 dark:bg-grid-white/[0.2] bg-grid-slate-900/[0.2]">
      <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-slate-300 [mask-image:radial-gradient(ellipse_at_center,transparent_70%,black)]"></div>
       
     
      {/* Radial gradient for the container to give a faded look */}
     
     
      <Header/>
      {children}
      
        <div className="pointer-events-none absolute inset-0 -z- h-full bg-[url('/noisetexture.jpg')] opacity-20 mix-blend-soft-light"></div>
      
      <Footer/>
      
       
       
        
      <PrismicPreview repositoryName={repositoryName} />
      </div>
      
      
      
      
      </body>
      
     
    </html>
    
  );
}
