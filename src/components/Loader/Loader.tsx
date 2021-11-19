import loader from 'assets/loader.gif';

import { LoaderWrapper, LoaderImage } from 'components/Loader/Loader.styles';

const Loader = () => (
  <LoaderWrapper>
    <LoaderImage alt="loader-wrapper" src={loader} />;
  </LoaderWrapper>
);

export default Loader;
