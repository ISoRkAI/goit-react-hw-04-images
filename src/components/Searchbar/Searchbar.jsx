import { useState } from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import css from './Searchbar.module.css';

export default function Searchbar({ onSubmit }) {
  const [keyword, setKeyword] = useState('');

  const handleInputСhange = e => {
    setKeyword(e.currentTarget.value.toLowerCase());
  };

  const hendleSubmit = e => {
    e.preventDefault();
    if (keyword.trim() === '') {
      toast.error('please, specify your query!');
      return;
    }
    onSubmit(keyword);
    e.currentTarget.reset();
  };

  return (
    <>
      <header className={css.searchbar}>
        <form className={css.searchForm} onSubmit={hendleSubmit}>
          <button type="submit" className={css.searchFormButton}>
            <span className={css.searchFormButtonLabel}>Search</span>
          </button>

          <input
            className={css.searchFormInput}
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            onChange={handleInputСhange}
          />
        </form>
      </header>
    </>
  );
}
