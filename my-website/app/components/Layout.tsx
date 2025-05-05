import Header from "./Header";
import Footer from "./Footer"; 

const Layout = ({ children }: { children: React.ReactNode }) => (
    <div className="min-h-screen bg-neutral-100 text-zinc-800 font-sans">
      <Header />
      <main className="max-w-3xl mx-auto p-4">{children}</main>
      <Footer />
    </div>
  );

export default Layout;