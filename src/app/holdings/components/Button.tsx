import clsx from 'clsx'
import Link from 'next/link'

type ButtonProps =
  | React.ComponentPropsWithoutRef<typeof Link>
  | (React.ComponentPropsWithoutRef<'button'> & { href?: undefined })

export function Button({ className, children, ...props }: ButtonProps) {
  className = clsx(
    'inline-flex justify-center group bg-primary-600 py-3 px-5 text-base font-semibold text-white hover:bg-primary-500 focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-500 active:text-white/70 -translate-x-6',
    className,
  )

  return typeof props.href === 'undefined' ? (
    <div className="relative">
      <button className={className}>
        <ButtonLeft className="text-primary-600 group-hover:text-primary-500 absolute left-px top-0 h-full -translate-x-full " />
        {children}
        <ButtonLeft className="text-primary-600 group-hover:text-primary-500 absolute right-px top-0 h-full translate-x-full rotate-180" />
      </button>
    </div>
  ) : (
    <div className="relative">
      <Link href={props.href} className={className}>
        <ButtonLeft className="text-primary-600 group-hover:text-primary-500 absolute left-px top-0 h-full -translate-x-full" />
        {children}
        <ButtonLeft className="text-primary-600 group-hover:text-primary-500 absolute right-px top-0 h-full translate-x-full rotate-180" />
      </Link>
    </div>
  )
}

function ButtonLeft(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg
      viewBox="0 0 61 117"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <mask
        id="mask0_405_89"
        style={{ maskType: 'alpha' }}
        maskUnits="userSpaceOnUse"
        x="0"
        y="0"
        width="61"
        height="117"
      >
        <rect width="61" height="117" fill="#D9D9D9" />
      </mask>
      <g mask="url(#mask0_405_89)">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M57.5 0H42.875V14.2866L28.25 14.2866L28.25 29.25H13.625L13.625 44.0802H-1V58.7052V73.3302H13.625L13.625 87.75H28.25L28.25 87.8076L28.25 102.433H43.287V117H57.9119H57.912H72.5369V102.433H86.75V87.8076V87.75H101.375V73.125H116V58.5V43.875H101.375V29.25H86.75V14.2866L72.125 14.2866V0H57.5Z"
          fill="currentColor"
        />
        <rect
          opacity="0.63"
          x="28.662"
          y="102.375"
          width="14.625"
          height="14.625"
          fill="currentColor"
        />
        <rect
          opacity="0.86"
          x="13.625"
          y="87.75"
          width="14.625"
          height="14.625"
          fill="currentColor"
        />
        <rect
          opacity="0.86"
          x="13.625"
          y="14.625"
          width="14.625"
          height="14.625"
          fill="currentColor"
        />
        <rect
          opacity="0.63"
          x="28.25"
          width="14.625"
          height="14.625"
          fill="currentColor"
        />
        <rect
          opacity="0.63"
          x="13.625"
          y="29.4552"
          width="14.625"
          height="14.625"
          transform="rotate(90 13.625 29.4552)"
          fill="currentColor"
        />
        <rect
          opacity="0.63"
          x="13.625"
          y="73.125"
          width="14.625"
          height="14.625"
          transform="rotate(90 13.625 73.125)"
          fill="currentColor"
        />
      </g>
    </svg>
  )
}
