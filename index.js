const sqlite3 = require('sqlite3')
const fileDb = new sqlite3.Database('person.db')

fileDb.run("CREATE TABLE PERSON(NAME VARCHAR(64) NOT NULL, AGE INT NOT NULL)");
fileDb.run("CREATE TABLE EMAIL(ADDRESS VARCHAR(64) NOT NULL, TYPE VARCHAR(64), PERSON_ID INT NOT NULL, FOREIGN KEY(PERSON_ID) REFERENCES PERSON(ID))");

/* fileDb.run("INSERT INTO PERSON (NAME, AGE) VALUES ('Frank', 30)", (err) => {
    if (err) {
        console.log(err);
    } else {
        console.log("Update successful");
    }
}); */

/*
fileDb.all("SELECT * FROM PERSON", (err, rows) => {
    if (err) console.log(err)
    else
        console.log("Found " + rows.length);
});
*/

/* fileDb.run("DELETE FROM PERSON", function(err) {
    if (err)
        console.log("Deleted")
    else {
        console.log("Deleted " + this.changes + " rows");
    }
}); */

fileDb.close();