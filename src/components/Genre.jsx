import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Genre extends Component {
  render() {
    const { value, onClick } = this.props;

    return (
      <label htmlFor="genre" data-testid="genre-input-label">
        Gênero
        <select
          data-testid="genre-input"
          value={ value }
          onChange={ onClick }
          name="genre"
          id="genre"
        >
          <option data-testid="genre-option" value="action">Ação</option>
          <option data-testid="genre-option" value="comedy">Comédia</option>
          <option data-testid="genre-option" value="thriller">Suspense</option>
        </select>
      </label>
    );
  }
}

Genre.propTypes = {
  onClick: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
};

export default Genre;
