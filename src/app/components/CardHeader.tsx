import StarIcon from '@/app/assets/icons/star.svg';
import { twMerge } from 'tailwind-merge';

interface CardHeaderProps {
  title: string;
  description: string;
  className?: string;
}

export const CardHeader = ({ title, description, className }: CardHeaderProps) => {
  return (
    <>
      <div className={twMerge('flex flex-col p-6 md:p-8', className)}>
        <div className="inline-flex items-center gap-2">
          <StarIcon className="size-9 flex-none text-emerald-300" />
          <h3 className="font-serif text-3xl">{title}</h3>
        </div>
        <p className="text-sm lg:text-base max-w-xs text-white/60 mt-2">{description}</p>
      </div>
    </>
  );
};
