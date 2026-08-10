const createProject = (name) => {
  return {
    name,
    createdAt: Date.now(),

    commits: [],

    branches: {
      main: -1,
    },

    currentBranch: "main",

    isModified: false,

    conflicts: [],

    files: {},

    // We use objects instead of an array of objects because
    // direct property access is much faster/easier for many files.

    addFile(filePath, content) {
      if (this.files[filePath] !== undefined) {
        return "File Already Exists!";
      }

      this.files[filePath] = {
        content,
        createdAt: Date.now(),
      };

      this.isModified = true;
    },

    editFile(filePath, newContent) {
      if (!this.files[filePath]) {
        return "File doesn't exist!";
      }

      if (this.files[filePath].content !== newContent) {
        this.files[filePath].content = newContent;
        this.isModified = true;
      }
    },

    deleteFile(filePath) {
      if (!(filePath in this.files)) {
        return "File doesn't exist!";
      }

      delete this.files[filePath];

      this.isModified = true;
    },

    commit(message) {
      if (!this.isModified) {
        return "Nothing to Commit.";
      }

      const newId = this.commits.length;

      const parent =
        this.branches[this.currentBranch] === -1
          ? null
          : this.branches[this.currentBranch];

      this.commits.push(
        createCommit(newId, message, this.files, parent)
      );

      this.branches[this.currentBranch] = newId;

      this.isModified = false;
    },

    log() {
      if (this.commits.length === 0) {
        return "No commits yet.";
      }

      let temp = this.branches[this.currentBranch];

      while (temp !== -1 && temp !== null) {
        console.log("\n----------------------");

        const commit = this.commits[temp];

        console.log(`Commit #${commit.id}`);
        console.log(`Message : ${commit.message}`);
        console.log(`Parent : ${commit.parent}`);
        console.log(`Created At : ${commit.createdAt}`);

        console.log("----------------------\n");

        temp = commit.parent;
      }
    },

    checkout(id) {
      if (id >= this.commits.length || id < 0) {
        return "Commit Id isn't valid";
      }

      this.files = deepClone(this.commits[id].snapshot);

      this.branches[this.currentBranch] = id;

      this.isModified = false;
    },

    status() {
      const workingTreeState = this.isModified
        ? "Modified"
        : "Clean";

      console.log("\n----------------------");

      console.log(`Repository : ${this.name}`);
      console.log(`Head : ${this.branches[this.currentBranch]}`);
      console.log(`Working Tree : ${workingTreeState}`);

      console.log("----------------------\n");
    },

    createBranch(name) {
      if (!name || typeof name !== "string") {
        return "Name isn't Valid";
      }

      if (this.branches[name] !== undefined) {
        return "Branch Already Exists";
      }

      this.branches[name] =
        this.branches[this.currentBranch];
    },

    switchBranch(name) {
      if (!name || typeof name !== "string") {
        return "Name isn't Valid";
      }

      if (this.branches[name] === undefined) {
        return "Branch Not Exists";
      }

      if (this.branches[name] === -1) {
        this.files = {};
      } else {
        this.files = deepClone(
          this.commits[this.branches[name]].snapshot
        );
      }

      this.currentBranch = name;

      this.isModified = false;
    },

    mergeBranch(name) {
      if (!name || typeof name !== "string") {
        return "Name isn't Valid";
      }

      if (this.branches[name] === undefined) {
        return "Branch Not Exists";
      }

      if (this.currentBranch === name) {
        return `You are currently on Branch ${name}`;
      }

      if (this.isModified) {
        return "Commit Your changes first";
      }

      const message = `Merged ${name}`;

      return this.mergeCommit(name, message);
    },

    mergeCommit(name, message) {
      const newId = this.commits.length;

      const currentBranchCommit =
        this.branches[this.currentBranch];

      const targetBranchCommit =
        this.branches[name];

      const parent = [
        currentBranchCommit,
        targetBranchCommit,
      ];

      const baseCommit = this.findMergeBase(
        currentBranchCommit,
        targetBranchCommit
      );

      if (baseCommit === null) {
        return "Unable to find common ancestor.";
      }

      const result = mergeSnapshots(
        this.commits[baseCommit].snapshot,
        this.commits[currentBranchCommit].snapshot,
        this.commits[targetBranchCommit].snapshot
      );

      // Stop merge if conflicts exist
      if (result.conflicts.length > 0) {
        this.conflicts = result.conflicts;

        return {
          message: "Merge Conflict",
          conflicts: this.conflicts,
        };
      }

      const snapshot = deepClone(result.snapshot);

      // Update working tree
      this.files = deepClone(snapshot);

      // Create merge commit
      this.commits.push({
        id: newId,
        message,
        snapshot,
        parent,
        createdAt: Date.now(),
      });

      // Move current branch HEAD
      this.branches[this.currentBranch] = newId;

      this.isModified = false;

      this.conflicts = [];

      return {
        message: "Merge Successful",
        commitId: newId,
        conflicts: [],
      };
    },

    findMergeBase(A, B) {
      const ancestorsA = [];

      while (A !== null && A !== -1) {
        ancestorsA.push(A);

        const parent = this.commits[A].parent;

        // Merge commit has two parents
        if (Array.isArray(parent)) {
          A = parent[0];
        } else {
          A = parent;
        }
      }

      while (B !== null && B !== -1) {
        if (ancestorsA.includes(B)) {
          return B;
        }

        const parent = this.commits[B].parent;

        // Merge commit has two parents
        if (Array.isArray(parent)) {
          B = parent[0];
        } else {
          B = parent;
        }
      }

      return null;
    },
  };
};


const path = require("path");

const projectName = path.basename(__dirname);


/*
__dirname
→ C:\Users\PC\Desktop\Practices\JavaScript

path.basename(__dirname)
→ "JavaScript"
*/


const project = createProject(projectName);

console.log(project);


/* =========================================================
   DEEP CLONE
========================================================= */

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


/* =========================================================
   CREATE COMMIT
========================================================= */

function createCommit(id, message, snapshot, parent) {
  return {
    id,
    message,
    snapshot: deepClone(snapshot),
    parent,
    createdAt: Date.now(),
  };
}


/* =========================================================
   THREE-WAY MERGE
========================================================= */

function mergeSnapshots(
  baseSnapshot,
  currentSnapshot,
  targetSnapshot
) {
  const allFiles = new Set([
    ...Object.keys(baseSnapshot),
    ...Object.keys(currentSnapshot),
    ...Object.keys(targetSnapshot),
  ]);

  const mergeSnap = deepClone(currentSnapshot);

  const conflicts = [];

  for (const key of allFiles) {
    const base = baseSnapshot[key];
    const current = currentSnapshot[key];
    const target = targetSnapshot[key];


    /* =====================================================
       CASE 1
       File doesn't exist in base.

       This means it was created after the branches split.
    ===================================================== */

    if (!base) {

      // Created only on target
      if (!current && target) {
        mergeSnap[key] = deepClone(target);
        continue;
      }

      // Created only on current
      if (current && !target) {
        continue;
      }

      // Created on both branches
      if (current && target) {

        // Same content
        if (current.content === target.content) {
          continue;
        }

        // Different content
        conflicts.push(key);
        continue;
      }
    }


    /* =====================================================
       CASE 2
       File existed in base.
    ===================================================== */

    if (base) {

      /* ---------------------------------------------------
         Deleted from BOTH branches
      --------------------------------------------------- */

      if (!current && !target) {
        delete mergeSnap[key];
        continue;
      }


      /* ---------------------------------------------------
         Deleted from TARGET
         but still exists in CURRENT
      --------------------------------------------------- */

      if (current && !target) {

        // Current did not modify it
        if (current.content === base.content) {
          delete mergeSnap[key];
          continue;
        }

        // Current modified it while target deleted it
        conflicts.push(key);
        continue;
      }


      /* ---------------------------------------------------
         Deleted from CURRENT
         but still exists in TARGET
      --------------------------------------------------- */

      if (!current && target) {

        // Target did not modify it
        if (target.content === base.content) {
          delete mergeSnap[key];
          continue;
        }

        // Target modified it while current deleted it
        conflicts.push(key);
        continue;
      }


      /* ---------------------------------------------------
         File exists on BOTH branches
      --------------------------------------------------- */

      // Neither branch changed it
      if (
        current.content === base.content &&
        target.content === base.content
      ) {
        continue;
      }


      // Only TARGET changed it
      if (
        current.content === base.content &&
        target.content !== base.content
      ) {
        mergeSnap[key] = deepClone(target);
        continue;
      }


      // Only CURRENT changed it
      if (
        target.content === base.content &&
        current.content !== base.content
      ) {
        continue;
      }


      // Both changed it to the SAME content
      if (current.content === target.content) {
        continue;
      }


      // Both changed it DIFFERENTLY
      conflicts.push(key);
    }
  }

  return {
    snapshot: mergeSnap,
    conflicts,
  };
}


/* =========================================================
   INITIAL FILE
========================================================= */

console.log("--------------------------------");

project.addFile(
  "index.html",
  "<h1> Amaan </h1>"
);

project.commit("Added Index.html");


/* =========================================================
   CREATE FEATURE BRANCH
========================================================= */

project.createBranch("feature");

project.switchBranch("feature");


/* =========================================================
   FEATURE MODIFIES INDEX
========================================================= */

project.editFile(
  "index.html",
  "<h1> Feature Version </h1>"
);

project.commit("Updated from feature");

console.log(project.files);

project.status();

project.log();


/* =========================================================
   CASE 2
========================================================= */

console.log(
  "\n================ CASE 2 ================\n"
);


/* ---------------------------------------------------------
   Switch back to MAIN
--------------------------------------------------------- */

project.switchBranch("main");


/* ---------------------------------------------------------
   MAIN adds style.css
--------------------------------------------------------- */

project.addFile(
  "style.css",
  "body { color: red; }"
);

project.commit("Added style.css");


/* ---------------------------------------------------------
   Switch to FEATURE
--------------------------------------------------------- */

project.switchBranch("feature");


/* ---------------------------------------------------------
   FEATURE adds app.js
--------------------------------------------------------- */

project.addFile(
  "app.js",
  "console.log('Feature');"
);

project.commit("Added app.js");


/* ---------------------------------------------------------
   Switch back to MAIN
--------------------------------------------------------- */

project.switchBranch("main");


/* ---------------------------------------------------------
   Merge FEATURE into MAIN
--------------------------------------------------------- */

const result = project.mergeBranch("feature");


console.log("Merge Result:", result);


console.log("\nFinal Files:");

console.log(project.files);


console.log(
  "\nCurrent Branch:",
  project.currentBranch
);


console.log(
  "Current Head:",
  project.branches[project.currentBranch]
);