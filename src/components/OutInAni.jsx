import "../App.css";
import styled from "styled-components";
import { InView, useInView } from "react-intersection-observer";

const OutInContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const OutInStyle = styled.div`
  width: 100px;
  height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #006600;
  color: #fff;
  box-sizing: border-box;
  margin: 20px;
`;

const OutIn = ({ typo }) => {
  const { ref, inView, entries } = useInView();

  return (
    <OutInStyle
      ref={ref}
      className={
        inView
          ? `From-${typo.charAt(0).toUpperCase() + typo.slice(1)}-Active`
          : `From-${typo.charAt(0).toUpperCase() + typo.slice(1)}`
      }
    >
      {typo}
    </OutInStyle>
  );
};

const typos = ["left", "right", "up", "down"];

const OutInAni = () => {
  return (
    <OutInContainer>
      {typos.map((typo) => (
        <>
          <OutIn typo={typo} />
          <OutIn typo={typo} />
          <OutIn typo={typo} />
        </>
      ))}
    </OutInContainer>
  );
};

export default OutInAni;
