import { PeopleDataProvider } from './people/PeopleDataProvider.js';
import { StarshipsDataProvider } from './starships/StarshipsDataProvider.js';
import { PlanetsDataProvider } from './planets/PlanetsDataProvider.js';
import { getAPI } from "./api/api.js";



export const DataProvider = (providerType, type, params) => {

    let data = null;

    switch (providerType) {

        case "PEOPLE":
            data = PeopleDataProvider({
                type: type, 
                params: params, 
                baseAPIurl: getAPI(), 
            });
            break;

        case "STARSHIPS":
            data = StarshipsDataProvider({
                type: type, 
                params: params, 
                baseAPIurl: getAPI(), 
            });
            break;

        case "PLANETS":
            data = PlanetsDataProvider({
                type: type, 
                params: params, 
                baseAPIurl: getAPI(), 
            });
            break;


        default:
            break;
    }

    return data;
};
