import type { MDXComponents } from 'mdx/types'
import { useMDXComponents as getDocsThemeComponents } from 'nextra-theme-docs'
import { FeatureIcon, TechnologyLogo } from './app/technology-logo'

const docsThemeComponents = getDocsThemeComponents()

export function useMDXComponents(components: MDXComponents = {}) {
  return {
    ...docsThemeComponents,
    FeatureIcon,
    TechnologyLogo,
    ...components
  }
}
