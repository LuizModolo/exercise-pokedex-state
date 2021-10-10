import React from 'react';
import Pokemon from './Pokemon';

class Pokedex extends React.Component {
  constructor(props) {
    super(props) 

    this.state = {
      index: 0,
      typePokemon: this.props.pokemons,
      disabled: false
    }
  }

  handleIndexNext = () => {
    const { typePokemon } = this.state;
    this.setState((stateBefore, _props) => {
      return { index: stateBefore.index === typePokemon.length - 1 ? 0 : stateBefore.index + 1 };
    })
  }

  handleType = (type) => {
    const { pokemons } = this.props;
    if (pokemons.filter((pokemon) => pokemon.type === type).length !== 1) {
      this.setState({
        index: 0,
        typePokemon: pokemons.filter((pokemon) => pokemon.type === type),
        disabled: false
      })
    } else {
      this.setState({
        index: 0,
        typePokemon: pokemons.filter((pokemon) => pokemon.type === type),
        disabled: true
      })
    }
  }

  handleAll = () => {
    this.setState({
      index: 0,
      typePokemon: this.props.pokemons
    })
  }

  render() {
    const { pokemons } = this.props;
    const arrayTypes =  [...new Set(pokemons.map((pokemon) => pokemon.type))];
      return (
        <div className="pokedex">
          <Pokemon className='pokemonCard' pokemon={this.state.typePokemon[this.state.index]} />
          <div className='buttons'>
            {arrayTypes.map((type) => <button onClick={() => this.handleType(type)} key={type} >{type}</button>)}
            <button onClick={this.handleIndexNext} disabled={this.state.disabled} >&#10132;</button>
            <button onClick={this.handleAll} >All</button>
          </div>
        </div>
      );
  }
}

export default Pokedex;