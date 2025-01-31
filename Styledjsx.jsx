// エクスポートは必要ないので、index.jsには転記しない
export const StyledJsx = () => {
  return (
    <>
      <div className="container">
        <p className="title">Styled Jsxです</p>
        <button className="button">ボタン</button>
      </div>

      <style jsx>{`
        .container {
            border: solid 1px #aaaaaa;
            border-radius: 20px;
            padding: 8px;
            margin: 8px;
            display: flex;
            justify-content: space-around;
            align-items; center;
          }
          .title {
        margin: 0;
            color: #aaaaaa;
            display: flex;
            align-items: center;
          }
          .button {
            background-color: #ddd;
            border: none;
            padding: 8px;
            border-radiys: 8px;
          }
      `}</style>
    </>
  );
};
