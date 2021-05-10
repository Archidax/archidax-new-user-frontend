import ReactDOM from 'react-dom';
import Popup from './Popup'
import Loading from './Loading'
import PopupSyaratPengguna from './PopupSyaratPengguna';
let index = {
    close: () => {
        document.body.style.height = "auto"
        document.body.style.overflow = 'auto'
        var popup = document.getElementById('pop-up')
        if(popup) popup.remove()
        var loading = document.getElementById('loading')
        if(loading) loading.remove()
    },
    showLoading: () => {
    
        var div = document.createElement('div');
        div.setAttribute("id", "loading")
        document.body.style.height = "100%"
        document.body.style.overflow = 'hidden'
        ReactDOM.render(
           <Loading  />,
           document.body.appendChild(div)
        );
    },
    fire: ({title, text, onClickOk, cancel}) => {
        document.body.style.height = "auto"
        document.body.style.overflow = 'auto'
        var popup = document.getElementById('pop-up')
        if(popup) popup.remove()
        var loading = document.getElementById('loading')
        if(loading) loading.remove()
        

        var div = document.createElement('div');
        div.setAttribute("id", "pop-up")
        document.body.style.height = "100%"
        document.body.style.overflow = 'hidden'
        ReactDOM.render(
           <Popup title={title} onClickOk={onClickOk} text={text} cancel={cancel} />,
           document.body.appendChild(div)
        );
    },
    syaratPengguna: ({title, text, onClickOk, cancel, content}) => {
        document.body.style.height = "auto"
        document.body.style.overflow = 'auto'
        var popup = document.getElementById('pop-up')
        if(popup) popup.remove()
        var loading = document.getElementById('loading')
        if(loading) loading.remove()
        

        var div = document.createElement('div');
        div.setAttribute("id", "pop-up")
        document.body.style.height = "100%"
        document.body.style.overflow = 'hidden'
        ReactDOM.render(
           <PopupSyaratPengguna title={title} onClickOk={onClickOk} text={text} cancel={cancel} content={content}/>,
           document.body.appendChild(div)
        );
    },
    
}

export default index;