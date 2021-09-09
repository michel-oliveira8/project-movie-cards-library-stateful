import React from 'react';
import Title from './Title';
import Subtitle from './Subtitle';
import Image from './Image';
import Storyline from './Storyline';
import Ratings from './Ratings';
import Genre from './Genre';

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
          <Title value={ title } onClick={ this.onClick } />
          <Subtitle value={ subtitle } onClick={ this.onClick } />
          <Image value={ imagePath } onClick={ this.onClick } />
          <Storyline value={ storyline } onClick={ this.onClick } />
          <Ratings value={ rating } onClick={ this.onClick } />
          <Genre value={ genre } onClick={ this.onClick } />
        </form>
      </div>
    );
  }
}

export default AddMovie;
