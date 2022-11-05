import TreeView from '@mui/lab/TreeView';
import TreeItem from '@mui/lab/TreeItem';
import { AddCircleOutline, RemoveCircleOutline } from '@mui/icons-material';

const Tree = () => {
  return (
    <TreeView
        aria-label="multi-select"
        defaultCollapseIcon={<RemoveCircleOutline />}
        defaultExpandIcon={<AddCircleOutline />}
        multiSelect
        sx={{ height: 300, flexGrow: 1, maxWidth: 500, overflowY: 'auto' }}
    >
        <TreeItem nodeId="1" label="Employee1">
            <TreeItem nodeId="2" label="Employee2" />
            <TreeItem nodeId="2" label="Employee3">
                <TreeItem nodeId="3" label="Employee5" />
                <TreeItem nodeId="3" label="Employee6" />
            </TreeItem>
            <TreeItem nodeId="2" label="Employee4" />
            <TreeItem nodeId="2" label="Employee7">
                <TreeItem nodeId="4" label="Employee8" />
                <TreeItem nodeId="4" label="Employee9">
                    <TreeItem nodeId="5" label="Employee10" />
                    <TreeItem nodeId="5" label="Employee11" />
                </TreeItem>
                <TreeItem nodeId="4" label="Employee12" />
                <TreeItem nodeId="4" label="Employee13" />
            </TreeItem>
        </TreeItem>
    </TreeView>
  );
}

export default Tree;