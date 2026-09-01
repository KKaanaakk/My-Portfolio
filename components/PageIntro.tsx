import { ReactNode } from 'react';

export default function PageIntro({
  kicker,
  title,
  children,
}: {
  kicker: string;
  title: string;
  children?: ReactNode;
}) {
  return (
    <header className="max-w-4xl">
      <p className="spec-kicker">{kicker}</p>
      <h1 className="spec-title mt-3 text-6xl sm:text-7xl md:text-8xl">{title}</h1>
      {children ? (
        <div className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground">
          {children}
        </div>
      ) : null}
    </header>
  );
}
