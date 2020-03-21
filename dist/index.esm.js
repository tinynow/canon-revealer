/*!
 * canon-revealer v0.0.4
 * (c) Matt Kreiling
 * Released under the MIT License.
 */
import __vue_normalize__ from 'vue-runtime-helpers/dist/normalize-component.mjs';
import __vue_create_injector__ from 'vue-runtime-helpers/dist/inject-style/browser.mjs';

var script = {
  name: 'CanonRevealer',
  functional: true,
  props: {
    speed: {
      type: Number,
      "default": 1
    }
  },
  render: function render(createElement, context) {
    var options = {
      props: {
        name: 'expand'
      },
      on: {
        afterEnter: function afterEnter(element) {
          element.style.height = 'auto';
        },
        enter: function enter(element) {
          var width = getComputedStyle(element).width;
          element.style.width = width;
          element.style.position = 'absolute';
          element.style.visibility = 'hidden';
          element.style.height = 'auto';
          var height = getComputedStyle(element).height;
          var pixels = parseInt(height.substring(0, height.length - 2));
          var duration = "".concat(pixels / context.props.speed, "ms");
          console.log(pixels);
          element.style.width = null;
          element.style.position = null;
          element.style.visibility = null;
          element.style.height = 0;
          element.style.transitionDuration = duration; // Force repaint

          getComputedStyle(element).height;
          setTimeout(function () {
            element.style.height = height;
          });
        },
        leave: function leave(element) {
          var _getComputedStyle = getComputedStyle(element),
              height = _getComputedStyle.height;

          element.style.height = height; // Force repaint

          getComputedStyle(element).height;
          setTimeout(function () {
            element.style.height = 0;
          });
        }
      }
    };
    return createElement('transition', options, context.children);
  }
};

/* script */
var __vue_script__ = script;
/* template */

/* style */

var __vue_inject_styles__ = function __vue_inject_styles__(inject) {
  if (!inject) return;
  inject("data-v-f86c7bf6_0", {
    source: "*[data-v-f86c7bf6]{will-change:height;transform:translateZ(0);backface-visibility:hidden;perspective:1000px}",
    map: undefined,
    media: undefined
  }), inject("data-v-f86c7bf6_1", {
    source: ".expand-enter-active,.expand-leave-active{transition-property:height;transition-timing-function:ease-in-out;overflow:hidden}.expand-enter,.expand-leave-to{height:0}",
    map: undefined,
    media: undefined
  });
};
/* scoped */


var __vue_scope_id__ = "data-v-f86c7bf6";
/* module identifier */

var __vue_module_identifier__ = undefined;
/* functional template */

var __vue_is_functional_template__ = undefined;
/* style inject SSR */

/* style inject shadow dom */

var __vue_component__ = __vue_normalize__({}, __vue_inject_styles__, __vue_script__, __vue_scope_id__, __vue_is_functional_template__, __vue_module_identifier__, false, __vue_create_injector__, undefined, undefined);

var index = {
  install: function install(Vue) {
    Vue.component('canon-revealer', __vue_component__);
  }
};

export default index;
