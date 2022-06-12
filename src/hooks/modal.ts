import { ref } from 'vue';

export const useModal = () => {
  const showing = ref(false);

  const onClose = () => {
    showing.value = false;
  };
  const onInfo = () => {
    showing.value = true;
  };

  return { showing, onClose, onInfo };
};
