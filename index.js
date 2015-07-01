module.exports = function (opts) {
  var op = getOp(opts.op)
  var type = getType(opts.dtype)
  var endian = getEndian(opts.endian, opts.dtype)
  if (op != null && type != null && endian != null) {
    return op + type + endian
  }
}

function getOp (op) {
  switch (op) {
    case 'read': case 'write':
      return op
  }
}

function getType (dtype) {
  switch (dtype) {
    case 'int8':
      return 'Int8'
    case 'int16':
      return 'Int16'
    case 'int32':
      return 'Int32'
    case 'uint8':
      return 'UInt8'
    case 'uint16':
      return 'UInt16'
    case 'uint32':
      return 'UInt32'
    case 'float32':
      return 'Float'
    case 'float64':
      return 'Double'
  }
}

function getEndian (endian, dtype) {
  if (dtype === 'int8' || dtype === 'uint8') {
    return ''
  }
  switch (endian) {
    case 'little':
      return 'LE'
    case 'big':
      return 'BE'
  }
}
