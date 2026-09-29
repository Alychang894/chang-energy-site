// components/blog/Callout.tsx
"use client";

type CalloutProps = {
  title?: string;
  text: string;
  buttonText?: string;
  buttonHref?: string;
};

export default function Callout({
  title,
  text,
  buttonText,
  buttonHref,
}: CalloutProps) {
  return (
    <div className="my-10 rounded-xl border border-brand-200 bg-brand-50 p-6 shadow-sm">
      {title && <h3 className="mb-2 text-lg font-semibold text-brand-800">{title}</h3>}
      <p className="mb-4 text-slate-700">{text}</p>
      {buttonText && buttonHref && (
        <a href={buttonHref} className="btn btn-primary !px-4 !py-2 !text-sm">
          {buttonText}
        </a>
      )}
    </div>
  );
}
