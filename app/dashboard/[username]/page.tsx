type Props = { params: { username: string } }

export const Dashboard = async ({ params }: Props) => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen gap-4">
      <span>Dashboard</span>
      <a
        href={`/dashboard/${params.username}/library`}
        className="text-primary underline"
      >
        Aller à la librairie
      </a>
    </div>
  )
}

export default Dashboard
