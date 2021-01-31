import React from 'react';

export default class IPhoneInstallPopup extends React.Component {
    state = {
        isShow: false
    };

    componentDidMount() {
        const isIos = /iphone/i.test(window.navigator.userAgent);
        const isStandalone = ('standalone' in window.navigator) && window.navigator.standalone;

        this.setState({isShow: isIos && !isStandalone});
    }

    render() {
        return <div style={{display: this.state.isShow ? 'block' : 'none'}}>
            <div>Установите приложение на свой iPhone: нажмите "Поделиться", а затем на экран "Домой"</div>
        </div>;
    }
}