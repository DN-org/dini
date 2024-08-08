import React from "react";

import {
  CommentsContainer,
  SortContainer,
  CommentsList,
  Comment,
  Profile,
  ProfileName,
  CommentText,
} from "./Comments.styled";

const Comments: React.FC = () => {
  return (
    <CommentsContainer>
      <SortContainer>
        <h3>Комментарии</h3>
      </SortContainer>

      <CommentsList>
        <Comment>
          <Profile>
            <img
              src="https://sun9-63.userapi.com/s/v1/ig2/hOfQcEBuG0AkLsaC1vJvxX9LgC3E_ml3IoHqIq472p__PgTHMhHc61ssnb4L-3JlGOeXaFyyLKT1D-VFXHurcwGo.jpg?quality=96&as=32x40,48x60,72x90,108x135,160x200,240x300,360x450,480x600,540x675,640x800,720x900,1080x1350&from=bu&u=obT0wpGpkLfgVBq07xaTCBiDXTKJF3_yd8-PhcJQSoU&cs=646x807"
              //вторая фотка
              //https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT52Au6QZaz9NlRAC0pjDpTooUtHY92k3ANpw&s
              alt=""
            />
            <ProfileName>
                IvanZolo2004
            </ProfileName>
          </Profile>
          <CommentText></CommentText>
        </Comment>
      </CommentsList>
    </CommentsContainer>
  );
};

export default Comments;
