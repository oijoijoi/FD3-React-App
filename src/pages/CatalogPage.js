import React from 'react';
import Catalog from '../components/Catalog/Catalog';
import {default as isoFetch} from 'isomorphic-fetch';

class CatalogPage extends React.PureComponent {
    constructor(props) {
        super(props);
        this.loadData();
    }

    state = {
        dataReady: false,
        data: null
      };
    
      fetchError = (errorMessage) => {
        console.error(errorMessage);
      };
    
      fetchSuccess = (loadedData) => {
        setTimeout(()=>{
        this.setState({
          dataReady:true,
          data:JSON.parse(loadedData.result)
        });
        },3000);
      };
    
      loadData = () => {
        let sp = new URLSearchParams();
        sp.append('f', 'READ');
        sp.append('n', 'LOBANOV_SHOP_DATA');

        isoFetch("https://fe.it-academy.by/AjaxStringStorage2.php", {
            method: 'post',
            headers: {
                "Accept": "application/json",
            },
            body: sp
        })
            .then( (response) => { // response - HTTP-ответ
                if (!response.ok) {
                    let Err=new Error("fetch error " + response.status);
                    Err.userMessage="Ошибка связи";
                    throw Err; // дальше по цепочке пойдёт отвергнутый промис
                }
                else
                    return response.json(); // дальше по цепочке пойдёт промис с пришедшими по сети данными
            })
            .then( (data) => {
                try {
                    this.fetchSuccess(data); // передаём полезные данные в fetchSuccess, дальше по цепочке пойдёт успешный пустой промис
                }
                catch ( error ){
                    this.fetchError(error.message); // если что-то пошло не так - дальше по цепочке пойдёт отвергнутый промис
                }
            })
            .catch( (error) => {
                this.fetchError(error.userMessage||error.message);
            })
        ;
    
      };

    render() {
        if ( !this.state.dataReady )
            return <div className="spinner"></div>;

        return (
            <Catalog categories={JSON.parse(localStorage.catalogSections)} goods={this.state.data} />
        )
    }
}

export default CatalogPage;