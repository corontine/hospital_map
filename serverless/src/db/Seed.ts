// import {DynamoDB} from 'aws-sdk';
import * as Chance from 'chance';
import {addDays} from "date-fns";

export const Handler = (event: any, context: any) => {
    const space = [...Array(3000)];
    const origin = [52.5200, 13.4050];
    const change = new Chance();
    const distance = 10;
    const hospitals = space.map((t) => {
        console.log("Hello wrold");
        const hospital: any = {
            lat: change.latitude({min:origin[0]-distance, max:origin[0]+distance}) ,
            long: change.longitude({min: origin[1]-distance, max: origin[1]+distance}),
            name: change.company(),
            city: change.city(),
            region: change.city(),
            capacity_logs: [
                {
                    bed: change.integer({min: 0, max: 1000}),
                    ventilator: change.integer({min: 0, max: 100}),
                    timestamp: addDays(new Date(), change.integer({max:-10, min: 0}))
                }
            ]
        };
        return hospital;
    });

    console.dir(hospitals);
};
