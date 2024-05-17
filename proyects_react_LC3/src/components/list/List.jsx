import PropTypes from 'prop-types';
import Tarea from '../tarea/Tarea';


const List = ({ works, setWorks }) => {
    return (
        <div>
            {works && works.map((work, index) => (
                <Tarea work={work} key={index} works={works} setWorks={setWorks}/>
            ))}
        </div>
    );
}

List.propTypes = {
    works: PropTypes.array,
    setWorks: PropTypes.func
};

export default List;