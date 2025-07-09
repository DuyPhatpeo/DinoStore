import Menu from "./Menu/Menu";
import BoxIcon from "./BoxIcon/BoxIcon";

export default function Header() {
  return (
    <header className="bg-white shadow-md">
      <div className="container flex items-center justify-between p-4 mx-auto">
        <div className="text-xl font-bold">Marseille</div>
        <Menu />
        <BoxIcon />
      </div>
    </header>
  );
}
