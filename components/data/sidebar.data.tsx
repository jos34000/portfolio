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

type GenerateUrlParams = {
  username: string
  path: string
}

const generateUrl = ({ username, path }: GenerateUrlParams) => {
  return `/dashboard/${username}/${path}`
}

export const createSidebarData = (username: string) => ({
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
      url: generateUrl({ username, path: "/dashboard" }),
      icon: SquareTerminal,
      isActive: true,
      items: [
        {
          title: "Library",
          url: generateUrl({ username, path: "library" }),
        },
        {
          title: "Starred",
          url: generateUrl({ username, path: "/dashboard/starred" }),
        },
        {
          title: "Settings",
          url: generateUrl({ username, path: "/dashboard/settings" }),
        },
      ],
    },
    {
      title: "Models",
      url: generateUrl({ username, path: "/dashboard/models" }),
      icon: Bot,
      items: [
        {
          title: "Genesis",
          url: generateUrl({
            username,
            path: "/dashboard/models/genesis",
          }),
        },
        {
          title: "Explorer",
          url: generateUrl({
            username,
            path: "/dashboard/models/explorer",
          }),
        },
        {
          title: "Quantum",
          url: generateUrl({
            username,
            path: "/dashboard/models/quantum",
          }),
        },
      ],
    },
    {
      title: "Documentation",
      url: generateUrl({ username, path: "/dashboard/docs" }),
      icon: BookOpen,
      items: [
        {
          title: "Introduction",
          url: generateUrl({
            username,
            path: "/dashboard/docs/introduction",
          }),
        },
        {
          title: "Get Started",
          url: generateUrl({
            username,
            path: "/dashboard/docs/get-started",
          }),
        },
        {
          title: "Tutorials",
          url: generateUrl({
            username,
            path: "/dashboard/docs/tutorials",
          }),
        },
        {
          title: "Changelog",
          url: generateUrl({
            username,
            path: "/dashboard/docs/changelog",
          }),
        },
      ],
    },
    {
      title: "Settings",
      url: generateUrl({ username, path: "/dashboard/settings" }),
      icon: Settings2,
      items: [
        {
          title: "General",
          url: generateUrl({
            username,
            path: "/dashboard/settings/general",
          }),
        },
        {
          title: "Team",
          url: generateUrl({
            username,
            path: "/dashboard/settings/team",
          }),
        },
        {
          title: "Billing",
          url: generateUrl({
            username,
            path: "/dashboard/settings/billing",
          }),
        },
        {
          title: "Limits",
          url: generateUrl({
            username,
            path: "/dashboard/settings/limits",
          }),
        },
      ],
    },
  ],
  projects: [
    {
      name: "Design Engineering",
      url: generateUrl({
        username,
        path: "/dashboard/projects/design",
      }),
      icon: Frame,
    },
    {
      name: "Sales & Marketing",
      url: generateUrl({ username, path: "/dashboard/projects/sales" }),
      icon: PieChart,
    },
    {
      name: "Travel",
      url: generateUrl({
        username,
        path: "/dashboard/projects/travel",
      }),
      icon: Map,
    },
  ],
})
