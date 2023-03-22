import { useState } from 'react';
import s from 'components/Searchbar/Searchbar.module.css';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Searchbar({ onSubmit }) {
  const [searchData, setSearchData] = useState('');

  const handleChange = e => {
    const { value } = e.currentTarget;
    setSearchData(value.toLowerCase());
  };

  const handleSubmit = e => {
    e.preventDefault();

    if (searchData.trim() === '') {
      toast('Пустоту искать не очень интересно!');
      return;
    }
    onSubmit(searchData);
    setSearchData('');
  };

  return (
    <header className={s.searchbar}>
      <form className={s.form} onSubmit={handleSubmit}>
        <button type="submit" className={s.button}>
          <span className={s.button_label}>Search</span>
        </button>

        <input
          className={s.input}
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
          value={searchData}
          onChange={handleChange}
        />
      </form>
    </header>
  );
}
