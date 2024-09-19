import kleoNetworkLandingPage from '@/app/assets/images/KleoLandingPage.png';
import SavvasLearning from '@/app/assets/images/SavvasLearning.jpg';
import CheckCircleIcon from '@/app/assets/icons/check-circle.svg';
import ArrowUpRightIcon from '@/app/assets/icons/arrow-up-right.svg';
import Image from 'next/image';
import { SectionHeader } from '../components/SectionHeader';
import { Card } from '../components/Card';

const professionalExperience = [
  {
    company: 'PlayPower Labs',
    year: '2022',
    title: '[Current]: Senior Frontend Developer',
    results: [
      { title: 'Driving AI Teacher Assistant Tools for SavvasLearning as Frontend Lead.' },
      { title: 'Led E2E reporting solution for SavvasLearning as Frontend Lead.' },
      { title: 'Delivered NeuroUX solutions for multiple clients.' },
    ],
    link: 'https://www.linkedin.com/company/playpower-labs/',
    image: SavvasLearning,
  },
  {
    company: 'Kleo',
    year: '2024',
    title: '[OpenSource]: Lead FullStack Developer',
    results: [
      { title: 'Created Landing Page for the organization' },
      { title: 'Created Extension with Activity Chart' },
      { title: 'Improved user experience for using platform' },
    ],
    link: 'https://www.kleo.network/',
    image: kleoNetworkLandingPage,
  },
];

export const ProjectsSection = () => {
  return (
    <section className="pb-16 lg:py-24" id="projects">
      <div className="container">
        <SectionHeader
          eyebrow="Impactful Projects"
          title="Professional Experience & Achievements"
          description="With over 2.5 years of experience, explore my significant contributions in my current role and open-source projects."
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
                  <ul className="flex flex-col gap-4 mt-4 md:mt-5">
                    {experience.results.map((result) => (
                      <span key={result.title}>
                        <li className="flex gap-2 text-sm md:text-base text-white/50 items-center">
                          <CheckCircleIcon className="size-5 md:size-6 shrink-0" />
                          {result.title}
                        </li>
                      </span>
                    ))}
                  </ul>
                  <a href={experience.link} target="_blank">
                    <button className="bg-white text-gray-950 h-12 w-full md:w-auto px-6 rounded-xl font-semibold  inline-flex justify-center items-center gap-2 mt-8 cursor-pointer border border-white hover:bg-transparent hover:text-white">
                      <span>View Live Site</span>
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
