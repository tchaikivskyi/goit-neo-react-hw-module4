import { useState } from "react";
import toast from "react-hot-toast";
import css from "./style.module.css";
import searchIcon from "./../../assets/icons/search.svg";

type SearchBarProps = {
  onSearch: (query: string) => void;
};

function SearchBar({ onSearch }: SearchBarProps) {
  const [searchValue, setSearchValue] = useState<string>("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!searchValue.trim()) {
      return toast.error("Необхідно ввести текст для пошуку зображень");
    }
    onSearch(searchValue);
  };

  return (
    <header className={css.header}>
      <form onSubmit={handleSubmit} className={css.form}>
        <button type="submit" className={css.button}>
          <img className={css.searchIcon} src={searchIcon} alt="search icon" />
        </button>
        <input
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
          className={css.input}
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
        />
      </form>
    </header>
  );
}

export default SearchBar;
