import styles from "../css/app.css";

import { library, dom } from '@fortawesome/fontawesome-svg-core'

import { faCloud } from "@fortawesome/pro-light-svg-icons/faCloud";
import { faAngleRight } from "@fortawesome/pro-light-svg-icons/faAngleRight";
import { faDesktop } from "@fortawesome/pro-light-svg-icons/faDesktop";
import { faTabletAlt } from "@fortawesome/pro-light-svg-icons/faTabletAlt";
import { faHeadset } from "@fortawesome/pro-light-svg-icons/faHeadset";
import { faComments } from "@fortawesome/pro-light-svg-icons/faComments";
import { faPhone } from "@fortawesome/pro-light-svg-icons/faPhone";
import { faHome } from "@fortawesome/pro-light-svg-icons/faHome";
import { faBuilding } from "@fortawesome/pro-light-svg-icons/faBuilding";
import { faFileContract } from "@fortawesome/pro-light-svg-icons/faFileContract";
import { faBoxesAlt } from "@fortawesome/pro-light-svg-icons/faBoxesAlt";
import { faPiggyBank } from "@fortawesome/pro-light-svg-icons/faPiggyBank";
import { faFileSignature } from "@fortawesome/pro-light-svg-icons/faFileSignature";
import { faUserLock } from "@fortawesome/pro-light-svg-icons/faUserLock";
import { faCommentAltSmile } from "@fortawesome/pro-light-svg-icons/faCommentAltSmile";
import { faLaptop } from "@fortawesome/pro-light-svg-icons/faLaptop";
import { faCodeBranch } from "@fortawesome/pro-light-svg-icons/faCodeBranch";
import { faPhoneVolume } from "@fortawesome/pro-light-svg-icons/faPhoneVolume";
import { faMobileAlt } from "@fortawesome/pro-light-svg-icons/faMobileAlt";
import { faBoxOpen } from "@fortawesome/pro-light-svg-icons/faBoxOpen";
import { faCommentAlt } from "@fortawesome/pro-light-svg-icons/faCommentAlt";
import { faMegaphone } from "@fortawesome/pro-light-svg-icons/faMegaphone";
import { faUser } from "@fortawesome/pro-light-svg-icons/faUser";
import { faBars } from "@fortawesome/pro-light-svg-icons/faBars";
import { faSearch } from "@fortawesome/pro-light-svg-icons/faSearch";

library.add(faCloud, faLaptop, faSearch, faBars, faUser, faMegaphone, faBoxOpen, faCommentAlt, faUserLock, faMobileAlt, faPhoneVolume, faCodeBranch, faCommentAltSmile, faFileSignature, faPiggyBank, faFileContract, faBoxesAlt, faAngleRight, faHome, faBuilding, faComments, faPhone, faDesktop, faTabletAlt,faHeadset);


dom.watch();


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