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
    <div className="my-10 rounded-xl border border-orange-200 bg-orange-50 p-6 shadow-sm">
      {title && <h3 className="text-lg font-semibold text-orange-700 mb-2">{title}</h3>}
      <p className="text-gray-700 mb-4">{text}</p>
      {buttonText && buttonHref && (
        <a
          href={buttonHref}
          className="inline-flex items-center rounded-md bg-orange-600 px-4 py-2 text-sm font-medium text-white shadow hover:bg-orange-700"
        >
          {buttonText}
        </a>
      )}
    </div>
  );
}
