import { getPermalink, getAsset } from './utils/permalinks';

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
          href: getPermalink('/tickets'),
        },
        {
          text: 'What is PyCon?',
          href: getPermalink('/#features'), // # = Same page anchor link
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
          text: 'Sponsorship Prospectus',
          href: getPermalink('/prospectus'),
        },
        {
          text: 'Contact Us',
          href: getPermalink('/#footer'),
        }
      ],
    },
  ],
  actions: [{ text: 'Download', href: 'https://github.com/onwidget/astrowind', target: '_blank' }],
};

export const footerData = {
  socialLinks: [
    { ariaLabel: 'Facebook', icon: 'tabler:brand-facebook', href: 'https://www.facebook.com/durianpy/' },
    { ariaLabel: 'Instagram', icon: 'tabler:brand-instagram', href: 'https://www.instagram.com/durianpy.dvo/' },
    { ariaLabel: 'LinkedIn', icon: 'tabler:brand-linkedin', href: 'https://ph.linkedin.com/company/durianpy' },
    { ariaLabel: 'Github', icon: 'tabler:brand-github', href: 'https://github.com/DurianPy-Davao-Python-User-Group' },
  ],
};
