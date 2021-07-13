import axios from "axios";

export const PlanetsDataProvider = ({ type, params, baseAPIurl }) => {

    let options = null;

    switch (type) {
        case "GET_PLANETS":
            if (baseAPIurl) {
                options = {
                    method: 'GET',
                    url: `${baseAPIurl}/planets`
                };
            } else {
                throw new Error(`Error baseAPIurl are necessary`)
            }
            break;
    }

    if (!!options) {
        let response = axios(options)
            .then((res) => {
                return res.data
            })
            .catch(error => {
                console.error(`Error calling the url ${options.url} using the the method ${options.method}`, error);
            })

        return response;

    } else {
        console.error("Unsupported Data Provider request parameters");
    }
}

