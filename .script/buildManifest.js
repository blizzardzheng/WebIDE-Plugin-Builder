console.log("start generate manifest")
const fs = require('fs');

const buildEntryFromEnv = process.env.PACKAGE_DIR;
const VERSION = process.env.VERSION

const packageConfig = require(`${buildEntryFromEnv}/package.json`);
const mapPackage = require('./mapPackage');

packageConfig.codingIdePackage.version = VERSION || packageConfig.codingIdePackage.version || packageConfig.version
const version = packageConfig.codingIdePackage.version
const newPackage = mapPackage(packageConfig)
fs.writeFile(`dist/${version}/manifest.json`, JSON.stringify(newPackage, null, 4), 
function(err) {
    if(err) {
        return console.log(err);
    }
    console.log("generate manifest json success");
});
