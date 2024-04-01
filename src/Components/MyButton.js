import {useState} from 'react';
import MyApp from './MyApp';
function MyButton({count, onClick}){
    return(
        <button onClick = {onClick}>
            clicked {count} times
        </button>
    );
}
export default MyButton;