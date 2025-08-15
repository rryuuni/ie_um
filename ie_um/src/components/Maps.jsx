import { useEffect } from 'react';

const { kakao } = window;

const Maps = ({ lat, lng }) => {
   useEffect(() => {
      const container = document.getElementById('map');
      const options = {
         center: new kakao.maps.LatLng(lat, lng),
         level: 3,
      };
      const map = new kakao.maps.Map(container, options);
      const marker = new kakao.maps.Marker({
         position: new kakao.maps.LatLng(lat, lng),
      });
      marker.setMap(map);
   }, [lat, lng]);
   return <div id="map" style={{ width: '100%', height: '100%' }}></div>;
};
export default Maps;
