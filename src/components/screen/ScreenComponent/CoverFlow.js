import React, { useContext } from 'react'
import NotficationBar from './NotificationBar'
import Coverflow from 'react-coverflow'
import coverflowData from '../../../assets/coverflow/coverflow'
import { AppContext } from '../../../context/playContext'

function CoverFlow() {
  const { activeState } = useContext(AppContext)

  return (
    <div className='coverflow'>
      <NotficationBar />
      <Coverflow
        width={100}
        height={235}
        displayQuantityOfSide={1}
        navigation={false}
        enableHeading={false}
        active={activeState}
      >
        {coverflowData.map((item) => (
          <img key={item._id} src={item.images} alt={item.name} />
        ))}
      </Coverflow>
    </div>
  )
}

export default CoverFlow
