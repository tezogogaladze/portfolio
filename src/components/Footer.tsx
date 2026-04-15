export default function Footer() {
  return (
    <footer className="max-w-md pb-16 text-sm text-slate-500 sm:pb-0">
      <p>
        Loosely designed in{" "}
        <a
          href="https://www.figma.com/"
          className="font-medium text-slate-400 hover:text-[color:var(--nav-hover-text)] focus-visible:text-[color:var(--nav-hover-text)]"
          target="_blank"
          rel="noopener noreferrer"
        >
          Figma
        </a>{" "}
        and coded in{" "}
        <a
          href="https://code.visualstudio.com/"
          className="font-medium text-slate-400 hover:text-[color:var(--nav-hover-text)] focus-visible:text-[color:var(--nav-hover-text)]"
          target="_blank"
          rel="noopener noreferrer"
        >
          Visual Studio Code
        </a>
        . Built with{" "}
        <a
          href="https://nextjs.org/"
          className="font-medium text-slate-400 hover:text-[color:var(--nav-hover-text)] focus-visible:text-[color:var(--nav-hover-text)]"
          target="_blank"
          rel="noopener noreferrer"
        >
          Next.js
        </a>{" "}
        and{" "}
        <a
          href="https://tailwindcss.com/"
          className="font-medium text-slate-400 hover:text-[color:var(--nav-hover-text)] focus-visible:text-[color:var(--nav-hover-text)]"
          target="_blank"
          rel="noopener noreferrer"
        >
          Tailwind CSS
        </a>
        , deployed with{" "}
        <a
          href="https://vercel.com/"
          className="font-medium text-slate-400 hover:text-[color:var(--nav-hover-text)] focus-visible:text-[color:var(--nav-hover-text)]"
          target="_blank"
          rel="noopener noreferrer"
        >
          Vercel
        </a>
        . All text is set in the{" "}
        <a
          href="https://rsms.me/inter/"
          className="font-medium text-slate-400 hover:text-[color:var(--nav-hover-text)] focus-visible:text-[color:var(--nav-hover-text)]"
          target="_blank"
          rel="noopener noreferrer"
        >
          Inter
        </a>{" "}
        typeface.
      </p>
    </footer>
  );
}
