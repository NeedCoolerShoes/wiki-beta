import { SiDiscord, SiGithub, SiBluesky, SiMastodon } from '@icons-pack/react-simple-icons';
import type { BaseLayoutProps } from 'fumadocs-ui/layouts/shared';

/**
 * Shared layout configurations
 *
 * you can customise layouts individually from:
 * Home Layout: app/(home)/layout.tsx
 * Docs Layout: app/docs/layout.tsx
 */
export const baseOptions: BaseLayoutProps = {
  nav: {
    title: (
      <>
        <img src="/favicon.ico" width="24" height="24" />
        NeedCoolerShoes
      </>
    ),
  },
  // see https://fumadocs.dev/docs/ui/navigation/links
  links: [
    {
      type: 'icon',
      label: 'Our Github', // `aria-label`
      icon: <SiGithub />,
      text: 'GitHub',
      url: 'https://github.com/needcoolershoes',
    },
    {
      type: 'icon',
      label: 'Discord Server', // `aria-label`
      icon: <SiDiscord />,
      text: 'Discord',
      url: 'https://discord.gg/FEfbZYvQUa',
    },
    {
      type: 'icon',
      label: 'Bluesky', // `aria-label`
      icon: <SiBluesky />,
      text: 'Bluesky',
      url: 'https://bsky.app/profile/needcoolershoes.com',
    },
    {
      type: 'icon',
      label: 'Mastodon', // `aria-label`
      icon: <SiMastodon />,
      text: 'Mastodon',
      url: 'https://mastodon.social/@needcoolershoes',
    },
  ],
};
