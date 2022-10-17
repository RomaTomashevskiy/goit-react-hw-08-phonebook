import './animation.css';

export const Animation = () => {
    return (
        <div className='box'>
            <div id='fish_box'>
                <div className='light'></div>
                <div id='fish'>
                    <div className='light_dongle'></div>
                    <div className='fin top'></div>
                    <div className='fin bottom'></div>
                    <div className='tail back'></div>
                    <div className='tail middle'></div>
                    <div className='teeth upper'></div>
                    <div className='teeth lower'></div>
                </div>
            </div>
        </div>
    );
};
