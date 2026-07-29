export type FlowStep = {
  step: string
  title: string
  description: string
  chartDescription?: string
}

type MerchantFlowChartProps = {
  steps: FlowStep[]
}

const VIEW_WIDTH = 1000
const VIEW_HEIGHT = 320
const PATH_COLOR = '#1976d2'

const TOP_RAIL = 110
const BOTTOM_RAIL = 210
const MID_Y = 160
const END_X = 864

// Snake path — start and end both drop straight from centre rail
const FLOW_PATH = `
  M 24 ${MID_Y}
  V 126
  Q 24 ${TOP_RAIL} 40 ${TOP_RAIL}
  H 176
  Q 192 ${TOP_RAIL} 192 126
  V 154
  V 194
  Q 192 ${BOTTOM_RAIL} 208 ${BOTTOM_RAIL}
  H 344
  Q 360 ${BOTTOM_RAIL} 360 194
  V 154
  V 126
  Q 360 ${TOP_RAIL} 376 ${TOP_RAIL}
  H 512
  Q 528 ${TOP_RAIL} 528 126
  V 154
  V 194
  Q 528 ${BOTTOM_RAIL} 544 ${BOTTOM_RAIL}
  H 680
  Q 696 ${BOTTOM_RAIL} 696 194
  V 154
  V 126
  Q 696 ${TOP_RAIL} 712 ${TOP_RAIL}
  H 848
  Q 864 ${TOP_RAIL} 864 126
  V ${MID_Y}
`

const labelPositions = [
  { x: 10.8, y: 'top' as const },
  { x: 27.6, y: 'bottom' as const },
  { x: 44.4, y: 'top' as const },
  { x: 61.2, y: 'bottom' as const },
  { x: 78, y: 'top' as const },
]

const TOP_ZONE_HEIGHT = `${(((TOP_RAIL - 10) / VIEW_HEIGHT) * 100).toFixed(2)}%`
const BOTTOM_ZONE_HEIGHT = `${(((VIEW_HEIGHT - BOTTOM_RAIL - 10) / VIEW_HEIGHT) * 100).toFixed(2)}%`

function StepList({ steps }: MerchantFlowChartProps) {
  return (
    <ol className="space-y-4">
      {steps.map((item) => (
        <li
          key={item.step}
          className="rounded-2xl border border-easycube-border bg-white p-5 shadow-sm"
        >
          <div className="flex items-start gap-4">
            <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-easycube-blue text-sm font-bold text-white">
              {item.step}
            </span>
            <div>
              <h3 className="font-semibold text-easycube-navy">{item.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-easycube-text-secondary">
                {item.description}
              </p>
            </div>
          </div>
        </li>
      ))}
    </ol>
  )
}

export default function MerchantFlowChart({ steps }: MerchantFlowChartProps) {
  return (
    <>
      <div className="md:hidden">
        <StepList steps={steps} />
      </div>

      <div
        className="relative hidden md:block"
        style={{ aspectRatio: `${VIEW_WIDTH} / ${VIEW_HEIGHT}` }}
      >
        <svg
          viewBox={`0 0 ${VIEW_WIDTH} ${VIEW_HEIGHT}`}
          className="h-full w-full"
          aria-hidden
        >
          <defs>
            <marker
              id="flow-arrow-down"
              markerWidth="8"
              markerHeight="8"
              refX="4"
              refY="4"
              orient="auto"
            >
              <path d="M0 0 L8 4 L0 8 Z" fill={PATH_COLOR} />
            </marker>
            <marker
              id="flow-arrow-up"
              markerWidth="8"
              markerHeight="8"
              refX="4"
              refY="4"
              orient="auto"
            >
              <path d="M0 8 L8 4 L0 0 Z" fill={PATH_COLOR} />
            </marker>
          </defs>

          <path
            d={FLOW_PATH}
            fill="none"
            stroke={PATH_COLOR}
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
          />

          <circle cx="24" cy={MID_Y} r="10" fill={PATH_COLOR} />
          <circle cx={END_X} cy={MID_Y} r="10" fill={PATH_COLOR} />

          {[
            { x: 192, y1: 132, y2: 152, marker: 'flow-arrow-down' },
            { x: 360, y1: 172, y2: 132, marker: 'flow-arrow-up' },
            { x: 528, y1: 132, y2: 152, marker: 'flow-arrow-down' },
            { x: 696, y1: 172, y2: 132, marker: 'flow-arrow-up' },
          ].map((arrow) => (
            <line
              key={arrow.x}
              x1={arrow.x}
              y1={arrow.y1}
              x2={arrow.x}
              y2={arrow.y2}
              stroke={PATH_COLOR}
              strokeWidth="3"
              markerEnd={`url(#${arrow.marker})`}
            />
          ))}
        </svg>

        {steps.map((step, index) => {
          const position = labelPositions[index]
          if (!position) return null

          const text = step.chartDescription ?? step.description
          const isTop = position.y === 'top'

          return (
            <div
              key={step.step}
              className="absolute flex max-w-[17%] -translate-x-1/2 flex-col px-1 text-center"
              style={{
                left: `${position.x}%`,
                ...(isTop
                  ? {
                      top: 0,
                      height: TOP_ZONE_HEIGHT,
                      justifyContent: 'flex-start',
                    }
                  : {
                      bottom: 0,
                      height: BOTTOM_ZONE_HEIGHT,
                      justifyContent: 'flex-end',
                    }),
              }}
            >
              <p className="text-sm font-bold leading-snug text-easycube-blue lg:text-base">
                {step.title}
              </p>
              <p className="mt-1 text-xs leading-snug text-easycube-text-secondary lg:text-sm">
                {text}
              </p>
            </div>
          )
        })}
      </div>
    </>
  )
}
