import React from 'react';
import About from '../pages/routes/about/components/About';

const dummyInfo = {
  experience: 20,
  client: 500,
  product: 15
};

export default {
  path: 'aboutus',
  getComponent(nextState, cb) {
    require.ensure([], (require) => {
      cb(null, props => (<About info={dummyInfo} />));
    });
  }
};
