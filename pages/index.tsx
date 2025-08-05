import Header from "@/components/Header";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import OrderInfo from "@/components/OrderInfo";
import AboutSection from "@/components/AboutUs";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="font-sans min-h-screen bg-gray-50">
      <Header />
      <div className="mt-6">
        <Navbar />
      </div>
      <Hero />
      <Features />
      <OrderInfo />
      <AboutSection />
      <Footer />
    </main>
  );
}
