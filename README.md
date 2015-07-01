# btop

get name of `Buffer` operations given:

- `op`: 'read' or 'write'
- `dtype`: [data type](https://github.com/shama/dtype#api)
- `endian`: 'little' or 'big'

## install

with [npm](https://npmjs.org), do:

```
npm i --save btop
```

## usage

`btop(opts)` will return the following `Buffer` operation name based on the `op`, `dtype`, and `endian` options given:

| `Buffer` operation name | op | dtype | endian |
|-------------------------|----|-------|--------|
| readInt8LE | read | int8 | little |
| readUInt8LE | read | uint8 | little |
| readInt16LE | read | int16 | little |
| readUInt16LE | read | uint16 | little |
| readInt32LE | read | int32 | little |
| readUInt32LE | read | uint32 | little |
| readFloatLE | read | float32 | little |
| readDoubleLE | read | float64 | little |
| readInt8BE | read | int8 | big |
| readUInt8BE | read | uint8 | big |
| readInt16BE | read | int16 | big |
| readUInt16BE | read | uint16 | big |
| readInt32BE | read | int32 | big |
| readUInt32BE | read | uint32 | big |
| readFloatBE | read | float32 | big |
| readDoubleBE | read | float64 | big |
| writeInt8LE | write | int8 | little |
| writeUInt8LE | write | uint8 | little |
| writeInt16LE | write | int16 | little |
| writeUInt16LE | write | uint16 | little |
| writeInt32LE | write | int32 | little |
| writeUInt32LE | write | uint32 | little |
| writeFloatLE | write | float32 | little |
| writeDoubleLE | write | float64 | little |
| writeInt8BE | write | int8 | big |
| writeUInt8BE | write | uint8 | big |
| writeInt16BE | write | int16 | big |
| writeUInt16BE | write | uint16 | big |
| writeInt32BE | write | int32 | big |
| writeUInt32BE | write | uint32 | big |
| writeFloatBE | write | float32 | big |
| writeDoubleBE | write | float64 | big |

returns `undefined` otherwise.

## license

ISC
