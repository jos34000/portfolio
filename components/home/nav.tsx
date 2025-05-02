import { IconEdit, IconHome, IconMessage, IconUser } from "@tabler/icons-react"

import { FloatingNav } from "@/components/ui/floating-navbar"

export function Nav() {
  const navItems = [
    {
      id: "home",
      name: "Home",
      link: "#home",
      icon: <IconHome className="h-4 w-4 text-neutral-500 dark:text-white" />,
    },
    {
      id: "about",
      name: "About",
      link: "#about",
      icon: <IconUser className="h-4 w-4 text-neutral-500 dark:text-white" />,
    },
    {
      id: "reviews",
      name: "Reviews",
      link: "#reviews",
      icon: <IconEdit className="h-4 w-4 text-neutral-500 dark:text-white" />,
    },
    {
      id: "contact",
      name: "Contact",
      link: "#contact",
      icon: (
        <IconMessage className="h-4 w-4 text-neutral-500 dark:text-white" />
      ),
    },
  ]
  return <FloatingNav navItems={navItems} />
}
