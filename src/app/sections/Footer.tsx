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
        <div>&copy; 2024, All rights reserved.</div>
        <nav>
          {footerLinks.map((link) => (
            <a href={link.href} key={link.title}>
              <span>{link.title}</span>
              <ArrowUpRightIcon />
            </a>
          ))}
        </nav>
      </div>
    </footer>
  );
};
