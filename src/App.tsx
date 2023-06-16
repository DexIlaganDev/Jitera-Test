import {QueryClientProvider, QueryClient} from '@tanstack/react-query';
import JiteraPage from '@/pages/Jitera';


const queryClient = new QueryClient();

function App() {

  return (
    <QueryClientProvider client={queryClient}>
      <JiteraPage />    
    </QueryClientProvider>
      
  )
}

export default App
