import { DataGrid } from '@mui/x-data-grid';

const DataTable = ({ data }) => {

    const columns = [
        {
            headerName: 'ID',
            field: 'id',
            key: 'id',
            width: 100,
        },
        {
            headerName: 'First Name',
            field: 'first_name',
            key: 'first_name'
        },
        {
            headerName: 'Last Name',
            field: 'last_name',
            key: 'last_name',
        },
        {
            headerName: 'Date of Birth',
            field: 'date_of_birth',
            key: 'date_of_birth',
        },
        {
            headerName: 'Address',
            field: 'address',
            key: 'address',
            width: 100,
        },
        {
            headerName: 'Date of Joining',
            field: 'date_of_joining',
            key: 'date_of_joining',
        },
        {
            headerName: 'Salary',
            field: 'salary',
            key: 'salary',
        },
        {
            headerName: 'Designation',
            field: 'designation',
            key: 'designation',
            width: 130,
        },
        {
            headerName: 'Manager ID',
            field: 'manager_id',
            key: 'manager_id',
        }
    ];


    return (
        <div className='table'>
            <DataGrid
                rows={data}
                columns={columns}
                pageSize={10}
                rowsPerPageOptions={[10]}
                checkboxSelection
            />
        </div>
    )
}

export default DataTable;
