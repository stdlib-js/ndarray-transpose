"use strict";var o=function(r,e){return function(){return e||r((e={exports:{}}).exports,e),e.exports}};var s=o(function(f,n){
var t=require('@stdlib/assert-is-ndarray-like/dist'),u=require('@stdlib/ndarray-base-transpose/dist'),a=require('@stdlib/ndarray-base-ndims/dist'),i=require('@stdlib/error-tools-fmtprodmsg/dist');function d(r){if(!t(r))throw new TypeError(i('nullDv',r));if(a(r)<2)throw new RangeError(i("invalid argument. Must provide an ndarray having two or more dimensions. Number of dimensions: `%u`.",a(r)));return u(r,!1)}n.exports=d
});var v=s();module.exports=v;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
