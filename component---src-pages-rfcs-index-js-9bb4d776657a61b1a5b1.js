"use strict";(self.webpackChunkprm_external_developer_website=self.webpackChunkprm_external_developer_website||[]).push([[915],{3674:function(e,t,n){var r,l=(r=n(7910))&&r.__esModule?r:{default:r};t.Z=void 0;var a=l.default;t.Z=a},162:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=a(n(7294)),l=a(n(9931));function a(e){return e&&e.__esModule?e:{default:e}}function o(e){return o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},o(e)}function u(){return u=Object.assign||function(e){for(var t,n=1;n<arguments.length;n++)for(var r in t=arguments[n])Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e},u.apply(this,arguments)}function i(e,t){if(null==e)return{};var n,r,l=function(e,t){if(null==e)return{};var n,r,l={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],0<=t.indexOf(n)||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],!(0<=t.indexOf(n))&&Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){for(var n,r=0;r<t.length;r++)(n=t[r]).enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}function f(e){return f=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},f(e)}function m(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function p(e,t){return p=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},p(e,t)}var d=function(e){function t(e){var n;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),n=function(e,t){return!t||"object"!==o(t)&&"function"!=typeof t?m(e):t}(this,f(t).call(this,e)),n.getColumnSize=n.getColumnSize.bind(m(n)),n.wrapChildren=n.wrapChildren.bind(m(n)),n}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&p(e,t)}(t,e),function(e,t,n){t&&s(e.prototype,t),n&&s(e,n)}(t,[{key:"getColumnSize",value:function(){var e=this.props.children;switch(r.default.Children.count(e)){case 1:return"nhsuk-grid-column-full";case 2:return"nhsuk-grid-column-one-half";case 3:return"nhsuk-grid-column-one-third";case 4:return"nhsuk-grid-column-one-quarter";default:return""}}},{key:"wrapChildren",value:function(){var e=this.props.children,t=this.getColumnSize();return r.default.Children.map(e,(function(e){return r.default.createElement("div",{className:(0,l.default)(c({},t,""!==t),"nhsuk-promo-group__item")},e)}))}},{key:"render",value:function(){var e=this.props,t=e.className,n=i(e,["className"]);return r.default.createElement("div",u({className:(0,l.default)("nhsuk-grid-row nhsuk-promo-group",t)},n),this.wrapChildren())}}]),t}(r.default.Component);d.defaultProps={className:""};var h=d;t.default=h},7910:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=o(n(7294)),l=o(n(9931)),a=o(n(162));function o(e){return e&&e.__esModule?e:{default:e}}function u(){return u=Object.assign||function(e){for(var t,n=1;n<arguments.length;n++)for(var r in t=arguments[n])Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e},u.apply(this,arguments)}function i(e,t){if(null==e)return{};var n,r,l=function(e,t){if(null==e)return{};var n,r,l={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],0<=t.indexOf(n)||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],!(0<=t.indexOf(n))&&Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var c=function(e){var t=e.children,n=e.className,a=i(e,["children","className"]);return r.default.createElement("h3",u({className:(0,l.default)("nhsuk-promo__heading",n)},a),t)};c.defaultProps={className:""};var s=function(e){var t=e.children,n=e.className,a=i(e,["children","className"]);return r.default.createElement("p",u({className:(0,l.default)("nhsuk-promo__description",n)},a),t)};s.defaultProps={className:""};var f=function(e){var t=e.href,n=e.onClick,a=e.children,o=e.imgUrl,c=e.imgAlt,s=e.small,f=e.className,m=i(e,["href","onClick","children","imgUrl","imgAlt","small","className"]);return r.default.createElement("div",u({className:(0,l.default)("nhsuk-promo",{"nhsuk-promo--small":s},f)},m),r.default.createElement("a",{className:"nhsuk-promo__link-wrapper",onClick:n,href:t},o?r.default.createElement("img",{className:"nhsuk-promo__img",src:o,alt:c}):null,r.default.createElement("div",{className:"nhsuk-promo__content"},a)))};f.defaultProps={href:"#",imgUrl:"",imgAlt:"",small:!1,className:"",onClick:function(){}},f.Group=a.default,f.Heading=c,f.Content=s;var m=f;t.default=m},2227:function(e,t,n){n.d(t,{W:function(){return o}});var r=n(7294),l=n(7198),a=n(3139),o=function(e){var t=e.children;return r.createElement(r.Fragment,null,r.createElement(a.o,null),r.createElement(l.A,null,r.createElement("div",{className:"app-pane__main-content"},t)))}},842:function(e,t,n){n.r(t);var r=n(7294),l=n(5444),a=n(5186),o=n(3674),u=n(2227);t.default=function(e){e.children;return r.createElement(r.Fragment,null,r.createElement(a.q,{title:"RFCs - Patient Record Migration"}),r.createElement(u.W,{sidemenu:{items:[{url:(0,l.dq)("/gp2gp/gp2gp_2.2b/overview"),label:"GP2GP v2.2b"},{url:(0,l.dq)("/gp2gp/gp2gp_2.3/overview"),label:"GP2GP v2.3"}]},breadcrumb:{items:[{url:(0,l.dq)("/rfcs"),label:"RFCs"}]}},r.createElement("h1",null,"RFCs"),r.createElement("p",null,"Below is time ordered, latest first, list of the RFCs across Patient Record Migration."),r.createElement(o.Z,{href:(0,l.dq)("/rfcs/RFC0002_patient_switching_standard_mi/overview"),small:!0},r.createElement(o.Z.Heading,null,"RFC0002: Patient Switching Standard - Management Information"),r.createElement(o.Z.Content,null,"Describes the process of collecting Management Information in the New Patient Switching Standard")),r.createElement(o.Z,{href:(0,l.dq)("/rfcs/RFC0001_gp2gp_mi/overview"),small:!0},r.createElement(o.Z.Heading,null,"RFC0001: GP2GP MI"),r.createElement(o.Z.Content,null,"Describes the changes to the Management Information specification for GP2GP"))))}}}]);
//# sourceMappingURL=component---src-pages-rfcs-index-js-9bb4d776657a61b1a5b1.js.map