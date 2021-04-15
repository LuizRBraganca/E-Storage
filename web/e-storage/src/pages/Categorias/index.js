import React from "react";
import {useHistory} from 'react-router-dom'
import "./styles.css";
import {Navigation} from 'react-minimal-side-navigation';
import 'react-minimal-side-navigation/lib/ReactMinimalSideNavigation.css';

export default function Categorias() {
    const history = useHistory();

    return(
        <div className='categorias-back'>
            <div className='categorias-container'>
                <>
                    <Navigation
                        // you can use your own router's api to get pathname
                        activeItemId="/categorias"
                        onSelect={({itemId}) => {
                            history.push(itemId)
                        }}
                        items={[
                        {
                            title: 'Menu',
                            itemId: '/menu',
                            
                        },
                        {
                            title: 'Produtos',
                            itemId: '/categorias',
                        },
                        ]}
                    />
                </>
                <h1>Categorias</h1>
            </div>
        </div>
    );

}