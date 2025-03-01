import React from 'react'
import logo from './logo.png'
import bike1 from './b1.webp'
import './Bike.css'

const Bike = (props) => {
    // const bikeDatas=[{
    //     bikeImage: 'src/b1.webp', 
    //     bikeName: 'KTM 1390 SUPER DUKE R',
    //     price: '₹ 22 95 800/-',
    //     sections: [
    //       { title: "Engine Capacity", value: "1301cc" },
    //       { title: "Max Power", value: "140 kW (190 hp) @ 10000 rpm" },
    //       { title: "Max Torque", value: "145 Nm @ 8000 rpm" }
    //     ]
    //   },{
    //     bikeImage: 'src/b1.webp', 
    //     bikeName: 'KTM 1390 SUPER DUKE R',
    //     price: '₹ 22 95 800/-',
    //     sections: [
    //       { title: "Engine Capacity", value: "1301cc" },
    //       { title: "Max Power", value: "140 kW (190 hp) @ 10000 rpm" },
    //       { title: "Max Torque", value: "145 Nm @ 8000 rpm" }
    //     ]
    //   },{
    //     bikeImage: 'src/b1.webp', 
    //     bikeName: 'KTM 1390 SUPER DUKE R',
    //     price: '₹ 22 95 800/-',
    //     sections: [
    //       { title: "Engine Capacity", value: "1301cc" },
    //       { title: "Max Power", value: "140 kW (190 hp) @ 10000 rpm" },
    //       { title: "Max Torque", value: "145 Nm @ 8000 rpm" }
    //     ]
    //   },{
    //     bikeImage: 'src/b1.webp', 
    //     bikeName: 'KTM 1390 SUPER DUKE R',
    //     price: '₹ 22 95 800/-',
    //     sections: [
    //       { title: "Engine Capacity", value: "1301cc" },
    //       { title: "Max Power", value: "140 kW (190 hp) @ 10000 rpm" },
    //       { title: "Max Torque", value: "145 Nm @ 8000 rpm" }
    //     ]
    //   },{
    //     bikeImage: 'src/b1.webp', 
    //     bikeName: 'KTM 1390 SUPER DUKE R',
    //     price: '₹ 22 95 800/-',
    //     sections: [
    //       { title: "Engine Capacity", value: "1301cc" },
    //       { title: "Max Power", value: "140 kW (190 hp) @ 10000 rpm" },
    //       { title: "Max Torque", value: "145 Nm @ 8000 rpm" }
    //     ]
    //   },{
    //     bikeImage: 'src/b1.webp', 
    //     bikeName: 'KTM 1390 SUPER DUKE R',
    //     price: '₹ 22 95 800/-',
    //     sections: [
    //       { title: "Engine Capacity", value: "1301cc" },
    //       { title: "Max Power", value: "140 kW (190 hp) @ 10000 rpm" },
    //       { title: "Max Torque", value: "145 Nm @ 8000 rpm" }
    //     ]
    //   },{
    //     bikeImage: 'src/b1.webp', 
    //     bikeName: 'KTM 1390 SUPER DUKE R',
    //     price: '₹ 22 95 800/-',
    //     sections: [
    //       { title: "Engine Capacity", value: "1301cc" },
    //       { title: "Max Power", value: "140 kW (190 hp) @ 10000 rpm" },
    //       { title: "Max Torque", value: "145 Nm @ 8000 rpm" }
    //     ]
    //   },{
    //     bikeImage: 'src/b1.webp', 
    //     bikeName: 'KTM 1390 SUPER DUKE R',
    //     price: '₹ 22 95 800/-',
    //     sections: [
    //       { title: "Engine Capacity", value: "1301cc" },
    //       { title: "Max Power", value: "140 kW (190 hp) @ 10000 rpm" },
    //       { title: "Max Torque", value: "145 Nm @ 8000 rpm" }
    //     ]
    //   },{
    //     bikeImage: 'src/b1.webp', 
    //     bikeName: 'KTM 1390 SUPER DUKE R',
    //     price: '₹ 22 95 800/-',
    //     sections: [
    //       { title: "Engine Capacity", value: "1301cc" },
    //       { title: "Max Power", value: "140 kW (190 hp) @ 10000 rpm" },
    //       { title: "Max Torque", value: "145 Nm @ 8000 rpm" }
    //     ]
    //   }];
  return (
    <div className='cart'>
       <img src={logo}/>
       <img src={props.bikeimg} id="bike-img"/>
       <h3 className='name'>{props.bikeName}</h3>
       <h4 className='price'>&#8377;  {props.rupee}</h4>
       <div className="cart-row">
        <div>
            <h5>Engine Capacity</h5>
            <small>1301cc</small>
        </div>
        <div className='border'>
            <h5>Max Powery</h5>
            <small>140 kW (190 hp) @ 10000 rpm</small>
        </div>
        <div>
            <h5>Max Torque</h5>
            <small>145 Nm @ 8000 rpm</small>
        </div>
       </div>
       <div className='btns'>
        <button className='btn11 btn21'>Explore</button>
        <button className='btn11 btn22'>Book now</button>
       </div>
    </div>
  )
}

export default Bike