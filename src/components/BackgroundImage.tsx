import clsx from 'clsx'

export function BackgroundImage({
  className,
  position = 'left',
}: {
  className?: string
  position?: 'left' | 'right'
}) {
  return (
    <div
      className={clsx(
        'bg-primary-50 absolute inset-0 overflow-hidden',
        className,
      )}
    >
      <svg
        className={clsx(
          'absolute aspect-square h-full opacity-50',
          position === 'right' ? 'left-[85%]' : 'right-[85%]',
        )}
        viewBox="0 0 117 117"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M58.5 0H43.875V14.2866L29.25 14.2866L29.25 29.25H14.625L14.625 44.0802H0V58.7052V73.3302H14.625L14.625 87.75H29.25L29.25 87.8076L29.25 102.433H44.287V117H58.9119H58.912H73.5369V102.433H87.75V87.8076V87.75H102.375V73.125H117V58.5V43.875H102.375V29.25H87.75V14.2866L73.125 14.2866V0H58.5Z"
          fill="#00EC97"
        />
        <rect
          opacity="0.63"
          x="29.662"
          y="102.375"
          width="14.625"
          height="14.625"
          fill="#00EC97"
        />
        <rect
          opacity="0.86"
          x="14.625"
          y="87.75"
          width="14.625"
          height="14.625"
          fill="#00EC97"
        />
        <rect
          opacity="0.86"
          x="14.625"
          y="14.625"
          width="14.625"
          height="14.625"
          fill="#00EC97"
        />
        <rect
          opacity="0.86"
          x="87.75"
          y="87.75"
          width="14.625"
          height="14.625"
          fill="#00EC97"
        />
        <rect
          opacity="0.63"
          x="73.537"
          y="102.375"
          width="14.625"
          height="14.625"
          fill="#00EC97"
        />
        <rect
          opacity="0.63"
          x="29.25"
          width="14.625"
          height="14.625"
          fill="#00EC97"
        />
        <rect
          opacity="0.63"
          x="73.125"
          width="14.625"
          height="14.625"
          fill="#00EC97"
        />
        <rect
          opacity="0.63"
          x="14.625"
          y="29.4553"
          width="14.625"
          height="14.625"
          transform="rotate(90 14.625 29.4553)"
          fill="#00EC97"
        />
        <rect
          opacity="0.63"
          x="14.625"
          y="73.125"
          width="14.625"
          height="14.625"
          transform="rotate(90 14.625 73.125)"
          fill="#00EC97"
        />
        <rect
          opacity="0.63"
          x="117"
          y="29.25"
          width="14.625"
          height="14.625"
          transform="rotate(90 117 29.25)"
          fill="#00EC97"
        />
        <rect
          opacity="0.63"
          x="117"
          y="73.125"
          width="14.625"
          height="14.625"
          transform="rotate(90 117 73.125)"
          fill="#00EC97"
        />
        <rect
          opacity="0.86"
          x="87.75"
          y="14.625"
          width="14.625"
          height="14.625"
          fill="#00EC97"
        />
      </svg>
      <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-white" />
      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-white" />
    </div>
  )
}
