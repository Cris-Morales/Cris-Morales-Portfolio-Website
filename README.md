
# Cristian's Neon Vibe Portfolio Website

This is my portfolio website github repository. Feel free to check out the files for how I designed this application. <br />

## Technologies

<div align="center" width="100%">

[![Typescript][TS.js]][TS-url][![React][React.js]][React-url][![Next.js][Next.js]][Next.js-url][![TailwindCSS][TailwindCSS]][Tailwind-url][![Git][Git]][Git-url][![HTML5][HTML5]][HTML5-url][![CSS3][CSS3]][CSS3-url][![Vercel][Vercel]][Vercel-url]
</div>

## About
This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).


## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You should be familiar with Next.js architecture to work with this repository.

- This app uses [Resend](https://resend.com/) for its 3rd party Email API. You will need to sign up for Resend and save your API key in an environment variable to utilize the Contact Form. 
- The app/lib directory contains relavent types, server actions, email template for Resend using [React Email](https://react.email/), and portfolio data which will allow the sections to automatically populate with cards related to that data. 
- There are primarily 2 libraries used for animations: [Keen-Slider](https://keen-slider.io/) for the Marquee effect on the Hero Section, and [Framer Motion](https://www.framer.com/motion/) for the the Title change, experience expansion, and Contact form transitions. The active Navigation is made using Vanilla Javascript, though I could imagine you could use Framer Motion for this effect as well.

---
<p align="right">(<a href="#readme-top">back to top</a>)</p>

[React.js]:
  https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB
[React-url]: https://reactjs.org/
[TS.js]:
  https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white
[TS-url]: https://www.typescriptlang.org/
[JavaScript]:
  https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E
[JavaScript-url]: https://www.javascript.com/
[Git]:
  https://img.shields.io/badge/git-%23F05033.svg?style=for-the-badge&logo=git&logoColor=white
[Git-url]: https://git-scm.com/
[CSS3]:
  https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white
[CSS3-url]: https://www.w3schools.com/css/
[HTML5]:
  https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white
[HTML5-url]: https://www.w3schools.com/html/
[TailwindCSS]:
  https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white
[Tailwind-url]: https://tailwindcss.com/
[Vercel]: https://img.shields.io/badge/Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white
[Vercel-url]: https://vercel.com/home
[Next.js]: https://img.shields.io/badge/next%20js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white
[Next.js-url]: https://nextjs.org/