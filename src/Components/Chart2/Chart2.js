import React, {Component} from 'react';
import { Bar, Line, Pie } from 'react-chartjs-2';
import axios from 'axios';
import '../../App.scss'

class Chart2 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            products: [],
            chartData: {
                labels: [],
                datasets: [
                    {
                        label: 'Sales',
                        data: [],
                        backgroundColor: ['rgba(255, 99, 132, 0.5)', 'rgb(207, 252, 255, 0.5)', 'rgb(170, 239, 223, 0.5)', 'rgba(158, 227, 125, 0.5)', 'rgba(99, 193, 50, 0.5)', 'rgba(53, 134, 0, 0.5)', 'rgba(42, 110, 0, 0.5)']
                    }
                ]
            }
        }
    }

    componentDidMount = () => {
        axios.get('/api/orderItemData')
        .then(res => {
            res.data.map((product, index) => {
                console.log(product.product_name)
                console.log(parseInt(product.occurences))
            this.setState({
                products: [...this.state.products, product],
                chartData: {
                    labels: [...this.state.chartData.labels, product.product_name],
                    datasets: [ {
                        data: [...this.state.chartData.datasets[0].data, parseInt(product.occurences)],
                        backgroundColor: [...this.state.chartData.datasets[0].backgroundColor]
                    } ]

                }
            })
            })
        })
    }

    static defaultProps = {
        displayTitle: true,
        displayLegend: true,
        legendPosition: 'right'
    }
    render() {
        // const mappedProducts = this.state.products.map((product, index) => {
        //     console.log(product)
        // })
        console.log(this.state.chartData.datasets[0].data)
        return(
            <div className='chart-container'>
                <div className='chart'>
                    <Pie
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

// res.data.map((product, index) => {
//     // console.log(product)
// this.setState({
//     products: product
// })
// })


// 'Peony', 'Rose', 'Wild Flower', 'Carnation', 'Cake Topper', 'Birthday'

// ...this.state.chartData.datasets[0].data, 

// 'rgba(255, 99, 132, 0.5)', 'rgb(207, 252, 255, 0.5)', 'rgb(170, 239, 223, 0.5)', 'rgba(158, 227, 125, 0.5)', 'rgba(99, 193, 50, 0.5)', 'rgba(53, 134, 0, 0.5)'