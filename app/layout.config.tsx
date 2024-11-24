import { Logo } from '@/components/logo/logo';
import type { BaseLayoutProps } from 'fumadocs-ui/layouts/shared';

/**
 * Shared layout configurations
 *
 * you can configure layouts individually from:
 * Home Layout: app/(home)/layout.tsx
 * Docs Layout: app/docs/layout.tsx
 */
export const baseOptions: BaseLayoutProps = {
  nav: {
    enableSearch: true,
    enabled: true,
    transparentMode:"top",
    children: <Logo/>
  },
  githubUrl: "https://github.com/cloud-cup/cloud-cup",
  links: [
    {
      text: 'Documentation',
      url: '/docs',
      active: 'nested-url',
    },
  ],
};
