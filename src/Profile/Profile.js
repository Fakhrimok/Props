import React from 'react';
import PropTypes from 'prop-types';
const Profile = ({fullName,profession, bio, alertMe,children}) => {
  const myStyle = {
    color: "white",
    backgroundColor: "DodgerBlue",
    padding: "10px",
    fontFamily: "Sans-Serif",
    borderRadius: 15,
  };  
  const styleInput={color:"red"}

  return (
    <div> 
    {children}      
    <p style={myStyle}> Hello my name is <span style={{color:"blue"}}> {fullName}</span></p>
    <p style={myStyle}> I was a <span style={styleInput}>{bio}</span> and hope to become a <span style={styleInput}>{profession}</span></p>
    <button  onClick={() => alertMe()}>Click me</button>
    </div>
   
  );
};
Profile.defaultProps={
    name:"foulen",
    lastname: "ben foulen"
    
}
Profile.propTypes={
    name: PropTypes.string,
    lastname: PropTypes.string,

}
export default Profile
