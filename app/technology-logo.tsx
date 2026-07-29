type TechnologyLogoProps = {
  name: 'arduino' | 'typescript' | 'rust'
}

type FeatureIconProps = {
  name: 'map' | 'ota' | 'realtime' | 'api'
}

export function TechnologyLogo({ name }: TechnologyLogoProps) {
  return (
    <img
      alt=""
      aria-hidden="true"
      className="docs-technology-logo"
      height="24"
      src={`/images/technology/${name}.svg`}
      width="24"
    />
  )
}

export function FeatureIcon({ name }: FeatureIconProps) {
  const paths = {
    map: (
      <>
        <path d="M9 18 3.8 20.6A.55.55 0 0 1 3 20.1V6.3c0-.2.1-.4.3-.5L9 3l6 3 5.2-2.6a.55.55 0 0 1 .8.5v13.8c0 .2-.1.4-.3.5L15 21l-6-3Z" />
        <path d="M9 3v15m6-12v15" />
      </>
    ),
    ota: (
      <>
        <path d="M7 18.5H5.5a3.5 3.5 0 0 1-.6-6.95A7 7 0 0 1 18.5 9.5v.25A4.25 4.25 0 0 1 18 18.22" />
        <path d="M12 21V11m-3.5 3.5L12 11l3.5 3.5" />
      </>
    ),
    realtime: (
      <>
        <path d="M5.64 18.36a9 9 0 0 1 0-12.72m12.72 0a9 9 0 0 1 0 12.72" />
        <path d="M8.47 15.53a5 5 0 0 1 0-7.06m7.06 0a5 5 0 0 1 0 7.06" />
        <circle cx="12" cy="12" r="1.25" fill="currentColor" stroke="none" />
      </>
    ),
    api: (
      <>
        <path d="m8.5 8-4 4 4 4m7-8 4 4-4 4M14 5l-4 14" />
      </>
    )
  } satisfies Record<FeatureIconProps['name'], React.ReactNode>

  return (
    <svg
      aria-hidden="true"
      className="docs-feature-symbol"
      fill="none"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.65">
        {paths[name]}
      </g>
    </svg>
  )
}
