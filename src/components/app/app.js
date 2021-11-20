import { useState } from 'react';
import MainBlock from '../mainBlock/mainBlock';
import SecondaryBlock from '../secondaryBlock/secondaryBlock';
import {
    QueryClient,
    QueryClientProvider,
} from 'react-query';


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

    const convertToFahrengeit = (value) => {
        return `${(value * 1.8 + 32).toFixed(0)}°F`;
    }

    return (
        <div className="app">
            <QueryClientProvider client={queryClient}>
                <MainBlock 
                    city={cityId} 
                    convertToFahrengeit={convertToFahrengeit} 
                    setCity={setCityId} 
                    tempMeasure={tempMeasure} />
                <SecondaryBlock 
                    cityId={cityId} 
                    convertToFahrengeit={convertToFahrengeit} 
                    tempMeasure={tempMeasure} 
                    setTempMeasure={setTempMeasure}/>
            </QueryClientProvider>
        </div>   
    )
}


export default App;