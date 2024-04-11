/* eslint-disable react/prop-types */

import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { useField, useFormikContext } from 'formik';


export default function ChoicesInput({ name, options, ...props }) {
  const { setFieldValue } = useFormikContext(); 
  const [field] = useField(name);

  const handleChange = (event) => {
    const { value } = event.target;
    setFieldValue(name, value);
  };

  return (
    <FormControl fullWidth>
      <InputLabel id={`${name}-label`}>{props.label}</InputLabel>
      <Select
        labelId={`${name}-label`}
        id={name}
        {...field}
        {...props}
        onChange={handleChange}
        value={field.value}
      >
        {options.map((option, i) => (
          <MenuItem key={i} value={option.value}>{option.label}</MenuItem>
        ))}
      </Select>
    </FormControl>
  );
}