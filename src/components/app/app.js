import { useState } from 'react';
import MainBlock from '../mainBlock/mainBlock';
import {
    QueryClient,
    QueryClientProvider,
} from 'react-query';
import SecondaryBlock from '../secondaryBlock/secondaryBlock';


const App = () => {
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
                <SecondaryBlock cityId={cityId} tempMeasure={tempMeasure} setTempMeasure={setTempMeasure}/>
            </QueryClientProvider>
        </div>   
    )
}


export default App;