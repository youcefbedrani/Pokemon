import LoadingSpinner from './loading';
import React, { useEffect, useState } from "react";


const Card = ({pokemone , loading , infoPokemone})=>{
    const [loadd, setloadd] = useState(true)
    useEffect(() => {
        const fakeAPICall = () => {
            setTimeout(() => {
                setloadd(false);
            }, 2000);
        };
    
        fakeAPICall();
    }, []);
    return(
        <>
        {
            loading ? <center><LoadingSpinner loading={loadd} /></center> : 
            pokemone.map((item)=>{
                return(
                    <>
                        <div className="Card" key={item.id} onClick={()=>infoPokemone(item)}>
                            <h2>{item.id}</h2>
                            <img src={item.sprites.front_default} alt="charmander" />
                            <h2><i><b>{item.name}</b></i></h2>
                        </div>
                    </>
                );
            })
        }
        </>
    );
};
export default Card;