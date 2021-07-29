import ReactDOM from 'react-dom';
import Popup from './Popup'
import Loading from './Loading'
import PopupSyaratPengguna from './PopupSyaratPengguna';
import PopupYoutube from '../bountypageComponents/popup/popupyoutube';
import PopupTwitter from '../bountypageComponents/popup/popuptwitter';
import PopupFacebook from '../bountypageComponents/popup/popupfacebook';
import PopupTelegram from '../bountypageComponents/popup/popuptelegram';
import Popuptranslations from '../bountypageComponents/popup/popuptranslations';
import PopupContentBlog from '../bountypageComponents/popup/popupcontentblog';
import PopupTiktok from '../bountypageComponents/popup/popuptiktok';
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
    popupTwitter: ({close}) => {
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
            <PopupTwitter close={close} />,
           document.body.appendChild(div)
        );
    },
    popupFacebook: ({close}) => {
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
            <PopupFacebook close={close} />,
           document.body.appendChild(div)
        );
    },
    popupTelegram: ({close}) => {
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
            <PopupTelegram close={close}/>,
           document.body.appendChild(div)
        );
    },
    popupTranslations: ({close}) => {
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
            <Popuptranslations close={close}/>,
           document.body.appendChild(div)
        );
    },
    popupContentblog: ({close}) => {
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
            <PopupContentBlog close={close}/>,
           document.body.appendChild(div)
        );
    },
    popupYoutube: ({close}) => {
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
            <PopupYoutube close={close}/>,
           document.body.appendChild(div)
        );
    },
    popupTiktok: ({close}) => {
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
            <PopupTiktok close={close}/>,
           document.body.appendChild(div)
        );
    },
}

export default index;