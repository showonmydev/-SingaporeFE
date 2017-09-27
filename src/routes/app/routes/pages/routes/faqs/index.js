import FAQs from './components/FAQs';

export default {
  path: 'faqs',
  getComponent(nextState, cb) {
    require.ensure([], (require) => {
      cb(null, FAQs);
    });
  }
};
