// Copyright (c) 2026 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import s from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-assert-is-nanf@v0.2.2-esm/index.mjs";import t from"https://cdn.jsdelivr.net/gh/stdlib-js/constants-float32-sign-mask@v0.2.2-esm/index.mjs";import e from"https://cdn.jsdelivr.net/gh/stdlib-js/number-float32-base-to-word@v0.2.2-esm/index.mjs";import n from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-abs@v0.2.2-esm/index.mjs";function i(s){return s&t?1+~s:(s|t)>>>0}function r(t,r){var m,d;return s(t)||s(r)?NaN:(m=e(t),d=e(r),m=i(m),d=i(d),n(m-d))}export{r as default};
//# sourceMappingURL=index.mjs.map
