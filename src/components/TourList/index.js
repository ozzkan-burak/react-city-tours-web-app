import React, { Component } from 'react'
//scss
import './TourList.scss'
//custom component
import Tour from '../Tour';
//data
import {tourData} from '../../tourData';


class TourList extends Component {

    state = {
        tours: tourData
    };

    removeTour = id => {
        const {tours} = this.state;
        const sortedTours = tours.filter(tour => tour.id !== id);
        this.setState({
            tours: sortedTours
        })
    }

    render() {
        const {tours} =this.state;
        return (
            <section className="tour-list">
                {tours.map(tour => {
                    return(
                        <Tour 
                            key={tour.id}
                            tour={tour}
                            removeTour={this.removeTour}
                        />
                    )
                })}
            </section>
        )
    }
}

export default TourList;