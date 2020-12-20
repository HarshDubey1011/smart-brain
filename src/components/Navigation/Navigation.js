const Navigation=({navroute,isSignedin})=>{
	
if(isSignedin){
	return(
<div style={{display:'flex',justifyContent:'flex-end'}}>
<p className='f3 link dim black underline pa3 pointer' onClick={()=> navroute('signout')}>Sign Out</p>
</div>
	);
}else{
	return(
	<div style={{display:'flex',justifyContent:'flex-end'}}>
<p className='f3 link dim black underline pa3 pointer' onClick={()=> navroute('signin')}>SignIn</p>
<p className='f3 link dim black underline pa3 pointer' onClick={()=> navroute('register')}>Register</p>
</div>
);
}


}
export default Navigation;