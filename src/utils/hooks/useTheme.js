const { useSelector } = require("react-redux")

const useTheme = () => {
    const themeColor = useSelector((state) => (state.event.themeColor));

    const hoverClass = themeColor === "theme-orange" ? "hover:text-theme-orange" : "hover:text-theme-blue";
    const textColorClass = themeColor === 'theme-orange' ? 'text-theme-orange' : 'text-theme-blue';
    const bgColorClass = themeColor === 'theme-orange' ? 'bg-theme-orange' : 'bg-theme-blue';

    return { hoverClass, textColorClass, bgColorClass };
}

export default useTheme;