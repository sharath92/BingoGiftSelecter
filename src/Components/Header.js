import PropTypes from 'prop-types'
import Button from './Button'
import {FaAngleDown, FaArrowDown, FaDailymotion, FaTimes, Fatimes, FaYoutube} from 'react-icons/fa'

const appName = 'Task Tracker'

const Header = (props) => {
    const onClick = (key) => {
                
    }

    return (
       <header className= {props.type == 'div'? 'header' : 'page-header'}>
           <h1>{props.title}</h1>        
           <FaAngleDown onClick={ () => props.onClick(props.key)} style={{cursor: 'pointer'}}/>

       </header>
    )
}

//If the html element doesnt send anything in the props object like title etc, we set to a default value
Header.defaultProps = {
title : ''

}

//The following ensures that only particualt type is allowed
//isRequired can be used to enforce required fields and in this case it won't error out as there is a defaultProps object defined
Header.protoTypes = {
    title: PropTypes.string.isRequired,
    
    }

//the following is the css 
const headingStyle ={
    color: 'red',
    backgroundColor: 'black',
    width: '50%',
    borderRadius: '8px'

}



export default Header


 {/* <h1 style={{color: 'red', backgroundColor:'black'}}>{props.title}</h1>
           <h1 style={headingStyle}>{props.title}</h1> */}

// const Header = ({title}) => {
//     return (
//        <header>
//            <h1>{title}</h1>
//        </header>
//     )
// }

// Header.defaultProps = {
// title : 'Hello React user'

// }
// export default Header
