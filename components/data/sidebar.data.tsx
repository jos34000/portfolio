import {
  AudioWaveform,
  BookOpen,
  Bot,
  Command,
  Frame,
  GalleryVerticalEnd,
  Map,
  PieChart,
  Settings2,
  SquareTerminal,
} from "lucide-react"

export const createSidebarData = () => ({
  user: {
    name: "shadcn",
    email: "m@example.com",
    avatar: "/avatars/shadcn.jpg",
  },
  teams: [
    {
      name: "Acme Inc",
      logo: GalleryVerticalEnd,
      plan: "Enterprise",
    },
    {
      name: "Acme Corp.",
      logo: AudioWaveform,
      plan: "Startup",
    },
    {
      name: "Evil Corp.",
      logo: Command,
      plan: "Free",
    },
  ],
  navMain: [
    {
      title: "Playground",
      url: "/dashboard",
      icon: SquareTerminal,
      isActive: true,
      items: [
        {
          title: "Library",
          url: "/dashboard/library",
        },
        {
          title: "Starred",
          url: "/dashboard/starred",
        },
        {
          title: "Settings",
          url: "/dashboard/settings",
        },
      ],
    },
    {
      title: "Models",
      url: "/dashboard/models",
      icon: Bot,
      items: [
        {
          title: "Genesis",
          url: "/dashboard/models/genesis",
        },
        {
          title: "Explorer",
          url: "/dashboard/models/explorer",
        },
        {
          title: "Quantum",
          url: "/dashboard/models/quantum",
        },
      ],
    },
    {
      title: "Documentation",
      url: "/dashboard/docs",
      icon: BookOpen,
      items: [
        {
          title: "Introduction",
          url: "/dashboard/docs/introduction",
        },
        {
          title: "Get Started",
          url: "/dashboard/docs/get-started",
        },
        {
          title: "Tutorials",
          url: "/dashboard/docs/tutorials",
        },
        {
          title: "Changelog",
          url: "/dashboard/docs/changelog",
        },
      ],
    },
    {
      title: "Settings",
      url: "/dashboard/settings",
      icon: Settings2,
      items: [
        {
          title: "General",
          url: "/dashboard/settings/general",
        },
        {
          title: "Team",
          url: "/dashboard/settings/team",
        },
        {
          title: "Billing",
          url: "/dashboard/settings/billing",
        },
        {
          title: "Limits",
          url: "/dashboard/settings/limits",
        },
      ],
    },
  ],
  projects: [
    {
      name: "Design Engineering",
      url: "/dashboard/projects/design",
      icon: Frame,
    },
    {
      name: "Sales & Marketing",
      url: "/dashboard/projects/sales",
      icon: PieChart,
    },
    {
      name: "Travel",
      url: "/dashboard/projects/travel",
      icon: Map,
    },
  ],
})
