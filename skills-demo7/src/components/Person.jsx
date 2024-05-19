import React from 'react';
import PropTypes from 'prop-types';

const Person = ({person}) => {
  return (
    <div className='person'>
      <h3>{person.name}</h3>
      <h3>{person.age}</h3>
      <h3>{person.pokemon}</h3>
      <h3>{person.email}</h3>
      <h3>{person.isMarried}</h3>
    </div>
  );
};

Person.propTypes = {
  person: PropTypes.shape({
    name: PropTypes.string,
    age: PropTypes.number,
    pokemon: PropTypes.string,
    email: PropTypes.string,
    isMarried: PropTypes.bool,
  }),
};

export default Person;
