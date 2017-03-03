"use strict"

var path = require('path');

var exeName = {
  win32: '7z.exe'
}[process.platform] || '7z';

module.exports = path.join(__dirname, 'win', exeName);
