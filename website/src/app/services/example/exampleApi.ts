import apisauce from 'apisauce';

const create = () => {
  const api = apisauce.create({
    baseURL: process.env.REACT_APP_EXAMPLE_API,
    // 10 second timeout...
    timeout: 10000,
    headers: {
      Accept: 'application/json',
      'Content-type': 'application/json; charset=UTF-8',
    },
  });

  /* Posts */
  const fetchPosts = () => api.get('/posts');

  return {
    fetchPosts,
    setHeader: api.setHeader,
  };
};

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  create,
};
