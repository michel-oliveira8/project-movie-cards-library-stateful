import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Image extends Component {
  render() {
    const { value, onClick } = this.props;

    return (
      <label htmlFor="image" data-testid="image-input-label">
        Imagem
        <input
          data-testid="image-input"
          value={ value }
          onChange={ onClick }
          type="text"
          name="imagePath"
          id="image"
        />
      </label>
    );
  }
}

Image.propTypes = {
  onClick: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
};

export default Image;
