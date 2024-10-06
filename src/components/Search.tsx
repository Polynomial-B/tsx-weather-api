import { ChangeEvent } from "react";
import { OptionsType } from '../types';


type SearchProps = {
	location: string
	options: []
	onChange: (e: ChangeEvent<HTMLInputElement>) => void
	onOptionSelect: (option: OptionsType) => void
	onSubmit: () => void
};

function Search({
	location,
	options,
	onChange,
	onOptionSelect,
	onSubmit,
}: SearchProps) : JSX.Element {

    return <>
	<section className="rounded drop-shadow-lg w-full md:max-w-[500px] p-4 flex flex-col text-center items-center justify-center md:px-10 lg:p-24 h-full lg:h-[500px] text-slate-800 text-opacity-75">
		<h1 className="text-4xl font-thin">Weather App</h1>
		<p className="text-sm mt-10 mb-5">Choose a location:</p>
		<div className="flex items-center justify-center relative">
			<input
				type="text"
				value={location}
				onChange={onChange}
				className="px-2 py-1 rounded border-2 bg-white bg-opacity-20 border-white border-opacity-20 focus:outline-none focus:border-sky-100 focus:border-opacity-70"
			/>
			<ul className="absolute top-10 bg-white left-0 rounded bg-opacity-20 border-white border-opacity-20 w-full">
				{options.map((option: OptionsType, index: number) => (
					<li key={`${option.name} - ${index}`}>
						<button
							onClick={() => onOptionSelect(option)}
							className="ml-2 text-left w-full hover:text-zinc-300"
						>{`${option.name}, ${option.state}`}</button>
					</li>
				))}
			</ul>
			<button
				onClick={onSubmit}
				className="pl-2 pr-2 ml-2 rounded border-2 cursor-pointer border-white border-opacity-20 hover:text-zinc-300 hover:bg-slate-300 hover:bg-opacity-25 px-2 py-1"
			>
				Search
			</button>
		</div>
	</section>
    </>
}

export default Search;
