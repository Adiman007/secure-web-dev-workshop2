import * as dotenv from "dotenv"
dotenv.config()


import mongoose, {model} from 'mongoose';
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
async function main(){
    await mongoose.connect(process.env.MONGO_URI)
    console.log("Connected")

    const Location = mongoose.model('Locations', schemaLocations)
    const premierLocation = new Location({filmType: 'Horror'})
    await premierLocation.save()
}

main()
