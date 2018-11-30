import React from 'react';
// import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';

import GoodsListItem from '../GoodsListItem/GoodsListItem';
import './Catalog.css';

class Catalog extends React.Component {

    static propTypes = {
        categories: PropTypes.array,
        goods: PropTypes.arrayOf(
            PropTypes.shape({
                id: PropTypes.string.isRequired,
                name: PropTypes.string.isRequired,
                desc: PropTypes.string,
                image: PropTypes.string,
                price: PropTypes.string.isRequired,
                category: PropTypes.string,
            }),
        ),
    };

    state = {
        categories: this.props.categories,
        goods: this.props.goods,
        page: 1,
        pageLimit: 12,
        catTitles: ['Двигатель','Электрика','Подвеска','Тормоза','Салон','Кузов'],
        selectedCat: null,
    };

    pageChange = (EO) => {
        this.setState({page: EO.target.id})
    };
    pagePrew = () => {
        let page = this.state.page;
        if (page > 1) {
            page--;
            this.setState({page:page});
        }
    }
    pageNext = (EO) => {
        let page = this.state.page;
        if (page < EO.target.previousElementSibling.id) {
            page++;
            this.setState({page:page});
        }
    }

    filterList = (EO) => {
        let selected = EO.target.id;
        if (this.state.selectedCat === selected) {
            this.setState({goods:this.props.goods, selectedCat: null});
            EO.target.classList.remove('categories__image__on');
            return;
        }

        let a =EO.target.parentElement;
        a.childNodes.forEach(element => element.classList.remove('categories__image__on'));

        let newArray = this.props.goods.filter(item => item.category === selected);
        this.setState({goods: newArray, selectedCat: selected, page: 1});
        EO.target.classList.add('categories__image__on');
    };

    render() {

        //Категории
        let categories = this.state.categories.map( item => {
            let imageUrl = require(`../../img/${item}.png`);
            return <div style={{ backgroundImage: `url(${imageUrl})` }} key={item} className="categories__image" id={item} onClick={this.filterList} >
                <div className="categories__title">
                </div>
            </div>
            }
        );
        
        //Товары на странице
        let startPoint = (this.state.page-1)*this.state.pageLimit;
        let endPoint = this.state.page*this.state.pageLimit;
        let goodsOnPage = this.state.goods.slice(startPoint,endPoint);
        let goodsList = goodsOnPage.map ( item => {
            return <GoodsListItem key={item.id} info={item} />
        });

        //Пагинатор
        let pagination = null;
        if (this.state.goods.length > this.state.pageLimit) {
            let pages = Math.ceil(this.state.goods.length/this.state.pageLimit);
            let paginator = [];
            paginator.push(<button onClick={this.pagePrew} className="pagination__button" key='prew'>&#11164;</button>);
            for (let i=0; i<pages; i++) {
                paginator.push(<button onClick={this.pageChange} key={i} id={i+1} className="pagination__button">{i+1}</button>)
            }
            paginator.push(<button onClick={this.pageNext} className="pagination__button" key='next'>&#11166;</button>)
            pagination = <div className="catalog__paginator">{paginator}</div>;
        } 

        return (
            <div className="catalog__wrapper">
                <h4 className="catalog__title">Выбор категории товаров</h4>
                <div className="catalog__categories">
                    {categories}
                </div>
                {pagination}
                <div className="catalog__goods-list">
                    {goodsList}
                </div>
                {pagination}
            </div>
        )
    }
}

export default Catalog;