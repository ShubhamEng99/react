import React from 'react'

const Navbar=(props)=>{
    console.log(props.count)
        return(
            <nav className='navbar'>
            <h1 style={styles.nav}>Logo</h1>
            <div>
            <img src='https://cdn-icons-png.flaticon.com/512/891/891462.png' style={styles.img}></img>
            <span className='count'>{props.count}</span>
            </div>
            </nav>
        )
}

const styles={
   
    img:{
        height:'40px',
        width:'40px',
        borderRadius:50,
        float:'right',
        marginRight:'15px'
    },
    
}

export default Navbar