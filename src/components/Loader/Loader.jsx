import React from 'react';
import LoaderSpinner from './Loader';

const Loader = () => {
  return (
    <LoaderSpinner
      type="TailSpin"
      color="#00BFFF"
      height={50}
      width={50}
      timeout={3000}
    />
  );
};

export default Loader;
