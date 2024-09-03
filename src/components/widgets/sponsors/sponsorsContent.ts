type Sponsor = {
  name: string;
  tagline: string;
  logo: string;
  website: string;
};

export type Tier = {
  heading: string;
  prio: number;
  sponsors: Sponsor[];
};

// listed in order of appearance/prio
export const sponsorTiers: Tier[] = [
  {
    heading: 'Keystone Benefactor',
    prio: 1,
    sponsors: [
      {
        name: 'Sponsor 1',
        tagline: 'A brighter future',
        logo: 'https://via.placeholder.com/150',
        website: 'https://example.com',
      },
    ],
  },
  {
    heading: 'Co-Presented by:',
    prio: 2,
    sponsors: [
      {
        name: 'Sponsor 2',
        tagline: 'To infinity and beyond',
        logo: 'https://via.placeholder.com/150',
        website: 'https://example.com',
      },
      {
        name: 'Sponsor 3',
        tagline: 'Faster. Higher. Stronger.',
        logo: 'https://via.placeholder.com/150',
        website: 'https://example.com',
      },
      {
        name: 'Sponsor 4',
        tagline: 'Just do it',
        logo: 'https://via.placeholder.com/150',
        website: 'https://example.com',
      },
    ],
  },
  {
    heading: 'Sponsored by:',
    prio: 3,
    sponsors: [
      {
        name: 'Sponsor 5',
        tagline: '',
        logo: 'https://via.placeholder.com/150',
        website: 'https://example.com',
      },
      {
        name: 'Sponsor 6',
        tagline: '',
        logo: 'https://via.placeholder.com/150',
        website: 'https://example.com',
      },
      {
        name: 'Sponsor 7',
        tagline: '',
        logo: 'https://via.placeholder.com/150',
        website: 'https://example.com',
      },
    ],
  },
  {
    heading: 'In Cooperation With:',
    prio: 4,
    sponsors: [
      {
        name: 'Sponsor 8',
        tagline: '',
        logo: 'https://via.placeholder.com/150',
        website: 'https://example.com',
      },
      {
        name: 'Sponsor 9',
        tagline: '',
        logo: 'https://via.placeholder.com/150',
        website: 'https://example.com',
      },
      {
        name: 'Sponsor 10',
        tagline: '',
        logo: 'https://via.placeholder.com/150',
        website: 'https://example.com',
      },
      {
        name: 'Sponsor 11',
        tagline: '',
        logo: 'https://via.placeholder.com/150',
        website: 'https://example.com',
      },
    ],
  },
  {
    heading: 'In Partnership With:',
    prio: 5,
    sponsors: [
      {
        name: 'Sponsor 12',
        tagline: '',
        logo: 'https://via.placeholder.com/150',
        website: 'https://example.com',
      },
      {
        name: 'Sponsor 13',
        tagline: '',
        logo: 'https://via.placeholder.com/150',
        website: 'https://example.com',
      },
      {
        name: 'Sponsor 14',
        tagline: '',
        logo: 'https://via.placeholder.com/150',
        website: 'https://example.com',
      },
      {
        name: 'Sponsor 15',
        tagline: '',
        logo: 'https://via.placeholder.com/150',
        website: 'https://example.com',
      },
      {
        name: 'Sponsor 16',
        tagline: '',
        logo: 'https://via.placeholder.com/150',
        website: 'https://example.com',
      },
    ],
  },
  {
    heading: 'Contributing Partners',
    prio: 6,
    sponsors: [
      {
        name: 'Sponsor 17',
        tagline: '',
        logo: 'https://via.placeholder.com/150',
        website: 'https://example.com',
      },
      {
        name: 'Sponsor 18',
        tagline: '',
        logo: 'https://via.placeholder.com/150',
        website: 'https://example.com',
      },
      {
        name: 'Sponsor 19',
        tagline: '',
        logo: 'https://via.placeholder.com/150',
        website: 'https://example.com',
      },
      {
        name: 'Sponsor 20',
        tagline: '',
        logo: 'https://via.placeholder.com/150',
        website: 'https://example.com',
      },
      {
        name: 'Sponsor 21',
        tagline: '',
        logo: 'https://via.placeholder.com/150',
        website: 'https://example.com',
      },
    ],
  },
  {
    heading: 'Community Patners',
    prio: 6,
    sponsors: [
      {
        name: 'Sponsor 22',
        tagline: '',
        logo: 'https://via.placeholder.com/150',
        website: 'https://example.com',
      },
      {
        name: 'Sponsor 23',
        tagline: '',
        logo: 'https://via.placeholder.com/150',
        website: 'https://example.com',
      },
      {
        name: 'Sponsor 24',
        tagline: '',
        logo: 'https://via.placeholder.com/150',
        website: 'https://example.com',
      },
      {
        name: 'Sponsor 25',
        tagline: '',
        logo: 'https://via.placeholder.com/150',
        website: 'https://example.com',
      },
      {
        name: 'Sponsor 26',
        tagline: '',
        logo: 'https://via.placeholder.com/150',
        website: 'https://example.com',
      },
      {
        name: 'Sponsor 27',
        tagline: '',
        logo: 'https://via.placeholder.com/150',
        website: 'https://example.com',
      },
      {
        name: 'Sponsor 28',
        tagline: '',
        logo: 'https://via.placeholder.com/150',
        website: 'https://example.com',
      },
      {
        name: 'Sponsor 29',
        tagline: '',
        logo: 'https://via.placeholder.com/150',
        website: 'https://example.com',
      },
    ],
  },
];
