import React from 'react';
import { Link, hashHistory } from 'react-router';
import FlatButton from 'material-ui/FlatButton';
import 'jquery-slimscroll/jquery.slimscroll.min';


class SidebarContent extends React.Component {

  componentDidMount() {
    const nav = this.nav;
    const $nav = $(nav);

    // scroll
    $nav.slimscroll({
      height: '100%'
    });


    // Append icon to submenu
    // Append to child `div`
    $nav.find('.prepend-icon').children('div').prepend('<i class="material-icons">keyboard_arrow_right</i>');


    // AccordionNav
    const slideTime = 250;
    const $lists = $nav.find('ul').parent('li');
    $lists.append('<i class="material-icons icon-has-ul">arrow_drop_down</i>');
    const $As = $lists.children('a');

    // Disable A link that has ul
    $As.on('click', event => event.preventDefault());

    // Accordion nav
    $nav.on('click', (e) => {

      const target = e.target;
      const $parentLi = $(target).closest('li'); // closest, insead of parent, so it still works when click on i icons
      if (!$parentLi.length) return; // return if doesn't click on li
      const $subUl = $parentLi.children('ul');


      // let depth = $subUl.parents().length; // but some li has no sub ul, so...
      const depth = $parentLi.parents().length + 1;

      // filter out all elements (except target) at current depth or greater
      const allAtDepth = $nav.find('ul').filter(function () {
        if ($(this).parents().length >= depth && this !== $subUl.get(0)) {
          return true;
        }
        return false;
      });
      allAtDepth.slideUp(slideTime).closest('li').removeClass('open');

      // Toggle target
      if ($parentLi.has('ul').length) {
        $parentLi.toggleClass('open');
      }
      $subUl.stop().slideToggle(slideTime);

    });


    // HighlightActiveItems
    const $links = $nav.find('a');
    const currentLocation = hashHistory.getCurrentLocation();
    function highlightActive(pathname) {
      const path = `#${pathname}`;

      $links.each((i, link) => {
        const $link = $(link);
        const $li = $link.parent('li');
        const href = $link.attr('href');
        // console.log(href);

        if ($li.hasClass('active')) {
          $li.removeClass('active');
        }
        if (path.indexOf(href) === 0) {
          $li.addClass('active');
        }
      });
    }
    highlightActive(currentLocation.pathname);
    hashHistory.listen((location) => {
      highlightActive(location.pathname);
    });
  }


  render() {

    return (
      <ul className="nav" ref={(c) => { this.nav = c; }}>
        <li><FlatButton href="#/app/dashboard"><i className="nav-icon material-icons">dashboard</i><span className="nav-text">Analytics</span></FlatButton></li>
        <li><FlatButton href="#/app/messages"><i className="nav-icon material-icons">message</i><span className="nav-text">Inbox</span></FlatButton></li>
        
          <li className="nav-divider" />
        	<li className="nav-header"><span><big>TOOLS</big></span></li>
            <li><FlatButton href="#/app/tools/crm"><i className="nav-icon material-icons">web_asset</i><span className="nav-text">CRM</span></FlatButton></li>
            <li><FlatButton href="#/app/tools/project"><i className="nav-icon material-icons">devices</i><span className="nav-text">Project</span></FlatButton></li>
            <li><FlatButton href="#/app/tools/apps"><i className="nav-icon material-icons">library_books</i><span className="nav-text">Apps</span></FlatButton></li>
            <li><FlatButton href="#/app/tools/market"><i className="nav-icon material-icons">widgets</i><span className="nav-text">Market</span></FlatButton></li>
            
          <li className="nav-divider" />
        	<li className="nav-header"><span><big>RESOURCES</big></span></li>
            <li><FlatButton href="#/app/tools/crm"><i className="nav-icon material-icons">web_asset</i><span className="nav-text">Regs DB</span></FlatButton></li>
            <li><FlatButton href="#/app/tools/project"><i className="nav-icon material-icons">devices</i><span className="nav-text">Guides</span></FlatButton></li>
            <li><FlatButton href="#/app/tools/apps"><i className="nav-icon material-icons">library_books</i><span className="nav-text">Web Assets</span></FlatButton></li>
        
        	<li className="nav-divider" />
        	<li className="nav-header"><span><big>TRAINING</big></span></li>
            <li><FlatButton href="#/app/training/timeline"><i className="nav-icon material-icons">access_time</i><span className="nav-text">Timeline</span></FlatButton></li>
            <li><FlatButton href="#/app/training/certifications"><i className="nav-icon material-icons">school</i><span className="nav-text">Certifications</span></FlatButton></li>
            <li><FlatButton href="#/app/training/packs"><i className="nav-icon material-icons">view_list</i><span className="nav-text">Packs</span></FlatButton></li>
            <li><FlatButton href="#/app/training/singles"><i className="nav-icon material-icons">bubble_chart</i><span className="nav-text">Singles</span></FlatButton></li>
            <li><FlatButton href="#/app/training/pros"><i className="nav-icon material-icons">verified_user</i><span className="nav-text">Pros</span></FlatButton></li>
            <li><FlatButton href="#/app/training/vendors"><i className="nav-icon material-icons">business_center</i><span className="nav-text">Vendors</span></FlatButton></li>
            
        <li className="nav-divider" />
        	<li className="nav-header"><span><big>SUBSCRIPTIONS</big></span></li>
            <li><FlatButton href="#/app/tools/crm"><i className="nav-icon material-icons">web_asset</i><span className="nav-text">CPP Solar + Storage</span></FlatButton></li>
            <li><FlatButton href="#/app/tools/project"><i className="nav-icon material-icons">devices</i><span className="nav-text">Browse Channels</span></FlatButton></li>
      </ul>
    );
  }
}

export default SidebarContent;
