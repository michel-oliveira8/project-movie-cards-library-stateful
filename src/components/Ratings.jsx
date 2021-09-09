import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Ratings extends Component {
  render() {
    const { value, onClick } = this.props;

    return (
      <label htmlFor="rating" data-testid="rating-input-label">
        Avaliação
        <input
          data-testid="rating-input"
          value={ value }
          onChange={ onClick }
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
  onClick: PropTypes.func.isRequired,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
};

export default Ratings;
