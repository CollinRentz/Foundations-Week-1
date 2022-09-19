/*
    For this section of the assessment you will be putting together a cheat sheet for common git commands.  
    You'll provide the command as well as what it does. 
*/

//////////////////PROBLEM 1////////////////////
/*
    Create a variable called 'gitDefinition'.
    It should be a string containing your best definition of what Git is.
*/

const gitDefinition = 'a series of snapshots of a filesystem as a backup.'
console.log('Git is',gitDefinition);
//////////////////PROBLEM 2////////////////////
/*
    Create a variable called 'gitHubDefinition'.  
    It should be a string containing your best definition of what GitHub is.
*/

const gitHubDefinition = 'a code hosting platform for control and collaboration. It lets you and others work together on projects from anywhere.'
console.log('GitHub is',gitHubDefinition);

//////////////////PROBLEM 3////////////////////
/*
    Create a variable called 'gitInitDefinition'.  
    It should be a string containing your best definition of what 'git init' does.
*/

const gitInitDefinition = 'a command that creates a new Git repository from the terminal.'
console.log('git init is', gitInitDefinition);

//////////////////PROBLEM 4////////////////////
/*
    Create a variable called 'gitCloneDefinition'.  
    It should be a string containing your best definition of what 'git clone' does.
*/

const gitCloneDefinition = 'used to point to an existing repo and make a clone or copy of that repo at in a new directory, at another location.'
console.log('git Clone is',gitCloneDefinition);

//////////////////PROBLEM 5////////////////////
/*
    Create a variable called 'gitStatusDefinition'.  
    It should be a string containing your best definition of what 'git status' does.
*/

const gitStatusDefinition = 'a command that displays the state of the working directory and the staging area.'
console.log('git Status is',gitStatusDefinition);

//////////////////PROBLEM 6////////////////////
/*
    Create a variable called 'gitAddDefinition'.  
    It should be a string containing your best definition of what 'git add' does.

    Create another variable called 'gitAddCode'.  
    It should be a string containing the code to add all files.
*/

const gitAddDefinition = 'the first command in a chain of operations that directs Git to "save" a snapshot of the current project state.'
console.log('git Add is',gitAddDefinition);
const gitAddCode = 'git add .'
console.log('The git Add code is "',gitAddCode,'"');
//////////////////PROBLEM 7////////////////////
/*
    Create a variable called 'gitCommitDefinition'.  
    It should be a string containing your best definition of what 'git commit' does.

    Create a variable called 'gitCommitCode'.  
    It should be a string containing the code to commit using the message "initial commit".
*/

const gitCommitDefinition = 'command used to save your changes to the local repository.'
console.log('git Commit is a',gitCommitDefinition);
const gitCommitCode = 'git commit'
console.log('The command is "',gitCommitCode,'"');


//////////////////PROBLEM 8////////////////////
/*
    Create a variable called 'gitPushDefinition'.  
    It should be a string containing your best definition of what 'git push' does.
*/

const gitPushDefinition = 'used to upload local repository content to its corresponding repository on GitHub.'
console.log('git Push is',gitPushDefinition)