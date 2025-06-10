import type { MDXComponents } from 'mdx/types'

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    // Apply Crimson Pro font and styling to all MDX content
    h1: ({ children }) => (
      <h1 className="text-4xl font-light text-foreground mb-4 mt-8 font-crimson-pro">
        {children}
      </h1>
    ),
    h2: ({ children }) => (
      <h2 className="text-3xl font-light text-foreground mb-3 mt-6 font-crimson-pro">
        {children}
      </h2>
    ),
    h3: ({ children }) => (
      <h3 className="text-2xl font-light text-foreground mb-2 mt-5 font-crimson-pro">
        {children}
      </h3>
    ),
    p: ({ children }) => (
      <p className="text-foreground leading-relaxed mb-4 font-crimson-pro">
        {children}
      </p>
    ),
    strong: ({ children }) => (
      <strong className="text-foreground font-semibold">{children}</strong>
    ),
    em: ({ children }) => (
      <em className="text-foreground italic">{children}</em>
    ),
    blockquote: ({ children }) => (
      <blockquote className="border-l-4 border-border pl-4 text-muted-foreground italic my-6 font-crimson-pro">
        {children}
      </blockquote>
    ),
    ul: ({ children }) => (
      <ul className="text-foreground mb-4 pl-6 font-crimson-pro list-disc">
        {children}
      </ul>
    ),
    ol: ({ children }) => (
      <ol className="text-foreground mb-4 pl-6 font-crimson-pro list-decimal">
        {children}
      </ol>
    ),
    li: ({ children }) => (
      <li className="mb-2">{children}</li>
    ),
    a: ({ children, href }) => (
      <a 
        href={href} 
        className="text-primary underline hover:text-primary/80 transition-colors"
      >
        {children}
      </a>
    ),
    code: ({ children }) => (
      <code className="bg-muted px-2 py-1 rounded text-sm text-foreground">
        {children}
      </code>
    ),
    pre: ({ children }) => (
      <pre className="bg-muted p-4 rounded-lg overflow-x-auto my-4">
        {children}
      </pre>
    ),
    ...components,
  }
} 