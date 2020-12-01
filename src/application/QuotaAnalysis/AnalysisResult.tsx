import React, { useEffect, useRef } from 'react'
import { Chart } from '@antv/g2';

// const data = [
//     { type: '未知', value: 654, percent: 0.02 },
//     { type: '17 岁以下', value: 654, percent: 0.02 },
//     { type: '18-24 岁', value: 4400, percent: 0.2 },
//     { type: '25-29 岁', value: 5300, percent: 0.24 },
//     { type: '30-39 岁', value: 6200, percent: 0.28 },
//     { type: '40-49 岁', value: 3300, percent: 0.14 },
//     { type: '50 岁以上', value: 1500, percent: 0.06 },
// ];

const AnalysisResult = (props) => {
    const { data = [], group = [], quota = [] } = props
    // const axis = group.length > 1 ? 'mutiple' : 'single'
    const axis = group[0]
    const chart = useRef(null)
    const r = []
    data.forEach(item => {
        quota.forEach(q => {
            r.push({
                name: q,
                [axis]: item[axis],
                value: Number(item[q]) || 0
            })
        })
    })

    const renderChart = () => {
        if (chart.current === null) {
            chart.current = new Chart({
                container: 'chart_result',
                autoFit: true,
                height: 500,
                padding: [50, 20, 50, 20],
            });
        }

        chart.current.data(r);
        // chart.scale('value', {
        //     alias: 'ddd',
        // });

        // chart.axis(axis, {
        //     tickLine: {
        //         alignTick: false,
        //     },
        // });
        // chart.axis('value', false);
        // chart.scale('value', {
        //     nice: true,
        // });
        chart.current.tooltip({
            showMarkers: false,
        });

        chart.current.interval().position(`${axis}*value`).color('name').adjust([
            {
                type: 'dodge',
                marginRatio: 0,
            },
        ]);
        chart.current.interaction('active-region');

        // 添加文本标注
        // r.forEach((item) => {
        //     chart
        //         .annotation()
        //         .text({
        //             position: [item.name, item.value],
        //             content: item.value,
        //             style: {
        //                 textAlign: 'center',
        //             },
        //             offsetY: -30,
        //         })
        //         .text({
        //             position: [item.name, item.value],
        //             content: (item.percent * 100).toFixed(0) + '%',
        //             style: {
        //                 textAlign: 'center',
        //             },
        //             offsetY: -12,
        //         });
        // });
        chart.current.render();
    }

    useEffect(() => {
        renderChart()
    }, [props.data])
    return <div id="chart_result"></div>
}

export default AnalysisResult