import React from 'react';
import '../src/styles/main.css';
import Header from "./components/Header";
import {useDispatch, useSelector} from "react-redux";
import Spinner from "./components/Spinner";
import {cityChooser, setFullData, startFetch} from './redux/actions';
import {AsyncTypes} from "./redux/types";
import SimpleRespond from "./components/SimpleRespond";
import ComplexRespond from "./components/ComplexRespond";


function App():JSX.Element {
  const dispatch = useDispatch()
  const loading = useSelector((state:any) => state.chosenCityWeather.isLoading);
  const loadingFull = useSelector((state:any) => state.fullData.isLoading);
  const city = useSelector((state:any) => state.cityData.city);
  const defaultCities = useSelector((state:any) => state.suggestedCities);
  const fullData = useSelector((state:any) => state.cityData.fullData);


   const suggestedQueryHandler = (el:string) => {
       dispatch(cityChooser(true))
       dispatch(startFetch(el))
       dispatch({type: AsyncTypes.START_TO_FETCH_WEATHER, payload: true})
       dispatch(setFullData(false))
   }

 const suggestedCities = defaultCities.map((el:string, id:number) => {
     return(
         <li onClick={() => suggestedQueryHandler(el)} key={id}>{el}</li>
     )
 })

  const loaderLogic = () => {
          if(loading || loadingFull) {
              return(
                  <Spinner/>
              )
          }

      if (fullData === true){
          return (
              <ComplexRespond/>
          )
      }
          if (city){
              return (
                  <SimpleRespond/>
              )
          }
          if (!city && !fullData){
              return (
                  <>
                      <h2>Chose your city</h2>
                  </>
              )
          }

  }
  return (
      <>
    <div className="app-wrapper">
    <Header/>
     </div>
  <div className="respond-wrapper">
    {loaderLogic()}
    </div>
    <div className="suggested-cities">
        <span>Or you can choose on of the cities below</span>
      <ul>
          {suggestedCities}
      </ul>
    </div>
      </>
  );
}

export default App;
