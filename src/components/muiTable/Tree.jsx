import TreeView from '@mui/lab/TreeView';
import TreeItem from '@mui/lab/TreeItem';
import { AddCircleOutline, RemoveCircleOutline } from '@mui/icons-material';

const Tree = () => {
  return (
    <TreeView
        aria-label="multi-select"
        defaultCollapseIcon={<RemoveCircleOutline style={{ fontSize: '26px', color: '#1775e5' }}/>}
        defaultExpandIcon={<AddCircleOutline style={{ fontSize:'26px', color: '#1775e5' }}/>}
        multiSelect
        className='tree'
        sx={{ height: 300, flexGrow: 1, maxWidth: 500, overflowY: 'auto' }}
    >
        <TreeItem nodeId="1" label="Employee1" className='node' style={{ fontSize: '32px' }}>
            <TreeItem nodeId="2" label="Employee2" />
            <TreeItem nodeId="2" label="Employee3" className='node'>
                <TreeItem nodeId="4" label="Employee5" />
                <TreeItem nodeId="4" label="Employee6" />
            </TreeItem>
            <TreeItem nodeId="3" label="Employee4" />
            <TreeItem nodeId="3" label="Employee7" className='node'>
                <TreeItem nodeId="5" label="Employee8" />
                <TreeItem nodeId="6" label="Employee9" className='node'>
                    <TreeItem nodeId="7" label="Employee10" />
                    <TreeItem nodeId="7" label="Employee11" />
                </TreeItem>
                <TreeItem nodeId="5" label="Employee12" />
                <TreeItem nodeId="5" label="Employee13" />
            </TreeItem>
        </TreeItem>
    </TreeView>
  );
}

export default Tree;
