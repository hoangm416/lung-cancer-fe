import MobileNav from "./MobileNav";
import MainNav from "./MainNav";
import { Link, NavLink } from "react-router-dom";
import {
  LucidePieChart as PieChartIcon,
  LucideClipboardList as FileIcon,
  LucideBrain as BrainIcon,
  LucideBookOpen as BookIcon,
} from 'lucide-react';

const Header = () => {
  return (
    <div className="border-b-2 border-primary py-4 shadow-md bg-white h-20">
      <div className="container mx-auto flex justify-between items-center px-4 md:px-8">
        {/* Logo */}
        <Link
          to="/"
          className="text-3xl font-bold tracking-tight text-primary"
        >
          LungTrack
        </Link>

        {/* Navigation Menu */}
        <nav className="hidden md:flex gap-6">
          {[
            { path: "/", label: "Thống kê", Icon: PieChartIcon },
            { path: "/research", label: "Nghiên cứu", Icon: BookIcon },
            { path: "/question", label: "Hồ sơ", Icon: FileIcon },
            { path: "/about-us", label: "Dự đoán AI", Icon: BrainIcon },
          ].map(({ path, label, Icon }) => (
            <NavLink key={path} to={path} className={({ isActive }) =>
              `m-1 flex h-[40px] w-[135px] cursor-pointer items-center justify-center gap-x-2 rounded-md transition-colors
              ${isActive ? "bg-primary text-white" : "bg-white text-black hover:bg-hover"}`
            }>
              <Icon />
              <p>{label}</p>
            </NavLink>
          ))}
        </nav>

        {/* Mobile & Extra Navigation */}
        <div className="flex items-center gap-4">
          <div className="md:hidden">
            <MobileNav />
          </div>
          <div className="hidden md:block">
            <MainNav />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
