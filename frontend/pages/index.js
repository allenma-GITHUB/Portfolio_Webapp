import Head from 'next/head';
import Projects from '../components/Projects';
import Experiences from '../components/Experiences';
import Skills from '../components/Skills';
import Certifications from '../components/Certifications';
import Education from '../components/Education';
import Blog from '../components/Blog';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Maurice Allen - Portfolio</title>
        <meta name="description" content="Portfolio of Maurice Allen" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <div id="hero" className="text-center p-10">
          <h1 className="text-4xl font-bold">Maurice Allen</h1>
          <p className="text-xl">Law Enforcement | IT | Cybersecurity | Software Development</p>
        </div>
        <Projects />
        <Experiences />
        <Skills />
        <Certifications />
        <Education />
        <Blog />
      </main>
    </div>
  )
}
