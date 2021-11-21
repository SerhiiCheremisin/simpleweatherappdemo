import {startFetch, cityChooser, setInput, setFullData} from '../redux/actions';
import React, {FC} from 'react';
import {useDispatch, useSelector} from "react-redux";
import '../styles/header.css';
import {AsyncTypes} from "../redux/types";


const Header:FC = ():JSX.Element => {
   const dispatch = useDispatch()
   const inputValue = useSelector((state:any) => state.cityData.input)

    const formHandler = (e:React.FormEvent<HTMLFormElement>) => {
       e.preventDefault();
       if (inputValue === ''){
           alert("You should fill this field");
           return
       }
       dispatch(cityChooser(true));
       dispatch(startFetch(inputValue));
       dispatch(setInput(''));
       dispatch({type: AsyncTypes.START_TO_FETCH_WEATHER, payload: true});
       dispatch(setFullData(false));
    }
    const inputHandler = (e:React.ChangeEvent<HTMLInputElement>) => {
        dispatch(setInput(e.target.value))
    }
    return (
        <header>
          <a rel="stylesheet" href="https://github.com/SerhiiCheremisin/simpleweatherappdemo">Link to code</a>
         <div className="h1"><h1>Simple weather app</h1></div>
            <form onSubmit={e => formHandler(e)} action="#">
                <label htmlFor="search" >Chose City</label>
                <input value={inputValue} onChange={e => inputHandler(e)} id='search' placeholder='start to type city' type="text"/>
                <button type='submit'>Search</button>
            </form>
        </header>
    );
};

export default Header;