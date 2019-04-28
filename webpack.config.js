const path = require("path");

module.exports = {
  name: "init-webpack",
  mode: "development", //개발 시 'development', 실제 서비스 시 'production'
  devtool: "eval", //source map(bundle된 코드에서 발생한 에러를 기존의 코드와 연결) 설정, build, rebuild +++(빠른속도), production no
  resolve: {
    extensions: [".js", ".jsx"] //webpack의 경로 검색에 사용될 확장자
  },
  entry: {
    app: ["./src/index"]
  },
  module: {
    rules: [
      {
        test: /\.jsx?/, //.js, .jsx파일에 rules를 적용함을 명시
        loader: "babel-loader",
        options: {
          presets: [
            [
              "@babel/preset-env",
              {
                targets: {
                  browsers: [
                    ">0.2%",
                    "not dead",
                    "not ie <= 11",
                    "not op_mini all"
                  ]
                }
              }
            ],
            "@babel/preset-react"
          ],
          plugins: ["react-hot-loader/babel"]
        }
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: "style-loader"
          },
          {
            loader: "css-loader"
          }
        ]
      }
    ]
  },
  output: {
    path: path.join(__dirname, "dist"), //현재 폴더 내부의 dist 내부의 파일을 join
    filename: "app.js" //파일명 설정
  },
  devServer: {
    historyApiFallback: true
  }
};
