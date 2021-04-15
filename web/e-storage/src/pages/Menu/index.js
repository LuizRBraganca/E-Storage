import React from "react";
import {useHistory} from 'react-router-dom'
import "./styles.css";
import {Navigation} from 'react-minimal-side-navigation';
import 'react-minimal-side-navigation/lib/ReactMinimalSideNavigation.css';

export default function Menu() {
    const history = useHistory();

    return(
        <div className='menu-back'>
            <div className='menu-container'>
                <>
                    <Navigation
                        // you can use your own router's api to get pathname
                        activeItemId="/menu"
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
                <h1>Menu</h1>
            </div>
        </div>
    );

}