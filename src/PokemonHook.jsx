import { useEffect, useState } from "react";


export default function PokemonHook(){


    let [pokemon, setPokemon] = useState({});

    // Dont setState in the top level level of function
    // setPokemon(`somethingsomething`);


    // runs at the sart or on the first render
    useEffect(() => {


        // async operations and promises must be declared inside and new block within the useEfect callback
		let fetchData = async () => {
		    let apiResponse = await fetch("https://pokeapi.co/api/v2/pokemon/25");
		    let apiData = await apiResponse.json();

		setPokemon(apiData);
		}

		fetchData();
	}, []);

    // component didUpdate
    useEffect(() => {
		console.log("pokemon was updated");
	}, [pokemon]);

    // component Unmount
    useEffect(() => {
        return(() => {
            console.log(`pokemon go byebye now`)
        })

    }, []);


    if (pokemon.name){
		console.log("yes data to show");
		return (
			<div>
				
				<h1>{pokemon.name}</h1>
			</div>
		)
	} else {
		console.log("no data to show");
		return (
			<div>No data to show...</div>
		)
	}
}