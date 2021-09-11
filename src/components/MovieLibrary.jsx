import React, { Component } from 'react';
import PropTypes from 'prop-types';
import MovieList from './MovieList';
import SearchBar from './SearchBar';
import AddMovie from './AddMovie';

class MovieLibrary extends Component {
  constructor(props) {
    super(props);

    const { movies } = props;
    this.state = {
      searchText: '',
      bookmarkeOnly: false,
      selectedGenre: '',
      movies,
    };

    this.handleSearchBar = this.handleSearchBar.bind(this);
  }

  handleSearchBar({ target }) {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState({
      [name]: value,
    });
  }

  render() {
    const { searchText, bookmarkeOnly, selectedGenre, movies } = this.state;
    return (
      <div>
        <h2> My awesome movie library </h2>
        <AddMovie />
        <SearchBar
          searchText={ searchText }
          onSearchTextChange={ this.handleSearchBar }
          bookmarkeOnly={ bookmarkeOnly }
          onBookmarkedChange={ this.handleSearchBar }
          selectedGenre={ selectedGenre }
          onSelectedGenreChange={ this.handleSearchBar }
        />
        <MovieList movies={ movies } />
      </div>
    );
  }
}

MovieLibrary.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.object,
  ).isRequired,
};

export default MovieLibrary;
