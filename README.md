# Magento2 Extendable Shipping Save Processor

Because we need extensions to not conflict with each other.

## How to use

```javascript
// Your/Module/view/frontend/requirejs-config.js

var config = {
    "config": {
        "mixins": {
            "Briteskies_ExtendableShippingSaveProcessor/extender": {
                "Your_Module/extender": true
            }
        }
    }
}
```

```javascript
// Your/Module/view/frontend/web/extender.js

define(['mage/utils/wrapper'], function (wrapper) {
    'use strict';
    
    return function (processor) {
        return wrapper.wrap(processor, function (proceed, payload) {
            payload = proceed(payload);
            payload.extension_attributes.yourAttribute = 'value';
            return payload;
        });
    };
});
```

## But why put it on github?

Easier installation across our multiple implementations.

## Okay, but did you submit a Pull Request to Magento?

[Yes, Yes I did](https://github.com/magento/magento2/pull/10991).  Go vote on it?
