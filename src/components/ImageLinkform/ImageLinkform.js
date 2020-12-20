import './ImageLinkform.css';
const ImageLinkform = ({Inputurl,ButtonSubmit}) =>{
	return(
	    	<div>
	<p className=' center f3 white'>{'you wanna see magic'}</p>
	         <div className="center"> 
	         <div className="form center pa4 br3 shadow-5">
 <input className='f4 pa1 w-70 center' type='text' onChange={Inputurl} />
 <button className="w-30 grow f4 link ph3 pv2 dib white bg-light-purple" onClick={ButtonSubmit}>Detect</button>
 		</div>
		</div>
		</div>
		);

}
export default ImageLinkform;