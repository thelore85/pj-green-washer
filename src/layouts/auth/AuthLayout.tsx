type AuthLayoutProps = {
  children: React.ReactNode
}

export default function AuthLayout({ children }: AuthLayoutProps) {
  return (
    <div className="bg-card flex min-h-[100dvh] items-center">
      <div>{children}</div>
    </div>
  )
}
