import "./input.css";
import "./output.css";
import Search from "./components/Search";
import Forecast from "./components/Forecast";
import { ChangeEvent, useEffect, useState } from "react";
import { OptionsType, ForecastType } from "./types";

const API_KEY: string = import.meta.env.VITE_API_KEY;

function App() {
	const [location, setLocation] = useState<string>("");
	const [options, setOptions] = useState<[]>([]);
	const [city, setCity] = useState<OptionsType | null>(null);
	const [weatherForecast, setWeatherForecast] = useState<ForecastType | null>(
		null
	);

	function getLocations(options: string) {
		fetch(
			`http://api.openweathermap.org/geo/1.0/direct?q=${options.trim()}&limit=5&appid=${API_KEY}`
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
			`https://api.openweathermap.org/data/2.5/forecast?lat=${city.lat}&lon=${city.lon}&units=standard&appid=${API_KEY}`
		)
			.then((res) => res.json())
			.then((data) => {
				const forecastData = structuredClone(data.city);

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

	return (
		<>
			<main className="flex justify-center items-center bg-gradient-to-br from-pink-600 via-fuschia-600 to-purple-600 h-[100vh] w-full">
				{weatherForecast ? (
					<Forecast data={weatherForecast} />
				) : (
					<Search
						location={location}
						options={options}
						onChange={onChange}
						onOptionSelect={onOptionSelect}
						onSubmit={onSubmit}
					/>
				)}
			</main>
		</>
	);
}

export default App;
