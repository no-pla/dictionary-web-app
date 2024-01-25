import SearchForm from "./components/SearchForm";
import WordContainer from "./components/WordContainer";

export default function Home() {
  return (
    <main className="h-screen dark:bg-[#050505] dark:text-white flex flex-col items-center">
      <div className="w-full max-w-[736px]">
        <SearchForm />
        <WordContainer />
      </div>
    </main>
  );
}
