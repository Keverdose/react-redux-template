import styled from "styled-components"
import {
  alignItems,
  flex,
  flexDirection,
  flexWrap,
  justifyContent,
  space,
  width
} from "styled-system"

export default styled.div`
  ${space};
  ${width};
  ${flexDirection};
  ${justifyContent};
  ${alignItems};
  display: ${({ display }: { display: string }) => display || "flex"};
  ${flex};
  ${flexWrap};
  position: relative;
  overflow-y: ${({ overflowY }: { overflowY: string }) =>
    overflowY || "initial"};
  overflow-x: ${({ overflowX }: { overflowX: string }) =>
    overflowX || "initial"};
`
