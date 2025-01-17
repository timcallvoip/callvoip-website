var menu = function () {
  var elements = document.getElementsByClassName('has-dropdown');
  if (!elements) return;

  Array.prototype.forEach.call(elements, function (element, index) {

      element.addEventListener('click', function (e) {
          e.preventDefault();

          if(element.classList.contains('active')) {
            element.classList.toggle('active');
            var dropdown = element.nextElementSibling;
            dropdown.classList.toggle('hidden');
            dropdown.classList.toggle('active-dropdown');
            return
          }


          var nav = element.parentElement.parentElement;

          Array.prototype.forEach.call(nav.children, function (element, index) {

            element.firstElementChild.classList.remove('active');

              if (element.children) {
                  Array.prototype.forEach.call(element.children, function (element, index) {
                      if (element.classList.contains('active-dropdown')) {
                          element.classList.remove('active-dropdown');
                          element.classList.toggle('hidden')
                      }
                  });
              }
          });

          element.classList.toggle('active');
          var dropdown = element.nextElementSibling;
          dropdown.classList.toggle('hidden');
          dropdown.classList.toggle('active-dropdown');
          // element.classList.toggle('hidden');
      })
  });
}()

var activemenu = function () {
  var items = document.getElementsByClassName('has-dropdown');

  Array.prototype.forEach.call(items, function (element, index) {
      var parent = element;
      var sibiling = element.nextElementSibling;

      if (sibiling.children) {
          Array.prototype.forEach.call(sibiling.children, function (element, index) {
              if (element.children[0].classList.contains('text-blue')) {
                  parent.classList.add('text-blue')
              }

          });
      }


  });

}();


// function closeMenu() {

//   const dropdowns = document.getElementsByClassName('active-dropdown');

//   Array.prototype.forEach.call(dropdowns, function (element, index) {

//     console.log('active dropdown')
    
//     element.addEventListener('click', function() {
//       console.log('click')
//     })

//   })



// }

// closeMenu();


window.addEventListener('mouseup', function(event) {

  
  const dropdowns = document.getElementsByClassName('active-dropdown');

  Array.prototype.forEach.call(dropdowns, function (element, index) {


    if(event.target != element && event.target.parentNode != element) {


      element.parentNode.firstElementChild.classList.remove('active')

      element.classList.remove('active-dropdown');
      element.classList.add('hidden');
    }

  });



})


// 

function openChat() {

  const button = document.getElementById('openChat');

  if(button) {
    button.addEventListener('click', function (e) {
      e.preventDefault();
      window.Trengo.Api.Widget.open('chat');
    });

  }

}

openChat();




  const cl = cloudinary.Cloudinary.new({ cloud_name: 'spinme' })
  cl.responsive()

if(document.getElementById('tabs')) {

(function() {

  'use strict';

  /**
   * tabs
   *
   * @description The Tabs component.
   * @param {Object} options The options hash
   */
  var tabs = function(options) {

    var el = document.querySelector(options.el);
    var tabNavigationLinks = el.querySelectorAll(options.tabNavigationLinks);
    var tabContentContainers = el.querySelectorAll(options.tabContentContainers);
    var activeIndex = 0;
    var initCalled = false;

    /**
     * init
     *
     * @description Initializes the component by removing the no-js class from
     *   the component, and attaching event listeners to each of the nav items.
     *   Returns nothing.
     */
    var init = function() {
      if (!initCalled) {
        initCalled = true;
        el.classList.remove('no-js');

        for (var i = 0; i < tabNavigationLinks.length; i++) {
          var link = tabNavigationLinks[i];
          handleClick(link, i);
        }
      }
    };

    /**
     * handleClick
     *
     * @description Handles click event listeners on each of the links in the
     *   tab navigation. Returns nothing.
     * @param {HTMLElement} link The link to listen for events on
     * @param {Number} index The index of that link
     */
    var handleClick = function(link, index) {
      link.addEventListener('click', function(e) {
        e.preventDefault();
        goToTab(index);
      });
    };

    /**
     * goToTab
     *
     * @description Goes to a specific tab based on index. Returns nothing.
     * @param {Number} index The index of the tab to go to
     */
    var goToTab = function(index) {
      if (index !== activeIndex && index >= 0 && index <= tabNavigationLinks.length) {
        tabNavigationLinks[activeIndex].classList.remove('border-blue');
        tabNavigationLinks[index].classList.add('border-blue');
        tabContentContainers[index].classList.add('md:h-auto');
        tabContentContainers[activeIndex].classList.remove('md:h-auto');
        activeIndex = index;
      }
    };

    /**
     * Returns init and goToTab
     */
    return {
      init: init,
      goToTab: goToTab
    };

  };

  /**
   * Attach to global namespace
   */
  window.tabs = tabs;

})();


// Initialise at bottom of HTML
var myTabs = tabs({
    el: '#tabs',
    tabNavigationLinks: '.tab-link',
    tabContentContainers: '.tab-content'
  });


  myTabs.init();
}



var showmenu = function () {
  var button = document.getElementById('menuToggle');

  if(!button) {
      return;
  }

  var menu = document.getElementById('mobileNavigation');

  button.addEventListener('click', function (e) {
      e.preventDefault();
      menu.classList.toggle('hidden');
  });


}();


const nav = document.querySelector('.stickybar');
const navTop = nav.offsetTop + 400;

function stickyNavigation() {

  if (window.scrollY >= navTop) {
    // nav offsetHeight = height of nav
    //document.body.style.paddingTop = nav.offsetHeight + 'px';
    nav.classList.remove('hidden-forced');
  } else {
    document.body.style.paddingTop = 0;
    nav.classList.add('hidden-forced');
  }
}

window.addEventListener('scroll', stickyNavigation);


// const index = document.querySelector('.stickyindex');
// const indexTop = index.offsetTop + 400;

// function stickyindexigation() {

//   if (window.scrollY >= indexTop) {
//     // index offsetHeight = height of index
//     //document.body.style.paddingTop = index.offsetHeight + 'px';
//     index.classList.add('pt-32');
//   } else {
//     document.body.style.paddingTop = 0;
//     index.classList.remove('pt-32');
//   }
// }

// window.addEventListener('scroll', stickyindexigation);


function pageSummary() {

  if(!document.getElementById('page-content')) return;
  if(!document.getElementById('page-summary')) return;

  const pageContent = document.getElementById('page-content');
  const pageSummary = document.getElementById('page-summary');

  const elements = pageContent.querySelectorAll('h2, h3');
  const summaryElements = [];

  console.log('elements', elements)

  elements.forEach( function(element) {
    const id = element.outerText.replace(/\s+/g, '-').toLowerCase();
    element.setAttribute('id', id );

    const summaryElement = {}

    summaryElement.text = element.outerText;
    summaryElement.id = id;

    summaryElements.push(summaryElement)

  })

  console.log('summeryelements', summaryElements)

  if(!summaryElements) return;

  summaryElements.forEach( function(element) {

    const pageElement = document.createElement('a');

    pageElement.innerHTML = element.text;
    pageElement.classList.add('block', 'mb-2', 'font-medium');
    pageElement.setAttribute('href', "#" + element.id)

    pageSummary.appendChild(pageElement)

  })





}

pageSummary();

