/**
 * playing with console log and node version
 */

console.log('Hello World');

/* check node version in console.log */
console.log(process.version);
if (process.version === 'v20.11.1') {
    console.log('You are using the latest version of Node.js');
} else {
    console.log('You are using an older version of Node.js');
}

/*check recommended LTs node version from nodejs.org*/
console.log(process.versions);  
console.log(process.versions.node);
