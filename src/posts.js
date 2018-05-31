import { create } from './util'

import { $, create } from "./global";
import axios from "axios";

export let createPost = postObject => {
  let col = create({ class: "col-md-6 offset-md-3 mt-3" });
  let card = create({ class: "card mt-3" });

  let cardBody = create({ class: "card-body" });

  let postTop = createPostTop(postObject);
  cardBody.appendChild(postTop);

  let postBody = createPostBody(postObject);
  cardBody.appendChild(postBody);

  let hr = create("hr");
  cardBody.appendChild(hr);

  let postComment = createPostComments(postObject);
  cardBody.appendChild(postComment);

  card.appendChild(cardBody);

  col.appendChild(card);
  return col;
};

function createPostTop(postObject) {
  let postTop = create({ class: "d-flex align-items-center" });

  let avatar = create({ class: "avatar mr-2" });
  let avatarP = create("p", { id: "dynamicPostAvatar" });
  avatarP.innerHTML = postObject.user.avatar;
  avatar.appendChild(avatarP);
  postTop.appendChild(avatar);

  let userInfoPost = create({ class: "userInfoInPost" });
  let userInfoInPostp1 = create("p", {
    class: "medium-para",
    id: "dynamicPostUser"
  });
  userInfoInPostp1.innerHTML = postObject.user.name;
  userInfoPost.appendChild(userInfoInPostp1);
  let userInfoInPostp2 = create("p", {
    class: "small-para",
    id: "dynamicPostTime"
  });
  userInfoInPostp2.innerHTML = new Date(postObject.createdTime).toISOString();
  userInfoPost.appendChild(userInfoInPostp2);
  postTop.appendChild(userInfoPost);

  return postTop;
}

function createPostBody(postObject) {
  let postBody = create({ class: "post-body my-3" });
  let postContent = create("p", { class: "text-justify" });
  postContent.innerHTML = postObject.postBody;
  postContent.style.fontFamily = postObject.style.font;
  postContent.style.fontSize = postObject.style.size + "px";
  postBody.appendChild(postContent);

  return postBody;
}

function createPostComments(postObject) {
  let commentSection = create({ class: "comment-section" });

  let likeCommentBtn = create({ class: "like-comment-btn" });
  let likeBtn = createBtn("Likes", 10);
  likeCommentBtn.appendChild(likeBtn);
  let commentBtn = createBtn("Comments", 40);
  likeCommentBtn.appendChild(commentBtn);
  commentSection.appendChild(likeCommentBtn);

  let hr = create("hr");
  commentSection.appendChild(hr);

  let commentBody = create({ class: "comment-body my-3 invisible" });
  if (postObject.comments) {
    postObject.comments.forEach(comment => {
      commentBody.appendChild(createSingleComment(comment));
    });
  }
  commentSection.appendChild(commentBody);
  let commentInput = createCommentInput(commentBody, postObject);
  commentBody.appendChild(commentInput);

  commentBtn.addEventListener("click", function() {
    commentBody.classList.toggle("invisible");
    console.log("I am listening");
  });

  //   commentSection.appendChild(commentInput)
  return commentSection;
}

function createCommentInput(parent, postObject) {
  let input = create("input", {
    type: "text",
    placeholder: "Enter Comment",
    class: "form-control mt-3"
  });

  console.log("Before EventListener", postObject);

  input.addEventListener("keypress", function(event) {
    if (event.keyCode === 13) {
      let comment = {
        username: "HM Nayem",
        body: event.target.value
      };

      if (postObject.comments) {
        postObject.comments.push(comment);
      } else {
        postObject.comments = [comment];
      }

      console.log(postObject);

      axios
        .put(`http://localhost:3000/posts/${postObject.id}`, postObject)
        .then(res => {
          let commentElement = createSingleComment(comment);
          parent.appendChild(commentElement);
        })
        .catch(err => console.log(err));
    }
  });

  return input;
}

function createSingleComment(comment) {
  let commentElement = create({ class: "comment d-flex" });

  let commentAvatar = create({ class: "comment-avater mr-2" });
  let commentAvatarP = create("p");
  commentAvatarP.innerHTML = comment.username.charAt(0);
  commentAvatar.appendChild(commentAvatarP);
  commentElement.appendChild(commentAvatar);

  let commentText = create({ class: "comment-text" });
  let commentTextP = create("p");
  commentTextP.innerHTML = `
        <span class="comment-user-name">${comment.username}</span>
        <span class="comment-full-text">${comment.body}</span>
    `;
  commentText.appendChild(commentTextP);

  commentElement.appendChild(commentText);

  return commentElement;
}

function createBtn(name, count) {
  let btn = create("button", { class: "btn mx-3" });
  btn.innerHTML = name;

  if (count) {
    let span = create("span", { class: "pill ml-1" });
    span.innerHTML = count;
    btn.appendChild(span);
  }

  return btn;
}


