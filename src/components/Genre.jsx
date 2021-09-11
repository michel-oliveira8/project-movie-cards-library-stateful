import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Genre extends Component {
  render() {
    const { value, onChange } = this.props;

    return (
      <label htmlFor="genre" data-testid="genre-input-label">
        Gênero
        <select
          data-testid="genre-input"
          value={ value }
          onChange={ onChange }
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
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
};

export default Genre;
