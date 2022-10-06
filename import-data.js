import * as dotenv from "dotenv"
dotenv.config()
console.log(process.env.MONGO_URI)

import mongoose, {Model} from 'mongoose';
const { Schema } = mongoose;


const schemaLocations = new Schema(
    {
        "filmType": String,
        "filmProducerName": String,
        "endDate": Date,
        "filmName": String,
        "district": Number,
        "geolocation": {
            "coordinates": [
                Number
            ],
            "type": String
        },
        "sourceLocationId": String,
        "filmDirectorName": String,
        "address": String,
        "startDate": Date,
        "year": Number,
    }
)

/*
const Locations = new Model('Locations', schemaLocations)
const premierLocation = new Location({filmType: 'Horror'})
await premierLocation.save()
*/

mongoose.connect(process.env.MONGO_URI).then(() => {console.log('Connected ! ')})
console.log('Toto')