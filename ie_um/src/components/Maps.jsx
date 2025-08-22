import { useEffect } from 'react';

const Maps = ({ latitude, longitude }) => {
   useEffect(() => {
      if (typeof window === 'undefined') return;

      const loadMap = () => {
         const container = document.getElementById('map');

         const options = {
            center: new window.kakao.maps.LatLng(latitude, longitude),
            level: 3,
         };
         const map = new window.kakao.maps.Map(container, options);
         const marker = new window.kakao.maps.Marker({
            position: new window.kakao.maps.LatLng(latitude, longitude),
         });
         marker.setMap(map);
      };

      if (window.kakao && window.kakao.maps) {
         window.kakao.maps.load(() => {
            loadMap();
         });
      } else {
         const script = document.createElement('script');
         script.src = `https://dapi.kakao.com/v2/maps/sdk.js?appkey=${import.meta.env.VITE_KAKAO_MAP_KEY}&autoload=false`;
         script.async = true;
         document.head.appendChild(script);

         script.onload = () => {
            window.kakao.maps.load(() => {
               loadMap();
            });
         };
      }
   }, [latitude, longitude]);

   return <div id="map" style={{ width: '100%', height: '100%' }}></div>;
};
export default Maps;
