import axios from 'axios';


export const getPostbyID = (postID) => {
    axios.get(`http://localhost:5000/post/${postID}`)
    .then(res => {
      return res.data
    });
  };
