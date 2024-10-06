import { ForecastType } from "../types";

type ForecastProps = {
	data: ForecastType;
};

function Forecast({ data }: ForecastProps): JSX.Element {
	console.log(data);

	return (
		<>
			<div className="flex w-full md:max-w-[500px] py-4 md:py-4 md:px-10 lg:px-24 h-full lg:h-auto justify-center">
				<section className="text-center">
					<h1 className="text-2xl font-black">{data.city.name}</h1>
					<h2 className="text-4xl">
						{Math.round(data.list[0].main.temp)}
						<span className="font-light">℃</span>
					</h2>
                    <p>{data.list[0].weather[0].description}</p>
                    <p className="flex gap-4">
                        <span className="flex gap-4">Min {Math.floor(data.list[0].main.temp)}℃</span>
                        <span className="flex gap-4">Max {Math.ceil(data.list[0].main.temp)}℃</span>
                    </p>
				</section>
			</div>
		</>
	);
}

export default Forecast;
