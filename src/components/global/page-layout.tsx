import Header from "./header";
import Footer from "./footer";

export default function PageLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col justify-between">
      <Header />
        {children}
      <Footer />
    </div>
  );
}