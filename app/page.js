import Latest from "./components/Latest";
import MostRead from "./components/MostRead";

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen">
      <div className="flex flex-col w-full mx-auto p-6 md:flex-row md:justify-between bg-slate-300">
        <Latest />
        <MostRead />
      </div>
      <div>
        <p>hello</p>
      </div>
    </main>
  );
}
