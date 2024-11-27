import Footer from './components/Footer';
import Hero from './components/Hero';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex flex-col gap-8 flex-grow">
        <Hero />
      </main>
      <Footer />
    </div>
  );
}
