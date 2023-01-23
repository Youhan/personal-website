import Image from 'next/image'
import Head from 'next/head'

import { Card } from '@/components/Card'
import { SimpleLayout } from '@/components/SimpleLayout'
import logoAshleyHomestore from '@/images/logos/ash.png'
import logoDufrese from '@/images/logos/dufresne.png'
import logoShopify from '@/images/logos/shopify.svg'
import logoMemi from '@/images/logos/memi.png'
import chromeLogo from '@/images/logos/chrome.svg'
import logoNimiq from '@/images/logos/nimiq.svg'
import logoDynamic from '@/images/logos/dynamic.svg'
import logoFigma from '@/images/logos/figma.svg'
import logoGithub from '@/images/logos/github-mark-white.svg'
import logoOwwwlab from '@/images/logos/owwwlab.svg'
import logoWordpress from '@/images/logos/wordpress.svg'

const projects = [
  {
    name: 'Ashley Homestore theme',
    description:
      'I built a Vue.js theme for Ashley Homestore’s website. I used TailwindCSS to build the theme and it was a great experience.',
    link: { href: 'https://ashleyhomestore.ca/', label: 'ashleyhomestore.ca' },
    logo: logoAshleyHomestore,
  },
  {
    name: 'Dufrese theme',
    description:
      'I built a Vue.js theme for Dufrese’s website. This is the same theme that is on Ashley Homestore’s website.',
    link: { href: 'https://dufresne.ca/', label: 'dufresne.ca' },
    logo: logoDufrese,
  },
  {
    name: 'Satchel & Page Shopify theme',
    description:
      'I build this Shopify theme while working at FuleMade. Build from scatach on Shopify v2.0 and this time I used Svelte.js! to build web-components',
    link: { href: 'https://www.satchel-page.com/', label: 'satchel-page.com' },
    logo: logoShopify,
  },
  {
    name: 'Kiosk Chrome App',
    description:
      'This was a Chrome App in Kiosk mode that is used on physical scores across Canada. I build it using Nuxt.js PWA and TailwindCSS and GraphQL backend.',
    link: { href: '', label: 'not public' },
    logo: chromeLogo,
  },
  {
    name: 'Memi web app',
    description:
      'I was the frontend lead on this project and built the web app for Memi using Nuxt.js and TailwindCSS.',
    link: {
      href: 'https://www.linkedin.com/company/verified-by-memi/',
      label: 'linkedin.com',
    },
    logo: logoMemi,
  },
  {
    name: 'Nimiq Miner',
    description:
      'A cryptocurrency miner for the Nimiq blockchain. I helped developing the parallel programing logic and all the frontend for it.',
    link: { href: 'https://github.com/NoncerPro', label: 'github.com' },
    logo: logoNimiq,
  },
  {
    name: 'Dynamic Miner and pool',
    description:
      'I was part of the project that for the first time implemented a GPU miner for Argon2d algorithm. We also created a pool for it so that miners can mine together.',
    link: { href: '', label: 'retired' },
    logo: logoDynamic,
  },
  {
    name: 'Figma Squircle plugin',
    description:
      'A Figma plugin that creates a squircle shape. I build it using Figma’s API and Vue.js.',
    link: {
      href: 'https://github.com/Youhan/figma-Squircle-plugin"',
      label: 'github.com',
    },
    logo: logoFigma,
  },
  {
    name: 'Toranj HTML template',
    description:
      'A HTML template for photographers. Built in 2015. Won a Awwwards.',
    link: {
      href: 'https://github.com/Youhan/toranj-html-template',
      label: 'github.com',
    },
    logo: logoOwwwlab,
  },
  {
    name: 'Toranj WordPress theme',
    description: "The WordPress version of Toranj's HTML template.",
    link: {
      href: '',
      label: '',
    },
    logo: logoWordpress,
  },
  {
    name: 'Faculty HTML template',
    description: 'A HTML template for universities. Built in 2014.',
    link: {
      href: 'https://github.com/Youhan/faculty-html-theme',
      label: 'github.com',
    },
    logo: logoOwwwlab,
  },
  {
    name: 'Faculty WordPress theme',
    description: "The WordPress version of Faculty's HTML template.",
    link: {
      href: '',
      label: '',
    },
    logo: logoWordpress,
  },
  {
    name: 'Choas HTML template',
    description:
      'A massive set of templates for academic websites. Built in 2017.',
    link: {
      href: 'https://github.com/Youhan/chaos-html',
      label: 'github.com',
    },
    logo: logoOwwwlab,
  },
  {
    name: 'Vida HTML template',
    description:
      'An unconventional one page template at the time with horizontal scrolling and sliding. Built in 2013.',
    link: {
      href: 'https://github.com/Youhan/vida-html-template',
      label: 'github.com',
    },
    logo: logoOwwwlab,
  },
  {
    name: 'Eram WordPress theme',
    description: 'A WordPress theme for photographers.',
    link: {
      href: '',
      label: 'github.com',
    },
    logo: logoWordpress,
  },
  {
    name: 'Hubble WordPress theme',
    description: 'A personal WordPress theme for academic people.',
    link: {
      href: '',
      label: 'github.com',
    },
    logo: logoWordpress,
  },
  {
    name: 'Hilbert WordPress template',
    description: 'A WordPress template for academic people.',
    link: {
      href: '',
      label: 'github.com',
    },
    logo: logoWordpress,
  },
]

function LinkIcon(props) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        d="M15.712 11.823a.75.75 0 1 0 1.06 1.06l-1.06-1.06Zm-4.95 1.768a.75.75 0 0 0 1.06-1.06l-1.06 1.06Zm-2.475-1.414a.75.75 0 1 0-1.06-1.06l1.06 1.06Zm4.95-1.768a.75.75 0 1 0-1.06 1.06l1.06-1.06Zm3.359.53-.884.884 1.06 1.06.885-.883-1.061-1.06Zm-4.95-2.12 1.414-1.415L12 6.344l-1.415 1.413 1.061 1.061Zm0 3.535a2.5 2.5 0 0 1 0-3.536l-1.06-1.06a4 4 0 0 0 0 5.656l1.06-1.06Zm4.95-4.95a2.5 2.5 0 0 1 0 3.535L17.656 12a4 4 0 0 0 0-5.657l-1.06 1.06Zm1.06-1.06a4 4 0 0 0-5.656 0l1.06 1.06a2.5 2.5 0 0 1 3.536 0l1.06-1.06Zm-7.07 7.07.176.177 1.06-1.06-.176-.177-1.06 1.06Zm-3.183-.353.884-.884-1.06-1.06-.884.883 1.06 1.06Zm4.95 2.121-1.414 1.414 1.06 1.06 1.415-1.413-1.06-1.061Zm0-3.536a2.5 2.5 0 0 1 0 3.536l1.06 1.06a4 4 0 0 0 0-5.656l-1.06 1.06Zm-4.95 4.95a2.5 2.5 0 0 1 0-3.535L6.344 12a4 4 0 0 0 0 5.656l1.06-1.06Zm-1.06 1.06a4 4 0 0 0 5.657 0l-1.061-1.06a2.5 2.5 0 0 1-3.535 0l-1.061 1.06Zm7.07-7.07-.176-.177-1.06 1.06.176.178 1.06-1.061Z"
        fill="currentColor"
      />
    </svg>
  )
}

export default function Projects() {
  return (
    <>
      <Head>
        <title>Projects - Alireza Jahandideh</title>
        <meta
          name="description"
          content="Things I’ve made trying to put my dent in the universe."
        />
      </Head>
      <SimpleLayout
        title="Things I’ve made trying to put my dent in the universe."
        intro="I’ve worked on tons of little projects over the years but these are the ones that I’m most proud of. Many of them are open-source, so if you see something that piques your interest, check out the code and contribute if you have ideas for how it can be improved."
      >
        <ul
          role="list"
          className="grid grid-cols-1 gap-x-12 gap-y-16 sm:grid-cols-2 lg:grid-cols-3"
        >
          {projects.map((project) => (
            <Card as="li" key={project.name}>
              <div className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full bg-zinc-800 shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0">
                <Image
                  src={project.logo}
                  alt=""
                  className="h-8 w-8"
                  unoptimized
                />
              </div>
              <h2 className="mt-6 text-base font-semibold text-zinc-800 dark:text-zinc-100">
                <Card.Link href={project.link.href}>{project.name}</Card.Link>
              </h2>
              <Card.Description>{project.description}</Card.Description>
              <p className="relative z-10 mt-6 flex text-sm font-medium text-zinc-400 transition group-hover:text-teal-500 dark:text-zinc-200">
                <LinkIcon className="h-6 w-6 flex-none" />
                <span className="ml-2">{project.link.label}</span>
              </p>
            </Card>
          ))}
        </ul>
      </SimpleLayout>
    </>
  )
}
