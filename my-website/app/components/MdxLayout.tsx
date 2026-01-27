export default function MdxLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="max-w-4xl mx-auto text-foreground">
      <div className="[&>h1]:text-4xl [&>h1]:font-light [&>h1]:text-foreground [&>h1]:mb-4 [&>h1]:mt-8 [&>h2]:text-3xl [&>h2]:font-light [&>h2]:text-foreground [&>h2]:mb-3 [&>h2]:mt-6 [&>h3]:text-2xl [&>h3]:font-light [&>h3]:text-foreground [&>h3]:mb-2 [&>h3]:mt-5 [&>p]:text-foreground [&>p]:leading-relaxed [&>p]:mb-4 [&>strong]:text-foreground [&>strong]:font-semibold [&>em]:text-foreground [&>em]:italic [&>blockquote]:border-l-4 [&>blockquote]:border-border [&>blockquote]:pl-4 [&>blockquote]:text-muted-foreground [&>blockquote]:italic [&>blockquote]:my-6 [&>ul]:text-foreground [&>ul]:mb-4 [&>ul]:pl-6 [&>ol]:text-foreground [&>ol]:mb-4 [&>ol]:pl-6 [&>li]:mb-2 [&>a]:text-primary [&>a]:underline hover:[&>a]:text-primary/80 [&>code]:bg-muted [&>code]:px-2 [&>code]:py-1 [&>code]:rounded [&>code]:text-sm [&>code]:text-foreground [&>pre]:bg-muted [&>pre]:p-4 [&>pre]:rounded-lg [&>pre]:overflow-x-auto [&>pre]:my-4 [&>pre]:text-foreground">
        {children}
      </div>
    </div>
  );
}
