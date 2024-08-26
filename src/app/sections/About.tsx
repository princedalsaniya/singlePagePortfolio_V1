import { Card } from '../components/Card';
import progressOverPerfection from '@/app/assets/images/progressOverPerfection.jpeg';
import rajkotOnMaps from '@/app/assets/images/rajkotOnMaps.png';
import smileMemoji from '@/app/assets/images/memoji-smile.png';
import ChromeIcon from '@/app/assets/icons/chrome.svg';
import CSSIcon from '@/app/assets/icons/css3.svg';
import GithubIcon from '@/app/assets/icons/github.svg';
import HTMLIcon from '@/app/assets/icons/html5.svg';
import ReactIcon from '@/app/assets/icons/react.svg';
import JSIcon from '@/app/assets/icons/square-js.svg';
import { SectionHeader } from '../components/SectionHeader';
import Image from 'next/image';
import { CardHeader } from '../components/CardHeader';
import { ToolBoxItems } from '../components/ToolboxItems';

const toolboxItems = [
  {
    title: 'JavaScript',
    iconType: JSIcon,
  },
  {
    title: 'HTML5',
    iconType: HTMLIcon,
  },
  {
    title: 'CSS',
    iconType: CSSIcon,
  },
  {
    title: 'React',
    iconType: ReactIcon,
  },
  {
    title: 'Chrome',
    iconType: ChromeIcon,
  },
  {
    title: 'Github',
    iconType: GithubIcon,
  },
];

const hobbies = [
  {
    title: 'Drawing',
    emoji: '✍🏻',
    left: '7%',
    top: '5%',
  },
  {
    title: 'Photography',
    emoji: '📸',
    left: '50%',
    top: '5%',
  },
  {
    title: 'Movies & Series',
    emoji: '🎬',
    left: '4%',
    top: '30%',
  },
  {
    title: 'Music',
    emoji: '🎧',
    left: '60%',
    top: '45%',
  },
  {
    title: 'Fitness',
    emoji: '💪🏻',
    left: '3%',
    top: '60%',
  },
  {
    title: 'Mountains',
    emoji: '🏔️',
    left: '45%',
    top: '70%',
  },
];

export const AboutSection = () => {
  return (
    <div className="py-20">
      <div className="container">
        <SectionHeader
          eyebrow="About Me"
          title="A Glimpse in My World"
          description="Learn more about who I am, what I do, and what Inspires me."
        />

        <div className="mt-20 flex flex-col gap-8">
          {/* Quote Card */}
          <Card className="h-[320px]">
            <div className="flex flex-col">
              <CardHeader
                title="Progress over Perfection"
                description="Focus on continuous growth, not flawless outcomes."
              />
              <div className="w-40 mx-auto mt-8">
                <Image src={progressOverPerfection} alt="Progress over Perfection Image" />
              </div>
            </div>
          </Card>
          {/* Technologies Card */}
          <Card className="h-[320px] p-0">
            <CardHeader
              title="My Toolbox"
              description="Explore the technologies and Tools I use to craft exceptional digital experiences."
              className="px-6 pt-6"
            />
            <div>
              <ToolBoxItems items={toolboxItems} className="mt-6" />
              <ToolBoxItems items={toolboxItems} className="mt-6" itemsWrapperClassName="-translate-x-1/2" />
            </div>
          </Card>
          {/* Beyond The Code Card */}
          <Card className="h-[320px] p-0 flex flex-col">
            <CardHeader
              title="Beyond the Code"
              description="Explore my interests and hobbies beyond the digital realm."
              className="px-6 py-6"
            />
            <div className="relative flex-1">
              {hobbies.map((hobby) => (
                <div
                  key={hobby.title}
                  className="inline-flex items-center gap-2 px-6 bg-gradient-to-r from-emerald-300 to-sky-400 rounded-full py-1.5 absolute"
                  style={{ left: hobby.left, top: hobby.top }}
                >
                  <span className="font-medium text-gray-950">{hobby.title}</span>
                  <span>{hobby.emoji}</span>
                </div>
              ))}
            </div>
          </Card>
          {/* Location Card */}
          <Card className="h-[320px] p-0 relative">
            <Image src={rajkotOnMaps} alt="Rajkot, Gujarat." className="h-full w-full object-cover" />
            <div className="absolute top-[35%] left-[15%] -translate-x-[15%] -translate-y-[35%] size-12 rounded-full bg-gradient-to-r from-emerald-300 to-sky-400 after:content-[''] after:absolute after:inset-0 after:outline after:outline-2 after:-outline-offset-2 after:rounded-full after:outline-gray-950/30">
              <Image src={smileMemoji} alt="Smiling Memoji" className="" />
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};
