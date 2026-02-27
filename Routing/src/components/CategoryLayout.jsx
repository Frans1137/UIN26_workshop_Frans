import { Link, Outlet, useParams } from "react-router-dom";
import { useEffect, useState } from "react";

export default function CategoryLayout(){

    // const {slug} = useParams()
    const [apiData, setApiData] = useState([])      // mapper ut tom array hvis api ikke har svart
    const [apiEndpoint, setApiEndpoint] = useState()

    const defaultApiUrl = 'https://pokeapi.co/api/v2/'

    const getData = async()=>{
        const response = await fetch(defaultApiUrl)
        const data = await response.json()
        const {type, pokemon, item} = data //peker på hvilke data som hentes fra api

        setApiData({type, pokemon, item})
  }
  
  console.log("Sjekk", apiData)
  console.log("Denne kommer fra CategoryLayout", apiEndpoint)

  useEffect(()=>{
    getData()
  },[])

    return (
        <>              {/* tom container for å fortelle react at dette skal rendres samlet */}
        <nav className="main-nav">
            {Object.keys(apiData)?.map((item) => 
            <Link key={item+'random-tekst'} to={item} onClick={()=>setApiEndpoint(defaultApiUrl + item)}>{item}</Link>)}      {/* Henter nøkler/data fra et object. Spørsmålstegn for await/hvis api finnes */}
            {/* {apiData?.map((item) => <Link key={item.name + '-xt'} to={item.name} onClick={()=> setApiEndpoint(item.url)} >{item.name}</Link>)} */}
        </nav>
        <Outlet context={{apiEndpoint, defaultApiUrl, setApiEndpoint}} />
        </>             // tom container avsluttes
    )
}