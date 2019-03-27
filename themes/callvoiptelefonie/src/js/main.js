import styles from "../css/app.css";

import "./light";
import "./brands";


var menu = function () {
  var elements = document.getElementsByClassName('has-dropdown');
  console.log('test')
  if (!elements) return;

  Array.prototype.forEach.call(elements, function (element, index) {
      element.addEventListener('click', function (e) {
          e.preventDefault();


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

const cl = cloudinary.Cloudinary.new({ cloud_name: 'spinme' })
cl.responsive()