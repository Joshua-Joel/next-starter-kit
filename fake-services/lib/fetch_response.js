const path = require('path');
const fs = require('fs');

const fetchResponse = (responseDir, fileName) => {
  return new Promise((resolve, reject) => {
    const extension = path.extname(fileName);

    if (extension === '.json') {
      const filePath = path.join(__dirname, '../../stubs', responseDir, fileName);
      fs.readFile(filePath, 'utf-8', (err, data) => {
        if (err) {
          console.error('Error reading JSON file:', err);
          reject({ error: 'Unable to fetch the JSON response.' });
        } else {
          try {
            resolve(JSON.parse(data));
          } catch (parseError) {
            console.error('Error parsing JSON file:', parseError);
            reject({ error: 'Invalid JSON format.' });
          }
        }
      });
    } else if (extension === '.js') {
      try {
        const jsResponse = require(path.join(__dirname, '../../stubs', responseDir, fileName));
        resolve(jsResponse);
      } catch (requireError) {
        console.error('Error requiring JS file:', requireError);
        reject({ error: 'Unable to fetch the JS response.' });
      }
    } else {
      reject({ error: 'Unsupported file type.' });
    }
  });
};

module.exports = fetchResponse;
