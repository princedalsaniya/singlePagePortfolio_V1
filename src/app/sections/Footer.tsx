import ArrowUpRightIcon from '@/app/assets/icons/arrow-up-right.svg';

const footerLinks = [
  {
    title: 'YouTube',
    href: 'https://www.youtube.com/@PrinceDalsaniyaYT',
  },
  {
    title: 'LinkedIn',
    href: 'https://www.linkedin.com/in/prince-dalsaniya-256b031a1/',
  },
  {
    title: 'Github',
    href: 'https://github.com/princedalsaniya',
  },
];

export const Footer = () => {
  return (
    <footer className="relative overflow-x-clip">
      <div
        className={`absolute h-[400px] w-[1600px] bottom-0 left-1/2 -translate-x-1/2
        bg-emerald-300/30 [mask-image:radial-gradient(50%_50%_at_bottom_center,black,transparent)] z-0`} // Set z-index to 0
      />
      <div className="container z-10">
        <div className="border-t border-white/15 py-6 text-sm flex flex-col md:flex-row md:justify-between items-center gap-8">
          <div className="text-white/40">&copy; 2024, All rights reserved.</div>
          <nav className="flex flex-col md:flex-row items-center gap-8">
            {footerLinks.map((link) => (
              <a
                href={link.href}
                key={link.title}
                target="_blank"
                className="inline-flex items-center gap-1.5 z-10"
              >
                <span className="font-semibold">{link.title}</span>
                <ArrowUpRightIcon className="size-4" />
              </a>
            ))}
          </nav>
        </div>
      </div>
    </footer>
  );
};
