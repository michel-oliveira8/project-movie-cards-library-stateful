import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Ratings extends Component {
  render() {
    const { value, onChange } = this.props;

    return (
      <label htmlFor="rating" data-testid="rating-input-label">
        Avaliação
        <input
          data-testid="rating-input"
          value={ value }
          onChange={ onChange }
          type="number"
          name="rating"
          id="rating"
          min="0"
          max="10"
        />
      </label>
    );
  }
}

Ratings.propTypes = {
  onChange: PropTypes.func.isRequired,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
};

export default Ratings;
