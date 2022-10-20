// import Document, { Html, Head, Main, NextScript } from "next/document";
// import { extractCritical } from "@emotion/server";

// export default class MyDocument extends Document {
//   static async getInitialProps(ctx) {
//     const initialProps = await Document.getInitialProps(ctx);
//     const page = await ctx.renderPage();
//     const styles = extractCritical(page.html);
//     return { ...initialProps, ...page, ...styles };
//   }

//   render() {
//     return (
//       <Html lang="en">
//         <Head>
//           <style
//             data-emotion-css={this.props.ids.join(" ")}
//             dangerouslySetInnerHTML={{ __html: this.props.css }}
//           />
//         </Head>
//         <body>
//           <Main />
//           <NextScript />
//         </body>
//       </Html>
//     );
//   }
// }

import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <link
            href="https://fonts.googleapis.com/css2?family=Inter:wght@400..700&display=swap"
            rel="stylesheet"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
