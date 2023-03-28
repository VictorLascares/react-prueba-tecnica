import { useEffect, useState } from "react";
import './App.css';

const CAT_ENDPOINT_RANDOM_FACT = 'https://catfact.ninja/fact';
const CAT_PREFIX_IMAGE_URL = 'https://cataas.com'

export const App = () => {
    const [fact, setFact] = useState();
    const [imageUrl, setImageUrl] = useState();

    // Recuperar la cita al cargar la pagina
    useEffect(() => {
        fetch(CAT_ENDPOINT_RANDOM_FACT)
            .then(res => res.json())
            .then(data => {
                const { fact } = data;
                setFact(fact)
            });
    }, []);

    // Cargar la imagen cada vez que cambie la cita
    useEffect(() => {
        if (!fact) return;
        const firstWord = fact.split(' ')[0];
        fetch(`https://cataas.com/cat/says/${firstWord}?size=50&color=red&json=true`)
            .then(res => res.json())
            .then(data => {
                const { url } = data;
                setImageUrl(url);
            })
    }, [fact]);

    return (
        <main>
            <h1>Cat App</h1>
            {fact && <p>{fact}</p>}
            {imageUrl && <img src={`${CAT_PREFIX_IMAGE_URL}${imageUrl}`} alt={`Extracted image using the first word of [${fact}]`} />}
        </main>
    );
};