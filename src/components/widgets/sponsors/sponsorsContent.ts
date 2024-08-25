type sponsor = {
    name: string,
    tagline: string,
    logo: string,
    website: string,
}

export type tier = {
    heading: string,
    importance: number,
    sponsors: sponsor[]
}

// listed in order of appearance/importance
export const sponsorTiers: tier[] = [
    {
        heading: 'Keystone Benefactor',
        importance: 1,
        sponsors: [
            {
                name: 'Sponsor 1',
                tagline: 'Sky is the limit',
                logo: 'https://via.placeholder.com/150',
                website: 'https://example.com',
            }
        ],
    },
    {
        heading: 'Co-Presented by:',
        importance: 2,
        sponsors: [
            {
                name: 'Sponsor 2',
                tagline: 'Together we thrive',
                logo: 'https://via.placeholder.com/150',
                website: 'https://example.com',
            },
            {
                name: 'Sponsor 3',
                tagline: 'Empowering communities',
                logo: 'https://via.placeholder.com/150',
                website: 'https://example.com',
            },
            {
                name: 'Sponsor 4',
                tagline: 'Innovation for all',
                logo: 'https://via.placeholder.com/150',
                website: 'https://example.com',
            }
        ],
    },
    {
        heading: 'Sponsored by:',
        importance: 3,
        sponsors: []
    },
    {
        heading: 'In Cooperation With:',
        importance: 4,
        sponsors: []
    }
    , {
        heading: 'In Partnership With:',
        importance: 5,
        sponsors: []
    },
    {
        heading: 'Contributing Partners',
        importance: 6,
        sponsors: []
    },
    {
        heading: 'Community Patners',
        importance: 6,
        sponsors: []
    }
]