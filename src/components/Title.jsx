import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Title extends Component {
  render() {
    const { value, onChange } = this.props;

    return (
      <label htmlFor="title" data-testid="title-input-label">
        Título
        <input
          data-testid="title-input"
          value={ value }
          onChange={ onChange }
          name="title"
          type="text"
          id="title"
        />
      </label>
    );
  }
}

Title.propTypes = {
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
};

export default Title;
