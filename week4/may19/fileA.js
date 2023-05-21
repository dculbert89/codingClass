let facebookUsersDb = [
    {
        username: "Bob",
        password: "bob123"
    },
    {
        username: "markz",
        password: "alientime"
    }
]

//module.exports
    // it will allow you to export data from one file to another
// require
    // allow you to import data from another file

    // Skele Syntax:
        // const nameOfYourVar =
            // require("filePathHere")

module.exports = {
    facebookData: facebookUsersDb
}

