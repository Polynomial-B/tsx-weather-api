import { ChangeEvent, useEffect, useState } from "react";
import { OptionsType, ForecastType } from "../types";

const API_KEY: string = import.meta.env.VITE_API_KEY;
const BASE_URL: string = "http://api.openweathermap.org";

function useForecast() {
	const [location, setLocation] = useState<string>("");
	const [options, setOptions] = useState<[]>([]);
	const [city, setCity] = useState<OptionsType | null>(null);
	const [weatherForecast, setWeatherForecast] = useState<ForecastType | null>(
		null
	);

	function getLocations(options: string) {
		fetch(
			`${BASE_URL}/geo/1.0/direct?q=${options.trim()}&lang=en&limit=5&appid=${API_KEY}`
		)
			.then((res) => res.json())
			.then((data) => setOptions(data));
	}

	function onOptionSelect(option: OptionsType) {
		setCity(option);
	}

	useEffect(() => {
		if (city) {
			setLocation(city.name);
			setOptions([]);
		}
	}, [city]);

	function getForecast(city: OptionsType) {
		fetch(
			`${BASE_URL}/data/2.5/forecast?lat=${city.lat}&lon=${city.lon}&units=metric&appid=${API_KEY}`
		)
			.then((res) => res.json())
			.then((data) => {
				const forecastData = structuredClone(data);

				setWeatherForecast(forecastData);
			});
	}

	function onSubmit() {
		if (!city) return;
		getForecast(city);
	}

	function onChange(e: ChangeEvent<HTMLInputElement>) {
		const targetLocation = e.target.value;
		setLocation(targetLocation);
		if (targetLocation === "") {
			setOptions([]);
		} else {
			getLocations(targetLocation);
		}
	}

    return {
        weatherForecast,
        location,
        options,
        onChange,
        onOptionSelect,
        onSubmit
    }
}

export default useForecast;