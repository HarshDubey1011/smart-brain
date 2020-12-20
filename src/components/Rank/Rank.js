const Rank = ({name, entries}) =>{
	return(
<div className='center'>
<div className='white f3'>
{`${name}, Your Current Entry Count Is...`}
</div>
 <div className='black f3'>
   {entries}
</div>
</div>
);
}

export default Rank;