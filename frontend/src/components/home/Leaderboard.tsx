export default function Leaderboard() {
  return (
    <section className="hud-border bg-surface-container-lowest p-panel-padding">
      <div className="flex justify-between items-end mb-8 border-b border-outline-variant/50 pb-4">
        <div className="flex items-center gap-3">
          <span className="material-symbols-outlined text-primary animate-pulse">public</span>
          <h2 className="font-headline-lg-mobile md:font-headline-lg text-headline-lg-mobile md:text-headline-lg text-on-surface uppercase tracking-tight">Global Network</h2>
        </div>
        <a className="font-data-display text-label-sm text-primary hover:text-primary-fixed uppercase flex items-center gap-1" href="#">
          View Full Intel <span className="material-symbols-outlined text-sm">arrow_forward</span>
        </a>
      </div>
      {/* Mini Scroll Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {/* Pilot 1 */}
        <div className="bg-surface-container p-4 border-l-2 border-tertiary hover:bg-surface-container-high transition-colors flex items-center gap-4">
          <div className="font-data-display text-tertiary text-xl w-8 text-center">#1</div>
          <div className="w-10 h-10 rounded-sm overflow-hidden border border-tertiary/50">
            <img alt="Avatar" className="w-full h-full object-cover opacity-80" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAG8rO6-odYq-2vUYG2qIvkLi1UjUqo4R99FFRtZIaQFdtx_jZYCep70gUTb14a8c-OW28qJlB2Ulxf3gboAf4CbGj8VSYxMe0gpAFAjDs-N97tjjAWcwKWvwrJ-bR1eWHSRn4A1jw84NZnUWlEpJT4WRvZ7IoX5WfNN8gioGmW50NX4AStn0LXHnDqThhJiuUw82nWE__1XG_GIDFrfXkEgSnJj_TlmFASBWt4Y5xqSqpOKla3TSqOgM7YCok1npDk2e2sa5NATOGt" />
          </div>
          <div>
            <div className="font-data-display text-data-display text-on-surface uppercase">Amuro_R</div>
            <div className="font-data-display text-label-sm text-on-surface-variant">142,850 XP</div>
          </div>
        </div>
        {/* Pilot 2 */}
        <div className="bg-surface-container p-4 border-l-2 border-outline hover:bg-surface-container-high transition-colors flex items-center gap-4">
          <div className="font-data-display text-outline text-xl w-8 text-center">#2</div>
          <div className="w-10 h-10 rounded-sm overflow-hidden border border-outline/50 bg-surface-variant flex items-center justify-center">
            <span className="material-symbols-outlined text-on-surface-variant">person</span>
          </div>
          <div>
            <div className="font-data-display text-data-display text-on-surface uppercase">RedComet99</div>
            <div className="font-data-display text-label-sm text-on-surface-variant">138,200 XP</div>
          </div>
        </div>
        {/* Pilot 3 */}
        <div className="bg-surface-container p-4 border-l-2 border-[#cd7f32] hover:bg-surface-container-high transition-colors flex items-center gap-4">
          <div className="font-data-display text-[#cd7f32] text-xl w-8 text-center">#3</div>
          <div className="w-10 h-10 rounded-sm overflow-hidden border border-[#cd7f32]/50 bg-surface-variant flex items-center justify-center">
            <span className="material-symbols-outlined text-on-surface-variant">person</span>
          </div>
          <div>
            <div className="font-data-display text-data-display text-on-surface uppercase">Setsuna_F</div>
            <div className="font-data-display text-label-sm text-on-surface-variant">125,400 XP</div>
          </div>
        </div>
        {/* Pilot 4 */}
        <div className="bg-surface-container p-4 border-l-2 border-outline-variant hover:bg-surface-container-high transition-colors flex items-center gap-4">
          <div className="font-data-display text-outline-variant text-xl w-8 text-center">#4</div>
          <div className="w-10 h-10 rounded-sm overflow-hidden border border-outline-variant/50 bg-surface-variant flex items-center justify-center">
            <span className="material-symbols-outlined text-on-surface-variant">person</span>
          </div>
          <div>
            <div className="font-data-display text-data-display text-on-surface uppercase">Kira_Y</div>
            <div className="font-data-display text-label-sm text-on-surface-variant">112,900 XP</div>
          </div>
        </div>
      </div>
    </section>
  );
}
