import AppRouter from './routers/AppRouter';
import RecipeContexProvider from './context/RecipeContex';

function App() {
  return (
    <RecipeContexProvider>
      <AppRouter />
    </RecipeContexProvider>
  );
}

export default App;
