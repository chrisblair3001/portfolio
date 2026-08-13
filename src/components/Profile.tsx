const PROFILE_TEXT =
  "In 15+ years leading product design across SaaS, fintech, and AI, I've scaled design functions by knowing when to grow the team, invest in systems, or lean on AI, so design keeps pace with the business. Now I'm looking for my next chapter at a mission-driven company, tackling hard product problems while enhancing the team's design capabilities"

export default function Profile() {
  return (
    <section className="flex w-full items-start gap-20">
      <h2 className="w-[323px] shrink-0 text-2xl font-semibold text-label">Profile</h2>
      <p className="flex-1 text-base leading-[23px] text-body">{PROFILE_TEXT}</p>
    </section>
  )
}
