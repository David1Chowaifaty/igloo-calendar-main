'use strict';

require('./moment-27049970.js');

function isBlockUnit(status_code) {
  return ['003', '002', '004'].includes(status_code);
}
function renderTime(time) {
  return time < 10 ? time.toString().padStart(2, '0') : time.toString();
}

exports.isBlockUnit = isBlockUnit;
exports.renderTime = renderTime;

//# sourceMappingURL=utils-9ba1f062.js.map