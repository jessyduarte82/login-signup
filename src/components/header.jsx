import React from 'react';
import { useSearchParams } from 'react-router-dom';
import { NavBar } from './nav-bar';


export const Header = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  function handleSearchForm(e) {
    e.preventDefault();
    const searchString = e.target.search.value;
    setSearchParams({ search: searchString });
  }

  return (
  <header className='w-full bg-sky-800 m-auto text-white flex justify-between items-center px-20 py-6'>
          <NavBar/>
          <form onSubmit={handleSearchForm}>
            <input
              type="search"
              name="search"
              placeholder="Procure o projecto"
              className="text-black px-2 py-1 w-80"

            />
          </form>   
  </header>
  );
};