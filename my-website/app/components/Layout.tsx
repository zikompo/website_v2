import Header from "./Header";
import Footer from "./Footer";
import { cn } from "@/lib/utils";

const Layout = ({
  children,
  wide = false,
}: {
  children: React.ReactNode;
  wide?: boolean;
}) => (
  <>
    {/* Light mode background */}
    <div className="fixed inset-0 -z-10 h-full w-full bg-white bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] dark:hidden" />
    {/* Dark mode background */}
    <div className="fixed inset-0 -z-10 h-full w-full bg-[#000000] bg-[radial-gradient(#ffffff33_1px,#000000_1px)] bg-[size:20px_20px] hidden dark:block" />
    <div className="flex flex-col min-h-screen text-foreground">
      <Header />
      <main
        className={cn(
          "w-full mx-auto p-4 flex-grow",
          wide ? "max-w-7xl" : "max-w-3xl",
        )}
      >
        {children}
      </main>
      <Footer wide={wide} />
    </div>
  </>
);

export default Layout;
