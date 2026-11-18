import { Linkedin } from "@/components/site/linkedin-icon";

/**
 * Reusable leadership profile card. Renders only the fields supplied —
 * biography and social slots appear once approved content is available.
 */
export interface ProfileData {
  photo?: string;
  photoAlt?: string;
  fullName?: string;
  jobTitle?: string;
  biography?: string;
  experience?: string;
  responsibilities?: string;
  profileUrl?: string;
}

export function ProfileCard({ profile }: { profile: ProfileData }) {
  return (
    <article className="card-base card-accent flex flex-col">
      <div className="aspect-[3/4] overflow-hidden rounded-xl bg-secondary">
        {profile.photo ? (
          <img
            src={profile.photo}
            alt={profile.photoAlt ?? profile.fullName ?? ""}
            loading="lazy"
            width={1024}
            height={1376}
            className="size-full object-cover"
          />
        ) : null}
      </div>
      <h3 className="title-card mt-5">{profile.fullName}</h3>
      {profile.jobTitle && (
        <p className="mt-1 text-sm font-semibold text-primary">{profile.jobTitle}</p>
      )}
      {profile.biography && (
        <p className="mt-3 text-sm leading-relaxed text-foreground">{profile.biography}</p>
      )}
      {profile.experience && (
        <p className="mt-2 text-sm leading-relaxed text-foreground">
          <span className="font-semibold text-heading">Experience: </span>
          {profile.experience}
        </p>
      )}
      {profile.responsibilities && (
        <p className="mt-2 text-sm leading-relaxed text-foreground">
          <span className="font-semibold text-heading">Responsibilities: </span>
          {profile.responsibilities}
        </p>
      )}
      {profile.profileUrl && (
        <a
          href={profile.profileUrl}
          rel="noopener noreferrer"
          aria-label={`LinkedIn profile of ${profile.fullName ?? "team member"}`}
          className="mt-4 inline-flex size-9 items-center justify-center rounded-lg border border-border-interactive bg-card text-primary transition-colors duration-150 hover:bg-secondary"
        >
          <Linkedin className="size-4" aria-hidden="true" />
        </a>
      )}
    </article>
  );
}
