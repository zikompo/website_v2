import Header from "./Header";
import Footer from "./Footer";

const Layout = ({ children }: { children: React.ReactNode }) => (
  <div className="min-h-screen bg-neutral-100 text-zinc-800">
    <Header />
    <main className="max-w-3xl mx-auto p-4">{children}</main>
    <div className="absolute inset-x-0 bottom-0">
      <Footer />
    </div>
  </div>
);

export default Layout;
