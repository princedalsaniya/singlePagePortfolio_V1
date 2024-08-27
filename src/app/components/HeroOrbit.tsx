import { PropsWithChildren } from 'react';

interface HeroOrbitProps {
  size: number;
  rotation: number;
  className?: string;
  orbitDuration?: number;
  shouldOrbit?: boolean;
  spinDuration?: number;
  shouldSpin?: boolean;
}

export const HeroOrbit = ({
  children,
  size,
  rotation,
  className,
  orbitDuration,
  shouldOrbit = false,
  spinDuration,
  shouldSpin = false,
}: PropsWithChildren<HeroOrbitProps>) => {
  return (
    <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 -z-20">
      <div className={shouldOrbit ? 'animate-spin' : ''} style={{ animationDuration: `${orbitDuration || 10}s` }}>
        <div
          className="flex items-start justify-start"
          style={{ height: `${size}px`, width: `${size}px`, transform: `rotate(${rotation}deg)` }}
        >
          <div
            className={shouldSpin ? 'animate-spin' : ''}
            style={{ animationDuration: `${spinDuration || 10}s` }}
          >
            <div className="inline-flex" style={{ transform: `rotate(${rotation * -1}deg)` }}>
              {children}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
