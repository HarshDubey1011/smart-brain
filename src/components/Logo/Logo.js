import brainimage from './icons8-brain-64.png';
import Tilt from 'react-tilt';
import './Logo.css';

const Logo = () =>{
	return (

<div className="ma4 mt0">
<Tilt className="Tilt pa4 br2 shadow-2" options={{ max : 50,reverse:true}} style={{ height: 142, width: 140 }} >
 <div className="Tilt-inner"> 
 <img style={{paddingLeft: '4px',paddingTop:'3px'}} alt='' src={brainimage} />
  </div>
</Tilt>
</div>
		);
}
export default Logo;