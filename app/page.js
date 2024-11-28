import FeatureChecklist from './components/FeatureChecklist';
import Hero from './components/Hero';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex flex-col gap-8 flex-grow">
        <Hero />
        <FeatureChecklist />
      </main>
    </div>
  );
}
