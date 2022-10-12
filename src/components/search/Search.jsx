import React from 'react';
import { FaSearch } from 'react-icons/fa';
import { FilterRegions } from './partials/FilterRegions';

export const Search = (props) => {
  return (
    <article className="searchSection">
      <section className="inputArea">
        <FaSearch className="searchIcon" />
        <input
          type="search"
          name="search"
          id="search"
          placeholder="Search for a country..."
          value={props.searchInput}
          onChange={(e) => props.searchCountries(e.target.value)}
        ></input>
      </section>
      <FilterRegions setCountries={props.setCountries} />
    </article>
  );
};
