//Packages
import React from "react";

//Components
import Comment from "./Comment/Comment";

//Styles
import {
  CommentsList,
  CommentsSort,
  CommentsStyled,
  CommentsTitleContainer,
} from "./Comments.styled";

const Comments: React.FC = () => {
  return (
    <CommentsStyled>
      <CommentsTitleContainer>
        <h3>Комментарии</h3>
        <CommentsSort>Сортировка</CommentsSort>
      </CommentsTitleContainer>

      <CommentsList>
        <Comment
          userName={"Freedom"}
          userAvatar={
            "https://avatars.mds.yandex.net/i?id=285678931608e370f692c9918faf71f9e986d025-9234089-images-thumbs&n=13"
          }
          rating={5}
          text={
            "lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vel dolor vel metus ultricies condim"
          }
        />
        <Comment
          userName={"didish"}
          userAvatar={
            "https://avatars.mds.yandex.net/i?id=d9c94127750488ba174691010e75f1179d00aa50-10261390-images-thumbs&n=13"
          }
          rating={4}
          text={"охуенно охуенно охуенно"}
        />
      </CommentsList>
    </CommentsStyled>
  );
};

export default Comments;
