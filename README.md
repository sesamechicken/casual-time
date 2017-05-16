causual-time
============
A tiny package to convert dates and datetimes to a human-friendly causual time format.

Converts `2017/05/08` => `About 2 days ago.`

## Example Usage

```js
var casualTime = require('casual-time');
var time = '05/08/2015';

var friendlyTime = casualTime(time); 
// About 2 days ago.
```
