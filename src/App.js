import React, { useState } from 'react';

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [acceptedTerms, setAcceptedTerms] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    localStorage.setItem('email', email);
    localStorage.setItem('password', password);
    setEmail('');
    setPassword('');
    setAcceptedTerms(false);
    console.log(email,password)
  };

  return (
    <form onSubmit={handleSubmit}>
       <img alt="img" src="https://drive.google.com/uc?export=view&id=1hvRAGrdq0SqFBZApx2--IcuDf-DOmOBH"/><br/>
      <label>Email</label><br/>
        <input
          type="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          style={{
            borderRadius: '10px',
            height: '25px',
            width: '250px',
          }} />
      
      <br /><br/>
      <label> Password </label><br/>
        <input
          type="password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
          style={{
            borderRadius: '10px',
            height: '25px',
            width: '250px',
          }}
        />
     
      <br /><br/><br/>
      <label>
        <input
          type="checkbox"
          checked={acceptedTerms}
          onChange={() => setAcceptedTerms(!acceptedTerms)}
        /><span style={{ fontFamily: 'Arial', fontSize: '12px' }}>
        By creating or logging into an account you are agreeing with our</span><span style={{ fontFamily: 'Arial', fontSize: '12px',fontWeight: 'bold',
          fontSize: '13px' }}> Terms & conditions and policy policy's</span>
      </label>
     
      <br /><br/><br/>
      <button style={{
          borderRadius: '13px',
          height: '35px',
          width: '250px',
          background: '#0000FF',
          color: '#FFF',
          fontWeight: 'bold',
          fontSize: '15px',
         
        }} type="submit" disabled={!acceptedTerms}>Next</button>
        
    </form>
  );
};

export default LoginForm;
