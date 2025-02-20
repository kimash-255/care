import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link href="/css/bootstrap.min.css" rel="stylesheet" />
        <link href="/css/style.css" rel="stylesheet" />
        <link href="/css/responsive.css" rel="stylesheet" />

        <link
          rel="shortcut icon"
          href="images/favicon.png"
          type="image/x-icon"
        />
        <link rel="icon" href="images/favicon.png" type="image/x-icon" />
      </Head>
      <body className="antialiased">
        <Main />
        <NextScript />

        <script async src="/js/jquery.js"></script>

        <script async src="/js/popper.min.js"></script>
        <script async src="/js/bootstrap.min.js"></script>
        <script async src="/js/jquery.fancybox.js"></script>
        <script async src="/js/wow.js"></script>
        <script async src="/js/jquery-ui.js"></script>
        <script async src="/js/appear.js"></script>
        <script async src="/js/knob.js"></script>
        <script async src="/js/gsap.min.js"></script>
        {/* <script async src="/js/ScrollTrigger.min.js"></script> */}
        <script async src="/js/SplitText.min.js"></script>
        <script async src="/js/splitType.js"></script>
        <script async src="/js/select2.min.js"></script>
        <script async src="/js/owl.js"></script>
        {/* <script async src="/js/script.js"></script> */}
        {/* <!-- form submit --> */}
        <script async src="/js/jquery.validate.min.js"></script>
        <script async src="/js/jquery.form.min.js"></script>
      </body>
    </Html>
  );
}
