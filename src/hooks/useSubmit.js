import {useState} from "react";
import emailjs from 'emailjs-com'

/**
 * This is a custom hook that can be used to send form results to an email using the EmailJS API
 */
const useSubmit = () => {
  const [isLoading, setLoading] = useState(false);
  const [response, setResponse] = useState(null);

  const submit = async (data) => {
    setLoading(true);
    try {
      emailjs.send(
        process.env.REACT_APP_EMAILJS_SERVICE_ID,
        process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
        {
          from_name: data.firstName,
          from_email: data.email,
          type: data.type,
          message: data.comment,
        },
        process.env.REACT_APP_EMAILJS_USER_ID
      );

      setResponse({
        type: 'success',
        message: `Thanks for your submission ${data.firstName}, I will get back to you shortly!`,
      });
    } catch (error) {
      console.error('EmailJS Error:', error);
      setResponse({
        type: 'error',
        message: 'Something went wrong, please try again later!',
      })
    } finally {
      setLoading(false);
    }
  };

  return { isLoading, response, submit };
}

export default useSubmit;
