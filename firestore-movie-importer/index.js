
const { default: movies } = require("@/store/modules/movies.js");
const admin = require("firebase-admin");

const serviceAccount = require("./movie-app--vue-firebase-adminsdk-ex40z-0f0d02e7a8.json");

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: "https://movie-app--vue.firebaseio.com"    
});

const firestore = admin.firestore()
const movie = require('./movie-list.json')

const db = firestore.collection('movies')

movies.map(async movie => {
    try {
        await db.add(movie)
    } catch(e) {
        console.log(e);
    }
})