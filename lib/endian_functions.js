"use strict";

var os = require('os');

exports.setFunctions = function setFunctions(){
    switch (os.endianness()) {
        case 'LE':
            exports.read32 = Buffer.prototype.readUInt32LE;
            exports.read16 = Buffer.prototype.readUInt16LE;
            exports.read8 = Buffer.prototype.readUInt8;
            exports.write32 = Buffer.prototype.writeUInt32LE;
            exports.write16 = Buffer.prototype.writeUInt16LE;
            exports.write8 = Buffer.prototype.writeUInt8;
            exports.endian = 'LE';
            break;
        case 'BE':
            exports.read32 = Buffer.prototype.readUInt32BE;
            exports.read16 = Buffer.prototype.readUInt16BE;
            exports.read8 = Buffer.prototype.readUInt8;
            exports.write32 = Buffer.prototype.writeUInt32BE;
            exports.write16 = Buffer.prototype.writeUInt16BE;
            exports.write8 = Buffer.prototype.writeUInt8;
            exports.endian = 'BE';
            break;
        default:
            console.log('Go back to the 80\'s, PDP USER!!1!1!oneoneone');
            break;
    }

};