import React from 'react';
import '../styles/complex-respond.css'
import {useDispatch, useSelector} from "react-redux";
import Today from "./days/Today";
import {setDay} from '../redux/actions';
import OtherDay from "./days/OtherDay";


const ComplexRespond:React.FunctionComponent = ():JSX.Element => {
    const dispatch = useDispatch()
    const day = useSelector((state:any) => state.day.currentDay)
    const allInfo = useSelector((state:any) => state.fullData.fullInfo.current)
    const today = useSelector((state:any) => state.fullData.fullInfo.daily[0])
    const tomorrow = useSelector((state:any) => state.fullData.fullInfo.daily[1])
    const dayAfterTomorrow = useSelector((state:any) => state.fullData.fullInfo.daily[2])
    const day4 = useSelector((state:any) => state.fullData.fullInfo.daily[3])
    const day5 = useSelector((state:any) => state.fullData.fullInfo.daily[4])
    const day6 = useSelector((state:any) => state.fullData.fullInfo.daily[5])
    const day7 = useSelector((state:any) => state.fullData.fullInfo.daily[6])

    const dateBuilder = (sec:number) => {
        let date = new Date(sec * 1000)
        return date.toLocaleTimeString()
    }
    const dayBuilder = (sec:number) => {
        let date = new Date(sec * 1000)
        return date.toLocaleDateString()
    }

    const daySetter = (day:number) => {
        dispatch(setDay(day))
    }

    const renderLogic = () => {
        if (day === 0){
            return(
                <Today/>
            )
        }
        else {
            return (
                <OtherDay/>
            )
        }
    }
    return (
            <div className='complex-Wrapper'>
                {renderLogic()}
                <div className="right-block">
                       <ul>
                           <li onClick={() => daySetter(0)}>Today:{dayBuilder(today.dt)}</li>
                           <li onClick={() => daySetter(1)}>Tomorrow:{dayBuilder(tomorrow.dt)}</li>
                           <li onClick={() => daySetter(2)}>{dayBuilder(dayAfterTomorrow.dt)}</li>
                           <li onClick={() => daySetter(3)}>{dayBuilder(day4.dt)}</li>
                           <li onClick={() => daySetter(4)}>{dayBuilder(day5.dt)}</li>
                           <li onClick={() => daySetter(5)}>{dayBuilder(day6.dt)}</li>
                           <li onClick={() => daySetter(6)}>{dayBuilder(day7.dt)}</li>
                       </ul>
                </div>
            </div>
    );
};

export default ComplexRespond;