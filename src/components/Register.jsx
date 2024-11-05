import PropTypes from 'prop-types';

const Register = ({openLogin}) => {
  return (
    <div>
    <h2 className='text-center text-2xl font-bold mb-4 text-mainTextColor'>Sign Up</h2>
    <form action="">

    <div className='mb-4'>
          <label htmlFor="" className='block text-gray-700'>Name</label>
          <input type="text" className='w-full px-3 py-2 border' placeholder='Ener a name'/>
      </div>

      <div className='mb-4'>
          <label htmlFor="" className='block text-gray-700'>Email</label>
          <input type="email" className='w-full px-3 py-2 border' placeholder='Ener a email'/>
      </div>

      <div className='mb-4'>
          <label htmlFor="">Password</label>
          <input type="password" className='w-full px-3 py-2 border' placeholder='Enter a password'/>
      </div>
     
      <div className='mb-4'>
          <button type='submit' className='rounded w-full bg-red-700 text-white py-2'>Sign Up</button>
      </div>
    </form>
    <div className='text-center'>
      <span className='text-gray-700'>Already have an Account?</span>
      <button className='text-blue-800' onClick={openLogin}>Login</button>
    </div>
  </div>
  )
}

Register.propTypes = {
    openLogin: PropTypes.func.isRequired
};
export default Register
