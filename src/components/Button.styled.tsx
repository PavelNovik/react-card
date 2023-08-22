import styled, {css} from "styled-components";

type StyledBtnPropsType = {
    primary?: boolean,
    outlined?: boolean
}

export const ActionBtn = styled.button<StyledBtnPropsType>`
  width: 86px;
  height: 30px;
  border-radius: 5px;
  border: 2px solid #4E71FE;

  // primary

  ${props => props.primary && css<StyledBtnPropsType>`
    background: #4E71FE;
    color: #fff;
    margin-right: 12px;
  `}
    // outlined
  ${props => props.outlined && css<StyledBtnPropsType>`
    background: #fff;
    color: #4E71FE;

  `}
  &:hover {
    cursor: pointer;
    box-shadow: 2px 2px 10px rgba(0, 0, 0, .5);
  }

`