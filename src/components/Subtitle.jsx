import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Subtitle extends Component {
  render() {
    const { value, onClick } = this.props;

    return (
      <label htmlFor="subtitle" data-testid="subtitle-input-label">
        Subtítulo
        <input
          data-testid="subtitle-input"
          value={ value }
          onChange={ onClick }
          type="text"
          name="subtitle"
          id="subtitle"
        />
      </label>
    );
  }
}

Subtitle.propTypes = {
  onClick: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
};

export default Subtitle;
