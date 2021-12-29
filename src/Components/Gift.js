import Dropdown from './Dropdown'
import Image from './Image'
import Button from  './Button'
import Input from './Input'
import Price from './Price'

const Gift = ({gift, onAssign, onReveal}) => {
    return (
        <>
        <div key={gift.id} className={'gift '+ (gift.mystery ? 'mystery-glow': ' ')}  >
            <div className={'rowC gift-details '+ (gift.assigned ? 'assigned ' : ' ') } >
                <Image imageSource={gift.imageSource} />
                <div className={'gift-details '+  (gift.mystery ? 'mystery' : '')}>
                    <h2 >{gift.name}</h2>

                    <br/>
                    <Price label='Price: ' value={gift.price}/>
                    <br/>
                    <p style={{maxWidth: 500}} ><strong>Description:</strong> {gift.description}</p>
                </div>
                
                {
                (!gift.mystery) ? 
                <div style={{textAlign:'right', alignContent: 'right'}}>
                    <Input inputType='text' placeHolder='Enter Winner Name'/>
                    <Button text='Select' color='darkgreen' onClick={() => onAssign(gift.id)} />
                </div>
                :
                    <Button text='Reveal' color='Orange' onClick={() => onReveal(gift.id)} />
                }

                
            </div>
        </div>
</>
       
    )
}

export default Gift
