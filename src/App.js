import React, { useState } from 'react';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/core/Autocomplete';
import Button from '@material-ui/core/Button';

const names = ['Apple', 'Banana', 'Cherry', 'Durian','Elderberry'];

const GreetingForm = () => {
  const [name, setName] = useState('');
  const [favourite, setFavourite] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(`Hello ${name}! Your favourite is ${favourite}.`);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <TextField
          label="Name"
          value={name}
          onChange={(event) => setName(event.target.value)}
        />
      </div>
      <div>
        <Autocomplete
          options={names}
          getOptionLabel={(option) => option}
          renderInput={(params) => <TextField {...params} label="Favourite" />}
          value={favourite}
          onChange={(value) => setFavourite(value)}
        />
      </div>
      <Button type="submit" variant="contained" color="primary">
        Submit
      </Button>
    </form>
  );
};

export default GreetingForm;
