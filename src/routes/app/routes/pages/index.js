import about from './routes/about';
import blog from './routes/blog';
import careers from './routes/careers';
import contact from './routes/contact';
import faqs from './routes/faqs';
import services from './routes/services';
import terms from './routes/terms';

export default {
  path: 'page',
  getChildRoutes(partialNextState, cb) {
    require.ensure([], (require) => {
      cb(null, [
        about,
        blog,
        careers,
        contact,
        faqs,
        services,
        terms,
      ]);
    });
  }
};
