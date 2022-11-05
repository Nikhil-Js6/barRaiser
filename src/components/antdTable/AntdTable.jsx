import { Space, Table } from 'antd'
import { DeleteOutlined } from '@ant-design/icons'

const AntdTable = ({ data, handleDelete }) => {

    const columns = [
        {
            title: 'ID',
            dataIndex: 'id',
            key: 'id',
            render: (_, record) => (
                <Space size={'middle'}>
                    <a href={`/employee/${record.first_name}`} rel='noreferrer' className='table_link'>
                        {record.id}
                    </a>
                </Space>
            ),
        },
        {
            title: 'First Name',
            dataIndex: 'first_name',
            key: 'first_name'
        },
        {
            title: 'Last Name',
            dataIndex: 'last_name',
            key: 'last_name',
        },
        {
            title: 'Date of Birth',
            dataIndex: 'date_of_birth',
            key: 'date_of_birth',
        },
        {
            title: 'Address',
            dataIndex: 'address',
            key: 'address',
        },
        {
            title: 'Date of Joining',
            dataIndex: 'date_of_joining',
            key: 'date_of_joining',
        },
        {
            title: 'Salary',
            dataIndex: 'salary',
            key: 'salary',
            render: (salary) => (
                <Space size={'middle'}>
                    <p>
                        ${salary}
                    </p>
                </Space>
            ),
        },
        {
            title: 'Designation',
            dataIndex: 'designation',
            key: 'designation',
        },
        {
            title: 'Manager ID',
            dataIndex: 'manager_id',
            key: 'manager_id',
        },
        {
            title: 'Action',
            key: 'action',
            render: (_, record) => (
                <Space size={'middle'}>
                    <p className='table_link delete_link' onClick={() => handleDelete(record)}>
                        Delete <DeleteOutlined />
                    </p>
                </Space>
            ),
        },
    ];

    return (
        <div className='table'>
            <Table columns={columns} dataSource={data} />
        </div>
    )
}

export default AntdTable
