var test = require('tape')

var fixtures = [
  // undefineds
  [{}, undefined],
  [{ op: 'write', dtype: 'int16' }, undefined],
  [{ dtype: 'int8', endian: 'little' }, undefined],
  [{ op: 'read', endian: 'little' }, undefined],

  // read little endian
  [{ op: 'read', dtype: 'int8' }, 'readInt8'],
  [{ op: 'read', dtype: 'int8', endian: 'little' }, 'readInt8'],
  [{ op: 'read', dtype: 'uint8' }, 'readUInt8'],
  [{ op: 'read', dtype: 'uint8', endian: 'little' }, 'readUInt8'],
  [{ op: 'read', dtype: 'int16', endian: 'little' }, 'readInt16LE'],
  [{ op: 'read', dtype: 'uint16', endian: 'little' }, 'readUInt16LE'],
  [{ op: 'read', dtype: 'int32', endian: 'little' }, 'readInt32LE'],
  [{ op: 'read', dtype: 'uint32', endian: 'little' }, 'readUInt32LE'],
  [{ op: 'read', dtype: 'float32', endian: 'little' }, 'readFloatLE'],
  [{ op: 'read', dtype: 'float64', endian: 'little' }, 'readDoubleLE'],

  // read big endian
  [{ op: 'read', dtype: 'int8', endian: 'big' }, 'readInt8'],
  [{ op: 'read', dtype: 'uint8', endian: 'big' }, 'readUInt8'],
  [{ op: 'read', dtype: 'int16', endian: 'big' }, 'readInt16BE'],
  [{ op: 'read', dtype: 'uint16', endian: 'big' }, 'readUInt16BE'],
  [{ op: 'read', dtype: 'int32', endian: 'big' }, 'readInt32BE'],
  [{ op: 'read', dtype: 'uint32', endian: 'big' }, 'readUInt32BE'],
  [{ op: 'read', dtype: 'float32', endian: 'big' }, 'readFloatBE'],
  [{ op: 'read', dtype: 'float64', endian: 'big' }, 'readDoubleBE'],

  // write little endian
  [{ op: 'write', dtype: 'int8', endian: 'little' }, 'writeInt8'],
  [{ op: 'write', dtype: 'uint8', endian: 'little' }, 'writeUInt8'],
  [{ op: 'write', dtype: 'int16', endian: 'little' }, 'writeInt16LE'],
  [{ op: 'write', dtype: 'uint16', endian: 'little' }, 'writeUInt16LE'],
  [{ op: 'write', dtype: 'int32', endian: 'little' }, 'writeInt32LE'],
  [{ op: 'write', dtype: 'uint32', endian: 'little' }, 'writeUInt32LE'],
  [{ op: 'write', dtype: 'float32', endian: 'little' }, 'writeFloatLE'],
  [{ op: 'write', dtype: 'float64', endian: 'little' }, 'writeDoubleLE'],

  // write big endian
  [{ op: 'write', dtype: 'int8', endian: 'big' }, 'writeInt8'],
  [{ op: 'write', dtype: 'uint8', endian: 'big' }, 'writeUInt8'],
  [{ op: 'write', dtype: 'int16', endian: 'big' }, 'writeInt16BE'],
  [{ op: 'write', dtype: 'uint16', endian: 'big' }, 'writeUInt16BE'],
  [{ op: 'write', dtype: 'int32', endian: 'big' }, 'writeInt32BE'],
  [{ op: 'write', dtype: 'uint32', endian: 'big' }, 'writeUInt32BE'],
  [{ op: 'write', dtype: 'float32', endian: 'big' }, 'writeFloatBE'],
  [{ op: 'write', dtype: 'float64', endian: 'big' }, 'writeDoubleBE'],
]

var btop
test('require module', function (t) {
  btop = require('./')
  t.ok(btop)
  t.equal(typeof btop, 'function')
  t.end()
})

test('get names of buffer operations', function (t) {
  fixtures.forEach(function (fixture) {
    var i = fixture[0]
    var o = fixture[1]
    t.equal(btop(i), o, JSON.stringify(i) + ' -> ' + o)
  })
  t.end()
})

//getApiTable()

function getApiTable () {
  console.log("| `Buffer` operation name | op | dtype | endian |")
  console.log("|-------------------------|----|-------|--------|")
  fixtures.forEach(function (fixture) {
    var i = fixture[0]
    var o = fixture[1]
    if (o) {
      console.log("|",o,"|",i.op,"|",i.dtype,"|",i.endian,"|")
    }
  })
}
