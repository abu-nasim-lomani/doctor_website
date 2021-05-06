import React from 'react';
import ServiceDetails from '../ServiceDetails/ServiceDetails';
import './Features.css';
import features from '../../../images/features.png';

const Features = () => {
    return (
        <section className="features-container mt-5 pt-5 mb-5 pb-5">
            <div className="text-center">
                <div className="d-flex justify-content-center mb-5 pb-5">
                    <div className="row w-75">
                        <div className="col-md-5">
                            <img src={features}  className="img-fluid" alt=""/>
                        </div>
                        <div className="col-md-7">
                            <div className="text-left">
                            <h1 className="">Exeption Dental Care, on Your Terms</h1>
                            <p className="text-muted pt-3 pb-5">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nesciunt est expedita deleniti dignissimos unde non aspernatur. Fuga, tempora delectus aliquid eos quaerat ipsa? Iusto veritatis, enim dolor explicabo officiis maxime alias impedit aliquid quod, esse cumque nam sit assumenda. Ex sunt voluptates, ab, necessitatibus perferendis, repellendus officiis velit sapiente iusto illum quam ullam omnis sint ea quaerat et harum molestiae eligendi! Pariatur quos amet dolorum sequi mollitia rem ut sunt hic. Soluta placeat quisquam fugit, neque voluptas exercitationem molestiae aut accusantium esse ducimus praesentium consequuntur qui aliquam quidem! Autem voluptatum nostrum aliquam repellat libero quo mollitia iusto, corrupti sequi non.</p>
                            <button className="btn" style={{backgroundColor:'#10CFE4'}}>Learn More</button>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Features;