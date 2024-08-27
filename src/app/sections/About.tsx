'use client';
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
import { motion } from 'framer-motion';
import { useRef } from 'react';

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
    left: '5%',
    top: '5%',
  },
  {
    title: 'Photography',
    emoji: '📸',
    left: '45%',
    top: '5%',
  },
  {
    title: 'Music',
    emoji: '🎧',
    left: '5%',
    top: '35%',
  },
  {
    title: 'Movies & Series',
    emoji: '🎬',
    left: '40%',
    top: '35%',
  },
  {
    title: 'Fitness',
    emoji: '💪🏻',
    left: '5%',
    top: '65%',
  },
  {
    title: 'Mountains',
    emoji: '🏔️',
    left: '43%',
    top: '65%',
  },
];

export const AboutSection = () => {
  const containerRef = useRef(null);
  return (
    <div className="py-20 lg:py-28">
      <div className="container">
        <SectionHeader
          eyebrow="About Me"
          title="A Glimpse in My World"
          description="Learn more about who I am, what I do, and what Inspires me."
        />

        <div className="mt-20 flex flex-col gap-8">
          <div className="grid grid-cols-1 md:grid-cols-5 lg:grid-cols-3 gap-8">
            {/* Quote Card */}
            <Card className="h-[320px] md:col-span-2 lg:col-span-1">
              <div className="flex flex-col">
                <CardHeader title="Motivation" description="Focus on continuous growth, not flawless outcomes." />
                <div className="w-40 mx-auto">
                  <Image
                    src={progressOverPerfection}
                    alt="Progress over Perfection Image"
                    className="rounded-tl-lg rounded-tr-lg"
                  />
                </div>
              </div>
            </Card>
            {/* Technologies Card */}
            <Card className="h-[320px] md:col-span-3 lg:col-span-2">
              <CardHeader
                title="My Toolbox"
                description="Explore the technologies and Tools I use to craft exceptional digital experiences."
                className="px-6 pt-6"
              />
              <div>
                <ToolBoxItems
                  items={toolboxItems}
                  itemsWrapperClassName="animate-move-left [animation-duration:30s]"
                />
                <ToolBoxItems
                  items={toolboxItems}
                  className="mt-6"
                  itemsWrapperClassName="-translate-x-1/2 animate-move-right [animation-duration:20s]"
                />
              </div>
            </Card>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 lg:grid-cols-3 gap-8">
            {/* Beyond The Code Card */}
            <Card className="h-[320px] flex flex-col md:col-span-3 lg:col-span-2">
              <CardHeader
                title="Beyond the Code"
                description="Explore my interests and hobbies beyond the digital realm."
                className="px-6 py-6"
              />
              <div className="relative flex-1" ref={containerRef}>
                {hobbies.map((hobby) => (
                  <motion.div
                    key={hobby.title}
                    className="inline-flex items-center gap-2 px-6 bg-gradient-to-r from-emerald-300 to-sky-400 rounded-full py-1.5 absolute"
                    style={{ left: hobby.left, top: hobby.top }}
                    drag
                    dragConstraints={containerRef}
                  >
                    <span className="font-medium text-gray-950">{hobby.title}</span>
                    <span>{hobby.emoji}</span>
                  </motion.div>
                ))}
              </div>
            </Card>
            {/* Location Card */}
            <Card className="h-[320px] relative md:col-span-2 lg:col-span-1">
              <Image src={rajkotOnMaps} alt="Rajkot, Gujarat." className="h-full w-full object-cover" />
              <div className="absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] size-12 rounded-full after:content-[''] after:absolute after:inset-0 after:outline after:outline-2 after:-outline-offset-2 after:rounded-full after:outline-gray-950/30">
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-emerald-300 to-sky-400 -z-20 animate-ping [animation-duration:2s]"></div>
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-emerald-300 to-sky-400 -z-10"></div>
                <Image src={smileMemoji} alt="Smiling Memoji" className="" />
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};
