import { experienceData, projectData, talksPubsData, aboutMeImageType, techstackIconObj } from "./types"


export const experience: experienceData[] = [
    {
        company: 'Docketeer/OSLabs',
        title: 'Software Engineer',
        timerange: 'Sep 2023 - Current',
        bullets: [
            'Improved Container Log fetching speed, achieving a 70x improvement in API fetch time per 10,000 logs by optimizing  backend Bash command construction, and message parsing',
            'Introduced a Dev-Browser mode by configuring Docker Compose YAML files and Node.js, circumventing Docker Desktop limitations by enabling hot module reloading, and saving 16 hours of development time per week',
            'Updated the Container Logs Tab using React by adding Date Picker components to give consumers an intuitive interface to filter by a date and time range to access running and stopped container logs',
            'Implemented a Search feature in the Container Logs Tab utilizing React with regular expressions, allowing consumers to search for Container Log messages and select specific rows to export to CSV',
        ],
        expandedBullets: [
            'Opted for Redux and Redux Toolkit for efficient state management and utilized Redux Thunk for asynchronous API requests, resulting in clearer state documentation and easier debugging with Redux DevTools',
            'Engineered Container and Kubernetes metric dashboards by configuring Grafana files for constructing dashboards and PromQL to scrape for relevant data, enabling consumers to analyze application performance',
            'Created a Configurations feature that uses a PostgreSQL instance to store user - defined exposed ports for Prometheus to scrape, allowing consumers more flexibility in defining Kubernetes and Container data collection'
        ]
    },
    {
        company: 'Oilfield Equipment Marketing Inc.',
        title: 'Mechanical Engineer/Engineering Lead',
        timerange: 'Sep 2021 - Jul 2023',
        bullets: [
            'Orchestrated the training, supervision, and leadership of a team of 8 engineers in company processes and engineering design principles',
            'Programmed a Proportional Integral Differential (PID) control script in C++, ensuring precise maintenance of a user-specified amperage, saving technicians approximately 8 hours in initial system setup time per week',
            'Developed VBA scripting to automate custom data collection and visualization, allowing technicians to perform more streamlined inspection services, resulting in over 95% consumer satisfaction',
        ],
        expandedBullets: [
            'Redesigned the company\'s main product line, reducing overall volume by 40%, overall weight by 20%, manufacturing time by 30%, and modularizing the design while maintaining structural strength',
            'Demonstrated SOLIDWORKS expertise by managing SOLIDWORKS PDM Administration, providing guidance and direction to other engineers in parts, drawings, and assembly data documentation',
            'Performed the mechanical design of CNC machined parts, bent sheet metal parts, welded assemblies, and top - level mechanical assemblies utilizing SOLIDWORKS and SOLIDWORKS FEA',
            'Applied AutoCAD, KiCAD and SOLIDWORKS to engineer electronic assembly drawings and schematics, wire harness bundling, electromechanical assemblies and control panel layouts',
            'Advocated for and implemented the improvement of documentation for quality control, standard operating procedures, and folder organization and navigation',
            'Researched GD& T, structural and chemical properties to implement  additive manufacturing in the latest company product line, saving up to 24 hours of production time per day',
            'Optimized part and stock selection during production, factoring in cost and supply chain availability for current and new mechanical parts and electrical components',
            'Delivered critical guidance and feedback to the Machine Shop, Electronics and Management departments during the production phase, serving as the primary liaison for Engineering',
            'Managed Epicor ERP software to create bills-of-materials and work-flow standards for production parts and electrical / mechanical assemblies'
        ]
    },
    {
        company: 'Knight Aerospace LLC',
        title: 'Mechanical Design Engineer',
        timerange: 'Dec 2018 - Mar 2020',
        bullets: [
            'Developed, designed, and drafted both new and upgraded products, consisting of Knight Aerospace\'s patented roll on/off palletized systems, and aircraft ground support equipment',
            'Led the design of a client\'s mission pallet modification, analyzing the design with SOLIDWORKS FEA achieving an approximate 33% weight reduction while maintaining structural integrity',
            'Led training engineering seminars on SOLIDWORKS FEA and SOLIDWORKS 2020 features',
            'Facilitated and Opted for the implementation of SOLIDWORKS PDM reducing engineering design errors by 30% and improving collaboration between mechanical engineers'],
        expandedBullets: null
    },
];


export const projects: projectData[] = [
    {
        title: 'Docketeer',
        screenshot: '/projects/docketeer-container-tab-screenshot.png',
        resolutionX: 1547,
        resolutionY: 944,
        description: 'A user-friendly container management Docker Desktop extension with intuitive interfaces, and visualization tools for Docker containers and Kubernetes clusters.',
        externalLink: 'https://hub.docker.com/extensions/docketeerxiv/docketeer-extension',
        githubLink: 'https://github.com/open-source-labs/Docketeer-extension.git',
        techstack: ['TypeScript', 'React', 'Redux', 'Node.JS', 'Express.JS', 'Docker', 'PostgreSQL', 'Grafana', 'Prometheus']
    },
    {
        title: 'Docketeer.io',
        screenshot: '/projects/docketeer-io.png',
        resolutionX: 1305,
        resolutionY: 781,
        description: 'A Landing Page for Docketeer, showcasing demos of features, as well as its recent and continuous contributors.',
        externalLink: 'https://docketeer.io/',
        githubLink: null,
        techstack: ['JavaScript', 'React', 'SASS', 'Jest']
    },
    {
        title: 'HabitPop',
        screenshot: '/projects/habit-pop-logo-dark-wide.png',
        resolutionX: 1670,
        resolutionY: 1000,
        description: 'A Habit Tracking App with a satisfying pop! A personal project inspired by a whiteboard I used to keep hung up in my room to track my various habits. Utilizes a SQLite instance for tracking habits, routines, streaks, and week frequency, and uses Expo for the compiling, routing, and testing.',
        externalLink: null,
        githubLink: 'https://github.com/Cris-Morales/habit365.git',
        techstack: ['TypeScript', 'React', 'React Native', 'SQLite', 'Expo']
    },
    {
        title: 'Rewatch Time',
        screenshot: '/projects/RewatchTime-Login.png',
        resolutionX: 1571,
        resolutionY: 919,
        description: 'Experimental App that randomly selects episodes of the show Adventure Time for you to watch and tracks which episodes you\'ve watched or favorited. Database data, schema, and instance was collected, architected, and launched by myself.',
        externalLink: null,
        githubLink: 'https://github.com/Cris-Morales/Rewatch-Time.git',
        techstack: ['TypeScript', 'JavaScript', 'React', 'Node.JS', 'Express.JS', 'PostgreSQL', 'JWT', 'React Query']
    },
    {
        title: 'GetSwell',
        screenshot: null,
        resolutionX: undefined,
        resolutionY: undefined,
        description: 'Positivity-Centric Social Media Fitness App, where our task was to expand the original app to include testing. We achieved 100% backend API testing coverage, and frontend unit and end-to-end testing coverage.',
        externalLink: null,
        githubLink: 'https://github.com/Get-Swell-2-0/get-swell.git',
        techstack: ['JavaScript', 'Jest', 'Supertest', 'Cypress']
    }
]

export const talksPubs: talksPubsData[] = [
    {
        title: 'Navigating the Seas of Docker with Docketeer v15.0',
        thumbnail: '/projects/talksAndPubs/Docketeer15-Article-Icon.png',
        externalLink: 'https://medium.com/@christiandoescoding/navigating-the-seas-of-docker-with-docketeer-v15-0-ad5bd9540d14',
        tag: 'Medium'
    },
    {
        title: 'The Internet of Things',
        thumbnail: '/projects/talksAndPubs/TechTalk.png',
        externalLink: 'https://www.linkedin.com/posts/cris-morales_please-enjoy-my-tech-talk-on-the-internet-activity-7125179730277928960-NAVR?utm_source=share&utm_medium=member_desktop',
        tag: 'Tech Talk'
    }
]

export const techstackIcons: techstackIconObj[] = [
    {
        source: '/techstackIcons/typescript.svg',
        resX: 50,
        resY: 50,
    },
    {
        source: '/techstackIcons/react.svg',
        resX: 50,
        resY: 50,
    },
    {
        source: '/techstackIcons/redux.svg',
        resX: 50,
        resY: 50,
    },
    {
        source: '/techstackIcons/next2.svg',
        resX: 50,
        resY: 50,
    },
    {
        source: '/techstackIcons/node.svg',
        resX: 50,
        resY: 50,
    },
    {
        source: '/techstackIcons/html5.svg',
        resX: 50,
        resY: 50,
    },
    {
        source: '/techstackIcons/css3.svg',
        resX: 50,
        resY: 50,
    },
    {
        source: '/techstackIcons/cpp.svg',
        resX: 50,
        resY: 50,
    },
    {
        source: '/techstackIcons/python.svg',
        resX: 50,
        resY: 50,
    },
    {
        source: '/techstackIcons/tailwind.svg',
        resX: 50,
        resY: 50,
    },
    {
        source: '/techstackIcons/postgresql.svg',
        resX: 50,
        resY: 50,
    },
    {
        source: '/techstackIcons/docker.svg',
        resX: 50,
        resY: 50,
    },
    {
        source: '/techstackIcons/vite.svg',
        resX: 50,
        resY: 50,
    },
    {
        source: '/techstackIcons/figma.svg',
        resX: 50,
        resY: 50,
    },
    {
        source: '/techstackIcons/mongo.svg',
        resX: 50,
        resY: 50,
    },
    {
        source: '/techstackIcons/js.svg',
        resX: 50,
        resY: 50,
    },
    {
        source: '/techstackIcons/vb.svg',
        resX: 50,
        resY: 50,
    },
]


export const aboutMeImages: aboutMeImageType[] = [
    {
        source: '/aboutMe/meAndPartner.jpg',
        resolutionX: 1331,
        resolutionY: 1536,
        alt: 'Me and my wife.',
    },
    {
        source: "/aboutMe/meAndDoggo.jpg",
        resolutionX: 793,
        resolutionY: 887,
        alt: "Me and our family Chonk, I mean Dog, in a tortilla blanket.",
    },
    {
        source: "/aboutMe/jiuJitsuTournament.jpg",
        resolutionX: 1022,
        resolutionY: 995,
        alt: "Me, at my 3rd Grappling Tournament at Blue Belt, getting bronze because I was late to my match against the silver metal winner.",
    },
    {
        source: '/aboutMe/guineaPigs.png',
        resolutionX: 1080,
        resolutionY: 1009,
        alt: 'Our three guinea pigs.',
    }
]