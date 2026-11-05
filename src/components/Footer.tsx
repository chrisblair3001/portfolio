import Divider from './Divider'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="flex w-full flex-col gap-8">
      <Divider />
      <p className="text-xs text-muted">© {year} Chris Blair</p>
    </footer>
  )
}
