interface TechIconProps {
  component: React.ElementType;
}

export const TechIcon = ({ component }: TechIconProps) => {
  const Component = component;
  return (
    <>
      <Component className="size-10 text-emerald-300 fill-[url(#tech-icon-gradient)] " />
      {/* startColor: emerald-300, endColor: sky-400 */}
      <svg className="size-0 absolute">
        <linearGradient id="tech-icon-gradient">
          <stop offset={'0%'} stopColor="rgb(110 231 183)" />
          <stop offset={'100%'} stopColor="rgb(56 189 248)" />
        </linearGradient>
      </svg>
    </>
  );
};
