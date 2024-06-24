type tech = 'TypeScript' | 'JavaScript' | 'React' | 'Redux' | 'Node.JS' | 'Express.JS' | 'Jest' | 'Supertest' | 'Docker' | 'TailwindCSS' | 'SASS' | 'PostgreSQL' | 'MongoDB' | 'Expo' | 'SQLite' | 'Next.JS' | 'Grafana' | 'Prometheus' | 'CSS3' | 'HTML5' | 'Git' | 'Vite' | 'Webpack' | 'Cypress'

export interface experienceData {
    company: string;
    title: string;
    timerange: string;
    bullets: string[];
    expandedBullets: string[] | null;
}

export interface projectData {
    title: string;
    screenshot: string | null;
    description: string;
    externalLink: string | null;
    githubLink: string | null;
    techstack: tech[];
}

export interface talksPubsData {
    title: string;
    thumbnail: string | null;
    externalLink: string;
    tag: string;
}

export * from './types'