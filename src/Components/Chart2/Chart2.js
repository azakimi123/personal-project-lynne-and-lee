import React, {Component} from 'react';
import { Bar, Line, Pie } from 'react-chartjs-2';
import '../../App.scss'

class Chart2 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            chartData: {
                labels: ['Peony', 'Rose', 'Wild Flower', 'Carnation', 'Cake Topper', 'Birthday'],
                datasets: [
                    {
                        label: 'Sales',
                        data: [4, 5, 1, 8, 2, 2],
                        backgroundColor: ['rgba(255, 99, 132, 0.5)', 'rgb(207, 252, 255, 0.5)', 'rgb(170, 239, 223, 0.5)', 'rgba(158, 227, 125, 0.5)', 'rgba(99, 193, 50, 0.5)', 'rgba(53, 134, 0, 0.5)',]
                    }
                ]
            }
        }
    }

    static defaultProps = {
        displayTitle: true,
        displayLegend: true,
        legendPosition: 'right'
    }
    render() {
        return(
            <div className='chart-container'>
                <div className='chart'>
                    <Bar
                        data={this.state.chartData}
                        width={100}
                        height={50}
                        options={{
                            title: {
                                display: true,
                                text: 'Lynne and Lee Sales',
                                fontSize: 25
                            },
                            legend: {
                                display: true,
                                position: 'right',
                            }
                        }}
                    />
                </div>
            </div>
        )
    }
}

export default Chart2;