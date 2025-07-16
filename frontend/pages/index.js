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
        <title>Maurice Allen - Executive Portfolio</title>
        <meta name="description" content="Executive Portfolio of Maurice Allen" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <section id="hero" className="text-center py-20 bg-gray-100">
          <h1 className="text-5xl font-bold text-gray-800">Maurice Allen</h1>
          <p className="text-xl text-gray-600 mt-4">A seasoned professional at the intersection of Law Enforcement, IT, and Software Development.</p>
        </section>

        <div className="container mx-auto px-6 py-10">
          <Projects />
          <Experiences />
          <Skills />
          <Certifications />
          <Education />
          <Blog />
        </div>
      </main>
    </div>
  )
}
