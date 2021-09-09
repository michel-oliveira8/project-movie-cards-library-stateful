import React from 'react';

// Crie um componente chamado `<AddMovie />`
class AddMovie extends React.Component {
  constructor() {
    super();

    this.state = {
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    };

    this.onClick = this.onClick.bind(this);
  }

  onClick(event) {
    this.setState({
      [event.target.name]: event.target.value,
    });
  }

  render() {
    const { subtitle, title, imagePath, storyline, rating, genre } = this.state;
    return (
      <div>
        {/* Renderize um formulário dentro de `<AddMovie />` */}
        <form data-testid="add-movie-form">
          <label htmlFor="title" data-testid="title-input-label">
            Título
            <input
              data-testid="title-input"
              value={ title }
              onChange={ this.onClick }
              name="title"
              type="text"
              id="title"
            />
          </label>
          <label htmlFor="subtitle" data-testid="subtitle-input-label">
            Subtítulo
            <input
              data-testid="subtitle-input"
              value={ subtitle }
              onChange={ this.onClick }
              type="text"
              name="subtitle"
              id="subtitle"
            />
          </label>
          <label htmlFor="image" data-testid="image-input-label">
            Imagem
            <input
              data-testid="image-input"
              value={ imagePath }
              onChange={ this.onClick }
              type="text"
              name="imagePath"
              id="image"
            />
          </label>
          <label htmlFor="storyline" data-testid="storyline-input-label">
            Sinopse
            <textarea
              data-testid="storyline-input"
              value={ storyline }
              onChange={ this.onClick }
              type="text"
              name="storyline"
              id="storyline"
            />
          </label>
          <label htmlFor="rating" data-testid="rating-input-label">
            Avaliação
            <input
              data-testid="rating-input"
              value={ rating }
              onChange={ this.onClick }
              type="number"
              name="rating"
              id="rating"
            />
          </label>
        </form>
      </div>
    );
  }
}

export default AddMovie;
