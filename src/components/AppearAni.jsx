import logo from "./logo.svg";
import "./App.css";
import { useInView } from "react-intersection-observer";
import styled from "styled-components";

const AppearContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const AppearStyle = styled.div`
  width: 100px;
  height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #000066;
  box-sizing: border-box;
  margin: 55px;
  color: #fff;
  transition: all 0.8s;
  transition-delay: 0.15s;
`;

const Appear = ({ typo }) => {
  const { ref, inView, entry } = useInView();

  if (inView) {
    console.log(typo + " in viewport");
  }

  return (
    <AppearStyle ref={ref} className={inView ? "Appear Inview" : "Appear"}>
      {typo}
    </AppearStyle>
  );
};

const typos = [...Array(10)];

function AppearAni() {
  return (
    <AppearContainer>
      {typos.map((_, index) => (
        <Appear typo={index + 1}></Appear>
      ))}
    </AppearContainer>
  );
}

export default AppearAni;
