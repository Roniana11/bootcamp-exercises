const Tweeter = function () {
  let _posts = [
    {
      text: "First post!",
      id: "p1",
      comments: [
        { id: "c1", text: "First comment on first post!" },
        { id: "c2", text: "Second comment on first post!!" },
        { id: "c3", text: "Third comment on first post!!!" },
      ],
    },
    {
      text: "Aw man, I wanted to be first",
      id: "p2",
      comments: [
        {
          id: "c4",
          text: "Don't wory second poster, you'll be first one day.",
        },
        { id: "c5", text: "Yeah, believe in yourself!" },
        { id: "c6", text: "Haha second place what a joke." },
      ],
    },
  ];

  const getPosts = function () {
    return _posts;
  };

  const getPost = function (postId) {
    return _posts.find((post) => post.id === postId);
  };

  const addPost = function (text) {
    const randomId = Math.random();
    getPosts().push({ text: text, id: randomId, comments: [] });
  };

  const removePost = function (id) {
    const filteredPosts = _posts.filter((post) => post.id !== id);
    _posts =[...filteredPosts];
  };

  const addComment = function (postId, text) {
    const commentId = Math.random();
    const post = getPost(postId);
    post.comments.push({ id: commentId, text: text });
  };

  const removeComment = function (postId, commentId) {
    const post = getPost(postId);
    const filteredComments = post.comments.filter(comment => comment.id !== commentId);
    post.comments = [...filteredComments];
  };

  return { getPosts, addPost, removePost,addComment,removeComment };
};


const tweeter = Tweeter()

tweeter.addPost("This is my own post!")
console.log(tweeter.getPosts())
//Make sure your new post was added 

tweeter.removePost("p1")
console.log(tweeter.getPosts())


tweeter.addComment("p2","this is the worst post!");
console.log(tweeter.getPosts())

tweeter.removeComment("p2","c5");
console.log(tweeter.getPosts())