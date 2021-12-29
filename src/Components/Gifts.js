import Gift from "./Gift"


const Gifts = (props) => {
    return (
        <>
          {props.gifts.map((gift) => (
              <Gift gift={gift} onAssign={props.onAssign} onReveal={props.onReveal}/>
        ))}  
        </>
    )
}

export default Gifts
