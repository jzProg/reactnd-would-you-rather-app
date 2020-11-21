import sha256 from 'crypto-js/sha256';

export function getHash(text) {
  return toHexString(sha256(text).words);
}

function toHexString(byteArray) {
  return Array.from(byteArray, function(byte) {
    return ('0' + (byte & 0xFF).toString(16)).slice(-2);
  }).join('')
}
