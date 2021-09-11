// import React, { Component } from 'react';
// import PropTypes from 'prop-types';

// import MovieList from './MovieList';
// import SearchBar from './SearchBar';
// import AddMovie from './AddMovie';

// class MovieLibrary extends Component {
//   constructor(props) {
//     super(props);

//     const { movies } = props;
//     this.state = {
//       searchText: '',
//       bookmarkeOnly: false,
//       selectedGenre: '',
//       movies,
//     };
//   }

//   render() {
//     const { searchText, bookmarkeOnly, selectedGenre, movies } = this.state;
//     return (
//       <div>
//         <h2> My awesome movie library </h2>
//         <SearchBar
//           searchText={ searchText }
//           onSearchTextChange={ this.handleChange }
//           bookmarkeOnly={ bookmarkeOnly }
//           onBookmarkedChange={ this.handleChange }
//           selectedGenre={ selectedGenre }
//           onSelectedGenreChange={ this.handleChange }
//         />
//         <MovieList movies={ movies } />
//         <AddMovie />
//       </div>
//     );
//   }
// }

// MovieLibrary.propTypes = {
//   movies: PropTypes.array.isRequired,
// };

// export default MovieLibrary;
