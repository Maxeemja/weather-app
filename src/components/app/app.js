import { useState } from 'react';
import MainBlock from '../mainBlock/mainBlock';
import {
    QueryClient,
    QueryClientProvider,
} from 'react-query';


const App = () => {
    // Queries
    
    const queryClient = new QueryClient({
        defaultOptions: {
          queries: {
            refetchOnWindowFocus: false,
          },
        },
    })
    const [cityId, setCityId] = useState(924938)
    const [tempMeasure, setTempMeasure] = useState('celsius')
    return (
        <div className="app">
            <QueryClientProvider client={queryClient}>
                <MainBlock city={cityId} setCity={setCityId} tempMeasure={tempMeasure} />
            </QueryClientProvider>
        </div>
        
    )
}


export default App;