import { Formik, Field, Form, FormikHelpers, FormikProps } from 'formik';
import * as Yup from 'yup';

import { axios } from '@/lib/axios';

interface Values {
  fullName: string;
  email: string;
  phoneNumber: string;
  message: string;
}

const ContactSchema = Yup.object().shape({
  fullName: Yup.string()
    .min(2, 'Name must be between 2 and 50 characters')
    .required('Required'),
  email: Yup.string().email('Invalid email').required('Required'),
  phoneNumber: Yup.string(),
  message: Yup.string().required('Required'),
});

const handleSubmit = async (
  values: Values,
  { resetForm }: FormikHelpers<Values>
) => {
  try {
    await axios.post('/api/sendMail', values);
    resetForm();
    //toast success
  } catch (error) {
    console.log(error);
    resetForm();
    //toast failuer
  }
};

export const ContactForm = () => {
  return (
    <div className='relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-blueGray-200'>
      <Formik
        initialValues={{
          fullName: '',
          email: '',
          phoneNumber: '',
          message: '',
        }}
        validationSchema={ContactSchema}
        onSubmit={handleSubmit}>
        {({ errors, touched, isSubmitting }: FormikProps<Values>) => (
          <Form className='flex-auto p-5 lg:p-10'>
            <h4 className='text-2xl font-semibold'>Want to work with us?</h4>
            <p className='leading-relaxed mt-1 mb-4 text-blueGray-500'>
              Complete this form and we will get back to you in 24 hours.
            </p>
            <div className='relative w-full mb-3 mt-8'>
              <label
                className='block uppercase text-blueGray-600 text-xs font-bold mb-2'
                htmlFor='fullName'>
                Full Name
              </label>
              <Field
                type='text'
                className={
                  'border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150' +
                  (errors.fullName && touched.fullName
                    ? ' outline outline-3 outline-red-600'
                    : '')
                }
                placeholder='Full Name'
                id='fullName'
                name='fullName'
              />
              {errors.fullName && touched.fullName && (
                <p className='text-red-600 text-xs text-right pt-2 font-bold'>
                  {errors.fullName}
                </p>
              )}
            </div>

            <div className='relative w-full mb-3'>
              <label
                className='block uppercase text-blueGray-600 text-xs font-bold mb-2'
                htmlFor='email'>
                Email
              </label>
              <Field
                type='email'
                className={
                  'border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150' +
                  (errors.email && touched.email
                    ? ' outline outline-3 outline-red-600'
                    : '')
                }
                placeholder='Email'
                id='email'
                name='email'
              />
              {errors.email && touched.email && (
                <p className='text-red-600 text-xs text-right pt-2 font-bold'>
                  {errors.email}
                </p>
              )}
            </div>

            <div className='relative w-full mb-3'>
              <label
                className='block uppercase text-blueGray-600 text-xs font-bold mb-2'
                htmlFor='phoneNumber'>
                Phone Number
              </label>
              <Field
                className={
                  'border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150' +
                  (errors.phoneNumber && touched.phoneNumber
                    ? ' outline outline-3 outline-red-600'
                    : '')
                }
                placeholder='(801) 555-5555'
                id='phoneNumber'
                name='phoneNumber'
              />
              {errors.phoneNumber && touched.phoneNumber && (
                <p className='text-red-600 text-xs text-right pt-2 font-bold'>
                  {errors.phoneNumber}
                </p>
              )}
            </div>

            <div className='relative w-full mb-3'>
              <label
                className='block uppercase text-blueGray-600 text-xs font-bold mb-2'
                htmlFor='message'>
                Message
              </label>
              <Field
                id='message'
                name='message'
                as='textarea'
                rows={4}
                cols={80}
                className={
                  'border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full' +
                  (errors.message && touched.message
                    ? ' outline outline-3 outline-red-600'
                    : '')
                }
                placeholder='Type a message...'
              />
              {errors.message && touched.message && (
                <p className='text-red-600 text-xs text-right pt-2 font-bold'>
                  {errors.message}
                </p>
              )}
            </div>
            <div className='text-center mt-6'>
              <button
                className={
                  'bg-blueGray-800 text-white active:bg-blueGray-600 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150 ' +
                  (isSubmitting ? 'bg-blueGray-600' : '')
                }
                disabled={isSubmitting}
                type='submit'>
                {isSubmitting ? 'Sending ...' : 'Send Message'}
              </button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};
