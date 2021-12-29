import Image from "./Image"

const PageHeader = (props) => {
    return (
        <div className='rowC'>
                <img src='DNCTLogo.jpg' height='200px' width='auto'  style={{margin:'5px 0 0 190px' }}/>
                <img src='Bingo.gif' height='150px' width='auto' style={{margin:'1% 37% 0% 0%' }}/>
            {/* <div className='bingo'>
                <h1> {props.title}</h1>
            </div> */}
        </div>
    )
}

export default PageHeader
