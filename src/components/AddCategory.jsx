import { useState } from 'react';



const AddCategory = ({onNewCategory}) => {

  const [inputValue, setInputValue] = useState('');

  const inputChanged = (e) => {
    e.preventDefault();
    setInputValue(e.target.value);
 }

 const onSubmit = (e) => {
    e.preventDefault();
    let inputValue2 = inputValue.trim();
    if(inputValue2.length <=1) return;
    onNewCategory(inputValue2);
    setInputValue(''); 
 }

  return (
    <form onSubmit={onSubmit}>
      <input type="text"
      placeholder="Look for gifs"
      value={inputValue}
      onChange={inputChanged}
       />
    </form>
  )
}

export default AddCategory