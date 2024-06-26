import { useTheme, Theme } from 'app/providers/ThemeProvider';
import cls from './ThemeSwitcher.module.scss';
import { classNames } from 'shared/lib/classNames/classNames';
import DarkIcon from 'shared/assets/icons/dark-icon.svg';
import LightIcon from 'shared/assets/icons/light-icon.svg';
import { Button, ThemeButton } from 'shared/ui/Button/Button';
interface ThemeSwitcherProps {
    className?: string;
}

export const ThemeSwitcher = ({ className }: ThemeSwitcherProps) => {
    const { theme, toggleTheme } = useTheme();

    return (
        <Button
            theme={ThemeButton.CLEAR}
            className={classNames(cls.ThemeSwitcher, {}, [className])}
            onClick={toggleTheme}
        >
            {theme === Theme.DARK ? <DarkIcon /> : <LightIcon />}
        </Button>
    );
};
