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
const H_PAD = 80
const START_X = H_PAD
const END_X = VIEW_WIDTH - H_PAD

// Snake path — symmetric horizontal padding in viewBox
const FLOW_PATH = `
  M ${START_X} ${MID_Y}
  V 126
  Q ${START_X} ${TOP_RAIL} ${START_X + 16} ${TOP_RAIL}
  H ${START_X + 152}
  Q ${START_X + 168} ${TOP_RAIL} ${START_X + 168} 126
  V 154
  V 194
  Q ${START_X + 168} ${BOTTOM_RAIL} ${START_X + 184} ${BOTTOM_RAIL}
  H ${START_X + 320}
  Q ${START_X + 336} ${BOTTOM_RAIL} ${START_X + 336} 194
  V 154
  V 126
  Q ${START_X + 336} ${TOP_RAIL} ${START_X + 352} ${TOP_RAIL}
  H ${START_X + 488}
  Q ${START_X + 504} ${TOP_RAIL} ${START_X + 504} 126
  V 154
  V 194
  Q ${START_X + 504} ${BOTTOM_RAIL} ${START_X + 520} ${BOTTOM_RAIL}
  H ${START_X + 656}
  Q ${START_X + 672} ${BOTTOM_RAIL} ${START_X + 672} 194
  V 154
  V 126
  Q ${START_X + 672} ${TOP_RAIL} ${START_X + 688} ${TOP_RAIL}
  H ${END_X - 16}
  Q ${END_X} ${TOP_RAIL} ${END_X} 126
  V ${MID_Y}
`

// Segment centres as % of viewBox width
const labelPositions = [
  { x: 16.4, y: 'top' as const },
  { x: 33.2, y: 'bottom' as const },
  { x: 50, y: 'top' as const },
  { x: 66.8, y: 'bottom' as const },
  { x: 83.6, y: 'top' as const },
]

const ARROW_X = [START_X + 168, START_X + 336, START_X + 504, START_X + 672]

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
        className="relative mx-auto hidden max-w-5xl px-2 md:block"
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

          <circle cx={START_X} cy={MID_Y} r="10" fill={PATH_COLOR} />
          <circle cx={END_X} cy={MID_Y} r="10" fill={PATH_COLOR} />

          {[
            { x: ARROW_X[0], y1: 132, y2: 152, marker: 'flow-arrow-down' },
            { x: ARROW_X[1], y1: 172, y2: 132, marker: 'flow-arrow-up' },
            { x: ARROW_X[2], y1: 132, y2: 152, marker: 'flow-arrow-down' },
            { x: ARROW_X[3], y1: 172, y2: 132, marker: 'flow-arrow-up' },
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
