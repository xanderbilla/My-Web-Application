const mongoose = require('mongoose');

const db = process.env.DATABASE;

mongoose.connect(db, {dbName: "mernstack"}).then(() => {
    console.log(`Connection Successful`);
}).catch((err) => console.log(`No connection`));