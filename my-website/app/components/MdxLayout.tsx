export default function MdxLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="max-w-4xl mx-auto font-crimson-pro text-black">
      <div className="[&>h1]:text-4xl [&>h1]:font-light [&>h1]:text-black [&>h1]:mb-4 [&>h1]:mt-8 [&>h2]:text-3xl [&>h2]:font-light [&>h2]:text-black [&>h2]:mb-3 [&>h2]:mt-6 [&>h3]:text-2xl [&>h3]:font-light [&>h3]:text-black [&>h3]:mb-2 [&>h3]:mt-5 [&>p]:text-black [&>p]:leading-relaxed [&>p]:mb-4 [&>strong]:text-black [&>strong]:font-semibold [&>em]:text-black [&>em]:italic [&>blockquote]:border-l-4 [&>blockquote]:border-gray-300 [&>blockquote]:pl-4 [&>blockquote]:text-gray-700 [&>blockquote]:italic [&>blockquote]:my-6 [&>ul]:text-black [&>ul]:mb-4 [&>ul]:pl-6 [&>ol]:text-black [&>ol]:mb-4 [&>ol]:pl-6 [&>li]:mb-2 [&>a]:text-black [&>a]:underline hover:[&>a]:text-gray-700 [&>code]:bg-gray-100 [&>code]:px-2 [&>code]:py-1 [&>code]:rounded [&>code]:text-sm [&>pre]:bg-gray-100 [&>pre]:p-4 [&>pre]:rounded-lg [&>pre]:overflow-x-auto [&>pre]:my-4">
        {children}
      </div>
    </div>
  )
} 