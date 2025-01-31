/** @jsxImportSource @emotion/react */
import { jsx, css } from "@emotion/react";

export const Emotion = () => {
  // scssの書き方がそのまま可能な書き方
  const containerStyle = css`
    border: solid 1px #aaaaaa;
    border-radius: 20px;
    padding: 8px;
    margin: 8px;
    display: flex;
    justify-content: space-around;
    align-items: center;
  `;

  // インラインスタイルの書き方
  const titleStyle = css({
    margin: 0,
    display: flex,
    alignitems: center,
    color: "#aaa",
  });

  return (
    <div css={containerStyle}>
      <p css={titleStyle}>Emotionです</p>
      <button>ボタン</button>
    </div>
  );
};

// styled-componentsの書き方
const SButton = styled.button`
  background-color: #dddddd;
  border: none;
  padding: 8px;
  border-radius: 8px;
  &:hover {
    background-color: #aaaaaa;
    color: #ffffff;
    cursor: pointer;
  }
`;
