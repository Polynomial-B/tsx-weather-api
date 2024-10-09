import { ForecastType } from "../types";

type ForecastProps = {
	data: ForecastType;
};

function Forecast({ data }: ForecastProps): JSX.Element {
	const twelveHour = data.list.slice(0, 4);
	console.log(twelveHour);
	let max: number | undefined = undefined;
	let min: number | undefined = undefined;

    const arrowRotation: React.CSSProperties = {
        filter: "invert(100%)",
        transform: `rotate(${data.list[0].wind.deg}deg)`
    }

	function maxMin(): void {
		max = twelveHour[0].main.temp_max;
		min = twelveHour[0].main.temp_min;


		twelveHour.forEach((item) => {
			if (max === undefined || min === undefined) return;
			if (item.main.temp_min < min) {
				min = item.main.temp_min;
			}
			if (item.main.temp_max > max) {
				max = item.main.temp_max;
			}
		});
	}
	maxMin();

	return (
		<>
			<div className="flex-row w-full md:max-w-[800px] py-4 md:py-4 md:px-10 lg:px-24 h-full lg:h-auto justify-center lg:bg-white lg:bg-opacity-10 lg:backdrop-blur-ls rounded drop-shadow-lg">
				<section className="text-center my-4">
					<h1 className="text-2xl font-black">{data.city.name}</h1>
					<h2 className="text-4xl">
						{Math.round(data.list[0].main.temp)}
						<span className="font-light">℃</span>
					</h2>
					<p className="uppercase">
						{data.list[0].weather[0].description}
					</p>
					<p className="flex gap-4 justify-center">
						<span className="flex gap-4">
							Min {min ? Math.floor(min) : "--"}℃
						</span>
						<span className="flex gap-4">
							Max {max ? Math.ceil(max) : "--"}℃
						</span>
					</p>
                    <p className="flex mb-16 justify-center">
                            <div>
                                <h2 className="py-4">Wind:</h2>
                                <img
                                    src="public/images/up-arrow.png"
                                    alt={`icon showing wind direction pointing at ${data.list[0].wind.deg} degrees`}
                                    width="30"
                                    style={arrowRotation}
                                    />
                                <p></p>    
                            </div>
                        </p>
				</section>
				<section className="flex w-full justify-center md:flex-row">
					{twelveHour.map((item, index) => {
						return (
							<div
								key={index}
								className="flex gap-4 flex-col justify-center w-full text-center items-center bg-slate-400 rounded bg-opacity-30 py-4 mx-4 min-w-[150px]"
							>
								<div className="flex flex-col">
									<h3>
										{index === 0
											? "Now"
											: `${new Date(
													item.dt * 1000
											  ).getHours()}:00`}
									</h3>
									<img
										width="70"
										src={`https://openweathermap.org/img/wn/${item.weather[0].icon}@2x.png`}
										alt={`icon showing ${item.weather[0].description}`}
									/>
								</div>
								<div className="flex uppercase text-sm font-light">
									{item.weather[0].description}
								</div>
							</div>
						);
					})}
				</section>
			</div>
		</>
	);
}

export default Forecast;
