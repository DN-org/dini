//Components
import StarRatingDisplay from "../../../../StarRatingDisplay/StarRatingDisplay";

//Styles
import {
  CommentStyled,
  CommentText,
  CommentUserInfoChildContainer,
  CommentUserInfoContainer,
  CommentUserLogoContainer,
  CommentUserName,
} from "./Comment.styled";

interface CommentProps {
  userName: string;
  userAvatar: string;
  rating: number; // предполагается, что рейтинг передается числом
  text: string;
}

const Comment: React.FC<CommentProps> = ({
  userName,
  userAvatar,
  rating,
  text,
}) => {
  return (
    <CommentStyled>
      <CommentUserInfoContainer>
        <CommentUserLogoContainer src={userAvatar} />
        <CommentUserInfoChildContainer>
          <CommentUserName>{userName}</CommentUserName>
          <StarRatingDisplay value={4.5} fontSize={"14"}/>
        </CommentUserInfoChildContainer>
      </CommentUserInfoContainer>
      <CommentText>
        <p>{text}</p>
      </CommentText>
    </CommentStyled>
  );
};

export default Comment;
