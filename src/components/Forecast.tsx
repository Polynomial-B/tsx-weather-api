import { ForecastType } from "../types";

type ForecastProps = {
	data: ForecastType;
};

function Forecast({ data }: ForecastProps): JSX.Element {
    const twelveHour = data.list.slice(0, 4)
	console.log(twelveHour);


	return (
		<>
			<div className="flex-row w-full md:max-w-[800px] py-4 md:py-4 md:px-10 lg:px-24 h-full lg:h-auto justify-center">
				<section className="text-center">
					<h1 className="text-2xl font-black">{data.city.name}</h1>
					<h2 className="text-4xl">
						{Math.round(data.list[0].main.temp)}
						<span className="font-light">℃</span>
					</h2>
                    <p className="capitalize">{data.list[0].weather[0].description}</p>
                    <p className="flex gap-4 justify-center">
                        <span className="flex gap-4">Min {Math.floor(data.list[0].main.temp)}℃</span>
                        <span className="flex gap-4">Max {Math.ceil(data.list[0].main.temp)}℃</span>
                    </p>
				</section>
                <section>
                    {twelveHour.map((item, index)=>{
                        return <div className="flex-column"><p key={index} className="flex gap-4 justify-center">
                            <div className="w-1/4 flex justify-center">
                            <img width="70" src={`https://openweathermap.org/img/wn/${item.weather[0].icon}@2x.png`} alt={`icon showing ${item.weather[0].description}`}/>
                            </div>
                            <div className="flex justify-left items-center w-1/4 uppercase text-sm font-light">{item.weather[0].description}</div>
                        </p></div>
                    })}
                </section>
			</div>
		</>
	);
}

export default Forecast;
