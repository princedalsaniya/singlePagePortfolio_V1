'use client';
import { Card } from '../components/Card';
import rajkotOnMaps from '@/app/assets/images/rajkotOnMaps.png';
import smileMemoji from '@/app/assets/images/memoji-smile.png';
import TailwindIcon from '@/app/assets/icons/tailwind.svg';
import AngularIcon from '@/app/assets/icons/angular.svg';
import GithubIcon from '@/app/assets/icons/github.svg';
import ReactIcon from '@/app/assets/icons/react.svg';
import JSIcon from '@/app/assets/icons/square-js.svg';
import SparkleIcon from '@/app/assets/icons/sparkle.svg';
import CheckCircleIcon from '@/app/assets/icons/check-circle.svg';

// TODO: Replace placeholder icons with actual tech icons when available
const TypeScriptIcon = SparkleIcon;
const NextJSIcon = SparkleIcon;
const NodeJSIcon = SparkleIcon;
const GraphQLIcon = SparkleIcon;
import { SectionHeader } from '../components/SectionHeader';
import Image from 'next/image';
import { CardHeader } from '../components/CardHeader';
import { ToolBoxItems } from '../components/ToolboxItems';

const toolboxItems = [
  {
    title: 'React',
    iconType: ReactIcon,
  },
  {
    title: 'Next.js',
    iconType: NextJSIcon,
  },
  {
    title: 'TypeScript',
    iconType: TypeScriptIcon,
  },
  {
    title: 'Node.js',
    iconType: NodeJSIcon,
  },
  {
    title: 'GraphQL',
    iconType: GraphQLIcon,
  },
  {
    title: 'JavaScript',
    iconType: JSIcon,
  },
  {
    title: 'Tailwind',
    iconType: TailwindIcon,
  },
  {
    title: 'Angular',
    iconType: AngularIcon,
  },
  {
    title: 'GitHub',
    iconType: GithubIcon,
  },
];

export const AboutSection = () => {
  return (
    <div className="py-20 lg:py-28" id="about">
      <div className="container">
        <SectionHeader
          eyebrow="About Me"
          title="Full-Stack Engineer Who Ships"
          description="I build production platforms that serve real users. Currently working on educational tools at PlayPowerLabs. Previously built Web3 and AI products."
        />

        <div className="mt-20 flex flex-col gap-8">
          <div className="grid grid-cols-1 md:grid-cols-5 lg:grid-cols-3 gap-8">
            {/* What I Care About Card */}
            <Card className="h-[320px] md:col-span-2 lg:col-span-1">
              <CardHeader title="What I Care About" description="" className="px-6 pt-6" />
              <ul className="flex flex-col gap-3 mt-4 text-sm md:text-base text-white/70 px-6">
                <li className="flex items-start gap-2">
                  <CheckCircleIcon className="size-5 shrink-0 mt-0.5" />
                  <span>Shipping fast without compromising quality</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircleIcon className="size-5 shrink-0 mt-0.5" />
                  <span>Owning features end-to-end (frontend + backend + deployment)</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircleIcon className="size-5 shrink-0 mt-0.5" />
                  <span>Building things that solve real problems</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircleIcon className="size-5 shrink-0 mt-0.5" />
                  <span>Learning in public and helping others grow</span>
                </li>
              </ul>
            </Card>
            {/* Technologies Card */}
            <Card className="h-[320px] md:col-span-2 lg:col-span-1">
              <CardHeader
                title="My Toolbox"
                description="Core technologies I use to build production platforms and ship features end-to-end."
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
            {/* Location Card */}
            <Card className="h-[320px] relative md:col-span-1 lg:col-span-1">
              <Image src={rajkotOnMaps} alt="Rajkot, Gujarat." className="h-full w-full object-cover" />
              <a href="https://maps.app.goo.gl/a1kWnS5taazD48n29" target="_blank">
                <div className="absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] size-12 rounded-full after:content-[''] after:absolute after:inset-0 after:outline after:outline-2 after:-outline-offset-2 after:rounded-full after:outline-gray-950/30">
                  <div className="absolute inset-0 rounded-full bg-gradient-to-r from-emerald-300 to-sky-400 -z-20 animate-ping [animation-duration:2s]"></div>
                  <div className="absolute inset-0 rounded-full bg-gradient-to-r from-emerald-300 to-sky-400 -z-10"></div>
                  <Image src={smileMemoji} alt="Smiling Memoji" className="" />
                </div>
              </a>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};
