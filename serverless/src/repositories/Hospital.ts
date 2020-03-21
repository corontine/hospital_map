import {DynamoDB} from 'aws-sdk';
import {GeoDataManager, GeoDataManagerConfiguration} from "dynamodb-geo";

type Capacity = {
    bed: number,
    ventilator: number,
    timestamp: Date
}

type Hospital = {
    lat: number,
    long: number,
    name: string,
    city: string,
    region: string,
    capacity_logs: Array<Capacity>
}

export const ScanHospitals = (lat: string, long: string, ) => {

};

export const CreateHospital = async (hospital: Hospital) => {
    const ddb = new DynamoDB();
    const config = new GeoDataManagerConfiguration(ddb, 'hospital_map-dev');

    const hospitalTableManager = new GeoDataManager(config);


    const createHospitalResult = await hospitalTableManager.putPoint({
        RangeKeyValue: { S: 'String' }, // Use this to ensure uniqueness of the hash/range pairs.
        GeoPoint: { // An object specifying latitutde and longitude as plain numbers. Used to build the geohash, the hashkey and geojson data
            latitude: hospital.lat,
            longitude: hospital.long
        },
        PutItemInput: { // Passed through to the underlying DynamoDB.putItem request. TableName is filled in for you.
            Item: { // The primary key, geohash and geojson data is filled in for you
                lat: { S: hospital.lat.toString() }, // Specify attribute values using { type: value } objects, like the DynamoDB API.
                long: { S: hospital.long.toString() },
                name: { S: hospital.name },
                city: { S: hospital.city },
                region: { S: hospital.region },
                // @ts-ignore
                log: { L: hospital.capacity_logs.map((capacity_log)=>(
                    {
                        bed: {N: capacity_log.bed},
                        ventilator: {N: capacity_log.ventilator},
                        timestamp: {S: capacity_log.timestamp.toISOString()}
                    }
                    ))}
            },
            // ... Anything else to pass through to `putItem`, eg ConditionExpression
        }
    }).promise();
    console.log('Hospital Created', createHospitalResult);
};

