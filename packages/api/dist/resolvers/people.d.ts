declare const _default: (fetch: any) => {
    RootQuery: {
        allPeople: (_: any, params: any) => Promise<any>;
        person: (_: any, params: any) => any;
    };
    Person: {
        id: (person: any) => any;
        hairColor: (person: any) => any;
        skinColor: (person: any) => any;
        eyeColor: (person: any) => any;
        birthYear: (person: any) => any;
        homeworld: (person: any, _: any, context: any) => any;
        films: (person: any, _: any, context: any) => any;
        species: (person: any, _: any, context: any) => any;
        starships: (person: any, _: any, context: any) => any;
        vehicles: (person: any, _: any, context: any) => any;
    };
};
export default _default;
