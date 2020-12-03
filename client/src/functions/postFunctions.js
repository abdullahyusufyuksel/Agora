import axios from 'axios';

export const getPostbyID = (postID) => {
    console.log(postID);
    return axios.get(`http://localhost:5000/post/${postID}`)
    .then(res => 
      res.data
    );
  };
