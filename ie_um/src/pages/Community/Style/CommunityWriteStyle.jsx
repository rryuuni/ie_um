import styled, { css } from 'styled-components';

export const Container = styled.div`
   display: flex;
   flex-direction: column;
   text-align: center;
   padding: 30px 20px;
   margin: 0 auto;
`;

export const Title = styled.h1`
   margin: 20px auto;
   font-size: 25px;
`;

export const Form = styled.div`
   margin-top: 20px;
   display: flex;
   flex-direction: column;
   text-align: center;
   gap: 15px;
`;

export const PostTitleInput = styled.input`
   height: 57px;

   border-radius: 20px;
   border: none;
   padding: 0 20px;

   color: white;
   background-color: #7fc1e7;

   &::placeholder {
      color: white;
   }
`;

export const LocationWrap = styled.div`
   position: relative;
`;

export const PinIcon = styled.div`
   position: absolute;
   top: 13px;
   left: 16px;
`;

export const LocationInput = styled.input`
   width: 100%;
   height: 44px;

   border-radius: 20px;
   border: 1px solid #efefef;
   padding: 0 20px 0 40px;
`;

export const ContentInput = styled.textarea`
   height: 310px;
   border-radius: 20px;
   resize: none;

   border: 1px solid #efefef;
   padding: 20px;
`;

export const ButtonWrap = styled.div`
   display: flex;
   gap: 5px;
   justify-content: end;
   margin-top: 10px;
`;

const buttonStyles = css`
   width: 60px;
   height: 30px;
   border-radius: 15px;
   color: white;
   background-color: ${(props) => props.theme.mainColor};
`;

export const CancelButton = styled.button`
   ${buttonStyles}
`;

export const SubmitButton = styled.button`
   ${buttonStyles}
`;
