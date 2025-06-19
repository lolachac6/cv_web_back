const mongoose= require('mongoose');

const MONGOURL = process.env.MONGO_URI;

mongoose.connect(MONGOURL)
