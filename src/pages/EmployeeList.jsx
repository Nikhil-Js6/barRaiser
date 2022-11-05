import axios from 'axios'
import { useState, useEffect } from 'react'
import AntdTable from '../components/antdTable/AntdTable';
import DataTable from '../components/muiTable/Table'

const EmployeeList = () => {
    
    const [employeesList, setEmployeesList] = useState([]);
    const [filteredData, setFilteredData] = useState([]);
    const [query, setQuery] = useState('');

    useEffect(() => {
        fetchEmployees();
    }, []);

    useEffect(() => {
        searchQuery();
        return () => {
            
        }
    }, [query]);

    const fetchEmployees = async () => {
        const res = await axios.get(`${process.env.REACT_APP_PUBLIC_API}/employees`);
        setEmployeesList(res.data);
        setFilteredData(res.data);
    }

    const searchQuery = () => {
        const filteredData = employeesList.filter(e => {
            return (
                e.first_name.toLowerCase().includes(query.toLowerCase()) || 
                e.last_name.toLowerCase().includes(query.toLowerCase()) ||
                e.address.toLowerCase().includes(query.toLowerCase()) ||
                e.salary.toLowerCase().includes(query.toLowerCase()) ||
                e.designation.toLowerCase().includes(query.toLowerCase()) ||
                e.date_of_birth.toLowerCase().includes(query.toLowerCase()) ||
                e.date_of_joining.toLowerCase().includes(query.toLowerCase())
            );
        });
        setFilteredData(filteredData);
    }

    const handleDelete = record => {
        setFilteredData(filteredData.filter(e => {
            return e.id !== record.id
        }))
        filteredData.length <= 1 && setFilteredData(employeesList);
    }

    return (
        <div className='container'>
            <h1 className='title'>Employee Table: </h1>

            <div className='search'>
                <input className='input' type={'text'} placeholder='Search...' onChange={(e) => setQuery(e.target.value)} />
            </div>

            <AntdTable data={filteredData} handleDelete={handleDelete} />
            {/* <DataTable data={filteredData} /> */}
        </div>
    )
}

export default EmployeeList;