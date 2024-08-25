import PrinceAnimation from '@/app/assets/images/PrinceAnimation.gif';
import ArrowDown from '@/app/assets/icons/arrow-down.svg';
import Image from 'next/image';

export const HeroSection = () => {
  return (
    <div>
      <div className="container">
        <Image src={PrinceAnimation} alt="A person enjoying his music in earphones" />
        <div>
          <div></div>
          <div>Available for new projects</div>
        </div>
        <h1>Translate Designs to Real Websites</h1>
        <p>
          I specialize in translating the designs into functional, high-performing webpages. Let's discuss your
          next project.
        </p>
        <div>
          <button>
            <span>Explore My Work</span>
            <ArrowDown />
          </button>
          <button>
            <span>👋🏻</span>
            <span>Let's Connect</span>
          </button>
        </div>
      </div>
    </div>
  );
};
