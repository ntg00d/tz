import {useState, useEffect} from 'react'
import {useFetchProductsQuery} from './store/api/products'
import {IProduct} from './models/api/product'
import Chart from './components/Chart'
import Dropdown from './components/Dropdown'
import Spinner from './components/Spinner'

const App = () => {
  const categories = ['smartphones', 'laptops']
  const [category, setCategory] = useState(categories[0])

  const {data, isSuccess, isLoading} = useFetchProductsQuery()
  const [products, setProducts] = useState<IProduct[]>([])

  useEffect(() => {
    isSuccess && setProducts(data.filter(el => (
      el.category === category
    )))
  }, [data, category])

  return (
    <div className="App">
      {isSuccess && <>
        <Dropdown
          categories={categories}
          category={category}
          categoryHandle={(el) => setCategory(el)}
        />

        <Chart products={products}/>
      </>}

      {isLoading && <Spinner/>}
    </div>
  )
}

export default App