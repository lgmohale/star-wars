declare const _default: (fetch: any) => {
    RootQuery: {
        allFilms: (_: any, params: any) => Promise<any>;
        film: (_: any, params: any) => any;
    };
    Film: {
        id: (film: any) => any;
        episodeID: (film: any) => any;
        openingCrawl: (film: any) => any;
        releaseDate: (film: any) => any;
        details: (film: any) => {
            species: any;
            starships: any;
            vehicles: any;
            characters: any;
            planets: any;
        };
    };
    FilmDetails: {
        species: (details: any, _: any, context: any) => any;
        starships: (details: any, _: any, context: any) => any;
        vehicles: (details: any, _: any, context: any) => any;
        characters: (details: any, _: any, context: any) => any;
        planets: (details: any, _: any, context: any) => any;
    };
};
export default _default;
