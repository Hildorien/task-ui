import { Config } from "./types";

let config: Config = {
    environment: process.env.REACT_APP_ENV || '',
    apiUrl: process.env.REACT_APP_API_URL || '',
}

export default config;