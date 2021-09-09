import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Storyline extends Component {
  render() {
    const { value, onClick } = this.props;

    return (
      <label htmlFor="storyline" data-testid="storyline-input-label">
        Sinopse
        <textarea
          data-testid="storyline-input"
          value={ value }
          onChange={ onClick }
          type="text"
          name="storyline"
          id="storyline"
        />
      </label>
    );
  }
}

Storyline.propTypes = {
  onClick: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
};

export default Storyline;
