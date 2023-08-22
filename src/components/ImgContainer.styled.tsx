import styled from "styled-components";

type StyledImgContainerPropsType = {
    img?: string,
}

export const ImgContainer = styled.div<StyledImgContainerPropsType>`
  width: 280px;
  height: 170px;
  border-radius: 10px;
  background: center / cover no-repeat url(${props => props.img}), lightgray 50%;
  margin-top: 10px;

`