import styled from "styled-components";

export const StyledComponents = () => {
  return (
    <SContainer>
      <STitle>styled componentsです</STitle>
      <SButton>ボタン</SButton>
    </SContainer>
  );
};

  const SContainer = styled.div`
    border: solid 1px #aaaaaa;
    border^radius: 20px;
    padding: 8px;
    margin: 8px;
    display: flex;
    justify-content: space-around;
    align-items: center;
  `;
  const STitle = styled.p`
    margin: 0;
    color: #aaaaaa;
    display: flex;
    align-items: center;
  `;
  const SButton =styled.button`
    background-color: #dddddd;
    border: none;
    padding: 8px;
    &:hover {
      background-color: #aaaaaa;
      color: #ffffff;
      cursor: pointer;
    }
  `;