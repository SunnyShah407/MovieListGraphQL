import base64 from 'react-native-base64';

export function decodeBase64(str: String) {
  return base64.decode(str || '');
}
export function getEncodeMovieId(str: String) {
  let decodedString = decodeBase64(str);
  if (decodedString.split(':').length >= 1) {
    return decodedString.split(':')[1];
  }
  return '';
}
