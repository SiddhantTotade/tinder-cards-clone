import React from 'react'
import TinderCard from 'react-tinder-card'
import './TinderCards.css'

function TinderCards() {

  const [cars, setCars] = React.useState([
    {
      name: 'Tesla',
      url: 'https://i0.wp.com/www.eastmojo.com/wp-content/uploads/2022/01/teslaa.jpg?fit=1280%2C720&ssl=1'
    },
    {
      name: 'Ferarri',
      url: 'https://cdni.autocarindia.com/Utils/ImageResizer.ashx?n=https://cdni.autocarindia.com/ExtraImages/20220419070741_Ferrari%204.jpg&w=700&q=90&c=1'
    },
    {
      name: 'Lamborghini',
      url: 'https://www.lamborghini.com/sites/it-en/files/DAM/lamborghini/facelift_2019/model_gw/images-s/2021/07_07/gate_family_s_02_m.jpg'
    },
    {
      name: 'BMW',
      url: 'https://techcrunch.com/wp-content/uploads/2019/07/2019-bmw-i8-1.jpg'
    },
    {
      name: 'Lykan',
      url: 'https://static1.hotcarsimages.com/wordpress/wp-content/uploads/2021/12/Lykan-Hypersport---Front.jpg'
    }
  ]);

  return (
    <div className='card-container'>
      {
        cars.map(car => (
          <TinderCard className='swipe' key={car.name} preventSwipe={['up', 'down']} >
            <div className='card' style={{ backgroundImage: `url(${car.url})` }}>
              <h2>{car.name}</h2>
            </div>
          </TinderCard>
        ))
      }
    </div >
  )
}

export default TinderCards