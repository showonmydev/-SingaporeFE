import boxes from './routes/boxes';
import buttons from './routes/buttons';
import callToActions from './routes/callToActions';
import cards from './routes/cards';
import colors from './routes/colors';
import components from './routes/components';
import featureCallouts from './routes/featureCallouts';
import grids from './routes/grids';
import hover from './routes/hover';
import iconBoxes from './routes/iconBoxes';
import icons from './routes/icons';
import lists from './routes/lists';
import menus from './routes/menus';
import pricingTables from './routes/pricingTables';
import sashes from './routes/sashes';
import testimonials from './routes/testimonials';
import timeline from './routes/timeline';
import typography from './routes/typography';

export default {
  path: 'ui',
  getChildRoutes(partialNextState, cb) {
    require.ensure([], (require) => {
      cb(null, [
        boxes,
        buttons,
        callToActions,
        cards,
        colors,
        components,
        featureCallouts,
        grids,
        hover,
        iconBoxes,
        icons,
        lists,
        menus,
        pricingTables,
        sashes,
        testimonials,
        timeline,
        typography,
      ]);
    });
  }
};
