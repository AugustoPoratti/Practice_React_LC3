
import PropTypes from 'prop-types'


function Red_Ipa({beers}) {
    const list = beers
    .filter(beer => beer.beerStyle == "Red" || beer.beerStyle == "IPA")

    return (
        <div>
            <h2>{list.length}</h2>
        </div>
    );
 
}

Red_Ipa.propTypes = {
    beers:PropTypes.array
}

export default Red_Ipa

