import react from 'react';
import BusinessInfoCard from './BusinessInfoCard/BusinessInfoCard';
import { faClock, faMapMarkerAlt, faPhoneVolume } from '@fortawesome/free-solid-svg-icons';

const infoData = [
    {
        icon: faClock,
        title:'Opening Hours',
        description: 'Lorem ipsum dolor sit amet consectetur',
        background:'primary'
    },
    {
        icon: faMapMarkerAlt,
        title:'Your Location',
        description: 'Brooklyn NY, 100036, USA',
        background:'dark'
    },
    {
        icon: faPhoneVolume,
        title:'Contact us now',
        description: '+0086-7675459',
        background:'primary'
    }
]

const BusinessInfo=()=>{



    return(
        <section className="d-flex justify-content-center">
            <div className="row w-75">
            {
                infoData.map(info=><BusinessInfoCard info={info}></BusinessInfoCard>)
            }
            </div>
        </section>
    )
}

export default BusinessInfo;
