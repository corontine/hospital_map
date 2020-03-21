type Capacity = {
    bed: number,
    ventilator: number,
    timestamp: Date
}

type Hospital = {
    lat: string,
    long: string,
    name: string,
    city: string,
    region: string,
    log: Array<Capacity>
}

export const ScanHospitals = (lat: string, long: string, ) => {

};

export const CreateHospital = (hospital: Hospital) => {

};

