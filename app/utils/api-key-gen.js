const base32 = require('encode32')
const uuidv4 = require('uuid').v4

class ApiKeyGen {
  static generate () {
    let uuid = uuidv4()

    uuid = uuid.replace(/-/g, '')
    const s1 = uuid.substr(0, 8)
    const s2 = uuid.substr(8, 8)
    const s3 = uuid.substr(16, 8)
    const s4 = uuid.substr(24, 8)
    const n1 = Number(`0x${s1}`)
    const n2 = Number(`0x${s2}`)
    const n3 = Number(`0x${s3}`)
    const n4 = Number(`0x${s4}`)
    const e1 = base32.encode32(n1)
    const e2 = base32.encode32(n2)
    const e3 = base32.encode32(n3)
    const e4 = base32.encode32(n4)

    return `${e1}${e2}${e3}${e4}`
  }
}

module.exports = ApiKeyGen
