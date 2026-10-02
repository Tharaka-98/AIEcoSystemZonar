import CryptoEcosystemSection from "./(sections)/(CryptoEcosystemSection)";
import DriveItAllSection from "./(sections)/(DriveItAllSection)";
import LiveDemoSection from "./(sections)/(LiveDemoSection)";
import MainSliderSection from "./(sections)/(MainSliderSection)";
import TelegramBotSection from "./(sections)/(TelegramBotSection)";
import ThatDoMoreSection from "./(sections)/(ThatDoMoreSection)";

export default function Home() {
  return (
    <div className="">
      <MainSliderSection />
      <TelegramBotSection />
      <LiveDemoSection />
      <ThatDoMoreSection />
      <DriveItAllSection />
      <CryptoEcosystemSection />
    </div>
  );
}
