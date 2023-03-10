export interface CurrentWeatherState {
    location: string;
    country: string;
    region: string;
    date: string;
    currentWeatherTemperature: number;
    icon: any;
    isLoading: boolean;
    error: string;
}

export interface ForecastState {
    weekday: any,
    tomorrowTemperature: number,
    afterTomorrowTemperature: number,
    tomorrowIcon: any,
    afterTomorrowIcon: string,
    error: string,
}

export type Position = {
    coords: {
        latitude: number;
        longitude: number;
    }
}

export type GeolocationDenied = {
    message: string
}

export type CurrentWeather = {
    current: {
        temp_c: number;
        condition: {
            icon: string;
        }
    };
    location: {
        country: string;
        name: string;
        region: string;
    };
};

type ForecastDay = {
    day: {
        avgtemp_c: number;
        condition: {
            icon: string;
        }
    }
}

export type CurrentWeekWeather = {
    forecast: {
        forecastday: ForecastDay[]
    };
    location: {
        country: string;
        name: string;
        region: string;
    };
};

export type WeatherByLocation = {
    current: {
        temp_c: number;
        condition: {
            icon: string;
        }
    };
    forecast: {
        forecastday: ForecastDay[]
    };
    location: {
        country: string;
        name: string;
        region: string;
    };
};