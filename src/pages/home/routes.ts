import { intParser, route, stringParser } from "typesafe-routes";

export const homeRoutes = {
  list: route(
    `&:offset?&:limit?`,
    {
      offset: intParser,
      limit: intParser,
    },
    {}
  ),
  detail: route(`detail/:pokemonName`, { pokemonName: stringParser }, {}),
  game: route(`poke-game`, {}, {}),
};
