import { classNames } from "shared/lib/classNames/classNames";
import cls from "./Sidebar.module.scss";
import React, { useState } from "react";
import { ThemeSwitcher } from "shared/ui/ThemeSwitcher";

interface SidebarProps {
  className?: string;
}

export const Sidebar = ({ className }: SidebarProps) => {
  const [collapsed, setCollapsed] = useState(false);

  const onToggle = () => {
    setCollapsed((prev) => !prev);
  };

  return (
    <div
      className={classNames(cls.Sidebar, { [cls.collapsed]: collapsed }, [
        className,
      ])}
    >
      {" "}
      <div>
        <ThemeSwitcher />
        {/* LangSwitcher */}
      </div>
      <button onClick={onToggle}>toogle</button>
    </div>
  );
};
