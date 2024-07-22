type tech = 'TypeScript' | 'JavaScript' | 'React' | 'Redux' | 'Node.JS' | 'Express.JS' | 'Jest' | 'Supertest' | 'Docker' | 'TailwindCSS' | 'SASS' | 'PostgreSQL' | 'MongoDB' | 'Expo' | 'SQLite' | 'Next.JS' | 'Grafana' | 'Prometheus' | 'CSS3' | 'HTML5' | 'Git' | 'Vite' | 'Webpack' | 'Cypress' | 'JWT' | 'React Query' | 'React Native'

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
    resolutionX: number | undefined,
    resolutionY: number | undefined,
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

export interface aboutMeImageType {
    source: string;
    resolutionX: number;
    resolutionY: number;
    alt: string;
}

export interface techstackIconObj {
    source: string;
    resX: number;
    resY: number;

}

export * from './types'