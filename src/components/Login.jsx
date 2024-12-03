import PropTypes from 'prop-types';

const Login = ({openSignUp}) => {
  return (
    <div>
      <h2 className='text-center text-2xl font-bold mb-4 text-mainTextColor'>Login</h2>
      <form action="">
        <div className='mb-4'>
            <label htmlFor="" className='block '>Email</label>
            <input type="email" className='w-full px-3 py-2 border' placeholder='Ener a email'/>
        </div>

        <div className='mb-4'>
            <label htmlFor="">Password</label>
            <input type="password" className='w-full px-3 py-2 border' placeholder='Enter a password'/>
        </div>
        <div className='mb-4 flex items-center justify-between'>
            <label className='inline-flex items-center'>
                <input type="checkbox" className='form-checkbox'/>
                <span className='ml-2'>Remmeber Me</span>
            </label>
            <a href="" className='text-red-700'>Forgot Password?</a>
        </div>
        <div className='mb-4'>
            <button type='submit' className='rounded w-full bg-blue-700 text-white py-2 hover:bg-blue-800'>Login</button>
        </div>
      </form>
      <div className='text-center'>
        <span >Do not have an Account?</span>
        <button className='text-red-800' onClick={openSignUp}>Sign Up</button>
      </div>
    </div>
  )
}

Login.propTypes = {
    openSignUp: PropTypes.func.isRequired};
export default Login
