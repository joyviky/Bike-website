import React, { useEffect, useState } from 'react'
// import axios from 'axios'
import logo from './logo.png'
import './Product.css'
import upcomming from './upcomming.webp'
import Bike from './Bike'
import b1 from './b1.webp'
import b2 from './b2.webp'
import b3 from './b3.webp'
import b4 from './b4.webp'
import b5 from './b5.webp'
import b6 from './b6.webp'
import b7 from './b7.webp'
import b8 from './b8.webp'
import b9 from './b9.webp'
import b10 from './b10.webp'
import b11 from './b11.webp'
import b12 from './b12.webp'
import b13 from './b13.webp'
import b14 from './b14.webp'
import b15 from './b15.webp'
import b16 from './b16.webp'
import b17 from './b17.webp'




const Product = () => {
 
//   const [bike,setbike]=useState([]);
//   async function fetch(){
//     await axios.get('  https://api.api-ninjas.com/v1/motorcyclemodels?make=kawasaki').then((res)=>{
//         setbike(res.data.products);
//     })
//   }



//   useEffect(()=>{
//     fetch()
//   },[]);
//   console.log(bike);
      
  return (
    <div className="main">
        <header>
            <div className="logo">
                <img src={logo}/>
                <ul>
                    <li>models</li>
                    <li>KTM PRO-XP</li>
                    <li>KTM app</li>
                    <li>LOCATE US</li>
                    <li>Bike Collections</li>
                </ul>
            </div>
           
            <button className="btn1">Enquire now</button>
        </header>
        <div className="cnt">
            <h1>EXPLORE KTM ALL BIKES COLLECTION</h1>
            <p>KTM bikes are known for their high-performance, rugged design, and advanced technology. Built for both street and off-road adventures, KTM motorcycles offer powerful engined, sharp handling, and a distinctive style, making them a top choice for racing enthusiasts and thrill-seekers worldwide.</p>
        </div>
        <div className='upcomming'>
            <h1>Upcoming KTM Models</h1>
            <div className='upcomming-cnt'>
                <img src={upcomming}></img>
                <h3>Enduro 390 R</h3>
                <button className='btn2'>Pre-Book Now</button>
            </div>
        </div>
        <div className='filter'>
            {/* {
                bike.length > 0 && <>
                {
                    bike.map((data)=>{
                        return <Bike bikeimg={data.images} bikeName={"KTM 890 DUKE R"} rupee={"14 50 000/-"}/>
                    })
                }
                </>
            } */}
           
           <Bike bikeimg={b1} bikeName={"KTM 1390 Super duke r"} rupee={"22 95 800/-"}/>
           <Bike bikeimg={b2} bikeName={"KTM 890 DUKE R"} rupee={"14 50 000/-"}/>
           <Bike bikeimg={b3} bikeName={"KTM 1290 SUPER ADVENTURE S"} rupee={"22 73 900/-"}/>
           <Bike bikeimg={b4} bikeName={"KTM 890 ADVENTURE R"} rupee={"15 80 000/-"}/>
           <Bike bikeimg={b5} bikeName={"KTM 350 EXC-F SIX DAYS"} rupee={" 12 95 800/-"}/>
           <Bike bikeimg={b6} bikeName={"KTM 450 SX-F"} rupee={"10 25 100/-"}/>
           <Bike bikeimg={b7} bikeName={"KTM 250 SX-F"} rupee={" 9 58 000/-"}/>
           <Bike bikeimg={b8} bikeName={"KTM 85 SX"} rupee={"6 69 000/-"}/>
           <Bike bikeimg={b9} bikeName={"KTM 65 SX"} rupee={"5 46 500/-"}/>
           <Bike bikeimg={b10} bikeName={"KTM 1390 Super duke r"} rupee={"22 95 800/-"}/>
           <Bike bikeimg={b11} bikeName={"KTM 890 DUKE R"} rupee={"14 50 000/-"}/>
           <Bike bikeimg={b12} bikeName={"KTM 1290 SUPER ADVENTURE S"} rupee={"22 73 900/-"}/>
           <Bike bikeimg={b13} bikeName={"KTM 890 ADVENTURE R"} rupee={"15 80 000/-"}/>
           <Bike bikeimg={b14} bikeName={"KTM 350 EXC-F SIX DAYS"} rupee={" 12 95 800/-"}/>
           <Bike bikeimg={b15} bikeName={"KTM 450 SX-F"} rupee={"10 25 100/-"}/>
           <Bike bikeimg={b16} bikeName={"KTM 250 SX-F"} rupee={" 9 58 000/-"}/>
           <Bike bikeimg={b17} bikeName={"KTM 85 SX"} rupee={"6 69 000/-"}/>

          
          
        </div>
    </div>
  )
}

export default Product

