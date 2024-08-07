import { Hero } from "../components/Hero";
import { JobList } from "../components/JobList";

export const Home = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-grow">
        <Hero />
        <JobList />
      </main>
    </div>
  );
};
