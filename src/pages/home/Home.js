import { projectFirestore } from '../../firebase/config';
import { useState, useEffect } from 'react';
// import { useFetch } from '../../hooks/useFetch';
import RecipeList from '../../components/RecipeList';

// import styles
import './Home.css';
export default function Home() {
  const [data, setData] = useState(null);
  const [isPending, setIsPending] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    setIsPending(true);

    projectFirestore
      .collection('recipes')
      .get()
      .then((snapshot) => {
        if (snapshot.empty) {
          setError('No recipes to load');
          setIsPending(false);
        } else {
          let results = [];
          snapshot.docs.forEach((doc) => {
            results.push({ id: doc.id, ...doc.data() });
          });
          setData(results);
          setIsPending(false);
        }
      })
      .catch((err) => {
        setError(err.message);
        setIsPending(false);
      });
  }, []);
  // const {
  //   data: recipes,
  //   error,
  //   isPending,
  // } = useFetch('http://localhost:3000/recipes');

  return (
    <div>
      {error && <p className='error'></p>}
      {isPending && <p className='loading'>Loading...</p>}
      {data && <RecipeList data={data} />}
    </div>
  );
}
