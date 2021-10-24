import BounceLoader from "react-spinners/BounceLoader";

import styled from "styled-components";

const StyledLoader = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default function MyLoader() {
  return (
    <StyledLoader>
      <BounceLoader size={100} color="#9E0614" />
    </StyledLoader>
  );
}
