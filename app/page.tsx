import Header from "./components/Header/Header";
import SearchForm from "./components/SearchForm";
import WordContainer from "./components/Word/WordContainer";

export default function Home() {
  return (
    <main className="h-full min-h-screen dark:bg-[#050505] dark:text-white flex flex-col items-center">
      <div className="w-full max-w-[736px]">
        <Header />
        <SearchForm />
        <WordContainer />
      </div>
    </main>
  );
}
