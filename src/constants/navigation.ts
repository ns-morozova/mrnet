export type NavLink =
  | { label: string; href: string }
  | { label: string; sectionId: string };

export const NAV_LINKS: NavLink[] = [
  { label: "Технология", href: "/technology" },
  { label: "Платформа управления", sectionId: "personal-settings" },
  { label: "Тест-драйв", sectionId: "test-drive" },
  { label: "Наша сеть", sectionId: "network" },
];
