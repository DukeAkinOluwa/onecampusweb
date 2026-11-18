
"use client";

type ArticleErrorProps = {
  error: Error & { digest?: string };
  reset: () => void;
};

export default function ArticleError({
  reset,
}: ArticleErrorProps) {
  return (
    <div className="container-page section-pad-tight">
      <p className="text-sm text-muted-foreground">
        This article could not be loaded. Try refreshing the page.
      </p>

      <button
        type="button"
        onClick={reset}
        className="btn-primary mt-4"
      >
        Try Again
      </button>
    </div>
  );
}