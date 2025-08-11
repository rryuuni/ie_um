import styled from 'styled-components';

export const Container = styled.div`
   margin: 50px auto;
   padding: 0 40px;
`;

export const Title = styled.h1`
   text-align: center;
   margin-bottom: 50px;
`;

export const Label = styled.h1`
   margin: 30px 0 10px 5px;
`;

export const Input = styled.input`
   width: 290px;
   height: 45px;
   border-radius: 20px;
   border: solid 1px #d9d9d9;
   padding: 0 10px;
`;

export const ToggleGroup = styled.div``;

export const ToggleButton = styled.button`
   width: 75px;
   height: 45px;
   border-radius: 20px;
   margin-right: 5px;
   /* background-color: #fdfdfd; */
   background-color: ${(props) => (props.selected ? '#004193' : '#fdfdfd')};
   color: ${(props) => (props.selected ? '#FFFFFF' : '#000000')};
   border: 1px solid #d9d9d9;
`;

export const ButtonWrap = styled.div`
   text-align: center;
   margin-top: 180px;
`;
export const SaveButton = styled.button`
   width: 90px;
   height: 50px;
   border-radius: 20px;
   color: white;
   background-color: ${(props) => props.theme.mainColor};
`;
