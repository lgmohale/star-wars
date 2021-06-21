declare const _default: (fetch: any) => {
    RootQuery: {
        allSpecies: (_: any, params: any) => Promise<any>;
        species: (_: any, params: any) => any;
    };
    Species: {
        id: (species: any) => any;
        averageHeight: (species: any) => any;
        skinColors: (species: any) => any;
        hairColors: (species: any) => any;
        eyeColors: (species: any) => any;
        averageLifespan: (species: any) => any;
        homeworld: (species: any, _: any, context: any) => any;
        people: (species: any, _: any, context: any) => any;
        films: (species: any, _: any, context: any) => any;
    };
};
export default _default;
