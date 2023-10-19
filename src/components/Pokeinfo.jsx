import React from "react";

const Pokeinfo = ({data})=>{
    return(
        <>
            {
                !(data) ? "" : (
                    <>
                        <h1>{data.name}</h1>
                        <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${data.id}.svg`} alt="" />
                        <div className="abilities">
                            {
                                data.abilities.map(poke => {
                                    return (
                                        <div className="group">
                                            <h2><b>{poke.ability.name}</b></h2>
                                        </div>
                                    );
                                })
                            }
                        </div>
                        <div className="base-stat">
                            {
                                data.stats.map(poke => {
                                    return (
                                        <>
                                            <h2><b>{poke.stat.name} : {poke.base_stat}</b></h2>
                                        </>
                                    );
                                })
                            }
                        </div>
                    </>
                )
            }
        </>
    );
};
export default Pokeinfo;