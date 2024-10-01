import { ForecastType } from "../types";

type ForecastProps = {
    data: ForecastType
}

function Forecast({ data }: ForecastProps): JSX.Element {
    console.log(data);
    
	return (
		<>
			<section>
				<h1>Forecast:</h1>
				{/* <p>{data.sunrise}</p> */}
			</section>
		</>
	);
}

export default Forecast;
