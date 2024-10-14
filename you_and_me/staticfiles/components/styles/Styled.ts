import styled from "styled-components";

export const Container = styled.div.attrs(() => ({
  className: "container",
}))`
  width: 100%;
  height: auto;
  max-width: 1296px;
  margin: 0 auto;
`;

export const Section = styled.section.attrs(() => ({}))`
  width: 100%;
  height: auto;
`;

interface OverlayBgProps {
  onClick: () => void;
}

export const OverlayBg = styled.div<OverlayBgProps>`
  z-index: 1;
  width: 100%;
  height: 120%;
  position: absolute;
  top: 100%;
  left: 0;
  background-color: rgba(0, 0, 0, 0.3);
  animation: openOverlay 0.3s ease;
  cursor: pointer;
`;

export const GridContainer = styled.div`
  max-width: 1296px;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  gap: 20px 24px;
  flex-wrap: wrap;
  margin: 0 auto;
  @media (max-width: 1296px) {
    padding: 20px;
  }
`;

interface GridItemProps {
  $columns: number;
}

export const GridItem = styled.div<GridItemProps>`
  max-width: ${(props) => {
    const number = props.$columns;
    if (number === 3) return 306;
    else if (number === 4) return 416;
    else if (number === 6) return 636;
    else if (number === 9) return 966;
    else if (number === 12) return 1296;
    else return 86;
  }}px;
  width: 100%;
  position: relative;
`;
