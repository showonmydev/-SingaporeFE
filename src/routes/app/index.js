import about from './routes/about';
import charts from './routes/charts';
import dashboard from './routes/dashboard';
import ecommerce from './routes/ecommerce';
import extensions from './routes/extensions';
import feed from './routes/feed';
import forms from './routes/forms';
import market from './routes/market';
import mentors from './routes/mentors';
import pageLayouts from './routes/pageLayouts';
import pages from './routes/pages';
import store from './routes/store';
import support from './routes/support';
import tables from './routes/tables';
import team from './routes/team';
import timeline from './routes/timeline';
import ui from './routes/ui';
import training from './routes/training';
import MainApp from './components/MainApp';

export default {
  path: 'app',
  getChildRoutes(partialNextState, cb) {
    require.ensure([], (require) => {
      cb(null, [
        about,
        charts,
        dashboard,
        ecommerce,
        extensions,
        feed,
        forms,
        market,
        mentors,
        pageLayouts,
        pages,
        store,
        support,
        tables,
        team,
        timeline,
		training,
        ui
      ]);
    });
  },
  getComponent(nextState, cb) {
    require.ensure([], (require) => {
      cb(null, MainApp);
    });
  }
};
