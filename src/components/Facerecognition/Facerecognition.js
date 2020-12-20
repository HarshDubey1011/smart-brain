import './Facerecognition.css'

const Facerecognition =({Imageurl,box})=>{
	return(
		<div className='center ma1'>
		<div className='absolute mt2'>
<img id='imageinput' className='center' alt='' src={Imageurl} width='500px' height='auto' />
<div className='bounding-box' style={{ top:box.toprow , bottom: box.bottomrow , right: box.rightcol , left: box.leftcol }}>
</div>
</div>
</div>
		);
}

export default Facerecognition;