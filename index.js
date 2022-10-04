"use strict"

var path = require('path');

var exeName = {
  win32: '7z.exe',
  linux: '7zzs',
}[process.platform] || '7z';

module.exports = path.join(__dirname, process.platform, exeName);
