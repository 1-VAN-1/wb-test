import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import RouterBreadcrumbs from '@/components/RouterBreadcrumbs';
import '@/App.scss';
import Catalog from '@/components/Catalog';
import CategoryHeader from './components/CategoryHeader';

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="App">
        <RouterBreadcrumbs />
        <CategoryHeader />
        <Catalog />
      </div>
    </QueryClientProvider>
  );
}

export default App;
