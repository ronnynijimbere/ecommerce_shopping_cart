import Header from "../components/Header"
import ProductList from "../components/ProductList"
import { IProduct } from "../components/Product"
import Footer from "../components/Footer"
import Contact from "../components/Contact"
import Head from "next/head"

import "../styles.scss"

interface IIndexProps {
  products: IProduct[]
}

const Index = (props: IIndexProps) => {
  return (
    <div className="app">
      <Head>
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/2.2.2/jquery.min.js"></script>
        <script src="https://cdn.snipcart.com/scripts/2.0/snipcart.js" data-api-key="MzMxN2Y0ODMtOWNhMy00YzUzLWFiNTYtZjMwZTRkZDcxYzM4" id="snipcart"></script>
        <link href="https://cdn.snipcart.com/themes/2.0/base/snipcart.min.css" rel="stylesheet" type="text/css" />
        <link rel="shortcut icon" href="/static/favicon.ico" />
      </Head>
      <Header />
      <main className="main">
        <div className="promotional-message">
          <h3>GET READY</h3>
          <h2>GAMES</h2>
          <p>A <strong>fantastic collection of games</strong> available for everyone.</p>
        </div>
        <ProductList products={props.products} />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

Index.getInitialProps = async () => {
  return {
    products: [
      {id: "nextjs_tekken", name: "Tekken 7", price: 45.00, image: "../static/tekken.jpg", description: "Tekken 7 (鉄拳7) is a fighting game developed and published by Bandai Namco Entertainment. The game is an installment in the Tekken series."} as IProduct,
      {id: "nextjs_speed", name: "Need For Speed Payback", price: 60, image: "../static/speed.jpg",description: "Need for Speed Payback is a racing video game developed by Ghost Games and published by Electronic Arts for Microsoft Windows, PlayStation 4 and Xbox One. It is the twenty-third installment in the Need for Speed series."} as IProduct,
      {id: "nextjs_duty", name: "Call of Duty 4: Modern Warfare", price: 55, image: "../static/duty.jpg", description: "Call of Duty 4: Modern Warfare is a first-person shooter developed by Infinity Ward and published by Activision. The fourth main installment in the Call of Duty series."} as IProduct,
      {id: "nextjs_fifa", name: "Fifa 2020", price: 75.00, image: "../static/fifa.jpg", description: "FIFA 20 is a football simulation video game published by Electronic Arts as part of the FIFA series. It is the 27th installment in the FIFA series, and was released on 27 September 2019 for Microsoft Windows, PlayStation 4, Xbox One, and Nintendo Switch."} as IProduct,
    ]
  }
}

export default Index