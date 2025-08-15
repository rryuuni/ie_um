import styled from 'styled-components';

export const Wrap = styled.div`
   position: relative;
   height: calc(100vh - 56px);
`;

export const MapContainer = styled.div`
   width: 100%;
   height: 100%;
`;

export const CardWrap = styled.div`
   position: absolute;
   bottom: 0;
   left: 0;
   right: 0;
   height: 220px;
   background: white;
   border-top-left-radius: 30px;
   border-top-right-radius: 30px;
   padding: 40px 20px;
   box-shadow: 0 -2px 5px rgba(0, 0, 0, 0.1);
   z-index: 80;
`;

export const CardDateWrap = styled.div`
   display: flex;
   flex-direction: row;
`;

export const CardDate = styled.div`
   font-size: 15px;
   color: ${(props) => props.theme.mainColor};
   font-weight: 400;
   margin-left: 5px;
   margin-bottom: 15px;
`;

export const CardTitle = styled.div`
   font-size: 20px;
   font-weight: 400;
   margin-bottom: 10px;
`;

export const CardPlace = styled.div`
   font-size: 13px;
   font-weight: 400;
   color: #959595;
`;

export const CardBtn = styled.button`
   margin-top: 15px;
   height: 40px;
   color: white;
   border-radius: 15px;
   font-weight: 700;
   font-size: 13px;
   background-color: ${(props) => props.theme.mainColor};
   width: 80px;
`;

export const SaveBtn = styled.button`
   margin-top: 15px;
   margin-left: 5px;
   height: 40px;
   border-radius: 15px;
   font-size: 13px;
   font-weight: 700;
   background: none;
   border: 1px solid ${(props) => props.theme.mainColorLight};
   width: 80px;
`;
