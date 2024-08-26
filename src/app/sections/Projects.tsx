import kleoNetworkPublishCards from '@/app/assets/images/KleoNetworkPublishCardsPage.png';
import lightSaasLandingPage from '@/app/assets/images/light-saas-landing-page.png';
import aiStartupLandingPage from '@/app/assets/images/ai-startup-landing-page.png';
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
    <div>
      <div className="container">
        <p>Real-world Projects</p>
        <h2>Featured Projects</h2>
        <p>See how I transformed Figma designs into engaging digital experiences.</p>
        <div>
          {portfolioProjects.map((project) => (
            <div key={project.title}>
              <div>
                <span>{project.company}</span>
                <span>{project.year}</span>
              </div>
              <h3>{project.title}</h3>
              <hr />
              <ul>
                {project.results.map((result) => (
                  <li>{result.title}</li>
                ))}
              </ul>
              <a href={project.link}>
                <button>View Live Site</button>
              </a>
              <Image src={project.image} alt={project.title}></Image>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
