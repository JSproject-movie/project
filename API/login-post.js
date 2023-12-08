// json-server login-post.json -m ./node_modules/json-server-auth
let token = "";
let id = "";
// 註冊
function signUp() {
  axios
    .post(`https://testrender-tga5.onrender.com/signup`, {
      email: "user10@mail.com",
      password: "user10",
      lastName: "Hogan",
      firstName: "Freya",
      nickName: "Freya",
      gender: "female",
      role: "user",
    })
    .then(function (response) {
      console.log(response.data);
    })
    .catch(function (error) {
      console.log(error.response);
    });
}
// 登入
function login() {
  axios
    .post(`https://testrender-tga5.onrender.com/login`, {
      email: "user06@mail.com",
      password: "Users006",
    })
    .then(function (response) {
      token = response.data.accessToken;
      id = response.data.user.id;
      console.log(response);
    })
    .catch(function (error) {
      console.log(error.response);
    });
}
// 修改密碼
function upDatePassword() {
  axios
    .patch(
      `https://testrender-tga5.onrender.com/users/5`,
      {
        password: "Users005",
      },
      {
        headers: {
          authorization: `Bearer ${token}`,
        },
      }
    )
    .then(function (response) {
      token = response.data.accessToken;
      id = response.data.user.id;
    })
    .catch(function (error) {
      console.log(error.response);
    });
}
// 發布影評
// 不用另外代userId的寫法：https://testrender-tga5.onrender.com/users/${id}/posts
function addPost() {
  axios
    .post(
      `https://testrender-tga5.onrender.com/posts`,
      {
        movieId: 1,
        spoiler: "false",
        title: "科學與道德的交織",
        content: "TTTTTTest",
        userId: id,
      },
      {
        headers: {
          authorization: `Bearer ${token}`,
        },
      }
    )
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error.response);
    });
}
// 刪除影評
let delPostId = 2;
function delPost() {
  axios
    .delete(
      `https://testrender-tga5.onrender.com/posts/${delPostId}`,
      {},
      {
        headers: {
          authorization: `Bearer ${token}`,
        },
      }
    )
    .then(function (response) {
      token = response.data.accessToken;
      id = response.data.user.id;
    })
    .catch(function (error) {
      console.log(error.response);
    });
}
// 修改影評
function editPost() {
  axios
    .patch(
      `https://testrender-tga5.onrender.com/posts`,
      {},
      {
        headers: {
          authorization: `Bearer ${token}`,
        },
      }
    )
    .then(function (response) {
      token = response.data.accessToken;
      id = response.data.user.id;
    })
    .catch(function (error) {
      console.log(error.response);
    });
}
// 新增留言
function addComment() {
  axios
    .post(
      `https://testrender-tga5.onrender.com/comments`,
      {
        movieId: 1,
        postId: 1,
        spoiler: "false",
        comment: "中肯的評論！",
        userId: id,
      },
      {
        headers: {
          authorization: `Bearer ${token}`,
        },
      }
    )
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error.response);
    });
}
// 刪除留言
function delComment() {
  axios
    .delete(
      `https://testrender-tga5.onrender.com/${delCommentId}`,
      {},
      {
        headers: {
          authorization: `Bearer ${token}`,
        },
      }
    )
    .then(function (response) {
      token = response.data.accessToken;
      id = response.data.user.id;
    })
    .catch(function (error) {
      console.log(error.response);
    });
}
// 修改留言
function editComment() {
  axios
    .patch(
      `https://testrender-tga5.onrender.com/comments`,
      {},
      {
        headers: {
          authorization: `Bearer ${token}`,
        },
      }
    )
    .then(function (response) {
      token = response.data.accessToken;
      id = response.data.user.id;
    })
    .catch(function (error) {
      console.log(error.response);
    });
}
// 聯絡我們
function addContact() {
  axios
    .post(
      `https://testrender-tga5.onrender.com/contacts`,
      {
        name: "Tom",
        email: "user05@mail.com",
        phoneNumber: "0912345678",
        EventTime: "01/01/2023",
        issue: "意見回饋",
        issueContent: "希望電影介紹能更詳細",
        userId: id,
      },
      {
        headers: {
          authorization: `Bearer ${token}`,
        },
      }
    )
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error.response);
    });
}

// 檢舉影評
function reportPost() {
  axios
    .post(
      `https://testrender-tga5.onrender.com/reportPosts`,
      {
        postId: 1,
        reportReason: "惡意劇透",
        userId: id,
      },
      {
        headers: {
          authorization: `Bearer ${token}`,
        },
      }
    )
    .then(function (response) {
      token = response.data.accessToken;
      id = response.data.user.id;
    })
    .catch(function (error) {
      console.log(error.response);
    });
}
// 檢舉留言
function reportComment() {
  axios
    .post(
      `https://testrender-tga5.onrender.com/reportComments`,
      {
        commentId: 1,
        reportReason: "散布明顯無意義之內容",
        userId: id,
      },
      {
        headers: {
          authorization: `Bearer ${token}`,
        },
      }
    )
    .then(function (response) {
      token = response.data.accessToken;
      id = response.data.user.id;
    })
    .catch(function (error) {
      console.log(error.response);
    });
}
// 對檢舉影評提出申訴
function appealPost() {
  axios
    .post(
      `https://testrender-tga5.onrender.com/appealposts`,
      {
        email: "user05@mail.com",
        beReportReason: "惡意劇透",
        reportPostId: 1,
        appealContent: "我認為這則影評並無劇透",
        userId: id,
      },
      {
        headers: {
          authorization: `Bearer ${token}`,
        },
      }
    )
    .then(function (response) {
      token = response.data.accessToken;
      id = response.data.user.id;
    })
    .catch(function (error) {
      console.log(error.response);
    });
}
// 對檢舉留言提出申訴
function appealComment() {
  axios
    .post(
      `https://testrender-tga5.onrender.com/appealComments`,
      {
        email: "user05@mail.com",
        beReportReason: "散布明顯無意義之內容",
        reportCommentId: 1,
        appealContent: "我認為這則留言並無問題",
        userId: id,
      },
      {
        headers: {
          authorization: `Bearer ${token}`,
        },
      }
    )
    .then(function (response) {
      token = response.data.accessToken;
      id = response.data.user.id;
    })
    .catch(function (error) {
      console.log(error.response);
    });
}
