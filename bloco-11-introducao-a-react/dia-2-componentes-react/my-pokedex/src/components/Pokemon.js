import React from 'react';
import PropTypes from 'prop-types';

class Pokemon extends React.Component {
  render() {
    const { pokemon: { id, name, type, averageWeight, image } } = this.props;

    return (
      <div>
        <div>
          <p>{ id }</p>
          <p>{ name }</p>
          <p>{ type }</p>
          <p>{ `Peso Médio: ${averageWeight.value} ${averageWeight.measurementUnit}` }</p>
        </div>
        <img src={ image } alt={ `{name} sprite`} />
      </div>
    )
  };
}

Pokemon.propTypes = {
  pokemon: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    type: PropTypes.string,
    averageWeight: PropTypes.shape({
      value: PropTypes.number,
      measurementUnit:PropTypes.string
    }),
    image: PropTypes.string,
  }).isRequired,
};

export default Pokemon;