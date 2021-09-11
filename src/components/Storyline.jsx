import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Storyline extends Component {
  render() {
    const { value, onChange } = this.props;

    return (
      <label htmlFor="storyline" data-testid="storyline-input-label">
        Sinopse
        <textarea
          data-testid="storyline-input"
          value={ value }
          onChange={ onChange }
          type="text"
          name="storyline"
          id="storyline"
        />
      </label>
    );
  }
}

Storyline.propTypes = {
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
};

export default Storyline;
