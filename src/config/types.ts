export interface Config {
	environment: string;
    apiUrl: string;
}

export enum Environment {
	LOCAL = 'local',
	DEVELOPMENT = 'development',
	STAGING = 'staging',
	PRODUCTION = 'production',
}