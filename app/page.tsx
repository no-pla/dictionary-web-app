import Dictionary from "./components/Dictionary";

export default function Home() {
  return (
    <main className="h-full min-h-screen dark:bg-[#050505] dark:text-white flex flex-col items-center">
      <Dictionary />
    </main>
  );
}
