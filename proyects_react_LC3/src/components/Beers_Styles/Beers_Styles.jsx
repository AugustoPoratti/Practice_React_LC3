
import PropTypes from 'prop-types'

function Beers_Styles({beers}) {
    
        let set = new Set(beers.map(beer => beer.beerStyle))
        let arr = [...set]
        return (
            <div>
                {
                    arr.map((beer, i) => (
                            <div key={i} className=''>
                                <h3 className='text-xl font-extrabold'>{beer}</h3>
                            </div>
                        ))
                }
            </div>
        );
    }


Beers_Styles.propTypes = {
    beers: PropTypes.array
}

export default Beers_Styles

