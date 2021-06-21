declare const _default: (fetch: any) => {
    RootQuery: {
        allVehicles: (_: any, params: any) => Promise<any>;
        vehicle: (_: any, params: any) => any;
    };
    Vehicle: {
        id: (vehicle: any) => any;
        costInCredits: (vehicle: any) => any;
        maxAtmospheringSpeed: (vehicle: any) => any;
        cargoCapacity: (vehicle: any) => any;
        vehicleClass: (vehicle: any) => any;
        pilots: (vehicle: any, _: any, context: any) => any;
        films: (vehicle: any, _: any, context: any) => any;
    };
};
export default _default;
