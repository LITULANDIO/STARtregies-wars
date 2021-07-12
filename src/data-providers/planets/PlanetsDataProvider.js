
export const PlanetsDataProvider = ({ type, params, baseAPIurl }) => {

    let options = null;

    switch (type) {
        case "GET_PLANETS":
            if (baseAPIurl) {
                let paramsUrl = new URLSearchParams(params).toString();
                options = {
                    method: 'GET',
                    url: `${baseAPIurl}/${paramsUrl}`
                };
            } else {
                throw new Error(`Error params are necessary ${JSON.stringify(params)}`)
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

