import React, { useEffect, useState } from "react";
import Card from './Card';
import Navbar from './Navbar';
import Footer from './Footer';
import Pokeinfo from './Pokeinfo';
import axios from "axios";
const Main = () => {
    const [Pokedata, setPokedata] = useState([]);
    const [loading, setloading] = useState(true);
    const [url, seturl] = useState("https://pokeapi.co/api/v2/pokemon/");
    const [Nexturl, setNexturl] = useState();
    const [Pervurl, setPervurl] = useState();
    const [PokeDex, setPokeDex] = useState();

    const PokeFun = async () => {
        setloading(true);
        const res = await axios.get(url);
        setNexturl(res.data.next);
        setPervurl(res.data.previous);
        getPokemone(res.data.results);
        setloading(false);
    }
    const getPokemone = async (res) => {
        res.map(async (item) => {
            const result = await axios.get(item.url);
            setPokedata(state => {
                state = [...state, result.data]
                state.sort((a, b) => a.id > b.id ? 1 : -1)
                return state;
            });
        });
    }
    useEffect(() => {
        PokeFun();
    }, [url]);
    return (
        <>
            <Navbar />
            <div className="container">
                <div className="left-content">
                    <Card pokemone={Pokedata} loading={loading} infoPokemone={(poke) => setPokeDex(poke)} />
                    <div className="btn-group">
                        {Pervurl && <button onClick={() => {
                            setPokedata([]);
                            seturl(Pervurl);
                        }}><i>Previous</i></button>}
                        {Nexturl && <button onClick={() => {
                            setPokedata([]);
                            seturl(Nexturl);
                        }}><i>Next</i></button>}
                    </div>
                </div>
                <div className="right-contents">
                    <Pokeinfo data={PokeDex} />
                </div>
            </div>
            <Footer />
        </>
    );
}

export default Main;