import { useEffect, useState } from "react";
import { Sun, Moon, Monitor } from "lucide-react";

type Theme = "system" | "light" | "dark";

const themes: { value: Theme; icon: React.ReactNode; label: string }[] = [
  { value: "light", icon: <Sun className="w-4 h-4" />, label: "Light" },
  { value: "system", icon: <Monitor className="w-4 h-4" />, label: "System" },
  { value: "dark", icon: <Moon className="w-4 h-4" />, label: "Dark" },
];

function applyTheme(theme: Theme) {
  const isDark =
    theme === "dark" ||
    (theme === "system" && window.matchMedia("(prefers-color-scheme: dark)").matches);
  document.documentElement.classList.toggle("dark", isDark);
  // Update status bar color
  document.documentElement.style.colorScheme = isDark ? "dark" : "light";
  const metaTheme = document.querySelector('meta[name="theme-color"]');
  if (metaTheme) {
    metaTheme.setAttribute("content", isDark ? "#0f1729" : "#e8edf4");
  }
}

const ThemeToggle = () => {
  const [theme, setTheme] = useState<Theme>(() => {
    if (typeof window === "undefined") return "system";
    return (localStorage.getItem("theme") as Theme) || "system";
  });

  useEffect(() => {
    applyTheme(theme);
  }, [theme]);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-color-scheme: dark)");
    const handler = () => {
      if ((localStorage.getItem("theme") || "system") === "system") {
        applyTheme("system");
      }
    };
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);

  const handleSet = (t: Theme) => {
    setTheme(t);
    localStorage.setItem("theme", t);
  };

  return (
    <div className="flex items-center bg-secondary/60 rounded-lg p-0.5 gap-0.5">
      {themes.map((t) => (
        <button
          key={t.value}
          onClick={() => handleSet(t.value)}
          className={`p-1.5 rounded-md transition-all duration-200 ${
            theme === t.value
              ? "bg-primary text-primary-foreground shadow-sm"
              : "text-muted-foreground hover:text-foreground"
          }`}
          aria-label={t.label}
          title={t.label}
        >
          {t.icon}
        </button>
      ))}
    </div>
  );
};

export default ThemeToggle;
