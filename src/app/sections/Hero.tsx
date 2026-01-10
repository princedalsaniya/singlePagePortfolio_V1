import PrinceAnimation from '@/app/assets/images/PrinceAnimation.gif';
import ArrowDown from '@/app/assets/icons/arrow-down.svg';
import grainImage from '@/app/assets/images/grain.jpg';
import StarIcon from '@/app/assets/icons/star.svg';
import SparkleIcon from '@/app/assets/icons/sparkle.svg';
import Image from 'next/image';
import { HeroOrbit } from '../components/HeroOrbit';

export const HeroSection = () => {
  return (
    <div className="py-32 md:py-48 lg:py-60 relative overflow-x-clip" id="home">
      {/* Whole Background */}
      <div className="absolute inset-0 [mask-image:linear-gradient(to_bottom,transparent,black_10%,black_70%,transparent)]">
        {/* Grain texture Effect */}
        <div
          className="absolute inset-0 -z-30 opacity-5"
          style={{
            backgroundImage: `url(${grainImage.src})`,
          }}
        ></div>

        {/* Emerald colored rings */}
        <div className="size-[620px] hero-ring" />
        <div className="size-[820px] hero-ring" />
        <div className="size-[1020px] hero-ring" />
        <div className="size-[1220px] hero-ring" />

        {/* Decorations : Stars, Sparkles, SmallCircles */}
        <div>
          <HeroOrbit size={430} rotation={-14} shouldOrbit orbitDuration={30} shouldSpin spinDuration={10}>
            <SparkleIcon className="size-8 text-emerald-300/20" />
          </HeroOrbit>
          <HeroOrbit size={440} rotation={79} shouldOrbit orbitDuration={32} shouldSpin spinDuration={3}>
            <SparkleIcon className="size-5 text-emerald-300/20" />
          </HeroOrbit>
          <HeroOrbit size={520} rotation={-41} shouldOrbit orbitDuration={34}>
            <div className="size-2 rounded-full bg-emerald-300/20" />
          </HeroOrbit>
          <HeroOrbit size={530} rotation={178} shouldOrbit orbitDuration={36} shouldSpin spinDuration={3}>
            <SparkleIcon className="size-10 text-emerald-300/20" />
          </HeroOrbit>
          <HeroOrbit size={550} rotation={20} shouldOrbit orbitDuration={38} shouldSpin spinDuration={10}>
            <StarIcon className="size-12 text-emerald-300" />
          </HeroOrbit>
          <HeroOrbit size={590} rotation={98} shouldOrbit orbitDuration={40} shouldSpin spinDuration={10}>
            <StarIcon className="size-8 text-emerald-300" />
          </HeroOrbit>
          <HeroOrbit size={650} rotation={-5} shouldOrbit orbitDuration={42}>
            <div className="size-2 rounded-full bg-emerald-300/20" />
          </HeroOrbit>
          <HeroOrbit size={710} rotation={144} shouldOrbit orbitDuration={44} shouldSpin spinDuration={3}>
            <SparkleIcon className="size-14 text-emerald-300/20" />
          </HeroOrbit>
          <HeroOrbit size={720} rotation={85} shouldOrbit orbitDuration={46}>
            <div className="size-3 rounded-full bg-emerald-300/20" />
          </HeroOrbit>
          <HeroOrbit size={800} rotation={-72} shouldOrbit orbitDuration={48} shouldSpin spinDuration={10}>
            <StarIcon className="size-24 text-emerald-300" />
          </HeroOrbit>
        </div>
      </div>

      {/* Actual content */}
      <div className="container relative">
        <div className="flex flex-col items-center gap-2">
          <Image
            src={PrinceAnimation}
            className="size-[100px] md:size-28 lg:size-32"
            alt="A person enjoying his music in earphones"
          />
          <div className="bg-gray-950 border border-gray-800 px-4 py-1.5 flex items-center gap-4 rounded-lg">
            <div className="bg-green-500 size-2.5 rounded-full relative">
              <div className="absolute bg-green-500 inset-0 rounded-full animate-ping-large"></div>
            </div>
            <div className="text-sm font-medium">Open to opportunities</div>
          </div>
        </div>
        <div className="max-w-lg mx-auto">
          <h1 className="font-serif text-3xl md:text-5xl text-center mt-8 tracking-wide">Prince Dalsaniya</h1>
          <h3 className="text-lg md:text-2xl text-center mt-8 tracking-wide">
            Full-Stack Engineer • Production Platforms • React + Next.js + Node.js
          </h3>
          <p className="mt-4 text-center text-white/60 md:text-lg">
            I build production-grade platforms and tools. Currently working on educational game platforms serving K-8 students in US schools. Previously built Web3 browser extensions and AI-powered automation tools.
          </p>
          <p className="mt-4 text-center text-white/60 md:text-lg">
            <strong className="text-white/80">Strong in:</strong> Rapid shipping, frontend architecture, backend integrations, and owning features end-to-end.
          </p>
          <p className="mt-3 text-center text-white/60 text-sm md:text-base">
            <strong className="text-white/80">Tech:</strong> React • Next.js • TypeScript • Node.js • GraphQL • FastAPI
          </p>
        </div>
        <div className="flex flex-col md:flex-row justify-center items-center mt-8 gap-4">
          <a href="#work">
            <button className="inline-flex items-center gap-2 border border-white/15 rounded-xl px-6 h-12 cursor-pointer hover:bg-white hover:text-gray-900">
              <span className="font-semibold">View Work</span>
              <ArrowDown className="size-4" />
            </button>
          </a>
          <a href="#contact">
            <button className="inline-flex items-center gap-2 border border-white bg-white text-gray-900 px-6 h-12 rounded-xl cursor-pointer hover:bg-transparent hover:text-white">
              <span>👋🏻</span>
              <span className="font-semibold">Get in Touch</span>
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};
