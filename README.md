# joi-extension-spdx

SPDX License IDs plugin for Joi

```js
const { spdx } = require('joi-extension-spdx');
const Joi = require('joi').extend(spdx);


Joi.attempt('BSD-3-Clause', Joi.spdx().current());      // 'BSD-3-Clause'

Joi.attempt('AGPL-1.0',     Joi.spdx());                // 'AGPL-1.0'
Joi.attempt('AGPL-1.0',     Joi.spdx().current());      // ValidationError
Joi.attempt('AGPL-1.0',     Joi.spdx().deprecated());   // 'AGPL-1.0'

Joi.attempt('foobar',       Joi.spdx());                // ValidationError
```
