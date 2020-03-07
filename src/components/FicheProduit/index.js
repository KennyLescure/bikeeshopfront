import React from 'react';

const FicheProduit = () => {
    const nom = "Bmx"
    //const image;
    const description = "Taille enfant 10-14 ans"
    
    return (
        <div>
            <h1>Fiche produit</h1>
            <div>
                <label>{nom}</label>
                <image />
                <label>{description}</label>
            </div>
            
        </div>
    );
}

export default FicheProduit