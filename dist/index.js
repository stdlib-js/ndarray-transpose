"use strict";var t=function(r,e){return function(){return e||r((e={exports:{}}).exports,e),e.exports}};var s=t(function(f,n){
var u=require('@stdlib/assert-is-ndarray-like/dist'),o=require('@stdlib/ndarray-base-transpose/dist'),a=require('@stdlib/ndarray-base-ndims/dist'),i=require('@stdlib/error-tools-fmtprodmsg/dist');function d(r){if(!u(r))throw new TypeError(i('nullDv',r));if(a(r)<2)throw new RangeError(i("invalid argument. Input ndarray must have at least two dimensions. Number of dimensions: `%u`.",a(r)));return o(r,!1)}n.exports=d
});var m=s();module.exports=m;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
