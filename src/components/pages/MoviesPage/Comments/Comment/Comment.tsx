import React from "react";
import {
  CommentStarContainer,
  CommentStyled,
  CommentText,
  CommentUserInfoChildContainer,
  CommentUserInfoContainer,
  CommentUserLogoContainer,
  CommentUserName,
} from "./Comment.styled";
import StarIcon from "@mui/icons-material/Star";

interface CommentProps {
    userName: string;
    userAvatar: string;
    rating: number; // предполагается, что рейтинг передается числом
    text: string;
  }

  const Comment: React.FC<CommentProps> = ({ userName, userAvatar, rating, text }) => {
    return (
      <CommentStyled>
        <CommentUserInfoContainer>
          <CommentUserLogoContainer src={userAvatar} />
          <CommentUserInfoChildContainer>
            <CommentUserName>{userName}</CommentUserName>
            <CommentStarContainer>
              {Array.from({ length: 5 }, (_, index) => (
                <StarIcon key={index} style={{ color: index < rating ? "gold" : "gray" }} />
              ))}
            </CommentStarContainer>
          </CommentUserInfoChildContainer>
        </CommentUserInfoContainer>
        <CommentText>
          <p>{text}</p>
        </CommentText>
      </CommentStyled>
    );
  };
  
  export default Comment;
