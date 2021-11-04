import { useFetch } from '../../hooks/UseFetch';
import RecipeList from '../../components/RecipeList';
// import styles
import './Home.css';
export default function Home() {
  const {
    data: recipes,
    error,
    isPending,
  } = useFetch('http://localhost:3000/recipes');

  console.log({ recipes });

  return (
    <div>
      {error && <p className='error'></p>}
      {isPending && <p className='loading'>Loading...</p>}
      {recipes && <RecipeList recipes={recipes} />}
    </div>
  );
}
