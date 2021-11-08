import { projectFirestore } from '../../firebase/config';
import { useState, useRef, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
// import { useFetch } from '../../hooks/useFetch';

// Styles
import './Create.css';

export default function Create() {
  const [title, setTitle] = useState('');
  const [method, setMethod] = useState('');
  const [cookingTime, setCookingTime] = useState('');
  const [newIngredient, setNewIngredient] = useState('');
  const [ingredients, setIngredients] = useState([]);
  const ingredientInput = useRef(null);
  const history = useHistory();

  // const { postData, data, error } = useFetch(
  //   'http://localhost:3000/recipes',
  //   'POST'
  // );

  const handleSubmit = async (e) => {
    e.preventDefault();
    const doc = {
      title,
      ingredients,
      method,
      cookingTime: cookingTime + ' minutes ',
    };

    try {
      await projectFirestore.collection('recipes').add(doc);
    } catch (err) {
      console.log(err);
    }
  };

  const handleAdd = (e) => {
    e.preventDefault();
    const ing = newIngredient.trim();

    // This first checks to make sure user doesn't enter a blank input
    // Then it checks to see if the ingredient entered is already in the array
    // If check passes, update the state using prev, and add the ing to the aray
    if (ing && !ingredients.includes(ing)) {
      setIngredients((prevIngredients) => [...prevIngredients, ing]);
    }
    setNewIngredient('');
    ingredientInput.current.focus();
  };

  // redirect user after submit, fires once initially and takes the data as a dependency to update any time it changes
  useEffect(() => {
    if (data) {
      history.push('/');
    }
  }, [data]);

  return (
    <div className='create'>
      <h1 className='page-title'>Add a new recipe</h1>

      <form onSubmit={handleSubmit}>
        <label>
          <span>Recipe title:</span>
          <input
            type='text'
            onChange={(e) => setTitle(e.target.value)}
            value={title}
            required
          />
        </label>

        <label>
          <span>Ingredients</span>
          <div className='ingredients'>
            <input
              type='text'
              onChange={(e) => setNewIngredient(e.target.value)}
              value={newIngredient}
              ref={ingredientInput}
            />
            <button onClick={handleAdd} className='btn'>
              Add
            </button>
          </div>
        </label>
        <p>
          Current Ingredients:{' '}
          {ingredients.map((i) => (
            <em key={i}>{i}</em>
          ))}
        </p>

        <label>
          <span>Recipe Method:</span>
          <textarea
            onChange={(e) => setMethod(e.target.value)}
            value={method}
          ></textarea>
        </label>

        <label>
          <span>Cooking Time (mins)</span>
          <input
            type='number'
            onChange={(e) => setCookingTime(e.target.value)}
            value={cookingTime}
            required
          />
        </label>

        <button className='btn'>Submit</button>
      </form>
    </div>
  );
}
