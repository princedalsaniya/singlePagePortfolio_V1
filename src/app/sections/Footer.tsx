import ArrowUpRightIcon from '@/app/assets/icons/arrow-up-right.svg';

const footerLinks = [
  {
    title: 'YouTube',
    href: '#',
  },
  {
    title: 'LinkedIn',
    href: '#',
  },
  {
    title: 'Github',
    href: '#',
  },
  {
    title: 'Instagram',
    href: '#',
  },
];

export const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="border-t border-white/15 py-6 text-sm flex flex-col items-center gap-8">
          <div className="text-white/40">&copy; 2024, All rights reserved.</div>
          <nav className="flex flex-col items-center gap-8">
            {footerLinks.map((link) => (
              <a href={link.href} key={link.title} className="inline-flex items-center gap-1.5">
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
