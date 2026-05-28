// components/AboutContent.tsx
import Link from "next/link";

type AboutContentProps = {
  isAboutPage?: boolean;
};

export default function AboutContent({ isAboutPage = false }: AboutContentProps) {
  return (
    <div className="heading-content ps-lg-4">
      <div className="heading-subtitle">About us company</div>

      <h2 className="heading-title">
        Better, Faster Boosts Your Website Traffic!
      </h2>

      <p>
        <b>
          We build and activate brands through cultural insight, strategic
          vision, and the power of emotion across every element of its expression.
        </b>
      </p>

      <p>
        Helping companies reach their financial and branding goals. Over the
        years, we have worked with Fortune 500s and brand-new startups. We help
        ambitious businesses like yours generate more profits by building
        awareness, driving web traffic.
      </p>

        {isAboutPage && (
        <>
            <p>
            Our team focuses on delivering measurable results through innovative
            strategies, data-driven decisions, and continuous optimization. We
            believe in long-term partnerships and sustainable growth for every
            client we work with.
            </p>
            <p>
            Our team focuses on delivering measurable results through innovative
            strategies, data-driven decisions, and continuous optimization. We
            believe in long-term partnerships and sustainable growth for every
            client we work with.
            </p>
        </>
        )}

      {!isAboutPage && (
        <Link className="btn-theme btn-large btn-transparent" href="/about">
          <span className="button-text">More about us</span>
          <span className="button-icon"></span>
        </Link>
      )}
    </div>
  );
}