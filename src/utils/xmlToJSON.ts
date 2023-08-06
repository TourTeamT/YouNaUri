import { parseString } from 'xml2js';

export const xmlToJSON = (xml: string): Promise<any> => {
  return new Promise((resolve, reject) => {
    parseString(xml, (err, result) => {
      if (err) {
        reject(err);
      } else {
        resolve(result);
      }
    });
  });
};
