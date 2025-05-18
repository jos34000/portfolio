type SignUpPayload = {
  email: string
  password: string
  username: string
  firstName: string
  lastName: string
}

type loginPayload = {
  email: string
  password: string
}

type Provider =
  | "github"
  | "apple"
  | "discord"
  | "facebook"
  | "microsoft"
  | "google"
  | "spotify"
  | "twitch"
  | "twitter"
  | "dropbox"
  | "kick"
  | "linkedin"
  | "gitlab"
  | "tiktok"
  | "reddit"
  | "roblox"
  | "vk"
  | "zoom"
