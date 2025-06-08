import Header from "./Header";
import Footer from "./Footer";
import { cn } from "@/lib/utils";

const Layout = ({ children, wide = false }: { children: React.ReactNode, wide?: boolean }) => (
  <div className="flex flex-col min-h-screen bg-background text-foreground">
    <Header />
    <main className={cn(
      "w-full mx-auto p-4 flex-grow",
      wide ? "max-w-7xl" : "max-w-3xl"
    )}>
      {children}
    </main>
    <Footer wide={wide} />
  </div>
);

export default Layout;
