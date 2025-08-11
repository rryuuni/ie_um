import { useCallback } from 'react';

const useModal = () => {
   const openModal = useCallback((id) => {
      setTimeout(() => {
         const modal = document.getElementById(id);
         if (modal && typeof modal.showModal === 'function') {
            modal.showModal();
         }
      }, 0);
   }, []);

   const closeModal = useCallback((id) => {
      const modal = document.getElementById(id);
      if (modal && typeof modal.close === 'function') {
         modal.close();
      }
   }, []);

   return { openModal, closeModal };
};

export default useModal;
