import React from 'react';
import { PropTypes } from 'prop-types';
// import { MdCoronavirus } from 'react-icons/md';

const Home = (props) => {
  const { country } = props;
  console.log(country);
  console.log('duncan');
  return (
    <div>
      <div>{country.country}</div>
      <div>
        TOTAL CASES:
        {' '}
        {country.cases}
      </div>
    </div>
  );
};

Home.propTypes = {
  country: PropTypes.instanceOf(Object).isRequired,
};

export default Home;
