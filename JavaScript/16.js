const createProject = (name) => {
    return {
    name,
    createdAt : Date.now(),   // Current Timestamp in Milli-Seconds since Jan 1 1970
    commits : [],
    head : -1,
    files : {},
    // ===> We are gonna use objects instead of array of objects because a project with 50000 files would be much more difficult to find in array as in objects we can directly access object properties.

    addFile (filePath, content) {
        if(this.files[filePath] !== undefined){
            return "File Already Exists!";
        }
        this.files[filePath] = {
            content,
            createdAt: Date.now()
        }
    },

    editFile (filePath, newContent) {

        if(!(filePath in this.files)) return "File doesn't exists!"

        if(this.files[filePath].content !== newContent){
            this.files[filePath].content = newContent;
        }
    },

    deleteFile (filePath) {
        if(!(filePath in this.files)) return "File doesn't exists!";
        delete this.files[filePath];
    },

    commit(message){
        const newId = this.head + 1;
        const parent = this.head === -1 ? null : this.head;
        this.commits.push(createCommit(newId, message, this.files, parent))
        this.head = newId;
    }
    }
};

const path = require("path");
const projectName = path.basename(__dirname); 

/*

__dirname → C:\Users\PC\Desktop\Practices\JavaScript  
path.basename(__dirname) → "JavaScript"

*/

const project = createProject(projectName);
console.log(project)
project.addFile("index.html","<h1> Amaan </h1>")



function deepClone(obj) {

    if (typeof obj !== "object" || obj === null) {
        return obj;
    }

    const clone = Array.isArray(obj) ? [] : {};

    for (const key of Object.keys(obj)) {
        clone[key] = deepClone(obj[key]);
    }

    return clone;
}

function createCommit (id, message, snapshot, parent) {
        return {
            id,
            message,
            snapshot : deepClone(snapshot),
            parent,
            createdAt : Date.now(),
        }
}

project.commit("Added Index.html");



console.log(project)





