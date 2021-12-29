import './App.css';
import { useState } from 'react';
import Gifts from './Components/Gifts'
import Header from './Components/Header'
import Button from './Components/Button';
import GiftsContainer from './Components/GiftsContainer';
import PageHeader from './Components/PageHeader';
import confetti from 'canvas-confetti';

function App() {
  const [gifts, setGifts] = useState([
    {
        id:1,
        name: '1 TB External HDD',
        price: '₹3,799.00',
        assigned: false,
        assignee:'',
        description: 'Seagate Expansion 1TB External HDD - 6.35 cm (2.5 Inch) USB 3.0 for Windows and Mac with 3 yr Data Recovery Services, Portable Hard Drive (STKM1000400)',
        imageSource:'Gift001.png',
        mystery: false

    },
    {
        id:2,
        name: 'JBL Wireless Earphones',
        price: '₹1,049.00',
        assigned: false,
        assignee:'',
        description:'Infinity (JBL) Glide 120, in Ear Wireless Earphones with Mic, Deep Bass, Dual Equalizer, 12mm Drivers, Premium Metal Earbuds, Comfortable Flex Neckband, Bluetooth 5.0, IPX5 Sweatproof (Black&Yellow)',
        imageSource:'Gift002.png',
        mystery: false

    },
    {
      id:3,
      name: 'Smart Watch',
      price: '₹2,999.00',
      assigned: false,
      assignee:'',
      description:'boAt Xtend Smartwatch with Alexa Built-in, 1.69” HD Display, Multiple Watch Faces, Stress Monitor, Heart & SpO2 Monitoring, 14 Sports Modes, Sleep Monitor & 5 ATM Water Resistance(Pitch Black)',
      imageSource:'Gift003.png',
      mystery: false

    },
    {
      id: 4,
      name: 'Over Ear Bluetooth headphones',
      price: '₹2,419.00',
      assigned: false,
      assignee: '',
      description: 'Tribit Wireless Bluetooth Headphones Over Ear,Bluetooth 5.2 On Ear Headphone with Built-in Mic,HiFi Sound,Deep Bass,Lightweight,Type-C Lightening Fast Charge, 34H Playtime,Tribit XFree Go Headset,Blue',
      imageSource: 'Gift004.png',
      mystery: false

    },
    {
      id: 5,
      name: 'Amazon Gift Card',
      price: '₹2,000.00',
      assigned: false,
      assignee: '',
      description: '₹2,000.00 worth Amazon gift card',
      imageSource: 'amazonGiftCard.png',
      mystery: false
    },
    {
      id: 6,
      name: 'Pigeon Quartz Electric Kettle',
      price: '₹749.00',
      assigned: false,
      assignee: '',
      description: 'Pigeon Quartz Electric Kettle (14299) 1.7 Litre with Stainless Steel Body, used for boiling Water, making tea and coffee, instant noodles, soup etc. 1500 Watt (Silver)',
      imageSource: 'Gift007.jpg',
      mystery: false
    },
    {
      id: 7,
      name: 'Butterfly Jet Elite Mixer Grinder, 750W, 4 Jars (Grey)',
      price: '₹3,151.00',
      assigned: false,
      assignee: '',
      description: 'Wattage: 750 W; Revolution: 18500 No of Jars: 4; Jar Size: 0.4,0.75,1 in Ltr; Jar Material: Stainless Steel jars and PC Juicer Jar; Speed Control: 3 Speed motor for faster and efficient grinding.Body: Body made of ABS which is shock free',
      imageSource: 'gift.jpg',
      hiddenImageSource: 'MysteryBox1.jpg',
      mystery: true
    },
])

const [fullHouseGifts, setFHGifts] = useState([
  {
      id:1,
      name: 'Office Chair',
      price: '₹4,990.00',
      assigned: false,
      assignee:'',
      description: 'SAVYA HOME Apollo Medium Back Ergonomic Office Chair with 2D Lumbar Support (Ergonomic Mesh, Black, 1 Piece)',
      imageSource: 'Gift006.png',
      mystery: false,


  },
  {
    id: 2,
    name: 'American Tourister Hardsided Suitcase',
    price: '₹4,299.00',
    assigned: false,
    assignee: '',
    description: 'American Tourister Cruze ABS 55 cms Red Hardsided Suitcase, Capacity: 42 liters; Weight: 2.8Kg; Dimensions:55Hx36Wx24D cm',
    imageSource: 'Gift005.png',
    mystery: false
  },  
  {
    id: 3,
    name: 'Amazon Echo Dot',
    price: '₹4,499.00',
    assigned: false,
    assignee: '',
    description: 'Amazon Echo Dot (4th Gen, 2020 release)| Smart speaker with Alexa (Blue)',
    imageSource: 'gift.jpg',
    hiddenImageSource: 'MysteryBox2.jpg',
    mystery: true
  },
])




//Delete task
  const assignGift =(id) => {
    confetti(
      {
        particleCount: 1500,
        spread: 360,
        decay: 0.94,
      });
   
    setGifts(gifts.map((gift) =>
      gift.id === id ?
        gift.mystery ? { ...gift, assigned: !gift.assigned, mystery: false } :
          { ...gift, assigned: !gift.assigned } : gift)
    )
        console.log('assigned',id)
  }
  const assignFHGift =(id) => {
    confetti(
      {
        particleCount: 1500,
        spread: 360,
        decay: 0.94,
      });
   
    setFHGifts(fullHouseGifts.map((fGift) =>
       fGift.id === id ? {...fGift,assigned: !fGift.assigned, mystery: false} : fGift) 
    )
        console.log('assigned',id)
  }

  //Toggle Reminder
  const toggleOpenClose = () => {
      // setTasks(tasks.foreach((task)=> task.reminder = !task.reminder))
  }

  const onReveal =(id) => {
    confetti(
      {
        particleCount: 1500,
        spread: 360,
        decay: 0.94,
      });

    setGifts(gifts.map((gift) =>
      gift.id === id ? { ...gift, mystery: false, imageSource: gift.hiddenImageSource } : gift)
    )

  }

  const onFHReveal =(id) => {
   confetti(
      {
        particleCount: 1500,
        spread: 360,
        decay: 0.94,
      });
    
    setFHGifts(fullHouseGifts.map((fGift) =>
    fGift.id === id ? {...fGift, mystery: false,  imageSource: fGift.hiddenImageSource } : fGift) 
 )
     console.log('assigned',id)
}
  return (
    <>
      <PageHeader title='DNCT Technologies'/>
      <GiftsContainer title='BINGO Row Gifts'  gifts={gifts} assignGift={assignGift} onReveal={onReveal}/>
      <GiftsContainer title='BINGO Full House Gifts'  gifts={fullHouseGifts} assignGift={assignFHGift} onReveal={onFHReveal}/>
    </>
  );
}

export default App;
