// There is a specific migration process for geo lookup stuff in dynamodb.
// So we will do it here.

import {DynamoDB} from 'aws-sdk';
import {GeoDataManagerConfiguration, GeoTableUtil} from "dynamodb-geo";

export const Handler = async (event:any, context:any) => {
    const ddb = new DynamoDB();
    const config = new GeoDataManagerConfiguration(ddb, `hospital_map-dev`);
    config.hashKeyLength = 4;

    const createTableInput = GeoTableUtil.getCreateTableRequest(config);

    const createTableResult = await  ddb.createTable(createTableInput).promise();
    console.log(createTableResult);
};

