import React ,{useState}from 'react'

const Tour = ({id,image,info,price,name,removeTour}) => {

    const [readMore,setReadMore]=useState(false);

    return (
        <article className='tour'>

        
        <footer className='footer'>
            <img src={image} alt={name}/>
            <div>
            <div className='trip-info'>
                <h4>{name}</h4>
            <h4 className='tour-price'>$ {price}</h4>
            </div>
            <p>{
                readMore? info: `${info.substring(0,200)} `
            
            }
            <button className="read-more" onClick={()=>{setReadMore(!readMore)}}>
                
                {readMore?'   show Less': '...show More'}
            </button>
            </p>
            

            <button className='delete-button' onClick={()=>{ removeTour(id)}}>Not Interested</button>
            </div>
        </footer>
            
        </article>
    )
}

export default Tour;
