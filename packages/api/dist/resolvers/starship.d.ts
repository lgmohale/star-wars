declare const _default: (fetch: any) => {
    RootQuery: {
        allStarships: (_: any, params: any) => Promise<any>;
        starship: (_: any, params: any) => any;
    };
    Starship: {
        id: (starship: any) => any;
        costInCredits: (starship: any) => any;
        maxAtmospheringSpeed: (starship: any) => any;
        cargoCapacity: (starship: any) => any;
        hyperdriveRating: (starship: any) => any;
        starshipClass: (starship: any) => any;
        pilots: (starship: any, _: any, context: any) => any;
        films: (starship: any, _: any, context: any) => any;
    };
};
export default _default;
