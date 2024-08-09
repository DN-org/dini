import styled from "styled-components";
import CustomButton from "../../../CustomButton/CustomButton";


export const CommentsStyled = styled('div')(() => ({
  padding:'20px 50px',
  display:'grid',
  rowGap:'25px',
}));

export const CommentsTitleContainer = styled('div')(() => ({
  display: 'grid',
  ColumnGap: '50px',
  gridTemplateColumns: '1fr 0.3fr',
  justifyContent: 'center',
  alignItems: 'center',
}));

export const CommentsSort = styled(CustomButton)(() => ({
  
}));

export const CommentsList = styled('div')(() => ({
  display: 'inline',
  rowGap:'25px',
}));

