export default function WorkExperience({ experience = [] }) {
    return (
        <section
            id="experience"
            className="relative  pb-20 px-2 md:px-4 bg-gradient-to-br from-background via-background to-muted/10"
        >
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>

            <div className="relative max-w-7xl mx-auto">
                <div className="text-center mb-16 transition-all duration-700 ease-out opacity-100 translate-y-0">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/5 border border-primary/10 mb-6">
                        <div className="w-2 h-2 rounded-full bg-primary/60"></div>
                        <span className="text-sm font-medium text-muted-foreground">
                            Professional Journey
                        </span>
                    </div>

                    <h2 className="text-2xl md:text-4xl font-extrabold mb-6 bg-gradient-to-r from-foreground via-foreground/80 to-foreground/60 bg-clip-text text-transparent tracking-tight">
                        Work Experience
                    </h2>
                </div>

                <div className="rounded-xl border text-card-foreground shadow p-4 md:p-6 lg:p-8 bg-card/50 backdrop-blur-sm border-border/50 transition-all duration-700 ease-out delay-200 opacity-100 translate-y-0">
                    <div className="relative pl-6 md:pl-8 space-y-6">
                        <div className="absolute left-1.5 md:left-2.5 top-1 bottom-1 w-px bg-gradient-to-b from-primary/40 via-primary/20 to-transparent"></div>

                        {experience.map((item, index) => (
                            <article key={`${item.company}-${item.role}-${index}`} className="relative">
                                <div className="absolute -left-6 md:-left-8 top-7 flex h-3 w-3 items-center justify-center rounded-full bg-primary/80 ring-4 ring-background">
                                    <span className="h-1.5 w-1.5 rounded-full bg-background"></span>
                                </div>

                                <div className="rounded-xl border border-border/50 bg-card/30 hover:bg-card/50 transition-colors duration-300 p-5 md:p-6">
                                    <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-3 md:gap-6">
                                        <div>
                                            <h3 className="text-base md:text-xl font-bold tracking-tight text-foreground">
                                                {item.company}
                                            </h3>
                                            <p className="text-sm md:text-base text-muted-foreground mt-1">
                                                {item.role} {item.location ? `(${item.location})` : ""}
                                            </p>
                                        </div>

                                        <div className="inline-flex items-center self-start rounded-full border border-border/60 bg-background/50 px-3 py-1 text-xs md:text-sm font-medium text-muted-foreground">
                                            {item.duration}
                                        </div>
                                    </div>

                                    <ul className="mt-5 space-y-3">
                                        {item.contributions.map((point, pointIndex) => (
                                            <li
                                                key={`${item.company}-point-${pointIndex}`}
                                                className="flex items-start gap-3 text-sm md:text-base text-muted-foreground leading-relaxed"
                                            >
                                                <span className="mt-2 h-1.5 w-1.5 rounded-full bg-primary/70 shrink-0"></span>
                                                <span>{point}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </article>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}