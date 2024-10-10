import "./input.css";
import "./output.css";
import Search from "./components/Search";
import Forecast from "./components/Forecast";
import useForecast from "./hooks/useForecast";

function App() {

  const { weatherForecast, location, options, onChange, onOptionSelect, onSubmit} = useForecast()

	return (
		<>
			<main className="flex justify-center items-center bg-gradient-to-br from-pink-600 via-fuschia-600 to-purple-600 min-h-[100vh] w-full">
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
