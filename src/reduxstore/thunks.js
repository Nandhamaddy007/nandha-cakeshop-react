import axios from 'axios';

export function getCakes() {
  return function (dispatch) {
    return axios({
      url: 'https://apifromashu.herokuapp.com/api/allcakes',
      method: 'GET',
    })
      .then((res) => {
        dispatch({
          type: 'INIT_CAKES',
          payload: res.data.data,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };
}

export function loginThunk(user) {
  return (dispatch) => {
    axios.post('https://apifromashu.herokuapp.com/api/login', user).then(
      (res) => {
        console.log(res);
        if (res.data.token) {
          localStorage.token = res.data.token;
          localStorage.role = res.data.role;
          localStorage.name = res.data.name;
          dispatch({
            type: 'LOGIN',
            payload: true,
          });
        }
      },
      (err) => {
        console.log(err);
        alert('Invalid Credentials');
      }
    );
  };
}
