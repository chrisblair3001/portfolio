import avatar from '../assets/avatar.png'

const BIO_TEXT =
  "In 15+ years leading product design across SaaS, fintech, and AI, I've scaled design functions by knowing when to grow the team, invest in systems, or lean on AI, so design keeps pace with the business. Now I'm looking for my next chapter at a mission-driven company, tackling hard product problems while enhancing the team's design capabilities"

export default function Bio() {
  return (
    <section className="flex w-full flex-col gap-12">
      <h2 className="w-full text-base font-semibold text-ink uppercase">// Bio</h2>
      <div className="flex w-full flex-col items-start gap-6 sm:flex-row sm:items-center sm:gap-12">
        <img
          src={avatar}
          alt="Chris Blair"
          className="size-24 shrink-0 rounded-full object-cover sm:size-32 lg:size-[164px]"
        />
        <p className="flex-1 text-lg leading-[1.53] tracking-[-0.48px] text-body sm:text-xl lg:text-2xl">
          {BIO_TEXT}
        </p>
      </div>
    </section>
  )
}
