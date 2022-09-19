import fs from 'fs'
import path from 'path'
import { Secret } from 'jsonwebtoken'

/**
 * Read keys from file.
 *
 * @param { string } filePath - Relative urlpath.
 * @returns { string } - Secret key.
 */

export const getKey = (keyName: string) => {
  try {
    const keyPath = path.join(__dirname, '../../keys/' + keyName)
    const key: Secret = fs.readFileSync(keyPath, 'utf8')
    return key
  } catch (error: unknown) {
    console.log('error i getKey: ', error)
  }
}
