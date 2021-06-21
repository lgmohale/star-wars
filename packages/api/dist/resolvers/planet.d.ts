declare const _default: (fetch: any) => {
    RootQuery: {
        allPlanets: (_: any, params: any) => Promise<any>;
        planet: (_: any, params: any) => any;
    };
    Planet: {
        id: (planet: any) => any;
        rotationPeriod: (planet: any) => any;
        orbitalPeriod: (planet: any) => any;
        surfaceWater: (planet: any) => any;
        residents: (planet: any, _: any, context: any) => any;
        films: (planet: any, _: any, context: any) => any;
    };
};
export default _default;
