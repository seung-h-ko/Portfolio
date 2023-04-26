import type { GetServerSideProps, GetStaticProps } from 'next'
import Head from 'next/head'
import About from '../components/About'
import WorkExperience from '../components/WorkExperience'
import Header from '../components/Header'
import Hero from '../components/Hero'
import Skills from '../components/Skills'
import Projects from '../components/Projects'
import ContactMe from '../components/ContactMe'
import Link from 'next/link'
import { Experience, PageInfo, Project, Skill, Social } from '../typings'
import { fetchPageInfo } from '../lib/fetchPageInfo'
import { fetchExperiences } from '../lib/fetchExperinces'
import { fetchSkills } from '../lib/fetchSkills'
import { fetchProjects } from '../lib/fetchProjects'
import { fetchSocials } from '../lib/fetchSocials'
import { ArrowUpCircleIcon } from '@heroicons/react/24/solid'
import { useInView } from 'react-intersection-observer'


type Props = {
  pageInfo: PageInfo;
  experiences: Experience[];
  skills: Skill[];
  projects: Project[];
  socials: Social[];
}

const Home = ({ pageInfo, experiences, skills, projects, socials }: Props) => {
  const [ref, inView] = useInView({})
  return (
    <div className='bg-[#efd9b4] h-screen text-white snap-y snap-mandatory overflow-y-scroll z-0
    overflow-x-hidden scrollbar-none scroll-smooth'>
      <Head>
        <title>Portfolio</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header inView={inView} socials={socials} />

      {/* Hero */}
      <section id='hero' className='relative snap-center'>
        <div ref={ref} className="absolute h-10"></div>
        <Hero pageInfo={pageInfo} />
      </section>

      {/* About */}
      <section id='about' className='snap-center'>
        <About pageInfo={pageInfo} />
      </section>

      {/* Experience */}
      <section id='experience' className='snap-center'>
        <WorkExperience experiences={experiences} />
      </section>

      {/* Skills */}
      <section id='skills' className='snap-start'>
        <Skills skills={skills} />
      </section>

      {/* Projects */}
      <section id="projects" className='snap-start'>
        <Projects projects={projects} />
      </section>

      {/* Contact Me */}
      <section id="contact" className='snap-start'>
        <ContactMe />
      </section>


      <footer className='sticky bottom-28 w-full'>
        <div className='flex item-center justify-center'>
          <Link href="#hero">
            <ArrowUpCircleIcon className='h-10 w-10 rounded-full text-[#a39081] hover:text-[#292522] hover:scale-110
            transition-all' />
          </Link>
        </div>
      </footer>
    </div>
  )
}

export default Home

export const getServerSideProps: GetServerSideProps<Props> = async () => {
  const pageInfo: PageInfo = await fetchPageInfo();
  const experiences: Experience[] = await fetchExperiences();
  const skills: Skill[] = await fetchSkills();
  const projects: Project[] = await fetchProjects();
  const socials: Social[] = await fetchSocials();

  return {
    props: {
      pageInfo,
      experiences,
      skills,
      projects,
      socials
    },
    // revalidate: 30,
  }
}

