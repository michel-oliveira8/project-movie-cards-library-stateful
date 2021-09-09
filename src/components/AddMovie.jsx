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
        </form>
      </div>
    );
  }
}

export default AddMovie;
