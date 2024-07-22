import { useState } from 'react'
import './FirstComment.css'
import User1 from '../../assets/User1.png'
import User2 from '../../assets/User2.png'

function FirstComment() {
   /* const ArrayOfObjects = [
        {UName: "amyrobson",Uimg: User1 ,Time:"1 month ago" ,UComment:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Est inventore ea quo obcaecati quisquam nostrum voluptates blanditiis modi dolore non maxime, animi dignissimos vitae necessitatibus ducimus, sit ex, "},
        {UName: "maxblaguh",Uimg: User2 ,Time:"2 weeks ago" ,UComment:"Est inventore ea quo obcaecati quisquam nostrum voluptates blanditiis modi dolore non maxime, animi dignissimos vitae necessitatibus ducimus, sit ex, officia impedit?"},
    ]*/

    const [Count, setCount] = useState(0);
    
    function Add() { 
     let newValue = Count + 1 ;
     setCount(newValue);
    }

    function Minus() {
     let newValue = Count - 1 ;
     setCount(newValue);
    }

    return (
        <div id='All'>
        <div id='First'>
            <div id='Counter'>
                <button onClick={Add}>+</button>
                <label>{Count}</label>
                <button onClick={Minus}>-</button>
            </div>
            <div id='Comment'>
            <div id='User'>
                <img src={User1} id='Uimg'/>
                <h3 id='UName'>amyrobson</h3>
                <label id='Time'> 1 month ago</label>
            </div>
            <p id='UComment'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Est inventore ea quo obcaecati quisquam nostrum voluptates blanditiis modi dolore non maxime, animi dignissimos vitae necessitatibus ducimus, sit ex, officia impedit?</p>
            </div>
        </div>
      
        <div id='First'>
            <div id='Counter'>
                <button onClick={Add}>+</button>
                <label>{Count}</label>
                <button onClick={Minus}>-</button>
            </div>
            <div id='Comment'>
            <div id='User'>
                <img src={User2} />
                <h3>jgtgtg</h3>
                <label> 2 weeks ago</label>
            </div>
            <p> Est inventore ea quo obcaecati quisquam nostrum voluptates blanditiis modi dolore non maxime, animi dignissimos vitae necessitatibus ducimus, sit ex, officia impedit?</p>
            </div>
        </div>
        </div>
    )
}
export default FirstComment