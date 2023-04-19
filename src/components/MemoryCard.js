import React from 'react';
import './MemoryCard.css';

class MemoryCard extends React.Component {
    render() {
        return(
           
           <div className="MemoryCard">
                <div className="MemoryCardInner">
                    <div className="MemoryCardBack">
                        <img className="card-img" src="https://i.imgflip.com/6bf76l.jpg?a466488"></img>
                    </div>
                    <div className="MemoryCardFront">
                    {'( . Y . )'} 
                    </div>
                </div>    
           </div>
        );
    }
}

export default MemoryCard;