import Head from "next/head";
import NavBar from "../components/NavBar";
import Hero from "../components/Hero";
import About from "../components/About";
import Projects from "../components/Projects";
import Contact from "../components/Contact";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Nelson Lu - Code, Data, Software</title>
        <meta
          name="description"
          content="Welcome to my personal portfolio page, created using React and NextJS framework, and styled using TailwindCSS."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <NavBar />
      <Hero />
      <About />
      <Projects />
      <Contact />
    </div>
  );
}
