import bar from './routes/bar';
import funnel from './routes/funnel';
import line from './routes/line';
import more from './routes/more';
import pie from './routes/pie';
import radar from './routes/radar';
import scatter from './routes/scatter';

export default {
  path: 'chart',
  getChildRoutes(partialNextState, cb) {
    require.ensure([], (require) => {
      cb(null, [
        bar,
        funnel,
        line,
        more,
        pie,
        radar,
        scatter
      ]);
    });
  }
};
