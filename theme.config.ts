import { defineThemeConfig } from '@utils/defineThemeConfig'
import previewImage from '@assets/img/social-preview-image.png'
import logoImage from '@assets/img/logo.svg'

export default defineThemeConfig({
  name: 'Accessible Astro',
  id: 'accessible-astro-starter',
  logo: logoImage,
  seo: {
    title: 'Accessible Astro Starter',
    description:
      'An Accessible Starter Theme for Astro including several accessibility features and tools to help you build faster.',
    author: 'Incluud',
    image: previewImage, // Can also be a string e.g. '/social-preview-image.png',
  },
  colors: {
    primary: '#d648ff',
    secondary: '#00d1b7',
    neutral: '#b9bec4',
    outline: '#ff4500',
  },
  navigation: {
    darkmode: true,
    items: [
      {
        type: 'link',
        label: 'Home',
        href: '/accessible-astro/',
      },
      {
        type: 'link',
        label: 'Blog',
        href: '/accessible-astro/blog',
      },
      {
        type: 'link',
        label: 'Portfolio',
        href: '/accessible-astro/portfolio',
      },
      {
        label: 'Features',
        type: 'dropdown',
        items: [
          {
            label: 'Accessibility statement',
            href: '/accessible-astro/accessibility-statement',
          },
          {
            label: 'Accessible components',
            href: '/accessible-astro/accessible-components',
          },
          {
            label: 'Accessible launcher',
            href: '/accessible-astro/accessible-launcher',
          },
          {
            label: 'Color contrast checker',
            href: '/accessible-astro/color-contrast-checker',
          },
          {
            label: 'Markdown page',
            href: '/accessible-astro/markdown-page',
          },
          {
            label: 'MDX page',
            href: '/accessible-astro/mdx-page',
          },
          {
            label: '404 page',
            href: '/accessible-astro/404',
          },
          {
            label: 'Sitemap',
            href: '/accessible-astro/sitemap',
          },
        ],
      },
      {
        type: 'link',
        label: 'Contact',
        href: '/accessible-astro/contact',
      },
      {
        type: 'link',
        label: 'Go to our GitHub page, opens in new tab',
        href: 'https://github.com/incluud/accessible-astro-starter',
        icon: 'lucide:github',
        external: true,
        excludeFromLauncher: true,
      },
    ],
  },
  socials: [
    {
      label: 'GitHub',
      href: 'https://github.com/incluud/',
      icon: 'lucide:github',
    },
    {
      label: 'Bluesky',
      href: 'https://bsky.app/profile/incluud.dev',
      icon: 'lucide:bot-message-square',
    },
    {
      label: 'Open Collective',
      href: 'https://opencollective.com/incluud',
      icon: 'lucide:hand-heart',
    },
  ],
})
