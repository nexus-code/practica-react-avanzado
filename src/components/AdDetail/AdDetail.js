import React  from "react";
import Canvas from '../Canvas/Canvas';

import { useParams, useHistory } from 'react-router';
import { getAd }  from '../../store/ads/selectors';
import { Button } from 'react-bootstrap';


function AdDetail(ads) {

    // console.log('AdDetail ads', ads);

    const { id } = useParams();
    const history = useHistory();
    const ad = getAd(ads, id);

    return <Canvas>

        <div className="container">
            {
                ad
                &&
                <div>
                    <img src={ad.photo} alt={ad.name} />

                    <h1 style={{
                        color: ad.type === 'sell' ? 'green' : 'blue'
                    }}>{ad.name} <span className='badge badge-primary'>{ad.price}€</span>
                    </h1>
                    <p>{ad.description}</p>
                    <p>
                        {
                            ad.tags.map(tag => <span className='badge badge-secondary p-2 mr-2' key={tag}> {tag} </span>)
                        }
                    </p>
                    <br />
                    <hr />
                    <br />
                    <Button className='btn btn-warning' onClick={() => history.push(`/advert/edit/${ id }`)} style={{ float: 'right' }} >Edit</Button>
                    <Button className='btn btn-dark' onClick={() => history.goBack()}>Go back</Button>
                </div>
            }
            {
                !ad
                &&
                <div>
                    <h3><br/>404. Elemento no encontrado</h3>
                </div>
            }
        </div>
    </Canvas>;

}

export default AdDetail;