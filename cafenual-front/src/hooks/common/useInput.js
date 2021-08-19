  
import { Dispatch, SetStateAction, useCallback, useState } from 'react';


export default function useInput(initialValue) {
  const [value, setValue] = useState(initialValue);

  const onChange = useCallback((e) => {
      console.log(e.target.value)
    setValue(e.target.value);
  }, []);

  return [value, onChange, setValue];
}