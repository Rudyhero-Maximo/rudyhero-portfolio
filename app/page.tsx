import Header from "./components/Header";
import Hero from "./components/Hero";
import Posts from "./components/Posts";
import Works from "./components/Works";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <Header />

      <main style={{ maxWidth: "900px", margin: "0 auto", padding: "40px 20px" }}>
        <Hero />
        <Posts />
        <Works />
        <Footer />
      </main>
    </>
  );
}