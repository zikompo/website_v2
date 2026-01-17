import Header from "./Header";
import Footer from "./Footer";
import ParallaxBackground from "./ParallaxBackground";
import { cn } from "@/lib/utils";

const Layout = ({
  children,
  wide = false,
}: {
  children: React.ReactNode;
  wide?: boolean;
}) => (
  <>
    <ParallaxBackground />
    <div className="flex flex-col min-h-screen text-foreground">
      <Header wide={wide} />
      <main
        className={cn(
          "w-full mx-auto px-6 md:px-8 flex-grow",
          wide ? "max-w-6xl" : "max-w-3xl",
        )}
      >
        {children}
      </main>
      <Footer wide={wide} />
    </div>
  </>
);

export default Layout;
