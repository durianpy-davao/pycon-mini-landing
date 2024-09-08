import { getPermalink } from './utils/permalinks';

export const pyconHeader = {
  links: [
    {
      text: 'Home',
      href: '#',
    },
  ],
};

export const headerData = {
  links: [
    {
      text: '',
      links: [
        {
          text: 'Get Tickets',
          href: 'https://www.techtix.app/pycon-mini-davao-2024/preregister',
        },
        {
          text: 'What is PyCon?',
          href: getPermalink('/#what-is-pycon'),
        },
        {
          text: 'Speakers',
          href: getPermalink('/#speakers'),
        },
        {
          text: 'Schedule',
          href: getPermalink('/#schedule'),
        },
        {
          text: 'Code of Conduct',
          href: getPermalink('/code-of-conduct'),
        },
        {
          text: 'Sponsors',
          href: getPermalink('/#sponsors'),
        },
        {
          text: 'FAQs',
          href: getPermalink('/#faqs'),
        },
        {
          text: 'Sponsorship Prospectus',
          href: getPermalink('/prospectus'),
        },
        {
          text: 'Contact Us',
          href: getPermalink('/#contact-us'),
        },
      ],
    },
  ],
};

export const footerData = {
  socialLinks: [
    { ariaLabel: 'Facebook', icon: 'tabler:brand-facebook', href: 'https://www.facebook.com/durianpy/' },
    { ariaLabel: 'Instagram', icon: 'tabler:brand-instagram', href: 'https://www.instagram.com/durianpy.dvo/' },
    { ariaLabel: 'LinkedIn', icon: 'tabler:brand-linkedin', href: 'https://ph.linkedin.com/company/durianpy' },
    { ariaLabel: 'Github', icon: 'tabler:brand-github', href: 'https://github.com/DurianPy-Davao-Python-User-Group' },
  ],
};
