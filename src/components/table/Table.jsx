import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPencil, faXmark } from '@fortawesome/free-solid-svg-icons'


function Table({data, handleDelete}) {
    return ( 
        <table border="1">
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Password</th>
                    <th>Phone</th>
                    <th>Country</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                {
                    console.log(data)
                }
                    {data.map((item, index) =>(
                        <tr key={index}>
                            <td>{item.name}</td>
                            <td>{item.email}</td>
                            <td>{item.password}</td>
                            <td>{item.phone}</td>
                            <td>{item.country}</td>
                            <td>
                               <FontAwesomeIcon icon={faPencil} />
                               <FontAwesomeIcon icon={faXmark} onClick={()=>handleDelete(item.id)}/>
                            </td>
                        </tr>
                    ))}
            </tbody>
        </table>
     );
}

Table.prototype = {
    data:PropTypes.array.isRequired,
    handleDelete:PropTypes.func.isRequired
}

export default Table;