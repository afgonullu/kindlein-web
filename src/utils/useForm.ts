import { FormEvent, useState } from "react";

export const useForm = (callback: (arg0: { variables: any }) => void, initialState: any) => {
  const [values, setValues] = useState(initialState);

  const onSubmit = (event: FormEvent) => {
    event.preventDefault();
    callback({ variables: values });
  };

  const onChange = (event: { target: { name: string; value: string } }) => {
    setValues({ ...values, [event.target.name]: event.target.value });
  };

  return { onChange, onSubmit, values };
};
