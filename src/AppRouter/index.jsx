import React, { Fragment } from "react";
import { Route, Routes } from 'react-router-dom';
import Home from '../pages/Home';
import Error from '../pages/Error';
//import Menu from '../pages/Menu';
//import Wine from '../pages/Wine';

export default function AppRouter(){
    return (
        <Fragment>
            <Routes>
                <Route exact path="/" element={<Home />}/>
                <Route path="*" element={<Error />} />
            </Routes>
        </Fragment>
    )
}

//<Route path="/menu" element={<Menu page={'menu'}/>}/>
//<Route path="/wines" element={<Wine page={'wine'}/>}/>