
function Home() {
    return <main className="flex justify-center items-center bg-gradient-to-br from-pink-600 via-fuschia-600 to-purple-600 h-[100vh] w-full">
        <section className="bg-white bg-opacity-10 backdrop-blur-1g rounded drop-shadow-lg w-full md:max-w-[500px] p-4 flex flex-col text-center items-center justify-center md:px-10 lg:p-24 h-full lg:h-[500px] text-slate-800 text-opacity-75">
            <h1 className="text-4xl font-thin">Weather App</h1>
            <p className="text-sm mt-10 mb-5">Choose a location:</p>
            <input
                type="text"
                value={''}
                className="px-2 py-1 rounded border-2 bg-white bg-opacity-20 border-white border-opacity-20 focus:outline-none focus:border-sky-100 focus:border-opacity-70"
                />
            <button className="mt-2 rounded border-2 cursor-pointer border-white border-opacity-20 hover:text-zinc-300 hover:bg-slate-300 hover:bg-opacity-25 px-2 py-2">Search</button>
            
        </section>


    </main>
}

export default Home;