import Head from "next/head";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Nephero from "@/components/nepal/Nephero";
import Nepnav from "@/components/nepal/Nepnav";
import Nepexp from "@/components/nepal/Nepexp";
import Moretovisitnep from "@/components/nepal/Moretovisitnep";
import Nepgallery from "@/components/nepal/Nepgallery";

export default function Home() {
    return (
        <>
            <Head>
                <title>Create Next App</title>
                <meta name="description" content="Generated by create next app" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main>

                <Navbar />
                <Nephero />
                <Nepnav />
                <Nepexp />
                <Nepgallery />
                <Moretovisitnep />
                <Footer />
            </main>
        </>
    );
}