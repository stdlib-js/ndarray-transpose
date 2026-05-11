// Copyright (c) 2026 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import s from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-ndarray-like@v0.2.3-esm/index.mjs";import r from"https://cdn.jsdelivr.net/gh/stdlib-js/ndarray-base-transpose@v0.2.4-esm/index.mjs";import t from"https://cdn.jsdelivr.net/gh/stdlib-js/ndarray-base-ndims@v0.2.3-esm/index.mjs";import e from"https://cdn.jsdelivr.net/gh/stdlib-js/error-tools-fmtprodmsg@v0.2.3-esm/index.mjs";function n(n){if(!s(n))throw new TypeError(e("nullDv",n));if(t(n)<2)throw new RangeError(e("invalid argument. Input ndarray must have at least two dimensions. Number of dimensions: `%u`.",t(n)));return r(n,!1)}export{n as default};
//# sourceMappingURL=index.mjs.map
