import Header from "./Header";
import Footer from "./Footer";

const Layout = ({ children }: { children: React.ReactNode }) => (
  <div className="flex flex-col min-h-screen bg-neutral-100 text-zinc-800">
    <Header />
    <main className="w-full max-w-3xl mx-auto p-4 flex-grow">{children}</main>
    <Footer />
  </div>
);

export default Layout;
