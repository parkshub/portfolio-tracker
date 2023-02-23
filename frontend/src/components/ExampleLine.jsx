import { ResponsiveLine } from '@nivo/line'

const MyResponsiveLine = ({data}) => (
    <ResponsiveLine
        data={data}
        margin={{ top: 30, right: 30, bottom: 50, left: 30 }}
        xScale={{ type: 'point' }}
        yScale={{
            type: 'linear',
            min: '0',
            max: '300', // create a variable to max and make that the max instead of auto
            stacked: true,
            reverse: false
        }}
        yFormat=" >-$.2f"
        curve="linear"
        axisTop={null}
        axisRight={null}
        axisBottom={{
            orient: 'bottom',
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 50,
            // legend: 'transportation',
            // legendOffset: 50,
            // legendPosition: 'middle'
        }}
        colors="#2196f3"
        axisLeft={{
            orient: 'left',
            tickSize: 0,
            tickPadding: 5,
            tickRotation: 0,
            tickValues: 5,
            legend: 'price($)',
            legendOffset: -40,
            legendPosition: 'middle'
        }}
        enableGridX={false}
        enablePoints={false}
        useMesh={true}
    />
)

export default MyResponsiveLine