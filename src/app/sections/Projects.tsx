import kleoNetworkLandingPage from '@/app/assets/images/KleoLandingPage.png';
import SavvasLearning from '@/app/assets/images/SavvasLearning.jpg';
import CheckCircleIcon from '@/app/assets/icons/check-circle.svg';
import ArrowUpRightIcon from '@/app/assets/icons/arrow-up-right.svg';
import Image from 'next/image';
import { SectionHeader } from '../components/SectionHeader';
import { Card } from '../components/Card';
import { StaticImageData } from 'next/image';

interface ProjectResult {
  title: string;
  description: string;
  tech: string;
  link?: string | null;
  impact?: string;
}

interface ProfessionalExperience {
  company: string;
  year: string;
  title: string;
  results: ProjectResult[];
  link: string;
  image: StaticImageData;
  context?: string;
}

const professionalExperience: ProfessionalExperience[] = [
  {
    company: 'PlayPower Labs',
    year: '2022 - Present',
    title: 'Full-Stack Engineer',
    results: [
      {
        title: 'Educational Game Platform Dashboard',
        description:
          'Built complete dashboard for game-based learning platform serving K-8 students. Teachers manage classes, assign games, track student progress and analytics.',
        tech: 'Next.js • TypeScript • GraphQL • Real-time data pipelines',
        link: 'https://www.playpowergames.com/',
      },
      {
        title: 'AI Teaching Assistant Tools',
        description:
          'Developed tools integrated into Savvas learning platform for US schools. Production deployment with AI/LLM integration.',
        tech: 'React • Next.js • AI/LLM integration',
        link: null,
      },
      {
        title: 'Custom Reporting System (Looker Replacement)',
        description:
          'Architected reusable reporting platform replacing Google Looker. Built configurable React + GraphQL components enabling team to ship new reports 5x faster. Led frontend architecture.',
        tech: 'React • GraphQL • Modular component architecture',
        impact: 'Reduced report delivery time from ~1 week to 1 day',
      },
    ],
    link: 'https://www.playpowergames.com/',
    image: SavvasLearning,
    context: 'Multiple production games, complete LMS dashboard, and prepared demos for BETT UK exhibition.',
  },
  {
    company: 'KLEO',
    year: 'Q4 2024',
    title: 'Full-Stack Engineer (Freelance)',
    results: [
      {
        title: 'Browser Extension with AI Query Interface',
        description:
          'Chrome extension tracking browsing history (user-consented) with natural language query system. Users can ask: "What was I researching about React last Tuesday?" AI-powered intent extraction and data parsing.',
        tech: 'React • Chrome Extension APIs • AI/LLM integration',
        link: null,
      },
      {
        title: 'Web3 Data Monetization Platform',
        description:
          'Users opt-in to share intent data segments. Polygon token-based reward system. Landing page, user dashboard, Web3 wallet integration.',
        tech: 'Next.js • Web3.js • Polygon blockchain • Supabase',
        impact: 'Won Polygon PolRush grant in Bangkok',
      },
      {
        title: 'Browser Automation Agent',
        description:
          'Custom DSL for browser automation (Visit, Search, Fill commands). Lightweight RPA executing inside browser with AI-powered workflow automation.',
        tech: 'Custom language design • Chrome APIs • FastAPI backend',
        link: null,
      },
    ],
    link: 'https://github.com/Kleo-Network',
    image: kleoNetworkLandingPage,
    context:
      'Early-stage Web3 startup focused on browsing data monetization. Project discontinued due to founder priorities. Shipped complete Web3 + AI product stack in 3 months.',
  },
];

export const ProjectsSection = () => {
  return (
    <section className="pb-16 lg:py-24" id="work">
      <div className="container">
        <SectionHeader
          eyebrow="Recent Work"
          title="Production Platforms & Tools"
          description="Building platforms that serve real users. From educational game systems to Web3 automation tools."
        />

        <div className="flex flex-col mt-10 gap-20 md:mt-20">
          {professionalExperience.map((experience, experienceIndex) => (
            <Card
              style={{
                top: `calc(64px + ${experienceIndex * 40}px)`,
              }}
              className="px-8 pt-8 pb-0 md:pt-12 md:px-10 lg:px-20 lg:pt-16 sticky"
              key={experience.title}
            >
              <div className="lg:grid lg:grid-cols-2 lg:gap-16">
                <div className="lg:pb-16">
                  <div className="bg-gradient-to-r from-emerald-300 to-sky-400 text-transparent bg-clip-text inline-flex uppercase tracking-widest font-bold text-sm gap-2">
                    <span>{experience.company}</span>
                    <span>&bull;</span>
                    <span>{experience.year}</span>
                  </div>

                  <h3 className="font-serif text-2xl md:text-4xl mt-2 md:mt-5">{experience.title}</h3>
                  <hr className="border-t-2 border-white/5 mt-4 md:mt-5" />
                  <div className="flex flex-col gap-6 mt-4 md:mt-5">
                    {experience.results.map((result, idx) => (
                      <div key={idx} className="border-l-2 border-emerald-300/30 pl-4">
                        <div className="flex gap-2 items-start">
                          <CheckCircleIcon className="size-5 md:size-6 shrink-0 mt-0.5" />
                          <div>
                            <h4 className="font-semibold text-base md:text-lg text-white">{result.title}</h4>
                            <p className="text-sm md:text-base text-white/60 mt-1">{result.description}</p>
                            <p className="text-xs md:text-sm text-emerald-300 mt-2 font-mono">{result.tech}</p>
                            {result.impact && (
                              <p className="text-xs md:text-sm text-sky-400 mt-1 italic">Impact: {result.impact}</p>
                            )}
                            {result.link && (
                              <a
                                href={result.link}
                                target="_blank"
                                className="text-xs md:text-sm text-white/70 hover:text-white mt-1 inline-flex items-center gap-1"
                              >
                                View project <ArrowUpRightIcon className="size-3" />
                              </a>
                            )}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                  {experience.context && (
                    <p className="text-sm text-white/50 mt-4 italic border-t border-white/10 pt-4">
                      {experience.context}
                    </p>
                  )}
                  <a href={experience.link} target="_blank">
                    <button className="bg-white text-gray-950 h-12 w-full md:w-auto px-6 rounded-xl font-semibold  inline-flex justify-center items-center gap-2 mt-8 cursor-pointer border border-white hover:bg-transparent hover:text-white">
                      <span>{experience.company === 'KLEO' ? 'View GitHub Org' : 'View Live Platform'}</span>
                      <ArrowUpRightIcon className="size-4" />
                    </button>
                  </a>
                </div>
                <div className="relative">
                  <Image
                    className="mt-8 -mb-3 md:-mb-0 rounded-tl-2xl rounded-tr-2xl lg:mt-0 lg:absolute lg:h-full lg:w-auto lg:max-w-none"
                    src={experience.image}
                    alt={experience.title}
                  ></Image>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
