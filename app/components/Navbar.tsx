import { Sun } from "lucide-react";

export const Navbar = () => {
  return (
    <nav className="fixed w-full bg-white dark:bg-gray-800 py-4 border-b dark:border-gray-700">
      <div className="max-w-6xl mx-auto px-4 xl:px-0 flex justify-between items-center">
        <h1 className="text-2xl font-semibold dark:text-gray-300 ">@Ekbal41</h1>
        <div>
          <button className="rounded-full focus:ring-0 focus:outline-none dark:text-gray-300 dark:hover:text-white">
            <Sun />
          </button>
        </div>
      </div>
    </nav>
  );
};
