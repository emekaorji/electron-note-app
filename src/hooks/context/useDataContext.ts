import { DataContext } from 'providers/dataProvider';
import { useContext } from 'react';

const useDataContext = () => useContext(DataContext);

export default useDataContext;
