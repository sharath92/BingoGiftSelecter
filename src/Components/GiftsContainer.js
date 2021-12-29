import Header from './Header'
import Button from './Button';
import Gifts from './Gifts';

const GiftsContainer = ({title, gifts, assignGift, onReveal}) => {
    return (
        <>
            <div className="container">
                <Header title={title} type='div' key='rowGifts' />  {/* Header component is loaded here */}

                {
                    gifts.length > 0 ?
                        <Gifts gifts={gifts} onAssign={assignGift} onReveal={onReveal} /> : 'No Gifts to show'
                }
            </div>
        </>
    )
}

export default GiftsContainer
