import React from 'react';
import Proptypes from 'prop-types';

function ContactItemImage({ imageUrl }) {
 return (
   <div className="contact-item__image">
     <img src={imageUrl} alt="contact avatar"/>
   </div>
 );
}

ContactItemImage.propTypes ={
  imageUrl: Proptypes.string.isRequired,
}
export default ContactItemImage;