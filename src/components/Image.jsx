import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Image extends Component {
  render() {
    const { value, onChange } = this.props;

    return (
      <label htmlFor="image" data-testid="image-input-label">
        Imagem
        <input
          data-testid="image-input"
          value={ value }
          onChange={ onChange }
          type="text"
          name="imagePath"
          id="image"
        />
      </label>
    );
  }
}

Image.propTypes = {
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
};

export default Image;
