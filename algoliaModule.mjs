// For the default version
const algoliasearch = require('algoliasearch');

const client = algoliasearch('6H6QUFZBZ1', 'd35a8bddc8a829b01ac8a66a2bc9a2ea');
const index = client.initIndex('visionel-note');
for (var i = 0; i < localStorage.length; i++){
    const userData = localStorage.getItem(localStorage.key(i));
    const parseData = JSON.parse(userData);
    index.saveObject(parseData, {
    autoGenerateObjectIDIfNotExist: true
}).then(({ objectIDs }) => {
    console.log(objectIDs);
    console.log(parseData);
});
}
index.setSettings({
    searchableAttributes: [
        'title',
        'content'
    ]
}).then(() => {
    // done
});