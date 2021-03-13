const gsjson = require('google-spreadsheet-to-json')
const json = require('jsonsave');
const file = json.new(__dirname + '/storage/spreadsheet.json');
const manifest = json.new(__dirname + '/manifest.json');
 
gsjson({
    spreadsheetId: '1aYYEGEk_nU3zDLL0eQzg026Z3ZWq176JyX6hP61Y8nQ',
}).then(function(result) {
    console.log(result.length);
    console.log(result);

    manifest.version = ++manifest.version;
    manifest.$$save();
    file.$$merge(result);
    file.$$saveAs(__dirname + '/storage/spreadsheet.json');
}).catch(function(err) {
    console.log(err.message);
    console.log(err.stack);
});
