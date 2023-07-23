window.createPost = function () {

  let postTitle = document.querySelector("#postTitle").value;
  let postText = document.querySelector("#postText").value;

  // baseUrl/api/v1/post
  axios.post(`/api/v1/post`, {
      title: postTitle,
      text: postText
  })
      .then(function (response) {
          console.log(response.data);
          document.querySelector("#result").innerHTML = response.data;
          getAllPost();
      })
      .catch(function (error) {
          // handle error
          console.log(error.data);
          document.querySelector("#result").innerHTML = "error in post submission"
      })
}

window.getAllPost = function () {


  // baseUrl/api/v1/post
  axios.get(`/api/v1/posts`)
      .then(function (response) {
          console.log(response.data);

          document.querySelector("#posts").innerHTML = JSON.stringify(response.data);
      })
      .catch(function (error) {
          // handle error
          console.log(error.data);
          document.querySelector("#result").innerHTML = "error in post submission"
      })
}



