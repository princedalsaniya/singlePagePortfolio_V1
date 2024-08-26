import kleoNetworkPublishCards from '@/app/assets/images/KleoNetworkPublishCardsPage.png';
import lightSaasLandingPage from '@/app/assets/images/light-saas-landing-page.png';
import aiStartupLandingPage from '@/app/assets/images/ai-startup-landing-page.png';
import CheckCircleIcon from '@/app/assets/icons/check-circle.svg';
import ArrowUpRightIcon from '@/app/assets/icons/arrow-up-right.svg';
import grainImage from '@/app/assets/images/grain.jpg';
import Image from 'next/image';

const portfolioProjects = [
  {
    company: 'Kleo',
    year: '2024',
    title: 'Publish Cards Page',
    results: [
      { title: 'Created a new Leader Board Functionality' },
      { title: 'Created some cards on home page' },
      { title: 'Improved user convenience by Publish Cards section' },
    ],
    link: 'https://www.app.kleo.network/',
    image: kleoNetworkPublishCards,
  },
  {
    company: 'Innovative Co',
    year: '2021',
    title: 'Light Saas Landing Page',
    results: [
      { title: 'Boosted sales by 20%' },
      { title: 'Expanded customer reach by 35%' },
      { title: 'Increased brand awareness by 15%' },
    ],
    link: 'https://youtu.be/7hi5zwO75yc',
    image: lightSaasLandingPage,
  },
  {
    company: 'Quantum Dynamics',
    year: '2023',
    title: 'AI Startup Landing Page',
    results: [
      { title: 'Enhanced user experience by 40%' },
      { title: 'Improved site speed by 50%' },
      { title: 'Increased mobile traffic by 35%' },
    ],
    link: 'https://youtu.be/Z7I5uSRHMHg',
    image: aiStartupLandingPage,
  },
];

export const ProjectsSection = () => {
  return (
    <section className="pb-16">
      <div className="container">
        <div className="flex justify-center">
          {/* NOTE : Gradient Text = bg-gradient-to-r from-emerald-300 to-sky-400 text-transparent bg-clip-text */}
          <p className="uppercase font-semibold tracking-widest bg-gradient-to-r from-emerald-300 to-sky-400 text-transparent bg-clip-text">
            Real-world Projects
          </p>
        </div>
        <h2 className="font-serif text-3xl text-center mt-6 md:text-5xl">Featured Projects</h2>
        <p className="text-center text-white/60 mt-4 md:text-lg max-w-md mx-auto">
          See how I transformed Figma designs into engaging digital experiences.
        </p>
        <div className="flex flex-col mt-10 gap-20 md:mt-20">
          {portfolioProjects.map((project) => (
            <div
              className="bg-gray-800 rounded-3xl relative z-0 overflow-hidden after:content-[''] after:absolute after:inset-0 after:z-10 after:outline-2 after:outline after:-outline-offset-2 after:rounded-3xl after:outline-white/20 px-8 pt-8 md:pt-12 md:px-10 after:pointer-events-none"
              key={project.title}
            >
              <div
                className="absolute inset-0 -z-10 opacity-5"
                style={{ backgroundImage: `url(${grainImage.src})` }}
              />
              <div className="bg-gradient-to-r from-emerald-300 to-sky-400 text-transparent bg-clip-text inline-flex uppercase tracking-widest font-bold text-sm gap-2">
                <span>{project.company}</span>
                <span>&bull;</span>
                <span>{project.year}</span>
              </div>

              <h3 className="font-serif text-2xl md:text-4xl mt-2 md:mt-5">{project.title}</h3>
              <hr className="border-t-2 border-white/5 mt-4 md:mt-5" />
              <ul className="flex flex-col gap-4 mt-4 md:mt-5">
                {project.results.map((result) => (
                  <span>
                    <li className="flex gap-2 text-sm md:text-base text-white/50 items-center">
                      <CheckCircleIcon className="size-5 md:size-6 shrink-0" />
                      {result.title}
                    </li>
                  </span>
                ))}
              </ul>
              <a href={project.link}>
                <button className="bg-white text-gray-950 h-12 w-full md:w-auto px-6 rounded-xl font-semibold  inline-flex justify-center items-center gap-2 mt-8">
                  <span>View Live Site</span>
                  <ArrowUpRightIcon className="size-4" />
                </button>
              </a>
              <Image className="mt-8 -mb-4 md:-mb-0" src={project.image} alt={project.title}></Image>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
