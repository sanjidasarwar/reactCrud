import PropTypes from 'prop-types';


function Table({data}) {
    return ( 
        <table border="1">
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Password</th>
                    <th>Phone</th>
                    <th>country</th>
                </tr>
            </thead>
            <tbody>
                    {data.map((item, index) =>(
                        <tr key={index}>
                            <td>{item.name}</td>
                            <td>{item.email}</td>
                            <td>{item.password}</td>
                            <td>{item.phone}</td>
                            <td>{item.country}</td>
                        </tr>
                    ))}
            </tbody>
        </table>
     );
}

Table.prototype = {
    data:PropTypes.array.isRequired
}

export default Table;