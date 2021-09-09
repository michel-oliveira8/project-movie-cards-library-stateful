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
        />
      </label>
    );
  }
}

Ratings.propTypes = {
  onClick: PropTypes.func.isRequired,
  value: PropTypes.number.isRequired,
};

export default Ratings;
