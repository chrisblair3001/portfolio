import Divider from './Divider'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="flex w-full flex-col gap-8">
      <Divider />
      <p className="font-manrope text-sm text-muted">© {year} Chris Blair</p>
    </footer>
  )
}
