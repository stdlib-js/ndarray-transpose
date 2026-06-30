"use strict";var t=function(r,e){return function(){try{return e||r((e={exports:{}}).exports,e),e.exports}catch(o){throw (e=0, o)}};};var s=t(function(p,n){
var u=require('@stdlib/assert-is-ndarray-like/dist'),d=require('@stdlib/ndarray-base-transpose/dist'),a=require('@stdlib/ndarray-base-ndims/dist'),i=require('@stdlib/error-tools-fmtprodmsg/dist');function v(r){if(!u(r))throw new TypeError(i('2oLDv',r));if(a(r)<2)throw new RangeError(i('2oLKE',a(r)));return d(r,!1)}n.exports=v
});var m=s();module.exports=m;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
