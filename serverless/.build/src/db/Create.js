"use strict";
// There is a specific migration process for geo lookup stuff in dynamodb.
// So we will do it here.
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const aws_sdk_1 = require("aws-sdk");
const dynamodb_geo_1 = require("dynamodb-geo");
exports.Handler = (event, context) => __awaiter(void 0, void 0, void 0, function* () {
    const ddb = new aws_sdk_1.DynamoDB();
    const config = new dynamodb_geo_1.GeoDataManagerConfiguration(ddb, `hospital_map-dev`);
    config.hashKeyLength = 4;
    const createTableInput = dynamodb_geo_1.GeoTableUtil.getCreateTableRequest(config);
    const createTableResult = yield ddb.createTable(createTableInput).promise();
    console.log(createTableResult);
});
//# sourceMappingURL=Create.js.map