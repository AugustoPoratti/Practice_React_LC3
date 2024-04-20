import PropTypes from "prop-types"


const Table = ({ netIncomes }) => {

    return (
        <table>
            <thead>
                <tr>
                    <th>Marca</th>
                    <th>Ingreso Neto</th>
                </tr>
            </thead>
            <tbody>
                {netIncomes.map((i, index) => (
                    <tr key={index}>
                        <td>{i.brand}</td>
                        <td>{i.income}</td>
                    </tr>
                ))}
            </tbody>
        </table>

    );


}

Table.propTypes = {
    netIncomes: PropTypes.array
}

export default Table