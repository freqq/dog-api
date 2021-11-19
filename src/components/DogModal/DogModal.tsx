import Modal from 'react-modal';

import Loader from 'components/Loader';
import ModalButtons from 'components/ModalButtons';
import useFetch from 'hooks/useFetch';

import { DogModalWrapper, DogImage, DogName } from 'components/DogModal/DogModal.styles';
import { RANDOM_IMAGE_BY_BREED } from 'utils/urls';
import { DogImageResponse } from 'types';
import { useGlobalContext } from 'appContext';

const MODAL_STYLES = {
  overlay: {
    backgroundColor: 'rgba(0,0,0,0.7)',
  },
};

const DogModal = () => {
  const { chosenBreed, isModal, onModalClose } = useGlobalContext();
  const { data, isLoading, reFetch } = useFetch<DogImageResponse>(
    RANDOM_IMAGE_BY_BREED(chosenBreed?.url || ''),
  );

  return (
    <Modal
      isOpen={isModal}
      onRequestClose={onModalClose}
      contentLabel="Dog Image Modal"
      ariaHideApp={false}
      style={MODAL_STYLES}
    >
      <DogModalWrapper>
        <ModalButtons onClose={onModalClose} onRandom={reFetch} />
        <DogName>{chosenBreed?.name || 'Unknown breed'}</DogName>
        {isLoading ? <Loader /> : <DogImage src={data?.message} alt="dog-thumbnail" />}
      </DogModalWrapper>
    </Modal>
  );
};

export default DogModal;
