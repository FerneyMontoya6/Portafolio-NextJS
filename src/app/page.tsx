import SecudaryContent from "@components/templates/SecundaryContent/index";
import MainContent from "@components/templates/MainContent/index";

import { PositionProvider } from "../context/SideBarContext";

export default function Home() {
  return (
    <PositionProvider>
      <div className="w-screen relative">
        <SecudaryContent></SecudaryContent>
        <MainContent></MainContent>
      </div>
    </PositionProvider>
  );
}
