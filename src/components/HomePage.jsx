import Banner from "./Banner";
import Navbar from "./Navbar";

export default function HomePage() {
  return (
    <header className="w-full h-screen homePage relative">
      <div className="w-full h-full bg-gradient-to-b from-[rgba(0,0,0,0.8)] via-[rgba(0,0,0,0.8)] to-[#f5f5f5]">
        <Navbar />
        <Banner />
      </div>
    </header>
  );
}
