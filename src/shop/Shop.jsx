import React, { useState } from 'react'
import PageHeader from '../components/PageHeader';
import Data from '../products.json'
import ProductCarts from './ProductCarts';
import Pagination from './Pagination'
import Search from './Search';
import ShopCategory from './ShopCategory';


const Shop = () => {

    const showResult = "Showing 01 -12  of 139 results";

    const [GridList, setGridList] = useState(true);

    const [products, setProducts] = useState(Data);

    // pagination

    const [currentPage, setCurrentPage] = useState(1);
    const productsPerPage = 12;
    const indexOfLastPage = currentPage * productsPerPage;
    const indexOfFirstPage = indexOfLastPage - productsPerPage;
    const currentProduct = products.slice(indexOfFirstPage, indexOfLastPage);

    // funtion to change current page

    const paginate = (pageNumber) => {
        setCurrentPage(pageNumber);
    }

    // filter product based on category

    const [selectedCategory, setSelectedCategory] = useState("All");
    const menuItems = [...new Set(Data.map((Val)=>Val.category))]

    const filterItem = (curcat)=> {
        const newItem = Data.filter((newVal)=>{
            return newVal.category=== curcat;
        })

        setSelectedCategory(curcat);
        setProducts(newItem);
    }

    return (
        <div>
            <PageHeader title={"Shop "} curPage={"Shop"} />

            <div className="shop-page padding-tb">


                <div className="container">
                    <div className="row justify-content-center">

                        <div className="col-lg-8">
                            <article>
                                <div className="shop-title d-flex flex-wrap justify-content-between">
                                    <p>{showResult}</p>
                                    <div className={`product-view-mode ${GridList ? "gridActive" : "listActive"}`}>

                                        <a className='grid' onClick={() => setGridList(!GridList)}>

                                            <i className='icofont-ghost'></i>
                                        </a>
                                        <a className='list' onClick={() => setGridList(!GridList)}>

                                            <i className='icofont-listine-dots'></i>
                                        </a>


                                    </div>

                                </div>

                                <div>
                                    <ProductCarts GridList={GridList} products={products} />

                                </div>
                                <Pagination productsPerPage={productsPerPage}
                                    totalProducts={products.length}
                                    paginate={paginate}
                                    activePage={currentPage} />
                            </article>
                        </div>
                        <div className="col-lg-4">
                            <aside>
                                <Search products={products} GridList={GridList} />
                                <ShopCategory 
                                filterItem={filterItem}
                                setItem={setProducts}
                                menuItems={menuItems}
                                setProducts={setProducts}
                                selectedCategory={selectedCategory}
                                />
                            </aside>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Shop
