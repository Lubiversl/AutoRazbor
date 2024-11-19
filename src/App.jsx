  import React from 'react'
  import './index.css'
  import Header from './Components/Header'
  import Footer from './Components/Footer'
  import Items from './Components/Items'
  import Categories from './Components/Categories'

  class App extends React.Component  {
    constructor(props) { 
      super(props)
      this.state = {
        currentItems: [],
        orders: [],
        items: [

          {
            id: 1,
            title:'e34',
            image:'./img/bmw.jpg',
            desc: "works",
            category:"BMW",
            price:"1200.00",
            count: "0"
          },
          {
            id:2,
            title:'w210',
            image:'./img/w210.jfif',
            desc: "works",
            category:"MERCEDES",
            price:"2400.37",
            count: "0"
            },
            {
              id:3,
              title:'VW',
              image:'./img/vw.jfif',
              desc: "works",
              category:"VOLKSWAGEN",
              price:"4400.27",
              count: "0"
              },
              {
                id:4,
                title:'x5e70',
                image:'./img/bmw1.jfif',
                desc: "works",
                category:"BMW",
                price:"11000.45",
                count: "0"
              },
              {
                id:5,
                title:'e46',
                image:'./img/bmw2.jpg',
                desc: "not works",
                category:"BMW",
                price:"1700.18",
                count: "0"
              },
              {
                id:6,
                title:'e60',
                image:'./img/bmw3.jpg',
                desc: "not works",
                category:"BMW",
                price:"8900.18",
                count: "0"
              },
              {
              id:7,
              title:'w124',
              image:'./img/merc1.jpg',
              desc: "works",
              category:"MERCEDES",
              price:"1450.29",
              count: "0"
              },
              {
                id:8,
                title:'w210',
                image:'./img/merc2.jpg',
                desc: "not works",
                category:"MERCEDES",
                price:"1390.89",
                count: "0"
              },
              {
                id:9,
                title:'220',
                image:'./img/merc3.jpg',
                desc: "not works",
                category:"MERCEDES",
                price:"33400.11",
                count: "0"
              },
              {
                id:10,
                title:'Polo',
                image:'./img/волк1.jfif',
                desc: "works",
                category:"VOLKSWAGEN",
                price:"9000.55",
                count: "0"
              },
              {
                id:11,
                title:'Polo',
                image:'./img/волк4.jpg',
                desc: "works",
                category:"VOLKSWAGEN",
                price:"6500.50",
                count: "0"
              },
              {
                id:12,
                title:'A4',
                image:'./img/ауди1.jfif',
                desc: "not works",
                category:"AUDI",
                price:"3300.54",
                count: "0"
              },
              {
                id:13,
                title:'Q7',
                image:'./img/ауди2.eangrA5nFiXr4x6huvQYMqvZiwsg8B8ENrhLRWqoxqs',
                desc: "works",
                category:"AUDI",
                price:"14000.65",
                count: "0"
              },
              {
                id:14,
                title:'100',
                image:'./img/ауди3.jpeg',
                desc: "works",
                category:"AUDI",
                price:"1000.11",
                count: "0"
              },
              {
                id:15,
                title:'Passat',
                image:'./img/волк5.jfif',
                desc: "works",
                category:"VOLKSWAGEN",
                price:"7000.98",
                count: "0"
              },
              {
                id:16,
                title:'s200',
                image:'./img/мекс.jpg',
                desc: "not works",
                category:"MERCEDES",
                price:"19000.13",
                count: "0"
              },
              {id:17,
              title:'e46',
              image:'./img/бмв6.jpg',
              desc: "works",
              category:"BMW",
              price:"2900.37",
              count: "0"
              },
              { id:18,
                title:'Golf 2',
                image:'./img/гольф.jfif',
                desc: "not works",
                category:"VOLKSWAGEN",
                price:"700.37",
                count: "0"
                },
                {
                  id:19,
                  title:'911',
                  image:'./img/порш.jpg',
                  desc: "works",
                  category:"PORSHE",
                  price:"53000.05",
                  count: "0"
                },
                {
                  id:20,
                  title:'Cayen',
                  image:'./img/порш1.jpg',
                  desc: "not works",
                  category:"PORSHE",
                  price:"36000.37",
                  count: "0"
                },
                {
                  id:21,
                  title:'100',
                  image:'./img/ауди10.jfif',
                  desc: "not works",
                  category:"AUDI",
                  price:"2500.55",
                  count: "0"
                },
     
      ]
    }
    this.state.currentItems=this.state.items
    this.addToOrder = this.addToOrder.bind(this)
    this.deleteOrder = this.deleteOrder.bind(this)
    this.chooseCategory = this.chooseCategory.bind(this)
    this.incrementCount = this.incrementCount.bind(this)
  }
  render(props)
   {
        return (
      <div className='Wrapper'>
        <Header orders = {this.state.orders} onDelete = {this.deleteOrder} onCount = {this.incrementCount}/>
        <Categories chooseCategory = {this.chooseCategory}/>
        <Items items = {this.state.currentItems} onAdd = {this.addToOrder}/>

        <Footer />

      </div>
    )
  }

  ////////////////////////////////

  incrementCount = (id) => {
    this.setState((prevState) => ({
        items: prevState.orders.map(item => 
            item.id === id ? { ...item, count: item.count + 1 } : item
        )
    }));
}


  ///////////////////////////////

  deleteOrder(id) {
    this.setState({ orders: this.state.orders.filter(el =>
      el.id !== id
    )})
  }
  addToOrder(item){
    let arrayId = false
    this.state.orders.map(el => {
      if(el.id === item.id) {
        arrayId = True
      }
    })
    this.setState({orders: [...this.state.orders,item]})
  }
  chooseCategory(category) {
    if (category ==='all') {
      this.setState({currentItems:this.state.items})
      return
    }
    this.setState({currentItems:this.state.items.filter(el => el.category === category)})
  }
  componentDidMount() {
    const orders = JSON.parse(localStorage.getItem('orders'));
    if (orders) {
      this.setState({ orders });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if(prevState.orders !== this.state.orders) {
      localStorage.setItem('orders', JSON.stringify(this.state.orders));
    }
  }
}
  
    export default App

    